
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
        .requireItem(Item.of("kubejs:sifted_ore",4),10,10)
        .lootTable('mmr:raw_ores_overworld',2,100,10)
        .lootTable('mmr:raw_ores_overworld',2,120,10)
        .lootTable('mmr:raw_ores_overworld',2,100,30)
        .id("t0.mmr.pow.wash_sifted_ore")

    e.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t0.primitive_ore_washer"]',[
        'ABA',
        'AAA',
        'CBC'
    ],{
        A:"minecraft:smooth_stone",
        B:"minecraft:stick",
        C:"#minecraft:planks"
    })

    e.shaped('modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t0.primitive_stone_crusher"]',[
        'A A',
        'ACA',
        'BBB'
    ],{
        A:"minecraft:smooth_stone",
        B:'jaopca:gears.copper',
        C:'create:andesite_casing'
    })

    e.shaped('custommachinery:lustpulse_motor'),[
        'ADA',
        'ACA',
        'BBB'
    ],{
        A:"create:andesite_casing",
        B:"create:shaft",
        C:"justarod:redstone_rod",
        D:""
    }
});