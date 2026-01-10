## 格式化代码
| 代码 | 名称 | 前景色 | 背景色 |
| :--- | :--- | :--- | :--- |
| §0 | black | `#000000` | `#000000` |
| §1 | dark_blue | `#0000AA` | `#00002A` |
| §2 | dark_green | `#00AA00` | `#002A00` |
| §3 | dark_aqua | `#00AAAA` | `#002A2A` |
| §4 | dark_red | `#AA0000` | `#2A0000` |
| §5 | dark_purple | `#AA00AA` | `#2A002A` |
| §6 | gold | `#FFAA00` | `#402A00` |
| §7 | gray | `#AAAAAA` | `#2A2A2A` |
| §8 | dark_gray | `#555555` | `#151515` |
| §9 | blue | `#5555FF` | `#15153F` |
| §a | green | `#55FF55` | `#153F15` |
| §b | aqua | `#55FFFF` | `#153F3F` |
| §c | red | `#FF5555` | `#3F1515` |
| §d | light_purple | `#FF55FF` | `#3F153F` |
| §e | yellow | `#FFFF55` | `#3F3F15` |
| §f | white | `#FFFFFF` | `#3F3F3F` |

| 代码 | 名称 | 在Java版可用 |
| :--- | :--- | :--- |
| §k | 随机 | 是 |
| §l | 粗体 | 是 |
| §m | 删除线 | 是 |
| §n | 下划线 | 是 |
| §o | 斜体 | 是 |
| §r | 重置 | 是 | 
## 大纲
作者眼高手低，这里的设计会严重超前于实际内容。（
[如果你想看灵感来源](https://gemini.google.com/share/3b265bc64000)
[如果你想看灵感来源 #2](https://chat.deepseek.com/share/3v26gvv9dwwf3yt0nj)
- t1 机械动力飞速版，CCA
这个阶段就能解锁AE的存储功能和电线，不过现在并不会有用电的大机器，电能的唯一来源是应力
- t2 工业长路
炼油，化工，下单！
- t3 MEK，星门之旅
- t4 mekExtra，戴森球
- t5a 龙之研究
假结局。
- t5b 新生魔艺
从这里解锁t6，当然内容未定。
- t6b 击败混沌龙，无尽贪婪
什么，科技包都有boss了？
## 缩写
cm：Custom Machinery

mmr: Modular Machine Reborn
| 缩写 | 真名！ | 来源 |
| ----- | ----- | ----- |
| pow | 原始洗矿机 | mmr |
| psc | 原始碎石机 | mmr |
| lpe | 淫能脉冲引擎 | cm |
| mrt | 淫液精炼塔 | mmr |
## jaopca的`zh_cn.json`常常被改
```json
	"jaopca.material.cneko": "水晶猫猫",
	"jaopca.material.dimensaurum": "万界金",
	"jaopca.material.copper_alloy":"硅铜合金",
	"jaopca.material.infused_entro":"恩特罗",
	"jaopca.material.plastic": "塑料",
	"jaopca.material.draconium": "龙素",
	"jaopca.material.draconium_awakened": "觉醒龙素",
```
## tools
```cpp
//JAOPCA的色号转换
#include <iostream>
#include <iomanip>
using namespace std;
void decimalToRGB(int decimalColor, int& r, int& g, int& b) {
    r = (decimalColor >> 16) & 0xFF;
    g = (decimalColor >> 8) & 0xFF;
    b = decimalColor & 0xFF;
}

int rgbToDecimal(int r, int g, int b) {
    return (r << 16) | (g << 8) | b;
}

int main() {
//第一行输入0 后输入3个数字 三位十进制转jaopca统一十进制
//第一行输入1 后输入jaopca十进制 转出hex
    int decimalColor;
    int r, g, b;
    bool flag=0;

    cin>>flag;
    if(flag){
    std::cin>>decimalColor;
    decimalToRGB(decimalColor, r, g, b);
    
    std::cout << "Decimal: " << decimalColor << std::endl;
    std::cout << "RGB: (" << r << ", " << g << ", " << b << ")" << std::endl;
    std::cout << "Hex: #" 
              << std::hex << std::setw(2) << std::setfill('0') << r
              << std::setw(2) << std::setfill('0') << g
              << std::setw(2) << std::setfill('0') << b
              << std::endl;
    }
    else{
        int r,g,b;
        cin>>r>>g>>b;
        cout<<"Decimal "<<rgbToDecimal(r,g,b)<<endl;
    }
    
    return 0;
}
```
