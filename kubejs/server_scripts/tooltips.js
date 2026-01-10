
const subscriptMap = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉'
};
const superscriptMap = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹'
};
/*
转换字符串中的数字格式 by deepseek
*/
function chemicalFormat(str) {
  // 先处理花括号内的上标数字
  let result = str.replace(/\{(\d+)\}/g, (match, numbers) => {
    // 将花括号内的每个数字转换为上标
    return numbers.split('').map(num => superscriptMap[num] || num).join('');
  });
  
  // 然后处理剩余的下标数字
  result = result.replace(/\d+/g, (match) => {
    // 将每个数字转换为下标
    return match.split('').map(num => subscriptMap[num] || num).join('');
  });
  return '§6'+result+'§r';
}
ItemEvents.modifyTooltips(e =>{
    const tooltipPairs = [
        [
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.primitive_ore_washer"]',
            ['Tier-§c1','你能使用的第一个多方块机器','简单的洗矿工作']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.primitive_stone_crusher"]',
            ['Tier-§c1','无限无消耗地产出一些石头','允许使用§b并行控制仓§r']
        ],[
            'custommachinery:lustpulse_motor',
            ['Tier-§c1','每5s消耗10mB§d粗质淫液§r，同时§b产出高达32~96RPM和256su！§r']
        ],[
            'kubejs:sifted_ore',
            ['灵智意识体的结晶','在能维护§d维度裂缝§r之前，你只能如此获得少得可怜的资源']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.lewd_refining_tower"]',
            ['Tier-§c1','回归原体吧!']
        ]
    ]

    tooltipPairs.forEach(prr=>{
        prr[1].forEach(line=>{
            e.add(prr[0],line)
        })
    })

    const elementPairs = [
        [
            ['minecraft:iron_ingot','minecraft:iron_nugget','minecraft:iron_block','minecraft:raw_iron','create:iron_sheet','mekanism:dust_iron'],
            'Fe'
        ],[
            ['tfmg:cast_iron_block','tfmg:cast_iron_ingot'],
            'Fe100C'
        ]
    ]
    //他妈的 这才是ChemicalHelper（？
    elementPairs.forEach(prr=>{
        prr[0].forEach(item => {
            e.add(item,chemicalFormat(prr[1]))
        })
    })
}
)