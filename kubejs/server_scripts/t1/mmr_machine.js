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
        .name("淫液精炼塔")
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaa","a  ","aaa"],
                ["bmb","b  ","aaa"],
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
})

