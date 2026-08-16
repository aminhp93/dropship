import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MarketResearchTool } from "@/features/dropshipping/components/MarketResearchTool";
import { NGO_THANH_STEPS } from "@/features/dropshipping/components/QuyTrinh2026Tab";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/dropship/quy-trinh-2026/")({
  component: QuyTrinh2026MainPage,
});

export function QuyTrinh2026MainPage() {
  return (
    <ScrollArea className="h-full">
      <div className="p-8 max-w-7xl mx-auto space-y-10">
        {/* Header */}
        <div className="space-y-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Badge className="bg-purple-600 text-white font-bold text-[10px]">
              Ecom Blueprint 2026
            </Badge>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-500" />
            Quy Trình 3 Bước Vận Hành Dropshipping 2026
          </h1>
          <p className="text-xs text-zinc-500 max-w-3xl leading-relaxed">
            Hệ thống 3 bước chuẩn hóa từ tư duy chọn ngách, kỹ thuật săn sản phẩm WIN định lượng đến vận hành Shopify Store & TikTok Organic Traffic. Click vào từng bước để xem hướng dẫn chi tiết.
          </p>
        </div>

        {/* 3 Main Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NGO_THANH_STEPS.map((stepItem) => {
            const stepSlug = `${stepItem.id}-${stepItem.shortTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

            return (
              <Card
                key={stepItem.id}
                className="p-6 border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl space-y-5 shadow-xs hover:border-purple-500/50 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className={`font-bold text-[10px] ${stepItem.badgeColor}`}>
                      {stepItem.step}
                    </Badge>
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${stepItem.color} text-white flex items-center justify-center shadow-xs`}>
                      <stepItem.icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                      {stepItem.slideTitle}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">
                      {stepItem.summary}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/80">
                    {stepItem.metrics.map((m, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[11px]">
                        <span className="text-zinc-400 font-medium">{m.label}:</span>
                        <span className="font-bold text-purple-600 dark:text-purple-400 font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/dropship/quy-trinh-2026/$stepSlug"
                  params={{ stepSlug }}
                  className="w-full py-2.5 px-4 bg-purple-600/10 hover:bg-purple-600 text-purple-600 hover:text-white dark:text-purple-400 dark:hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 group-hover:shadow-md"
                >
                  <span>Xem Chi Tiết Quy Trình</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Card>
            );
          })}
        </div>

        {/* Interactive Market Research Tool */}
        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
          <MarketResearchTool />
        </div>
      </div>
    </ScrollArea>
  );
}
