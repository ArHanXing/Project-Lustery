//坠。。？
ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;

    mme.machine_recipe("mmr:t1.primitive_falling_tower_ritual",600)
        .width(150)
        .height(180)
        .requireItem(Item.of('minecraft:cobblestone',64),10,10)
        .requireItem(Item.of('minecraft:cobblestone',64),30,10)
        .requireItem(Item.of("kubejs:fusion_normal_lust_crystal",64),10,30)
        .requireItem(Item.of("kubejs:fusion_normal_lust_crystal",64),30,30)
        .requireFluid(Fluid.of('kubejs:vaginaldew_basic',10000),10,50)
        .produceItem("minecraft:sand",100,10) // 占位用的 后面加
        .produceItem("minecraft:stone",100,30)
        .produceItem("minecraft:gravel",120,10)
        .requireFunctionOnEnd("ftr.t1.sand")
        .id("t1.mmr.pftr.sand")


});
MMREvents.recipeFunction("ftr.t1.sand", e => {
    //唉，Vibe Coding.
    const tile = e.tile;
    var basePos = tile.blockPos.above(30);
    const world = tile.level;
    var r = 3;
    var blockList = [
        ['minecraft:sand', 0.3],
        ['minecraft:stone', 0.4],
        ['minecraft:gravel', 0.3]
    ];

    // 定义6个方向（上下左右前后）
    const directions = [
        [1, 0, 0], [-1, 0, 0],
        [0, 1, 0], [0, -1, 0],
        [0, 0, 1], [0, 0, -1]
    ];

    // 根据权重随机选择方块的函数
    function chooseBlock(blockList) {
        let totalWeight = 0;
        for (const [block, weight] of blockList) {
            totalWeight += weight;
        }
        let randomValue = Math.random() * totalWeight;
        for (const [block, weight] of blockList) {
            randomValue -= weight;
            if (randomValue <= 0) {
                return block;
            }
        }
        return blockList[0][0]; // 安全回退
    }

    // BFS初始化
    let queue = [];
    let visited = new Set(); // 用于记录已访问坐标

    // 添加中心点
    let centerStr = `${basePos.x},${basePos.y},${basePos.z}`;
    queue.push(basePos);
    visited.add(centerStr);

    // 开始BFS遍历
    while (queue.length > 0) {
        let currentPos = queue.shift();
        
        // 随机选择方块并放置
        const blockName = chooseBlock(blockList);
        const blockState = Block.of(blockName).defaultBlockState();
        world.setBlock(currentPos, blockState, 3); // 3表示更新所有邻居

        // 检查6个方向的邻居
        for (const [dx, dy, dz] of directions) {
            const newPos = currentPos.add(dx, dy, dz);
            // 计算到中心点的欧几里得距离平方
            const dx2 = newPos.x - basePos.x;
            const dy2 = newPos.y - basePos.y;
            const dz2 = newPos.z - basePos.z;
            const distSq = dx2 * dx2 + dy2 * dy2 + dz2 * dz2;

            // 如果在球内且未访问过
            if (distSq <= r * r) {
                const posStr = `${newPos.x},${newPos.y},${newPos.z}`;
                if (!visited.has(posStr)) {
                    visited.add(posStr);
                    queue.push(newPos);
                }
            }
        }
    }
    e.success();
});
