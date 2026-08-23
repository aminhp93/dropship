import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { 
  Globe, 
  Target, 
  ShoppingBag, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const NGO_THANH_STEPS = [
  {
    id: "buoc-1",
    step: "BƯỚC 1",
    slideTitle: "Bài 1: Giới thiệu Dropship vs POD & Tư Duy Vận Hành",
    shortTitle: "1. Tổng Quan & So Sánh POD",
    icon: Globe,
    color: "from-blue-600 to-indigo-600",
    borderColor: "border-blue-500/30",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    summary: "Tổng quan mô hình, quản lý tài khoản Kikilogin, target 500-1000 đơn đầu tiên và so sánh ưu/nhược điểm giữa Dropshipping vs POD.",
    metrics: [
      { label: "Target Ban Đầu", value: "500 - 1.000 đơn" },
      { label: "Công Cụ Môi Trường", value: "Kikilogin + Proxy US" },
      { label: "Chi Phí Tồn Kho/Ship", value: "Giảm 30% qua Agent" }
    ],
    markdown: `
# BƯỚC 1: GIỚI THIỆU DROPSHIP VS POD & TƯ DUY VẬN HÀNH

*(Nội dung trích xuất từ Slide Bài 1 — Khoá Học Ngô Thành Ecom)*

---

## 1. Giới Thiệu Chung & Mục Tiêu Vận Hành

### Target 500 - 1.000 Đơn Hàng Đầu Tiên
- **Mục tiêu chính**: Đạt điểm hòa vốn (**Break-even**), không bị lỗ vốn, tập trung đo lường các chỉ số quảng cáo (CTR, CPC, Conversion Rate) và xây dựng tệp dữ liệu khách hàng chất lượng tại Mỹ/Châu Âu.
- **Hệ thống nuôi tài khoản sạch**:
  - Phần mềm quản lý đa tài khoản: **Kikilogin**.
  - Kết hợp **Residential Proxy tĩnh Mỹ** để đảm bảo địa chỉ IP sạch, tránh bị khóa cổng thanh toán (**Stripe / PayPal Business**) và tài khoản quảng cáo.

### Lợi Thế Cạnh Tranh Chuỗi Cung Ứng
- Làm việc với các kho vận và đơn vị fulfillment (Private Agent) chuyên biệt giúp tối ưu chi phí vận chuyển và quản lý hàng hóa rẻ hơn **30%** so với hình thức dropship thông thường từ Trung Quốc.

---

## 2. Bảng So Sánh Chi Tiết: Dropshipping vs POD (Print-on-Demand)

| Tiêu Chí | Dropshipping | POD (Print-on-Demand) |
| :--- | :--- | :--- |
| **Bản chất sản phẩm** | Sản phẩm vật lý có sẵn từ nhà cung cấp | In ấn hình thiết kế lên áo, cốc, tranh, quà tặng... |
| **Biên lợi nhuận (Profit)** | **Rất cao (Margin 3x - 4x)**, hậu mãi tốt | Vừa phải (chi phí in ấn và base cost cao) |
| **Yếu tố khách hàng** | Giải quyết nỗi đau (Problem-solving) & Wow factor | Thể hiện cái tôi, sở thích cá nhân, văn hóa tặng quà Mỹ |
| **Độ phức tạp khâu test** | Theo dõi thị trường **3-6 tháng**, đo lường ads kỹ (<20% active -> rủi ro lỗ), tốn chi phí làm UGC | "In là bán được", thử nghiệm thiết kế mockup nhanh |
| **Rủi ro vận hành** | Phụ thuộc nguồn hàng, rủi ro nứt gãy supply chain nếu chọn supplier rác | Rủi ro chênh lệch giữa ảnh mockup và sản phẩm thực tế |
| **Đánh giá phù hợp solo** | Cần chọn sản phẩm vốn nhỏ, test ít nhưng chất lượng | Cần am hiểu sâu văn hóa Mỹ, dễ bị copy mẫu |

---

## 3. Ưu & Nhược Điểm Của Dropshipping

### Ưu điểm
- **Sản phẩm phong phú, không phụ thuộc mùa vụ**: Có thể kinh doanh đa dạng ngách từ gia dụng, chăm sóc thú cưng, làm đẹp đến công nghệ mini.
- **Vốn ban đầu tối ưu**: So với quy mô tài chính của người bán nước ngoài, chi phí thử nghiệm mô hình này thấp hơn rất nhiều.

### Nhược điểm & Thách thức
- **Nguồn hàng bị động**: Nếu không làm việc trực tiếp với Private Agent hoặc kho trung gian uy tín, chất lượng sản phẩm và thời gian giao hàng khó kiểm soát.
- **Chi phí sản xuất content**: Sản phẩm Dropshipping hiện đại đòi hỏi phải làm video UGC (User Generated Content) thật hoặc đặt hàng về test, không thể dùng video rác cũ chạy ads.
`
  },
  {
    id: "buoc-2",
    step: "BƯỚC 2",
    slideTitle: "Bài 2: Tìm Kiếm & Tiêu Chí Lựa Chọn Sản Phẩm WIN",
    shortTitle: "2. Tiêu Chí & Săn Sản Phẩm",
    icon: Target,
    color: "from-purple-600 to-pink-600",
    borderColor: "border-purple-500/30",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    summary: "Kim chỉ nam kiếm tiền, không lan man: loại ngay sản phẩm đang trend và sản phẩm đã có sẵn ở local. Chọn khách hàng trước, sản phẩm sau, research đủ nhiều rồi mới chốt.",
    metrics: [
      { label: "Tiêu Chí Loại Trừ", value: "Không Trend, Không Local Brand" },
      { label: "Giá Bán Mục Tiêu", value: "Giá Vốn x3, $50-100" },
      { label: "Research Trước Khi Chốt", value: "~50 Sản Phẩm Để Có Gu" }
    ],
    markdown: `
# BƯỚC 2: TIÊU CHÍ CHỌN SẢN PHẨM (BẢN CHO NGƯỜI MỚI)

*(Tổng hợp từ Slide Bài 2 — Khoá Học Ngô Thành Ecom, viết lại đơn giản cho người mới)*

---

## 0. Kim chỉ nam: kiếm tiền, không lan man

Ở giai đoạn này mục tiêu duy nhất là **chọn được 1 sản phẩm để bắt tay vào làm**, không phải đi tìm sản phẩm hay nhất thế giới. Mỗi lần đổi ý sang sản phẩm khác là một lần bắt đầu lại từ số 0 — chọn xong theo đúng tiêu chí dưới thì bắt tay vào làm luôn, không tìm thêm nữa.

**2 tiêu chí loại ngay từ đầu** (dính 1 trong 2 điều này thì bỏ, tìm sản phẩm khác):
- **Không phải sản phẩm đang trend**: hàng trend (quà tặng theo mùa, hot dịp lễ...) chỉ bán được thời gian ngắn rồi phải liên tục tìm sản phẩm mới thay thế. Ưu tiên sản phẩm **niche** — bán được lâu dài, doanh thu ổn định, xây được thương hiệu, khách quay lại mua tiếp.
- **Không phải sản phẩm đã có sẵn ở local**: nếu khách mua được ngay tại cửa hàng gần nhà (kiểu BigW, Kmart...) hoặc đã có brand nội địa làm sẵn (ở VN có Nail Handy, Lush Nail, Tikhub — nhìn các brand này để biết loại sản phẩm nào coi như "hết cửa"), thì họ không có lý do gì đợi ship 1-2 tuần để mua online của mình.

---

## 1. Chọn khách hàng trước, chọn sản phẩm sau

Không lạm dụng tool spy để đi tìm sản phẩm ngay từ đầu. Thứ tự đúng:
1. Chọn 1 nhóm khách hàng cụ thể.
2. Tìm hiểu nhu cầu, nỗi đau của nhóm đó.
3. Từ đó chọn nhóm sản phẩm phù hợp.
4. Chọn 1 sản phẩm cụ thể trong nhóm đó.
5. Chọn kênh marketing phù hợp với sản phẩm.

## 2. Thị trường nên nhắm

| Thị trường | Dân số | Ghi chú cho người mới |
| :--- | :--- | :--- |
| Úc (AU) | ~16 triệu | Cạnh tranh thấp, ship nhanh hơn Mỹ — dễ bắt đầu |
| Anh (UK) | ~60 triệu | Cạnh tranh thấp, ship nhanh |
| Mỹ (US) | ~300 triệu | Thị trường lớn nhất nhưng cạnh tranh cao hơn |
| Canada, New Zealand | — | Để sau, chưa cần quan tâm giai đoạn này |

## 3. Tiêu chí sản phẩm (đầy đủ)

- Nhu cầu cao, **không phải hàng trend** — dùng được quanh năm, vòng đời sản phẩm rõ ràng.
- Không điện, không pin (dễ ship, ít rủi ro).
- Dễ sử dụng, tối ưu được phí ship, tối ưu được lợi nhuận.
- **Không phải sản phẩm đã bán sẵn ở local** và không trùng với sản phẩm brand nội địa đã làm.
- Có khả năng upsell về sau.
- Giá bán = giá vốn x 3 (case tốt có thể x4.5), rơi vào khoảng **$50-100/đơn**.
- Khi đặt hàng sản xuất, chỉ cần trả trước 30% cho xưởng.

## 4. Cách research 1 sản phẩm (quy trình lặp lại)

1. Tìm từ khoá của dòng sản phẩm trên **Google Trends** — xem nhu cầu 12 tháng gần nhất (hoặc 5 năm để chắc không phải trend nhất thời).
2. Kiểm tra lượt tìm kiếm từ khoá đó qua **Google Ads/Keyword Planner**.
3. Xem sản phẩm đang được quảng cáo thế nào trên **TikTok** và **Facebook Ads Library**.
4. Ghi lại kết quả, đánh giá — kể cả sản phẩm không đạt cũng note lại để đối chiếu về sau.

> **Trung bình phải research qua khoảng 50 sản phẩm thì kỹ năng chọn sản phẩm mới bắt đầu rõ ràng.** Đừng kỳ vọng sản phẩm đầu tiên tìm được đã đúng — đây là kỹ năng cần lặp lại nhiều lần mới quen.

## 5. Cách đọc Facebook Ads Library để đánh giá độ cạnh tranh

- Search tên sản phẩm trên Facebook Ads Library, xem số ad đang active vs inactive.
- **Inactive nhiều hơn active** → nhiều người đang chạy sản phẩm này bị lỗ, cẩn thận.
- Ưu tiên sản phẩm có **tỷ lệ active > 80%** và tổng số quảng cáo còn ít — nghĩa là còn "cửa" cho người mới.
- Theo dõi thêm 2-3 tháng xem có biến động không. Nếu ổn định → tập trung làm tốt hơn đối thủ ở những điểm họ đang làm chưa tốt, không sao chép y hệt.

---

## 6. Checklist thực hành
- [ ] Chọn ra Top 3 sản phẩm tiềm năng nhất, không dính 2 tiêu chí loại trừ ở mục 0.
- [ ] Kiểm tra giá vốn + phí ship trên AliExpress / DSers.
- [ ] Đặt ngay 1 mẫu sản phẩm thử nghiệm về Việt Nam để phục vụ quay phim UGC.
`
  },
  {
    id: "buoc-3",
    step: "BƯỚC 3",
    slideTitle: "Bài 3: Thiết Lập Store & Vận Hành Content Ads",
    shortTitle: "3. Shopify Store & TikTok Ads",
    icon: ShoppingBag,
    color: "from-emerald-600 to-teal-600",
    borderColor: "border-emerald-500/30",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    summary: "Store không cần đẹp trước — ưu tiên đủ trải nghiệm khách hàng (chính sách, review thật, follow-up, upsell). Làm 1 store hoàn chỉnh làm mẫu rồi nhân bản nhanh khi đổi sản phẩm.",
    metrics: [
      { label: "Số Sản Phẩm/Store", value: "8 - 12 Sản Phẩm" },
      { label: "Checklist Đủ Dùng", value: "5 Mục Trước Khi Làm Đẹp" },
      { label: "AOV Tăng Thêm", value: "+20% Nhờ Upsell/Cross-sell" }
    ],
    markdown: `
# BƯỚC 3: DỰNG STORE (BẢN CHO NGƯỜI MỚI)

*(Tổng hợp từ Slide Bài 3 — Khoá Học Ngô Thành Ecom, viết lại đơn giản + bổ sung cách làm nhanh)*

---

## 0. Kim chỉ nam: store không cần đẹp, cần đủ

Đừng dành quá nhiều thời gian chỉnh sửa store cho thật đẹp ngay từ đầu. Ưu tiên số 1 là **đủ trải nghiệm khách hàng** — khách vào store phải tin tưởng để mua và biết chuyện gì xảy ra sau khi bấm mua. Làm đẹp là việc để sau, khi còn thời gian.

---

## 1. Checklist "đủ trải nghiệm khách hàng" — làm TRƯỚC khi lo làm đẹp

- [ ] **Trang chính sách đầy đủ**: Return Policy, FAQ, chính sách vận chuyển, trang liên hệ — thiếu là khách không tin tưởng để mua.
- [ ] **Trang sản phẩm trung thực**: hạn chế dùng ảnh/nội dung AI, ưu tiên thể hiện đúng sản phẩm thật — khách cần cảm thấy sản phẩm "đang ở rất gần" chứ không mơ hồ.
- [ ] **Review thật**: gắn review Trustpilot hoặc app review (Loox/Judge.me).
- [ ] **Email follow-up khi ship**: báo khách đơn đã gửi để họ yên tâm chờ hàng.
- [ ] **Upsell / cross-sell**: gợi ý mua thêm ngay trên trang sản phẩm — có thể tăng AOV (giá trị đơn hàng trung bình) thêm khoảng **20%**.

---

## 2. Hoàn thiện 1 store làm chuẩn, sau đó dùng Claude để nhân bản nhanh

Chiến lược cho người mới: đừng làm nhiều store cùng lúc, và đừng design lại từ đầu mỗi lần đổi sản phẩm. Làm **1 store thật hoàn chỉnh** theo đúng checklist ở mục 1, rồi dùng nó làm khuôn mẫu — nhờ Claude nhân bản khi đổi sang sản phẩm/ngách mới.

### Tiêu chí để coi 1 store là "đã hoàn chỉnh, sẵn sàng làm mẫu"
- [ ] Đủ 5 mục trong checklist "đủ trải nghiệm khách hàng" ở mục 1.
- [ ] Theme, màu, font đã chốt — không còn sửa qua sửa lại.
- [ ] Đã cài đủ 3 app cố định (xem mục 4).
- [ ] Email template (xác nhận đơn, thông báo ship) đã viết sẵn.

### Cách nhân bản nhanh khi có sản phẩm/ngách mới
- **Giao diện**: xuất theme từ store gốc và đẩy sang store mới bằng Shopify CLI, thay vì tự set lại từng cài đặt bằng tay.
- **App**: Shopify chưa hỗ trợ tự động sao chép app giữa các store — vẫn phải cài tay theo đúng danh sách app cố định (mục 4).
- **Nội dung** (mô tả sản phẩm, trang chính sách, collection): đây là phần nhờ Claude làm nhanh nhất — đưa nội dung của store mẫu, đổi lại theo sản phẩm/ngách mới, rồi tạo thẳng trên store thay vì gõ tay từng ô.
- **Tên miền**: mỗi sản phẩm/ngách vẫn cần tên miền riêng, không dùng chung.

---

## 3. Thiết lập cơ bản (theo đúng slide gốc)

- **Nền tảng**: Shopify (gói trải nghiệm $1/tháng để tiết kiệm chi phí ban đầu).
- **Tên miền**: đuôi liên quan quốc gia đang nhắm (\`.com\`, \`.co\`, \`.uk\`, \`.store\`...) và liên quan sản phẩm.
- **Theme**: dùng **Dawn Theme** (miễn phí, tải nhanh, tối ưu mobile).
- **Đồng bộ nhận diện**: logo, font, màu theme giống nhau xuyên suốt store và mạng xã hội.
- **Xây theo đúng chân dung khách hàng** đã chọn ở Bước 2.
- **Số lượng sản phẩm: 8-12 sản phẩm/store** — không cần nhiều hơn ở giai đoạn đầu.
- **Banner linh hoạt, update thường xuyên** — không để banner cũ/hết khuyến mãi.

## 4. App bắt buộc phải cài (không cài thêm để tránh chậm trang)
1. **DSers**: kết nối Shopify với AliExpress, tự động đặt hàng và đồng bộ mã vận đơn.
2. **Loox / Judge.me**: import review thật kèm ảnh từ người mua trên AliExpress.
3. **Geolocation**: tự đổi tiền tệ theo quốc gia của khách truy cập.

---

## 5. Đăng bài kéo traffic (organic)
- Đăng đồng thời TikTok, Instagram Reels, YouTube Shorts.
- Tần suất 2-3 video/ngày, đều đặn — thuật toán cần sự đều đặn để phân phối tốt.
- Gắn link store vào bio, nhắc khách bấm vào bio để mua.
`
  }
];

export function QuyTrinh2026Tab() {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = NGO_THANH_STEPS[activeStepIndex];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-zinc-900 via-purple-950 to-zinc-900 border border-purple-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            Khoá Học Ngô Thành Ecom • 3 Slides Thực Chiến
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Quy Trình <span className="text-purple-400">Dropshipping 2026</span>
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            Hệ thống 3 bước chuẩn hoá từ slide bài giảng Ngô Thành Ecom: Giới thiệu & So sánh POD, Khung tiêu chí sản phẩm WIN & Kỹ thuật xây dựng Store + Content Tiktok Ads.
          </p>
        </div>
      </div>

      {/* Step Selector Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {NGO_THANH_STEPS.map((item, idx) => {
          const isActive = activeStepIndex === idx;
          const IconComponent = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveStepIndex(idx)}
              className={cn(
                "text-left p-5 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-4 relative overflow-hidden group cursor-pointer",
                isActive
                  ? "bg-zinc-900/90 border-purple-500 shadow-xl shadow-purple-500/10 ring-1 ring-purple-500/50"
                  : "bg-zinc-900/40 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60"
              )}
            >
              <div className="flex items-center justify-between w-full">
                <Badge variant="outline" className={cn("text-[10px] font-bold tracking-widest uppercase py-0.5 px-2.5", item.badgeColor)}>
                  {item.step}
                </Badge>
                <div className={cn(
                  "w-8 h-8 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
                  isActive ? "bg-purple-500 text-white" : "bg-zinc-800 text-zinc-400"
                )}>
                  <IconComponent className="w-4 h-4" />
                </div>
              </div>

              <div className="space-y-1">
                <h3 className={cn("font-bold text-sm transition-colors", isActive ? "text-white" : "text-zinc-300 group-hover:text-white")}>
                  {item.shortTitle}
                </h3>
                <p className="text-xs text-zinc-500 line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="flex items-center text-[11px] font-semibold text-purple-400 gap-1 pt-1">
                <span>{isActive ? "Đang xem chi tiết" : "Bấm để xem slide"}</span>
                <ArrowRight className={cn("w-3 h-3 transition-transform", isActive ? "translate-x-1" : "group-hover:translate-x-1")} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Step Content Card */}
      <Card className="bg-zinc-900/80 border-zinc-800 p-6 sm:p-8 rounded-3xl shadow-xl space-y-8">
        {/* Step Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500/30 text-xs font-bold">
                {currentStep.step}
              </Badge>
              <span className="text-xs text-zinc-500 font-mono">Slide Trình Chiếu {activeStepIndex + 1} / 3</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {currentStep.slideTitle}
            </h2>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {currentStep.metrics.map((metric, idx) => (
            <div key={idx} className="bg-zinc-950/60 border border-zinc-800/80 rounded-2xl p-4 space-y-1">
              <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-500 block">
                {metric.label}
              </span>
              <span className="text-sm font-extrabold text-purple-400 block font-mono">
                {metric.value}
              </span>
            </div>
          ))}
        </div>

        {/* Markdown Presentation Content */}
        <div className="prose dark:prose-invert max-w-none text-zinc-300 leading-relaxed text-sm">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              a: (props) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:underline font-medium"
                />
              ),
              table: (props) => (
                <div className="overflow-x-auto my-6 rounded-xl border border-zinc-800">
                  <table {...props} className="w-full text-left border-collapse text-xs" />
                </div>
              ),
              th: (props) => (
                <th {...props} className="bg-zinc-800/80 text-zinc-200 p-3 font-bold border-b border-zinc-700 uppercase tracking-wider text-[11px]" />
              ),
              td: (props) => (
                <td {...props} className="p-3 border-b border-zinc-800/60 text-zinc-300" />
              )
            }}
          >
            {currentStep.markdown}
          </ReactMarkdown>
        </div>
      </Card>
    </div>
  );
}
