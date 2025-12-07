const apiDefinition = "API là cầu nối giữa các ứng dụng để trao đổi dữ liệu";

const whyTestAPI = [
  "Đảm bảo tính đúng đắn",
  "Kiểm tra hiệu suất",
  "Phát hiện lỗi sớm"
];
let index = 1;
for (let lyDo of whyTestAPI) {
  console.log(`Lý do ${index}: ${lyDo}`);
  index++;
}