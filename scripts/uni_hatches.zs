// Vibe Coding 有点爽？
//仓室合成表模板化

// =======================
// 通用定义
// =======================
val air = <item:minecraft:air>;

// =======================
// 1. 能源仓/ 动力仓
// =======================
// 定义材料
val rod_conductive = <item:jaopca:rods.conductive_alloy>;
val rod_vibrant = <item:jaopca:rods.vibrant_alloy>;
val iron_sheet = <item:create:iron_sheet>;
val casing_reinforced = <item:modular_machinery_reborn:casing_reinforced>;
val entropy_manipulator = <item:ae2:entropy_manipulator>;

// 定义占位材料
val e_p1 = rod_conductive;
val e_p2 = rod_conductive;
val e_p3 = rod_vibrant;
val e_p4 = entropy_manipulator;

// 能源仓等级列表 (字符串数组，避免Map类型推断问题)
val energy_tier_names = ["tiny", "small", "normal", "reinforced", "big", "huge", "ludicrous", "ultimate"];

for i, tier_name in energy_tier_names {
    var input_id = "modular_machinery_reborn:energyinputhatch_" + tier_name;
    var output_id = "modular_machinery_reborn:energyoutputhatch_" + tier_name;
    var input_item = <item:${input_id}>;
    var output_item = <item:${output_id}>;

    // 添加能源仓（主动方）配方
    if (tier_name == "tiny") {
        // T1 配方
        craftingTable.addShaped("uni.mmr.energyinputhatch_tiny", input_item, [
            [air, e_p1, air],
            [iron_sheet, casing_reinforced, iron_sheet],
            [air, e_p1, air]
        ]);
    } else {
        // 获取上一级ID
        var prev_name = energy_tier_names[i - 1];
        var prev_item = <item:modular_machinery_reborn:energyinputhatch_${prev_name}>;
        var recipe_name = "uni.mmr.energyinputhatch_" + tier_name;
        
        // 判断模板类型
        if (tier_name == "small" || tier_name == "normal") {
            // 模板 A: P1, Prev, P2
            craftingTable.addShaped(recipe_name, input_item, [
                [air, e_p1, air],
                [air, prev_item, air],
                [air, e_p2, air]
            ]);
        } else if (tier_name == "reinforced" || tier_name == "big" || tier_name == "huge") {
            // 模板 B: P1, Prev,अर्थ P3
            craftingTable.addShaped(recipe_name, input_item, [
                [air, e_p1, air],
                [air, prev_item, air],
                [air, e_p3, air]
            ]);
        } else {
            // 模板 C: P1, Prev, P3-P4-P3 (极巨, 终极)
            craftingTable.addShaped(recipe_name, input_item, [
                [air, e_p1, air],
                [air, prev_item, air],
                [e_p3, e_p4, e_p3]
            ]);
        }
    }

    // 添加动力仓（被动方）转换配方
    // 正向：能源仓 -> 动力仓
    craftingTable.addShapeless("uni.mmr.energyoutputhatch_"+tier_name+".convert", output_item, [input_item]);
    // 反向：动力仓 -> 能源仓
    craftingTable.addShapeless("uni.mmr.energyinputhatch_"+tier_name+".revconvert", input_item, [output_item]);
}

// =======================
// 2. 输入仓/ 输出仓
// =======================
// 定义材料
val glass = <item:mekanism:structural_glass>;
val casing_plain = <item:modular_machinery_reborn:casing_plain>;
val bucket = <item:minecraft:bucket>;
val cast_iron_sheet = <item:tfmg:cast_iron_sheet>;
val basic_tank = <item:mekanism:basic_fluid_tank>;

// 定义占位材料
val f_p1 = iron_sheet;
val f_p2 = cast_iron_sheet;
val f_p3 = basic_tank;
val f_p4 = basic_tank;

// 流体仓等级列表
val fluid_tier_names = ["tiny", "small", "normal", "reinforced", "big", "huge", "ludicrous", "vacuum"];

