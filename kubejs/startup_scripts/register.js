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
})

StartupEvents.registry("fluid",e=>{
    e.create("lewd_basic")
        .stillTexture('kubejs:fluid/lewd_basic_still')
        .flowingTexture('kubejs:fluid/lewd_basic_flow')
        .displayName('粗质淫液')
})

StartupEvents.registry("block",e=>{
    e.create("custommachinery:lustpulse_motor", "custommachinery:custom_machine")
    e.create("custommachinery:rift_generator", "custommachinery:custom_machine")
    e.create("dimrift")
        .noDrops()
})