import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  ExternalLink,
  Code2,
  Monitor,
  Edit3,
  Search,
  ChevronDown,
  ChevronRight,
  FolderKanban,
  Target,
  HelpCircle,
  CheckSquare,
  ShoppingBag,
  Layers,
  Truck,
  Zap,
  TrendingUp,
  Table as TableIcon,
  LayoutGrid,
} from "lucide-react";

export const Route = createFileRoute("/dropship/progress/1-market-research")({
  component: MarketResearchTabRoute,
});

interface NicheItem {
  num: number;
  title: string;
  status: string;
  path: string;
  fullPath: string;
  altPath?: string;
  altFullPath?: string;
  altLabel?: string;
  note?: string;
  /**
   * "verified"   = có trích dẫn trực tiếp Trends JSON / TikTok / Meta Ads Library live,
   *                ngày giờ cụ thể, số liệu đọc thẳng từ nguồn (car-accessories, sustainability,
   *                child-baby report đều đạt chuẩn này).
   * "unverified" = có số liệu nhưng KHÔNG trích dẫn nguồn live cụ thể — press-on-nails report
   *                từng bị bắt bịa số ("83 Ads", theme "Shrine PRO") ở đúng chỗ không có trích dẫn.
   * "unreadable" = chỉ có file .gdoc (con trỏ Google Docs) — không đọc được nội dung thật.
   */
  dataQuality: "verified" | "unverified" | "unreadable";
  topCandidate?: string;
  topScore?: string;
}

const MARKET_RESEARCH_NICHES: NicheItem[] = [
  {
    num: 0,
    title: "Dropshipping niche 2026 (tổng quan)",
    status: "reference",
    path: "workspace/doc/1-market-research/0-Dropshipping niche 2026.gdoc",
    fullPath:
      "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/0-Dropshipping niche 2026.gdoc",
    note: "Seed list từ Shopify dropshipping-niches blog. Chỉ là danh sách gợi ý ban đầu, không phải research.",
    dataQuality: "unreadable",
  },
  {
    num: 1,
    title: "Car Accessories",
    status: "done",
    path: "workspace/doc/1-market-research/1-car-accessories-niche-report.docx",
    fullPath:
      "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/1-car-accessories-niche-report.docx",
    altPath: "car-accessories-niche-report.html",
    altFullPath:
      "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/car-accessories-niche-report.html",
    altLabel: "Bản HTML",
    note: "Top 10/20 sản phẩm. Mỗi sản phẩm có Trends 5yr+12mo đọc từ live data feed, Shopping, TikTok, Meta Ads Library — tất cả mở live, ghi rõ ngày/giờ/số liệu cụ thể.",
    dataQuality: "verified",
    topCandidate: "Seat Covers & Organizers",
    topScore: "8/10",
  },
  {
    num: 2,
    title: "Sustainability",
    status: "done",
    path: "workspace/doc/1-market-research/2-sustainability-niche-report.docx",
    fullPath:
      "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/2-sustainability-niche-report.docx",
    altPath: "sustainability-niche-report.html",
    altFullPath:
      "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/sustainability-niche-report.html",
    altLabel: "Bản HTML",
    note: "Top 10/13 sản phẩm, cùng chuẩn live-check với Car Accessories.",
    dataQuality: "verified",
    topCandidate:
      "Vegan Snacks (điểm cao nhất nhưng CPG dễ hỏng, không hợp dropship) — Beeswax Wraps là lựa chọn thực tế hơn",
    topScore: "8/10",
  },
  {
    num: 3,
    title: "Kitchen and Dining",
    status: "done",
    path: "workspace/doc/1-market-research/3-Kitchen and dining.gdoc",
    fullPath:
      "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/3-Kitchen and dining.gdoc",
    note: "Chỉ có file .gdoc (con trỏ Google Docs) — KHÔNG đọc được nội dung thật từ máy này. Muốn review phải export ra .html/.md trước.",
    dataQuality: "unreadable",
  },
  {
    num: 4,
    title: "Home and Bedroom",
    status: "done",
    path: "workspace/doc/1-market-research/4-Home and bedroom.gdoc",
    fullPath:
      "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/4-Home and bedroom.gdoc",
    altPath: "market-research-runs.json",
    altFullPath:
      "/Users/aminhp93/personal/dropship/dropship-web/src/features/dropshipping/data/market-research-runs.json",
    altLabel: "JSON Data",
    note: "4 candidate research bằng WebSearch tổng quát (không có trích dẫn Trends/TikTok/Meta Ads live như 3 báo cáo trên). Đèn dây macrame/boho từng được chốt 23/08 rồi RÚT LẠI 28/08 — hiện KHÔNG phải sản phẩm chốt.",
    dataQuality: "unverified",
    topCandidate: "Đèn dây macrame/boho (fairy lights) — chưa chốt",
    topScore: "—",
  },
  {
    num: 5,
    title: "Child and Baby",
    status: "done",
    path: "workspace/doc/1-market-research/5-Child and baby.html",
    fullPath:
      "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/5-Child and baby.html",
    note: "5 sản phẩm, cùng chuẩn live-check (Trends đọc thẳng từ JSON feed của Google, có ngày giờ cụ thể).",
    dataQuality: "verified",
    topCandidate:
      "Baby Bottles — nhưng Teething Toys (7/10) evergreen nhất trong CẢ 4 báo cáo verified",
    topScore: "8/10",
  },
  {
    num: 6,
    title: "Press-On Nails & Nail Art",
    status: "done",
    path: "workspace/doc/1-market-research/6-press-on-nails.md",
    fullPath:
      "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/6-press-on-nails.md",
    altPath: "6-press-on-nails-niche-report.html",
    altFullPath:
      "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/6-press-on-nails-niche-report.html",
    altLabel: "Bản HTML Báo Cáo (còn số liệu sai, đừng dùng)",
    note: 'Điểm 9.4/10 cao nhất toàn bộ 6 ngách NHƯNG không có trích dẫn Trends/TikTok live — bản HTML gốc đã bị bắt bịa số 1 lần ("83 Ads", theme "Shrine PRO") ngày 28/08. Chưa ai search tay lại Meta Ads Library/Trends cho ngách này theo đúng chuẩn 3 báo cáo verified.',
    dataQuality: "unverified",
    topCandidate: "Handmade Press-On Nails",
    topScore: "9.4/10 (chưa verified)",
  },
];

function dataQualityBadge(q: NicheItem["dataQuality"]) {
  const map: Record<NicheItem["dataQuality"], { label: string; cls: string }> =
    {
      verified: {
        label: "✅ Verified live",
        cls: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
      },
      unverified: {
        label: "⚠️ Chưa verified",
        cls: "bg-amber-500/10 text-amber-600 border-amber-500/20",
      },
      unreadable: {
        label: "❌ Không đọc được",
        cls: "bg-zinc-200 dark:bg-zinc-800 text-zinc-500 border-zinc-300 dark:border-zinc-700",
      },
    };
  return map[q];
}

function statusBadgeClass(status: string) {
  const map: Record<string, string> = {
    done: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    "done-decided": "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
    reference: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  };
  return map[status] ?? "bg-zinc-100 dark:bg-zinc-800 text-zinc-500";
}

function statusBadgeLabel(status: string) {
  const map: Record<string, string> = {
    done: "Done",
    "done-decided": "Done — đã chốt",
    reference: "Reference",
  };
  return map[status] ?? status;
}

interface CompetitorStore {
  name: string;
  url: string;
  role: string;
  theme: string;
  themeUrl?: string;
  pricing: string;
  cogs: string;
  margin: string;
  offer: string;
  uxTriggers: string[];
  trafficChannels: string;
  adsLibraryUrl?: string;
  tiktokUrl?: string;
  igUrl?: string;
  logistics: string;
  rating: string;
  takeaway: string;
}

