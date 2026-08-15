---
title: "Những Câu Hỏi Thường Gặp (FAQs)"
step: "PHẦN 5"
icon: "BookOpen"
color: "border-teal-500/30 text-teal-500 bg-teal-500/5"
---

# Những Câu Hỏi Thường Gặp (FAQs) - Dropship Global từ Việt Nam

Dưới đây là tổng hợp các câu hỏi thực tế quan trọng về vận hành cổng thanh toán, xử lý dòng tiền và giải quyết khiếu nại dành cho người mới bắt đầu.

---

## 1. Vận hành cổng thanh toán và xử lý tranh chấp (Disputes / Chargeback)

### Câu hỏi: Nếu khách hàng cố ý gây khó dễ, ép mình hoàn tiền hoặc muốn làm mình bị khóa cổng thanh toán, mình có được khiếu nại (Dispute) lại không? Có tác dụng thực tế không?

- **Được khiếu nại**: Khi khách mở Dispute trên PayPal hoặc gửi yêu cầu đòi tiền (Chargeback) qua ngân hàng của họ (Stripe nhận được), bạn hoàn toàn có quyền gửi bằng chứng phản hồi (Submit Evidence) bao gồm:
  - Mã vận đơn hiển thị trạng thái **"Delivered"** (Đã giao thành công) đến đúng địa chỉ đăng ký của khách hàng (qua các đơn vị vận chuyển uy tín như USPS, DHL, YunExpress).
  - Lịch sử trao đổi email cho thấy bạn đã chủ động giải quyết dịch vụ khách hàng.
  - Ảnh chụp các chính sách giao hàng và hoàn tiền hiển thị công khai trên store.
- **Tác dụng thực tế**:
  - **Với PayPal**: Tỷ lệ thắng dao động từ **50% - 70%** đối với khiếu nại "Chưa nhận được hàng" nếu bạn có mã vận đơn (tracking) hợp lệ.
  - **Với Stripe (do Ngân hàng của khách tự xét duyệt)**: Tỷ lệ thắng rất thấp, chỉ khoảng **15% - 30%**. Ngân hàng quốc tế hầu như luôn bảo vệ chủ thẻ của họ.
  - **Lưu ý cực kỳ quan trọng**: Dù bạn THẮNG hay THUA khiếu nại, cổng thanh toán vẫn tính đó là **1 điểm khiếu nại (Dispute)**. Nếu tỷ lệ Dispute vượt quá **1%** trên Stripe hoặc **1.5%** trên PayPal, tài khoản của bạn sẽ bị thanh tra và dễ bị **khóa vĩnh viễn**. Vì vậy, khiếu nại chỉ là giải pháp cuối cùng, không phải là cách đối phó bền vững.

### Câu hỏi: Nếu cổng thanh toán bị khóa (ban), số tiền còn lại trong cổng có rút ra được không? Cách xử lý thực tế ra sao?

- **Hoàn toàn rút được**, nhưng sẽ bị giam tiền (hold) có thời hạn để đảm bảo bạn không lừa đảo và có đủ tiền hoàn trả cho các khiếu nại phát sinh sau đó:
  - **Với Stripe**: Số dư sẽ bị đóng băng trong **120 ngày** (thời hạn tối đa chủ thẻ được quyền khiếu nại đòi tiền). Sau 120 ngày, Stripe sẽ tự động giải ngân số tiền còn lại về tài khoản ngân hàng US của bạn.
  - **Với PayPal**: Số tiền bị khóa cứng trong **180 ngày**. Đúng vào ngày thứ 181, PayPal sẽ gửi email thông báo số tiền được giải phóng và cho phép bạn rút về ngân hàng bình thường.
- **Cách xử lý thực tế**:
  - **Quy tắc bảo vệ tài khoản**: Nếu khách tỏ ra quá độc hại, spam đòi tiền hoặc đe dọa báo ngân hàng $\rightarrow$ **Hãy bấm Hoàn tiền 100% (Refund) ngay lập tức trên Shopify**. Mất $5 - $10 tiền vốn sỉ rẻ hơn rất nhiều so với phí phạt Chargeback ($15/lần) và nguy cơ hỏng tài khoản giữ hàng nghìn USD.
  - **Fraud Analysis**: Luôn kiểm tra cảnh báo rủi ro của Shopify trước khi giao hàng. Đơn hàng nào bị báo đỏ (High Risk - nghi ngờ dùng thẻ ăn cắp) thì hãy **hủy đơn và hoàn tiền ngay**.

---

## 2. Quy trình rút tiền về Việt Nam (Payout & Withdrawal)

### Câu hỏi: Sau khi có tiền ở Shopify Payments từ khách hàng, làm thế nào để rút về Việt Nam?

