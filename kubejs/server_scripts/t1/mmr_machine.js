//tier 1
MMREvents.machines(e =>{
    e.create("mmr:t1.primitive_ore_washer")//POW
        .name("原始洗矿机")
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaa","aba","bbb"],
                ["bmb","bxb","bbb"],
                ["bbb","bcb","bbb"],
                ["bbb","bcb","bbb"]])
            .keys({
                "a":[
                    "modular_machinery_reborn:casing_plain",
                    "#modular_machinery_reborn:inputbus",
                    "#modular_machinery_reborn:outputbus"
                ],
                "b":["minecraft:smooth_stone"],
                "c":["minecraft:air"],
                "x":["minecraft:water[level=0]"]
            }))
    
    e.create("mmr:t1.primitive_stone_crusher")//PSC
        .name("原始碎岩机")
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaaaa","aaaaa","aaaaa","aaaaa"],
                ["azmza","aebda","acbca","abbba"],
                ["azzza","afffa","afffa","aaaaa"]])
            .keys({
                "z":[
                    "modular_machinery_reborn:casing_plain",     
                    "#modular_machinery_reborn:inputbus",
                    "#modular_machinery_reborn:outputbus",
                    "#modular_machinery_reborn:parallelhatch"
                ],
                "b":["create:andesite_alloy_block"],
                "c":["create:mechanical_drill"],
                "d":["minecraft:water[level=0]"],
                "e":["minecraft:lava[level=0]"],
                "f":["minecraft:air"],
                "a":["minecraft:smooth_stone"]
            }))

    e.create("mmr:t1.vaginaldew_refining_tower")
        .name("欲望炼化塔")
        .structure(
        MMRStructureBuilder.create()
        .pattern([
            ["aaaaa","abbba","abbba","abbba","aaaaa"],
            ["ddmdd","c   c","c   c","c   c","ccccc"],
            [" ddd ","b   b","b   b","b   b"," bbb "]])
        .keys({
            "a":["create:industrial_iron_block"],
            "b":["create:copper_casing"],
            "c":["create:andesite_alloy_block"],
            "d":[
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
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["  xxx  ","b xxx b","  aaa  "],
                ["  ama  ","d c c d","  aca  "],
                ["  aca  ","e c c e","  aca  "],
                ["  aca  ","ffc cff","  aca  "],
                ["  aca  ","  c c  ","  aca  "]
            ])
            .keys({
                "x":[
                    "modular_machinery_reborn:casing_plain",
                    "#modular_machinery_reborn:inputbus",
                    "#modular_machinery_reborn:outputbus",
                    "#modular_machinery_reborn:fluidoutputhatch",
                    "modular_machinery_reborn:entity_detector"
                ],
                "a":["factory_blocks:sturdy"],
                "b":[
                    "create:fluid_tank",
                    "#modular_machinery_reborn:fluidinputhatch"
                ],
                "c":["mekanism:structural_glass"],
                "d":["create:fluid_tank"],
                "e":["tfmg:brass_truss"],
                "f":["tfmg:brass_frame"]
        }))
    
    e.create('mmr:t1.dimrift_mining_station')
        .name("维度裂隙采矿站 WIP")
    
    e.create('mmr:t1.dimprobe_station')
        .name("维度探针站")
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["zzz","zzz","zzz"],
                ["a a","   ","a a"],
                ["bmb","bbb","bbb"],
                [" c ","cbc"," c "],
                [" c ","cbc"," c "],
                ["   "," c ","   "],
                ["   "," c ","   "]])
            .keys({
                "a":["tfmg:brass_truss"],
                "b":["factory_blocks:sturdy",
                    "#modular_machinery_reborn:inputbus",
                    "#modular_machinery_reborn:outputbus",
                    "#modular_machinery_reborn:fluidoutputhatch",
                    "#modular_machinery_reborn:fluidinputhatch",
                    '#modular_machinery_reborn:energyhatch'
                ],
                "c":["tfmg:brass_frame"],
                "z":['kubejs:dimrift']
            }))
    
    e.create("mmr:t1.lust_obelisk")
        .name("α-淫能方尖碑 WIP")
    
    e.create("mmr:t1.vaginaldew_solidific_array")
        .name("淫能固化阵列 WIP")
})

