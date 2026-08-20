import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import EVALUATED_PRODUCTS_DATA from "@/features/dropshipping/data/evaluated-products.json";
import {
  FlaskConical,
  Target,
  Crown,
  Video,
  Truck,
  DollarSign,
  Search,
  Zap,
  Calculator,
  Check,
  Sparkles,
  Bot,
  BarChart3,
  LayoutGrid,
  Table,
  TrendingUp,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  PieChart
} from "lucide-react";

export const Route = createFileRoute("/dropship/lab")({
  component: ProductLabPage,
});

// Map icon names from JSON data store
const ICON_MAP: Record<string, any> = {
  Target,
  Crown,
  Video,
  Truck,
  DollarSign,
};

interface RawPerspective {
  agentId: string;
  agentName: string;
  role: string;
  iconName: string;
  score: number;
  verdict: "WINNER" | "HIGH_RISK" | "CONDITIONAL" | "EXCELLENT";
  verdictLabel: string;
  dataConfidence?: "estimated" | "sourced";
  summary: string;
  bulletPoints: string[];
  recommendations: string[];
}

interface RawProductData {
  id: string;
  title: string;
  category: string;
  cogs: number;
  retailPrice: number;
  perspectives: RawPerspective[];
}

export function ProductLabPage() {
  const products: RawProductData[] = EVALUATED_PRODUCTS_DATA as RawProductData[];
  const [selectedProductId, setSelectedProductId] = useState<string>(products[0]?.id || "fairy-lights");
  const [customSearch, setCustomSearch] = useState<string>("");
  const [activeAgentTab, setActiveAgentTab] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "matrix" | "financial">("grid");
  const [copied, setCopied] = useState<boolean>(false);
  const [isDynamicMode, setIsDynamicMode] = useState<boolean>(false);

  // Find active preset product
  const presetProduct = useMemo(() => {
    return products.find((p) => p.id === selectedProductId) || products[0];
  }, [selectedProductId, products]);

  // Generate dynamic product data on-the-fly if user types custom query
  const activeProduct = useMemo<RawProductData>(() => {
    if (customSearch.trim() && isDynamicMode) {
      const queryName = customSearch.trim();
      return {
        id: "dynamic-custom",
        title: queryName,
        category: "Custom Target Niche",
        cogs: 6.5,
        retailPrice: 34.99,
        perspectives: [
          {
            agentId: "market-research-hunter",
            agentName: "Market Research Hunter",
            role: "Săn Sản Phẩm WIN & Multi-Source Intelligence",
            iconName: "Target",
            score: 8.1,
            verdict: "WINNER",
            verdictLabel: "High Viral Demand",
            dataConfidence: "estimated" as const,
            summary: `Đánh giá nhanh cho '${queryName}': Sản phẩm có thị hiếu thị trường tốt. Tỷ lệ Margin gộp dự kiến > 81%.`,
            bulletPoints: [
              `Google Trends: Chỉ số tìm kiếm duy trì tốt cho nhóm từ khóa liên quan đến '${queryName}'`,
              "Google Ads (MSV): Ước tính 85,000 - 180,000 tìm kiếm/tháng. CPC Bid: $0.65 - $1.35",
              `TikTok Creative Center: Video gắn tag '${queryName}' thu hút lượt xem giữ chân 3s tốt`,
              "Amazon Benchmark: Mức giá sàn thị trường dao động $29.99 - $45.00"
            ],
            recommendations: [
              `Kiểm tra mẫu thực tế của '${queryName}' từ 2-3 nhà cung cấp uy tín trên AliExpress/1688.`
            ]
          },
          {
            agentId: "master-ecom-seller",
            agentName: "Master E-Com Seller",
            role: "Chiến Lược Gia Kinh Doanh & Mentor",
            iconName: "Crown",
            score: 7.5,
            verdict: "EXCELLENT",
            verdictLabel: "Solid Unit Economics",
            dataConfidence: "estimated" as const,
            summary: `Mô hình Unit Economics cho '${queryName}': Giá vốn $6.50 $\\rightarrow$ Giá bán $34.99 tạo khoảng đệm Break-even CAC $28.49.`,
            bulletPoints: [
              "Break-even CAC: $28.49 giúp tài khoản quảng cáo Meta/TikTok hoạt động an toàn",
              "Positioning: Cần đóng gói thành giải pháp toàn diện thay vì bán lẻ phần cứng giá rẻ",
              "Upsell: Đóng gói Combo x2 hoặc tặng kèm phụ kiện liên quan để nâng AOV > $49"
            ],
            recommendations: [
              "Xây dựng Landing Page tập trung vào lợi ích cảm xúc thay vì tính năng kỹ thuật thuần túy."
            ]
          },
          {
            agentId: "creative-ugc-director",
            agentName: "Creative & UGC Director",
            role: "Đạo Diễn Video Kịch Bản & Hooks",
            iconName: "Video",
            score: 8.6,
            verdict: "EXCELLENT",
            verdictLabel: "Strong Visual Hook",
            dataConfidence: "estimated" as const,
            summary: `Kịch bản video cho '${queryName}': Tương phản thị giác 3s đầu tiên giúp tăng tỷ lệ xem tiếp (Hold Rate).`,
            bulletPoints: [
              `3s Hook: 'Stop using traditional products! Look at how ${queryName} changes your routine...'`,
              "Format: Vertical 9:16, 15-20s duration, chân thực phong cách UGC",
              "Visual: Quay cận cảnh hiệu quả sử dụng trực quan trong 3 giây đầu"
            ],
            recommendations: [
              "Thuê 3-5 Micro UGC Creators quay video mở hộp thực tế."
            ]
          },
          {
            agentId: "supply-chain-auditor",
            agentName: "Supply Chain Auditor",
            role: "Kiểm Toán Logistics & 3PL",
            iconName: "Truck",
            score: 8.0,
            verdict: "CONDITIONAL",
            verdictLabel: "Logistics Checked",
            dataConfidence: "estimated" as const,
            summary: `Logistics '${queryName}': Trọng lượng đóng gói ước tính < 350g, phù hợp tuyến giao hàng nhanh 8-12 ngày.`,
            bulletPoints: [
              "Phí ship Air Line ước tính: $3.50 - $4.80 tới US/EU",
              "Thời gian giao hàng: 8-12 ngày làm việc với dịch vụ YunExpress / Special Line",
              "Kiểm định: Cần xác minh nhà cung cấp có đủ chứng nhận an toàn"
            ],
            recommendations: [
              "Yêu cầu nhà cung cấp gửi ảnh đóng gói thực tế để đảm bảo không móp vỡ."
            ]
          },
          {
            agentId: "performance-media-buyer",
            agentName: "Performance Media Buyer",
            role: "Chuyên Gia Mua Quảng Cáo & Scale Ads",
            iconName: "DollarSign",
            score: 7.8,
            verdict: "EXCELLENT",
            verdictLabel: "Scalable Campaign Structure",
            dataConfidence: "estimated" as const,
            summary: `Chiến dịch Ads cho '${queryName}': Cấu trúc CBO Broad Targeting mang lại chi phí CPM tối ưu.`,
            bulletPoints: [
              "Target ROAS hòa vốn: 1.23x",
              "CBO Structure: 1 Campaign → 3 Ad Sets (Broad, Interest, Retargeting)",
              "Tỷ lệ chuyển đổi mục tiêu (CVR): > 2.0%"
            ],
            recommendations: [
              "Bắt đầu với ngân sách test $30-$50/ngày trên Meta Advantage+ Shopping."
            ]
          }
        ]
      };
    }
    return presetProduct;
  }, [customSearch, isDynamicMode, presetProduct]);

  // Overall Average Score calculation across 5 agents
  const averageScore = useMemo(() => {
    if (!activeProduct || !activeProduct.perspectives.length) return 0;
    const sum = activeProduct.perspectives.reduce((acc, curr) => acc + curr.score, 0);
    return (sum / activeProduct.perspectives.length).toFixed(2);
  }, [activeProduct]);

  // Find top strength agent & top risk agent
  const topAgent = useMemo(() => {
    if (!activeProduct?.perspectives.length) return null;
    return [...activeProduct.perspectives].sort((a, b) => b.score - a.score)[0];
  }, [activeProduct]);

  const riskAgent = useMemo(() => {
    if (!activeProduct?.perspectives.length) return null;
    return [...activeProduct.perspectives].sort((a, b) => a.score - b.score)[0];
  }, [activeProduct]);

  // Calculator State initialized from active product
  const [calcPrice, setCalcPrice] = useState<number>(activeProduct?.retailPrice || 27.99);
  const [calcCogs, setCalcCogs] = useState<number>(activeProduct?.cogs || 4.5);
  const [calcCac, setCalcCac] = useState<number>(18.0);

  // Unit Economics Calculations
  const grossProfit = calcPrice - calcCogs;
  const grossMargin = calcPrice > 0 ? ((grossProfit / calcPrice) * 100).toFixed(1) : "0";
  const contributionProfit = calcPrice - calcCogs - calcCac;
  const breakEvenCac = calcPrice - calcCogs;
  const breakEvenRoas = calcCac > 0 ? (calcPrice / calcCac).toFixed(2) : "0";

  // Handle Copy /product-lab command to trigger AI Agent
  const handleCopyCommand = () => {
    const targetName = customSearch.trim() || activeProduct.title;
    const commandText = `/product-lab ${targetName}`;
    navigator.clipboard.writeText(commandText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <ScrollArea className="h-full">
      <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
        {/* Top Navigation & Mode Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-5">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700 font-semibold text-[11px] px-2.5 py-0.5">
                Multi-Agent Product Lab
              </Badge>
              <span className="text-xs text-zinc-400 font-mono">5 Specialized AI Perspectives · Visual Matrix Engine</span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <FlaskConical className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
              Phòng Thí Nghiệm Đánh Giá Sản Phẩm Đa Góc Nhìn
            </h1>
          </div>

          {/* View Mode Switcher */}
          <div className="flex items-center gap-1 p-1 bg-zinc-100 dark:bg-zinc-800/80 rounded-lg border border-zinc-200 dark:border-zinc-700">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                viewMode === "grid"
                  ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-2xs"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>Thẻ Agent (Grid)</span>
            </button>
            <button
              onClick={() => setViewMode("matrix")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                viewMode === "matrix"
                  ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-2xs"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Ma Trận Bảng (Matrix)</span>
            </button>
            <button
              onClick={() => setViewMode("financial")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer transition-all ${
                viewMode === "financial"
                  ? "bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-2xs"
                  : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200"
              }`}
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Unit Economics</span>
            </button>
          </div>
        </div>

        {/* Product Selector, Search & Interactive AI Request Box */}
        <div className="space-y-4 p-5 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-2xs">
          <div className="flex flex-wrap justify-between items-center gap-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
              Sản Phẩm Đã Thẩm Định Hoặc Nhập Tên Sản Phẩm Mới
            </span>
            <span className="text-xs text-zinc-500 font-mono flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Nhập tên sản phẩm bất kỳ để xem giao diện trực quan
            </span>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {products.map((prod) => (
              <button
                key={prod.id}
                onClick={() => {
                  setSelectedProductId(prod.id);
                  setCustomSearch("");
                  setIsDynamicMode(false);
                  setCalcPrice(prod.retailPrice);
                  setCalcCogs(prod.cogs);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer border ${
                  selectedProductId === prod.id && !isDynamicMode
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 shadow-2xs"
                    : "bg-zinc-50 dark:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                {prod.title}
              </button>
            ))}
          </div>

          {/* Custom Search & Interactive AI Command Bar */}
          <div className="flex flex-col sm:flex-row items-stretch gap-2 pt-1">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Nhập sản phẩm mới (VD: Gối massage cổ EMS, Máy pha cà phê tự động...)"
                value={customSearch}
                onChange={(e) => {
                  setCustomSearch(e.target.value);
                  if (e.target.value.trim()) {
                    setIsDynamicMode(true);
                  } else {
                    setIsDynamicMode(false);
                  }
                }}
                className="w-full text-xs pl-9 pr-3 py-2.5 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-zinc-50 dark:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 font-medium"
              />
            </div>

            {/* AI Request Action Button */}
            <button
              onClick={handleCopyCommand}
              className="px-4 py-2.5 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all shrink-0 shadow-2xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
                  <span>Đã Copy Lệnh /product-lab!</span>
                </>
              ) : (
                <>
                  <Bot className="w-4 h-4" />
                  <span>Gửi Request Tới AI Agent (/product-lab)</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Dynamic Mode Warning Banner */}
        {isDynamicMode && (
          <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-300/60 dark:border-amber-800 text-[11px] text-amber-800 dark:text-amber-300 flex items-center gap-2">
            <Sparkles className="w-4 h-4 shrink-0 text-amber-500" />
            <span>
              <strong>DEMO PREVIEW:</strong> Các số liệu và nhận định bên dưới là mẫu dựng sẵn (template) để minh hoạ giao diện, không do AI phân tích sản phẩm "{customSearch.trim()}" thật. Bấm <strong>"Gửi Request Tới AI Agent"</strong> phía trên để chạy đánh giá thật trong chat.
            </span>
          </div>
        )}

        {/* Executive Overview Dashboard & Score Balance Meter */}
        {activeProduct && (
          <Card className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl space-y-6 shadow-2xs">
            <div className="flex flex-wrap justify-between items-start gap-4 border-b border-zinc-100 dark:border-zinc-800 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                  {activeProduct.category} {isDynamicMode && "· Demo Preview"}
                </span>
                <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                  {activeProduct.title}
                </h2>
              </div>

              {/* Overall Score Gauge */}
              <div className="flex items-center gap-4 bg-zinc-50 dark:bg-zinc-800/40 p-3 rounded-lg border border-zinc-200/60 dark:border-zinc-800">
                <div className="text-right">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Điểm Trung Bình 5 Agent</span>
                  <span className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100">{averageScore} <span className="text-xs text-zinc-400 font-normal">/ 10</span></span>
                </div>
                <div className="w-12 h-12 rounded-full border-4 border-zinc-900 dark:border-zinc-100 flex items-center justify-center font-bold font-mono text-xs text-zinc-900 dark:text-zinc-100 shadow-2xs">
                  {((parseFloat(averageScore as string) / 10) * 100).toFixed(0)}%
                </div>
              </div>
            </div>

            {/* 5-Agent Visual Score Balance Bar */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-zinc-600 dark:text-zinc-400" /> Bảng Cân Bằng Điểm Số 5 Góc Nhìn
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {activeProduct.perspectives.map((p) => {
                  const AgentIcon = ICON_MAP[p.iconName] || Target;
                  const isTop = topAgent?.agentId === p.agentId;
                  const isRisk = riskAgent?.agentId === p.agentId && p.score < 6.5;

                  return (
                    <div key={p.agentId} className={`p-3 rounded-lg border space-y-2 transition-all ${
                      isTop
                        ? "bg-emerald-500/5 border-emerald-500/30"
                        : isRisk
                        ? "bg-red-500/5 border-red-500/30"
                        : "bg-zinc-50 dark:bg-zinc-800/40 border-zinc-200/60 dark:border-zinc-800"
                    }`}>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <AgentIcon className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400" />
                          <span className="text-[11px] font-bold text-zinc-900 dark:text-zinc-100 truncate max-w-[100px]">{p.agentName.split(" ")[0]}</span>
                        </div>
                        <span className="text-xs font-bold font-mono text-zinc-900 dark:text-zinc-100">{p.score}</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full h-1.5 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            p.score >= 8.0
                              ? "bg-emerald-500"
                              : p.score >= 6.0
                              ? "bg-amber-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${(p.score / 10) * 100}%` }}
                        />
                      </div>

                      <span className="text-[9px] font-mono block text-zinc-400 truncate">
                        {p.verdictLabel}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>
        )}

        {/* Perspective Filter Tabs */}
        {activeProduct && (
          <div className="flex items-center gap-1 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveAgentTab("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer border ${
                activeAgentTab === "all"
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900"
                  : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              Tất Cả 5 Agent
            </button>
            {activeProduct.perspectives.map((p) => {
              const AgentIcon = ICON_MAP[p.iconName] || Target;
              return (
                <button
                  key={p.agentId}
                  onClick={() => setActiveAgentTab(p.agentId)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer border flex items-center gap-1.5 whitespace-nowrap ${
                    activeAgentTab === p.agentId
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900"
                      : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }`}
                >
                  <AgentIcon className="w-3.5 h-3.5" />
                  <span>{p.agentName}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* MODE 1: GRID VIEW (AGENT CARDS) */}
        {activeProduct && viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeProduct.perspectives
              .filter((p) => activeAgentTab === "all" || activeAgentTab === p.agentId)
              .map((p) => {
                const AgentIcon = ICON_MAP[p.iconName] || Target;
                return (
                  <Card
                    key={p.agentId}
                    className="p-5 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl space-y-4 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex justify-between items-start border-b border-zinc-100 dark:border-zinc-800 pb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold">
                            <AgentIcon className="w-4.5 h-4.5" />
                          </div>
                          <div>
                            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                              {p.agentName}
                            </h3>
                            <span className="text-[10px] text-zinc-500 block">{p.role}</span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <Badge
                            variant="outline"
                            className={`text-[10px] font-bold font-mono px-2 py-0.5 ${
                              p.verdict === "WINNER" || p.verdict === "EXCELLENT"
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                                : p.verdict === "HIGH_RISK"
                                ? "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20"
                                : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
                            }`}
                          >
                            {p.score} / 10 · {p.verdictLabel}
                          </Badge>
                          <span
                            className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                              p.dataConfidence === "sourced"
                                ? "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10"
                                : "text-zinc-500 bg-zinc-100 dark:bg-zinc-800"
                            }`}
                          >
                            {p.dataConfidence === "sourced" ? "✓ Nguồn thật" : "~ Ước tính AI"}
                          </span>
                        </div>
                      </div>

                      {/* Visual Score Progress Meter */}
                      <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            p.score >= 8.0 ? "bg-emerald-500" : p.score >= 6.0 ? "bg-amber-500" : "bg-red-500"
                          }`}
                          style={{ width: `${(p.score / 10) * 100}%` }}
                        />
                      </div>

                      {/* Summary */}
                      <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                        {p.summary}
                      </p>

                      {/* Bullet Points */}
                      <div className="space-y-1.5 pt-1">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                          Phân Tích Chi Tiết
                        </span>
                        {p.bulletPoints.map((bp, idx) => (
                          <div key={idx} className="text-[11px] text-zinc-600 dark:text-zinc-400 flex items-start gap-1.5 leading-snug">
                            <span className="text-zinc-400 font-bold">•</span>
                            <span>{bp}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Recommendations */}
                    <div className="p-3 bg-zinc-50 dark:bg-zinc-800/40 rounded-lg border border-zinc-200/50 dark:border-zinc-800 space-y-1.5 mt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1">
                        <Zap className="w-3 h-3 text-amber-500" /> Khuyến Nghị Hành Động
                      </span>
                      {p.recommendations.map((rec, idx) => (
                        <p key={idx} className="text-[11px] text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                          → {rec}
                        </p>
                      ))}
                    </div>
                  </Card>
                );
              })}
          </div>
        )}

        {/* MODE 2: EXECUTIVE COMPARISON MATRIX TABLE */}
        {activeProduct && viewMode === "matrix" && (
          <Card className="p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl space-y-4 shadow-2xs overflow-x-auto">
            <div className="flex justify-between items-center border-b border-zinc-100 dark:border-zinc-800 pb-3">
              <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Table className="w-4 h-4 text-zinc-600 dark:text-zinc-400" /> Bảng Ma Trận So Sánh Trực Quan 5 Agent
              </h3>
              <span className="text-xs text-zinc-500 font-mono">Executive Comparison Matrix</span>
            </div>

            <table className="w-full text-left text-xs font-sans border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/40 text-zinc-500 text-[10px] font-bold uppercase tracking-wider">
                  <th className="p-3">Agent</th>
                  <th className="p-3">Điểm số</th>
                  <th className="p-3">Đánh giá (Verdict)</th>
                  <th className="p-3">Tóm tắt góc nhìn</th>
                  <th className="p-3">Khuyến nghị trọng tâm</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
                {activeProduct.perspectives.map((p) => {
                  const AgentIcon = ICON_MAP[p.iconName] || Target;
                  return (
                    <tr key={p.agentId} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/20">
                      <td className="p-3 font-semibold text-zinc-900 dark:text-zinc-100 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <AgentIcon className="w-4 h-4 text-zinc-500" />
                          <span>{p.agentName}</span>
                        </div>
                      </td>
                      <td className="p-3 font-mono font-bold">{p.score} / 10</td>
                      <td className="p-3 whitespace-nowrap">
                        <Badge
                          variant="outline"
                          className={`text-[10px] font-bold font-mono ${
                            p.verdict === "WINNER" || p.verdict === "EXCELLENT"
                              ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                              : p.verdict === "HIGH_RISK"
                              ? "bg-red-500/10 text-red-600 border-red-500/20"
                              : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                          }`}
                        >
                          {p.verdictLabel}
                        </Badge>
                      </td>
                      <td className="p-3 max-w-xs leading-relaxed">{p.summary}</td>
                      <td className="p-3 max-w-xs leading-relaxed text-zinc-600 dark:text-zinc-400">
                        {p.recommendations[0]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        )}

        {/* MODE 3 OR BOTTOM: LIVE UNIT ECONOMICS SIMULATOR */}
        {(viewMode === "financial" || viewMode === "grid") && (
          <Card className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl space-y-5 shadow-2xs">
            <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-3">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
                <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                  Mô Phỏng Unit Economics & Điểm Hòa Vốn (Interactive Simulator)
                </h3>
              </div>
              <span className="text-xs text-zinc-500 font-mono">Real-time Margin Calculator</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Input Controls */}
              <div className="space-y-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                  Thông Số Đầu Vào
                </span>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400 flex justify-between">
                    <span>Giá bán lẻ (Retail Price):</span>
                    <span className="font-bold font-mono text-zinc-900 dark:text-zinc-100">${calcPrice}</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    step="1"
                    value={calcPrice}
                    onChange={(e) => setCalcPrice(parseFloat(e.target.value))}
                    className="w-full text-zinc-900 accent-zinc-900 cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400 flex justify-between">
                    <span>Giá vốn COGS + Ship:</span>
                    <span className="font-bold font-mono text-zinc-900 dark:text-zinc-100">${calcCogs}</span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="0.5"
                    value={calcCogs}
                    onChange={(e) => setCalcCogs(parseFloat(e.target.value))}
                    className="w-full accent-zinc-900 cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-zinc-600 dark:text-zinc-400 flex justify-between">
                    <span>Chi phí mua 1 khách (Ad CAC):</span>
                    <span className="font-bold font-mono text-zinc-900 dark:text-zinc-100">${calcCac}</span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="1"
                    value={calcCac}
                    onChange={(e) => setCalcCac(parseFloat(e.target.value))}
                    className="w-full accent-zinc-900 cursor-pointer"
                  />
                </div>
              </div>

              {/* Calculated Metrics Display */}
              <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-3 bg-zinc-50 dark:bg-zinc-800/40 p-4 rounded-xl border border-zinc-200/60 dark:border-zinc-800 items-center">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Lợi Nhuận Gộp</span>
                  <span className="text-lg font-bold font-mono text-zinc-900 dark:text-zinc-100">${grossProfit.toFixed(2)}</span>
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 block font-semibold">{grossMargin}% Margin</span>
                </div>

                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Break-Even CAC</span>
                  <span className="text-lg font-bold font-mono text-zinc-900 dark:text-zinc-100">${breakEvenCac.toFixed(2)}</span>
                  <span className="text-[10px] text-zinc-500 block">Tối đa chi trả ads</span>
                </div>

                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Lãi Ròng (Per Unit)</span>
                  <span className={`text-lg font-bold font-mono ${contributionProfit >= 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}>
                    ${contributionProfit.toFixed(2)}
                  </span>
                  <span className="text-[10px] text-zinc-500 block">{contributionProfit >= 0 ? "Có lời" : "Lỗ trên đơn"}</span>
                </div>

                <div className="space-y-0.5">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Target ROAS</span>
                  <span className="text-lg font-bold font-mono text-zinc-900 dark:text-zinc-100">{breakEvenRoas}x</span>
                  <span className="text-[10px] text-zinc-500 block">ROAS cần đạt</span>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    </ScrollArea>
  );
}
