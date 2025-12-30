ServerEvents.recipes(e => {
    const mmc = e.recipes.custommachinery
    /*
    // from deepseek.
    // 第一版。周期性变化，但是不那么顺滑（
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
            .requireFluid(Fluid.of("kubejs:lewd_basic",10), "input")
            .produceSU(recipe.suOutput,256)
            .requireEntities(1,10,"toneko:adventurer_neko",true)
            .hide()
            .resetOnError()
            .requireTime("("+recipe.startTime+","+recipe.endTime+"]");
        console.log(`[LPE] 添加周期：${recipe.startTime} to ${recipe.endTime} with rpm ${recipe.suOutput}`);
    });
    */
    mmc.custom_machine("custommachinery:lustpulse_motor", 200)
        .requireFluid(Fluid.of("kubejs:lewd_basic",10), "input")
        .produceSU(recipe.suOutput,256)
        .resetOnError()
        .requireFunctionOnStart("_lpe_func")
    
})
CustomMachineryEvents.recipeFunction("_lpe_func",e => {

})