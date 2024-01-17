function soLanXuatHien(chuoi, kyTu) {
    let soLanXuatHien = 0;
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] === kyTu) {
            soLanXuatHien++;
        }
    }
    return soLanXuatHien;
}
let chuoiNhap = prompt("Nhập vào một chuỗi:");
let kyTuNhap = prompt("Nhập vào một ký tự:");
let ketQua = soLanXuatHien(chuoiNhap, kyTuNhap);
console.log(`Số lần xuất hiện của ký tự '${kyTuNhap}' trong chuỗi: ${ketQua}`);
