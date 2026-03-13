
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
function mcforms(namesp,str){
    return [
        namesp+':'+str+'_ingot',
        namesp+':'+str+'_block',
        namesp+':raw_'+str
    ]
}
ItemEvents.modifyTooltips(e =>{
    // 善用 Ctrl+F

    const tooltipPairs = [
        [
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.primitive_ore_washer"]',
            ['Tier-§c1','你能使用的第一个多方块机器','简单的洗矿工作']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.primitive_stone_crusher"]',
            ['Tier-§c1','无限无消耗地产出一些石头','允许使用§b并行控制仓§r']
        ],[
            'custommachinery:lustpulse_motor',
            ['Tier-§c1，产生动力功能已经暂时被禁用','淫能催化的极强引擎..可惜它的稳定性§c不足以§a驱动普通的机械动力机器§r']
        ],[
            'kubejs:sifted_ore',
            ['淫能与世界的的结晶','在能制造§d维度裂缝§r之前，你只能如此获得资源']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.vaginaldew_refining_tower"]',
            ['Tier-§c1','回归原体吧!','更高效地产出§d粗质淫液§r','允许使用§b并行控制仓§r']
        ],[
            'custommachinery:rift_generator',
            ['Tier-§c1','在配方结束之后，机器底部3x3的空间生成§5半稳定维度裂缝§r','其实并不耗电']
        ],[
            'kubejs:dimrift',
            ['请使用§b裂隙生成器§r在世界中生成','拉开的维度之缝并不大']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.primitive_fusion_array"]',
            [
                'Tier-§c1','§o更高级的淫能技艺，从这里开始！',
                '流体输入仓能且仅能放在结构中两边衍架向下第2格的位置',
                '出产§d凝聚态的欲望宝石§r，以及更多',
                '- 运行凝聚配方时，周边每有一个猫娘具有§a0.8x耗时与0.9x流体消耗§r',
                '  至多减少至原耗时的0.4096x (即有4个猫娘生效)','如果你要运行加速配方，务必安装一个§a实体检测器§r！'
            ]
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.dimprobe_station"]',
            ['Tier-§c1','本多方块的§b输入输出端口§r可以替换任一§b基础工业外壳§r，且必须同时安装流体输入输出仓、能源仓','发射小型探测器来获得你需要的资源']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.dimrift_mining_station"]',
            [
                'Tier-§c1',
                '从维度裂缝中取得矿物',
                '允许使用§b并行控制仓§r',
                '允许你§b聚焦矿物§r，产出指定的数种矿石',
                '==========',
                '- §a随机模式§r 输入§a编程电路 1§r时启动',
                '默认§a16§r并行，耗能 256 FE/t，每0.5s随机产生一种矿石原矿',
                '               此时不允许安装并行控制仓',
                '- §a聚焦模式§r 输入§a聚焦保护液、编程电路 2、§b需要聚焦的矿石本体（石头形态）§r时启动',
                '               5s一次配方，耗能1024 FE/t，产出§b极为大量的指定矿石§r，但是或许需要比较特殊的维护',
                '               §a聚焦保护液§r维护稳定性，当稳定性比较低时产量下降，但是产出了一些不明物质',
                '               每投入1桶§a聚焦保护液§r会使得稳定性上升 §b1§r ；每次运行都会折损 §b0.5~1§r 的稳定性',
                '               投入保护液并再次运行聚焦模式配方后，会输出当前稳定性',
                '               输入不消耗，但输入的矿石原矿默认§a会被消耗§r；如果想要不消耗一直运行，切换到编程电路 3',
            ]
            /*
                聚焦每次配方耗时 1s 并不耗能，总计产生 1024 个矿石
                根据三种频谱的比率，决定这些矿石分为哪三个大类
            */
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.primitive_falling_tower_ritual"]',
            ['Tier-§c1','§5引导群星的力量！§r但是原始时代，使用你的§d肉体§r来引导星辰吧',
                '本机器的JEI配方中，0%产出的物品仅提示产出方块',
                '- 配方结束后，§a陨石§r将会生成在尖塔顶端向上30格的位置',
                '  陨石为§a菱形§r，半径为JEI中产出的方块总数量的 §a2§r 倍'
            ]
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t2.plenum"]',
            ['Tier-§72','部分配方不耗电，这样的配方（Tier-1配方）需要在§by＞120§r处执行！']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.thermal_air_infiltration_chamber"]',
            ['Tier-§c1','产出淫能浸润的热空气，为高炉炼钢准备','需要§b燃料仓§r并投入燃料']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.lust_obelisk"]',
            ['Tier-§c1','§d淫能力量投射！§r§a大幅度增强§r范围内玩家的体力上限，还有其他Buff']
        ],
        [
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.biolab"]',
            ['Tier-§c1§r/§b3§r -- 本机器同时在§b两个阶段§r使用，具体机制如下：',
            '==========',
            'Tier-§c1§r，产出触手生物的配方中：',
            '    - 使用§a自然的力量§r运行配方，产物§b不可知§r；配方成功后将可以产出§d触手生物§r培养基',
            '    - 配方的基础成功概率为10%，§a三种不同的培养基§r中，每有一种输入量正确即增加30%配方成功率',
            '    - 三种培养基的正确输入量均§a至多 20 桶§r，我想你有方法最多5次就到解',
            '==========',
            'Tier-§b3§r配方中：',
            '    - §a敬请期待！§r'
        ]
        ],[
            'tfmg:generator',
            ['§c这个物品被禁用了！§r制作它在流程上将没有任何意义。','其实作者也很想玩一玩这优雅的电力系统，可惜作者也没有玩懂呜呜呜。','§7§m§o让我们永远缅怀它。']
        ],[
            'modular_machinery_reborn:controller[modular_machinery_reborn:machine="mmr:t1.slaughter_factory"]',
            ['Tier-§c1',
                '自动在机器中生成§a怪物§r并§a将其杀死§r，掉落物会返回§a输出总线§r',
                '这个多方块需要§a电力§r！记得插上你的§a能源仓§r！',
                '==========',
                '潜在Bug提示：如果你遇见了堆叠 >64 的掉落物，请务必手动进入机器将其捡出来',
                '             否则无法正常回收到输出总线']
        ],[
            'megacells:cable_mega_interface',
            ['请使用 EAE 的 ME 扩展接口']
        ],[
            'megacells:cable_mega_pattern_provider',
            ['请使用 EAE 的 ME 扩展样板供应器']
        ]
    ]

    tooltipPairs.forEach(prr=>{
        prr[1].forEach(line=>{
            e.add(prr[0],line)
        })
    })

    const elementPairs = [
        [
            [mcforms('minecraft','iron'),'mekanism:dust_iron','minecraft:iron_nugget','create:iron_sheet','createaddition:iron_rod'],
            'Fe'
        ],[
            ['tfmg:cast_iron_block','tfmg:cast_iron_ingot','tfmg:cast_iron_sheet','jaopca:gears.cast_iron','jaopca:rods.cast_iron'],
            'Fe100C'
        ],[
            ['create:andesite_alloy','create:andesite_alloy_block'],
            'Fe3Al2Si2O7'
        ],[
            ['create:brass_ingot','create:brass_nugget','create:brass_sheet','jaopca:gears.brass','createaddition:brass_rod'],
            'CuZn'
        ],[
            [mcforms('create','zinc'),'jaopca:dusts.zinc','jaopca:gears.zinc','jaopca:rods.zinc','createaddition:zinc_sheet'],
            'Zn'
        ],[
            [mcforms('minecraft','copper'),'mekanism:dust_copper','jaopca:gears.copper','createaddition:copper_rod','create:copper_sheet'],
            'Cu'
        ],[
            ['kubejs:magnetize_iron_ingot','kubejs:magnetize_iron_sheet','kubejs:magnetize_iron_rod'],
            'Fe'
        ],[
            ['kubejs:steel_plate','kubejs:steel_double_plate','mekanism:ingot_steel','mekanism:nugget_steel','mekanism:dust_steel'],
            'Fe100C'
        ]
    ]

    elementPairs.forEach(prr=>{
        prr[0].forEach(item => {
                e.add(item,chemicalFormat(prr[1]))
        })
    })
}
)