import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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

function MarketResearchProgressOverview() {
  return (
    <Card className="p-5 sm:p-6 border-zinc-200 dark:border-zinc-800 space-y-5">
      {/* Header Title + Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200/60 dark:border-zinc-800/80 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
              Nghiên Cứu Thị Trường (Market Research)
            </h2>
            <Badge variant="outline" className="text-[10px] font-bold border-emerald-500/40 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10">
              <CheckCircle2 className="w-3 h-3 mr-1 text-emerald-500" />
              HOÀN THÀNH · ĐÃ CHỐT SẢN PHẨM
            </Badge>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            SOP Bước 2: Quét 5 ngách thị trường tiềm năng, lọc bỏ thương hiệu nội địa và xu hướng ngắn hạn.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <Badge className="text-[11px] h-6 px-2.5 bg-emerald-600 text-white font-bold border-0">
            Tiến độ: 100% (5/5 Ngách)
          </Badge>
        </div>
      </div>

      {/* 4 Summary Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 flex items-center justify-between">
            <span>Ngách đã quét</span>
            <FolderKanban className="w-3.5 h-3.5 text-zinc-400" />
          </div>
          <div className="text-xl font-bold font-mono text-zinc-900 dark:text-white">
            5 / 5 <span className="text-xs font-normal text-zinc-400">Ngách</span>
          </div>
          <div className="text-[10px] text-zinc-500 font-mono">Shopify Niches Seed</div>
        </div>

        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 flex items-center justify-between">
            <span>Live Data Check</span>
            <Search className="w-3.5 h-3.5 text-blue-500" />
          </div>
          <div className="text-xl font-bold font-mono text-blue-600 dark:text-blue-400">
            4 <span className="text-xs font-normal text-zinc-400">Nguồn</span>
          </div>
          <div className="text-[10px] text-zinc-500 font-mono">Trends · TikTok · Ads · Shop</div>
        </div>

        <div className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/5 space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 flex items-center justify-between">
            <span>Ngách Đứng Đầu</span>
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
          </div>
          <div className="text-sm font-bold text-emerald-800 dark:text-emerald-200 truncate">
            Home & Bedroom
          </div>
          <div className="text-[10px] text-emerald-600/80 dark:text-emerald-400/80 font-mono">Rank #1 suitability</div>
        </div>

        <div className="p-3.5 rounded-xl border border-emerald-500/40 bg-emerald-600/10 space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 flex items-center justify-between">
            <span>Sản Phẩm Đã Chốt</span>
            <Target className="w-3.5 h-3.5 text-emerald-600" />
          </div>
          <div className="text-sm font-extrabold text-emerald-900 dark:text-emerald-100 truncate">
            Đèn Macrame / Boho
          </div>
          <div className="text-[10px] text-emerald-700 dark:text-emerald-300 font-mono">Chốt ngày 23/08/2026</div>
        </div>
      </div>

      {/* WINNER HIGHLIGHT BANNER */}
      <div className="p-4 rounded-xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent text-xs leading-relaxed space-y-1.5">
        <div className="flex items-center gap-2 font-bold text-emerald-900 dark:text-emerald-200">
          <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>Sản phẩm đắc cử: Đèn Dây Macrame / Boho Decor</span>
        </div>
        <p className="text-zinc-600 dark:text-zinc-400 text-[11px] leading-normal">
          Thoả mãn 100% tiêu chí SOP 2026: Markup &gt;= 3.5x ($18-$25 price tag vs $4.5 landed cost), nhỏ gọn nhẹ không hỏng vỡ, không bị khống chế bởi Personal Brand Equity, nhu cầu quanh năm và cực kỳ dễ sản xuất video organic TikTok 2-3 clip/ngày.
        </p>
      </div>
    </Card>
  );
}

function MarkdownCard({ tabId }: { tabId: string }) {
  const tab = getTab(tabId);
  if (!tab) return null;
  return (
    <Card className="p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl shadow-2xs">
      <p className="text-[10px] font-mono text-zinc-400 mb-4">{tab.sourcePath}</p>
      <div className="prose dark:prose-invert max-w-none text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ node, ...props }) => (
              <a {...props} target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-700 font-medium" />
            ),
          }}
        >
          {tab.markdown}
        </ReactMarkdown>
      </div>
    </Card>
  );
}

export function MarketResearchTabRoute() {
  const [showNiches, setShowNiches] = useState(false);
  const [showDoc, setShowDoc] = useState(false);

  const getViteFsUrl = (fullPath: string) => {
    return `/@fs${fullPath}`;
  };

  const getVsCodeUrl = (fullPath: string) => {
    return `vscode://file${fullPath}`;
  };

  return (
    <div className="space-y-6">
      {/* High-level Progress Overview */}
      <MarketResearchProgressOverview />

      {/* Detail Section 1: Collapsible Niche Files List */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowNiches((v) => !v)}
            className="h-9 px-4 text-xs font-bold border-zinc-300 dark:border-zinc-700 cursor-pointer"
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

      {/* Detail Section 2: Collapsible Markdown SOP Document */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowDoc((v) => !v)}
            className="h-9 px-4 text-xs font-bold border-zinc-300 dark:border-zinc-700 cursor-pointer"
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
            <MarkdownCard tabId="market-research" />
          </div>
        )}
      </div>
    </div>
  );
}
