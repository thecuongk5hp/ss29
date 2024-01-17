function locCacPhanTuChuaChuoi(mang, chuoi) {
    let ketQua = [];
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].includes(chuoi)) {
            ketQua.push(mang[i]);
        }
    }
    return ketQua;
}
let chuoiNhap = prompt("Nhập vào một chuỗi:");
let mangChuoi = ["chuột", "mèo", "hổ", "gà", "lợn"];
let ketQua = locCacPhanTuChuaChuoi(mangChuoi, chuoiNhap);
console.log(`Các phần tử trong mảng chứa chuỗi '${chuoiNhap}':`);
console.log(ketQua);
