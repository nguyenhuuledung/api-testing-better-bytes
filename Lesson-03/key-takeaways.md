# Note

**Authen vs Author**

+ Authen: bạn là ai

+ Author: bạn có quyền gì


**Term**

+  username, password: xác thực người dùng

+ Session ( server), cookie (client): duy trì đăng nhập cho người dùng
Cách lấy: log in trên web > dev mode | inspect > Aplication > Cookie

+ Base64 encode: mã hoá theo thuật toán Base64

+ Token: xác thực người dùng
    + Được tạo ra sau khi người dùng đăng nhập thành công
    + Thường có thời gian sử dụng ngắn hạn
    + Có thể chứa thông tin về user, quyền hạn, thời gian hết hạn
    + Các dạng token phổ biến:
        + Session Token (dùng trong session-cookie authentication).
        + Bearer Token (thường dùng trong OAuth 2.0).
        + JWT (JSON Web Token): Bearer token theo format <header.body.signature>

            iat = issue at | unixtime stamp

            exp = expired  | unixtime stamp
            + Cách dùng: đính kèm trong header hoặc query parameter

        **Website decode JWT**: 
    
            **jwt.io**

+ API Key

    + Cấp để ứng dụng hoặc người dùng truy cập API
    + Ko chứa thông tin người dùng
    + Thường ko đổi
    + Lưu trong header hoặc query parameters

**API Key** vs **Token**
+ Token: xác định người dùng
+ API Key: tạm thời trao quyền truy cập

**Auth method**

+ Basic Auth: encode base64 cho username/ password

Cách lấy: log in trên web > dev mode | inspect > Network > Header > Authorization

+ **Website encode base64**: https://www.base64decode.org/
+ API Key: 
    1. Tạo API Key
    2. Gắn API Key trong request
    3. Gọi API


// Mình cảm thấy chưa rõ là khi nào mình gặp/ cần xử lý Session Token/ Bearer Token/ JWT