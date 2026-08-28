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
import { HOME_PROGRESS_TABS } from "@/features/dropshipping/data/home-progress-data";
import {
  ExternalLink,
  Code2,
  Monitor,
  Edit3,
  Search,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ChevronRight,
  FolderKanban,
  Target,
  FileText,
  HelpCircle,
  CheckSquare,
} from "lucide-react";

export const Route = createFileRoute("/dropship/progress/1-market-research")({
  component: MarketResearchTabRoute,
});

const getTab = (id: string) => HOME_PROGRESS_TABS.find((t) => t.id === id);

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
}

const MARKET_RESEARCH_NICHES: NicheItem[] = [
  {
    num: 0,
    title: "Dropshipping niche 2026 (tổng quan)",
    status: "reference",
    path: "workspace/doc/1-market-research/0-Dropshipping niche 2026.gdoc",
    fullPath: "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/0-Dropshipping niche 2026.gdoc",
    note: "Seed list từ Shopify dropshipping-niches blog.",
  },
  {
    num: 1,
    title: "Car Accessories",
    status: "done",
    path: "workspace/doc/1-market-research/1-car-accessories-niche-report.docx",
    fullPath: "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/1-car-accessories-niche-report.docx",
    altPath: "car-accessories-niche-report.html",
    altFullPath: "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/car-accessories-niche-report.html",
    altLabel: "Bản HTML",
    note: "Top 10/20 sản phẩm, mỗi sản phẩm check live 4 nguồn (Trends/Shopping/TikTok/Meta Ads).",
  },
  {
    num: 2,
    title: "Sustainability",
    status: "done",
    path: "workspace/doc/1-market-research/2-sustainability-niche-report.docx",
    fullPath: "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/2-sustainability-niche-report.docx",
    altPath: "sustainability-niche-report.html",
    altFullPath: "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/sustainability-niche-report.html",
    altLabel: "Bản HTML",
  },
  {
    num: 3,
    title: "Kitchen and Dining",
    status: "done",
    path: "workspace/doc/1-market-research/3-Kitchen and dining.gdoc",
    fullPath: "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/3-Kitchen and dining.gdoc",
  },
  {
    num: 4,
    title: "Home and Bedroom",
    status: "done-decided",
    path: "workspace/doc/1-market-research/4-Home and bedroom.gdoc",
    fullPath: "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/4-Home and bedroom.gdoc",
    altPath: "market-research-runs.json",
    altFullPath: "/Users/aminhp93/personal/dropship/dropship-web/src/features/dropshipping/data/market-research-runs.json",
    altLabel: "JSON Data",
    note: "Đã CHỐT sản phẩm thật: đèn dây macrame/boho (2026-08-23). Data đầy đủ: src/features/dropshipping/data/market-research-runs.json",
  },
  {
    num: 5,
    title: "Child and Baby",
    status: "done",
    path: "workspace/doc/1-market-research/5-Child and baby.html",
    fullPath: "/Users/aminhp93/personal/dropship/workspace/doc/1-market-research/5-Child and baby.html",
    note: "5 sản phẩm live-check. Cao nhất: Baby Bottles 8/10.",
  },
];

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

interface DailyResearchLog {
  id: string;
  date: string;
  title: string;
  isLatest?: boolean;
  content: string;
}