// ⚠️ Đính chính 2026-08-28: bản trước của bảng này (theme "Shrine PRO", "Beae Page Builder",
// "Be Yours v8.3.3", giá NailHandy $24.99-$34.99, giá Lovful $14.99-$22.99, "83 Ads"...) đã bị
// live-check lại qua PPSPY (/api/v1/personal/dropshipping/spy) và SAI khá xa so với thực tế —
// xem chi tiết trong nhật ký 28/08 bên dưới. Dữ liệu dưới đây đã thay bằng số liệu PPSPY thật.
// Field không lấy được qua tool (số Ads Meta đang chạy, GTM ID) được đánh dấu "chưa xác minh"
// thay vì bịa số — đúng Data Honesty Rule của dự án.
const COMPETITOR_BENCHMARK_STORES: CompetitorStore[] = [
  {
    name: "NailHandy®",
    url: "https://nailhandy.com/",
    role: "Top 1 Benchmark (Dropship to Brand)",
    theme:
      '"NailHandy Clean 2026-08" (theme custom — KHÔNG xác nhận được là Shrine PRO)',
    pricing: "$24.95 – $270.53 / SKU (avg $44.60, gồm bundle 12-set)",
    cogs: "Không có báo giá supplier thật — est_cogs PPSPY áp công thức chung 25% giá bán, KHÔNG phải chi phí sourced",
    margin:
      "PPSPY ước tính chung ~75% (công thức mặc định của tool, chưa xác minh với supplier thật)",
    offer:
      "Bundle theo set (vd: 12-set Halloween $270.53) — chưa xác nhận cơ chế Buy 2 Get 1",
    uxTriggers: [
      "100% review kèm ảnh thực tế bàn tay khách hàng (app Loox Photo Reviews — xác nhận qua PPSPY)",
      "Meta Pixel + TikTok Pixel đều Active (xác nhận qua PPSPY)",
    ],
    trafficChannels:
      "Có Meta Pixel + TikTok Pixel active — số lượng ads đang chạy CHƯA XÁC MINH (cần check tay Meta Ads Library, không suy từ pixel)",
    adsLibraryUrl:
      "https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=US&q=nailhandy",
    tiktokUrl: "https://www.tiktok.com/search?q=nailhandy%20press%20on%20nails",
    igUrl: "https://www.instagram.com/nailhandy_official/",
    logistics:
      "Chưa xác minh (giả định YunExpress dựa trên hình mẫu chung ngành, không phải data sourced)",
    rating:
      "Chưa chấm điểm lại — điểm 9.8/10 trước đó dựa trên data sai, cần đánh giá lại",
    takeaway:
      "App Loox Photo Reviews + pricing theo bundle-set (không phải giá lẻ thấp) là 2 tín hiệu sourced đáng tin để tham khảo.",
  },
  {
    name: "Lovful",
    url: "https://lovful.com/",
    role: "Fast-Fashion Acrylic (High-Volume DTC)",
    theme:
      '"Prestige Theme (Luxury)" + app PageFly Page Builder (xác nhận qua PPSPY — KHÔNG phải "Beae")',
    pricing:
      "$33.99 – $37.99 / set (avg $37.83) — cao hơn nhiều so với con số $14.99-$22.99 đã ghi trước đó",
    cogs: "Không có báo giá supplier thật — est_cogs PPSPY ~$9.50 (công thức 25%, chưa xác minh)",
    margin: "PPSPY ước tính chung ~75% (mặc định của tool)",
    offer:
      "Giảm giá bậc thang theo tag ('A-discounty', 'SPRING Event Sale') — chưa xác nhận % cụ thể",
    uxTriggers: [
      "App stack: Judge.me, Klaviyo, PageFly, Recharge Subscriptions, Vitals All-in-One (xác nhận qua PPSPY)",
      "Meta Pixel + TikTok Pixel ĐỀU Active — mâu thuẫn với claim cũ '100% chỉ chạy TikTok, 0 Meta Ads'",
    ],
    trafficChannels:
      "Có Meta Pixel active thật — KHÔNG thể kết luận '0 Ads Meta' chỉ vì search không ra kết quả trên Ads Library (tool hạn chế với advertiser nhỏ, đã ghi chú tương tự ở market-research-runs.json)",
    adsLibraryUrl:
      "https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=US&is_targeted_country=false&media_type=all&q=lovful&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc",
    tiktokUrl: "https://www.tiktok.com/search?q=lovful%20nails",
    logistics: "Chưa xác minh (giả định, không phải data sourced)",
    rating:
      "Chưa chấm điểm lại — điểm 8.8/10 trước đó dựa trên data sai, cần đánh giá lại",
    takeaway:
      "Giá bán thật ($33-38) gần với NailHandy hơn nhiều so với ghi chú cũ — đừng dùng con số giá thấp cũ để định vị giá cho store của mình.",
  },
  {
    name: "KISS USA",
    url: "https://www.kissusa.com/",
    role: "Global Retail Leader (Industry Standard)",
    theme:
      '"shopify-kiss/main" (theme nội bộ tự dựng — KHÔNG phải "Be Yours v8.3.3")',
    pricing:
      "$3.99 – $100.00 / SKU (avg $11.78) — có tier BYOB bundle tới $100, chưa từng ghi ở bản cũ",
    cogs: "Không có báo giá supplier thật — est_cogs PPSPY ~25% giá bán (công thức mặc định)",
    margin: "PPSPY ước tính chung ~75% (mặc định của tool)",
    offer:
      "Có dòng 'Build Your Own Bundle' (BYOB) giá cao — chưa xác nhận Subscribe & Save",
    uxTriggers: [
      "App stack: Klaviyo, Yotpo Product Reviews (xác nhận qua PPSPY)",
      "Meta Pixel ID thật: 652550911519236 · TikTok Pixel ID thật: CK079HBC77UCMO5P1M40",
    ],
    trafficChannels:
      "Pixel ID xác nhận Active — số lượng/ngân sách ads thật vẫn CHƯA XÁC MINH qua tool nào đang có",
    adsLibraryUrl:
      "https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=US&q=kiss%20products",
    tiktokUrl: "https://www.tiktok.com/@kissproducts",
    logistics:
      "Chưa xác minh (giả định kho nội địa Mỹ dựa trên quy mô thương hiệu, không phải data sourced)",
    rating:
      "Chưa chấm điểm lại — điểm 9.2/10 trước đó dựa trên data sai, cần đánh giá lại",
    takeaway:
      "Đây là brand retail lớn (giá thấp, SKU rộng) — mức độ tham khảo cho 1 store solo mới thấp hơn 2 store kia.",
  },
];

interface DailyResearchLog {
  id: string;
  date: string;
  title: string;
  isLatest?: boolean;
  content: string;
}

