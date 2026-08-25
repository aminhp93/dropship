import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HOME_PROGRESS_TABS } from "@/features/dropshipping/data/home-progress-data";

export const Route = createFileRoute("/dropship/progress/1-market-research")({
  component: MarketResearchTabRoute,
});

const getTab = (id: string) => HOME_PROGRESS_TABS.find((t) => t.id === id);

const MARKET_RESEARCH_NICHES = [
  {
    num: 0,
    title: "Dropshipping niche 2026 (tổng quan)",
    status: "reference",
    path: "workspace/market-research/0-Dropshipping niche 2026.gdoc",
    note: "Seed list từ Shopify dropshipping-niches blog.",
  },
  {
    num: 1,
    title: "Car Accessories",
    status: "done",
    path: "workspace/market-research/1-car-accessories-niche-report.docx",
    note: "Top 10/20 sản phẩm, mỗi sản phẩm check live 4 nguồn (Trends/Shopping/TikTok/Meta Ads).",
  },
  {
    num: 2,
    title: "Sustainability",
    status: "done",
    path: "workspace/market-research/2-sustainability-niche-report.docx",
  },
  {
    num: 3,
    title: "Kitchen and Dining",
    status: "done",
    path: "workspace/market-research/3-Kitchen and dining.gdoc",
  },
  {
    num: 4,
    title: "Home and Bedroom",
    status: "done-decided",
    path: "workspace/market-research/4-Home and bedroom.gdoc",
    note: "Đã CHỐT sản phẩm thật: đèn dây macrame/boho (2026-08-23). Data đầy đủ: src/features/dropshipping/data/market-research-runs.json",
  },
  {
    num: 5,
    title: "Child and Baby",
    status: "done",
    path: "workspace/market-research/5-Child and baby.html",
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

function MarkdownCard({ tabId }: { tabId: string }) {
  const tab = getTab(tabId);
  if (!tab) return null;
  return (
    <Card className="p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl shadow-2xs">
      <p className="text-[10px] font-mono text-zinc-400 mb-4">{tab.sourcePath}</p>
      <div className="prose dark:prose-invert max-w-none text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{tab.markdown}</ReactMarkdown>
      </div>
    </Card>
  );
}

export function MarketResearchTabRoute() {
  return (
    <div className="space-y-6">
      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-3">
        <h3 className="text-xs font-bold uppercase text-zinc-500">
          5 ngách đã research (seed từ Shopify dropshipping-niches blog)
        </h3>
        <div className="space-y-2">
          {MARKET_RESEARCH_NICHES.map((n) => (
            <div
              key={n.num}
              className="flex items-start gap-3 p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800"
            >
              <span className="text-xs font-mono text-zinc-400 w-4 shrink-0 pt-0.5">
                {n.num}
              </span>
              <div className="flex-1">
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
                <p className="text-[11px] font-mono text-zinc-400 mt-0.5">{n.path}</p>
                {n.note && (
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">{n.note}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Card>
      <MarkdownCard tabId="market-research" />
    </div>
  );
}
