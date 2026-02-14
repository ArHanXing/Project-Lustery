//Unfinished Dreams
import crafttweaker.api.tag.MCTag;
import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.recipe.type.Recipe;

//工业铁块
stoneCutter.removeByName("create:industrial_iron_block_from_ingots_iron_stonecutting");
stoneCutter.removeByName("create:weathered_iron_block_from_ingots_iron_stonecutting");
stoneCutter.addRecipe("t1.create.industrial_iron_block", 
    <item:create:industrial_iron_block> * 2, 
    <item:tfmg:cast_iron_block>);
stoneCutter.addRecipe("t1.create.wd_industrial_iron_block", 
    <item:create:weathered_iron_block> * 2, 
    <item:tfmg:cast_iron_block>);

//铸铁
<recipetype:create:compacting>.removeByName("tfmg:compacting/cast_iron");
<recipetype:create:compacting>.addJsonRecipe("t1.tfmg.compacting/cast_iron", {
    type: "create:compacting", 
    results: [{id: "tfmg:cast_iron_ingot"}], 
    ingredients: [{tag: "c:ingots/iron"}, {item: "minecraft:coal"}]
});
//淫液
<recipetype:create:mixing>.addJsonRecipe("t1.create.mixing/vaginaldew", {type: "create:mixing", 
    processing_time: 300,
    results: [{amount: 50, id: "kubejs:vaginaldew_basic"}], 
    ingredients: [
    {item:"kubejs:defective_lust_crystal"},
    {item:"kubejs:defective_lust_crystal"},
    {item:"kubejs:defective_lust_crystal"},
    {item:"kubejs:defective_lust_crystal"}]});
//下界岩
<recipetype:create:mixing>.removeByName("createaddition:mixing/netherrack");
<recipetype:create:mixing>.addJsonRecipe("t1.create.mixing/lava", {type: "create:mixing", 
    results: [{amount: 50, id: "minecraft:lava"}], 
    ingredients: [{item:"kubejs:defective_lust_crystal"},{item:"kubejs:defective_lust_crystal"},{item:"kubejs:defective_lust_crystal"},{type: "neoforge:single", amount: 100, fluid: "kubejs:vaginaldew_basic"}]});
<recipetype:create:mixing>.addJsonRecipe("t1.create.mixing/netherrack", {type: "create:mixing", 
    results: [{id: "minecraft:netherrack"}], 
    ingredients: [{tag: "c:cobblestones"}, {type: "neoforge:tag", amount: 100, tag: "minecraft:lava"}]});

//烈焰人燃烧
<recipetype:create:filling>.addJsonRecipe("t1.create.filling/blaze_burner", {type: "create:filling", 
    results: [{id: "create:blaze_burner"}], 
    ingredients: [{item: "create:empty_blaze_burner"}, {type: "neoforge:single", fluid: "minecraft:lava", amount: 1000}]});

//没有废料了！
<recipetype:create:sequenced_assembly>.removeByName("create:sequenced_assembly/precision_mechanism");
<recipetype:create:sequenced_assembly>.addJsonRecipe("t1.create.sa/precision_mechanism", {type: "create:sequenced_assembly", sequence:[
    {
        ingredients: [
            {tag: "c:plates/gold"},
            {item: "create:cogwheel"}
        ], 
        results: 
            [{id: "create:incomplete_precision_mechanism"}], 
            type: "create:deploying"
    },
    {
        ingredients: [
            {item: "create:incomplete_precision_mechanism"}
        ], 
        results: 
            [{id: "create:incomplete_precision_mechanism"}], 
            type: "create:pressing"
    },
    {
        ingredients: [
            {item: "create:incomplete_precision_mechanism"}, 
            {item: "minecraft:iron_ingot"}
        ], 
        results: 
            [{id: "create:incomplete_precision_mechanism"}],
            type: "create:deploying"
    }], 
    loops: 1, 
    transitional_item: {id: "create:incomplete_precision_mechanism"}, 
    results: [
        {id: "create:precision_mechanism", chance: 200.0}
    ],
    ingredient:
        {tag: "c:plates/gold"}});

<recipetype:create:mixing>.addJsonRecipe("t1.sawdust", {
    type: "create:mixing",
    results: [{id:"mekanism:sawdust"}],
    ingredients: [{tag:"minecraft:planks"}]
});

<recipetype:create:sequenced_assembly>.addJsonRecipe("t1.create.sa/hand", {type: "create:sequenced_assembly", sequence:[
    {
        ingredients: [
            {item:"create:brass_sheet"},
            {item: "create:andesite_alloy"}
        ], 
        results: 
            [{id: "create:incomplete_precision_mechanism"}], 
            type: "create:deploying"
    },
    {
        ingredients: [
            {item: "create:incomplete_precision_mechanism"}
        ], 
        results: 
            [{id: "create:incomplete_precision_mechanism"}], 
            type: "create:pressing"
    },
    {
        ingredients: [
            {item: "create:incomplete_precision_mechanism"}
        ], 
        results: 
            [{id: "create:incomplete_precision_mechanism"}], 
            type: "create:pressing"
    },
    ], 
    loops: 1, 
    transitional_item: {id: "create:incomplete_precision_mechanism"}, 
    results: [
        {id: "create:brass_hand", chance: 200.0}
    ],
    ingredient:
        {item:"create:brass_sheet"}});
craftingTable.removeByName("create:crafting/kinetics/brass_hand");

<recipetype:create:mixing>.addJsonRecipe("t1.create.mixing/rose_quartz", {type: "create:mixing", 
    results: [{id: "create:rose_quartz"}], 
    ingredients: [
        {item:"minecraft:quartz"}, 
        {type: "neoforge:single", fluid: "kubejs:vaginaldew_basic", amount: 100}
    ]});

furnace.addRecipe("t1.mcfurnace.neko_ingot",<item:kubejs:cneko_dust>, <item:toneko:neko_ingot>, 0.1, 100);

<recipetype:create:mixing>.addJsonRecipe("t1.fireclay", {
    type: "create:mixing",
    results: [{id:"tfmg:fireclay_ball", count:4}],
    ingredients: [{item:"minecraft:clay",count:4},{item:"kubejs:calcite_dust"},{type: "neoforge:single", fluid: "minecraft:water", amount: 100}]
});

<recipetype:create:crushing>.addJsonRecipe("t1.calcite_crushing", {type: "create:crushing", 
    processing_time: 150, 
    results: [{id: "kubejs:calcite_dust", count: 2}, {id: "kubejs:calcite_dust", chance: 0.5}], 
    ingredients: [{item: "minecraft:calcite"}]});

<recipetype:tfmg:hot_blast>.removeByName("tfmg:hot_blast/hot_air");