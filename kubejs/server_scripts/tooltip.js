ItemEvents.modifyTooltips(e =>{
    const tooltipPairs = [
        [
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t0.primitive_ore_washer"]',
            ['你能使用的第一个多方块机器','似乎只是§b简单的洗矿工作§r，但它让你§d迈出应用淫能的第一步']
        ],
        [
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t0.primitive_stone_crusher"]',
            ['一般通过0动力碎岩机','允许使用§b并行控制仓§r']
        ]
    ]

    tooltipPairs.forEach(prr=>{
        prr[1].forEach(line=>{
            e.add(prr[0],line)
        })
    })
}
)