for i, tier_name in fluid_tier_names {
    var input_id = "modular_machinery_reborn:fluidinputhatch_" + tier_name;
    var output_id = "modular_machinery_reborn:fluidoutputhatch_" + tier_name;
    var input_item = <item:${input_id}>;
    var output_item = <item:${output_id}>;

    // 添加输入仓（主动方）配方
    if (tier_name == "tiny") {
        // T1 配方
        craftingTable.addShaped("uni.mmr.fluidinputhatch_tiny", input_item, [
            [air, glass, air],
            [air, casing_plain, air],
            [air, bucket, air]
        ]);
    } else {
        var prev_name = fluid_tier_names[i - 1];
        var prev_item = <item:modular_machinery_reborn:fluidinputhatch_${prev_name}>;
        var recipe_name = "uni.mmr.fluidinputhatch_" + tier_name;
        
        if (tier_name == "small" || tier_name == "normal") {
            craftingTable.addShaped(recipe_name, input_item, [
                [air, f_p1, air],
                [air, prev_item, air],
                [air, f_p2, air]
            ]);
        } else if (tier_name == "reinforced" || tier_name == "big" || tier_name == "huge") {
            craftingTable.addShaped(recipe_name, input_item, [
                [air, f_p1, air],
                [air, prev_item, air],
                [air, f_p3, air]
            ]);
        } else {
            // 模板 C: 极巨, 终极
            craftingTable.addShaped(recipe_name, input_item, [
                [air, f_p1, air],
                [air, prev_item, air],
                [f_p3, f_p4, f_p3]
            ]);
        }
    }

    // 添加输出仓（被动方）转换配方
    craftingTable.addShapeless("uni.mmr.fluidoutputhatch_"+tier_name+".convert", output_item, [input_item]);
    craftingTable.addShapeless("uni.mmr.fluidinputhatch_"+tier_name+".revconvert", input_item, [output_item]);
}

// =======================
// 3. 输入总线/ 输出总线
// =======================
// 定义材料
val chest = <item:minecraft:chest>;
val basic_bin = <item:mekanism:basic_bin>;

// 定义占位材料
val b_p1 = iron_sheet;
val b_p2 = cast_iron_sheet;
val b_p3 = basic_bin;
val b_p4 = basic_bin;

// 总线等级列表
val bus_tier_names = ["tiny", "small", "normal", "reinforced", "big", "huge", "ludicrous"];

for i, tier_name in bus_tier_names {
    var input_id = "modular_machinery_reborn:inputbus_" + tier_name;
    var output_id = "modular_machinery_reborn:outputbus_" + tier_name;
    var input_item = <item:${input_id}>;
    var output_item = <item:${output_id}>;

    // 添加输入总线（主动方）配方
    if (tier_name == "tiny") {
        craftingTable.addShaped("uni.mmr.inputbus_tiny", input_item, [
            [air, glass, air],
            [air, casing_plain, air],
            [air, chest, air]
        ]);
    } else {
        var prev_name = bus_tier_names[i - 1];
        var prev_item = <item:modular_machinery_reborn:inputbus_${prev_name}>;
        var recipe_name = "uni.mmr.inputbus_" + tier_name;
        
        if (tier_name == "small" || tier_name == "normal") {
            craftingTable.addShaped(recipe_name, input_item, [
                [air, b_p1, air],
                [air, prev_item, air],
                [air, b_p2, air]
            ]);
        } else if (tier_name == "reinforced" || tier_name == "big" || tier_name == "huge") {
            craftingTable.addShaped(recipe_name, input_item, [
                [air, b_p1, air],
                [air, prev_item, air],
                [air, b_p3, air]
            ]);
        } else {
            // 模板 C: 极巨
            craftingTable.addShaped(recipe_name, input_item, [
                [air, b_p1, air],
                [air, prev_item, air],
                [b_p3, b_p4, b_p3]
            ]);
        }
    }

    // 添加输出总线（被动方）转换配方
    craftingTable.addShapeless("uni.mmr.outputbus_"+tier_name+".convert", output_item, [input_item]);
    craftingTable.addShapeless("uni.mmr.inputbus_"+tier_name+".revconvert", input_item, [output_item]);
}
