
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
        A:'minecraft:iron_ingot',
        B:'justarod:primitive_rod',
        C:'tfmg:cast_iron_ingot'
    }).id('t1.jar.redstone_rod');

    //由于作者回心转意（被/ct recipes诱惑） 所以除了MMR和CM配方之外的都不会再用KJS写 哈哈哈（


    mme.machine_recipe("mmr:t1.vaginaldew_refining_tower",5)
        .width(150)
        .height(180)
        .requireItem(Item.of("kubejs:defective_lust_crystal",8),10,10)
        .produceFluid(Fluid.of("kubejs:vaginaldew_basic",200),100,10)
        .id("t1.mmr.vrt.vaginaldew.t1_nofusion")
    
    mme.machine_recipe("mmr:t1.dimprobe_station",100)
        .width(150)
        .height(180)
        .requireItem(Item.of("kubejs:basic_probe",1),0,10,10)
        .requireItem(Item.of("minecraft:dirt",2),0.1,10,50)
        .requireItem(Item.of("kubejs:fusion_defective_lust_crystal",3),0.1,30,10)
        .lootTable('mmr:t1_dimprobe_overworld',2,100,10)
        .lootTable('mmr:t1_dimprobe_overworld',2,120,10)
        .lootTable('mmr:t1_dimprobe_overworld',2,100,30)
        .lootTable('mmr:t1_dimprobe_overworld',2,120,30)
        .id("t1.mmr.dps.t1_basicprobe_overworld")

    let incomp='kubejs:basic_probe'
    ec.sequenced_assembly(
        [   
            CreateItem.of('kubejs:basic_probe',0.8),
            CreateItem.of('kubejs:defective_lust_crystal',0.2)
        ],
        'kubejs:fusion_normal_lust_crystal',
        [
            ec.deploying(incomp,[incomp,'justarod:redstone_rod'])
                .keepHeldItem(),
            ec.pressing(incomp,incomp),
            ec.filling(incomp,[incomp,Fluid.of('kubejs:vaginaldew_basic')])
        ]
    )
        .transitionalItem(incomp)
        .loops(3)
    
    incomp = 'kubejs:unfinished_controller'
    ec.sequenced_assembly(
        'custommachinery:lustpulse_motor',
        'create:brass_casing',
        [
            ec.cutting(incomp,incomp),
            ec.deploying(incomp,[incomp,'create:iron_sheet']),
            ec.deploying(incomp,[incomp,'tfmg:cast_iron_sheet']),
            ec.pressing(incomp,incomp),
            ec.deploying(incomp,[incomp,'create:shaft']),
            ec.deploying(incomp,[incomp,'justarod:redstone_rod']),
            ec.deploying(incomp,[incomp,'kubejs:fusion_normal_lust_crystal'])
        ]
    )
        .transitionalItem(incomp)

    ec.sequenced_assembly(
        'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.primitive_fusion_array"]',
        'create:brass_casing',
        [
            ec.deploying(incomp,[incomp,'tfmg:cast_iron_sheet']),
            ec.cutting(incomp,incomp),
            ec.pressing(incomp,incomp),
            ec.deploying(incomp,[incomp,'justarod:redstone_rod']),
            ec.deploying(incomp,[incomp,'mekanism:structural_glass'])
        ]
    )
        .transitionalItem(incomp)
    
    mme.machine_recipe("mmr:t1.thermal_air_infiltration_chamber",100)
        .width(150)
        .height(180)
        .requireFluid(Fluid.of("kubejs:vaginaldew_basic",200),10,10)
        .requireFluid(Fluid.of("tfmg:air",1000),30,10)
        .requireFuel(100)
        .produceFluid(Fluid.of('tfmg:hot_air',1200),100,10)
        .id("t1.mmr.taic.fluid")
    
    
});