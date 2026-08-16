import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MarketResearchTool } from "@/features/dropshipping/components/MarketResearchTool";
import { NGO_THANH_STEPS } from "@/features/dropshipping/components/QuyTrinh2026Tab";
import { ArrowLeft, Sparkles } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Route = createFileRoute("/dropship/quy-trinh-2026/$stepSlug")({
  component: QuyTrinh2026DetailPage,
});

export function QuyTrinh2026DetailPage() {
  const { stepSlug } = Route.useParams();

  // Find step by matching stepSlug or step id (e.g. buoc-1, buoc-2, buoc-3)
  const currentStep = NGO_THANH_STEPS.find((s) => {
    const slug = `${s.id}-${s.shortTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
    return slug === stepSlug || s.id === stepSlug || stepSlug.startsWith(s.id);
  }) || NGO_THANH_STEPS[0];

  const isStep2 = currentStep.id === "buoc-2";

  return (
    <ScrollArea className="h-full">
      <div className="p-8 max-w-5xl mx-auto space-y-8">
        {/* Navigation & Header */}
        <div className="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <Link
            to="/dropship/quy-trinh-2026"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại danh sách 3 bước Quy Trình 2026
          </Link>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className={`font-bold text-[10px] ${currentStep.badgeColor}`}>
                  {currentStep.step}
                </Badge>
                <Badge className="bg-purple-600 text-white font-bold text-[10px]">
                  Ecom Blueprint 2026 Detail
                </Badge>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-500" />
                {currentStep.slideTitle}
              </h1>
            </div>
          </div>
        </div>

        {/* Detail Content Card */}
        <Card className="p-8 border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl space-y-6 shadow-sm">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-zinc-50 dark:bg-zinc-800/60 rounded-xl border border-zinc-100 dark:border-zinc-800">
            {currentStep.metrics.map((m, idx) => (
              <div key={idx} className="text-center space-y-0.5">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  {m.label}
                </span>
                <span className="text-sm font-bold text-purple-600 dark:text-purple-400 font-mono">
                  {m.value}
                </span>
              </div>
            ))}
          </div>

          {/* Markdown Body */}
          <div className="prose dark:prose-invert max-w-none text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans pt-2">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {currentStep.markdown}
            </ReactMarkdown>
          </div>
        </Card>

        {/* Embedded Market Research & Ads Spy Tool specifically inside Step 2 */}
        {isStep2 && (
          <div className="space-y-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="space-y-1">
              <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                Bộ Công Cụ Tra Cứu Thị Trường & Ads Spy Trực Tiếp
              </h2>
              <p className="text-xs text-zinc-500">
                Sử dụng các công cụ tra cứu tích hợp sẵn dưới đây để thực hành săn sản phẩm WIN trên TikTok, Meta, Pinterest và AliExpress.
              </p>
            </div>
            <MarketResearchTool />
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
