ServerEvents.recipes(e => {
    const mmc = e.recipes.custommachinery

    mmc.custom_machine("custommachinery:lustpulse_motor", 200)
        .requireFluid(Fluid.of("kubejs:lewd_basic",10), "input")
        .produceSU(64,256)
        .requireEntities(1,10,"toneko:adventurer_neko",true)
})