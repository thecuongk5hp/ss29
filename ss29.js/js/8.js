function kiemTraTaoChuoi(chuoiKhaiBao, chuoiNhapVao) { 
    let mangKyTuKhaiBao = chuoiKhaiBao.split('');
    let mangKyTuNhapVao = chuoiNhapVao.split(''); 
    for (let i = 0; i < mangKyTuNhapVao.length; i++) {
        let kyTu = mangKyTuNhapVao[i];
        let index = mangKyTuKhaiBao.indexOf(kyTu); 
        if (index === -1) {
            return false;
        } 
        mangKyTuKhaiBao.splice(index, 1);
    } 
    return true;
} 
let chuoiKhaiBao = "abcdef"; 
let chuoiNhapVao = prompt("Nhập vào một chuỗi:"); 
let ketQua = kiemTraTaoChuoi(chuoiKhaiBao, chuoiNhapVao);
console.log(`Có thể tạo ra chuỗi "${chuoiNhapVao}" từ chuỗi "${chuoiKhaiBao}": ${ketQua}`);
