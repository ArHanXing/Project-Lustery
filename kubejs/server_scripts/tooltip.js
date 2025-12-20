ItemEvents.modifyTooltips(e =>{
    const tooltipPairs = [
        [
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t0.primitive_ore_washer"]',
            ['你能使用的第一个多方块机器 / 简称 POW','似乎只是§b简单的洗矿工作§r，但它让你§d迈出应用淫能的第一步','允许使用§b并行控制仓']
        ]
    ]

    tooltipPairs.forEach(prr=>{
        prr[1].forEach(line=>{
            e.add(prr[0],line)
        })
    })
}
)