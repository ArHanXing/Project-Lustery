BlockEvents.rightClicked("minecraft:oak_log", e=>{
    const player = e.getPlayer();
    if(player.getMainHandItem() == Item.of('kubejs:treetap')){
        if(Math.random() <= 0.3) player.give(Item.of('kubejs:sap'));
    }
})