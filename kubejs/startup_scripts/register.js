// Visit the wiki for more info - https://kubejs.com/
/*
t1 defective_lust_crystal
t2 normal_lust_crystal
t3 exquisite_lust_crystal
*/
StartupEvents.registry("item",e=>{
    e.create("kubejs:defective_lust_crystal")
    e.create("kubejs:normal_lust_crystal")
    e.create("kubejs:exquisite_lust_crystal")
    e.create("kubejs:fusion_defective_lust_crystal")
    e.create("kubejs:fusion_normal_lust_crystal")
    e.create("kubejs:fusion_exquisite_lust_crystal")
    e.create("kubejs:sifted_ore")
    e.create('kubejs:rift_cataclyst')
    e.create('kubejs:wood_plate')
    e.create('kubejs:unfinished_controller')
    e.create('kubejs:cneko_dust')
        .tag('c:dusts/cneko')
    e.create('kubejs:basic_probe')
    e.create('kubejs:calcite_dust')
    e.create('kubejs:steel_plate')
    e.create('kubejs:steel_double_plate')
    e.create('kubejs:basic_lust_bioware')
    e.create('kubejs:lustbio_petri_dish')
    e.create('kubejs:failed_lustbio_petri_dish')
    //e.create('kubejs:cyanobacteria_petri_dish') //更多细菌后面写算了
    e.create('kubejs:petri_dish')

    e.create('kubejs:small_bucket')
})

StartupEvents.registry("fluid",e=>{
    e.create("vaginaldew_basic")
        .stillTexture('kubejs:fluid/vaginaldew_basic_still')
        .flowingTexture('kubejs:fluid/vaginaldew_basic_flow')
        .displayName('粗质淫液')
    e.create("focused_mine_fluid")
        .stillTexture('kubejs:fluid/minefluid')
        .flowingTexture('kubejs:fluid/minefluid_flow')
        .displayName('采矿聚焦液')
    e.create("dirty_focused_mine_fluid")
        .stillTexture('kubejs:fluid/dirty_minefluid')
        .flowingTexture('kubejs:fluid/dirty_minefluid_flow')
        .displayName('污浊的采矿聚焦液')
    
    e.create("natural_powered_medium")
        .stillTexture('kubejs:fluid/natural_powered_medium')
        .flowingTexture('kubejs:fluid/natural_powered_medium_flow')
        .displayName('§a自然灌注§r的培养基')
    e.create("lustery_powered_medium")
        .stillTexture('kubejs:fluid/lustery_powered_medium')
        .flowingTexture('kubejs:fluid/lustery_powered_medium_flow')
        .displayName('§d淫能灌注§r的培养基')
    e.create("others_powered_medium")
        .stillTexture('kubejs:fluid/others_powered_medium')
        .flowingTexture('kubejs:fluid/others_powered_medium_flow')
        .displayName('§b异界灌注§r的培养基')
})

StartupEvents.registry("block",e=>{
    e.create("custommachinery:lustpulse_motor", "custommachinery:custom_machine")
    e.create("custommachinery:rift_generator", "custommachinery:custom_machine")
    e.create("custommachinery:testify", "custommachinery:custom_machine")
    e.create("dimrift")
        .noDrops()
    e.create("plascrete")
        .tagBlock("minecraft:mineable/pickaxe")
    e.create("filter_casing")
        .tagBlock("minecraft:mineable/pickaxe")
})