
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
  return '§e'+result+'§r';
}
function easyforms(namesp,str){
    return [
        namesp+':'+str+'_ingot',
        namesp+':'+str+'_block',
        namesp+':raw_'+str
    ]
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
            ['Tier-§c1','每1s消耗3mB§d粗质淫液§r，同时§b产出高达96~256RPM和256su！§r']
        ],[
            'kubejs:sifted_ore',
            ['灵智意识体的结晶','在能维护§d维度裂缝§r之前，你只能如此获得少得可怜的资源']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.vaginaldew_refining_tower"]',
            ['Tier-§c1','回归原体吧!','允许使用§b并行控制仓§r']
        ],[
            'custommachinery:rift_generator',
            ['Tier-§c1','在配方结束之后，机器底部3x3的空间生成§5半稳定维度裂缝§r','其实并不耗电']
        ],[
            'kubejs:dimrift',
            ['请使用§b裂隙生成器§r在世界中生成','拉开的维度之缝并不大']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.primitive_fusion_array"]',
            ['Tier-§c1','§o更高级的淫能技艺，从这里开始！','流体输入仓能且仅能放在结构中两边衍架向下第2格的位置','出产§d凝聚态的欲望宝石§r，以及更多','运行凝聚配方时，周边每有一个猫娘具有0.8x耗时与0.9x流体消耗','至多减少至原耗时的0.4096x (即有4个猫娘生效)','如果你要运行加速配方，务必安装一个§e实体检测器§r！']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.dimprobe_station"]',
            ['Tier-§c1','本多方块的§b输入输出端口§r可以替换任一§b基础工业外壳§r，且必须同时安装流体输入输出仓、能源仓','发射小型探测器来获得你需要的资源']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.dimrift_mining_station"]',
            ['Tier-§c1','从维度裂缝中取得矿物']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.primitive_falling_tower_ritual"]',
            ['Tier-§c1','§5引导群星的力量！§r但是原始时代，使用你的肉体来引导星辰吧',
                '本机器的JEI配方中，0%产出的物品仅提示产出方块',
                '配方结束后，陨石将会生成在尖塔顶端向上10格的位置，半径为JEI中产出的方块总数量'
            ]
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t2.plenum"]',
            ['Tier-§72','部分配方不耗电，还请注意']
        ]
    ]

    tooltipPairs.forEach(prr=>{
        prr[1].forEach(line=>{
            e.add(prr[0],line)
        })
    })

    const elementPairs = [
        [
            [easyforms('minecraft','iron'),'mekanism:dust_iron','minecraft:iron_nugget'],
            'Fe'
        ],[
            ['tfmg:cast_iron_block','tfmg:cast_iron_ingot','tfmg:cast_iron_sheet','jaopca:gears.cast_iron','jaopca:rods.cast_iron'],
            'Fe100C'
        ],[
            ['create:andesite_alloy','create:andesite_alloy_block'],
            'Fe3Al2Si2O7'
        ],[
            ['create:brass_ingot','jaopca:gears.brass','createaddition:brass_rod'],
            'CuZn'
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