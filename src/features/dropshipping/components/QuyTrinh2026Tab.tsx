import { MarketResearchTool } from './MarketResearchTool';
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

const NGO_THANH_STEPS = [
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
    summary: "Khung tiêu chí sản phẩm WIN (Wow Factor, Problem-Solving, High Margin 3x-4x, Ship-friendly) và kỹ thuật TikTok Organic / AliExpress Spy.",
    metrics: [
      { label: "Biên Lợi Nhuận", value: ">= 3x - 4x Margin" },
      { label: "Trọng Lượng Hàng", value: "< 500g (Easy Ship)" },
      { label: "TikTok Spy Window", value: "Lọc 1 Tháng Gần Nhất" }
    ],
    markdown: `
# BƯỚC 2: TÌM KIẾM & TIÊU CHÍ LỰA CHỌN SẢN PHẨM WIN

*(Nội dung trích xuất từ Slide Bài 2 — Khoá Học Ngô Thành Ecom)*

---

## 1. Khung Tiêu Chí Sản Phẩm WIN (Winning Product Framework)

Để một sản phẩm có thể thu hút lượt xem tự nhiên (Organic Traffic) và chuyển đổi tốt trên TikTok / Reels / Shorts, sản phẩm bắt buộc phải đáp ứng **4 tiêu chuẩn vàng**:

1. **Wow Factor (Yếu tố thu hút thị giác 3 giây đầu)**:
   - Gây tò mò, ấn tượng ngay lập tức khi cuộn màn hình (Ví dụ: Đèn chiếu hành tinh phi hành gia, cốc tự khuấy thông minh, máy in nhiệt không mực...).
2. **Problem-Solving (Giải quyết nỗi đau cụ thể)**:
   - Giúp khách hàng tiết kiệm thời gian, công sức hoặc giải quyết phiền ngoái đời thực (Ví dụ: Đầu chải khe hở bàn chải điện, máy hút lông thú cưng quần áo...).
3. **Biên Lợi Nhuận Cao (High Profit Margin >= 3x - 4x)**:
   - **Công thức giá**: Giá bán = Giá nhập (gồm ship) x 3 đến 4.
   - *Ví dụ*: Giá nhập AliExpress $7 -> Giá bán trên Shopify $24.99 - $29.99 (Lãi gộp $17 - $22 để bù chi phí vận hành, hoàn tiền và duy trì phần mềm).
4. **Thân Thiện Khi Vận Chuyển (Ship-Friendly)**:
   - Trọng lượng **< 500g**, kích thước nhỏ gọn.
   - Không chứa pin dung lượng lớn, không có chất lỏng/gel/bột, không thủy tinh/gốm sứ dễ vỡ.

---

## 2. Các Phương Pháp Săn Sản Phẩm Miễn Phí (Free Product Research)

### Phương pháp 1: TikTok Organic Spy
- **Hashtag tìm kiếm**: \`#tiktokmademebuyit\`, \`#viralproduct\`, \`#amazonfinds\`, \`#unboxing\`.
- **Bộ lọc tìm kiếm**: Lọc video trong **1 tháng gần nhất**, xếp theo lượt thích (Most Liked).
- **Dấu hiệu nhận biết WIN**: Đo lường bình luận có ý định mua hàng cao (VD: *"Where can I buy this?"*, *"Drop the link!"*, *"How much?"*).

### Phương pháp 2: AliExpress Dropshipping Center
- Vào phần **Find Products**, chọn ngách sản phẩm mong muốn.
- Lọc theo **Sales Volume** có mức tăng trưởng ổn định trong 7 ngày gần nhất.
- Chọn nhà cung cấp có rating **> 95%** và thời gian ship đi Mỹ **< 15 ngày**.

---

## 3. Checklist Thực Hành Sản Phẩm
- [ ] Chọn ra Top 3 sản phẩm tiềm năng nhất theo đúng 4 tiêu chí.
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
    summary: "Quy trình thiết lập Shopify One-Product Store chuẩn Dawn Theme, cài đặt App DSers/Loox, nuôi nick TikTok US và sản xuất Video 12-20s.",
    metrics: [
      { label: "Shopify Theme", value: "Dawn (Fast & Mobile)" },
      { label: "Tần Suất Đăng Bài", value: "2 - 3 Video / Ngày" },
      { label: "Thời Lượng Video", value: "12 - 20 Giây (Standard)" }
    ],
    markdown: `
# BƯỚC 3: THIẾT LẬP STORE & VẬN HÀNH CONTENT ADS

*(Nội dung trích xuất từ Slide Bài 3 — Khoá Học Ngô Thành Ecom)*

---

## 1. Thiết Lập Shopify Store Tối Ưu Chuyển Đổi (One-Product Store)

### Cấu hình cơ bản
- **Nền tảng**: Shopify (dùng gói trải nghiệm $1/tháng).
- **Tên miền (Domain)**: Bắt buộc mua tên miền \`.com\` ngắn gọn, chuyên nghiệp (tránh \`.xyz\`, \`.info\`).
- **Giao diện (Theme)**: Sử dụng **Dawn Theme** miễn phí, tốc độ tải trang cực nhanh và tối ưu tuyệt đối trên điện thoại di động.

### Thành phần bắt buộc trên Trang Sản Phẩm (Product Page)
- **Tiêu đề sản phẩm**: Ngắn gọn, đặt tên theo thương hiệu (tránh copy tiêu đề dài ngoằng từ AliExpress).
- **Giá bán & Giảm giá**: Hiển thị giá khuyến mãi (VD: $29.99) bên cạnh giá gốc gạch ngang ($49.99) để tạo cảm giác tiết kiệm.
- **Nút Mua Hàng (CTA)**: Nút **Add to Cart / Buy Now** to nổi bật, màu sắc tương phản rõ rệt.
- **Hình ảnh & GIF**: 3-5 ảnh phông trắng chất lượng cao + 2 GIF minh họa sản phẩm đang hoạt động thực tế.
- **Cam kết & Đánh giá**: Tích hợp cam kết "30-Day Money Back Guarantee" và import 5-10 đánh giá 5 sao từ Loox/Judge.me.

---

## 2. Hệ Thống Ứng Dụng Bắt Buộc (App Stack)
1. **DSers**: Kết nối Shopify với AliExpress để tự động hóa đặt hàng và đồng bộ mã vận đơn (Tracking).
2. **Loox / Judge.me**: Import đánh giá thật kèm hình ảnh từ người mua trên AliExpress.
3. **Geolocation**: Tự động chuyển đổi tiền tệ theo quốc gia của khách truy cập.

---

## 3. Sản Xuất Content & Đăng Bài Organic (TikTok / Reels / Shorts)

### Môi trường đăng bài TikTok US từ Việt Nam
- **Thao tác thiết bị**: Tháo SIM Việt Nam -> Lắp SIM Mỹ trả trước -> Tắt định vị GPS -> Đổi múi giờ điện thoại sang Mỹ (GMT-5).
- **Mạng kết nối**: Sử dụng Proxy tĩnh Mỹ / Antidetect Browser hoặc WiFi chuẩn hóa.
- **Tần suất**: Đăng đều đặn **2-3 video/ngày** trong suốt 1-2 tuần đầu tiên.

### Cấu trúc Video Ngắn Chuẩn Chuyển Đổi (12-20 Giây)
- **0 - 3 giây (Hook)**: Gây chú ý bằng hình ảnh đột ngột + Câu hỏi/Text hook giật gân (VD: *"Stop scrolling if you have dirty shoes!"*).
- **3 - 15 giây (Body)**: Trình diễn tính năng nổi bật, cho thấy hiệu quả trước và sau khi dùng (Before / After).
- **15 - 20 giây (CTA)**: Hướng dẫn khách truy cập mua hàng (VD: *"Link in bio to get yours with 50% OFF today!"*).
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

      {/* Market Research Tool embedded for Step 2 */}
      <MarketResearchTool />

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
