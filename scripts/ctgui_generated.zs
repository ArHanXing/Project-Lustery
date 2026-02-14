/*CraftTweaker GUI generated script
  Not intended for manual editing
  Changes will be overridden when exporting again*/

import crafttweaker.api.ingredient.type.IIngredientEmpty;
import crafttweaker.api.ingredient.IIngredient;

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

<recipetype:minecraft:crafting>.removeByName("create:crafting/kinetics/fluid_tank");
craftingTable.addShaped("ctgui/new/t1.create/fluid_tank", <item:create:fluid_tank>, [
    [<tag:item:c:plates/copper>, IIngredientEmpty.getInstance(), <item:create:copper_sheet>],
    [IIngredientEmpty.getInstance(), <item:tfmg:copper_frame>, IIngredientEmpty.getInstance()],
    [<tag:item:c:plates/copper>, IIngredientEmpty.getInstance(), <item:create:copper_sheet>]]);

<recipetype:minecraft:crafting>.removeByName("tfmg:crafting/materials/steel_frame");
craftingTable.addShaped("ctgui/new/uni.tfmg/steel_frame", <item:tfmg:steel_frame> * 2, [
    [<item:tfmg:rebar>, IIngredientEmpty.getInstance(), <item:tfmg:rebar>],
    [IIngredientEmpty.getInstance(), <item:tfmg:rebar>, IIngredientEmpty.getInstance()],
    [<item:tfmg:rebar>, IIngredientEmpty.getInstance(), <item:tfmg:rebar>]]);

<recipetype:minecraft:crafting>.removeByName("tfmg:crafting/materials/aluminum_frame");
craftingTable.addShaped("ctgui/new/uni.tfmg/crafting/materials/aluminum_frame", <item:tfmg:aluminum_frame> * 2, [
    [<item:jaopca:rods.aluminum>, IIngredientEmpty.getInstance(), <item:jaopca:rods.aluminum>],
    [IIngredientEmpty.getInstance(), <item:jaopca:rods.aluminum>, IIngredientEmpty.getInstance()],
    [<item:jaopca:rods.aluminum>, IIngredientEmpty.getInstance(), <item:jaopca:rods.aluminum>]]);

<recipetype:minecraft:crafting>.removeByName("tfmg:crafting/materials/cast_iron_frame");
craftingTable.addShaped("ctgui/new/uni.tfmg/crafting/materials/cast_iron_frame", <item:tfmg:cast_iron_frame> * 2, [
    [<item:jaopca:rods.cast_iron>, IIngredientEmpty.getInstance(), <item:jaopca:rods.cast_iron>],
    [IIngredientEmpty.getInstance(), <item:jaopca:rods.cast_iron>, IIngredientEmpty.getInstance()],
    [<item:jaopca:rods.cast_iron>, IIngredientEmpty.getInstance(), <item:jaopca:rods.cast_iron>]]);

<recipetype:minecraft:crafting>.removeByName("tfmg:crafting/materials/lead_frame");
craftingTable.addShaped("ctgui/new/uni.tfmg/crafting/materials/lead_frame", <item:tfmg:lead_frame> * 2, [
    [<item:jaopca:rods.lead>, IIngredientEmpty.getInstance(), <item:jaopca:rods.lead>],
    [IIngredientEmpty.getInstance(), <item:jaopca:rods.lead>, IIngredientEmpty.getInstance()],
    [<item:jaopca:rods.lead>, IIngredientEmpty.getInstance(), <item:jaopca:rods.lead>]]);

<recipetype:minecraft:crafting>.removeByName("tfmg:crafting/materials/nickel_frame");
craftingTable.addShaped("ctgui/new/uni.tfmg/crafting/materials/nickel_frame", <item:tfmg:nickel_frame> * 2, [
    [<item:jaopca:rods.nickel>, IIngredientEmpty.getInstance(), <item:jaopca:rods.nickel>],
    [IIngredientEmpty.getInstance(), <item:jaopca:rods.nickel>, IIngredientEmpty.getInstance()],
    [<item:jaopca:rods.nickel>, IIngredientEmpty.getInstance(), <item:jaopca:rods.nickel>]]);

