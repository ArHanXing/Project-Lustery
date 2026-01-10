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