// priority: 80
/**
 * @param {$MachineControllerEntity} tile 实体，e.getTile()
 * @param {Array<[string, number]>} blockList 方块-权重列表
 * @param {number} r 半径
 */
function _ftr_recipe(tile, blockList, r){
    const world = tile.level;
    const baseBlockPos = tile.blockPos.above(30);

    const safeY = Math.max(-30, Math.min(255, baseBlockPos.getY()));
    const CENTER = {
        x: baseBlockPos.getX(),
        y: safeY,
        z: baseBlockPos.getZ()
    };

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
}