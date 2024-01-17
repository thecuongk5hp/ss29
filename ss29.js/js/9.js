// 1.Định nghĩa
// Callback là một hàm được truyền vào một hàm khác như một tham số và được gọi (thực hiện) sau khi hàm chứa nó hoàn thành công việc.  


// 2.Chức năng:
// Được sử dụng chủ yếu trong các tình huống xử lý bất đồng bộ như đọc/ghi file, gọi API, xử lý sự kiện.
// Giúp đảm bảo thứ tự thực hiện các tác vụ, tránh sự đồng thời.


// 3.Cách Callback Function Hoạt Động:
// 1.Truyền hàm như tham số:
// Callback functions thường được truyền vào như tham số của một hàm khác.

// 2.Sử dụng trong xử lý bất đồng bộ:
// Thông thường, callback functions được sử dụng để xử lý kết quả của các tác vụ bất đồng bộ như đọc file, gọi API, hoặc xử lý sự kiện.

// 3.Callback Hell (Callback Pyramid):
// Khi có nhiều tác vụ bất đồng bộ liên tiếp, có thể dẫn đến hiện tượng "Callback Hell" khi sử dụng nhiều callback functions lồng nhau.