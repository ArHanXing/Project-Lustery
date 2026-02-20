
//碎岩机？
ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;
    const stones = ["andesite","obsidian","stone","cobblestone","granite","diorite","deepslate","cobbled_deepslate","basalt","blackstone"]
    stones.forEach(element => {
        mme.machine_recipe("mmr:t1.primitive_stone_crusher",20)
            .width(150)
            .height(180)
            .requireItem(Item.of("minecraft:"+element,1),0,10,10)
            .produceItem(Item.of("minecraft:"+element,2),100,10)
            .id("t1.mmr.psc."+element)
    });

});