import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NGO_THANH_STEPS } from "@/features/dropshipping/components/QuyTrinh2026Tab";
import { ArrowRight, Layers } from "lucide-react";

export const Route = createFileRoute("/dropship/quy-trinh-2026/")({
  component: QuyTrinh2026MainPage,
});

export function QuyTrinh2026MainPage() {
  return (
    <ScrollArea className="h-full">
      <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-3 border-b border-zinc-200 dark:border-zinc-800 pb-5">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700 font-semibold text-[11px] px-2.5 py-0.5">
              Ecom Blueprint 2026
            </Badge>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <Layers className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
            Quy Trình 3 Bước Vận Hành Dropshipping 2026
          </h1>
          <p className="text-xs text-zinc-500 max-w-2xl leading-relaxed">
            Hệ thống 3 bước chuẩn hóa từ chọn ngách, kỹ thuật săn sản phẩm WIN định lượng đến vận hành Shopify Store & TikTok Organic Traffic.
          </p>
        </div>

        {/* 3 Main Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NGO_THANH_STEPS.map((stepItem) => {
            const stepSlug = `${stepItem.id}-${stepItem.shortTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;

            return (
              <Card
                key={stepItem.id}
                className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl space-y-5 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 border-zinc-200 dark:border-zinc-800">
                      {stepItem.step}
                    </Badge>
                    <div className="w-8 h-8 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold">
                      <stepItem.icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                      {stepItem.slideTitle}
                    </h3>
                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">
                      {stepItem.summary}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    {stepItem.metrics.map((m, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[11px]">
                        <span className="text-zinc-500">{m.label}:</span>
                        <span className="font-semibold text-zinc-900 dark:text-zinc-100 font-mono">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/dropship/quy-trinh-2026/$stepSlug"
                  params={{ stepSlug }}
                  className="w-full py-2 px-3 bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:hover:bg-zinc-200 dark:text-zinc-900 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-2xs"
                >
                  <span>Xem Chi Tiết Quy Trình</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </ScrollArea>
  );
}
