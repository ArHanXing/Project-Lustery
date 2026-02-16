import crafttweaker.api.tag.MCTag;
import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;
import crafttweaker.api.recipe.type.Recipe;

<recipetype:create:pressing>.addJsonRecipe("t1.bioware.petri_dish", {
    type: "create:pressing", 
    results: [{id: "kubejs:petri_dish",count:2}], 
    ingredients: [{item:"minecraft:glass"}]
});