function mangConCoTongLonNhat(arr) {
    if (arr.length === 0) {
    }
    let currentSum = arr[0];
    let startIndex = 0;n
    let endIndex = 0; 
    for (let i = 1; i < arr.length; i++) {
        if (currentSum < 0) {
            currentSum = arr[i];
            startIndex = i;
        } else {
            currentSum += arr[i];
        }
        if (currentSum > maxSum) {
            maxSum = currentSum;
            endIndex = i;
        }
    }
    return arr.slice(startIndex, endIndex + 1);
}
let mangSoNguyen = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let ketQua = mangConCoTongLonNhat(mangSoNguyen);
console.log("Mảng con có tổng lớn nhất:", ketQua);
