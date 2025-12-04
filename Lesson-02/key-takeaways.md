# Note

**Request**

- Method - URL | scheme - subdomain/domain - path - query - fragment

- header

- Body

**Response**

- Status Code
- Header
- Body

**Header**
+ Cách lấy cURL:
    1. inspect / developer mode
    2. Network
    3. Chọn Name cần lấy > chuột phải Copy > Copy cURL

chứa các cặp [key : value] để trao đổi khi request > response

+ Có 4 loại header:
    1. General Headers
    2. Request Headers
    3. Response Headers
    4. Entity Headers

+ Các header phổ biến
    + Authentication Headers: xác  định danh tính
        1. Authorization: Bearer
        2. www-Autheticate: Basic 
    + Content Headers: phân loại dữ liệu
    + Caching Headers: 
        + cache : lưu dữ liệu trong bộ nhớ tạm
    + CORS Headers:
    + Security Headers:

**URL** : scheme - subdomain/domain - path - query - fragment

**Body:** phần dữ liệu được gửi

**Method**
+ Get: Lấy 
+ Post: Tạo
+ Put: Change toàn bộ
+ Patch: Change 1 phần
+ Delete: Xoá
+ Head: chỉ gửi header
+ Options:dùng khi security test

**Status Code**
+ 1xx: informational
+ 2xx: success
+ 3xx: redirection
+ 4xx: client error
+ 5xx: server error

// Nếu status code là khác nhau mỗi tổ chức thì mình bắt bug như thế nào?

