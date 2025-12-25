//tier 0
MMREvents.machines(e =>{
    e.create("mmr:t0.primitive_ore_washer")
        .name("原始洗矿机")
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaa","aba","aaa"],
                ["bmb","bxb","bbb"],
                ["bbb","bcb","bbb"],
                ["bbb","bcb","bbb"]])
            .keys({
                "a":[
                    "minecraft:cobblestone",
                    "#modular_machinery_reborn:inputbus",
                    "#modular_machinery_reborn:outputbus"
                ],
                "b":["minecraft:smooth_stone"],
                "c":["minecraft:air"],
                "x":["minecraft:water[level=0]"]
            }))
    
    e.create("mmr:t0.primitive_stone_crusher")
        .name("原始碎岩机")
        .structure(
            MMRStructureBuilder.create()
            .pattern([
                ["aaaaa","aaaaa","aaaaa","aaaaa"],
                ["azmza","aebda","acbca","abbba"],
                ["azzza","afffa","afffa","aaaaa"]])
            .keys({
                "z":[
                    "minecraft:cobblestone",     
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
})

