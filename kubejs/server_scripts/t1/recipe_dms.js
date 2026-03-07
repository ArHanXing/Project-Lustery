let _dms_lustery = 0;
let _dms_energy = 0;
let _dms_natural = 0;
//TODO Natures Aura
ServerEvents.recipes(e =>{
    const mme = e.recipes.modular_machinery_reborn;
    //你真的是 T1 机器吗？

    //随机模式
    mme.machine_recipe("mmr:t1.dimrift_mining_station",100)
        .width(150)
        .height(180)
        .requireEnergyPerTick(256)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .lootTable('mmr:t1_dimrift_mining_station_random',2,100,10)
        .id("t1.mmr.psc.dms.gorandom") //是的 这里有16个LootTable

    let oreTypes = [
        'minecraft:iron_ore',
        'minecraft:coal_ore',
        'minecraft:copper_ore',
        'mekanism:tin_ore',
        'tfmg:nickel_ore',
        'mekanism:lead_ore',
        'minecraft:gold_ore',
        'minecraft:emerald_ore',
        'mekanism:osmium_ore',
        'mekanism:uranium_ore',
        'minecraft:diamond_ore',
        'minecraft:nether_quartz_ore',
        'create:zinc_ore',
        'tfmg:lithium_ore',
        'minecraft:redstone_ore',
        'minecraft:lapis_ore',
        'eidolon_repraised:silver_ore',
        'mekanism:fluorite_ore',
        'sgjourney:naquadah_ore'
    ];

    oreTypes.forEach(cur =>{
        //TODO
    })
});
MMREvents.extraTooltips(e=>{
    e.create("mmr:t1.dimrift_mining_station","gui")
        .add("==========")
        .add("§b聚焦度 - §a"+_pss_dimriftminer_bonus_rate)
        .add("==========")
})

MMREvents.recipeFunction("dms",e=>{
    e.success();
})

MMREvents.recipeFunction("dms_tick",e=>{
    e.success();
})

/*
## 三、详细产出逻辑
### 1. 能量输入与“维度频谱”
设定四种基础能量类型，每种对应一种维度属性。玩家可以通过组合输入来混合频谱：

- **机械动力**（转动能） → 我觉得这个只要有应力输入就行了。对应基础的物质，T1内容
- **淫能溶液 / 聚合水晶** → 对应“淫能维度”（红石、荧石、下界石英、Certus水晶相关材料、第二种水晶产出，暂时的）
- **异星** → 一些稀有矿石，硅岩及其副产、猎奇物质

**产出基础规则**：裂隙会优先抽取与输入能量频谱最匹配的维度资源。例如：
- 只输入机械动力 → 产出以主世界矿石为主，偶尔混入石头。
- 机械动力 + 水晶溶液（1:1比例） → 产出铁、金的同时，有一定几率出现赛特斯石英、福鲁伊克斯水晶等AE2基础材料。

### 2. 稳定度系统（由稳定器数量和放置决定）

- **稳定器**：需要聚焦液投入聚焦器来维持立场。
- **稳定度计算**：`稳定度 = 基础稳定度(由机器自身提供) + 稳定器数量×10 - 裂隙深度×0.5 - 能量频谱复杂度×2`（频谱复杂度即同时输入的能量类型数量）。
  - 稳定度范围：0~100。
  - 稳定度 >80：产出非常纯净，几乎全是指定矿物（如果有聚焦器的话），产量中等。
  - 稳定度 50~80：产出纯净但产量较高，可能混杂少量其他维度材料。
  - 稳定度 20~50：产出混杂，产量很高，但会出现大量石头、沙子等“废料”，且有小概率出现“维度碎片”（下文详述）。
  - 稳定度 <20：极度不稳定，每次运行都有可能触发**维度风暴**（随机破坏周围方块，短暂干扰玩家），但**稀有产出概率大幅提升**（比如出产远古遗物、下界之星碎片等）。

### 4. 维度碎片——跨阶段联动核心

- **来源**：在不稳定运行（稳定度<50）或使用碎片聚焦晶体时，裂隙有几率产出**维度碎片**。碎片是“凝结的维度信息”，有不同颜色/属性（对应能量频谱）。
- **用途**：
  - **合成高级聚焦晶体**（如上）。
  - **T2炼油催化剂**：特定颜色的碎片可以代替某种稀有材料，提升炼油产率。
  - **T3星门之旅的坐标数据**：收集足够碎片后，可合成“维度钥匙”，用于在星门之旅模组中开启特定星球/维度。
  - **T5魔法线启蒙**：某些碎片蕴含先祖记忆，右键可触发小段背景故事，或直接给予一个临时BUFF（如“先祖洞察”——透视附近矿物）。

### 5. 运行机制示例

1. **玩家准备**：确保裂缝区块存在，放置好稳定器并填充钢筋混凝土，连接能量输入（比如用机械动力的动力泵灌入水晶溶液，用发热棍提供热能）。
2. **插入聚焦晶体**（可选）：如果不插入，则完全随机抽取。
3. **启动**：机器开始消耗能量，并逐渐累积“裂隙深度”。深度随时间线性增加，深度越高，产出层级越高（比如深度>100时，有机会出钻石、远古残骸），但稳定度下降更快。
4. **产出阶段**：机器每工作一段时间（比如5分钟）产出一次物品。产出物的**种类和数量**由**当前稳定度、能量频谱、聚焦晶体、裂隙深度**共同决定。
5. **玩家干预**：可以随时调整稳定器数量或输入能量类型来改变当前产出倾向，也可以强制停止机器来“重置”深度（防止稳定度过低引发风暴）。

## 四、实现建议
- **产出表**：准备多个战利品表（loot table），根据条件动态调用。例如，根据能量频谱选择基础战利品表，再根据稳定度修正（加入废料或额外稀有项），最后根据聚焦晶体重写主要产出。
- **视觉特效**：即使你“不会做特效”，也可以用简单的粒子效果（如 `minecraft:portal` 粒子）模拟裂隙波动。稳定度高时粒子稀疏，低时密集且出现火焰粒子（模拟风暴前兆）。
*/