ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;
    const ec = e.recipes.create;

    ec.pressing('kubejs:petri_dish','minecraft:glass');

    let incomp = 'kubejs:filter_casing'
    ec.sequenced_assembly(
        'kubejs:filter_casing',
        'kubejs:plascrete',
        [
            ec.deploying(incomp,[incomp,'create:iron_sheet']),
            ec.pressing(incomp,incomp),
            ec.cutting(incomp,incomp),
            ec.deploying(incomp,[incomp,'minecraft:paper']),
            ec.deploying(incomp,[incomp,'tfmg:screwdriver']).keepHeldItem()
        ]
    )
        .transitionalItem(incomp)
    
    incomp = 'kubejs:unfinished_controller'
    ec.sequenced_assembly(
        'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.biolab"]',
        'factory_blocks:sturdy',
        [
            ec.deploying(incomp,[incomp,'create:iron_sheet']),
            ec.deploying(incomp,[incomp,'kubejs:filter_casing']),
            ec.pressing(incomp,incomp),
            ec.deploying(incomp,[incomp,'kubejs:filter_casing']),
        ],
    )
        .transitionalItem(incomp)

    ec.mixing(
        [Fluid.of('kubejs:natural_powered_medium',10000)],
        [Fluid.of('mekanism:nutritional_paste',1000),Fluid.of('minecraft:water',8000),Ingredient.of("#minecraft:saplings",10)],
        100
    )

    ec.mixing(
        [Fluid.of('kubejs:others_powered_medium',10000)],
        [Fluid.of('mekanism:nutritional_paste',1000),Fluid.of('minecraft:water',8000),Item.of("ae2:sky_dust",5)],
        100
    )

    mme.machine_recipe("mmr:t1.primitive_fusion_array",100)
        .width(150)
        .height(180)
        .requireFluid(Fluid.of('minecraft:water',8000),10,10)
        .requireFluid(Fluid.of('mekanism:nutritional_paste',1000),10,30)
        .requireItem('kubejs:fusion_defective_lust_crystal',30,10)
        .produceFluid(Fluid.of('kubejs:lustery_powered_medium',10000),100,10)
        .id("t1.mmr.pfa.lustery_medium")


    mme.machine_recipe("mmr:t1.biolab",100)
        .width(150)
        .height(180)
        .requireItem('kubejs:petri_dish',10,10)
        .requireFunctionOnStart("_biolab.primitive")
        .produceItem('kubejs:lustbio_petri_dish',0.0,100,10)
        .produceItem('kubejs:failed_lustbio_petri_dish',0.0,130,10)
        .id('t1.mmr.biolab.primitive')

    mme.machine_recipe("mmr:t1.biolab",40)
        .width(150)
        .height(180)
        .requireItem('kubejs:lustbio_petri_dish',10,10)
        .produceItem('kubejs:basic_lust_bioware',100,10)
        .produceItem('kubejs:basic_lust_bioware',0.75,100,30)
        .produceItem('kubejs:basic_lust_bioware',0.5,120,10)
        .produceItem('kubejs:basic_lust_bioware',0.25,120,30)
        .produceItem('kubejs:petri_dish',100,50)
        .id('t1.mmr.biolab.bioware')
    
    ec.milling('mekanism:dust_quartz','minecraft:quartz')

})

MMREvents.recipeFunction("_biolab.primitive", e=>{
    const IOType = Java.loadClass('es.degrassi.mmreborn.common.machine.IOType');
    const tile=e.getTile();
    const level=tile.getLevel();
    const m=e.getMachine();
    const input=m.getFluidsStored(IOType.INPUT)
    const server=level.getServer();
    const seed=_SEED;

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
        console.log('[BioLab] current fluid is '+cur.getFluidType().toString()+' '+cur.amount.toString())
        if(cur.getFluidType() === 'kubejs:lustery_powered_medium') {
            lus+=Math.floor(cur.getAmount()/1000);
            console.log('[BioLab] current Lust='+lus);
        }
        if(cur.getFluidType() === 'kubejs:others_powered_medium') {
            oth+=Math.floor(cur.getAmount()/1000);
            console.log('[BioLab] current Others='+oth);
        }
        if(cur.getFluidType() === 'kubejs:natural_powered_medium') {
            nat+=Math.floor(cur.getAmount()/1000);
            console.log('[BioLab] current Natures='+nat);
        }
    })

    let base=1;//基础概率
    if(_judgement(nat,natN,0)) base+=3;
    if(_judgement(lus,lusN,1)) base+=3;
    if(_judgement(oth,othN,2)) base+=3;
    m.removeFluid('kubejs:lustery_powered_medium');
    m.removeFluid('kubejs:natural_powered_medium');
    m.removeFluid('kubejs:others_powered_medium');
    e.success();
}) 