<recipetype:minecraft:crafting>.removeByName("tfmg:crafting/materials/constantan_frame");
craftingTable.addShaped("ctgui/new/uni.tfmg/crafting/materials/constantan_frame", <item:tfmg:constantan_frame> * 2, [
    [<item:jaopca:rods.constantan>, IIngredientEmpty.getInstance(), <item:jaopca:rods.constantan>],
    [IIngredientEmpty.getInstance(), <item:jaopca:rods.constantan>, IIngredientEmpty.getInstance()],
    [<item:jaopca:rods.constantan>, IIngredientEmpty.getInstance(), <item:jaopca:rods.constantan>]]);

<recipetype:minecraft:crafting>.removeByName("tfmg:crafting/materials/copper_frame");
craftingTable.addShaped("ctgui/new/uni.tfmg/crafting/materials/copper_frame", <item:tfmg:copper_frame> * 2, [
    [<item:createaddition:copper_rod>, IIngredientEmpty.getInstance(), <item:createaddition:copper_rod>],
    [IIngredientEmpty.getInstance(), <item:createaddition:copper_rod>, IIngredientEmpty.getInstance()],
    [<item:createaddition:copper_rod>, IIngredientEmpty.getInstance(), <item:createaddition:copper_rod>]]);

<recipetype:minecraft:crafting>.removeByName("tfmg:crafting/materials/zinc_frame");
craftingTable.addShaped("ctgui/new/uni.tfmg/crafting/materials/zinc_frame", <item:tfmg:zinc_frame> * 2, [
    [<item:jaopca:rods.zinc>, IIngredientEmpty.getInstance(), <item:jaopca:rods.zinc>],
    [IIngredientEmpty.getInstance(), <item:jaopca:rods.zinc>, IIngredientEmpty.getInstance()],
    [<item:jaopca:rods.zinc>, IIngredientEmpty.getInstance(), <item:jaopca:rods.zinc>]]);

<recipetype:minecraft:crafting>.removeByName("tfmg:crafting/materials/brass_frame");
craftingTable.addShaped("ctgui/new/uni.tfmg/crafting/materials/brass_frame", <item:tfmg:brass_frame> * 2, [
    [<item:createaddition:brass_rod>, IIngredientEmpty.getInstance(), <item:createaddition:brass_rod>],
    [IIngredientEmpty.getInstance(), <item:createaddition:brass_rod>, IIngredientEmpty.getInstance()],
    [<item:createaddition:brass_rod>, IIngredientEmpty.getInstance(), <item:createaddition:brass_rod>]]);

craftingTable.addShaped("ctgui/new/uni.create/brass_rod", <item:createaddition:brass_rod> * 2, [
    [<item:create:brass_ingot>],
    [<item:create:brass_ingot>]]);

craftingTable.addShaped("ctgui/new/crafting/uni.create/iron_rod", <item:createaddition:iron_rod> * 2, [
    [<item:minecraft:iron_ingot>],
    [<item:minecraft:iron_ingot>]]);

craftingTable.addShaped("ctgui/new/uni.cca/electrum_rod", <item:createaddition:electrum_rod> * 2, [
    [<item:createaddition:electrum_ingot>],
    [<item:createaddition:electrum_ingot>]]);

craftingTable.addShaped("ctgui/new/uni.cca/copper_rod", <item:createaddition:copper_rod> * 2, [
    [<item:minecraft:copper_ingot>],
    [<item:minecraft:copper_ingot>]]);

craftingTable.addShaped("ctgui/new/uni.cca/gold_rod", <item:createaddition:gold_rod> * 2, [
    [<item:minecraft:gold_ingot>],
    [<item:minecraft:gold_ingot>]]);

<recipetype:minecraft:crafting>.addJsonRecipe("ctgui/new/t1.mekanism/transmitter/mechanical_pipe/basic", {"key":{"c":{"item":"tfmg:cast_iron_ingot"},"b":{"item":"minecraft:bucket"}},"pattern":["cbc","   ","   "],"result":{"id":"mekanism:basic_mechanical_pipe","count":4},"category":"misc","type":"mekanism:mek_data"});

