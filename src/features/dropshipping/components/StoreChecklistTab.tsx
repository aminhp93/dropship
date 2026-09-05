import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Eye,
  CheckCircle2,
  Circle,
  Search,
  FileText,
  X,
  Store,
  AlertTriangle,
  Compass,
  ShoppingCart,
  Truck,
  Sparkles,
  HeartHandshake,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  SNUGLET_STORE_CHECKLIST,
  APEX_STORE_CHECKLIST,
  ULTRACARMATS_STORE_CHECKLIST,
  STORE_LIST,
  type StoreChecklistItem,
  type StoreListEntry,
} from "@/features/dropshipping/data/store-checklist-data";

// 6-Stage Customer Journey Data for Apex Auto Mats
interface JourneyStage {
  id: string;
  stageNumber: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  customerMindset: string;
  touchpoints: string[];
  keyDeliverables: string[];
  metricsToTrack: string[];
  riskWarnings: string[];
  checklistItems: { id: string; label: string; done: boolean }[];
}

const APEX_JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "awareness",
    stageNumber: "Giai Đoạn 1",
    title: "Nhận Biết & Khám Phá (Awareness)",
    subtitle: "Khách phát hiện sản phẩm qua TikTok Organic, Meta Ads hoặc Google",
    icon: Compass,
    customerMindset:
      '"Sàn/ghế xe dạo này bẩn quá. Có giải pháp nào may đúng phom xe mà dễ lau chùi không?"',
    touchpoints: [
      "Video TikTok Organic / Reel 15s (3s Hook)",
      "Meta Advantage+ Video Ads (Before/After bọc ghế)",
      "Google Search (Từ khóa: custom car floor mats AU/UK)",
    ],
    keyDeliverables: [
      "Video 3s Hook: 'Stop buying cheap car mats...'",
      "Visual so sánh trước/sau khi bọc thảm 5D chống nước",
      "Headline tập trung vào nỗi đau bùn bẩn, tuyết tan",
    ],
    metricsToTrack: ["CTR > 1.8%", "3s Hold Rate > 30%", "CPC < $0.85"],
    riskWarnings: [
      "Không dùng video đối thủ bị lọt logo watermark.",
      "Không phóng đại quá đà thời gian giao hàng.",
    ],
    checklistItems: [
      { id: "A1", label: "3-5 kịch bản Video UGC 15s", done: true },
      { id: "A2", label: "Cài Meta & TikTok Pixel", done: true },
    ],
  },
  {
    id: "consideration",
    stageNumber: "Giai Đoạn 2",
    title: "Cân Nhắc & Đánh Giá (Consideration)",
    subtitle: "Khách vào PDP và chọn phom xe",
    icon: Eye,
    customerMindset:
      '"Liệu có vừa khít đời xe 2023 của mình không? Shop này có uy tín không?"',
    touchpoints: [
      "Vehicle Selector Widget (Hãng ➔ Dòng ➔ Năm xe)",
      "Trust Badges: 30 ngày vừa phom 100% + Đổi trả miễn phí",
      "Loox Photo Reviews / Rating 4.8★",
      "4 Benefits: 3D Fit, All-Weather, 5D Leather, 5-Min Clean",
    ],
    keyDeliverables: [
      "Widget chọn phom xe chuẩn 100%",
      "4 màu da chủ đạo (Black/Beige, Solid Black, Red, Blue)",
      "FAQ giải đáp lắp đặt & bảo hành 12 tháng",
    ],
    metricsToTrack: ["ATC Rate > 6%-8%", "Time on PDP > 1m20s", "Bounce Rate < 45%"],
    riskWarnings: [
      "Chưa có chứng nhận túi khí ➔ không hứa 'Airbag Compatible'.",
    ],
    checklistItems: [
      { id: "C1", label: "Vehicle Selector Widget live", done: true },
      { id: "C2", label: "Trust Badges & FAQ live", done: true },
    ],
  },
  {
    id: "decision",
    stageNumber: "Giai Đoạn 3",
    title: "Quyết Định & Thanh Toán (Checkout)",
    subtitle: "Khách xem giỏ hàng và thanh toán",
    icon: ShoppingCart,
    customerMindset:
      '"Tổng chi phí bao nhiêu? Thanh toán qua PayPal có an toàn không?"',
    touchpoints: [
      "Cart Slide-out + Free Shipping Progress Bar",
      "Upsell Lót cốp (Boot Liner) giảm 25%",
      "Shopify Checkout SSL 256-bit (PayPal, Credit Card, Apple Pay)",
    ],
    keyDeliverables: [
      "Thanh toán mượt mà, tính đúng AUD/GBP/USD",
      "Email Abandoned Cart Recovery 10% discount",
    ],
    metricsToTrack: ["CVR > 2.2%-3.5%", "AOV > $85.00", "Cart Abandonment < 68%"],
    riskWarnings: ["Không cộng phí ẩn ở bước thanh toán cuối."],
    checklistItems: [
      { id: "D1", label: "Cấu hình PayPal & Credit Card", done: true },
      { id: "D2", label: "Bật Abandoned Cart Email 10%", done: true },
    ],
  },
  {
    id: "fulfillment",
    stageNumber: "Giai Đoạn 4",
    title: "Vận Chuyển & Chăm Sóc (Fulfillment)",
    subtitle: "Đơn hàng được laser cut và giao đến tay khách",
    icon: Truck,
    customerMindset:
      '"Shop nhận đơn chưa? Mã tracking theo dõi ở đâu?"',
    touchpoints: [
      "Email xác nhận đơn ngay lập tức",
      "Trang tra cứu đơn hàng Track Order live",
      "Tracking update: Cắt laser ➔ Xuất kho ➔ Giao hàng",
    ],
    keyDeliverables: [
      "Trang Track Order live (/apps/trackorder)",
      "Thời gian xử lý: 1-2 ngày | Ship thật AU/UK: 7-12 ngày",
    ],
    metricsToTrack: ["Processing Time < 48h", "On-Time Delivery > 95%", "Support Tickets < 4%"],
    riskWarnings: ["Ghi rõ ship 7-12 ngày (không hứa ship 3-5 ngày)."],
    checklistItems: [
      { id: "F1", label: "Dựng trang Track Order live", done: true },
      { id: "F2", label: "Email Tracking tự động", done: true },
    ],
  },
  {
    id: "unboxing",
    stageNumber: "Giai Đoạn 5",
    title: "Mở Hộp & Lắp Đặt (Unboxing)",
    subtitle: "Khách nhận hàng và lắp lên xe",
    icon: Sparkles,
    customerMindset:
      '"Chất da thơm và chuẩn phom xe quá! Tháo lắp chốt có dễ không?"',
    touchpoints: [
      "Bao bì tem niêm phong Apex Auto Mats",
      "Thẻ Hướng dẫn Lắp đặt 5 phút + QR Code Video",
      "Hỗ trợ 1-đổi-1 nếu khuy bấm bị lệch",
    ],
    keyDeliverables: [
      "Thank You Card in QR Code hỗ trợ",
      "Video hướng dẫn tháo chốt cũ & cài chốt Apex",
    ],
    metricsToTrack: ["Refund Rate < 2.0%", "CSAT > 4.8 / 5.0", "Support Time < 12h"],
    riskWarnings: ["Đóng gói phẳng tránh móp gập mép da."],
    checklistItems: [{ id: "U1", label: "Đính kèm thẻ in HDSD 5 phút", done: true }],
  },
  {
    id: "loyalty",
    stageNumber: "Giai Đoạn 6",
    title: "Trung Thành & Đánh Giá (Advocacy)",
    subtitle: "Khách để lại review 5 sao và giới thiệu bạn bè",
    icon: HeartHandshake,
    customerMindset:
      '"Thảm sàn dùng thích thật, chụp ảnh khoang xe để nhận voucher $10!"',
    touchpoints: [
      "Email xin Đánh giá tự động sau 5 ngày nhận hàng",
      "Tặng voucher $10 cho lần mua sau khi gửi ảnh/video",
    ],
    keyDeliverables: [
      "Kịch bản Email Loox Review tự động",
      "Cross-sell mua thêm Lót cốp hoặc Áo trùm ghế",
    ],
    metricsToTrack: ["Review Submission > 15%", "Photo Review Ratio > 40%", "Repeat Purchase > 12%"],
    riskWarnings: ["Không gửi email đòi review trước khi hàng đến."],
    checklistItems: [{ id: "L1", label: "Email Loox Review tự động", done: true }],
  },
];

