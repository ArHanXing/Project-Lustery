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
})

StartupEvents.registry("block",e=>{
    e.create("custommachinery:lustpulse_motor", "custommachinery:custom_machine")
    e.create("custommachinery:rift_generator", "custommachinery:custom_machine")
    e.create("dimrift")
        .noDrops()
})