Dòng tiền đi từ lúc khách hàng quẹt thẻ trên store đến khi về tài khoản ngân hàng Việt Nam của bạn sẽ vận hành qua **4 bước** sau:

```
[Khách mua hàng] -> [Shopify Payments (USD)] -> [Ngân hàng US (Wise/Mercury)] -> [Ngân hàng Việt Nam (VND)]
```

- **Bước 1: Khách hàng thanh toán**: Khách mua hàng bằng thẻ tín dụng trên store Shopify (địa chỉ store cài đặt tại Mỹ dưới tên công ty US LLC của bạn).
- **Bước 2: Shopify Payments Payout**: Sau **2 đến 3 ngày làm việc**, Shopify Payments sẽ tự động gửi tiền (USD) về tài khoản ngân hàng doanh nghiệp Mỹ mà bạn đã đăng ký.
- **Bước 3: Tiền về ngân hàng số Mỹ**: Tiền nổi tại tài khoản ngân hàng doanh nghiệp của công ty bạn tại Mỹ (mở trực tuyến qua **Wise Business** hoặc **Mercury Bank** bằng bộ hồ sơ US LLC).
- **Bước 4: Rút tiền về Việt Nam**:
  - **Cách 1 (Khuyên dùng - Rẻ & Nhanh)**: Sử dụng tính năng gửi tiền (Send Money) trên **Wise Business** để chuyển trực tiếp từ USD thành VND về tài khoản ngân hàng cá nhân tại Việt Nam (Techcombank, Vietcombank,...). Tỷ giá của Wise rất sát tỷ giá thực tế, phí rẻ (~0.5%), tiền về tài khoản Việt Nam chỉ sau **vài phút đến 1 tiếng**.
  - **Cách 2**: Chuyển khoản quốc tế (Wire Transfer / SWIFT) trực tiếp từ **Mercury Bank** về tài khoản Việt Nam của bạn. Thời gian xử lý từ **1 đến 3 ngày**, tuy nhiên bạn sẽ chịu phí chuyển và tỷ giá quy đổi của ngân hàng Việt Nam.
- _Lưu ý_: Để sử dụng được Shopify Payments, bạn bắt buộc phải dùng thông tin **US LLC** (EIN, giấy đăng ký doanh nghiệp Mỹ) và đổi địa chỉ store sang địa chỉ doanh nghiệp Mỹ khi cấu hình.

---

## 3. Thuế & Phí giao dịch khi rút tiền về Việt Nam (Taxes & Fees)

### Câu hỏi: Các khoản phí giao dịch phát sinh từ lúc khách thanh toán đến lúc nhận được tiền ở Việt Nam gồm những gì?

Tổng chi phí trung gian (phí cổng thanh toán, phí ngân hàng, phí chuyển đổi ngoại tệ) thường dao động từ **4% - 5%** trên tổng doanh thu:

1. **Phí xử lý giao dịch của Shopify Payments**: ~**2.9% + $0.30 USD** mỗi đơn hàng (đối với gói Shopify cơ bản).
2. **Phí chuyển đổi ngoại tệ của cổng**: Khoảng **1.5% - 2%** nếu khách hàng thanh toán bằng đồng tiền khác với đồng tiền của store (ví dụ khách thanh toán bằng EUR, store nhận bằng USD). _Mẹo_: Đặt giá store bằng USD và nhận payout bằng USD về tài khoản ngân hàng US để tránh mất thêm phí chuyển đổi này.
3. **Phí chuyển khoản từ Shopify Payments về Ngân hàng US (Wise/Mercury)**: **0%** (Hoàn toàn miễn phí).
4. **Phí rút tiền về ngân hàng Việt Nam**:
   - **Nếu rút qua Wise Business**: Phí chuyển đổi ngoại tệ từ USD sang VND rất rẻ (khoảng **0.5% - 1%** tùy thời điểm), tỷ giá quy đổi tính theo tỷ giá thực tế trên thị trường (không bị ăn chênh lệch tỷ giá mua/bán như ngân hàng truyền thống).
   - **Nếu rút qua Mercury (chuyển SWIFT)**: Mercury miễn phí chuyển quốc tế, nhưng ngân hàng Việt Nam sẽ thu phí nhận tiền USD từ nước ngoài (khoảng $10 - $20 USD/lần) + tỷ giá quy đổi USD sang VND của ngân hàng Việt Nam thường thấp hơn Wise khoảng 1% - 1.5%.

### Câu hỏi: Tôi có phải đóng thuế tại Mỹ cho công ty US LLC của mình không?

