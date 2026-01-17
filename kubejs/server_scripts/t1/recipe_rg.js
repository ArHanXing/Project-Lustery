function getXYZ(pos) {
    return [pos.getX(), pos.getY(), pos.getZ()]
}

ServerEvents.recipes(e => {
    const mmc = e.recipes.custommachinery
    mmc.custom_machine("custommachinery:rift_generator", 200)
        .requireItem('kubejs:rift_cataclyst', "input0")
        .requireItem('kubejs:rift_cataclyst', "input1")
        .requireItem('kubejs:fusion_normal_lust_crystal', "input2")
        .requireItem('kubejs:fusion_normal_lust_crystal', "input3")
        .requireFunctionOnEnd("t1.rg.generate")
})

CustomMachineryEvents.recipeFunction("t1.rg.generate", e => {
    const tile = e.getTile();
    const world = tile.level;
    const basePos = tile.blockPos;
    
    const targetPos = basePos.below();
    const riftBlock = Block.getBlock("kubejs:dimrift").defaultBlockState();
    
    //console.log(`[RG] 开始在位置 ${getXYZ(targetPos)} 放置方块`);
    for (let xOffset = -1; xOffset <= 1; xOffset++) {
        for (let zOffset = -1; zOffset <= 1; zOffset++) {
            var placePos = targetPos.offset(xOffset, 0, zOffset);
            //console.log(`[RG] 尝试放置方块！ at ${getXYZ(placePos)}`);
            try {
                world.setBlock(placePos, riftBlock, 3);
            } catch (error) {
                //console.error(`[RG]放置方块失败！ at ${getXYZ(placePos)}: ${error}`);
            }
        }
    }
    //console.log(`[RG] 成功放置了 ${count} 个方块`);
    e.success();
})