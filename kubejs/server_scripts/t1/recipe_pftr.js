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
        .requireFunctionOnStart("testify")
        .id("t1.mmr.pftr.sand")
})

MMREvents.recipeFunction("testify", e => {

    e.success();
})