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
})

