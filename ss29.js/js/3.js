function demSoKyTu(chuoi) {
    let soKyTu = 0;
    for (let i = 0; i < chuoi.length; i++) {
        if (chuoi[i] !== ' ') {
            soKyTu++;
        }
    }
    return soKyTu;
}
let khaiBao = "Chương trình xử lý chuỗi";
let ketQua = demSoKyTu(khaiBao);
console.log("Số ký tự trong chuỗi (không tính ký tự trống):");
console.log(ketQua);
