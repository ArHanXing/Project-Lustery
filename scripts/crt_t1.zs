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
<recipetype:create:compacting>.addJsonRecipe("t1.tfmg.compacting/cast_iron/blocky", {
    type: "create:compacting", 
    results: [{id: "tfmg:cast_iron_ingot",count:9}], 
    ingredients: [{item:"minecraft:iron_block"}, {item: "minecraft:coal_block"}]
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
    ingredients: [{type: "neoforge:single", amount: 100, fluid: "kubejs:vaginaldew_basic"},{item:"minecraft:cobblestone"}]});
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
            [{id: "create:brass_hand"}], 
            type: "create:deploying"
    },
    {
        ingredients: [
            {item: "create:brass_hand"}
        ], 
        results: 
            [{id: "create:brass_hand"}], 
            type: "create:pressing"
    },
    {
        ingredients: [
            {item: "create:brass_hand"}
        ], 
        results: 
            [{id: "create:brass_hand"}], 
            type: "create:pressing"
    },
    ], 
    loops: 1, 
    transitional_item: {id: "create:brass_hand"}, 
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
<recipetype:create:sequenced_assembly>.removeByName("tfmg:sequenced_assembly/heavy_plate");
//塑料混凝土
<recipetype:create:item_application>.addJsonRecipe("t1.itemapp.concrete", {type: "create:item_application", 
    results: [{id: "kubejs:plascrete"}], 
    ingredients: [{item: "tfmg:rebar_concrete"}, {item:"minecraft:white_dye"}]});

//取消模板
<recipetype:ae2:inscriber>.removeByName("ae2:inscriber/engineering_processor_print");
<recipetype:ae2:inscriber>.removeByName("ae2:inscriber/logic_processor_print");
<recipetype:ae2:inscriber>.removeByName("ae2:inscriber/calculation_processor_print");
<recipetype:ae2:inscriber>.removeByName("ae2:inscriber/silicon_print");
<recipetype:ae2:inscriber>.removeByName("ae2:inscriber/certus_quartz_dust");
<recipetype:ae2:inscriber>.addJsonRecipe("t1.ae2.inscriber/engineering_processor_print", {type: "ae2:inscriber", mode: "inscribe", 
    result: {id: "ae2:printed_engineering_processor", count: 1}, 
    ingredients: {top:{item:"kubejs:basic_lust_bioware"}, middle: {tag: "c:gems/diamond"}}});
<recipetype:ae2:inscriber>.addJsonRecipe("t1.ae2.inscriber/logic_processor_print", {type: "ae2:inscriber", mode: "inscribe", 
    result: {id: "ae2:printed_logic_processor", count: 1},
    ingredients: {top:{item:"kubejs:basic_lust_bioware"}, middle: {tag: "c:ingots/gold"}}});
<recipetype:ae2:inscriber>.addJsonRecipe("t1.ae2.inscriber/calculation_processor_print", {type: "ae2:inscriber", mode: "inscribe", 
    result: {id: "ae2:printed_calculation_processor", count: 1},
    ingredients: {top:{item:"kubejs:basic_lust_bioware"}, middle: {item:"ae2:certus_quartz_crystal"}}});
<recipetype:ae2:inscriber>.addJsonRecipe("t1.ae2.inscriber/silicon_print", {type: "ae2:inscriber", mode: "inscribe",
    result: {id: "ae2:printed_silicon", count: 1},
    ingredients: {middle: {tag: "c:silicon"}}});

//照抄（捂脸
<recipetype:lychee:item_inside>.addJsonRecipe("t1.lych.certus",{ 
    type: "lychee:item_inside",
    item_in: {"item":"minecraft:quartz"},
    block_in: {"blocks":"kubejs:vaginaldew_basic"},
    post: [{"type":"drop_item","id":"ae2:certus_quartz_crystal"}]
});

<recipetype:lychee:block_clicking>.addJsonRecipe("t1.lych.endereye",{ 
    type: "lychee:block_clicking",
    item_in: {"item":"kubejs:fusion_normal_lust_crystal"},
    block_in: {"blocks":"kubejs:dimrift"},
    post: [{"type":"drop_item","id":"minecraft:ender_pearl"}]
});

//MMR 强化外壳
<recipetype:create:item_application>.addJsonRecipe("t1.itemapp.reinforced_mmr_casing", {type: "create:item_application", 
    results: [{id: "modular_machinery_reborn:casing_reinforced"}], 
    ingredients: [{item: "modular_machinery_reborn:casing_plain"}, {item:"create:sturdy_sheet"}]});