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
| **Doanh thu 12 tháng & Traffic** | **Estimated Model** | Thuật toán mô hình hóa Benchmark dựa trên AOV, sản phẩm On-sale & CR 2.4% | **Ước tính Benchmark** |

---

## 🧮 2. Công Thức & Phương Pháp Tính Toán

### 2.1. Giá Trị Đơn Hàng Trung Bình (AOV Real)
$$\text{AOV} = \frac{\sum_{i=1}^{N} P_i}{N}$$
* Trong đó:
  * $P_i$: Giá bán thực tế của sản phẩm thứ $i$ trong danh mục `/products.json`.
  * $N$: Tổng số lượng sản phẩm quét được.

### 2.2. Ước Tính Doanh Thu & Traffic 12 Tháng (Dynamic Benchmark Model)
Mô hình sử dụng chỉ số mùa vụ thị trường E-commerce Mỹ ($S_m$) kết hợp với số lượng sản phẩm catalog và giá AOV thực tế:

1. **Số lượng đơn hàng ước tính theo tháng ($O_m$)**:
   $$O_m = \max\left(120, N \times 80 + \text{DomainSeed} \pmod{400}\right) \times S_m$$

2. **Doanh thu ước tính theo tháng ($R_m$)**:
   $$R_m = O_m \times \text{AOV}$$

3. **Lượt truy cập Traffic ước tính ($V_m$)**:
   Với tỷ lệ chuyển đổi chuẩn E-commerce US (Conversion Rate $CR = 2.4\%$):
   $$V_m = \frac{R_m}{\text{AOV} \times 0.024}$$

4. **Chỉ số Mùa Vụ ($S_m$) qua 12 tháng**:
   * **Tháng 11 (BFCM)**: $S_{11} = 1.60$
   * **Tháng 12 (Giáng Sinh)**: $S_{12} = 1.85$
   * **Các tháng bình thường**: $S_m \in [0.80, 1.45]$

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
3. **Dynamic Response**: Trả về dữ liệu JSON thực tế kết hợp chỉ số tính toán động cho Frontend hiển thị.