const MARKET_RESEARCH_DAILY_LOGS: DailyResearchLog[] = [
  {
    id: "2026-08-31",
    date: "31/08/2026",
    title: "Đóng gap Handmade Press-On Nails: research thật (Trends/Meta Ads/Amazon) + đánh giá Car Mats",
    isLatest: true,
    content: `#### 🎯 Nguồn: phiên chat 31/08/2026 — trả lời trực tiếp 3 câu hỏi đánh giá (Car Mats có fit không? Nails đào sâu thế nào? Ngách nào khác giống Nails?). Đây chính là gap đã note tồn đọng từ 29/08 ("chưa search tay lại Meta Ads Library/Trends cho Nails") — hôm nay đóng lại bằng data sống, đúng chuẩn 4 báo cáo verified khác.

---

#### 🚗 1. Car Mats (Apex Auto Mats) — đánh giá fit, KHÔNG có data mới cần thêm
Grep lại toàn bộ \`store-clone-data-skeleton.md\` + \`store-setup-checklist.md\`: **chưa từng có chỗ nào tính trọng lượng ship** cho thảm/bọc ghế/lót cốp đang live. Về cấu trúc, nhóm hàng này nặng nhiều kg/bộ → fail cứng Pillar 4 (<500g), không phải fail biên. Kết luận: giữ nguyên vai trò *bài tập dựng Shopify* như đã chốt trước đây, không đầu tư thêm để tìm sản phẩm thật trong ngách này.

#### 💅 2. Press-On Nails — research sống, có nguồn (dataConfidence: sourced)
- **Google Trends thật** (đọc thẳng data feed \`widgetdata/multiline\`, US, 5 năm, "press on nails"): sàn tăng liên tục 18 (2021) → 44+ (cuối 2025), hiện tại (30/08/2026) = **54**. Có 1 đợt tăng vọt bất thường 29/3 → 12/4/2026 (chạm đỉnh 100/100) do breakout query **"olive and june"** / **"nail reformation"** — xác nhận đây là hiệu ứng 1 campaign của brand Olive & June, không phải nhu cầu nền tự nhiên; sàn thực tế nên tính là ~45-50, không phải 100.
- **Meta Ads Library thật**: từ khoá "press on nails" (country=All) ra **>50.000 kết quả**. 2 brand nhỏ/vừa đáng chú ý: **Doonails** (doonails.de + us.doonails.com, chạy campaign liên tục 8 tháng 12/2025→7/2026, sản phẩm generic không founder cá nhân → pass Filter 2) và **Theonlynailsofficial** (góc fandom BTS, "handmade", 5 tuần — góc hẹp, rủi ro dùng tên nghệ sĩ không xin phép).
- **Amazon thật**: **20.000+ kết quả**. Glamnetic 24pc kit — 13.4K reviews, 4.1★, "7K+ bought in past month", ~$14, Amazon tự gắn nhãn AI **"Positively reviewed for ease of application"**. 1 seller "Handmade" 10pc bán ~$16 — cao hơn kit hãng lớn → xác nhận góc "handmade/premium" bán được thật, không chỉ là suy đoán.
- **Ứng viên cụ thể rút ra**: không phải "press on nails" chung chung (Olive & June đang thống trị) mà là **handmade/hand-painted, định vị thay thế đi nail salon** (pain thật: $40-60 + 1-2h/lần ở salon vs 7 phút tại nhà). COGS ~$2-5/kit landed → bán $15-20 (dataConfidence: **estimated**, chưa có báo giá supplier thật — việc tiếp theo).

#### 🧭 3. Phương pháp: product-first hay customer-first?
Chốt **product-first trước, customer-need sau — chỉ áp trên top 1-2 ứng viên đã lọt vòng**, không phải khảo sát khách hàng song song cho cả 6 ngách (không đủ nguồn lực cho 1 người làm một mình). Đúng thứ tự vừa áp dụng cho Nails ở trên.

#### 🌱 4. Ngách khác giống Nails (sàn Trends ổn định + nhẹ)
Từ báo cáo verified đã có: **Teething Toys** — sàn 5 năm chưa từng dưới ~54/100, ổn định hơn cả Nails. **Vegan Snacks** — sàn chưa dưới ~45/100 nhưng CPG dễ hỏng, phản diện tốt (Trends ổn định không đủ, phải khớp cả 4 Pillar). Phương pháp chung để tìm thêm: bám "nhu cầu tất yếu theo vòng đời" (không phải trend theo mùa) + luôn xem **sàn** Trends 5 năm (không phải đỉnh 12 tháng) + verify chéo Meta Ads + Amazon trước khi tin.

#### ⚠️ Việc chưa làm
TikTok Creative Center (bị chặn không render), Google Shopping (Google chặn captcha, không cố bypass theo đúng nguyên tắc), báo giá supplier thật cho Nails, và customer review sâu (đọc review thật trên NailHandy/Amazon) — vẫn còn ở mức estimated/chưa làm.`,
  },
  {
    id: "2026-08-29",
    date: "29/08/2026",
    title: "Mở rộng khung benchmark store + bắt đầu tự động hoá quét tin tức",
    isLatest: false,
    content: `#### 🎯 Nguồn: \`~/personal/daily-log/2026-08-29.md\` (mục Dropship) — ngày làm việc còn dở dang, chưa có data mới đã verify, chỉ ghi lại đúng những gì đã làm.

---

#### 🏪 1. Mở rộng khung nghiên cứu store benchmark
Lên khung nghiên cứu thêm 1 nhóm store Ecom Global ngoài 3 store Nails đã có (nailhandy, lovful, kissusa) — thêm **roytimber.com** và **etswoodcrafts.com** (2 store nghiêng về đồ gỗ/nội thất, không cùng ngách Nails). **Chỉ mới lên khung, chưa research/live-check qua PPSPY** — chưa có số liệu nào để đưa vào bảng so sánh 3 Store Mẫu bên dưới.

#### 🤖 2. Bắt đầu tự động hoá "Nhóm 1" trong Resource Guide
Setup luồng tự động quét & tổng hợp tin tức E-commerce hàng ngày trước 6h sáng — đúng mục đích của Nhóm 1 (Tin tức & chính sách nền tảng) đã đề xuất hôm 28/08, giờ chuyển từ "tự đọc 1×/tuần" sang thử tự động hoá luôn. Chưa rõ nguồn nào được quét, cần review lại luồng này trước khi tin số liệu nó tổng hợp ra — áp đúng Data Honesty Rule như mọi nguồn khác trên trang này.

#### ⚠️ Việc chưa làm hôm nay
Không có tiến độ mới cho Handmade Press-On Nails (vẫn đang chờ search tay lại Meta Ads Library/Trends theo đúng chuẩn 3 báo cáo verified, như đã note ở phần So sánh 6 ngách bên trên) — hôm nay là ngày mở rộng phạm vi benchmark, không phải ngày đóng gap đó lại.`,
  },
  {
    id: "2026-08-28",
    date: "28/08/2026",
    title:
      "TOP 2: Bóc Tách & Nghiên Cứu Chi Tiết 3 Store Mẫu (Lovful, KISS USA, NailHandy)",
    isLatest: false,
    content: `#### 🎯 Mục tiêu: Reverse-engineering cấu trúc Offer, Layout Product Page, Pricing của 3 store hàng đầu ngách Press-On Nails.

> ⚠️ **Đính chính cùng ngày (sau khi live-check qua PPSPY \`/api/v1/personal/dropshipping/spy\`)**: bản viết đầu tiên trong ngày có nhiều số liệu SAI (tên theme, khoảng giá, "83 Ads"...) — trông giống suy diễn/bịa hơn là check trực tiếp. Đã thay bằng số liệu thật lấy qua PPSPY bên dưới; phần không lấy được qua tool được ghi rõ "chưa xác minh" thay vì giữ số cũ.

---

#### 💅 1. Store 1: NailHandy® (https://nailhandy.com/)
- **Tech Stack (PPSPY xác nhận)**: Theme \`"NailHandy Clean 2026-08"\` (KHÔNG phải Shrine PRO như ghi lúc đầu), app Loox Photo Reviews, Meta Pixel + TikTok Pixel đều Active.
- **Giá & sản phẩm (PPSPY xác nhận)**: 50 sản phẩm, giá $24.95 – $270.53 (avg $44.60, có bundle 12-set) — cao hơn nhiều so với "$24.99-$34.99" ghi lúc đầu.
- **COGS/margin**: PPSPY chỉ trả ước tính công thức chung (25% giá bán) — KHÔNG phải báo giá supplier thật, không dùng để tính break-even CAC.
- **Số ads đang chạy trên Meta**: chưa xác minh (PPSPY không trả số này; "83 Ads" ghi lúc đầu không có nguồn).

---

#### 🌸 2. Store 2: Lovful (https://lovful.com/)
- **Tech Stack (PPSPY xác nhận)**: Theme \`"Prestige Theme (Luxury)"\` + app PageFly Page Builder, Judge.me, Klaviyo, Recharge, Vitals (KHÔNG phải "Beae Page Builder" như ghi lúc đầu).
- **Giá & sản phẩm (PPSPY xác nhận)**: 50 sản phẩm, giá $33.99 – $37.99 (avg $37.83) — gần gấp đôi "$14.99-$22.99" ghi lúc đầu.
- **Ads**: Meta Pixel + TikTok Pixel đều Active (PPSPY xác nhận) — claim lúc đầu "0 Ads Meta, 100% TikTok" là SAI.

---

#### 👑 3. Store 3: KISS USA (https://www.kissusa.com/)
- **Tech Stack (PPSPY xác nhận)**: Theme nội bộ \`"shopify-kiss/main"\` (KHÔNG phải "Be Yours v8.3.3"), app Klaviyo + Yotpo, Meta Pixel ID \`652550911519236\`, TikTok Pixel ID \`CK079HBC77UCMO5P1M40\`.
- **Giá & sản phẩm (PPSPY xác nhận)**: 50 sản phẩm, giá $3.99 – $100.00 (avg $11.78, có tier "Build Your Own Bundle" tới $100 — chưa từng ghi lúc đầu).

---

#### 💡 BÀI HỌC RÚT RA (đã hạ độ chắc chắn xuống đúng mức có bằng chứng):
1. Cả 3 store đều bán theo bundle/set giá cao hơn nhiều so với ước lượng ban đầu — đừng định giá thấp cho ngách Nails nếu đi hướng này.
2. App reviews có ảnh thật (Loox/Judge.me/Yotpo) xuất hiện ở cả 3 — tín hiệu đáng tin để áp dụng.
3. Số liệu Ads/CAC/margin **chưa có nguồn thật** ở bất kỳ store nào — cần check tay Meta Ads Library + hỏi báo giá supplier thật trước khi ra quyết định, không suy diễn từ pixel hay công thức COGS mặc định của tool.

📌 **Nguồn**: PPSPY live-check 2026-08-28 cho cả 3 domain · [NailHandy](https://nailhandy.com/) · [Lovful](https://lovful.com/) · [KISS USA](https://www.kissusa.com/).`,
  },
  {
    id: "2026-08-27",
    date: "27/08/2026",
    title: "Cập Nhật Thực Tế Thị Trường",
    isLatest: false,
    content: `#### 🌐 1. Nguồn Tin Tức & Xu Hướng E-Commerce Quốc Tế
- **Shopify Tech Update (Chính thức từ 26/08/2026)**: Hạn chót chuyển đổi hoàn tất — Shopify đóng toàn bộ \`Additional Scripts\` & \`checkout.liquid\` trên Thank You & Order Status Page cho 100% store non-Plus. Chuyển sang **Checkout Extensibility (Web Pixels API)** để bảo đảm Meta Pixel, TikTok Pixel & Loox Reviews không bị đứt tracking ➔ [Link thông báo Shopify](https://changelog.shopify.com/).
- **Modern Retail DTC Trends**: Bắt đầu đợt chuyển hướng "September Pivot" chuẩn bị cho chiến dịch Q4/Halloween. Xu hướng người dùng săn giá (Price Hunting) tăng mạnh đợt Back-to-School ➔ [Link bài viết Modern Retail](https://www.modernretail.co/).

#### 🔍 2. Nguồn Data Ads Spy & Nhu Cầu Tìm Kiếm
- **Meta Ads CPM Mỹ**: CPM tăng 13–20% YoY do cạnh tranh mùa Back-to-School & đợt lên camp sớm Q4 ($18.50 – $20.80 / 1.000 hiển thị) ➔ [Link dữ liệu Meta Ads](https://www.facebook.com/ads/library/).
- **Thuật toán Meta Andromeda (ASC 2026)**: Thuật toán dồn ưu tiên ngân sách cho tài khoản có **Creative Diversity** (chuẩn bị 15+ active ad creatives, refresh 2-4 tuần) ➔ [Link hướng dẫn Meta](https://www.facebook.com/business/help/).

#### 👥 3. Nguồn Cộng Đồng & Operator Kinh Nghiệm
- **Bảo Nam Kimchi (Bài viết 1 hôm nay)**: Tối ưu vận hành E-Commerce bằng AI — Xây dựng Custom AI cho thương hiệu, nạp mục tiêu, P&L, OKR và chỉ số vận hành để tự động hóa điều hành shop ➔ [Link bài viết gốc](https://www.facebook.com/share/p/1KAt2rUt8m/).
- **Bảo Nam Kimchi (Bài viết 2 hôm nay)**: Bài học tư duy tăng trưởng & niêm yết từ các doanh nghiệp đầu ngành (Digiworld Q2/2026 lợi nhuận +166% YoY) — Tập trung cốt lõi vào biên lợi nhuận ròng và quản trị dòng tiền ➔ [Link bài viết gốc](https://www.facebook.com/share/p/1BeWPj3Eb8/).
- **Anhstein MMO (Bài viết hôm nay)**: Chia sẻ cấu trúc Meta Advantage+ (ASC) 2026 — Dồn ngân sách vào campaign đơn thay vì chia nhỏ Ad Sets, tập trung sản xuất 15+ video hook đa dạng ➔ [Link bài viết gốc](https://www.facebook.com/share/p/1cWiWEt9AN/).
- **Hùng Tóc Trưởng**: *(Không có bài viết mới trong ngày 27/08/2026 — Theo dõi trực tiếp tại [Profile](https://www.facebook.com/hungtoctruongdl))*.
- **Group Cộng đồng Dropship VN**: *(Không có bài viết mới cụ thể trong ngày 27/08/2026 — Theo dõi trực tiếp bài mới tại [Group New Posts](https://www.facebook.com/groups/296787476078292/?sorting_setting=CHRONOLOGICAL))*.

#### 📦 4. Nguồn Cước Phí Vận Chuyển 3PL & Tracking
- **YunExpress**: Dịch vụ vận chuyển tuyến US Small Parcel (< 300g, 5-8 ngày) ➔ [Link YunExpress](https://www.yunexpress.com/).
- **17TRACK / PayPal**: Đẩy tự động mã vận đơn nới giữ tiền PayPal ➔ [Link 17TRACK](https://www.17track.net/).

📌 **Nguồn bài viết thực tế**: [Shopify Changelog](https://changelog.shopify.com/) · [Modern Retail](https://www.modernretail.co/) · [Bài viết Bảo Nam 1](https://www.facebook.com/share/p/1KAt2rUt8m/) · [Bài viết Bảo Nam 2](https://www.facebook.com/share/p/1BeWPj3Eb8/) · [Bài viết Anhstein MMO](https://www.facebook.com/share/p/1cWiWEt9AN/) · [Profile Hùng Tóc Trưởng](https://www.facebook.com/hungtoctruongdl) · [Group Dropship VN (New Posts)](https://www.facebook.com/groups/296787476078292/?sorting_setting=CHRONOLOGICAL).`,
  },
  {
    id: "2026-08-23",
    date: "23/08/2026",
    title: "Candidate ưu tiên #1: Đèn Dây Macrame / Boho Decor (chưa chốt)",
    isLatest: false,
    content: `> ⚠️ **Đính chính 2026-08-28**: entry này ban đầu ghi "CHỐT WIN Product" — đã RÚT LẠI theo xác nhận của user. Đây là candidate ưu tiên #1 tại thời điểm đó, không phải quyết định cuối cùng. Xem thêm run song song ở ngách Nails bên dưới.

#### 🌐 1. Nguồn Tin Tức & Xu Hướng E-Commerce Quốc Tế
- **Shopify Dropshipping Niches Blog**: Ngách Home Decor & Lighting duy trì mức tăng trưởng bền vững quanh năm (non-fad).

#### 🔍 2. Nguồn Data Ads Spy & Nhu Cầu Tìm Kiếm
- **Google Trends US**: Từ khóa \`macrame fairy lights\` và \`boho wall decor\` giữ baseline ổn định 45-60/100, không bị spike ảo theo mùa.
- **TikTok Creative Center**: Hashtag views đạt trên 68M views, 3s Hook Rate trên 30%, cực kỳ phù hợp làm clip organic 2-3 video/ngày.

#### 👥 3. Nguồn Cộng Đồng & Operator Kinh Nghiệm
- **Lý do xếp hạng #1 Niche Home & Bedroom tại thời điểm đó**: Thỏa mãn 100% tiêu chí SOP 2026 — Markup >= 3.5x ($29.99 sale price vs $8.00 landed cost), không bị khống chế bởi Personal/Local Brand Equity.

#### 📦 4. Nguồn Cước Phí Vận Chuyển 3PL & Tracking
- **YunExpress Small Parcel US**: Gói hàng < 300g, cước $3.50, thời gian 5-8 ngày, không vỡ hỏng.

📌 **Nguồn tổng hợp**: SOP Bước 2 & Báo cáo bóc tách \`workspace/doc/1-market-research/4-Home and bedroom.gdoc\`.`,
  },
  {
    id: "2026-08-20",
    date: "20/08/2026",
    title: "Quét 5 Ngách Thị Trường (Seed từ Shopify Blog)",
    isLatest: false,
    content: `#### 🌐 1. Nguồn Tin Tức & Xu Hướng E-Commerce Quốc Tế
- **Shopify Blog Top Niches**: Quét 5 ngách tiềm năng: Car Accessories, Sustainability, Kitchen & Dining, Home & Bedroom, Child & Baby.

#### 🔍 2. Nguồn Data Ads Spy & Nhu Cầu Tìm Kiếm
- **Newbie Exclusion Filters**: Sàng lọc 20+ sản phẩm candidate. Loại bỏ hàng cồng kềnh, mốt ngắn hạn (fad), và ngách bị chiếm lĩnh bởi Personal/Local Brand Equity.

#### 👥 3. Nguồn Cộng Đồng & Operator Kinh Nghiệm
- **Đánh giá phù hợp solo newbie**: Chọn Niche Home & Bedroom là ứng viên số 1 do margin cao và dễ làm clip organic.

#### 📦 4. Nguồn Cước Phí Vận Chuyển 3PL & Tracking
- **Quy chuẩn Logistics SOP 2026**: Trọng lượng < 500g, ship US < 15 ngày, không chứa pin lớn hay chất lỏng nhạy cảm.

📌 **Nguồn tổng hợp**: Shopify Dropshipping Niches Blog & Báo cáo 5 ngách \`workspace/doc/1-market-research/\`.`,
  },
];

