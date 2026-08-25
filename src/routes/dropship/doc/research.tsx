import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  Target,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import { useMarketResearchRuns } from "@/features/dropshipping/hooks/useMarketResearchRuns";
import { useResearchConfig } from "@/features/dropshipping/hooks/useResearchConfig";
import { useCopyToClaude } from "@/features/dropshipping/hooks/useLocalStorageBackedState";
import { ResearchConfigPanel } from "@/features/dropshipping/components/ResearchConfigPanel";
import { MarketResearchTool } from "@/features/dropshipping/components/MarketResearchTool";

export const Route = createFileRoute("/dropship/doc/research")({
  component: MarketResearchPage,
});

export function MarketResearchPage() {
  const { runs, addRun, nextVersionFor, exportJSON, isDirty } =
    useMarketResearchRuns();
  const {
    config,
    update: updateConfig,
    resetToDefault,
    exportJSON: exportConfigJSON,
    isDirty: isConfigDirty,
  } = useResearchConfig();
  const { copied, copy: handleCopy } = useCopyToClaude(
    () =>
      `Cập nhật lại src/features/dropshipping/data/market-research-runs.json theo đúng nội dung JSON sau — đây là toàn bộ dữ liệu research hiện có trên web (bao gồm run mới mình vừa lưu):\n\n${exportJSON()}`,
  );

  const niches = useMemo(
    () => Array.from(new Set(runs.map((r) => r.niche))),
    [runs],
  );
  const [activeNiche, setActiveNiche] = useState(niches[0]);
  const nicheRuns = useMemo(
    () =>
      runs
        .filter((r) => r.niche === activeNiche)
        .sort((a, b) => b.version - a.version),
    [runs, activeNiche],
  );
  const [activeVersionId, setActiveVersionId] = useState(nicheRuns[0]?.id);
  const activeRun =
    nicheRuns.find((r) => r.id === activeVersionId) ?? nicheRuns[0];

  return (
    <ScrollArea className="h-full">
      <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-8">
        <div className="space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-bold uppercase tracking-wider">
              <Target className="w-3.5 h-3.5" />
              Báo cáo cuối — market-research-hunter
            </div>
            {isDirty && (
              <Button
                size="sm"
                onClick={handleCopy}
                className="text-xs h-8 bg-purple-600 hover:bg-purple-500 text-white"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 mr-1.5" />
                ) : (
                  <Copy className="w-3.5 h-3.5 mr-1.5" />
                )}
                {copied ? "Đã copy!" : "Copy JSON để đồng bộ với Claude"}
              </Button>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Market Research
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Đây là bước cuối trong vòng lặp: sau khi đã ghi nhận nguồn ở{" "}
            <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
              Bài 2
            </code>{" "}
            và phân tích trên Claude, kết quả lưu lại đây theo version để so
            sánh cải thiện qua từng lần.
          </p>
        </div>

        <ResearchConfigPanel
          config={config}
          update={updateConfig}
          resetToDefault={resetToDefault}
          exportJSON={exportConfigJSON}
          isDirty={isConfigDirty}
        />

        <div className="space-y-2">
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <Target className="w-4 h-4 text-purple-500" />
            Ghi nhận ứng viên mới
          </h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Mở nguồn, ghi lại link/số tìm được, copy prompt sang Claude phân
            tích, rồi lưu thành 1 báo cáo — sẽ xuất hiện ngay bên dưới.
          </p>
          <MarketResearchTool
            config={config}
            addRun={addRun}
            nextVersionFor={nextVersionFor}
            onSaved={(run) => {
              setActiveNiche(run.niche);
              setActiveVersionId(run.id);
            }}
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap pt-4 border-t border-zinc-200 dark:border-zinc-800">
          {niches.map((n) => (
            <button
              key={n}
              onClick={() => {
                setActiveNiche(n);
                const firstOfNiche = runs
                  .filter((r) => r.niche === n)
                  .sort((a, b) => b.version - a.version)[0];
                setActiveVersionId(firstOfNiche?.id);
              }}
              className={cn(
                "px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all",
                activeNiche === n
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200",
              )}
            >
              {n}
            </button>
          ))}
        </div>

        {nicheRuns.length > 1 && (
          <div className="flex items-center gap-2">
            <span className="text-xs text-zinc-500 dark:text-zinc-400">
              Version:
            </span>
            {nicheRuns.map((r) => (
              <button
                key={r.id}
                onClick={() => setActiveVersionId(r.id)}
                className={cn(
                  "px-2.5 py-1 rounded-md text-xs font-mono border transition-all",
                  activeRun?.id === r.id
                    ? "border-purple-500 text-purple-500 bg-purple-500/5"
                    : "border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-zinc-400",
                )}
              >
                v{r.version}
              </button>
            ))}
          </div>
        )}

        {activeRun && (
          <div className="space-y-6">
            <Card className="p-4 bg-zinc-50 dark:bg-zinc-900/60 border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {activeRun.date} — v{activeRun.version}
                </span>
              </div>
              <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-1">
                {activeRun.changeNote}
              </p>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeRun.candidates.map((c, idx) => (
                <Card
                  key={idx}
                  className={cn(
                    "p-5 space-y-3 border",
                    c.status === "shortlisted"
                      ? "border-emerald-500/30 bg-emerald-500/5"
                      : "border-red-500/20 bg-red-500/5 opacity-80",
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-white leading-snug">
                      {c.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] font-bold uppercase whitespace-nowrap shrink-0",
                        c.status === "shortlisted"
                          ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                          : "bg-red-500/10 text-red-600 border-red-500/20",
                      )}
                    >
                      {c.status === "shortlisted" ? "Shortlisted" : "Rejected"}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div>
                      <span className="text-zinc-400 block">COGS</span>
                      <span className="font-mono text-zinc-700 dark:text-zinc-300">
                        {c.cogs ?? "—"}
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-400 block">Giá bán</span>
                      <span className="font-mono text-zinc-700 dark:text-zinc-300">
                        {c.retailPrice ?? "—"}
                      </span>
                    </div>
                    <div>
                      <span className="text-zinc-400 block">Margin</span>
                      <span className="font-mono text-zinc-700 dark:text-zinc-300">
                        {c.margin ?? "—"}
                      </span>
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-[9px] uppercase text-zinc-400 border-zinc-300 dark:border-zinc-700"
                  >
                    dataConfidence: {c.dataConfidence}
                  </Badge>

                  <div className="space-y-1.5 text-xs">
                    <p className="text-zinc-600 dark:text-zinc-400">
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                        Điểm mạnh:{" "}
                      </span>
                      {c.strengths}
                    </p>
                    <p className="text-amber-700 dark:text-amber-500 flex gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                      <span>{c.risks}</span>
                    </p>
                  </div>

                  <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 space-y-1 text-xs">
                    {c.exclusionFilters.results.map((r) => (
                      <div key={r.id} className="flex items-center gap-1.5">
                        {r.passed ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        ) : (
                          <XCircle className="w-3.5 h-3.5 text-red-500 shrink-0" />
                        )}
                        <span className="text-zinc-500">{r.label}</span>
                      </div>
                    ))}
                    <p className="text-zinc-400 pl-5">
                      {c.exclusionFilters.notes}
                    </p>
                  </div>

                  {c.metaAdsLibrary.checked && (
                    <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 text-xs space-y-1">
                      <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                        Meta Ads Library
                      </span>
                      {c.metaAdsLibrary.pages.map((p, i) => (
                        <div
                          key={i}
                          className="text-zinc-500 dark:text-zinc-400"
                        >
                          {p.name} — {p.followers.toLocaleString()} follow (
                          {p.category}) — {p.activeTotal}
                        </div>
                      ))}
                      <p className="text-zinc-400 italic">
                        {c.metaAdsLibrary.note}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>

            <Card className="p-5 space-y-2 border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-zinc-900 dark:text-white">
                Hành động tiếp theo
              </h3>
              <ul className="space-y-1 text-xs text-zinc-600 dark:text-zinc-400 list-disc pl-4">
                {activeRun.actionItems.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </Card>

            <Card className="p-5 space-y-2 border-zinc-200 dark:border-zinc-800">
              <h3 className="font-bold text-sm text-zinc-900 dark:text-white">
                Sources
              </h3>
              <ul className="space-y-1 text-xs">
                {activeRun.sources.map((s, i) => (
                  <li key={i}>
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-500 hover:underline inline-flex items-center gap-1"
                      >
                        {s.title}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span className="text-zinc-500">{s.title}</span>
                    )}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
