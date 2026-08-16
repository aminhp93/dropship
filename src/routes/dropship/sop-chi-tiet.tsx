import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SOP_DATA } from "@/features/dropshipping/data/sop-data";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Route = createFileRoute("/dropship/sop-chi-tiet")({
  component: SopChiTietPage,
});

export function SopChiTietPage() {
  const versionData = SOP_DATA["2026"];
  const allPhases = [
    ...versionData.creation,
    ...versionData.marketing,
    ...versionData.operations,
  ];

  const [activePhaseIndex, setActivePhaseIndex] = useState(5);
  const currentPhase = allPhases[activePhaseIndex] || allPhases[5];

  return (
    <ScrollArea className="h-full">
      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 p-3 space-y-1.5 shadow-xs">
              <div className="px-3 py-2 border-b border-zinc-100 dark:border-zinc-800 mb-1 flex justify-between items-center">
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                  Các bước quy trình
                </span>
                <span className="text-[9px] font-bold text-purple-500 bg-purple-500/5 px-2 py-0.5 rounded-full border border-purple-500/10">
                  7 Bước
                </span>
              </div>
              <div className="space-y-1 max-h-[550px] overflow-y-auto pr-1">
                {allPhases.slice(5).map((phase, idx) => {
                  const actualIdx = idx + 5;
                  const isActive = activePhaseIndex === actualIdx;

                  return (
                    <button
                      key={actualIdx}
                      onClick={() => setActivePhaseIndex(actualIdx)}
                      className={cn(
                        "w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between border cursor-pointer",
                        isActive
                          ? "bg-purple-500 border-purple-500 text-white shadow-md shadow-purple-500/10 font-semibold"
                          : "border-transparent text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
                      )}
                    >
                      <div className="space-y-0.5">
                        <span className={cn("text-[8px] font-extrabold uppercase tracking-widest block", isActive ? "text-purple-200" : "text-zinc-400")}>
                          {phase.step}
                        </span>
                        <span className="text-xs font-semibold block truncate">
                          {phase.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <Card className="p-8 border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs space-y-6 rounded-2xl">
              <div className="flex items-center gap-3.5 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                <div className={cn("w-12 h-12 rounded-xl border flex items-center justify-center shadow-xs", currentPhase.color)}>
                  <currentPhase.icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">
                    {currentPhase.step}
                  </span>
                  <h3 className="font-bold text-lg text-zinc-800 dark:text-zinc-100">
                    {currentPhase.title}
                  </h3>
                </div>
              </div>

              <div className="prose dark:prose-invert max-w-none text-sm text-zinc-600 dark:text-zinc-300 pt-2 leading-relaxed">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {currentPhase.content}
                </ReactMarkdown>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
