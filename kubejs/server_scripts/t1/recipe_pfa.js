
const nekos = ['toneko:adventurer_neko','toneko:ghost_neko','toneko:fighting_neko','justarod:loli_neko','justarod:seeeeeex_neko','toneko:crystal_neko']


ServerEvents.recipes(e =>{
    
    function fusion(input,output,fluid,fa,time){
    const mme = e.recipes.modular_machinery_reborn;
    mme.machine_recipe("mmr:t1.primitive_fusion_array",time)
        .width(150)
        .height(180)
        .requireItem(Item.of(input,2),10,10)
        .requireFluid(Fluid.of(fluid,fa),10,30)
        .produceItem(Item.of(output,2),100,10)
        //.produceItem("minecraft:wooden_pickaxe")
        .id("t1.mmr.pfa."+output+".0")
    
    mme.machine_recipe("mmr:t1.primitive_fusion_array",time*0.8)
        .width(150)
        .height(180)
        .requireItem(Item.of(input,2),10,10)
        .requireFluid(Fluid.of(fluid,fa*0.9),10,30)
        .produceItem(Item.of(output,2),100,10)
        //.produceItem("minecraft:wooden_sword")
        .checkEntitiesAmountInRadius(10,1,nekos)
        .id("t1.mmr.pfa."+output+".1")
        .hide()
    
    mme.machine_recipe("mmr:t1.primitive_fusion_array",time*0.8*0.8)
        .width(150)
        .height(180)
        .requireItem(Item.of(input,2),10,10)
        .requireFluid(Fluid.of(fluid,fa*0.9*0.9),10,30)
        .produceItem(Item.of(output,2),100,10)
        //.produceItem("minecraft:wooden_axe")
        .checkEntitiesAmountInRadius(10,2,nekos)
        .id("t1.mmr.pfa."+output+".2")
        .hide()

    mme.machine_recipe("mmr:t1.primitive_fusion_array",time*0.8*0.8*0.8)
        .width(150)
        .height(180)
        .requireItem(Item.of(input,2),10,10)
        .requireFluid(Fluid.of(fluid,fa*0.9*0.9*0.9),10,30)
        .produceItem(Item.of(output,2),100,10)
        .checkEntitiesAmountInRadius(10,3,nekos)
        //.produceItem("minecraft:wooden_hoe")
        .id("t1.mmr.pfa."+output+".3")
        .hide()

    mme.machine_recipe("mmr:t1.primitive_fusion_array",time*0.8*0.8*0.8*0.8)
        .width(150)
        .height(180)
        .requireItem(Item.of(input,2),10,10)
        .requireFluid(Fluid.of(fluid,fa*0.9*0.9*0.9*0.9),10,30)
        .produceItem(Item.of(output,2),100,10)
        //.produceItem("minecraft:golden_sword")
        .checkEntitiesAmountInRadius(10,4,nekos)
        .id("t1.mmr.pfa."+output+".4")
    }
    fusion('kubejs:defective_lust_crystal','kubejs:fusion_defective_lust_crystal','kubejs:lewd_basic',60,60);
    fusion('kubejs:normal_lust_crystal','kubejs:fusion_normal_lust_crystal','kubejs:lewd_basic',100,80);
    fusion('kubejs:exquisite_lust_crystal','kubejs:fusion_exquisite_lust_crystal','kubejs:lewd_basic',200,120);
});