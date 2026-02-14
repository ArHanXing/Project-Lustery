// 这里的行为会被 Function测试机器 执行

ServerEvents.recipes(e => {
    const mmc = e.recipes.custommachinery
    mmc.custom_machine("custommachinery:testify", 1)
        .requireItem('minecraft:cobblestone', "input")
        .requireFunctionOnStart("__ftr_test")
})

CustomMachineryEvents.recipeFunction("__ftr_test", e => {
    const tile = e.getTile();
    const baseBlockPos = tile.blockPos.above(30);
    
    // 强制 Y 坐标在有效范围
    const safeY = Math.max(0, Math.min(255, baseBlockPos.getY()));
    const CENTER = {
        x: baseBlockPos.getX(),
        y: safeY,
        z: baseBlockPos.getZ()
    };
    
    //console.log(`[PFTR] 原始 Y: ${baseBlockPos.getY()}, 安全 Y: ${safeY}`);
    //console.log(`[PFTR] 中心点: (${CENTER.x}, ${CENTER.y}, ${CENTER.z})`);

    const world = tile.level;
    const r = 3;
    const blockList = [
        ['minecraft:sand', 1],
        ['create:limestone', 1],
        ['minecraft:gravel', 1]
    ];
    
    const directions = [
        [1, 0, 0], [-1, 0, 0],
        [0, 1, 0], [0, -1, 0],
        [0, 0, 1], [0, 0, -1]
    ];

    function chooseBlock() {
        const totalWeight = blockList.reduce((sum, [, w]) => sum + w, 0);
        let rand = Math.random() * totalWeight;
        for (const [block, weight] of blockList) {
            rand -= weight;
            if (rand <= 0) return block;
        }
        return blockList[0][0];
    }
    
    const queue = [];
    const visited = new Set();
    
    const centerKey = `${CENTER.x},${CENTER.y},${CENTER.z}`;
    queue.push(Object.assign({}, CENTER));
    visited.add(centerKey);

    while (queue.length > 0) {
        var currentPos = queue.shift();
        
        //console.log(`[DEBUG] 处理点: (${currentPos.x}, ${currentPos.y}, ${currentPos.z})`);
        
        var blockName = chooseBlock();
        var blockState = Block.getBlock(blockName).defaultBlockState();
        var pos = new BlockPos(currentPos.x, currentPos.y, currentPos.z);
        world.setBlock(pos, blockState, 2);

        for (var [dx, dy, dz] of directions) {
            var newPos = {
                x: currentPos.x + dx,
                y: currentPos.y + dy,
                z: currentPos.z + dz
            };
            
            var dist = Math.abs(newPos.x - CENTER.x) + 
                         Math.abs(newPos.y - CENTER.y) + 
                         Math.abs(newPos.z - CENTER.z);
            if (dist > r) continue;

            var posKey = `${newPos.x},${newPos.y},${newPos.z}`;

            if (!visited.has(posKey)) {
                visited.add(posKey);
                queue.push(Object.assign({}, newPos));
                //console.log(`[DEBUG] 新增点: (${newPos.x}, ${newPos.y}, ${newPos.z})`);
            }
        }
    }
    //console.log(`[PFTR] 生成方块数: ${visited.size}`);
    e.success();
});