<recipetype:minecraft:crafting>.addJsonRecipe("ctgui/new/t1.mekanism/transmitter/universal_cable/basic", {"key":{"c":{"item":"tfmg:cast_iron_ingot"},"y":{"item":"minecraft:copper_ingot"}},"pattern":["cyc","   ","   "],"result":{"id":"mekanism:basic_universal_cable","count":4},"category":"misc","type":"mekanism:mek_data"});

<recipetype:minecraft:crafting>.addJsonRecipe("ctgui/new/t1.mekanism/transmitter/logistical_transporter/basic", {"key":{"c":{"item":"tfmg:cast_iron_ingot"},"g":{"tag":"c:gears"}},"pattern":["cgc","   ","   "],"result":{"id":"mekanism:basic_logistical_transporter","count":4},"category":"misc","type":"mekanism:mek_data"});

<recipetype:minecraft:crafting>.addJsonRecipe("ctgui/new/t1.mekanism/bin/basic", {"key":{"c":{"item":"tfmg:cast_iron_sheet"},"r":{"tag":"mekanism:alloys/basic"},"i":{"item":"createaddition:iron_rod"}},"pattern":["c c","rir","c c"],"result":{"id":"mekanism:basic_bin","count":1},"category":"misc","type":"mekanism:mek_data"});

<recipetype:minecraft:crafting>.removeByName("create:crafting/kinetics/belt_connector");
craftingTable.addShaped("ctgui/new/uni.create/crafting/kinetics/belt_connector", <item:create:belt_connector>, [
    [<item:kubejs:wood_plate>, <item:kubejs:wood_plate>, <item:kubejs:wood_plate>],
    [<item:kubejs:wood_plate>, <item:kubejs:wood_plate>, <item:kubejs:wood_plate>]]);

<recipetype:minecraft:crafting>.removeByName("create:crafting/logistics/andesite_funnel");
craftingTable.addShaped("ctgui/new/uni.create/crafting/logistics/andesite_funnel", <item:create:andesite_funnel> * 2, [
    [<item:create:andesite_alloy>],
    [<item:kubejs:wood_plate>]]);

<recipetype:minecraft:crafting>.removeByName("create:crafting/logistics/brass_funnel");
craftingTable.addShaped("ctgui/new/uni.create/crafting/logistics/brass_funnel", <item:create:brass_funnel> * 2, [
    [<item:create:electron_tube>],
    [<tag:item:c:ingots/brass>],
    [<item:kubejs:wood_plate>]]);

<recipetype:minecraft:crafting>.removeByName("create:crafting/logistics/andesite_tunnel");
craftingTable.addShaped("ctgui/new/uni.create/crafting/logistics/andesite_tunnel", <item:create:andesite_tunnel> * 2, [
    [<item:create:andesite_alloy>, <item:create:andesite_alloy>],
    [<item:kubejs:wood_plate>, <item:kubejs:wood_plate>]]);

<recipetype:minecraft:crafting>.removeByName("create:crafting/logistics/brass_tunnel");
craftingTable.addShaped("ctgui/new/uni.create/crafting/logistics/brass_tunnel", <item:create:brass_tunnel> * 2, [
    [<item:create:electron_tube>, IIngredientEmpty.getInstance()],
    [<tag:item:c:ingots/brass>, <tag:item:c:ingots/brass>],
    [<item:kubejs:wood_plate>, <item:kubejs:wood_plate>]]);

craftingTable.addShaped("ctgui/new/crafting/t1.wood_plate", <item:kubejs:wood_plate>, [
    [<item:mekanism:sawdust>, IIngredientEmpty.getInstance()],
    [IIngredientEmpty.getInstance(), <item:mekanism:sawdust>]]);

<recipetype:minecraft:crafting>.removeByName("create_connected:crafting/kinetics/kinetic_battery");
craftingTable.addShaped("ctgui/new/t1.c_cd/kinetic_battery", <item:create_connected:kinetic_battery> * 8, [
    [IIngredientEmpty.getInstance(), <item:create:precision_mechanism>, IIngredientEmpty.getInstance()],
    [IIngredientEmpty.getInstance(), <item:create:brass_casing>, IIngredientEmpty.getInstance()],
    [<tag:item:c:plates/iron>, <item:create:flywheel>, <tag:item:c:plates/iron>]]);

