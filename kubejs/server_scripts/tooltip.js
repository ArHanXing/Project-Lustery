ItemEvents.modifyTooltips(e =>{
    const tooltipPairs = [
        [
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t0.primitive_ore_washer"]',
            ['你能使用的第一个多方块机器','似乎只是§b简单的洗矿工作§r，但它让你§d迈出应用淫能的第一步']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t0.primitive_stone_crusher"]',
            ['无限无消耗地产出一些石头','允许使用§b并行控制仓§r']
        ],[
            'custommachinery:lustpulse_motor',
            ['每10s消耗10mB§d粗质淫液§r，同时§b产出高达256RPM和2048su！§r','10m内必须有一只§b冒险家猫娘']
        ]
    ]

    tooltipPairs.forEach(prr=>{
        prr[1].forEach(line=>{
            e.add(prr[0],line)
        })
    })
}
)