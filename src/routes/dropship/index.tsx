import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SOP_DATA } from "@/features/dropshipping/data/sop-data";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Route = createFileRoute("/dropship/")({
  component: OverviewPage,
});

export function OverviewPage() {
  const versionData = SOP_DATA["2026"];

  return (
    <ScrollArea className="h-full">
      <div className="p-8 max-w-7xl mx-auto space-y-8">
        <div className="space-y-2 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div className="flex items-center gap-2">
            <Badge className="bg-purple-600 text-white font-bold text-[10px]">
              Overview Standard
            </Badge>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Tổng Quan Hệ Thống Dropshipping 2026
          </h1>
          <p className="text-xs text-zinc-500">
            Khái quát 5 trụ cột nền tảng từ mô hình kinh doanh, tư duy sản phẩm, chuẩn bị tài nguyên đến định hướng tăng trưởng.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {versionData.creation.slice(0, 5).map((phase, idx) => (
            <Card key={idx} className="p-6 border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl space-y-4 shadow-xs hover:border-purple-500/30 transition-all">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${phase.color}`}>
                  <phase.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">
                    {phase.step}
                  </span>
                  <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-100">
                    {phase.title}
                  </h3>
                </div>
              </div>
              <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans line-clamp-6">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {phase.content}
                </ReactMarkdown>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}
