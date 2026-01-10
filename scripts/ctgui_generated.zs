/*CraftTweaker GUI generated script
  Not intended for manual editing
  Changes will be overridden when exporting again*/

import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

craftingTable.addShaped("ctgui/new/t1.lewd_refining_tower", <item:modular_machinery_reborn:controller>.withJsonComponent(<componenttype:modular_machinery_reborn:machine>, "mmr:t1.lewd_refining_tower"), [
    [<item:tfmg:cast_iron_truss>, <item:justarod:redstone_rod>, <item:tfmg:cast_iron_truss>],
    [<item:create:fluid_pipe>, <item:tfmg:cast_iron_fluid_tank>, <item:create:fluid_pipe>],
    [<item:create:industrial_iron_block>, IIngredientEmpty.getInstance(), <item:create:industrial_iron_block>]]);

<recipetype:minecraft:crafting>.addJsonRecipe("ctgui/new/t1.infwater", {"key":{"d":{"item":"kubejs:defective_lust_crystal"},"i":{"item":"minecraft:iron_ingot"},"w":{"item":"minecraft:water_bucket"}},"pattern":["did","iwi"," i "],"result":{"id":"mekanism:creative_fluid_tank","count":1,"components":{"mekanism:fluids":{"fluid_tanks":[{"id":"minecraft:water","amount":2147483647}]}}},"category":"misc","type":"mekanism:mek_data"});

<recipetype:minecraft:crafting>.removeByName("create:crafting/kinetics/empty_blaze_burner");
craftingTable.addShaped("ctgui/new/t1.create/blaze_burner", <item:create:empty_blaze_burner>, [
    [<item:minecraft:nether_brick>, <tag:item:c:plates/iron>, <item:minecraft:nether_brick>],
    [<tag:item:c:plates/iron>, <item:tfmg:cast_iron_truss>, <tag:item:c:plates/iron>],
    [<item:minecraft:nether_brick>, <tag:item:c:plates/iron>, <item:minecraft:nether_brick>]]);

<recipetype:minecraft:crafting>.removeByName("create:crafting/kinetics/spout");
craftingTable.addShaped("ctgui/new/t1.create/spout", <item:create:spout>, [
    [<item:create:copper_casing>],
    [<item:create:fluid_pipe>],
    [<item:jaopca:gears.copper>]]);

