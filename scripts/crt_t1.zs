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

//下界岩
<recipetype:create:mixing>.removeByName("createaddition:mixing/netherrack");
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