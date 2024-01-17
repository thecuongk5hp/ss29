function phanTuLonNhat(mang) {
    if (mang.length === 0) {
        return "Mảng rỗng, không có phần tử.";
    }
    let phanTuLonNhat = mang[0];
    for (let i = 1; i < mang.length; i++) {
        if (mang[i].length > phanTuLonNhat.length) {
            phanTuLonNhat = mang[i];
        }
    }
    return phanTuLonNhat;
}
let mangNgauNhien = ["diện thoại", "máy tính", "laptop", "xiaomi", "quả táo"];
let ketQua = phanTuLonNhat(mangNgauNhien);
console.log("Phần tử có độ dài lớn nhất trong mảng:");
console.log(ketQua);
