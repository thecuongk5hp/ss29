function vietHoaDauTu(chuoi) {
    return chuoi.replace(/\b\w/g, char => char.toUpperCase());
}
let chuoiKhaiBao = "hello world";
let ketQua = vietHoaDauTu(chuoiKhaiBao);
console.log("Chuỗi ban đầu:", chuoiKhaiBao);
console.log("Chuỗi sau khi viết hoa chữ cái đầu:", ketQua);
