// Nguồn: workspace/dropship-progress/2-store/store-setup-checklist.md & ultra-car-mats-car-seat-covers.md
// Data cho Store Switcher: Store Apex Auto Mats (Của bạn) vs Ultra Car Mats (Đối thủ tham chiếu)

export type StoreChecklistItem = {
  id: string;
  label: string;
  howTo: string;
  done?: boolean;
  previewTitle?: string;
  previewContent?: string;
};

export type StoreChecklistSection = {
  id: string;
  title: string;
  items: StoreChecklistItem[];
};

export type StoreListEntry = {
  id: string;
  name: string;
  niche: string;
  domain: string;
  storeUrl: string;
  plan: string;
  status: string;
  badgeText: string;
  isCompetitor?: boolean;
};

export const STORE_LIST: StoreListEntry[] = [
  {
    id: "apex-auto-mats",
    name: "Apex Auto Mats",
    niche: "Car Mats & Seat Covers",
    domain: "t5e41i-5q.myshopify.com",
    storeUrl: "https://t5e41i-5q.myshopify.com/",
    plan: "Basic ($39/mo)",
    status: "Đang setup — theo checklist A→N bên dưới",
    badgeText: "Store Của Bạn (Your Store)",
    isCompetitor: false,
  },
  {
    id: "ultra-car-mats",
    name: "Ultra Car Mats",
    niche: "Custom Car Mats & Seat Covers",
    domain: "ultracarmats.com",
    storeUrl: "https://ultracarmats.com/",
    plan: "Shopify Advanced / Plus",
    status: "Store Live — 100,000+ Customers, Est. 2021",
    badgeText: "Đối Thủ Tham Chiếu (Reference Store)",
    isCompetitor: true,
  },
];

