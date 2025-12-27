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

    e.create("kubejs:sifted_ore")
})

StartupEvents.registry("fluid",e=>{
    e.create("kubejs:lewd_basic")
        .displayName("粗质淫液")
        .stillTexture('kubejs:fluid/lewd_basic_still')
        .flowingTexture('kubejs:fluid/lewd_basic_flow')
})

StartupEvents.registry("block",e=>{
    e.create("custommachinery:lustpulse_motor", "custommachinery:custom_machine")
})