import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MarketResearchTool } from "@/features/dropshipping/components/MarketResearchTool";
import { NGO_THANH_STEPS } from "@/features/dropshipping/components/QuyTrinh2026Tab";
import { ArrowLeft, Sparkles, ExternalLink, Search } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Route = createFileRoute("/dropship/quy-trinh-2026/$stepSlug")({
  component: QuyTrinh2026DetailPage,
});

export function QuyTrinh2026DetailPage() {
  const { stepSlug } = Route.useParams();
  const [isToolOpen, setIsToolOpen] = useState(false);

  // Find step by matching stepSlug or step id (e.g. buoc-1, buoc-2, buoc-3)
  const currentStep = NGO_THANH_STEPS.find((s) => {
    const slug = `${s.id}-${s.shortTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
    return slug === stepSlug || s.id === stepSlug || stepSlug.startsWith(s.id);
  }) || NGO_THANH_STEPS[0];

  const isStep2 = currentStep.id === "buoc-2";

  return (
    <ScrollArea className="h-full">
      <div className="p-8 max-w-5xl mx-auto space-y-6">
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

        {/* STEP 2 SPECIAL FEATURE: Top Action Button for Market Research & Ads Spy Tool */}
        {isStep2 && (
          <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 p-4 rounded-2xl shadow-md flex flex-col sm:flex-row items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30">
                <Search className="w-5 h-5 text-amber-300" />
              </div>
              <div>
                <h3 className="font-black text-sm sm:text-base flex items-center gap-2">
                  Bộ Công Cụ Tra Cứu Thị Trường & Ads Spy
                  <Badge className="bg-amber-400 text-purple-950 font-mono text-[10px] font-bold">
                    Interactive Tool
                  </Badge>
                </h3>
                <p className="text-xs text-purple-100/90">
                  Tra cứu trực tiếp sản phẩm WIN trên TikTok, Meta Ads Library, Pinterest & AliExpress
                </p>
              </div>
            </div>

            <Button
              onClick={() => setIsToolOpen(true)}
              className="bg-amber-400 hover:bg-amber-300 text-purple-950 font-black text-xs px-5 py-2.5 rounded-xl shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-purple-900 animate-pulse" />
              🔥 MỞ BỘ CÔNG CỤ TRA CỨU THỊ TRƯỜNG
            </Button>
          </div>
        )}

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

        {/* Dialog Modal for Market Research Tool */}
        {isStep2 && (
          <Dialog open={isToolOpen} onOpenChange={setIsToolOpen}>
            <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-2xl">
              <DialogHeader className="border-b border-zinc-100 dark:border-zinc-800 pb-4">
                <DialogTitle className="flex items-center gap-3 text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shrink-0">
                    <Search className="w-5 h-5 text-amber-300" />
                  </div>
                  <div>
                    <span className="flex items-center gap-2">
                      Bộ Công Cụ Tra Cứu Thị Trường & Ads Spy
                      <Badge className="bg-purple-600 text-white text-[10px] font-mono">
                        Live Spy
                      </Badge>
                    </span>
                    <span className="block text-xs font-normal text-zinc-500 dark:text-zinc-400 mt-0.5">
                      Tra cứu trực tiếp từ các nền tảng TikTok, Meta Ads, Pinterest và AliExpress
                    </span>
                  </div>
                </DialogTitle>
              </DialogHeader>

              <div className="pt-4">
                <MarketResearchTool />
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </ScrollArea>
  );
}
