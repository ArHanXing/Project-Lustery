// priority: 800
MMREvents.machines(e => {
    e.create("mmr:t2.plenum")
        .name("集气室")
        .color("#ff9ea1a3")
        .structure(
            MMRStructureBuilder.create()
                .pattern([
                    ["bbmbb", "aaaaa", "aaaaa", "aaaaa", "aaaaa"],
                    ["aaaaa", "a   a", "a   a", "a   a", "accca"],
                    ["aaaaa", "accca", "ac ca", "accca", "accca"],
                    ["     ", " dcd ", " c c ", " dcd ", "     "],
                    ["     ", "  c  ", " c c ", "  c  ", "     "]])
                .keys({
                    "a": ["factory_blocks:sturdy"],
                    "b": [
                        "modular_machinery_reborn:casing_plain",
                        "#modular_machinery_reborn:inputbus",
                        "#modular_machinery_reborn:fluidoutputhatch",
                        "#modular_machinery_reborn:energyhatch"],
                    "c": ["mekanism:structural_glass"],
                    "d": ["tfmg:cast_iron_pipe"]
                }))


})

