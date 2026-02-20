//屠宰场

ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;

    mme.machine_recipe("mmr:t1.slaughter_factory",100)
        .width(150)
        .height(180)
        .requireEnergyPerTick(64)
        .requireFunctionEachTick("_sff")
})
let _tick=0;

/**
 * @type $Entity
 */
let _player;
MMREvents.recipeFunction("_sff", e => {
    const machine = e.machine;
    const tile = e.getTile();
    const pos = tile.getBlockPos().below(5);
    const level = tile.getLevel();
    let rd=Utils.newRandom(pos.getZ() + Date.now());
    let mobs = [
            'minecraft:zombie',
            'minecraft:skeleton',
            'minecraft:creeper',
            'minecraft:spider'//TODO 支持末影人，后续fix
    ];
    let randomValue = mobs[rd.nextInt(mobs.length)];

    const spawn = level.createEntity(randomValue);
    spawn.setPosition(pos.getX(),pos.getY(),pos.getZ());
    spawn.mergeNbt({ NoAI: true });
    spawn.spawn();

    //得到最近的玩家
    if(_player === undefined){
        let entitiesTotal = level.getEntities()
        entitiesTotal.forEach(cur =>{
            if(cur.isPlayer()){
                _player = cur;
            }
        })
    }

    _tick++;
    if(_tick==20){
        _tick=0;
        let entities2 = level.getEntities()
                    .filterDistance(pos.getX(),pos.getY(),pos.getZ(),10)
        entities2.forEach(cur =>{
            //console.log('[SFF] logging a type name, '+cur.type);
            if(mobs.includes(cur.type)){
                //console.log('[SFF] killed');
                cur.kill();
            }
            if(cur.item !== null) {
                machine.addItem(cur.item);
                cur.discard();
            }
        })
    }
    e.success();
})
