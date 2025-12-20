
ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;
    e.shaped("minecraft:end_rod",[
        ' A ',
        ' B ',
        '   '
    ],{
        A:'minecraft:stick',
        B:'minecraft:flint'
    }).id('t0.mc.primitive_end_rod');

    e.shaped(Item.of('minecraft:gravel',2),[
        'AA ',
        'AB ',
        '   '
    ],{
        A:'minecraft:dirt',
        B:'minecraft:stick'
    }).id('t0.mc.gravel');

    e.shaped('justarod:primitive_rod',[
        ' A ',
        ' A ',
        'CBC'
    ],{
        A:'minecraft:stick',
        B:'minecraft:end_rod',
        C:'minecraft:flint'
    }).id('t0.jar.primitive_rod');

    e.shapeless(Item.of('kubejs:sifted_ore',2),[
        'kubejs:defective_lust_crystal','#c:cobblestones'
    ]).id('t0.kjs.sifted_ore')

    mme.machine_recipe("mmr:t0.primitive_ore_washer",20)
        .width(150)
        .height(180)
        .requireItem("kubejs:sifted_ore",10,10)
        .lootTable('mmr:raw_ores_overworld',2,100,10)
        .id("t0.mmr.pow.wash_sifted_ore")

    mme.machine_recipe("mmr:t0.primitive_ore_washer",20)
        .width(150)
        .height(180)
        .requireItem("kubejs:sifted_ore",10,10)
        .requireItem("minecraft:dirt",30,10)
        .produceItem("minecraft:coal",100,10)
        .id("t0.mmr.pow.testify")
});