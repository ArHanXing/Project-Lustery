
ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;
    const ec = e.recipes.create;
    e.shaped("minecraft:end_rod",[
        ' A ',
        ' B ',
        '   '
    ],{
        A:'minecraft:stick',
        B:'minecraft:flint'
    }).id('t1.mc.primitive_end_rod');

    e.shaped(Item.of('minecraft:gravel',2),[
        'AA ',
        'AB ',
        '   '
    ],{
        A:'minecraft:dirt',
        B:'minecraft:stick'
    }).id('t1.mc.gravel');

    e.shaped('justarod:primitive_rod',[
        ' A ',
        ' A ',
        'CBC'
    ],{
        A:'minecraft:stick',
        B:'minecraft:end_rod',
        C:'minecraft:flint'
    }).id('t1.jar.primitive_rod');

    e.shapeless(Item.of('kubejs:sifted_ore',2),[
        'kubejs:defective_lust_crystal','#c:cobblestones'
    ]).id('t1.kjs.sifted_ore')

    mme.machine_recipe("mmr:t1.primitive_ore_washer",20)
        .width(150)
        .height(180)
        .requireItem(Item.of("kubejs:sifted_ore",4),10,10)
        .lootTable('mmr:raw_ores_overworld',2,100,10)
        .lootTable('mmr:raw_ores_overworld',2,120,10)
        .lootTable('mmr:raw_ores_overworld',2,100,30)
        .id("t1.mmr.pow.wash_sifted_ore")

    e.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.primitive_ore_washer"]',[
        'ABA',
        'AAA',
        'CBC'
    ],{
        A:"minecraft:smooth_stone",
        B:"minecraft:stick",
        C:"#minecraft:planks"
    })

    e.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.primitive_stone_crusher"]',[
        'A A',
        'ACA',
        'BBB'
    ],{
        A:"minecraft:smooth_stone",
        B:'jaopca:gears.copper',
        C:'create:andesite_casing'
    })

    e.remove('justarod:redstone_rod')
    e.shaped('justarod:redstone_rod',[
        ' A ',
        ' A ',
        'CBC'
    ],{
        A:'jaopca:rods.osmium',
        B:'justarod:primitive_rod',
        C:'tfmg:cast_iron_ingot'
    }).id('t1.jar.redstone_rod');

    //由于作者回心转意（被/ct recipes诱惑） 所以除了MMR和CM配方之外的都不会再用KJS写 哈哈哈（

    mme.machine_recipe("mmr:t1.lewd_refining_tower",60)
        .width(150)
        .height(180)
        .requireFluid(Fluid.of("kubejs:lewd_basic",3000),10,10)
        .requireItem(Item.of("kubejs:fusion_defective_lust_crystal",10),30,10)
        .produceFluid(Fluid.of("minecraft:lava",500),100,10)
        .id("t1.mmr.lrt.lava")

    mme.machine_recipe("mmr:t1.lewd_refining_tower",10)
        .width(150)
        .height(180)
        .requireItem(Item.of("kubejs:defective_lust_crystal",4),10,10)
        .produceFluid(Fluid.of("kubejs:lewd_basic",100),100,10)
        .id("t1.mmr.lrt.lewd.t1_nofusion")
    
});