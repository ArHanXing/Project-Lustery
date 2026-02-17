ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;
    const ec = e.recipes.create;

    ec.pressing('kubejs:petri_dish','minecraft:glass');

    mme.machine_recipe("mmr:t1.biolab",100)
        .width(150)
        .height(180)
        .requireItem('kubejs:petri_dish',10,10)
        .requireFunctionOnStart("_biolab.primitive")
        .produceItem('kubejs:lustbio_petri_dish',0.0,100,10)
        .produceItem('kubejs:failed_lustbio_petri_dish',0.0,130,10)
        .id('t1.mmr.biolab.primitive')
})

MMREvents.recipeFunction("_biolab.primitive", e=>{
    const IOType = Java.loadClass('es.degrassi.mmreborn.common.machine.IOType');
    const tile=e.getTile();
    const level=tile.getLevel();
    const m=e.getMachine();
    const input=m.getFluidsStored(IOType.INPUT)
    const server=level.getServer();
    const seed=998244353

    /**
    * @param {number} cur 目前配方的值
    * @param {number} goal 需求配方的值
    * @param {number} prep 值的属性（0 - 自然，1 - 欲望， 2 - 异界） 
    * @returns {boolean} 是否匹配成功。
    */
    function _judgement(cur, goal, prep){
        let mapPrep = ['§a自然§r', '§d欲望§r', '§b异界§r']

        let curPrep = mapPrep[prep];
        if(cur < goal){
            server.tell(curPrep+"属性的浓度§b不足§r！")
            return false;
        }
        else if(cur === goal){
            return true;
        }
        else {
            server.tell(curPrep+"属性的浓度§b过高§r！")
            return false;
        }
    }
    //生成目标值
    let _rd = Utils.newRandom(seed);
    let lusN=_rd.nextInt(0,10);
    let natN=_rd.nextInt(0,10);
    let othN=_rd.nextInt(0,10);
    console.log('[BioLab] lusN='+lusN+' natN='+natN+' othN='+othN+' ');
    //检测对应的值
    let lus=0;
    let nat=0;
    let oth=0;
    //console.lof('[BioLab] 直接输出！'+input);
    input.forEach(cur =>{
        if(cur.getFluidType() === 'kubejs:lustery_powered_medium') {
            lus=Math.floor(cur.getAmount()/1000);
            console.log('[BioLab] current Lust='+lus);
        }
        else if(cur.getFluidType() === 'kubejs:others_powered_medium') {
            oth=Math.floor(cur.getAmount()/1000);
            console.log('[BioLab] current Others='+oth);
        }
        else if(cur.getFluidType() === 'kubejs:nature_powered_medium') {
            nat=Math.floor(cur.getAmount()/1000);
            console.log('[BioLab] current Natures='+nat);
        }
    })
    let flagN = _judgement(nat,natN,0);
    let flagL = _judgement(lus,lusN,1);
    let flagO = _judgement(oth,othN,2)
    if(flagN && flagL && flagO){
        m.addItem(Item.of('kubejs:lustbio_petri_dish'))
    }
    else m.addItem(Item.of('kubejs:failed_lustbio_petri_dish'))
    m.removeFluid('kubejs:lustery_powered_medium');
    m.removeFluid('kubejs:natural_powered_medium');
    m.removeFluid('kubejs:others_powered_medium');
    e.success();
}) 