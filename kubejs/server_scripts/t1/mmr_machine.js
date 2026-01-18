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

    e.create("mmr:t1.lewd_refining_tower")
        .name("欲望液化塔")
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaa","aaa","aaa"],
                ["bmb","b b","aaa"],
                ["cdc","c c","ccc"],
                ["cdc","c c","ccc"],
                ["cdc","c c","ccc"],
                ["cdc","c c","ccc"],
                ["cdc","c c","ccc"]
            ])
            .keys({
                "a":["create:industrial_iron_block"],
                "b":[
                    "modular_machinery_reborn:casing_plain",     
                    "#modular_machinery_reborn:inputbus",
                    "#modular_machinery_reborn:outputbus",
                    "#modular_machinery_reborn:fluidinputhatch"
                ],
                "c":["create:copper_casing"],
                "d":["#modular_machinery_reborn:fluidoutputhatch"]
            }))
    
    e.create("mmr:t1.primitive_fusion_array")
        .name("原始淫能凝聚阵列")
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["  xxx  ","b xxx b","  aaa  "],
                ["  xmx  ","d c c d","  aca  "],
                ["  aca  ","e c c e","  aca  "],
                ["  aca  ","ffc cff","  aca  "],
                ["  aca  ","  c c  ","  aca  "]
            ])
            .keys({
                "x":[
                    "factory_blocks:sturdy",
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
})

