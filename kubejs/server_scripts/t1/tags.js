ServerEvents.tags('item',e=>{
    const lisCasingTags = [
        "modular_machinery_reborn:itembus",
        "modular_machinery_reborn:inputbus",
        "modular_machinery_reborn:outputbus",
        "modular_machinery_reborn:fluidhatch",
        "modular_machinery_reborn:fluidinputhatch",
        "modular_machinery_reborn:fluidoutputhatch"
    ];
    lisCasingTags.forEach(thx =>{
        //e.add(thx,'modular_machinery_reborn:casing_plain');
    });
    
    e.add("c:ingots","toneko:neko_ingot")
    e.add("c:ingots/cneko","toneko:neko_ingot")

    e.remove("c:ingots/naquadah","sgjourney:naquadah")

    e.add("c:plates",'kubejs:steel_plate')
    e.add("c:plates/steel",'kubejs:steel_plate')
    e.add("c:double_plates",'kubejs:steel_double_plate')
    e.add("c:double_plates/steel",'kubejs:steel_double_plate')

    e.add("c:ingots",'kubejs:magnetize_iron_ingot')
    e.add("c:plates",'kubejs:magnetize_iron_sheet')
    e.add("c:rods",'kubejs:magnetize_iron_rod')
})