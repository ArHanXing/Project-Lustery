ServerEvents.tags('item',e=>{
    const lisCasingTags = [
        "modular_machinery_reborn:itembus",
        "modular_machinery_reborn:inputbus",
        "modular_machinery_reborn:outputbus",
        "modular_machinery_reborn:fluidhatch",
        "modular_machinery_reborn:fluidinputhatch",
        "modular_machinery_reborn:fluidoutputhatch"
    ];
    e.add("c:ingots","toneko:neko_ingot")
    e.add("c:ingots/cneko","toneko:neko_ingot")


    const listLustCrystal = [
        'kubejs:defective_lust_crystal',
        'kubejs:normal_lust_crystal',
        'kubejs:exquisite_lust_crystal',
        'kubejs:fusion_defective_lust_crystal',
        'kubejs:fusion_normal_lust_crystal',
        'kubejs:fusion_exquisite_lust_crystal'
    ]
    listLustCrystal.forEach(cur => {
        e.add("c:gems",cur);
    })
    e.add("c:gems/defective_lust_crystal","kubejs:defective_lust_crystal")
    e.add("c:gems/defective_lust_crystal","kubejs:fusion_defective_lust_crystal")
    e.add("c:gems/normal_lust_crystal","kubejs:normal_lust_crystal")
    e.add("c:gems/normal_lust_crystal","kubejs:fusion_normal_lust_crystal")
    e.add("c:gems/exquisite_lust_crystal","kubejs:exquisite_lust_crystal")
    e.add("c:gems/exquisite_lust_crystal","kubejs:fusion_exquisite_lust_crystal")

    e.add("c:gems/lust_crystal","kubejs:normal_lust_crystal")

    e.add("c:plates",'kubejs:steel_plate')
    e.add("c:plates/steel",'kubejs:steel_plate')
    e.add("c:double_plates",'kubejs:steel_double_plate')
    e.add("c:double_plates/steel",'kubejs:steel_double_plate')

    e.add("c:ingots",'kubejs:magnetize_iron_ingot')
    e.add("c:plates",'kubejs:magnetize_iron_sheet')
    e.add("c:rods",'kubejs:magnetize_iron_rod')
})