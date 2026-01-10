ServerEvents.tags('item',event=>{
    const lisCasingTags = [
        "modular_machinery_reborn:itembus",
        "modular_machinery_reborn:inputbus",
        "modular_machinery_reborn:outputbus",
        "modular_machinery_reborn:fluidhatch",
        "modular_machinery_reborn:fluidinputhatch",
        "modular_machinery_reborn:fluidoutputhatch"
    ];
    lisCasingTags.forEach(thx =>{
        //event.add(thx,'modular_machinery_reborn:casing_plain');
    });
    
    event.add("c:ingots","toneko:neko_ingot")
    event.add("c:ingots/cneko","toneko:neko_ingot")

    event.remove("c:ingots/naquadah","sgjourney:naquadah")
})