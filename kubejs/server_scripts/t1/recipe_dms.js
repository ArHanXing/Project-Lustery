let oreTypes = [
    'minecraft:iron_ore',
    'minecraft:coal_ore',
    'minecraft:copper_ore',
    'mekanism:tin_ore',
    'tfmg:nickel_ore',
    'mekanism:lead_ore',
    'minecraft:gold_ore',
    'minecraft:emerald_ore',
    'mekanism:osmium_ore',
    'mekanism:uranium_ore',
    'minecraft:diamond_ore',
    'minecraft:nether_quartz_ore',
    'create:zinc_ore',
    'tfmg:lithium_ore',
    'minecraft:redstone_ore',
    'minecraft:lapis_ore',
    'eidolon_repraised:silver_ore',
    'mekanism:fluorite_ore',
    'sgjourney:naquadah_ore'
];
ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;
    //你真的是 T1 机器吗？

    //随机模式
    mme.machine_recipe("mmr:t1.dimrift_mining_station",10)
        .width(150)
        .height(180)
        .requireEnergyPerTick(256)
        .priority(1)
        .requireItem('kubejs:pcir1',0.0,10,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .id("t1.mmr.dms.gorandom") //是的 这里有16个LootTable

    oreTypes.forEach(cur => {
        mme.machine_recipe("mmr:t1.dimrift_mining_station",100)
            .priority(2)
            .width(150)
            .height(180)
            .hide()
            .requireItem('kubejs:pcir2',0.0,10,10)
            .requireEnergyPerTick(1024)
            .requireItem(cur,30,10)
            .requireFunctionOnStart("dms_check",cur)
            .id("t1.mmr.dms.focus_"+cur);
        
        mme.machine_recipe("mmr:t1.dimrift_mining_station",100)
            .priority(2)
            .width(150)
            .height(180)
            .hide()
            .requireItem('kubejs:pcir3',0.0,10,10)
            .requireEnergyPerTick(1024)
            .requireItem(cur,0.0,30,10)
            .requireFunctionOnStart("dms_check",cur)
            .id("t1.mmr.dms.focus_"+cur+'nodropore');
            
    })

    mme.machine_recipe("mmr:t1.dimrift_mining_station",2)
        .priority(3)
        .hide()
        .requireItem('kubejs:pcir4')
        .requireFunctionOnStart("dms_check_stability")
        .id("dms_check_stability");
});

MMREvents.recipeFunction("dms_check",e=>{
    const m=e.getMachine();
    const tile=e.getTile();
    const server=tile.getLevel().getServer();
    const input=m.getFluidsStored(IOType.INPUT);
    let total=192;

    //从100到0
    let stability = tile.persistentData.getFloat("_pss_dms_stability");
    if(stability == null) stability=80;

    let fluidamount = 0;
    input.forEach(cur => {
        if(cur.getFluidType() == 'kubejs:focused_mine_fluid') fluidamount+=cur.getAmount()/1000;
    })
    if(fluidamount != 0){
        stability += fluidamount;

        server.tell("[§b维度裂隙§r采矿机] 检测到了 §b"+fluidamount+"§r 桶§a采矿聚焦保护液§r");
        server.tell("[§b维度裂隙§r采矿机] 稳定性已经更新为 §b"+stability);

        m.removeFluid(Fluid.of('kubejs:focused_mine_fluid',fluidamount*1000));
    }
    
    const cur=e.get(0);
    let stabrate = stability*0.01;

    m.addItem(Item.of(cur,stabrate*total));
    for(let i=1;i<=(1-stabrate)*total;i++){//我知道这是一个性能不优的办法
        let _rd = Utils.newRandom(i+Date.now());

        let choice = _rd.nextInt(1,10);
        if(choice <= 7){
            m.addItem(oreTypes[_rd.nextInt(0,oreTypes.length)]);
        }
        else{
            m.addItem('kubejs:dimfragment');
        }
    }

    stability -= 0.5;
    //server.tell("[dms DEBUG] 稳定性已经更新为 §b"+stability);
    tile.persistentData.remove("_pss_dms_stability");
    tile.persistentData.putFloat("_pss_dms_stability",stability);
    e.success();
})

MMREvents.recipeFunction("dms_check_stability",e=>{
    let tile = e.getTile();
    let stability = tile.persistentData.getFloat("_pss_dms_stability");
    let server = e.getTile().getLevel().getServer();
    if(stability===undefined) server.tell("[§b维度裂隙§r采矿机] 当前的稳定性为 undefined （这是一个Bug！）");
    else server.tell("[§b维度裂隙§r采矿机] 当前的稳定性为 "+stability);
    
    e.success();
})