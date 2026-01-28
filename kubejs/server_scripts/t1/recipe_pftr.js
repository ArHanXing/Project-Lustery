//坠。。？
ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;

    mme.machine_recipe("mmr:t1.primitive_falling_tower_ritual",1)
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
    const tile = e.tile;
    const baseBlockPos = tile.blockPos.above(30);
    const basePos = {
        x: baseBlockPos.getX(),
        y: baseBlockPos.getY(),
        z: baseBlockPos.getZ()
    };
    const world = tile.level;
    const r = 3; // 半径（曼哈顿距离）

    /** @type {Array<[string, number]>} */
    const blockList = [
        ['minecraft:sand', 0.3],
        ['minecraft:stone', 0.4],
        ['minecraft:gravel', 0.3]
    ];
    
    const directions = [
        [1, 0, 0], [-1, 0, 0],
        [0, 1, 0], [0, -1, 0],
        [0, 0, 1], [0, 0, -1]
    ];

    function chooseBlock() {
        var totalWeight = blockList.reduce((sum, [, w]) => sum + w, 0);
        let rand = Math.random() * totalWeight;
        for (var [block, weight] of blockList) {
            rand -= weight;
            if (rand <= 0) return block;
        }
        return blockList[0][0];
    }
    /** @type {Array<{x: number, y: number, z: number}>} */
    var queue = [];

    /** @type {Set<string>} */
    var visited = new Set();
    
    var centerKey = `${basePos.x},${basePos.y},${basePos.z}`;
    queue.push(basePos);
    visited.add(centerKey);

    while (queue.length > 0) {
        var currentPos = queue.shift();
        
        var blockName = chooseBlock();
        var blockState = Block.getBlock(blockName).defaultBlockState();

        var pos = new BlockPos;
        pos.setX(currentPos.x);
        pos.setY(currentPos.y);
        pos.setZ(currentPos.z);
        world.setBlock(pos, blockState, 3);

        for (var [dx, dy, dz] of directions) {
            var newPos = {
                x: currentPos.x + dx,
                y: currentPos.y + dy,
                z: currentPos.z + dz
            };
            
            var dist = Math.abs(newPos.x - basePos.x) + 
                         Math.abs(newPos.y - basePos.y) + 
                         Math.abs(newPos.z - basePos.z);
            if (dist > r) continue;
            
            if (newPos.y < 0 || newPos.y > 255) continue;
            
            const posKey = `${newPos.x},${newPos.y},${newPos.z}`;
            if (!visited.has(posKey)) {
                visited.add(posKey);
                queue.push(newPos);
            }
        }
    }
    e.success();
});