- **Thuế thu nhập liên bang (US Federal Income Tax)**: **0% (Miễn thuế hoàn toàn)**.
  - _Lý do_: Vì bạn là người nước ngoài (Non-US Resident) sở hữu Single-Member LLC và hoạt động kinh doanh của bạn hoàn toàn nằm ngoài nước Mỹ (hàng ship trực tiếp từ Trung Quốc đi, bạn làm việc tại Việt Nam, không có văn phòng, kho bãi hay nhân viên làm việc trực tiếp tại Mỹ). Công ty của bạn được coi là **không có ECI (Effectively Connected Income)**.
- **Thuế bang (State Tax)**: **0%** nếu bạn thành lập LLC ở bang Wyoming hoặc New Mexico (hai bang này không thu thuế thu nhập bang đối với doanh nghiệp ngoài nước).
- **Chi phí kê khai bắt buộc hàng năm**: Bạn vẫn phải thuê dịch vụ (ví dụ Doola, Firstbase hoặc CPA) khai báo tờ khai thông tin bắt buộc **Form 1120 & 5472** lên IRS Mỹ hàng năm. Phí khai báo khoảng **$150 - $300/năm**. Không khai báo đúng hạn sẽ bị phạt rất nặng.

  - **Khi bắt đầu có doanh thu lớn & đều đặn**: Để dòng tiền được sạch 100% và tránh rủi ro bị ngân hàng phong tỏa giải trình sau này, bạn nên đăng ký thành lập một **Hộ kinh doanh cá thể** tại Việt Nam với ngành nghề "Thương mại điện tử". Thực hiện kê khai thuế khoán hàng tháng/quý theo mức 1.5% trên dòng tiền rút về để yên tâm vận hành và sử dụng tiền sạch tại Việt Nam.

### Câu hỏi: Trong thực tế, các solo dropshipper tại Việt Nam đang vận hành như thế nào? (Bí mật hậu trường)

Thực tế vận hành của các solo dropshipper ở Việt Nam thường đi qua các giai đoạn "lách" để tối ưu chi phí trước khi đi vào con đường chuyên nghiệp:

1. **Giai đoạn Test (Doanh thu < $2,000/tháng)**:
   - **Pháp lý**: Họ hoàn toàn **không lập US LLC** ngay từ đầu vì tiếc tiền phí duy trì ($200 - $400). Thay vào đó, họ dùng các tài khoản Stripe/PayPal "VIA" hoặc tài khoản cá nhân đăng ký lách qua các quốc gia được hỗ trợ (như UK, Singapore). Họ cũng có thể thuê cổng thanh toán của các bên trung gian (ăn chia 3% - 5% doanh thu).
   - **Content**: Họ hạn chế mua sản phẩm về tự quay. Thay vào đó họ đi "spy" (rình) đối thủ, tải video thô từ Douyin (TikTok Trung Quốc) hoặc Pinterest về để cắt ghép, đổi góc quay, chèn nhạc trend, lồng tiếng AI để lách thuật toán TikTok và đăng re-up kiếm traffic.
2. **Giai đoạn Có Đơn Đều ($2,000 - $10,000/tháng)**:
   - **Chuyển dịch Fulfill**: Họ bỏ AliExpress vì ship lâu và giá đắt. Họ chuyển sang làm việc với các **Private Agent** (đại lý vận chuyển cá nhân tại Trung Quốc) tìm qua WeChat/Skype. Các agent này sẽ mua hàng trực tiếp từ xưởng 1688 giá rẻ hơn 20-30% và cung cấp các đường bay ship nhanh (6-10 ngày tới Mỹ) chất lượng hơn nhiều.
   - **Pháp lý**: Khi dòng tiền ổn định, họ bắt buộc phải lập công ty **US LLC** hoặc **UK LTD** (Công ty Anh rẻ hơn, chỉ khoảng £12 để lập trực tiếp trên cổng chính phủ Anh) để tự mở Stripe và PayPal Business chính chủ nhằm bảo vệ dòng tiền.
3. **Thực tế khai thuế tại Việt Nam**:
   - Hầu hết các solo dropshipper khi rút tiền từ Wise về ngân hàng Việt Nam đều **không tự khai thuế**. Do Wise giải ngân tiền về VN thông qua các đối tác trung gian nội địa (hiển thị dưới dạng chuyển tiền cá nhân trong nước), cơ quan thuế hiện tại rất khó tự động truy quét các khoản tiền nhỏ lẻ này.
   - **Cách họ lách**: Để tránh bị ngân hàng chú ý (theo luật các giao dịch trên 400 triệu VNĐ sẽ bị báo cáo), họ thường **chia nhỏ số tiền rút**, chuyển về các tài khoản ngân hàng khác nhau của người thân, hoặc giữ phần lớn tiền ở tài khoản Wise/Mercury để dùng thanh toán trực tiếp cho nhà cung cấp Trung Quốc mà không rút hết về Việt Nam.
