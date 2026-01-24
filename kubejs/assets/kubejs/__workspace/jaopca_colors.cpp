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