export function StoreChecklistTab() {
  const [selectedStoreId, setSelectedStoreId] = useState<string>("snuglet");
  const [searchQuery, setSearchQuery] = useState("");
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(["A", "B", "C", "H", "N", "U_A", "U_B", "U_C", "U_D"]),
  );
  const [previewItem, setPreviewItem] = useState<StoreChecklistItem | null>(null);

  // Customer Journey Modal Dialog State
  const [showJourneyDialog, setShowJourneyDialog] = useState<boolean>(false);
  const [activeJourneyStageId, setActiveJourneyStageId] = useState<string>("awareness");

  // Active Store object
  const activeStore = useMemo<StoreListEntry>(() => {
    return STORE_LIST.find((s) => s.id === selectedStoreId) || STORE_LIST[0];
  }, [selectedStoreId]);

  // Active Store Checklist
  const activeRawChecklist = useMemo(() => {
    if (selectedStoreId === "ultra-car-mats") return ULTRACARMATS_STORE_CHECKLIST;
    if (selectedStoreId === "apex-auto-mats") return APEX_STORE_CHECKLIST;
    return SNUGLET_STORE_CHECKLIST;
  }, [selectedStoreId]);

  const allItems = useMemo(
    () => activeRawChecklist.flatMap((s) => s.items),
    [activeRawChecklist],
  );
  const doneCount = allItems.filter((i) => i.done).length;
  const percent = Math.round((doneCount / allItems.length) * 100);

  // Active Journey Stage
  const activeJourneyStage = useMemo(() => {
    return (
      APEX_JOURNEY_STAGES.find((s) => s.id === activeJourneyStageId) ||
      APEX_JOURNEY_STAGES[0]
    );
  }, [activeJourneyStageId]);

  // Search filter logic
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return activeRawChecklist;

    const query = searchQuery.toLowerCase().trim();

    return activeRawChecklist
      .map((section) => {
        const sectionMatch = section.title.toLowerCase().includes(query);

        const matchingItems = section.items.filter((item) => {
          return (
            item.label.toLowerCase().includes(query) ||
            item.howTo.toLowerCase().includes(query) ||
            item.id.toLowerCase().includes(query) ||
            (item.previewTitle && item.previewTitle.toLowerCase().includes(query)) ||
            (item.previewContent && item.previewContent.toLowerCase().includes(query))
          );
        });

        if (sectionMatch || matchingItems.length > 0) {
          return {
            ...section,
            items: sectionMatch ? section.items : matchingItems,
          };
        }
        return null;
      })
      .filter(Boolean) as typeof activeRawChecklist;
  }, [searchQuery, activeRawChecklist]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="space-y-5">
      {/* STORE SELECTOR & ACTION BAR */}
      <Card className="p-4 border-zinc-200 dark:border-zinc-800 space-y-3 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Dropdown Selector */}
          <div className="flex items-center gap-2 flex-1 max-w-lg">
            <Store className="w-4 h-4 text-purple-500 shrink-0" />
            <div className="relative w-full">
              <select
                value={selectedStoreId}
                onChange={(e) => {
                  setSelectedStoreId(e.target.value);
                  setSearchQuery("");
                }}
                className="w-full text-xs font-bold font-sans pl-3 pr-8 py-2 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-1 focus:ring-purple-500 cursor-pointer shadow-2xs appearance-none"
              >
                {STORE_LIST.map((store) => (
                  <option key={store.id} value={store.id}>
                    {store.name} ({store.badgeText}) — {store.domain}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            {selectedStoreId === "apex-auto-mats" && (
              <button
                onClick={() => setShowJourneyDialog(true)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold bg-purple-600 text-white hover:bg-purple-500 transition-all cursor-pointer shadow-xs"
                title="Bản đồ khung mẫu dựng lúc học Apex — car mats, giữ làm tham khảo khung 6 giai đoạn, không phải hành trình khách hàng của Snuglet"
              >
                <Compass className="w-4 h-4" />
                <span>Hành Trình Khách Hàng (khung mẫu — Apex)</span>
              </button>
            )}

            <a
              href={activeStore.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 shadow-2xs transition-colors shrink-0 cursor-pointer"
            >
              <span>Live Web</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Competitor Note */}
        {activeStore.isCompetitor && (
          <div className="p-2.5 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-300/60 dark:border-amber-800 text-[11px] text-amber-800 dark:text-amber-300 flex items-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-500" />
            <span>
              <strong>Dữ liệu bóc tách từ ultracarmats.com</strong> — Lưu ý không copy claim rủi ro (Airbag, ship 5 ngày).
            </span>
          </div>
        )}

        {/* Per-store notice (vd: theme chưa publish, store đã archive) */}
        {activeStore.notice && (
          <div
            className={cn(
              "p-2.5 rounded-lg border text-[11px] flex items-center gap-2",
              activeStore.isActive
                ? "bg-sky-50 dark:bg-sky-950/30 border-sky-300/60 dark:border-sky-800 text-sky-800 dark:text-sky-300"
                : "bg-zinc-100 dark:bg-zinc-900 border-zinc-300/60 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400",
            )}
          >
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            <span>{activeStore.notice}</span>
          </div>
        )}
      </Card>

      {/* CHECKLIST & SEARCH */}
      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-4">
        {/* Progress Header */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <h2 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
              Checklist: {activeStore.name}
            </h2>
            <Badge variant="outline" className="text-[10px] text-zinc-400 font-mono">
              {doneCount}/{allItems.length} ({percent}%)
            </Badge>
          </div>
          <Progress value={percent} className="h-1.5 w-32" />
        </div>

        {/* SEARCH BAR */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm kiếm checklist, chính sách, giá bán..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-8 pr-8 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900/80 focus:outline-none focus:ring-1 focus:ring-purple-500 font-medium"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* SECTIONS LIST */}
        <div className="space-y-2.5">
          {filteredSections.length === 0 ? (
            <div className="p-6 text-center space-y-1 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-lg text-xs text-zinc-500">
              Không tìm thấy mục nào khớp "<b>{searchQuery}</b>".
            </div>
          ) : (
            filteredSections.map((section) => {
              const sectionDone = section.items.filter((i) => i.done).length;
              const isOpen = openSections.has(section.id) || Boolean(searchQuery);

              return (
                <div
                  key={section.id}
                  className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors text-left"
                  >
                    <span className="flex items-center gap-2 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                      {isOpen ? (
                        <ChevronDown className="w-3.5 h-3.5 shrink-0 text-zinc-400" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-zinc-400" />
                      )}
                      {section.title}
                    </span>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] font-mono shrink-0",
                        sectionDone === section.items.length
                          ? "border-emerald-500/30 text-emerald-600 bg-emerald-500/10"
                          : "border-zinc-300 dark:border-zinc-700 text-zinc-500",
                      )}
                    >
                      {sectionDone}/{section.items.length}
                    </Badge>
                  </button>

                  {isOpen && (
                    <div className="px-3 py-2.5 space-y-2 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800/60">
                      {section.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 p-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors"
                        >
                          <div className="flex items-start gap-2 text-left flex-1">
                            {item.done ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            ) : (
                              <Circle className="w-4 h-4 text-zinc-300 dark:text-zinc-700 shrink-0 mt-0.5" />
                            )}
                            <div className="space-y-0.5">
                              <span
                                className={cn(
                                  "block text-xs leading-relaxed font-medium transition-colors",
                                  item.done
                                    ? "text-zinc-400 line-through"
                                    : "text-zinc-800 dark:text-zinc-200",
                                )}
                              >
                                {item.label}
                              </span>
                              <span className="block text-[11px] text-purple-600/90 dark:text-purple-400/90 font-mono">
                                → {item.howTo}
                              </span>
                            </div>
                          </div>

                          {item.previewContent && (
                            <button
                              onClick={() => setPreviewItem(item)}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 border border-purple-500/20 transition-all shrink-0 cursor-pointer self-start"
                            >
                              <FileText className="w-3 h-3" />
                              <span>Preview</span>
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </Card>

      {/* ITEM CONTENT PREVIEW MODAL */}
      {previewItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/80">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-purple-500" />
                <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                  {previewItem.previewTitle || previewItem.label}
                </h3>
              </div>

              <button
                onClick={() => setPreviewItem(null)}
                className="w-7 h-7 rounded-full bg-zinc-200/60 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto flex-1 space-y-3">
              <div className="prose dark:prose-invert max-w-none text-xs leading-relaxed font-sans text-zinc-700 dark:text-zinc-300">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {previewItem.previewContent || ""}
                </ReactMarkdown>
              </div>
            </div>

            <div className="p-3 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex items-center justify-end text-xs">
              <button
                onClick={() => setPreviewItem(null)}
                className="px-3.5 py-1.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EXPANDED LARGE CUSTOMER JOURNEY DIALOG MODAL */}
      {showJourneyDialog && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-6xl w-full h-[94vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/90 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[10px] font-mono uppercase text-purple-500 border-purple-500/30">
                      Bản Đồ Điểm Chạm · Apex Auto Mats
                    </Badge>
                    <Badge className="text-[10px] bg-emerald-500/10 text-emerald-600 border-emerald-500/20 font-bold">
                      Interactive Map
                    </Badge>
                  </div>
                  <h3 className="font-bold text-lg sm:text-xl text-zinc-900 dark:text-zinc-100 mt-0.5">
                    Customer Experience Journey Map (6 Giai Đoạn Điểm Chạm)
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setShowJourneyDialog(false)}
                className="w-9 h-9 rounded-full bg-zinc-200/60 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 overflow-y-auto flex-1 space-y-6">
              {/* 6 Stage Navigation Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {APEX_JOURNEY_STAGES.map((stg) => {
                  const Icon = stg.icon;
                  const isActive = stg.id === activeJourneyStageId;

                  return (
                    <button
                      key={stg.id}
                      onClick={() => setActiveJourneyStageId(stg.id)}
                      className={cn(
                        "p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 min-h-[90px]",
                        isActive
                          ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-md ring-2 ring-purple-500/30"
                          : "bg-zinc-50 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800",
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-bold uppercase font-mono opacity-80">
                          {stg.stageNumber}
                        </span>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold leading-snug line-clamp-2">
                        {stg.title.split("(")[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Stage Details Large Box */}
              <div className="p-6 border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/40 rounded-2xl space-y-6">
                <div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-[11px] font-bold font-mono text-purple-600 dark:text-purple-400 border-purple-500/30">
                      {activeJourneyStage.stageNumber}
                    </Badge>
                  </div>
                  <h4 className="font-bold text-xl text-zinc-900 dark:text-zinc-100 mt-1">
                    {activeJourneyStage.title}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5 font-medium">
                    {activeJourneyStage.subtitle}
                  </p>
                </div>

                {/* Mindset Quote Box */}
                <div className="p-4 bg-purple-500/5 border border-purple-500/20 rounded-xl space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-purple-500" /> Tâm Lý & Suy Nghĩ Cốt Lõi Khách Hàng (Customer Mindset)
                  </span>
                  <p className="text-sm italic text-zinc-800 dark:text-zinc-200 font-medium leading-relaxed">
                    {activeJourneyStage.customerMindset}
                  </p>
                </div>

                {/* 3 Main Grid Columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Touchpoints */}
                  <div className="space-y-3 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200/80 dark:border-zinc-800 shadow-2xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block border-b border-zinc-100 dark:border-zinc-800 pb-2">
                      Điểm Chạm (Touchpoints)
                    </span>
                    <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                      {activeJourneyStage.touchpoints.map((tp, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-purple-500 font-bold text-sm">•</span>
                          <span>{tp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-3 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200/80 dark:border-zinc-800 shadow-2xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block border-b border-zinc-100 dark:border-zinc-800 pb-2">
                      Hạng Mục Cần Thực Hiện
                    </span>
                    <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                      {activeJourneyStage.keyDeliverables.map((kd, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{kd}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics & KPIs */}
                  <div className="space-y-3 p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200/80 dark:border-zinc-800 shadow-2xs">
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block border-b border-zinc-100 dark:border-zinc-800 pb-2">
                      KPIs Đo Lường Mục Tiêu
                    </span>
                    <ul className="space-y-2 text-xs font-mono font-medium text-zinc-800 dark:text-zinc-200">
                      {activeJourneyStage.metricsToTrack.map((mt, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <ArrowRight className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                          <span>{mt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Risk Warnings & Checklist Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-300/60 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 space-y-1.5">
                    <span className="font-bold flex items-center gap-1.5 text-amber-700 dark:text-amber-400 text-xs">
                      <AlertCircle className="w-4 h-4 text-amber-500" /> Cảnh Báo Cần Tránh ở Giai Đoạn Này
                    </span>
                    <ul className="space-y-1 pl-5 list-disc text-xs leading-relaxed">
                      {activeJourneyStage.riskWarnings.map((rw, idx) => (
                        <li key={idx}>{rw}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200/80 dark:border-zinc-800 space-y-2 text-xs">
                    <span className="font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5 text-xs">
                      <ShieldCheck className="w-4 h-4 text-emerald-500" /> Checklist Đã Kiểm Tra
                    </span>
                    <div className="space-y-1.5">
                      {activeJourneyStage.checklistItems.map((ci) => (
                        <div key={ci.id} className="flex items-center gap-2 text-xs text-zinc-700 dark:text-zinc-300 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{ci.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 flex items-center justify-between text-xs shrink-0">
              <span className="text-zinc-500 font-medium">
                Khung trải nghiệm chuẩn cho thương hiệu phụ kiện ô tô Apex Auto Mats
              </span>
              <button
                onClick={() => setShowJourneyDialog(false)}
                className="px-5 py-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-xl font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors cursor-pointer shadow-xs"
              >
                Đóng Bản Đồ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
