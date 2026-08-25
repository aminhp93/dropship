import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NGO_THANH_STEPS } from "@/features/dropshipping/components/QuyTrinh2026Tab";
import { ArrowLeft } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Route = createFileRoute("/dropship/doc/quy-trinh-2026/$stepSlug")({
  component: QuyTrinh2026DetailPage,
});

export function QuyTrinh2026DetailPage() {
  const { stepSlug } = Route.useParams();

  // Find step by matching stepSlug or step id (e.g. buoc-1, buoc-2, buoc-3)
  const currentStep = NGO_THANH_STEPS.find((s) => {
    const slug = `${s.id}-${s.shortTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
    return slug === stepSlug || s.id === stepSlug || stepSlug.startsWith(s.id);
  }) || NGO_THANH_STEPS[0];

  return (
    <ScrollArea className="h-full">
      <div className="p-8 max-w-5xl mx-auto space-y-6">
        {/* Navigation & Header */}
        <div className="space-y-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <Link
            to="/dropship/doc/quy-trinh-2026"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại danh sách 3 bước Quy Trình 2026
          </Link>

          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="font-bold text-[10px] text-zinc-600 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800">
                {currentStep.step}
              </Badge>
              <Badge variant="outline" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700 font-bold text-[10px]">
                Ecom Blueprint 2026 Detail
              </Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {currentStep.slideTitle}
            </h1>
          </div>
        </div>

        {/* Detail Content Card */}
        <Card className="p-8 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl space-y-6 shadow-2xs">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-zinc-50 dark:bg-zinc-800/40 rounded-lg border border-zinc-100 dark:border-zinc-800">
            {currentStep.metrics.map((m, idx) => (
              <div key={idx} className="text-center space-y-0.5">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                  {m.label}
                </span>
                <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-mono">
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

        {/* Cross-link to the live working pages, not embedded tools */}
        <Card className="p-5 border-purple-500/20 bg-purple-500/5 rounded-xl">
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Đây là nội dung buổi học gốc — muốn thực hành các bước với sự hỗ
            trợ của agent, xem{" "}
            <Link
              to="/dropship/doc/ai-agent"
              className="text-purple-500 font-semibold hover:underline"
            >
              Quy trình các bước + Agent hỗ trợ
            </Link>
            .
          </p>
        </Card>
      </div>
    </ScrollArea>
  );
}