export const APEX_STORE_CHECKLIST: StoreChecklistSection[] = [
  {
    id: "A",
    title: "A. Dọn dữ liệu cũ (làm trước tiên)",
    items: [
      {
        id: "A1",
        done: true,
        label: "Xóa 3 product cũ (Custom-Fit Car Floor Mats/Seat Covers/Boot Liners, giá 149/199/92) — tự xóa trong Shopify Admin → Products.",
        howTo: "Admin → Products → chọn từng product → Delete.",
        previewTitle: "Dọn dẹp sản phẩm rác cũ",
        previewContent: `### Chi tiết dọn dẹp sản phẩm cũ
- **Lý do**: Xóa 3 sản phẩm tạo thử nghiệm ban đầu (giá cũ 149/199/92 USD) để tránh lộn xộn ID và SKU.
- **Trạng thái**: Đã hoàn thành (Xóa sạch 3 SKU cũ).`
      },
      {
        id: "A2",
        done: true,
        label: "Xóa 3 collection cũ tương ứng — Admin → Collections.",
        howTo: "Admin → Products → Collections → mở collection → Delete collection.",
        previewTitle: "Dọn dẹp danh mục cũ",
        previewContent: `### Chi tiết dọn dẹp danh mục (Collections)
- **Lý do**: Xóa các Collection tạo nháp ban đầu để chuẩn bị khởi tạo 3 Collection chuẩn theo Data Skeleton.
- **Trạng thái**: Đã hoàn thành.`
      },
      {
        id: "A3",
        done: true,
        label: "Xóa/sửa lại 2 shipping zone lỗi (\"internaltional\" sai chính tả, rate lộn xộn VND/USD) — Admin → Settings → Shipping and delivery.",
        howTo: "Admin → Settings → Shipping and delivery → mở shipping profile → sửa/xoá zone lỗi, tạo lại rate đúng.",
        previewTitle: "Xử lý Shipping Zone lỗi",
        previewContent: `### Sửa lỗi Shipping Profile
- **Tình trạng cũ**: Zone đặt tên sai chính tả ("internaltional") và bị lẫn lộn giữa mệnh giá VND và USD.
- **Giải pháp**: Xóa bỏ các Zone cũ, chuẩn bị thiết lập 2 Zone mới dành riêng cho AU (Australia) & UK (United Kingdom).`
      },
    ],
  },
  {
    id: "B",
    title: "B. Nền tảng store",
    items: [
      {
        id: "B1",
        done: true,
        label: "Xác nhận plan Shopify đủ dùng (đang Basic).",
        howTo: "Admin → Settings → Plan.",
        previewTitle: "Shopify Plan & Tài nguyên",
        previewContent: `### Thông tin Gói dịch vụ Shopify
- **Gói hiện tại**: Shopify Basic ($39/month hoặc $1 promo).
- **Đánh giá**: Đủ tính năng cho giai đoạn launch (Checkout, Online Store, SSL, Unlimited Products).`
      },
      {
        id: "B2",
        done: true,
        label: "Đổi tên store → Apex Auto Mats (Settings → Store details).",
        howTo: "Admin → Settings → General → Store details → Store name.",
        previewTitle: "Tên Thương Hiệu Store",
        previewContent: `### Tên Cửa Hàng (Store Name)
- **Tên cũ**: Store Test 1
- **Tên mới**: **Apex Auto Mats**
- **Slogan định vị**: *Precision Fit. All-Weather Protection.*`
      },
      {
        id: "B3",
        done: false,
        label: "Mua + kết nối domain riêng (apexautomats.com hoặc domain đã chốt).",
        howTo: "Admin → Settings → Domains → Buy new domain hoặc Connect existing domain.",
        previewTitle: "Domain Thương Hiệu (apexautomats.com)",
        previewContent: `### Cấu hình Tên miền (Domain)
- **Domain mục tiêu**: \`apexautomats.com\` hoặc \`apexautomats.au\`
- **Trạng thái**: Đang dùng domain mặc định \`t5e41i-5q.myshopify.com\`. Cần kết nối domain tùy chỉnh trước khi chạy Ads.`
      },
      {
        id: "B4",
        done: false,
        label: "Store email liên hệ (dùng cho support, không phải email cá nhân).",
        howTo: "Admin → Settings → General → Store details → Store contact email.",
        previewTitle: "Email Hỗ Trợ Khách Hàng (Support Email)",
        previewContent: `### Email Liên Hệ Thương Hiệu
- **Email hiện tại**: Email cá nhân Admin
- **Khuyến nghị**: Chuyển sang \`support@apexautomats.com\` hoặc email chuyên nghiệp riêng.`
      },
      {
        id: "B5",
        done: false,
        label: "Currency: xác nhận USD hay đổi sang AUD/GBP theo thị trường launch.",
        howTo: "Admin → Settings → Markets → thêm AU/UK, bật AUD/GBP làm presentment currency.",
        previewTitle: "Cấu hình Tiền tệ (Currency & Markets)",
        previewContent: `### Chiến lược Tiền tệ & Thị trường
- **Base Currency (Tiền tệ gốc)**: USD ($)
- **Presentment Currency (Tiền tệ hiển thị cho khách)**:
  - Thị trường AU ➔ Hiển thị AUD ($ AU)
  - Thị trường UK ➔ Hiển thị GBP (£)`
      },
    ],
  },
  {
    id: "C",
    title: "C. Theme & giao diện",
    items: [
      {
        id: "C1",
        done: true,
        label: "Cài theme Dawn (free) — Main Live Theme.",
        howTo: "Admin → Online Store → Themes.",
        previewTitle: "Theme Giao Diện (Shopify Dawn Theme)",
        previewContent: `### Cấu trúc Theme Dawn 15.0+
- **Kiểu dáng**: Modern Luxury Automotive Minimalism
- **Bố cục**: 12+ Section tùy biến linh hoạt, tối ưu tốc độ load < 1.8s.`
      },
      {
        id: "C2",
        done: true,
        label: "Upload logo (Huy hiệu Apex Auto Mats Shield Crest).",
        howTo: "Customize → Theme settings → Logo.",
        previewTitle: "Logo Thương Hiệu Apex Auto Mats",
        previewContent: `### Logo & Huy hiệu Thương hiệu
- **Bản phác thảo**: Huy hiệu dạng Khiên Vàng Carbon (Golden Shield Crest with White Ribbon Banner).
- **Màu sắc**: Vàng Gold, Đen Carbon Fiber & Chữ Trắng nổi bật.`
      },
      {
        id: "C3",
        done: true,
        label: "Set màu chủ đạo: Đen #121212 + Accent #E67E22.",
        howTo: "Customize → Theme settings → Colors.",
        previewTitle: "Bảng Màu Chủ Đạo (Color Palette)",
        previewContent: `### Bảng Màu Thương Hiệu (Design System Palette)
- **Primary Background (Nền chính)**: Black Dark \`#121212\` / Pure White \`#FFFFFF\`
- **Accent Color (Nút mua & Điểm nhấn)**: Warm Gold & Orange \`#E67E22\`
- **Text Color**: Dark Charcoal \`#1A1A1A\` & Muted Gray \`#666666\``
      },
      {
        id: "C4",
        done: true,
        label: "Set font: Montserrat (heading) + Inter (body).",
        howTo: "Customize → Theme settings → Typography.",
        previewTitle: "Typography & Font chữ",
        previewContent: `### Quy chuẩn Font Chữ (Typography)
- **Headings (Tiêu đề)**: **Montserrat** (Bold 700 / Semi-Bold 600) — Mang lại cảm giác thể thao, cứng cáp cho ngành xe hơi.
- **Body Text (Nội dung)**: **Inter** (Regular 400 / Medium 500) — Đạt độ đọc hiểu tối ưu trên mọi màn hình điện thoại.`
      },
      {
        id: "C5",
        done: true,
        label: "Favicon 512x512px.",
        howTo: "Customize → Theme settings → Favicon.",
        previewTitle: "Favicon Thương Hiệu",
        previewContent: `### Icon Tab Trình Duyệt (Favicon)
- **Định dạng**: 512x512px PNG Tách Nền.
- **Hình ảnh**: Huy hiệu khiên vàng Apex thu nhỏ hiển thị nổi bật trên tab Chrome/Safari.`
      },
      {
        id: "C6",
        done: true,
        label: "Homepage: hero + 3 khối benefit + featured collections + FAQ.",
        howTo: "Customize → Trang Home sections.",
        previewTitle: "Nội Dung Trang Chủ (Homepage Copy Draft)",
        previewContent: `### Nội Dung Dựng Trang Chủ (Homepage Copy Draft)

#### 1. Hero Banner
- **Headline**: *Custom-Engineered Leather Floor Mats & Premium Protection*
- **Subtitle**: *Tailored fit for 1,000+ car models. Heavy-duty 5D leather, 100% water & mud resistant.*
- **CTA Button**: *Shop Custom Mats Now*

#### 2. 4 Khối Giá Trị Cốt Lõi (Benefits)
1. **100% Custom Fit Guarantee**: Scan 3D theo chuẩn phom xe nguyên bản.
2. **All-Weather Heavy Duty**: Chống nước, chống tuyết, bùn bẩn tuyệt đối.
3. **5D Premium PU Leather**: Chất liệu da 5 lớp chịu ma sát cao.
4. **5-Minute Easy Setup**: Tháo lắp chốt khóa nhanh chóng, dễ dàng xịt rửa.

#### 3. Khối FAQ Trang Chủ
- *Q: Thảm sàn có vừa khít xe của tôi không?*
  ➔ **A**: Chúng tôi cắt máy laser theo dữ liệu 3D đời xe của bạn, cam kết vừa vặn 100%.
- *Q: Thời gian giao hàng bao lâu?*
  ➔ **A**: Thời gian sản xuất & vận chuyển Express tới AU/UK từ 7-12 ngày làm việc.`
      },
    ],
  },
  {
    id: "D",
    title: "D. Thị trường & pricing",
    items: [
      {
        id: "D2",
        done: true,
        label: "Set giá bán theo khuyến nghị: base $69-99 + add-on $25-35.",
        howTo: "Admin → Products → Pricing.",
        previewTitle: "Bảng Giá Sản Phẩm (Pricing Strategy)",
        previewContent: `### Chiến Lược Định Giá (Pricing Strategy)
- **Car Floor Mats (Thảm sàn)**: **$79.99 USD** (Compare-at: $129.99)
- **Leather Seat Covers (Áo ghế)**: **$119.99 USD** (Compare-at: $189.99)
- **Trunk Boot Liners (Lót cốp)**: **$59.99 USD** (Compare-at: $89.99)`
      },
      {
        id: "D3",
        done: true,
        label: "Compare-at price cho từng SKU.",
        howTo: "Admin → Products → Compare-at price.",
        previewTitle: "Giá Gốc So Sánh (Compare-at Prices)",
        previewContent: `### Mức Giảm Giá Hiển Thị (Discount Anchoring)
- Mức giảm giá niêm yết tạo cảm giác tiết kiệm từ 30% - 40% cho khách mua đầu tiên.`
      },
    ],
  },
  {
    id: "E",
    title: "E. Sản phẩm & Collection",
    items: [
      {
        id: "E1",
        done: true,
        label: "Tạo 10 product theo data skeleton (tên, giá, mô tả đã có sẵn).",
        howTo: "Admin → Products.",
        previewTitle: "Danh Sách 10 SKU Sản Phẩm Mẫu",
        previewContent: `### Danh Sách 10 Sản Phẩm Khởi Tạo

1. **Apex Diamond Leather Car Floor Mats (Black & Beige)** — $79.99
2. **Apex Stealth All-Black Custom Floor Mats** — $79.99
3. **Apex Sport Edition Red-Stitched Floor Mats** — $79.99
4. **Apex Blue Thread Leather Floor Mats** — $79.99
5. **Apex All-Weather Burgundy Red Floor Mats** — $79.99
6. **Apex Luxury Full-Cover Seat Protection Set (Black & Gray)** — $119.99
7. **Apex Racing Red & Black Leather Seat Covers** — $119.99
8. **Apex Solid Black Premium Seat Protection Set** — $119.99
9. **Apex Heavy-Duty Diamond Trunk Boot Liner (Black & Blue)** — $59.99
10. **Apex Custom Boot Mat & Rear Bumper Guard** — $59.99`
      },
      {
        id: "E4",
        done: true,
        label: "Tạo 3 collection: Car Mats / Seat Covers / Boot Liners.",
        howTo: "Admin → Products → Collections.",
        previewTitle: "3 Danh Mục Sản Phẩm Cốt Lõi",
        previewContent: `### 3 Collection Chính trên Store
- **Car Floor Mats**: Thảm sàn may đo 5D bảo vệ khoang lái.
- **Seat Covers**: Áo trùm ghế da chống bám bẩn & trầy xước.
- **Trunk Boot Liners**: Lót cốp sau chống nước & hành lý va đập.`
      },
    ],
  },
  {
    id: "G",
    title: "G. Compliance & claim (bắt buộc trước khi launch ads)",
    items: [
      {
        id: "G3",
        done: true,
        label: "Rà lại toàn bộ copy: không copy \"75,000+ customers\", không copy \"ship 5 ngày\".",
        howTo: "Đã rà copy.",
        previewTitle: "Quy Chuẩn Tuân Thủ Copywriting & Claim Khuyến Mãi",
        previewContent: `### Quy Định Trung Thực Nội Dung (Compliance Rules)
1. **Bỏ số liệu giả**: Không copy claim "75,000+ khách hàng" hay "Est. 2021" của đối thủ. Dùng *"Built in 2026"* trung thực.
2. **Bỏ claim túi khí chưa kiểm định**: Bỏ claim "Airbag Compatible" ở áo ghế cho tới khi supplier gửi chứng nhận thử nghiệm may xé thực tế.
3. **Thời gian ship chuẩn**: Ghi rõ 7-12 ngày làm việc (không ghi ship 3-5 ngày sai thực tế).`
      },
      {
        id: "G4",
        done: true,
        label: "Ghi đúng thời gian ship thật (7-12 ngày làm việc) trong FAQ + Shipping Policy.",
        howTo: "Sửa trong Theme FAQ + Shipping policy.",
        previewTitle: "Thông Tin Vận Chuyển Thực Tế",
        previewContent: `### Cam Kết Vận Chuyển Trực Tiếp
- **Thời gian chuẩn bị đơn**: 1-2 ngày làm việc.
- **Thời gian giao hàng (AU/UK)**: 7-12 ngày làm việc với mã Tracking theo dõi.`
      },
    ],
  },
  {
    id: "H",
    title: "H. Trang pháp lý & chính sách",
    items: [
      {
        id: "H1",
        done: true,
        label: "Privacy Policy (Chính sách bảo mật).",
        howTo: "Admin → Online Store → Pages.",
        previewTitle: "Privacy Policy (Chính Sách Bảo Mật)",
        previewContent: `### PRIVACY POLICY — APEX AUTO MATS

**Effective Date:** January 1, 2026

At **Apex Auto Mats**, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit or make a purchase from \`apexautomats.com\`.

#### 1. Information We Collect
- **Personal Information**: Name, shipping address, billing address, payment information, email address, and phone number.
- **Device Information**: IP address, browser type, time zone, and cookies.

#### 2. How We Use Your Information
We use order information to fulfill purchases, process payments, arrange shipping, and provide invoices or order confirmations.

#### 3. Data Protection & Security
We use SSL encryption to ensure your credit card and checkout data remain 100% secure. We do not sell or rent customer data to third parties.`
      },
      {
        id: "H2",
        done: true,
        label: "Refund/Return Policy (Đổi 1-đổi-1 trong 30 ngày nếu sai phom).",
        howTo: "Admin → Online Store → Pages.",
        previewTitle: "Refund & Return Policy (Chính Sách Đổi Trả)",
        previewContent: `### REFUND & RETURN POLICY — APEX AUTO MATS

#### 1. 30-Day Fit Guarantee (Cam kết 30 ngày vừa phom)
If your mats or seat covers do not fit your specific vehicle model as guaranteed, we will provide a **100% Free Replacement** or a full refund within 30 days of delivery.

#### 2. Return Conditions
- Item must be unused and in original packaging.
- Customer must provide photo evidence showing the fit issue along with vehicle Make/Model/Year details.

#### 3. How to Start a Return
Contact our support team at \`support@apexautomats.com\` with your Order Number and photo attachment.`
      },
      {
        id: "H3",
        done: true,
        label: "Shipping Policy (Thời gian ship 7-12 ngày).",
        howTo: "Admin → Online Store → Pages.",
        previewTitle: "Shipping Policy (Chính Sách Vận Chuyển)",
        previewContent: `### SHIPPING POLICY — APEX AUTO MATS

#### 1. Order Processing Time
All custom-fit orders require **1-2 business days** for laser cutting and quality inspection before dispatch.

#### 2. Shipping Delivery Times
- **Australia (AU)**: 7–12 business days (Standard Express Shipping)
- **United Kingdom (UK)**: 7–12 business days (Royal Mail / YunExpress)
- **Worldwide**: 8–14 business days

#### 3. Order Tracking
Once shipped, you will receive a confirmation email containing an active Tracking Number.`
      },
      {
        id: "H4",
        done: true,
        label: "Terms of Service (Điều khoản dịch vụ).",
        howTo: "Admin → Online Store → Pages.",
        previewTitle: "Terms of Service (Điều Khoản Dịch Vụ)",
        previewContent: `### TERMS OF SERVICE — APEX AUTO MATS

By visiting our site and/or purchasing from us, you engage in our "Service" and agree to be bound by the following terms and conditions.

#### 1. Online Store Terms
You may not use our products for any illegal or unauthorized purpose.

#### 2. Accuracy of Vehicle Details
Customers are responsible for selecting the correct Make, Model, and Year for custom-fit products during checkout.`
      },
      {
        id: "H5",
        done: true,
        label: "Contact Us + About Us + FAQ Pages.",
        howTo: "Admin → Online Store → Pages.",
        previewTitle: "Trang Contact Us & About Us",
        previewContent: `### ABOUT US — APEX AUTO MATS

At **Apex Auto Mats**, we believe your vehicle deserves the highest standard of interior protection. Engineered with precision 3D laser-scanning technology, our custom-fit leather floor mats and seat protection systems combine luxury craftsmanship with heavy-duty all-weather durability.

- **Support Email**: \`support@apexautomats.com\`
- **Working Hours**: Monday – Friday, 9:00 AM – 5:00 PM EST`
      },
    ],
  },
  {
    id: "N",
    title: "N. Master Audit Checklist (Full 10 Trang)",
    items: [
      {
        id: "N1",
        done: true,
        label: "N1. Trang Chủ: Announcement bar, Logo/Favicon, Menu Header/Footer, FAQ, Benefits.",
        howTo: "Verified 2026-08-24.",
        previewTitle: "Audit Checklist: Trang Chủ (Homepage)",
        previewContent: `### Audit Trang Chủ (Homepage Checklist)
- [x] **Announcement Bar**: "30-Day Fit Guarantee — Free Exchange"
- [x] **Logo & Favicon**: Logo Shield Crest Vàng/Đen + Favicon 512px
- [x] **Header & Footer Navigation**: Đủ link 3 Collection + Policy pages
- [x] **Homepage Copy**: Headline, Subtitle, 4 Benefits & FAQ`
      },
      {
        id: "N2",
        done: true,
        label: "N2. Trang Danh Mục (PLP): Banner, Description, Sort/Filter, Product Grid.",
        howTo: "Verified 2026-08-24.",
        previewTitle: "Audit Checklist: Trang Danh Mục (Collection Page)",
        previewContent: `### Audit Trang Danh Mục (Collection Page PLP)
- [x] **Banner Collection**: Đã bật \`show_collection_image\`
- [x] **Sort & Filter**: Bật lọc giá + Sắp xếp mặc định của Dawn
- [x] **Product Grid**: Lưới 2-4 cột trên PC & 2 cột trên Mobile`
      },
      {
        id: "N3",
        done: true,
        label: "N3. Trang Chi Tiết Sản Phẩm (PDP): Gallery, Price, Trust Badges, Material Specs & Care.",
        howTo: "Verified 2026-08-24.",
        previewTitle: "Audit Checklist: Trang Sản Phẩm (Product Detail Page)",
        previewContent: `### Audit Trang Sản Phẩm Chi Tiết (PDP)
- [x] **Trust Badges**: Block "30-Day Fit Guarantee · 12-Month Warranty · AU/UK Express 7-12 Days" dưới nút mua
- [x] **Product Description**: Bổ sung đủ 2 mục **Material Specs** (Thông số vật liệu) & **Installation & Care** (Hướng dẫn vệ sinh) cho cả 10 product.`
      },
      {
        id: "N7",
        done: true,
        label: "N7. Trang About Us: Sứ mệnh & câu chuyện thương hiệu.",
        howTo: "Verified 2026-08-24.",
        previewTitle: "Audit Checklist: Trang About Us",
        previewContent: `### Audit Trang About Us
- [x] Nội dung sứ mệnh bảo vệ nội thất xe hơi chuyên nghiệp.`
      },
      {
        id: "N8",
        done: true,
        label: "N8. Trang Contact Us: Form liên hệ & email support.",
        howTo: "Verified 2026-08-24.",
        previewTitle: "Audit Checklist: Trang Contact Us",
        previewContent: `### Audit Trang Contact Us
- [x] Dawn contact form (Name, Email, Message) hoạt động bình thường.`
      },
      {
        id: "N10",
        done: true,
        label: "N10. Các Trang Policy: Privacy, Refund, Shipping, Terms.",
        howTo: "Verified 2026-08-24.",
        previewTitle: "Audit Checklist: 4 Trang Chính Sách Pháp Lý",
        previewContent: `### Audit 4 Trang Chính Sách Pháp Lý
- [x] Privacy Policy
- [x] Refund & Return Policy
- [x] Shipping Policy
- [x] Terms of Service`
      },
    ],
  },
];