interface NicheVerdict {
  niche: string;
  candidate: string;
  score: string;
  quality: NicheItem["dataQuality"];
  fit: string;
  risk: string;
  weightG?: number;
}

const NICHE_VERDICTS: NicheVerdict[] = [
  {
    niche: "Child & Baby",
    candidate: "Teething Toys (chew toys)",
    score: "7/10",
    quality: "verified",
    fit: "Floor Trends KHÔNG BAO GIỜ dưới ~54/100 suốt 5 năm — evergreen nhất trong toàn bộ 4 báo cáo verified. Nhẹ, không pin không chất lỏng. TikTok viral 933K likes. Thị trường ads còn nhỏ (~130 active) — chưa bị 1 brand độc chiếm như Baby Bottles (Tommee Tippee/Philips Avent) hay Diapers (Pampers/Huggies).",
    risk: "Chưa từng được cân nhắc làm sản phẩm chính trong toàn bộ quá trình nghiên cứu — cần đặt mẫu test trước khi tin tưởng hoàn toàn.",
  },
  {
    niche: "Car Accessories",
    candidate: "Seat Covers & Organizers",
    score: "8/10",
    quality: "verified",
    fit: "Baseline ổn định 4 năm liền (không phải fad theo mùa). Hệ sinh thái Meta Ads THẬT lớn nhất trong CẢ 4 báo cáo verified (~7.000 advertiser genuine) — bằng chứng rõ ràng nhất rằng người khác đang có lãi để duy trì ads. Cạnh tranh phân mảnh, còn chỗ cho aesthetic sub-niche (animal print, luxury, waterproof).",
    risk: "Sản phẩm cồng kềnh hơn nhóm còn lại — không nhẹ như tiêu chí ưu tiên trước đây (đèn dây, móc treo).",
  },
  {
    niche: "Sustainability",
    candidate: "Beeswax Wraps / Compostable Plates",
    score: "7/10",
    quality: "verified",
    fit: "Cạnh tranh phân mảnh, chưa bị 1 brand thống trị hoàn toàn (trừ Beeswax Wraps có Bee's Wrap khá mạnh).",
    risk: "Nhu cầu CHỈ tập trung mùa xuân/Earth Day (7 tuần) hoặc mùa cưới — khó duy trì nhịp organic video quanh năm như chiến lược 2-3 video/ngày đang đặt ra.",
  },
  {
    niche: "Home & Bedroom",
    candidate: "Đèn dây macrame/boho — chưa chốt lại",
    score: "—",
    quality: "unverified",
    fit: 'Từng chốt 23/08 vì "wow factor" hợp organic TikTok, nhưng đã RÚT LẠI 28/08.',
    risk: "Data yếu hơn hẳn 3 ngách verified ở trên — không có trích dẫn Trends/TikTok/Meta Ads live, chỉ ước lượng từ WebSearch chung.",
  },
  {
    niche: "Press-On Nails",
    candidate: "Handmade Press-On Nails",
    score: "9.4/10 (report gốc)",
    quality: "unverified",
    fit: "Điểm cao nhất trong TOÀN BỘ 6 ngách, margin rất dày (>78%), 3 store benchmark (NailHandy/Lovful/KISS) đã được live-check thật qua PPSPY — phần benchmark store là tin được.",
    risk: 'Nhưng phần NHU CẦU THỊ TRƯỜNG (Trends +18% YoY, 2.8B TikTok views) hoàn toàn không có trích dẫn nguồn — đúng dạng số liệu đã bị bắt bịa 1 lần trong report này (theme sai, "83 Ads" không nguồn). Sản phẩm cũng là hàng thủ công (vẽ tay), COGS $3.5-5 cho hàng handmade nghe khó tin — chuỗi cung ứng phức tạp hơn 1 SKU nhà máy thường.',
  },
];

/**
 * Nguồn gốc: `dropship-web/.agents/skills/market-research-hunter/SKILL.md`
 * (Section 0 — Newbie Exclusion Filters, Section 2 — 4 Golden Pillars).
 * Đây là bộ tiêu chí THẬT đã dùng để research + chấm điểm cả 6 ngách, hiệu chỉnh
 * riêng cho hồ sơ "solo newbie, chưa có brand/audience, vốn $3.000" — không phải
 * bộ tiêu chí chung chung, nên đặt lên đầu trang để đọc trước khi xem bảng so sánh.
 */
function CriteriaSection() {
  const [showCriteriaDetails, setShowCriteriaDetails] = useState(false);

  return (
    <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-4">
      <div>
        <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
          Tiêu chí sản phẩm phù hợp với tình hình hiện tại
        </h2>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
          Hồ sơ: solo newbie, chưa có brand/audience sẵn có, vốn $3.000. Đây là
          bộ tiêu chí đã dùng để research + chấm điểm cả 6 ngách bên dưới —
          không phải tiêu chí chung chung.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        <div className="p-2.5 rounded-lg border border-red-500/25 bg-red-500/5">
          <p className="text-[10px] uppercase font-bold tracking-wide text-red-700 dark:text-red-400">
            Loại ngay
          </p>
          <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">
            2 điều kiện fail nhanh
          </p>
        </div>
        <div className="p-2.5 rounded-lg border border-emerald-500/25 bg-emerald-500/5">
          <p className="text-[10px] uppercase font-bold tracking-wide text-emerald-700 dark:text-emerald-400">
            Must-pass
          </p>
          <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">
            4 Golden Pillars
          </p>
        </div>
        <div className="p-2.5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-100/70 dark:bg-zinc-900/60">
          <p className="text-[10px] uppercase font-bold tracking-wide text-zinc-600 dark:text-zinc-400">
            Ràng buộc
          </p>
          <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 mt-0.5">
            Solo · vốn $3.000 · chưa có brand
          </p>
        </div>
      </div>

      <div className="flex items-center justify-end">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowCriteriaDetails((v) => !v)}
          className="h-8 px-3 text-[11px] font-semibold cursor-pointer"
        >
          {showCriteriaDetails ? (
            <>
              <ChevronDown className="w-3.5 h-3.5 mr-1.5" /> Thu gọn chi tiết
              tiêu chí
            </>
          ) : (
            <>
              <ChevronRight className="w-3.5 h-3.5 mr-1.5" /> Xem chi tiết tiêu
              chí
            </>
          )}
        </Button>
      </div>

      {showCriteriaDetails && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 animate-in fade-in duration-150">
          <div className="p-3 rounded-lg border border-red-500/25 bg-red-500/5 space-y-1.5">
            <p className="text-[11px] font-bold text-red-700 dark:text-red-400 uppercase tracking-wide">
              Loại ngay nếu dính 1 trong 2
            </p>
            <p className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <strong>1. Đang là trend</strong> — nhu cầu chỉ do 1 đợt viral/mùa
              vụ ngắn, không phải nhu cầu quanh năm (check Trends 12 tháng, ưu
              tiên baseline phẳng-hoặc-tăng hơn 1 đỉnh nhọn).
            </p>
            <p className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <strong>2. Ngách thắng nhờ brand cá nhân/local</strong> — người
              bán top đầu thắng vì có sẵn founder/nội dung/lượng follow riêng,
              không phải vì ai nhập hàng + chạy ads cũng thắng được như nhau.
            </p>
          </div>

          <div className="p-3 rounded-lg border border-emerald-500/25 bg-emerald-500/5 space-y-1.5">
            <p className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wide">
              Phải đạt cả 4 (4 Golden Pillars)
            </p>
            <p className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <strong>1. Wow factor</strong> — gây chú ý trong 3 giây đầu video
              ngắn.
            </p>
            <p className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <strong>2. Giải quyết nỗi đau thật</strong> — vấn đề cụ thể, không
              mơ hồ.
            </p>
            <p className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <strong>3. Margin dày</strong> — giá bán ≥ 3-4x COGS, gross margin
              ≥ 75-80%.
            </p>
            <p className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-relaxed">
              <strong>4. Dễ ship</strong> — &lt;500g, không pin lớn/chất lỏng/dễ
              vỡ, ship &lt;15 ngày.
            </p>
          </div>
        </div>
      )}
    </Card>
  );
}

const getViteFsUrl = (fullPath: string) => `/@fs${fullPath}`;
const getVsCodeUrl = (fullPath: string) => `vscode://file${fullPath}`;