<recipetype:minecraft:crafting>.removeByName("mekanism:structural_glass");
<recipetype:minecraft:crafting>.addJsonRecipe("ctgui/new/t1.mekanism/structural_glass", {"key":{"c":{"item":"tfmg:cast_iron_sheet"},"g":{"tag":"c:glass_blocks/cheap"},"i":{"item":"create:iron_sheet"}},"pattern":["c  ","g  ","i  "],"result":{"id":"mekanism:structural_glass","count":4},"category":"misc","type":"mekanism:mek_data"});

craftingTable.addShaped("ctgui/new/crafting/t1.fb.basic_casing", <item:factory_blocks:sturdy>, [
    [<item:create:industrial_iron_block>],
    [<item:create:iron_sheet>],
    [<item:tfmg:cast_iron_sheet>]]);

<recipetype:minecraft:crafting>.removeByName("create:crafting/materials/rose_quartz");

craftingTable.addShaped("ctgui/new/crafting/t1.mmr.refinetower", <item:modular_machinery_reborn:controller>.withJsonComponent(<componenttype:modular_machinery_reborn:machine>, "mmr:t1.vaginaldew_refining_tower"), [
    [<item:create:andesite_alloy>, <item:create:copper_casing>, <item:create:andesite_alloy>],
    [<item:tfmg:cast_iron_sheet>, <item:factory_blocks:sturdy>, <item:tfmg:cast_iron_sheet>]]);

craftingTable.addShaped("ctgui/new/crafting/player_scanner", <item:justarod:player_scanner>, [
    [IIngredientEmpty.getInstance(), <item:create:electron_tube>, IIngredientEmpty.getInstance()],
    [<item:minecraft:iron_ingot>, <item:minecraft:redstone>, <item:minecraft:iron_ingot>],
    [IIngredientEmpty.getInstance(), <item:minecraft:iron_ingot>, IIngredientEmpty.getInstance()]]);

<recipetype:minecraft:crafting>.removeByName("mekanism:configurator");
<recipetype:minecraft:crafting>.addJsonRecipe("ctgui/new/mekanism/configurator", {"key":{"i":{"tag":"c:ingots/iron"},"r":{"tag":"c:ingots/osmium"},"c":{"item":"tfmg:cast_iron_ingot"}},"pattern":["ii "," r "," c "],"result":{"id":"mekanism:configurator","count":1},"category":"misc","type":"mekanism:mek_data"});

craftingTable.addShaped("ctgui/new/crafting/t1.fb.gears", <item:factory_blocks:gears>, [
    [<item:jaopca:gears.brass>],
    [<item:create:brass_casing>],
    [<item:create:andesite_alloy>]]);

<recipetype:minecraft:crafting>.removeByName("modular_machinery_reborn:casing_plain");
craftingTable.addShaped("ctgui/new/modular_machinery_reborn/casing_plain_andesite", <item:modular_machinery_reborn:casing_plain> * 2, [
    [<item:minecraft:redstone>, <item:create:andesite_casing>, <item:minecraft:redstone>],
    [IIngredientEmpty.getInstance(), <item:minecraft:redstone>, IIngredientEmpty.getInstance()]]);

craftingTable.addShaped("ctgui/new/crafting/casing_plain_copper", <item:modular_machinery_reborn:casing_plain> * 8, [
    [<item:tfmg:cast_iron_ingot>, <item:create:copper_casing>, <item:tfmg:cast_iron_ingot>],
    [IIngredientEmpty.getInstance(), <item:minecraft:redstone_block>, IIngredientEmpty.getInstance()]]);

