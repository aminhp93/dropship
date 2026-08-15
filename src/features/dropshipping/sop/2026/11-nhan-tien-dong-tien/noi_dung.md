---
title: "Nhận Tiền & Quản Trị Dòng Tiền"
step: "PHASE 6"
icon: "Percent"
color: "border-rose-500/30 text-rose-500 bg-rose-500/5"
---

# Bước 6: Nhận Tiền & Quản Trị Dòng Tiền (Payment & Cash Flow)

Mục tiêu của bước này là thiết lập hệ thống thu tiền an toàn từ khách hàng quốc tế, giảm thiểu rủi ro bị khóa tài khoản giữ tiền và đảm bảo dòng vốn lưu động để vận hành liên tục.

---

## 1. Thiết Lập Hệ Thống Cổng Thanh Toán Quốc Tế

Khách hàng ở thị trường Mỹ/EU chủ yếu thanh toán bằng thẻ tín dụng hoặc ví điện tử PayPal. Bạn cần tích hợp 2 cổng này vào store Shopify:

- **Stripe (Cổng thanh toán thẻ tín dụng)**:
  - Nhận thanh toán trực tiếp qua thẻ Visa, Mastercard, AMEX, Apple Pay, Google Pay.
  - Đây là cổng có tỷ lệ chuyển đổi cao nhất vì khách không cần chuyển hướng trang khi thanh toán.
  - **Yêu cầu đăng ký**: Bạn cần thành lập công ty **US LLC** để nhận mã số thuế **EIN** và mở tài khoản ngân hàng doanh nghiệp Mỹ (ví dụ qua ngân hàng số Mercury hoặc Wise Business) để liên kết rút tiền từ Stripe về.
- **PayPal Business (Ví điện tử)**:
  - Khách hàng phương Tây cực kỳ tin tưởng PayPal vì họ được bảo vệ quyền lợi người mua (Buyer Protection).
  - Bạn có thể đăng ký tài khoản PayPal Business bằng thông tin cá nhân Việt Nam hoặc thông tin doanh nghiệp US LLC.

---

## 2. Quản Trị Rủi Ro Cổng Thanh Toán (Hạn chế Hold/Ban)

Các cổng thanh toán quốc tế rất nhạy cảm với các tài khoản mới có doanh thu tăng đột biến hoặc mô hình Dropshipping (do thời gian ship hàng lâu dễ bị khách hàng khiếu nại).

- **Cập nhật mã vận đơn (Tracking) ngay lập tức**:
  - Ngay khi nhà cung cấp AliExpress phát hành mã tracking đơn hàng, hãy sử dụng các ứng dụng đồng bộ tự động hoặc tự tay tải mã vận đơn lên cả bảng điều khiển Stripe và PayPal. Điều này chứng minh với hệ thống rằng bạn đang thực hiện giao hàng thật sự cho khách.
- **Cung cấp thông tin minh bạch khi được yêu cầu (Verification)**:
  - Khi đạt mốc doanh số nhất định, Stripe/PayPal sẽ yêu cầu bạn cung cấp hóa đơn mua hàng từ nhà cung cấp (AliExpress Invoice), giấy tờ pháp lý LLC, hoặc mã vận đơn giao hàng thành công. Hãy chuẩn bị sẵn sàng các giấy tờ này để gửi xác minh ngay lập tức.
- **Xử lý tranh chấp (Disputes) nhanh chóng**:
  - Nếu khách hàng mở khiếu nại (Dispute) vì hàng chậm hoặc lỗi, hãy chủ động liên hệ trực tiếp với khách để thương lượng hoàn tiền hoặc gửi bù sản phẩm mới. Tránh để khách hàng leo thang tranh chấp lên cổng thanh toán vì tỷ lệ tranh chấp cao (>1%) sẽ khiến tài khoản của bạn bị khóa vĩnh viễn và đóng băng tiền trong 180 ngày.

---

## 3. Quản Trị Dòng Tiền (Cash Flow) Cho Newbie

Đây là lỗi phổ biến nhất khiến nhiều người mới phải dừng lại dù đang có rất nhiều đơn hàng.

- **Hiểu về độ trễ dòng tiền**:
  - Khi khách hàng mua sản phẩm trên store, tiền của họ sẽ đi vào tài khoản Stripe hoặc PayPal của bạn.
  - Đối với các tài khoản mới, Stripe/PayPal thường sẽ giữ tiền (Payout Delay / Reserve) từ 2 đến 7 ngày (hoặc giữ lại một tỷ lệ phần trăm nhất định trong 21 ngày) để phòng ngừa rủi ro hoàn tiền trước khi cho phép bạn rút về ngân hàng.
  - Tuy nhiên, để nhà cung cấp AliExpress giao hàng đi, bạn bắt buộc phải trả tiền hàng cho họ **ngay lập tức**.
- **Giải pháp chuẩn bị dòng vốn**:
  - Bạn phải có sẵn một khoản tiền túi dự phòng khoảng **3.000.000 - 5.000.000 VNĐ** (hoặc chuẩn bị thẻ tín dụng hạn mức tương đương) để ứng trước trả tiền sỉ cho nhà cung cấp khi phát sinh đơn hàng.
  - Sau vài ngày, khi tiền từ Stripe/PayPal được giải ngân về ngân hàng, bạn mới rút ra để đập lại vào vốn xoay vòng này.