function NicheComparisonSection() {
  // 2 khối "đọc thêm" (3 Store Mẫu + 5 Báo Cáo Ngách) chuyển vào đây 29/08 —
  // trước đứng tách rời bên ngoài, giờ gộp chung vào phần tổng hợp so sánh.
  const [showCompetitors, setShowCompetitors] = useState(false);
  const [showNiches, setShowNiches] = useState(false);
  const [showVerdictDetails, setShowVerdictDetails] = useState(false);
  const [showRecommendationDetails, setShowRecommendationDetails] =
    useState(false);

  return (
    <Card className="p-5 border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/10 space-y-4">
      <div className="flex items-center gap-2">
        <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
          <FolderKanban className="w-4 h-4" />
        </span>
        <div>
          <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            So sánh 6 ngách & khuyến nghị — dựa trên đọc lại toàn bộ báo cáo gốc
          </h3>
          <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
            4/6 ngách đọc được thật (2 ngách chỉ có file .gdoc — xem danh sách
            bên dưới). Cột "Độ tin cậy" là điều quan trọng nhất ở đây.
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs border-collapse min-w-[640px]">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-zinc-800 text-zinc-500 uppercase text-[10px]">
              <th className="p-2">Ngành</th>
              <th className="p-2">Ứng viên tốt nhất</th>
              <th className="p-2">Điểm</th>
              <th className="p-2">Độ tin cậy data</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
            {NICHE_VERDICTS.map((v) => {
              const q = dataQualityBadge(v.quality);
              return (
                <tr key={v.niche} className="align-top">
                  <td className="p-2 font-bold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                    {v.niche}
                  </td>
                  <td className="p-2 text-zinc-700 dark:text-zinc-300">
                    {v.candidate}
                  </td>
                  <td className="p-2 font-mono text-zinc-600 dark:text-zinc-400 whitespace-nowrap">
                    {v.score}
                  </td>
                  <td className="p-2">
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] font-bold whitespace-nowrap",
                        q.cls,
                      )}
                    >
                      {q.label}
                    </Badge>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="p-3 rounded-lg border border-emerald-500/20 bg-white/60 dark:bg-zinc-900/40 text-[11px]">
        <span className="font-bold text-zinc-900 dark:text-zinc-100">
          Snapshot:{" "}
        </span>
        <span className="text-zinc-700 dark:text-zinc-300">
          Hiện nên ưu tiên xem lại 2 hướng đáng test nhất:{" "}
          <strong>Teething Toys</strong> và{" "}
          <strong>Seat Covers &amp; Organizers</strong>.
        </span>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowVerdictDetails((v) => !v)}
          className="h-8 px-3 text-[11px] font-semibold cursor-pointer"
        >
          {showVerdictDetails ? (
            <>
              <ChevronDown className="w-3.5 h-3.5 mr-1.5" /> Thu gọn nhận định
              từng ngách
            </>
          ) : (
            <>
              <ChevronRight className="w-3.5 h-3.5 mr-1.5" /> Xem nhận định từng
              ngách
            </>
          )}
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowRecommendationDetails((v) => !v)}
          className="h-8 px-3 text-[11px] font-semibold cursor-pointer"
        >
          {showRecommendationDetails ? (
            <>
              <ChevronDown className="w-3.5 h-3.5 mr-1.5" /> Thu gọn khuyến nghị
              chi tiết
            </>
          ) : (
            <>
              <ChevronRight className="w-3.5 h-3.5 mr-1.5" /> Xem khuyến nghị
              chi tiết
            </>
          )}
        </Button>
      </div>

      {showVerdictDetails && (
        <div className="space-y-2 pt-1 animate-in fade-in duration-150">
          {NICHE_VERDICTS.map((v) => (
            <div
              key={v.niche}
              className="p-2.5 rounded-lg bg-white/60 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800 text-[11px] leading-relaxed"
            >
              <span className="font-bold text-zinc-900 dark:text-zinc-100">
                {v.niche} — {v.candidate}:{" "}
              </span>
              <span className="text-zinc-600 dark:text-zinc-400">{v.fit}</span>{" "}
              <span className="text-amber-700 dark:text-amber-400">
                ⚠️ {v.risk}
              </span>
            </div>
          ))}
        </div>
      )}

      {showRecommendationDetails && (
        <div className="p-3.5 rounded-xl bg-emerald-600/10 border border-emerald-500/30 space-y-1.5 animate-in fade-in duration-150">
          <p className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
            💡 Khuyến nghị
          </p>
          <p className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Nếu chấm đúng theo tiêu chí cũ (evergreen, nhẹ, không pin/lỏng, chưa
            bị brand độc chiếm) trên riêng 4 báo cáo{" "}
            <strong>đã verified</strong> (bỏ Home & Bedroom và Press-On Nails vì
            data chưa kiểm chứng), <strong>Teething Toys</strong> khớp nhiều
            tiêu chí nhất nhưng chưa từng được cân nhắc, còn{" "}
            <strong>Seat Covers & Organizers</strong> có bằng chứng "đối thủ
            đang có lãi" mạnh nhất (7.000 advertiser thật). Cả hai đều đáng cân
            nhắc hơn 2 ngách đang tốn nhiều công sức nhất gần đây (Home &
            Bedroom, Nails) — vì 2 ngách đó có data yếu hơn, chưa phải vì bản
            thân sản phẩm tệ.
          </p>
          <p className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-relaxed">
            Nếu vẫn muốn đi tiếp Nails (đã đầu tư nhiều công sức benchmark 3
            store) — việc cần làm trước khi chốt là lặp lại đúng quy trình 4
            nguồn live (Trends/Shopping/TikTok/Meta Ads, có trích dẫn ngày giờ
            cụ thể) cho riêng "Handmade Press-On Nails", giống hệt cách đã làm
            cho Car Accessories/Sustainability/Child & Baby — hiện tại ngách này
            là ngách duy nhất đang tốn công sức nhiều nhất mà data nhu cầu thị
            trường lại yếu nhất.
          </p>
        </div>
      )}

      {/* Đọc thêm 1 — 3 Store Mẫu (chuyển vào đây 29/08, trước đứng riêng ngoài card) */}
      <div className="space-y-3 pt-1 border-t border-emerald-500/20">
        <div className="flex items-center justify-between pt-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCompetitors((v) => !v)}
            className="h-9 px-4 text-xs font-bold border-rose-500/40 text-rose-700 dark:text-rose-300 bg-rose-50/60 dark:bg-rose-950/30 hover:bg-rose-100 dark:hover:bg-rose-900/40 cursor-pointer shadow-2xs"
          >
            {showCompetitors ? (
              <>
                <ChevronDown className="w-4 h-4 mr-1.5 text-rose-500" /> Thu gọn
                3 Store Mẫu Mục Tiêu (NailHandy · Lovful · KISS USA)
              </>
            ) : (
              <>
                <ChevronRight className="w-4 h-4 mr-1.5 text-rose-500" /> 💅 Xem
                Bóc Tách 3 Store Mẫu Mục Tiêu (NailHandy · Lovful · KISS USA)
              </>
            )}
          </Button>
        </div>

        {showCompetitors && (
          <div className="animate-in fade-in duration-200">
            <CompetitorStoreAnalysisSection />
          </div>
        )}
      </div>

      {/* Đọc thêm 2 — Chi tiết 5 báo cáo ngách (chuyển vào đây 29/08) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowNiches((v) => !v)}
            className="h-9 px-4 text-xs font-bold border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer shadow-2xs"
          >
            {showNiches ? (
              <>
                <ChevronDown className="w-4 h-4 mr-1.5 text-zinc-500" /> Thu gọn
                danh sách 5 Ngách
              </>
            ) : (
              <>
                <ChevronRight className="w-4 h-4 mr-1.5 text-emerald-600 dark:text-emerald-400" />{" "}
                📂 Xem Chi Tiết 5 Báo Cáo Ngách (docx / html / json)
              </>
            )}
          </Button>
        </div>

        {showNiches && (
          <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-3 animate-in fade-in duration-200">
            <h3 className="text-xs font-bold uppercase text-zinc-500">
              5 ngách đã research (seed từ Shopify dropshipping-niches blog)
            </h3>
            <div className="space-y-2.5">
              {MARKET_RESEARCH_NICHES.map((n) => (
                <div
                  key={n.num}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                >
                  <span className="text-xs font-mono text-zinc-400 w-4 shrink-0 pt-0.5 font-bold">
                    {n.num}
                  </span>
                  <div className="flex-1 space-y-1.5">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-zinc-900 dark:text-white">
                        {n.title}
                      </span>
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-[10px] font-bold uppercase",
                          statusBadgeClass(n.status),
                        )}
                      >
                        {statusBadgeLabel(n.status)}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={cn(
                          "text-[10px] font-bold",
                          dataQualityBadge(n.dataQuality).cls,
                        )}
                      >
                        {dataQualityBadge(n.dataQuality).label}
                      </Badge>
                      {n.topCandidate && (
                        <span className="text-[11px] text-zinc-500 dark:text-zinc-400">
                          Top:{" "}
                          <strong className="text-zinc-700 dark:text-zinc-300">
                            {n.topCandidate}
                          </strong>
                          {n.topScore &&
                            n.topScore !== "—" &&
                            ` (${n.topScore})`}
                        </span>
                      )}
                    </div>

                    {/* DUAL ACTION BUTTONS: OPEN IN BROWSER TAB vs OPEN IN IDE */}
                    <div className="flex items-center gap-2 flex-wrap pt-1">
                      {/* BROWSER NEW TAB LINK (Vite @fs serving) */}
                      <a
                        href={getViteFsUrl(n.fullPath)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/50 text-[11px] font-mono font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                        title="Mở file trên Tab Trình Duyệt mới"
                      >
                        <Monitor className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                        <span>{n.path}</span>
                        <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                      </a>

                      {/* IDE / VSCODE DIRECT OPEN LINK */}
                      <a
                        href={getVsCodeUrl(n.fullPath)}
                        className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] font-mono font-medium hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors"
                        title="Mở file trực tiếp trong Editor / VSCode"
                      >
                        <Edit3 className="w-3 h-3 text-zinc-500" />
                        <span>Mở IDE</span>
                      </a>

                      {/* ALTERNATE FORMAT LINK */}
                      {n.altPath && n.altFullPath && (
                        <a
                          href={getViteFsUrl(n.altFullPath)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/50 text-[11px] font-mono font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-900/50 transition-colors"
                          title={`Mở tab mới cho ${n.altLabel}`}
                        >
                          <Code2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          <span>
                            {n.altLabel} ({n.altPath})
                          </span>
                          <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                        </a>
                      )}
                    </div>

                    {n.note && (
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                        {n.note}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </Card>
  );
}

function CompetitorStoreAnalysisSection() {
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");

  return (
    <div className="space-y-4">
      {/* Header Banner & Switcher Controls */}
      <div className="p-4 rounded-xl border border-rose-500/30 bg-rose-500/5 dark:bg-rose-950/20 space-y-3">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400">
              <ShoppingBag className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                TOP 2: Bóc Tách & So Sánh 3 Store Mẫu Mục Tiêu
                <Badge
                  variant="outline"
                  className="text-[10px] font-bold border-rose-500/30 text-rose-600 bg-rose-500/10"
                >
                  Live Benchmarked 2026
                </Badge>
              </h3>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                NailHandy (Top 1 Benchmark) · Lovful (Fast-Fashion DTC) · KISS
                USA (Retail Toàn Cầu)
              </p>
            </div>
          </div>

          {/* VIEW SWITCHER BUTTONS */}
          <div className="flex items-center gap-1 bg-white dark:bg-zinc-900 p-1 rounded-lg border border-zinc-200 dark:border-zinc-800 shadow-2xs">
            <Button
              variant={viewMode === "table" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("table")}
              className={cn(
                "h-7 px-2.5 text-xs font-semibold gap-1.5 cursor-pointer",
                viewMode === "table"
                  ? "bg-rose-600 hover:bg-rose-700 text-white"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100",
              )}
            >
              <TableIcon className="w-3.5 h-3.5" />
              <span>Dạng Bảng So Sánh</span>
            </Button>

            <Button
              variant={viewMode === "cards" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("cards")}
              className={cn(
                "h-7 px-2.5 text-xs font-semibold gap-1.5 cursor-pointer",
                viewMode === "cards"
                  ? "bg-rose-600 hover:bg-rose-700 text-white"
                  : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100",
              )}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Dạng Thẻ Chi Tiết</span>
            </Button>
          </div>
        </div>
      </div>

      {/* TABLE VIEW (CLEAN & COMPARATIVE) */}
      {viewMode === "table" && (
        <Card className="overflow-hidden border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xs animate-in fade-in duration-150">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-zinc-100/80 dark:bg-zinc-800/60 border-b border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 font-bold">
                  <th className="p-3.5 w-44 font-mono text-[11px] text-zinc-500 uppercase">
                    Tiêu Chí So Sánh
                  </th>
                  <th className="p-3.5 text-emerald-700 dark:text-emerald-400 border-l border-zinc-200 dark:border-zinc-800 bg-emerald-500/5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm">💅 NailHandy®</span>
                      <Badge
                        variant="outline"
                        className="text-[9px] border-emerald-500/30 text-emerald-600 bg-emerald-500/10"
                      >
                        Top 1 Benchmark
                      </Badge>
                    </div>
                  </th>
                  <th className="p-3.5 text-purple-700 dark:text-purple-400 border-l border-zinc-200 dark:border-zinc-800 bg-purple-500/5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm">🌸 Lovful</span>
                      <Badge
                        variant="outline"
                        className="text-[9px] border-purple-500/30 text-purple-600 bg-purple-500/10"
                      >
                        Fast-Fashion DTC
                      </Badge>
                    </div>
                  </th>
                  <th className="p-3.5 text-blue-700 dark:text-blue-400 border-l border-zinc-200 dark:border-zinc-800 bg-blue-500/5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm">👑 KISS USA</span>
                      <Badge
                        variant="outline"
                        className="text-[9px] border-blue-500/30 text-blue-600 bg-blue-500/10"
                      >
                        Retail Leader
                      </Badge>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/80 text-zinc-700 dark:text-zinc-300">
                {/* Row 1: Direct Link */}
                <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 font-semibold text-zinc-500 bg-zinc-50/50 dark:bg-zinc-900/50">
                    Link Website
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800">
                    <a
                      href="https://nailhandy.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                    >
                      <span>nailhandy.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800">
                    <a
                      href="https://lovful.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 font-medium hover:underline"
                    >
                      <span>lovful.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800">
                    <a
                      href="https://www.kissusa.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                      <span>kissusa.com</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                </tr>

                {/* Row 2: Định vị */}
                <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 font-semibold text-zinc-500 bg-zinc-50/50 dark:bg-zinc-900/50">
                    Định Vị &amp; Mô Hình
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 font-medium">
                    Handmade Press-On Nails cao cấp (Dropship ➔ Micro-Brand)
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 font-medium">
                    Trendy Acrylic Nails (Mẫu mã phong phú, bắt trend nhanh)
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 font-medium">
                    Bring the Salon Home (Chuẩn mực bán lẻ toàn cầu,
                    Omni-channel)
                  </td>
                </tr>

                {/* Row 3: Tech Stack — CORRECTED 2026-08-28 qua PPSPY live-check, xem ghi chú trên COMPETITOR_BENCHMARK_STORES */}
                <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 font-semibold text-zinc-500 bg-zinc-50/50 dark:bg-zinc-900/50">
                    Shopify Tech Stack
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 font-mono text-[11px]">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">
                      "NailHandy Clean 2026-08"
                    </span>
                    <span className="text-zinc-500 block mt-1 font-sans">
                      Theme custom — <strong>không</strong> xác nhận là Shrine
                      PRO (claim cũ sai)
                    </span>
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 font-mono text-[11px]">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">
                      "Prestige Theme (Luxury)"
                    </span>
                    <span className="text-zinc-500 block mt-1 font-sans">
                      + app PageFly Page Builder — <strong>không</strong> phải
                      "Beae" (claim cũ sai)
                    </span>
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 font-mono text-[11px]">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-200/60 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">
                      "shopify-kiss/main"
                    </span>
                    <span className="text-zinc-500 block mt-1 font-sans">
                      Theme nội bộ tự dựng — <strong>không</strong> phải "Be
                      Yours v8.3.3" (claim cũ sai)
                    </span>
                  </td>
                </tr>

                {/* Row 4: Giá bán & COGS — CORRECTED 2026-08-28 qua PPSPY live-check */}
                <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 font-semibold text-zinc-500 bg-zinc-50/50 dark:bg-zinc-900/50">
                    Giá Bán / COGS
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800">
                    <strong className="text-zinc-900 dark:text-zinc-100">
                      $24.95 – $270.53
                    </strong>{" "}
                    <span className="text-[10px] text-zinc-500">
                      (avg $44.60)
                    </span>
                    <div className="text-[10px] text-zinc-500">
                      est_cogs PPSPY: công thức 25% giá bán, chưa sourced thật
                    </div>
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800">
                    <strong className="text-zinc-900 dark:text-zinc-100">
                      $33.99 – $37.99
                    </strong>{" "}
                    <span className="text-[10px] text-zinc-500">
                      (avg $37.83)
                    </span>
                    <div className="text-[10px] text-zinc-500">
                      Gần gấp đôi con số $14.99-$22.99 đã ghi trước đó
                    </div>
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800">
                    <strong className="text-zinc-900 dark:text-zinc-100">
                      $3.99 – $100.00
                    </strong>{" "}
                    <span className="text-[10px] text-zinc-500">
                      (avg $11.78)
                    </span>
                    <div className="text-[10px] text-zinc-500">
                      Có tier BYOB bundle tới $100, chưa từng ghi ở bản cũ
                    </div>
                  </td>
                </tr>

                {/* Row 5: Margin — thay bằng disclaimer, không giữ số break-even CAC bịa */}
                <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 font-semibold text-zinc-500 bg-zinc-50/50 dark:bg-zinc-900/50">
                    Biên Lợi Nhuận Gộp
                  </td>
                  <td
                    className="p-3 border-l border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-500"
                    colSpan={3}
                  >
                    ⚠️ Không có báo giá supplier thật cho cả 3 store — số
                    "78%/72%/65%" và "Break-even CAC $40/$32" ở bản cũ là suy
                    diễn không có nguồn, đã bỏ. PPSPY chỉ trả về ước tính công
                    thức chung (~75% cho mọi SKU), không đáng tin để so sánh
                    cạnh tranh.
                  </td>
                </tr>

                {/* Row 6: Offer & Combo — hạ độ chắc chắn, các claim cụ thể (Mua 2 Tặng 1, giảm bậc thang %) chưa xác minh trực tiếp trên site */}
                <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 font-semibold text-zinc-500 bg-zinc-50/50 dark:bg-zinc-900/50">
                    Offer &amp; Bundle
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 font-medium text-zinc-500 text-[11px]">
                    Bán theo bundle-set (vd 12-set $270.53) — cơ chế khuyến mãi
                    cụ thể (Mua 2 Tặng 1?){" "}
                    <strong>chưa xác minh trực tiếp</strong> trên site
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 font-medium text-zinc-500 text-[11px]">
                    Có tag giảm giá theo sự kiện ("SPRING Event Sale") — % giảm
                    cụ thể <strong>chưa xác minh</strong>
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 font-medium text-zinc-500 text-[11px]">
                    Có dòng "Build Your Own Bundle" giá cao — Subscribe &amp;
                    Save <strong>chưa xác minh</strong>
                  </td>
                </tr>

                {/* Row 7: UX Triggers */}
                <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 font-semibold text-zinc-500 bg-zinc-50/50 dark:bg-zinc-900/50">
                    UX &amp; Conversion Triggers
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 space-y-1">
                    <p className="font-semibold text-emerald-700 dark:text-emerald-400">
                      • Bảng đo size móng (Nail Sizing Guide popup mm)
                    </p>
                    <p>• Sticky Add to Cart bar kèm variant selector</p>
                    <p>• 100% review kèm ảnh thực tế bàn tay khách</p>
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 space-y-1">
                    <p>
                      • Bộ lọc trực quan theo Shape (Almond, Coffin) &amp;
                      Length
                    </p>
                    <p>• Cross-sell keo dán chuyên dụng &amp; dũa</p>
                    <p>• Ảnh phong cách thời trang OOTD</p>
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 space-y-1">
                    <p>• Omni-channel "Find in Store" (Target, Walmart)</p>
                    <p>• Bằng sáng chế dán không cần keo (Press On &amp; Go)</p>
                    <p>• Uy tín thương hiệu dẫn đầu ngành</p>
                  </td>
                </tr>

                {/* Row 8: Ad Hooks & Meta Ads Health */}
                <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 font-semibold text-zinc-500 bg-zinc-50/50 dark:bg-zinc-900/50">
                    <div>Traffic &amp; Creative Hook</div>
                    <div className="text-[10px] text-rose-500 font-normal mt-0.5">
                      Sức khỏe Ads Library
                    </div>
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 space-y-1.5">
                    <div>
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold text-[10px]">
                        ⚠️ Số ads "83" (bản cũ) CHƯA XÁC MINH — PPSPY không trả
                        về số ads
                      </span>
                      <p className="font-medium text-zinc-600 dark:text-zinc-400 mt-1">
                        Xác nhận thật (PPSPY): Meta Pixel + TikTok Pixel đều
                        Active. Câu hook "Spending $120 at salon..."{" "}
                        <strong>chưa xác minh trực tiếp</strong>.
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 text-[10px]">
                      <a
                        href="https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=US&is_targeted_country=false&media_type=all&q=nailhandy&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                      >
                        <span>
                          🔍 Tự check Meta Ads Library (số thật cần xem tay)
                        </span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                      <a
                        href="https://www.tiktok.com/search?q=nailhandy%20press%20on%20nails"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:underline"
                      >
                        <span>🎬 Xem TikTok UGC Clips</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                      <a
                        href="https://www.instagram.com/nailhandy_official/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:underline"
                      >
                        <span>📷 Xem Instagram Feed</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 space-y-1.5">
                    <div>
                      <span className="px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold text-[10px]">
                        ⚠️ Claim "0 Ads / 100% TikTok" SAI — PPSPY xác nhận Meta
                        Pixel Active
                      </span>
                      <p className="font-medium text-zinc-600 dark:text-zinc-400 mt-1">
                        Có Meta Pixel + TikTok Pixel đều Active thật — không thể
                        kết luận Lovful chỉ chạy TikTok.
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 text-[10px]">
                      <a
                        href="https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=US&is_targeted_country=false&media_type=all&q=lovful&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-500 hover:underline"
                      >
                        <span>🔍 Meta Ads Library (0 kết quả)</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                      <a
                        href="https://www.tiktok.com/search?q=lovful%20nails"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:underline font-semibold"
                      >
                        <span>🎬 Xem TikTok Clips &amp; Shop (Kênh chính)</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 space-y-1.5">
                    <div>
                      <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-700 dark:text-blue-400 font-bold text-[10px]">
                        Meta Pixel ID xác nhận: 652550911519236
                      </span>
                      <p className="font-medium text-blue-700 dark:text-blue-400 mt-1">
                        Pixel Active thật (PPSPY) — page ads cụ thể (Kiss
                        Nails/imPRESS) &amp; Google Search Ads{" "}
                        <strong>chưa xác minh trực tiếp</strong>.
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 text-[10px]">
                      <a
                        href="https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=US&q=Kiss%20Nails"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                      >
                        <span>🔍 Xem Ads Page "Kiss Nails" (Chính hãng)</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                      <a
                        href="https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=US&q=imPRESS%20Manicure"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <span>🔍 Xem Ads Page "imPRESS Manicure"</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                      <a
                        href="https://www.facebook.com/KissNails"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:underline"
                      >
                        <span>🌐 Page Facebook: fb.com/KissNails</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                      <a
                        href="https://www.tiktok.com/@kissproducts"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:underline"
                      >
                        <span>🎬 TikTok @kissproducts (imPRESS)</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    </div>
                  </td>
                </tr>

                {/* Row 9: Logistics — chưa có nguồn thật, đổi thành disclaimer */}
                <tr className="hover:bg-zinc-50 dark:hover:bg-zinc-800/30">
                  <td className="p-3 font-semibold text-zinc-500 bg-zinc-50/50 dark:bg-zinc-900/50">
                    Logistics &amp; Vận Chuyển
                  </td>
                  <td
                    className="p-3 border-l border-zinc-200 dark:border-zinc-800 text-zinc-500 text-[11px]"
                    colSpan={3}
                  >
                    ⚠️ Chưa có nguồn thật cho cả 3 store (PPSPY không trả dữ
                    liệu logistics). Các mô tả "YunExpress 7-10 ngày", "kho nội
                    địa Mỹ"... ở bản cũ là suy diễn theo mô hình chung ngành,
                    chưa xác minh riêng cho từng store — không dùng để quyết
                    định chọn 3PL.
                  </td>
                </tr>

                {/* Row 10: Actionable Takeaway — hạ mức chắc chắn cho các chi tiết chưa xác minh */}
                <tr className="bg-amber-500/5 dark:bg-amber-500/5 border-t-2 border-amber-500/20">
                  <td className="p-3 font-bold text-amber-700 dark:text-amber-400">
                    💡 Bài Học Áp Dụng Cho Store
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 text-[11px] font-semibold text-zinc-900 dark:text-zinc-100">
                    Định vị theo bundle-set giá cao (không bán lẻ giá thấp) —
                    đây là tín hiệu sourced đáng tin từ pricing thật.
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-700 dark:text-zinc-300">
                    Giá thật ($33-38) gần NailHandy hơn nhiều so với ghi chú cũ
                    — đừng định giá thấp cho ngách này.
                  </td>
                  <td className="p-3 border-l border-zinc-200 dark:border-zinc-800 text-[11px] text-zinc-700 dark:text-zinc-300">
                    Brand retail lớn, giá thấp SKU rộng — mức tham khảo cho 1
                    store solo mới thấp hơn 2 store kia.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* FINANCIAL HEALTH PRINCIPLE CALLOUT */}
          <div className="p-3.5 bg-zinc-50 dark:bg-zinc-900/80 border-t border-zinc-200 dark:border-zinc-800 text-xs space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-zinc-100">
              <span className="p-1 rounded bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-[10px]">
                INTEL
              </span>
              <span>
                📌 Nguyên Tắc Đo Lường Sức Khỏe Tài Chính Qua Meta Ads Library
                (Tín Hiệu Sống Còn):
              </span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 pl-6 leading-relaxed">
              Trong Dropshipping, doanh thu (Revenue) chỉ là bề nổi — quan trọng
              nhất là{" "}
              <strong>đối thủ có đang có lãi để duy trì Ads hay không</strong>:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-6 pt-1">
              <div className="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-[11px] space-y-1">
                <strong>
                  🟢 Tín hiệu Có Lãi &amp; Sinh Lời (ROAS dương, Dòng tiền
                  mạnh):
                </strong>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Duy trì{" "}
                  <strong>
                    15–30+ Ad Creatives active liên tục &gt; 30–60 ngày
                  </strong>
                  . Đối thủ liên tục bơm tiền và mở rộng ad set mà không tắt
                  chứng minh ROAS &gt; Break-even CAC. (Nguyên tắc chung — chưa
                  áp dụng số thật cho NailHandy/Lovful/KISS vì chưa check tay
                  Meta Ads Library.)
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-rose-500/5 border border-rose-500/20 text-rose-800 dark:text-rose-300 text-[11px] space-y-1">
                <strong>
                  🔴 Tín hiệu Cắt Lỗ / Bão Hòa (Ad Fatigue, Scale hụt):
                </strong>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Số lượng Ad Sets active tụt dốc dưới 5 ads, hoặc chỉ lên test
                  1–2 ads rồi tắt sau 2–3 ngày ➔ Dấu hiệu CPA vượt trần, chiến
                  dịch lỗ và store đang tắt camp cắt lỗ.
                </p>
              </div>
            </div>
          </div>
        </Card>
      )}

      {/* CARDS VIEW */}
      {viewMode === "cards" && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 animate-in fade-in duration-150">
          {COMPETITOR_BENCHMARK_STORES.map((store) => (
            <Card
              key={store.name}
              className="p-4.5 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col justify-between space-y-4 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all"
            >
              <div className="space-y-3.5">
                {/* Card Top: Name, Link & Badge */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                        {store.name}
                      </h4>
                      <Badge
                        variant="outline"
                        className="text-[9px] font-mono px-1.5 py-0.5 border-emerald-500/30 text-emerald-600 bg-emerald-500/10"
                      >
                        ★ {store.rating}
                      </Badge>
                    </div>
                    <p className="text-[11px] font-medium text-rose-600 dark:text-rose-400 mt-0.5">
                      {store.role}
                    </p>
                  </div>

                  <a
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-xs font-semibold transition-colors shrink-0"
                  >
                    <span>Mở Web</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Specs & Metrics */}
                <div className="space-y-2 text-xs divide-y divide-zinc-100 dark:divide-zinc-800/80">
                  <div className="pt-1.5 flex items-start justify-between gap-2">
                    <span className="text-zinc-500 shrink-0 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-500" /> Giá Bán /
                      COGS:
                    </span>
                    <span className="font-bold text-right text-zinc-900 dark:text-zinc-100">
                      {store.pricing} <br />
                      <span className="text-[10px] font-normal text-zinc-500">
                        COGS: {store.cogs}
                      </span>
                    </span>
                  </div>

                  <div className="pt-1.5 flex items-start justify-between gap-2">
                    <span className="text-zinc-500 shrink-0 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-500" />{" "}
                      Biên Lợi Nhuận:
                    </span>
                    <span className="font-mono text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 text-right">
                      {store.margin}
                    </span>
                  </div>

                  <div className="pt-1.5 flex items-start justify-between gap-2">
                    <span className="text-zinc-500 shrink-0 flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5 text-indigo-500" /> Shopify
                      Tech Stack:
                    </span>
                    <span className="font-mono text-[10px] text-zinc-700 dark:text-zinc-300 text-right">
                      {store.themeUrl ? (
                        <a
                          href={store.themeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
                        >
                          <span>{store.theme}</span>
                          <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                        </a>
                      ) : (
                        store.theme
                      )}
                    </span>
                  </div>

                  <div className="pt-1.5 flex items-start justify-between gap-2">
                    <span className="text-zinc-500 shrink-0 flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-blue-500" /> Logistics
                      &amp; Ship:
                    </span>
                    <span className="text-[11px] text-zinc-700 dark:text-zinc-300 text-right">
                      {store.logistics}
                    </span>
                  </div>
                </div>

                {/* Offer Details */}
                <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800 text-[11px] space-y-1">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1">
                    🎁 Offer &amp; Bundle:
                  </span>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                    {store.offer}
                  </p>
                </div>

                {/* Ad Creatives & Hook Links */}
                <div className="space-y-1.5 pt-1.5 border-t border-zinc-100 dark:border-zinc-800/80">
                  <span className="text-[11px] font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1">
                    <Search className="w-3.5 h-3.5 text-rose-500" /> Ad
                    Creatives &amp; Hook Links:
                  </span>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400 font-medium">
                    {store.trafficChannels}
                  </p>
                  <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                    {store.adsLibraryUrl && (
                      <a
                        href={store.adsLibraryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 text-[10px] font-semibold hover:underline"
                      >
                        <span>Meta Ads Library</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                    {store.tiktokUrl && (
                      <a
                        href={store.tiktokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[10px] font-semibold hover:underline"
                      >
                        <span>TikTok Clips</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                    {store.igUrl && (
                      <a
                        href={store.igUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 text-[10px] font-semibold hover:underline"
                      >
                        <span>Instagram Feed</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom Takeaway */}
              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <p className="text-[11px] text-zinc-700 dark:text-zinc-300 bg-amber-500/10 dark:bg-amber-500/5 p-2 rounded-md border border-amber-500/20 leading-relaxed">
                  <strong className="text-amber-700 dark:text-amber-400">
                    💡 Bài học áp dụng:{" "}
                  </strong>
                  {store.takeaway}
                </p>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function DailyResearchLogCard() {
  // Mặc định mở đúng entry mới nhất (đầu mảng) — không hardcode ngày, khỏi lệch
  // khi thêm entry mới mà quên sửa chỗ này.
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    [MARKET_RESEARCH_DAILY_LOGS[0]?.id ?? ""]: true,
  });

  const toggleOpen = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const allOpen: Record<string, boolean> = {};
    MARKET_RESEARCH_DAILY_LOGS.forEach((log) => {
      allOpen[log.id] = true;
    });
    setOpenIds(allOpen);
  };

  const collapseOld = () => {
    setOpenIds({ [MARKET_RESEARCH_DAILY_LOGS[0]?.id ?? ""]: true });
  };

  return (
    <div className="space-y-3">
      {/* Controls Bar */}
      <div className="flex items-center justify-between px-1">
        <p className="text-[11px] font-mono text-zinc-500">
          Nhật ký {MARKET_RESEARCH_DAILY_LOGS.length} ngày (Mặc định mở ngày mới
          nhất)
        </p>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={expandAll}
            className="h-7 px-2 text-[11px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
          >
            Mở Tất Cả
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={collapseOld}
            className="h-7 px-2 text-[11px] text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
          >
            Thu Gọn Các Ngày Cũ
          </Button>
        </div>
      </div>

      {/* Daily Entries List */}
      <div className="space-y-2.5">
        {MARKET_RESEARCH_DAILY_LOGS.map((log) => {
          const isOpen = !!openIds[log.id];

          return (
            <Card
              key={log.id}
              className={cn(
                "border transition-all shadow-2xs overflow-hidden",
                log.isLatest
                  ? "border-emerald-500/40 dark:border-emerald-500/30 bg-white dark:bg-zinc-900"
                  : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40",
              )}
            >
              {/* Single-line Header / Toggle Button */}
              <button
                type="button"
                onClick={() => toggleOpen(log.id)}
                className="w-full text-left p-3 sm:p-3.5 flex items-center justify-between gap-3 hover:bg-zinc-100/50 dark:hover:bg-zinc-800/40 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Badge
                    variant="outline"
                    className={cn(
                      "text-[10px] font-mono shrink-0 px-2 py-0.5",
                      log.isLatest
                        ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30 font-bold"
                        : "bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700",
                    )}
                  >
                    📅 {log.date} {log.isLatest ? "(Mới nhất)" : ""}
                  </Badge>
                  <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100 truncate">
                    {log.title}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 text-zinc-400">
                  <span className="text-[10px] hidden sm:inline text-zinc-500">
                    {isOpen ? "Thu gọn" : "Xem chi tiết"}
                  </span>
                  {isOpen ? (
                    <ChevronDown className="w-4 h-4 text-zinc-500" />
                  ) : (
                    <ChevronRight className="w-4 h-4 text-zinc-400" />
                  )}
                </div>
              </button>

              {/* Collapsible Markdown Content */}
              {isOpen && (
                <div className="px-5 pb-5 pt-1 border-t border-zinc-100 dark:border-zinc-800/80 animate-in fade-in duration-150">
                  <div className="prose dark:prose-invert max-w-none text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans pt-2">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        a: ({ node, ...props }) => (
                          <a
                            {...props}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-red-600 underline hover:text-red-700 font-medium"
                          />
                        ),
                      }}
                    >
                      {log.content}
                    </ReactMarkdown>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export function MarketResearchTabRoute() {
  const [showDoc, setShowDoc] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);

  return (
    <div className="space-y-6">
      {/* TIÊU CHÍ PHÙ HỢP — lên đầu trang, đọc trước khi xem bảng so sánh bên dưới */}
      <CriteriaSection />

      {/* Top Header Toolbar — gộp toggle Nhật Ký Hàng Ngày vào chung đây (trước đứng riêng,
          tách rời khỏi tiêu đề "Nhật Ký Nghiên Cứu Thị Trường" ở trên nó) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between gap-3 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/50 flex-wrap">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
              Nhật Ký Nghiên Cứu Thị Trường (Daily Market Research Log)
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowDoc((v) => !v)}
              className="h-8 px-3 text-[11px] font-bold border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
            >
              {showDoc ? (
                <>
                  <ChevronDown className="w-3.5 h-3.5 mr-1.5 text-zinc-500" />{" "}
                  Thu gọn Nhật Ký
                </>
              ) : (
                <>
                  <ChevronRight className="w-3.5 h-3.5 mr-1.5 text-emerald-600 dark:text-emerald-400" />{" "}
                  📅 Xem Nhật Ký Hàng Ngày
                </>
              )}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowChecklist(true)}
              className="h-8 px-3 text-[11px] font-bold border-emerald-500/40 text-emerald-700 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 cursor-pointer"
            >
              <HelpCircle className="w-3.5 h-3.5 mr-1.5 text-emerald-600 dark:text-emerald-400" />
              Hướng Dẫn Resources Nghiên Cứu ℹ️
            </Button>
          </div>
        </div>

        {showDoc && (
          <div className="animate-in fade-in duration-200">
            <DailyResearchLogCard />
          </div>
        )}
      </div>

      {/* NICHE COMPARISON & RECOMMENDATION — đọc lại 4/6 báo cáo gốc để so sánh thật */}
      <NicheComparisonSection />

      {/* RESOURCE GUIDE DIALOG POPUP — reorganized 29/08 theo đúng 3 nhóm + cadence,
          bớt hẳn số lượng nguồn (trước 4 nhóm/12 nguồn → giờ 3 nhóm/~7 nguồn) vì lý do
          đưa ra yêu cầu review là "chưa biết nên đọc gì hàng ngày" — vấn đề là quá tải,
          không phải thiếu nguồn. */}
      <Dialog open={showChecklist} onOpenChange={setShowChecklist}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-zinc-100">
              <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Nguồn cập nhật thị trường — 3 nhóm, không phải đọc hết mỗi ngày
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 text-xs text-zinc-700 dark:text-zinc-300 pt-2">
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Vấn đề trước đây không phải thiếu nguồn — là 4 nhóm/12+ nguồn thì
              không biết đọc cái nào trước. Rút còn 3 nhóm, mỗi nhóm có{" "}
              <strong>nhịp đọc riêng</strong> — nhóm 1 xem 1 lần/tuần đủ, nhóm 2
              lướt khi rảnh, nhóm 3 chỉ mở khi cần quyết định (không phải nguồn
              "đọc tin").
            </p>

            <div className="space-y-3">
              {/* Nhóm 1 — Tin tức & chính sách nền tảng */}
              <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-zinc-100">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] shrink-0 font-mono">
                      1
                    </span>
                    <span>
                      🌐 Tin tức & chính sách nền tảng (Shopify · Meta · TikTok
                      · fulfillment)
                    </span>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-[9px] shrink-0 border-blue-500/30 text-blue-600 bg-blue-500/10"
                  >
                    1×/tuần
                  </Badge>
                </div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-400 pl-7 space-y-1 leading-relaxed">
                  <p>
                    • <strong>Shopify Changelog</strong>:{" "}
                    <a
                      href="https://changelog.shopify.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 underline"
                    >
                      changelog.shopify.com
                    </a>{" "}
                    — thứ duy nhất thực sự ảnh hưởng ngay tới store (vd đợt đóng
                    Additional Scripts đã ghi trong log 27/08).
                  </p>
                  <p>
                    • <strong>Meta Business Help/Newsroom</strong>:{" "}
                    <a
                      href="https://www.facebook.com/business/help/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 underline"
                    >
                      facebook.com/business/help
                    </a>{" "}
                    — chính sách Pixel/Ads thay đổi (vd Andromeda/ASC).
                  </p>
                  <p>
                    • <strong>TikTok for Business Newsroom</strong>:{" "}
                    <a
                      href="https://newsroom.tiktok.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 underline"
                    >
                      newsroom.tiktok.com
                    </a>{" "}
                    — chính sách creator/ads.
                  </p>
                  <p>
                    • <strong>Fulfillment</strong>: trang tin YunExpress/CJ
                    Dropshipping — chỉ xem khi chuẩn bị chọn/đổi 3PL, không phải
                    nguồn đọc định kỳ.
                  </p>
                </div>
              </div>

              {/* Nhóm 2 — Cộng đồng & operator VN */}
              <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-zinc-100">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] shrink-0 font-mono">
                      2
                    </span>
                    <span>👥 Cộng đồng & operator VN</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-[9px] shrink-0 border-blue-500/30 text-blue-600 bg-blue-500/10"
                  >
                    Lướt khi rảnh
                  </Badge>
                </div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-400 pl-7 space-y-1.5 leading-relaxed">
                  <p>
                    Đang follow 3 người (Bảo Nam Kimchi, Hùng Tóc Trưởng,
                    Anhstein MMO) + 1{" "}
                    <a
                      href="https://www.facebook.com/groups/296787476078292/?sorting_setting=CHRONOLOGICAL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-600 dark:text-emerald-400 underline"
                    >
                      FB Group Dropship VN
                    </a>
                    . Mình không có cách kiểm chứng độc lập ai trong 3 người đó
                    đáng tin hơn ai — không tự xếp hạng hộ được.
                  </p>
                  <p className="font-semibold text-zinc-700 dark:text-zinc-300">
                    Cách chọn thực tế hơn: áp cùng rule cắt lỗ đang dùng cho sản
                    phẩm — theo dõi cả 3 trong 2 tuần, ai{" "}
                    <strong>
                      không đưa ra nổi 1 thông tin áp dụng được vào việc đang
                      làm
                    </strong>{" "}
                    thì bỏ, chỉ giữ lại 1 người + group để đọc đều. 3 người + 1
                    group cùng lúc là quá tải, không phải vì thiếu ai.
                  </p>
                </div>
              </div>

              {/* Nhóm 3 — Tool & công nghệ */}
              <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-zinc-100">
                    <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] shrink-0 font-mono">
                      3
                    </span>
                    <span>🛠️ Tool & công nghệ đang/nên dùng</span>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-[9px] shrink-0 border-blue-500/30 text-blue-600 bg-blue-500/10"
                  >
                    Mở khi cần quyết định
                  </Badge>
                </div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-400 pl-7 space-y-1 leading-relaxed">
                  <p>
                    •{" "}
                    <strong className="text-emerald-700 dark:text-emerald-400">
                      PPSPY (đã dùng, hiệu quả nhất)
                    </strong>
                    : live-check store đối thủ (theme/app/pixel/giá thật) —
                    chính công cụ này đã bắt được số liệu bịa trong nhật ký
                    28/08. Dùng trước khi tin bất kỳ claim nào về đối thủ.
                  </p>
                  <p>
                    • <strong>Meta Ads Library + TikTok Creative Center</strong>
                    : đã dùng đúng cách trong 3 báo cáo verified (Car
                    Accessories/Sustainability/Child &amp; Baby) — luôn mở live,
                    ghi ngày giờ, không suy diễn từ trí nhớ.
                  </p>
                  <p>
                    • <strong>Claude/ChatGPT</strong>: viết/rà lại nội dung,
                    KHÔNG dùng để tự bịa số liệu thị trường thay cho việc mở
                    nguồn thật (đúng bài học từ báo cáo Nails).
                  </p>
                  <p>
                    • <strong>CapCut / Canva</strong>: dựng creative — chỉ cần
                    khi đã có sản phẩm mẫu thật trong tay để quay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
