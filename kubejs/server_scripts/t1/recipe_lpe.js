ServerEvents.recipes(e => {
    const mmc = e.recipes.custommachinery
    
    // from deepseek.
    // 周期性变化，但是不那么顺滑（
    const config = {
        cyclesPerDay: 24,     // 一天内的循环次数
        recipesPerCycle: 10,  // 每个周期的配方数量
        suMin: 32,           // 最小SU值
        suMax: 96,           // 最大SU值
        phaseOffset: -Math.PI/2 // 相位偏移，-π/2确保从最低值开始
    };

    const { cyclesPerDay, recipesPerCycle, suMin, suMax, phaseOffset } = config;
    const totalRecipes = cyclesPerDay * recipesPerCycle;
    const interval = 24000 / totalRecipes;
    const cycleLength = 24000 / cyclesPerDay;

    const suAmplitude = (suMax - suMin) / 2;
    const suMid = suMin + suAmplitude;

    const recipes = [];

    for (let i = 0; i < totalRecipes; i++) {
        var startTick = Math.floor(i * interval);
        var endTick = Math.floor((i + 1) * interval);
        var midTick = startTick + interval / 2;
        
        // 计算在周期内的位置
        var tickInCycle = midTick % cycleLength;
        
        // 计算sin值
        var sinValue = Math.sin(
            2 * Math.PI * tickInCycle / cycleLength + phaseOffset
        );
        
        // 计算SU值
        var suValue = Math.round(suMid + suAmplitude * sinValue);
        
        recipes.push({
            startTime: startTick,
            endTime: endTick,
            suOutput: suValue,
            cycle: Math.floor(midTick / cycleLength) + 1,
            tickInCycle: tickInCycle
        });
    }

    console.log(`[LPE] 配置：每天 ${cyclesPerDay} 个周期，共 ${totalRecipes} 个配方`);
    console.log(`[LPE] 周期长度：${cycleLength} ticks`);

    recipes.forEach((recipe, index) => {
        mmc.custom_machine("custommachinery:lustpulse_motor", 200)
            .requireFluid(Fluid.of("kubejs:lewd_basic",1), "input")
            .produceSU(recipe.suOutput,256)
            //.requireEntities(1,10,"toneko:adventurer_neko",true)
            .hide()
            .resetOnError()
            .requireTime("("+recipe.startTime+","+recipe.endTime+"]");
        //console.log(`[LPE] 添加周期：${recipe.startTime} to ${recipe.endTime} with rpm ${recipe.suOutput}`);
    });
    
    /*
    mmc.custom_machine("custommachinery:lustpulse_motor", 200)
        .requireFluid(Fluid.of("kubejs:lewd_basic",10), "input")
        .produceSU(recipe.suOutput,256)
        .resetOnError()
        .requireFunctionOnStart("_lpe_func")
    */
})
/*
CustomMachineryEvents.recipeFunction("_lpe_func",event => {
    let tile = event.tile;
    let level = tile.level;
    let pos = tile.getBlockPos();
    
    // 1. 设置检查范围（以机器为中心的半径）
    let radius = 8; // 8格范围，可以根据需要调整
    
    // 2. 获取范围内的所有玩家
    let players = level.getEntitiesWithin(AABB.of(
        pos.x - radius, pos.y - radius, pos.z - radius,
        pos.x + radius, pos.y + radius, pos.z + radius
    )).filter(entity => entity.getType() == "minecraft:player");
    
    // 3. 检查玩家是否具有特定效果
    // 这里以"速度"效果为例，您可以根据需要修改
    let requiredEffect = "justarod:orgasm"; // 效果ID
    let minAmplifier = 0; // 最小等级（0=I级，1=II级...）
    let minDuration = 1; // 最小剩余时间（ticks）
    
    // 4. 遍历玩家检查效果
    let hasValidPlayer = false;
    for (let player of players) {
        let effects = player.getActiveEffects();
        
        // 检查玩家是否有指定的效果
        if (effects.has(requiredEffect)) {
            let effect = effects.get(requiredEffect);
            
            // 检查效果等级和持续时间
            if (effect.getAmplifier() >= minAmplifier && 
                effect.getDuration() >= minDuration) {
                hasValidPlayer = true;
                break;
            }
        }
    }
    
    // 5. 根据结果返回成功或失败
    if (hasValidPlayer) {
        event.success(); // 有符合条件的玩家，继续处理配方
    } else {
        event.error("未能检测到合适玩家"); // 没有符合条件的玩家，停止处理
    }
})
*/