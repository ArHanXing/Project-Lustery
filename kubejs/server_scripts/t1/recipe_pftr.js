//坠。。？
ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;

    mme.machine_recipe("mmr:t1.primitive_falling_tower_ritual",100)
        .width(150)
        .height(180)
        .requireItem(Item.of('minecraft:cobblestone',64),10,10)
        .requireItem(Item.of('minecraft:cobblestone',64),30,10)
        .requireItem(Item.of("kubejs:fusion_normal_lust_crystal",64),10,30)
        .requireItem(Item.of("kubejs:fusion_normal_lust_crystal",64),30,30)
        .requireFluid(Fluid.of('kubejs:vaginaldew_basic',10000),10,50)
        .produceItem("minecraft:sand",0.0,100,10) // 占位用的 后面加
        .produceItem("create:limestone",0.0,100,30)
        .produceItem("minecraft:gravel",0.0,120,10)
        .requireFunctionOnEnd("ftr.t1.sand")
        .id("t1.mmr.pftr.sand")


});
MMREvents.recipeFunction("ftr.t1.sand", e => {
    const tile = e.getTile();
    const baseBlockPos = tile.blockPos.above(30);
    
    // 修复 1: 强制 Y 坐标在有效范围
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