craftingTable.addShaped("ctgui/new/crafting/controller_ds", <item:modular_machinery_reborn:controller>.withJsonComponent(<componenttype:modular_machinery_reborn:machine>, "mmr:t1.dimprobe_station"), [
    [<item:kubejs:fusion_normal_lust_crystal>, IIngredientEmpty.getInstance(), <item:kubejs:fusion_normal_lust_crystal>],
    [<item:minecraft:lapis_lazuli>, <item:justarod:redstone_rod>, <item:minecraft:lapis_lazuli>],
    [<item:tfmg:cast_iron_ingot>, <item:create:brass_casing>, <item:tfmg:cast_iron_ingot>]]);

<recipetype:minecraft:crafting>.removeByName("modular_machinery_reborn:item_input_tiny");

<recipetype:minecraft:crafting>.removeByName("modular_machinery_reborn:energy_input_tiny");

<recipetype:minecraft:crafting>.removeByName("modular_machinery_reborn:energy_output_tiny");

<recipetype:minecraft:crafting>.removeByName("modular_machinery_reborn:fluid_input_tiny");

<recipetype:minecraft:crafting>.removeByName("modular_machinery_reborn:fluid_output_tiny");

<recipetype:minecraft:crafting>.removeByName("modular_machinery_reborn:energy_input_small");

<recipetype:minecraft:crafting>.removeByName("modular_machinery_reborn:energy_output_small");

<recipetype:minecraft:crafting>.removeByName("modular_machinery_reborn:item_input_small");

<recipetype:minecraft:crafting>.removeByName("modular_machinery_reborn:item_output_small");

craftingTable.addShaped("ctgui/new/crafting/t1.rift_generator", <item:custommachinery:rift_generator>, [
    [IIngredientEmpty.getInstance(), <item:create:brass_casing>, IIngredientEmpty.getInstance()],
    [<item:tfmg:cast_iron_ingot>, <item:create:electron_tube>, <item:tfmg:cast_iron_ingot>],
    [<item:jaopca:rods.cast_iron>, <item:custommachinery:lustpulse_motor>, <item:jaopca:rods.cast_iron>]]);

<recipetype:minecraft:crafting>.removeByName("minecraft:enchanting_table");
craftingTable.addShaped("ctgui/new/minecraft/enchanting_table", <item:minecraft:enchanting_table>, [
    [IIngredientEmpty.getInstance(), <item:minecraft:diamond>, IIngredientEmpty.getInstance()],
    [<item:kubejs:normal_lust_crystal>, <item:minecraft:obsidian>, <item:kubejs:normal_lust_crystal>],
    [<item:minecraft:obsidian>, <item:minecraft:obsidian>, <item:minecraft:obsidian>]]);

craftingTable.addShaped("ctgui/new/crafting/controller_pftr", <item:modular_machinery_reborn:controller>.withJsonComponent(<componenttype:modular_machinery_reborn:machine>, "mmr:t1.primitive_falling_tower_ritual"), [
    [IIngredientEmpty.getInstance(), <item:minecraft:enchanting_table>, IIngredientEmpty.getInstance()],
    [<item:kubejs:fusion_normal_lust_crystal>, <item:justarod:redstone_rod>, <item:kubejs:fusion_normal_lust_crystal>],
    [<item:factory_blocks:sturdy>, <item:create:iron_sheet>, <item:factory_blocks:sturdy>]]);

<recipetype:minecraft:crafting>.removeByName("create:crafting/kinetics/mechanical_crafter");
craftingTable.addShaped("ctgui/new/create/crafting/kinetics/mechanical_crafter", <item:create:mechanical_crafter> * 6, [
    [<item:create:electron_tube>],
    [<item:create:brass_casing>],
    [<item:minecraft:crafting_table>]]);

<recipetype:minecraft:crafting>.removeByName("tfmg:crafting/materials/brick_smokestack");
craftingTable.addShaped("ctgui/new/tfmg/crafting/materials/brick_smokestack", <item:tfmg:brick_smokestack> * 2, [
    [<item:minecraft:bricks>, <item:jaopca:rods.cast_iron>, <item:minecraft:bricks>],
    [<item:minecraft:bricks>, <item:jaopca:rods.cast_iron>, <item:minecraft:bricks>],
    [<item:minecraft:bricks>, <item:jaopca:rods.cast_iron>, <item:minecraft:bricks>]]);