export const ULTRACARMATS_STORE_CHECKLIST: StoreChecklistSection[] = [
  {
    id: "U_A",
    title: "1. Brand Identity & Store Blueprint (ultracarmats.com)",
    items: [
      {
        id: "U_A1",
        done: true,
        label: "Tên thương hiệu & Vị thế: Ultra Car Mats — Brand phụ kiện khoang xe số 1 UK/US (Est. 2021).",
        howTo: "Store live: https://ultracarmats.com/",
        previewTitle: "Blueprint Thương Hiệu: Ultra Car Mats",
        previewContent: `### THÔNG TIN STORE ĐỐI THỦ: ULTRA CAR MATS
- **Domain**: \`ultracarmats.com\`
- **Năm thành lập**: 2021
- **Số lượt bán công bố**: 100,000+ Customers
- **Đánh giá Social Proof**: 4.8 / 5.0★ (Hơn 75,000 lượt đánh giá trên Trustpilot / Loox).
- **Thị trường chính**: US, UK, AU, EU.`
      },
      {
        id: "U_A2",
        done: true,
        label: "Vehicle Selector Widget (#ucmBrandSearch): Bộ lọc chọn phom xe Make ➔ Model ➔ Year.",
        howTo: "Giao diện chính trang chủ ultracarmats.com",
        previewTitle: "Bộ Lọc Chọn Dòng Xe (Fitment Selector)",
        previewContent: `### BỘ LỌC CHỌN XE (VEHICLE SELECTOR)
- **Cơ chế**: Cho phép chọn *Make (Hãng xe)* ➔ *Model (Dòng xe)* ➔ *Year (Năm sản xuất)*.
- **Tác động**: Giúp tăng tỷ lệ chuyển đổi CVR gấp 2.5 lần vì tạo niềm tin "sản phẩm may cắt chuẩn 100% cho xe tôi".
- **App sử dụng**: Globo Options / VFitz Custom App.`
      },
    ],
  },
  {
    id: "U_B",
    title: "2. Phân Tích Giá & Offer Upsell (ultracarmats.com)",
    items: [
      {
        id: "U_B1",
        done: true,
        label: "Mức định giá: Car Mats $59.99 - $89.99 | Seat Covers $119.99 | Boot Liners $59.99.",
        howTo: "Bảng giá thực tế trên ultracarmats.com",
        previewTitle: "Bảng Giá Niêm Yết & Phễu Upsell Đối Thủ",
        previewContent: `### BẢNG GIÁ & PHỄU CHUYỂN ĐỔI (PRICING FUNNEL)

#### 1. Mức giá bán lẻ niêm yết (USD)
- **Custom Leather Car Mats (Thảm sàn)**: $59.99 – $89.99 (Giá gốc: $129.99)
- **Luxury Seat Cover Full Set (Áo ghế)**: $119.99 (Giá gốc: $199.99)
- **Trunk Boot Liner (Lót cốp)**: $59.99 (Giá gốc: $99.99)

#### 2. Chiến thuật Upsell Combo
- Mua 2 ghế trước ➔ Gợi ý giảm 25% cho Hàng ghế sau.
- Mua Thảm sàn ➔ Gợi ý mua kèm Lót cốp tặng kèm Miễn phí Vận chuyển.`
      },
    ],
  },
  {
    id: "U_C",
    title: "3. Rủi Ro & Lỗi Claim Cần Tránh Copy (Legal & Risk Warning)",
    items: [
      {
        id: "U_C1",
        done: true,
        label: "🚩 Claim 'Airbag Compatible': Cụm từ tự xưng marketing, rủi ro pháp lý cao.",
        howTo: "Cảnh báo audit rủi ro",
        previewTitle: "⚠️ Cảnh Báo Claim Nối Ghế Túi Khí (Airbag Claim Warning)",
        previewContent: `### 🚩 RỦI RO NGHÊM TRỌNG NẾU COPY CLAIM ĐỐI THỦ

1. **Claim "Airbag Compatible" (Tương thích túi khí)**:
   - Ultra Car Mats dùng claim này trong marketing. Tuy nhiên, nếu bạn chưa có chứng nhận may đường chỉ xé túi khí từ Supplier (FMVSS 302 / ISO 3795), tuyệt đối **KHÔNG COPY CLAIM NÀY**.
   - Nếu túi khí bung không được do áo ghế bị bít, bạn sẽ chịu trách nhiệm bồi thường pháp lý nặng.

2. **Claim "Ship 3-5 ngày"**:
   - Đối thủ có kho 3PL nội địa tại Mỹ/Anh. Bạn là Newbie ship trực tiếp từ Supplier mất 7-12 ngày. Phải ghi đúng 7-12 ngày.`
      },
    ],
  },
  {
    id: "U_D",
    title: "4. Trang Chính Sách & Policy (ultracarmats.com)",
    items: [
      {
        id: "U_D1",
        done: true,
        label: "Privacy Policy & Shipping Policy của ultracarmats.com",
        howTo: "Footer links trên ultracarmats.com",
        previewTitle: "Chính Sách Vận Chuyển & Đổi Trả Của Đối Thủ",
        previewContent: `### NỘI DUNG CHÍNH SÁCH THAM CHIẾU ULTRACARMATS

#### 1. Shipping Policy
- Free Worldwide Express Shipping cho mọi đơn hàng trên $100.
- Thời gian giao hàng cam kết: 5-8 ngày làm việc.

#### 2. Returns Policy
- 30-Day Money Back Guarantee nếu sản phẩm lỗi phom xe.`
      },
    ],
  },
];
