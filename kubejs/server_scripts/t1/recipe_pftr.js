//坠。。？
ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;

    mme.machine_recipe("mmr:t1.primitive_falling_tower_ritual",100)
        .width(150)
        .height(180)
        .requireItem(Item.of('minecraft:cobblestone',64),10,10)
        .requireItem(Item.of('minecraft:cobblestone',64),30,10)
        .requireItem(Item.of('kubejs:fusion_normal_lust_crystal',64),10,30)
        .requireItem(Item.of('kubejs:fusion_normal_lust_crystal',64),30,30)
        .produceItem("minecraft:sand",0.0,100,10) // 占位用的 后面加
        .produceItem("create:limestone",0.0,100,30)
        .produceItem("minecraft:calcite",0.0,120,10)
        .produceItem("create:limestone",0.0,120,30)
        .produceItem("minecraft:clay",0.0,100,50)
        .requireFunctionOnEnd("ftr_t1_clay")
        .id("t1.mmr.pftr.sand")

    mme.machine_recipe("mmr:t1.primitive_falling_tower_ritual",100)
        .width(150)
        .height(180)
        .requireItem(Item.of('kubejs:fusion_defective_lust_crystal',64),10,10)
        .requireItem(Item.of('kubejs:fusion_defective_lust_crystal',64),10,30)
        .requireItem('kubejs:rift_cataclyst',30,10)
        .produceItem("ae2:sky_stone_block",0.0,100,10)
        .produceItem("ae2:sky_stone_block",0.0,100,30)
        .produceItem("minecraft:calcite",0.0,120,10)
        .requireFunctionOnEnd("ftr_t1_skystone")
        .id("t1.mmr.pftr.skystone")
})

MMREvents.recipeFunction("ftr_t1_clay", e => {
    const tile = e.getTile();
    const r = 5;
    const blockList = [
        ['minecraft:sand', 1],
        ['create:limestone', 2],
        ['minecraft:calcite', 1],
        ['minecraft:clay', 1]
    ];
    _ftr_recipe(tile, blockList, r);
    e.success();
})

MMREvents.recipeFunction("ftr_t1_skystone", e => {
    const tile = e.getTile();
    const r = 3;
    const blockList = [
        ['ae2:sky_stone_block', 2],
        ['minecraft:calcite', 1],
    ];
    _ftr_recipe(tile, blockList, r);
    e.success();
})