const MARKET_RESEARCH_DAILY_LOGS: DailyResearchLog[] = [
  {
    id: "2026-08-27",
    date: "27/08/2026",
    title: "Cập Nhật Thực Tế Thị Trường",
    isLatest: true,
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

📌 **Nguồn bài viết thực tế**: [Shopify Changelog](https://changelog.shopify.com/) · [Modern Retail](https://www.modernretail.co/) · [Bài viết Bảo Nam 1](https://www.facebook.com/share/p/1KAt2rUt8m/) · [Bài viết Bảo Nam 2](https://www.facebook.com/share/p/1BeWPj3Eb8/) · [Bài viết Anhstein MMO](https://www.facebook.com/share/p/1cWiWEt9AN/) · [Profile Hùng Tóc Trưởng](https://www.facebook.com/hungtoctruongdl) · [Group Dropship VN (New Posts)](https://www.facebook.com/groups/296787476078292/?sorting_setting=CHRONOLOGICAL).`
  },
  {
    id: "2026-08-23",
    date: "23/08/2026",
    title: "CHỐT WIN Product: Đèn Dây Macrame / Boho Decor",
    isLatest: false,
    content: `#### 🌐 1. Nguồn Tin Tức & Xu Hướng E-Commerce Quốc Tế
- **Shopify Dropshipping Niches Blog**: Ngách Home Decor & Lighting duy trì mức tăng trưởng bền vững quanh năm (non-fad).

#### 🔍 2. Nguồn Data Ads Spy & Nhu Cầu Tìm Kiếm
- **Google Trends US**: Từ khóa \`macrame fairy lights\` và \`boho wall decor\` giữ baseline ổn định 45-60/100, không bị spike ảo theo mùa.
- **TikTok Creative Center**: Hashtag views đạt trên 68M views, 3s Hook Rate trên 30%, cực kỳ phù hợp làm clip organic 2-3 video/ngày.

#### 👥 3. Nguồn Cộng Đồng & Operator Kinh Nghiệm
- **Lý do chốt sản phẩm Niche Home & Bedroom (Rank #1)**: Thỏa mãn 100% tiêu chí SOP 2026 — Markup >= 3.5x ($29.99 sale price vs $8.00 landed cost), không bị khống chế bởi Personal/Local Brand Equity.

#### 📦 4. Nguồn Cước Phí Vận Chuyển 3PL & Tracking
- **YunExpress Small Parcel US**: Gói hàng < 300g, cước $3.50, thời gian 5-8 ngày, không vỡ hỏng.

📌 **Nguồn tổng hợp**: SOP Bước 2 & Báo cáo bóc tách \`workspace/doc/1-market-research/4-Home and bedroom.gdoc\`.`
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

📌 **Nguồn tổng hợp**: Shopify Dropshipping Niches Blog & Báo cáo 5 ngách \`workspace/doc/1-market-research/\`.`
  }
];

function DailyResearchLogCard() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "2026-08-27": true,
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
    setOpenIds({ "2026-08-27": true });
  };

  return (
    <div className="space-y-3">
      {/* Controls Bar */}
      <div className="flex items-center justify-between px-1">
        <p className="text-[11px] font-mono text-zinc-500">
          Nhật ký {MARKET_RESEARCH_DAILY_LOGS.length} ngày (Mặc định chỉ mở ngày mới nhất)
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
                  : "border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40"
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
                        : "bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700"
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
  const [showDoc, setShowDoc] = useState(true);
  const [showNiches, setShowNiches] = useState(false);
  const [showChecklist, setShowChecklist] = useState(false);

  const getViteFsUrl = (fullPath: string) => {
    return `/@fs${fullPath}`;
  };

  const getVsCodeUrl = (fullPath: string) => {
    return `vscode://file${fullPath}`;
  };

  return (
    <div className="space-y-6">
      {/* Top Header Toolbar with Checklist Icon Dialog Button */}
      <div className="flex items-center justify-between gap-3 p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/50">
        <div className="flex items-center gap-2">
          <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
          <span className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
            Nhật Ký Nghiên Cứu Thị Trường (Daily Market Research Log)
          </span>
        </div>

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

      {/* Top Section: Markdown SOP Document (Default Open) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowDoc((v) => !v)}
            className="h-9 px-4 text-xs font-bold border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer shadow-2xs"
          >
            {showDoc ? (
              <>
                <ChevronDown className="w-4 h-4 mr-1.5 text-zinc-500" /> Thu gọn Tài Liệu SOP
              </>
            ) : (
              <>
                <ChevronRight className="w-4 h-4 mr-1.5 text-emerald-600 dark:text-emerald-400" /> 📄 Xem Tài Liệu Market Research SOP Chi Tiết
              </>
            )}
          </Button>
        </div>

        {showDoc && (
          <div className="animate-in fade-in duration-200">
            <DailyResearchLogCard />
          </div>
        )}
      </div>

      {/* RESOURCE GUIDE DIALOG POPUP */}
      <Dialog open={showChecklist} onOpenChange={setShowChecklist}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-base font-bold text-zinc-900 dark:text-zinc-100">
              <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              Resource Guide: Danh Sách Các Nguồn Dùng Để Tổng Hợp Nghiên Cứu Thị Trường
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 text-xs text-zinc-700 dark:text-zinc-300 pt-2">
            <p className="text-zinc-500 dark:text-zinc-400 leading-relaxed">
              Dưới đây là danh mục <strong>tất cả các Nguồn dữ liệu & Công cụ</strong> được sử dụng để tổng hợp nhật ký nghiên cứu thị trường hàng ngày:
            </p>

            <div className="space-y-3">
              {/* Resource 1 */}
              <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-zinc-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] shrink-0 font-mono">1</span>
                  <span>🌐 Nguồn Tin Tức & Xu Hướng E-Commerce Quốc Tế</span>
                </div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-400 pl-7 space-y-1 leading-relaxed">
                  <p>• <strong>Shopify Official</strong>: <a href="https://changelog.shopify.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline">Shopify Changelog</a> & <a href="https://www.shopify.com/blog" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline">Shopify Blog</a> — Cập nhật tính năng kỹ thuật & xu hướng bán hàng.</p>
                  <p>• <strong>Modern Retail</strong>: <a href="https://www.modernretail.co/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline">modernretail.co</a> — Phân tích xu hướng DTC, thương hiệu & omni-channel.</p>
                  <p>• <strong>Retail Dive & Digital Commerce 360</strong>: <a href="https://www.retaildive.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline">retaildive.com</a> & <a href="https://www.digitalcommerce360.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline">digitalcommerce360.com</a> — Báo cáo dữ liệu thị trường toàn cầu.</p>
                  <p>• <strong>EcommerceBytes</strong>: <a href="https://www.ecommercebytes.com/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline">ecommercebytes.com</a> — Tin tức sellers & cập nhật vận chuyển.</p>
                </div>
              </div>

              {/* Resource 2 */}
              <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-zinc-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] shrink-0 font-mono">2</span>
                  <span>🔍 Nguồn Data Ads Spy & Nhu Cầu Tìm Kiếm (Live Search & Ads)</span>
                </div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-400 pl-7 space-y-1 leading-relaxed">
                  <p>• <strong>Meta Ads Library</strong>: Tra cứu số lượng Ad Sets đang chạy active &gt; 14 ngày của đối thủ tại Mỹ.</p>
                  <p>• <strong>Google Trends US</strong>: Kiểm tra tăng trưởng từ khóa tìm kiếm theo mốc thời gian (YoY Growth).</p>
                  <p>• <strong>TikTok Creative Center</strong>: Bóc tách top trending ads, popular music, &amp; viral video hooks.</p>
                  <p>• <strong>Google Keyword Planner &amp; Amazon BSR</strong>: Kiểm tra Monthly Search Volume (MSV) &amp; Best Seller Rank.</p>
                </div>
              </div>

              {/* Resource 3 */}
              <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-zinc-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] shrink-0 font-mono">3</span>
                  <span>👥 Nguồn Cộng Đồng & Operator Kinh Nghiệm (FB Feeds)</span>
                </div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-400 pl-7 space-y-1 leading-relaxed">
                  <p>• <strong>Cộng đồng Dropship VN</strong>: <a href="https://www.facebook.com/groups/296787476078292/" target="_blank" rel="noopener noreferrer" className="text-emerald-600 dark:text-emerald-400 underline">FB Group</a> — Cập nhật thực tế hải quan LAX, kho YunExpress &amp; cổng thanh toán.</p>
                  <p>• <strong>Bảo Nam Kimchi &amp; Hùng Tóc Trưởng &amp; Anhstein MMO</strong>: Phân tích Unit Economics vốn &lt; $3.000, CPM Ads Mỹ, ASC campaigns.</p>
                </div>
              </div>

              {/* Resource 4 */}
              <div className="p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/50 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-zinc-100">
                  <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 flex items-center justify-center text-[10px] shrink-0 font-mono">4</span>
                  <span>📦 Nguồn Cước Phí Vận Chuyển 3PL & Tracking</span>
                </div>
                <div className="text-[11px] text-zinc-600 dark:text-zinc-400 pl-7 space-y-1 leading-relaxed">
                  <p>• <strong>Bảng cước 3PL YunExpress / CJ Dropshipping 2026</strong>: Cước tuyến US 5-8 ngày cho gói nhỏ (0.2kg - 0.5kg).</p>
                  <p>• <strong>17TRACK API System</strong>: Kiểm tra tỷ lệ giao hàng đúng hạn &amp; tự động Sync tracking code lên PayPal.</p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Section 2: Collapsible Niche Files List (Default Collapsed) */}
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
                <ChevronDown className="w-4 h-4 mr-1.5 text-zinc-500" /> Thu gọn danh sách 5 Ngách
              </>
            ) : (
              <>
                <ChevronRight className="w-4 h-4 mr-1.5 text-emerald-600 dark:text-emerald-400" /> 📂 Xem Chi Tiết 5 Báo Cáo Ngách (docx / html / json)
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
                          <span>{n.altLabel} ({n.altPath})</span>
                          <ExternalLink className="w-3 h-3 ml-0.5 opacity-70" />
                        </a>
                      )}
                    </div>

                    {n.note && (
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{n.note}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
