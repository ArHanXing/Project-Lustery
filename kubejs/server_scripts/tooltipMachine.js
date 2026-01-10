ItemEvents.modifyTooltips(e =>{
    const tooltipPairs = [
        [
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.primitive_ore_washer"]',
            ['Tier-1','你能使用的第一个多方块机器','简单的洗矿工作']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.primitive_stone_crusher"]',
            ['Tier-1','无限无消耗地产出一些石头','允许使用§b并行控制仓§r']
        ],[
            'custommachinery:lustpulse_motor',
            ['Tier-1','每10s消耗10mB§d粗质淫液§r，同时§b产出高达32~96RPM和256su！§r']
        ],[
            'kubejs:sifted_ore',
            ['灵智意识体的结晶','在能维护§d维度裂缝§r之前，你只能如此获得少得可怜的资源']
        ]
    ]

    tooltipPairs.forEach(prr=>{
        prr[1].forEach(line=>{
            e.add(prr[0],line)
        })
    })
}
)