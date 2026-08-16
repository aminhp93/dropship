# PPSPY Dashboard: Nguồn Dữ Liệu & Phương Pháp Tính Toán

Tài liệu này tổng hợp toàn bộ nguồn gốc dữ liệu (Data Sources), công thức tính toán (Formulas), và phân định rõ giữa **Dữ liệu Thực tế (100% Live Real Data)** và **Mô hình Dự báo Benchmark (Estimated Model)** được áp dụng trong hệ thống PPSPY Dashboard.

---

## 📌 1. Bảng Phân Định Nguồn Dữ Liệu (Data Matrix)

| Chỉ Số / Hạng Mục | Phân Loại | Cơ Chế Quét / API Source | Độ Tin Cậy |
| :--- | :--- | :--- | :--- |
| **Danh mục sản phẩm (Products)** | **Real Live Data** | Quét qua Shopify Public API: `https://<domain>/products.json?limit=50` | **100% Thực tế** |
| **Giá bán, Giá niêm yết ($)** | **Real Live Data** | Trích xuất từ thuộc tính `price` & `compare_at_price` của từng biến thể sản phẩm | **100% Thực tế** |
| **Ảnh sản phẩm 4K & Tags** | **Real Live Data** | Trích xuất thuộc tính `images[0].src` & `tags` trong `/products.json` | **100% Thực tế** |
| **Giá AOV (Average Order Value)** | **Real Live Data** | Tính toán trực tiếp từ danh mục sản phẩm thật đã quét | **100% Thực tế** |
| **Shopify Theme Name** | **Real Live Data** | Quét mã JS `Shopify.theme.name` & đường dẫn CSS CDN (`cdn.shopify.com`) | **100% Thực tế** |
| **Meta Facebook Pixel ID** | **Real Live Data** | Regex quét thẻ script `fbq('init', 'PIXEL_ID')` trên DOM trang chủ | **100% Thực tế** |
| **TikTok Pixel ID** | **Real Live Data** | Regex quét thẻ script `ttq.load('PIXEL_ID')` trên DOM trang chủ | **100% Thực tế** |
| **Danh sách Apps cài đặt** | **Real Live Data** | Nhận diện dấu vết Script bên thứ ba (Loox, Klaviyo, PageFly, DSers, Judge.me...) | **100% Thực tế** |
| **Doanh thu / Traffic / Global Rank** | **3rd-Party Estimate** | Gọi API Apify actor [`apivault_labs/shopify-store-analyzer`](https://apify.com/apivault_labs/shopify-store-analyzer) (~$0.007/store) | **Ước tính từ traffic panel bên thứ 3** — không phải số bán hàng thật của store, xem mục 4 |
| **Cơ cấu nguồn Traffic (Search/Social/Paid/...)** | **3rd-Party Estimate** | Trường `traffic.traffic_sources` trong response của actor trên, theo từng domain | **Ước tính riêng theo domain** (trước đây là số cố định, đã sửa) |

---

## 🧮 2. Công Thức & Phương Pháp Tính Toán

### 2.1. Giá Trị Đơn Hàng Trung Bình (AOV Real)
$$\text{AOV} = \frac{\sum_{i=1}^{N} P_i}{N}$$
* Trong đó:
  * $P_i$: Giá bán thực tế của sản phẩm thứ $i$ trong danh mục `/products.json`.
  * $N$: Tổng số lượng sản phẩm quét được.

### 2.2. Ước Tính Doanh Thu & Traffic (Apify 3rd-Party Estimate)

> ⚠️ **Lịch sử thay đổi**: Bản trước của tài liệu này mô tả một "Dynamic Benchmark Model" tự chế — doanh thu/traffic được tính bằng công thức dựa trên **checksum của tên domain** (`DomainSeed = tổng mã ký tự`) cộng với số lượng sản phẩm. Công thức đó **không có căn cứ dữ liệu thật nào cả** — hai store có cùng số sản phẩm sẽ luôn ra doanh thu gần giống nhau bất kể traffic/doanh số thực tế khác nhau ra sao. Mô hình này **đã bị gỡ bỏ**.

Từ phiên bản hiện tại, doanh thu/traffic được lấy qua gọi API tới actor **[`apivault_labs/shopify-store-analyzer`](https://apify.com/apivault_labs/shopify-store-analyzer)** trên nền tảng Apify:

- **Endpoint**: `POST https://api.apify.com/v2/actors/apivault_labs~shopify-store-analyzer/run-sync-get-dataset-items?token=<APIFY_API_TOKEN>`
- **Input**: `{ mode: "analyze", storeUrls: ["https://<domain>"], conversionRate: 2.4, extractTraffic: true, extractRevenueEstimate: true }`
- **Output dùng**: `revenue_estimate.monthly_revenue_usd_est`, `revenue_estimate.annualized_revenue_usd_est`, `traffic.monthly_visits`, `traffic.global_rank`, `traffic.traffic_sources`
- **Giá**: ~$7 / 1.000 store phân tích (~$0.007/lượt quét)
- **Nếu `APIFY_API_TOKEN` chưa cấu hình hoặc actor lỗi**: backend trả về `revenueEstimate.available = false` kèm lý do — **dashboard không bịa số thay thế**, chỉ hiển thị "Không khả dụng".

**Lưu ý quan trọng về độ tin cậy**: đây vẫn là **ước tính của bên thứ 3** (dựa trên traffic panel/clickstream + heuristic bán hàng), không phải doanh số thật của store — không có công cụ public nào biết chính xác doanh số của một store Shopify trừ khi họ tự công bố. Theo khảo sát ngành, các công cụ dạng này (StoreLeads, Koala Inspector, PPSPY.com...) tự nhận độ chính xác **70-85%**, và các nguồn "chuẩn" hơn như SimilarWeb/Semrush chỉ đáng tin với store >100k visits/tháng (sai số 15-25%; dưới ngưỡng đó sai số 30-50%). Nên dùng số này để **so sánh tương đối** giữa các store, không dùng làm căn cứ tuyệt đối khi quyết định sản phẩm.

---

## 🛠 3. Kiến Trúc Backend API Proxy

* **Endpoint**: `GET /api/v1/personal/dropshipping/spy?domain=<domain>`
* **Mã nguồn**: [route.ts (githubcoffee-api)](file:///Users/aminhp93/personal/githubcoffee/githubcoffee-api/src/app/api/v1/personal/dropshipping/spy/route.ts)
* **Frontend Component**: [PPSPYDashboard.tsx](file:///Users/aminhp93/personal/dropship/src/features/dropshipping/components/PPSPYDashboard.tsx)

### Luồng Xử Lý Trực Tiếp (Live Execution Flow):
1. **Client Frontend**: Người dùng nhập domain (ví dụ `govee.com`).
2. **Backend Proxy**:
   * `fetch("https://govee.com")`: Phân tích HTML DOM bóc tách Theme, Pixels, Apps.
   * `fetch("https://govee.com/products.json?limit=50")`: Lấy danh sách sản phẩm thật, giá bán, ảnh 4K.
   * `POST api.apify.com/.../apivault_labs~shopify-store-analyzer/run-sync-get-dataset-items`: Lấy ước tính doanh thu/traffic/nguồn traffic từ Apify (chỉ chạy nếu có `APIFY_API_TOKEN`).
3. **Dynamic Response**: Trả về dữ liệu JSON gồm phần **Real Data** (products/theme/pixels/apps) và phần **`revenueEstimate`** (ước tính bên thứ 3, hoặc `available: false` nếu chưa cấu hình/lỗi) cho Frontend hiển thị đúng bản chất từng loại dữ liệu.

### Cấu hình cần thiết
Thêm vào `.env.local` của backend (`githubcoffee-api`):
```
APIFY_API_TOKEN="<token từ https://console.apify.com/account/integrations>"
```
Và "rent" (kích hoạt pay-per-event) actor tại [apify.com/apivault_labs/shopify-store-analyzer](https://apify.com/apivault_labs/shopify-store-analyzer) trước khi gọi được — đây là bước người dùng phải tự làm trên tài khoản Apify của mình.
