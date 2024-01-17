function timCapSoTongBangX(mang, soCanTim) {
    for (let i = 0; i < mang.length - 1; i++) {
        for (let j = i + 1; j < mang.length; j++) {
            if (mang[i] + mang[j] === soCanTim) {
                return [mang[i], mang[j]];
            }
        }
    }
    return null;
} 
let mangSoNguyen = [2, 4, 6, 8, 10, 12]; 
let soNhapVao = parseInt(prompt("Nhập vào một số nguyên:")); 
let capSoTongBangX = timCapSoTongBangX(mangSoNguyen, soNhapVao);
if (capSoTongBangX) {
    console.log(`Cặp số trong mảng có tổng bằng ${soNhapVao}: ${capSoTongBangX[0]} và ${capSoTongBangX[1]}`);
} else {
    console.log(`Không có cặp số nào trong mảng có tổng bằng ${soNhapVao}`);
}

