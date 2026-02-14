
ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;

    mme.machine_recipe("mmr:t2.plenum",200)
        .width(150)
        .height(180)
        //.requireHeight("[120,320]")
        .requireItem("kubejs:normal_lust_crystal",10,10)
        .produceFluidPerTick(Fluid.of("tfmg:air",50),100,10)
        .id("t2.mmr.ple.t1air")


});