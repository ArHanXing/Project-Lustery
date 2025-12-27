# Lustful Sky
upcoming a fucking huge industrial pack with shits filled

## 协议
using GPLv3 for using of JustARod.
## 大纲
[如果你想看灵感来源](https://gemini.google.com/share/3b265bc64000)
- t1 机械动力飞速版。mek线缆，CCA电力。
- t2 TFMG。淫能发电。
## 鸣谢
- CrystalNeko 的代码付出！
- HgTlPbBi 陪我吹水以及贡献
- MMR、CM的作者，方糕组的KJS教程
## 机器缩写速查
cmy：Custom Machinery
mmr: Modular Machine Reborn
| 缩写 | 真名！ |
| ----- | ----- |
| lpe | 淫能脉冲引擎 cmy |
| pow | 原始洗矿机 mmr |
| psc | 原始碎石机 mmr |
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
