// priority: 800
//tier 1
MMREvents.machines(e => {
    e.create("mmr:t1.primitive_ore_washer")//POW
        .color("#ff2ca9e1")
        .name("原始洗矿机")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["aaa", "aba", "bbb"],
                    ["bmb", "bxb", "bbb"],
                    ["bbb", "bcb", "bbb"],
                    ["bbb", "bcb", "bbb"]])
                .keys({
                    "a": [
                        "modular_machinery_reborn:casing_plain",
                        "#modular_machinery_reborn:inputbus",
                        "#modular_machinery_reborn:outputbus"
                    ],
                    "b": ["minecraft:smooth_stone"],
                    "c": ["minecraft:air"],
                    "x": ["minecraft:water[level=0]"]
                }))

    e.create("mmr:t1.primitive_stone_crusher")//PSC
        .color("#ff715c1f")
        .name("原始碎岩机")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["aaaaa", "aaaaa", "aaaaa", "aaaaa"],
                    ["azmza", "aebda", "acbca", "abbba"],
                    ["azzza", "afffa", "afffa", "aaaaa"]])
                .keys({
                    "z": [
                        "modular_machinery_reborn:casing_plain",
                        "#modular_machinery_reborn:inputbus",
                        "#modular_machinery_reborn:outputbus",
                        "#modular_machinery_reborn:parallelhatch"
                    ],
                    "b": ["create:andesite_alloy_block"],
                    "c": ["create:mechanical_drill"],
                    "d": ["minecraft:water[level=0]"],
                    "e": ["minecraft:lava[level=0]"],
                    "f": ["minecraft:air"],
                    "a": ["minecraft:smooth_stone"]
                }))

    e.create("mmr:t1.vaginaldew_refining_tower")
        .color("#ffbb5548")
        .name("欲望炼化池")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["aaaaa", "abbba", "abbba", "abbba", "aaaaa"],
                    ["ddmdd", "c   c", "c   c", "c   c", "ccccc"],
                    [" ddd ", "b   b", "b   b", "b   b", " bbb "]])
                .keys({
                    "a": ["create:industrial_iron_block"],
                    "b": ["create:copper_casing"],
                    "c": ["create:andesite_alloy_block"],
                    "d": [
                        "modular_machinery_reborn:casing_plain",
                        "#modular_machinery_reborn:inputbus",
                        "#modular_machinery_reborn:outputbus",
                        "#modular_machinery_reborn:fluidoutputhatch",
                        "#modular_machinery_reborn:fluidinputhatch",
                        "#modular_machinery_reborn:parallelhatch"
                    ]
                }))

    e.create("mmr:t1.primitive_fusion_array")
        .name("原始淫能凝聚阵列")
        .color("#fff39800")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["  xxx  ", "b xxx b", "  aaa  "],
                    ["  ama  ", "d c c d", "  aca  "],
                    ["  aca  ", "e c c e", "  aca  "],
                    ["  aca  ", "ffc cff", "  aca  "],
                    ["  aca  ", "  c c  ", "  aca  "]
                ])
                .keys({
                    "x": [
                        "modular_machinery_reborn:casing_plain",
                        "#modular_machinery_reborn:inputbus",
                        "#modular_machinery_reborn:outputbus",
                        "#modular_machinery_reborn:fluidoutputhatch",
                        "modular_machinery_reborn:entity_detector"
                    ],
                    "a": ["factory_blocks:sturdy"],
                    "b": [
                        "create:fluid_tank",
                        "#modular_machinery_reborn:fluidinputhatch"
                    ],
                    "c": ["mekanism:structural_glass"],
                    "d": ["create:fluid_tank"],
                    "e": ["tfmg:brass_truss"],
                    "f": ["tfmg:brass_frame"]
                }))

    e.create('mmr:t1.dimrift_mining_station')
        .name("维度裂隙采矿站")
        .color("#fff7b977")
        .structure(
        MMRStructureBuilder.create()
            .pattern([
            ["      eee      ","      ebe      ","    aabbbaa    ","    abccbba    ","bbbbbcddccbbbbb","bbbbbcddddcbbbb","bbbbcddcddcbbbb","bbbbcddddcbbbbb","bbbbbccddcbbbbb","    abbccba    ","    aabbbba    "],
            ["      eme      ","      ebe      ","    aafffaa    ","    agaafga    ","aaaaiaaaaaiaaaa","jkaffaaaaaafakj","gkafaaaaaaafakg","jkafaaaaaaffakj","    iaaaaai    ","    agfaaga    ","    aafffaa    "],
            ["      eee      ","      eee      ","               ","               ","aaaai     iaaaa","akkaa     aakka","fkkaa     aakgf","akkaa     aakka","    i     i    ","               ","               "],
            ["               ","               ","               ","               ","aaaai     iaaaa","ajkka  q  akkja","agkga  p  aggga","ajkka     akkja","    i     i    ","               ","               "],
            ["               ","               ","               ","               ","aaaai     iaaaa","aajka     akjaa","afgga  cq aggfa","aajka     akjaa","    i     i    ","               ","               "],
            ["               ","               ","               ","               ","aaaar     raaaa","aaakr     rkaaa","aaggr  c  rggaa","aaakr  q  rkaaa","    r     r    ","               ","               "],
            ["               ","               ","               ","               ","aaaaa     aaaaa","aaaka     akaaa","aaggr qc  rggaa","aaaka     akaaa","               ","               ","               "],
            ["               ","               ","               ","               ","aaaaa     aaaaa","aaaka  q  akaaa","aaggssscsssggaa","aaaka     akaaa","               ","               ","               "],
            ["               ","               ","               ","               ","aaaaa     aaaaa","aaaka     akaaa","aagga  cq aggaa","aaaka     akaaa","               ","               ","               "],
            ["               ","               ","               ","               ","aaaaa     aaaaa","aaaka     akaaa","aafga  c  agfaa","aaaka  q  akaaa","               ","               ","               "],
            ["               ","               ","               ","     t   t     ","aaaaa     aaaaa","aaakk     kkaaa","aaagg  c  ggaaa","aaakk     kkaaa","               ","               ","               "],
            ["               ","               ","               ","     v   v     ","aaaau     uaaaa","aaajk sxs kjaaa","aaagg xAx ggaaa","aaajk sxs kjaaa","    u     u    ","     v   v     ","      uuu      "],
            ["               ","               ","               ","               ","aaaaa     aaaaa","aaaak sxs kaaaa","aaafg xAx gfaaa","aaaak sxs kaaaa","               ","               ","               "],
            ["               ","               ","               ","               ","aaaaa     aaaaa","aaaaa sxs aaaaa","aaaag xAx gaaaa","aaaaa sxs aaaaa","               ","               ","               "],
            ["               ","               ","               ","               ","aaaaa     aaaaa","aaaaa  D  aaaaa","aaaaf DxD faaaa","aaaaa  D  aaaaa","               ","               ","               "],
            ["               ","               ","               ","               ","               ","       v       ","      vFv      ","       v       ","               ","               ","               "]
            ])
            .keys({
            "a": "minecraft:air",
            "b": "factory_blocks:sturdy",
            "c": "tfmg:heavy_machinery_casing",
            "d": "kubejs:dimrift",
            "e": ["modular_machinery_reborn:casing_plain",                        
                    "#modular_machinery_reborn:inputbus",
                    "#modular_machinery_reborn:outputbus",
                    "#modular_machinery_reborn:fluidoutputhatch",
                    "#modular_machinery_reborn:fluidinputhatch",
                    '#modular_machinery_reborn:energyinputhatch',
                    "#modular_machinery_reborn:parallelhatch"],
            "f": "tfmg:white_rebar_concrete_stairs",
            "g": "tfmg:white_rebar_concrete",
            "i": "tfmg:steel_truss",
            "j": "minecraft:polished_deepslate_stairs",
            "k": "minecraft:polished_deepslate",
            "p": "create:mechanical_drill",
            "q": "tfmg:steel_scaffolding",
            "r": "tfmg:steel_frame",
            "s": "tfmg:steel_bars",
            "t": "create:rose_quartz_lamp",
            "u": "tfmg:white_rebar_concrete_slab",
            "v": "minecraft:polished_deepslate_slab",
            "x": "mekanism:structural_glass",
            "A": "kubejs:vaginaldew_basic[level=0]",
            "D": "minecraft:lightning_rod",
            "F": "minecraft:smooth_quartz"
            })
        )
    
    e.create('mmr:t1.dimprobe_station')
        .name("维度探针站")
        .color("#ffefcd9a")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["zzz", "zzz", "zzz"],
                    ["a a", "   ", "a a"],
                    ["bmb", "bbb", "bbb"],
                    [" c ", "cbc", " c "],
                    [" c ", "cbc", " c "],
                    ["   ", " c ", "   "],
                    ["   ", " c ", "   "]])
                .keys({
                    "a": ["tfmg:brass_truss"],
                    "b": ["factory_blocks:sturdy",
                        "#modular_machinery_reborn:inputbus",
                        "#modular_machinery_reborn:outputbus",
                        "#modular_machinery_reborn:fluidoutputhatch",
                        "#modular_machinery_reborn:fluidinputhatch",
                        '#modular_machinery_reborn:energyinputhatch'
                    ],
                    "c": ["tfmg:brass_frame"],
                    "z": ['kubejs:dimrift']
                }))

    e.create("mmr:t1.lust_obelisk")
        .name("α-淫能方尖碑 WIP")//TODO 方尖碑
        .color("#ff884898")

    e.create("mmr:t1.primitive_falling_tower_ritual")
        .name("原始坠星仪式台")
        .color("#ff884898")
        .structure(
            MMRStructureBuilder.create()
                .pattern([[
                    "    aaa    ",
                    "    aaa    ",
                    "   baaab   ",
                    "  baaaaab  ",
                    "aaaaaaaaaaa",
                    "aaaaaaaaaaa",
                    "aaaaaaaaaaa",
                    "  baaaaab  ",
                    "   baaab   ",
                    "    aaa    ",
                    "    aaa    "
                ], [
                    "     c     ",
                    "           ",
                    "           ",
                    "     d     ",
                    "     d     ",
                    "c  ddadd  c",
                    "     d     ",
                    "     d     ",
                    "           ",
                    "           ",
                    "     c     "
                ], [
                    "     c     ",
                    "           ",
                    "           ",
                    "           ",
                    "           ",
                    "c   eae   c",
                    "     e     ",
                    "           ",
                    "           ",
                    "           ",
                    "     c     "
                ], [
                    "     c     ",
                    "           ",
                    "           ",
                    "           ",
                    "           ",
                    "c   eme   c",
                    "     e     ",
                    "           ",
                    "           ",
                    "           ",
                    "     c     "
                ], [
                    "           ",
                    "     c     ",
                    "           ",
                    "           ",
                    "           ",
                    " c   d   c ",
                    "           ",
                    "           ",
                    "           ",
                    "     c     ",
                    "           "
                ], [
                    "           ",
                    "           ",
                    "     c     ",
                    "           ",
                    "           ",
                    "  c  d  c  ",
                    "           ",
                    "           ",
                    "     c     ",
                    "           ",
                    "           "
                ], [
                    "           ",
                    "           ",
                    "           ",
                    "           ",
                    "           ",
                    "     d     ",
                    "           ",
                    "           ",
                    "           ",
                    "           ",
                    "           "]
                ])
                .keys({
                    "a": ["factory_blocks:sturdy"],
                    "b": [
                        "modular_machinery_reborn:casing_plain",
                        "#modular_machinery_reborn:inputbus",
                        "#modular_machinery_reborn:outputbus",
                        "#modular_machinery_reborn:fluidoutputhatch",
                        "#modular_machinery_reborn:fluidinputhatch",],
                    "c": ["mekanism:structural_glass"],
                    "d": ["factory_blocks:gears"],
                    "e": ["tfmg:brass_frame"]
                }))

    e.create("mmr:t1.thermal_air_infiltration_chamber")
        .name("热力空气浸润室")
        .color("#ff640125")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["ccc", "cbc", "aba"],
                    ["ama", "b b", "aba"],
                    ["aba", "b b", "aba"],
                    ["aba", "b b", "aba"],
                    ["aba", "b b", "aba"],
                    ["aaa", "a a", "aaa"]
                ])
                .keys({
                    "a": ["factory_blocks:sturdy"],
                    "b": ["tfmg:fireproof_bricks"],
                    "c": ["modular_machinery_reborn:casing_plain",
                        "#modular_machinery_reborn:fluidoutputhatch",
                        "#modular_machinery_reborn:fluidinputhatch",
                        "#modular_machinery_reborn:fueltank"
                    ],
                }))

    e.create("mmr:t1.biolab")
        .name("生物实验台")
        .color("#ffaacf53")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["eeeee   ", "eddde   ", "eddde   ", "cdddc   ", "ccccc   ", "        ", "      aa", "aba   aa", "bbb     ", "aba     "], 
                    ["llmll   ", "dbbbd   ", "dbbbd   ", "dbbbd   ", "cdddc   ", "   s    ", "   ssshh", "fff   hh", "fff     ", "fff     "], 
                    ["lllll   ", "dbbbd   ", "dbbbd   ", "dbbbd   ", "cdddc   ", " s      ", " s    hh", "fff   hh", "fff     ", "fff     "], 
                    ["ddddd   ", "dbbbd   ", "dbbbd   ", "dbbbd   ", "cdddc   ", "   s    ", "   ssshh", "fff   hh", "fff     ", "fff     "], 
                    ["ccccc   ", "crrrc   ", "crrrc   ", "crrrc   ", "ccccc   ", "        ", "      hh", "      hh", "        ", "        "], 
                    ["        ", "        ", "        ", "        ", "        ", "        ", "      hh", "      hh", "        ", "        "]
                ])
                .keys({
                    "a": "tfmg:steel_truss", 
                    "b": "minecraft:air", 
                    "c": "factory_blocks:sturdy", 
                    "d": "kubejs:plascrete", 
                    "e": [
                        "modular_machinery_reborn:casing_plain",                        
                        "#modular_machinery_reborn:inputbus",
                        "#modular_machinery_reborn:outputbus",
                        "#modular_machinery_reborn:fluidoutputhatch",
                        "#modular_machinery_reborn:fluidinputhatch",
                        "#modular_machinery_reborn:energyhatch"
                    ],
                    "f": "create:fluid_tank", 
                    "h": "mekanism:thermal_evaporation_block", 
                    "s": "tfmg:steel_pipe", 
                    "l": "mekanism:structural_glass", 
                    "r": "kubejs:filter_casing"
                }))
    
    e.create("mmr:t1.slaughter_factory")
        .name("屠宰场")
        .color("#ff752100")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["aaaaaaa","abbbbba","abbbbba","abbbbba","abbbbba","abbbbba","aaaaaaa"],
                    ["accccca","cddeddc","cdddddc","cedddec","cdddddc","cddeddc","accccca"],
                    ["aiiiiia","iddeddi","idddddi","iedddei","idddddi","iddeddi","aiiiiia"],
                    ["aiiiiia","iddeddi","idddddi","iedddei","idddddi","iddeddi","aiiiiia"],
                    ["aiiiiia","iddeddi","idjdjdi","iedddei","idjdjdi","iddeddi","aiiiiia"],
                    ["aiiiiia","iddeddi","idjdjdi","iedddei","idjdjdi","iddeddi","aiiiiia"],
                    ["aaaaaaa","akklkka","aklllka","allklla","aklllka","akklkka","aaaaaaa"],
                    ["       ","       ","       ","   m   ","       ","       ","       "]])
                .keys({
                    "a":"factory_blocks:sturdy",
                    "b":"tfmg:fireproof_bricks",
                    "c":"tfmg:heavy_machinery_casing",
                    "d":"minecraft:air",
                    "e":"tfmg:cast_iron_bars",
                    "i":"mekanism:structural_glass",
                    "j":"tfmg:cast_iron_pipe",
                    "k":"factory_blocks:gears",
                    "l":[
                        "modular_machinery_reborn:casing_plain",                        
                        "#modular_machinery_reborn:inputbus",
                        "#modular_machinery_reborn:outputbus",
                        "#modular_machinery_reborn:fluidoutputhatch",
                        "#modular_machinery_reborn:fluidinputhatch",
                        "#modular_machinery_reborn:energyhatch"]})
            )
})

