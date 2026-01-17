这个文件的意义在于 让写一些猎奇配方（点名批评序列组装）时 不需要手动展开来理解配方结构。
我的水平就到这了。

## 序列组装
```ZenScript
<recipetype:create:sequenced_assembly>.addJsonRecipe("t1.create.sa/precision_mechanism", {type: "create:sequenced_assembly", sequence: [
    {
        ingredients: [
            {$$wrapped$$: [{item: "create:incomplete_precision_mechanism"}, {tag: "c:plates/gold"}]},
            {item: "create:cogwheel"}
        ], 
        results: 
            [{id: "create:incomplete_precision_mechanism"}], 
            type: "create:deploying"
    }, {
        ingredients: [
            {item: "create:incomplete_precision_mechanism"},
            {item: "create:large_cogwheel"}
        ], 
        results: 
            [{id: "create:incomplete_precision_mechanism"}], 
            type: "create:deploying"
    }, {
        ingredients: [
            {item: "create:incomplete_precision_mechanism"}, 
            {tag: "c:nuggets/iron"}
        ], 
        results: 
            [{id: "create:incomplete_precision_mechanism"}],
            type: "create:deploying"
    }], 
    loops: 5, 
    transitional_item: {id: "create:incomplete_precision_mechanism"}, 
    results: [
        {id: "create:precision_mechanism", chance: 120.0},
        {id: "create:golden_sheet", chance: 8.0},
        {id: "create:andesite_alloy", chance: 8.0},
        {id: "create:cogwheel", chance: 5.0},
        {id: "minecraft:gold_nugget", chance: 3.0},
        {id: "create:shaft", chance: 2.0},
        {id: "create:crushed_raw_gold", chance: 2.0},
        {id: "minecraft:iron_ingot"},
        {id: "minecraft:clock"}],
    ingredient:
        {tag: "c:plates/gold"}});
```