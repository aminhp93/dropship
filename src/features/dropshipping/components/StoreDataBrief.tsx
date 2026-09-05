import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Store,
  Package,
  FolderTree,
  Factory,
  Image as ImageIcon,
  Megaphone,
  ShieldCheck,
  AlertTriangle,
  ChevronDown,
  ChevronRight,
  Plus,
  Trash2,
  RotateCcw,
  Copy,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  STORE_DATA_BRIEF_SEED,
  CONFIDENCE_META,
  CONFIDENCE_CYCLE,
  type StoreBrief,
  type BriefSection,
  type BriefRow,
  type Confidence,
} from "@/features/dropshipping/data/store-data-brief";
import {
  useLocalStorageBackedState,
  useCopyToClaude,
} from "@/features/dropshipping/hooks/useLocalStorageBackedState";

const ICONS: Record<string, LucideIcon> = {
  Store,
  Package,
  FolderTree,
  Factory,
  Image: ImageIcon,
  Megaphone,
  ShieldCheck,
  AlertTriangle,
};

function nextConfidence(c: Confidence): Confidence {
  const idx = CONFIDENCE_CYCLE.indexOf(c);
  return CONFIDENCE_CYCLE[(idx + 1) % CONFIDENCE_CYCLE.length];
}

function ConfidenceBadge({
  value,
  onClick,
}: {
  value: Confidence;
  onClick: () => void;
}) {
  const meta = CONFIDENCE_META[value];
  return (
    <button
      type="button"
      onClick={onClick}
      title="Bấm để đổi mức độ tin cậy (chưa có → estimated → sourced)"
      className={cn(
        "shrink-0 inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide cursor-pointer transition-colors",
        meta.className,
      )}
    >
      {meta.label}
    </button>
  );
}

function computeSectionStats(section: BriefSection) {
  const values: Confidence[] =
    section.kind === "fields"
      ? section.fields.map((f) => f.confidence)
      : section.rows.map((r) => r.confidence);
  const total = values.length;
  const sourced = values.filter((v) => v === "sourced").length;
  const missing = values.filter((v) => v === "missing").length;
  return { total, sourced, missing };
}

export function StoreDataBrief() {
  const { value: brief, setValue, isDirty, reset, exportJSON } =
    useLocalStorageBackedState<StoreBrief>(
      "dropship.store-data-brief.v1",
      STORE_DATA_BRIEF_SEED,
    );

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    brand: true,
    products: true,
  });

  const toggleSection = (id: string) =>
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));

  const overallStats = useMemo(() => {
    let total = 0;
    let sourced = 0;
    let missing = 0;
    brief.sections.forEach((s) => {
      const stats = computeSectionStats(s);
      total += stats.total;
      sourced += stats.sourced;
      missing += stats.missing;
    });
    return { total, sourced, missing };
  }, [brief]);

  const { copied, copy } = useCopyToClaude(() => {
    return [
      `Data Brief cho store "${brief.storeLabel}" — xem chi tiết trong app tại /dropship/progress/2-store (tab Data Brief).`,
      `Tiến độ: ${overallStats.sourced}/${overallStats.total} mục đã "sourced", còn ${overallStats.missing} mục "chưa có".`,
      "",
      exportJSON(),
    ].join("\n");
  });

  const updateFieldValue = (sectionId: string, fieldId: string, text: string) => {
    setValue((prev) => ({
      ...prev,
      sections: prev.sections.map((s) => {
        if (s.id !== sectionId || s.kind !== "fields") return s;
        return {
          ...s,
          fields: s.fields.map((f) => (f.id === fieldId ? { ...f, value: text } : f)),
        };
      }),
    }));
  };

  const cycleFieldConfidence = (sectionId: string, fieldId: string) => {
    setValue((prev) => ({
      ...prev,
      sections: prev.sections.map((s) => {
        if (s.id !== sectionId || s.kind !== "fields") return s;
        return {
          ...s,
          fields: s.fields.map((f) =>
            f.id === fieldId ? { ...f, confidence: nextConfidence(f.confidence) } : f,
          ),
        };
      }),
    }));
  };

  const updateCell = (sectionId: string, rowId: string, key: string, text: string) => {
    setValue((prev) => ({
      ...prev,
      sections: prev.sections.map((s) => {
        if (s.id !== sectionId || s.kind !== "table") return s;
        return {
          ...s,
          rows: s.rows.map((r) =>
            r.id === rowId ? { ...r, cells: { ...r.cells, [key]: text } } : r,
          ),
        };
      }),
    }));
  };

  const cycleRowConfidence = (sectionId: string, rowId: string) => {
    setValue((prev) => ({
      ...prev,
      sections: prev.sections.map((s) => {
        if (s.id !== sectionId || s.kind !== "table") return s;
        return {
          ...s,
          rows: s.rows.map((r) =>
            r.id === rowId ? { ...r, confidence: nextConfidence(r.confidence) } : r,
          ),
        };
      }),
    }));
  };

  const addRow = (sectionId: string) => {
    setValue((prev) => ({
      ...prev,
      sections: prev.sections.map((s) => {
        if (s.id !== sectionId || s.kind !== "table") return s;
        const newRow: BriefRow = {
          id: `${sectionId}-${Date.now()}`,
          confidence: "missing",
          cells: Object.fromEntries(s.columns.map((c) => [c.key, ""])),
        };
        return { ...s, rows: [...s.rows, newRow] };
      }),
    }));
  };

  const deleteRow = (sectionId: string, rowId: string) => {
    setValue((prev) => ({
      ...prev,
      sections: prev.sections.map((s) => {
        if (s.id !== sectionId || s.kind !== "table") return s;
        return { ...s, rows: s.rows.filter((r) => r.id !== rowId) };
      }),
    }));
  };

  return (
    <div className="space-y-5">
      {/* Header / progress / actions */}
      <Card className="p-4 sm:p-5 border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div>
            <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
              📋 Data Brief — {brief.storeLabel}
            </h2>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
              {brief.updatedNote}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {isDirty && (
              <Badge
                variant="outline"
                className="text-[10px] border-amber-500/30 text-amber-700 dark:text-amber-400 bg-amber-500/10"
              >
                đã sửa (lưu máy này)
              </Badge>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={reset}
              className="h-8 px-2.5 text-[11px] font-semibold cursor-pointer"
              title="Xoá thay đổi, quay về bản seed gốc"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1.5" />
              Reset
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={copy}
              className="h-8 px-2.5 text-[11px] font-semibold cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 mr-1.5 text-emerald-600" /> Đã copy
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 mr-1.5" /> Copy cho Claude
                </>
              )}
            </Button>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] text-zinc-500">
            <span>
              {overallStats.sourced}/{overallStats.total} mục đã "sourced"
            </span>
            <span>{overallStats.missing} mục chưa có</span>
          </div>
          <Progress
            value={overallStats.total ? (overallStats.sourced / overallStats.total) * 100 : 0}
            className="h-1.5"
          />
        </div>
      </Card>

      {/* Sections */}
      {brief.sections.map((section) => {
        const Icon = ICONS[section.iconName] ?? Store;
        const isOpen = !!openSections[section.id];
        const stats = computeSectionStats(section);

        return (
          <Card key={section.id} className="border-zinc-200 dark:border-zinc-800 overflow-hidden">
            <button
              type="button"
              onClick={() => toggleSection(section.id)}
              className="w-full text-left p-4 flex items-center justify-between gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 shrink-0">
                  <Icon className="w-4 h-4" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                    {section.title}
                  </div>
                  {section.description && (
                    <div className="text-[11px] text-zinc-500 dark:text-zinc-400 truncate">
                      {section.description}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-[10px] font-mono text-zinc-400">
                  {stats.sourced}/{stats.total} sourced
                </span>
                {isOpen ? (
                  <ChevronDown className="w-4 h-4 text-zinc-500" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-zinc-400" />
                )}
              </div>
            </button>

            {isOpen && (
              <div className="px-4 pb-4 pt-1 border-t border-zinc-100 dark:border-zinc-800/80 animate-in fade-in duration-150">
                {section.kind === "fields" ? (
                  <div className="space-y-3 pt-3">
                    {section.fields.map((field) => (
                      <div key={field.id} className="space-y-1">
                        <div className="flex items-center justify-between gap-2">
                          <label className="text-[11px] font-semibold text-zinc-700 dark:text-zinc-300">
                            {field.label}
                          </label>
                          <ConfidenceBadge
                            value={field.confidence}
                            onClick={() => cycleFieldConfidence(section.id, field.id)}
                          />
                        </div>
                        {field.type === "textarea" ? (
                          <textarea
                            value={field.value}
                            placeholder={field.placeholder}
                            onChange={(e) =>
                              updateFieldValue(section.id, field.id, e.target.value)
                            }
                            rows={field.value.split("\n").length > 2 ? field.value.split("\n").length : 2}
                            className="w-full rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 resize-y"
                          />
                        ) : (
                          <Input
                            value={field.value}
                            placeholder={field.placeholder}
                            onChange={(e) => updateFieldValue(section.id, field.id, e.target.value)}
                            className="h-9 text-xs"
                          />
                        )}
                        {field.hint && (
                          <p className="text-[10px] text-zinc-400 italic">{field.hint}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="pt-3 space-y-2.5">
                    <div className="overflow-x-auto -mx-1 px-1">
                      <table className="w-full text-left text-xs border-collapse min-w-[640px]">
                        <thead>
                          <tr className="bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800">
                            <th className="p-2 w-16 font-mono text-[10px] text-zinc-400 uppercase">
                              Tin cậy
                            </th>
                            {section.columns.map((col) => (
                              <th
                                key={col.key}
                                className={cn(
                                  "p-2 font-semibold text-[11px] text-zinc-600 dark:text-zinc-400",
                                  col.narrow && "w-28",
                                  col.wide && "min-w-[180px]",
                                )}
                              >
                                {col.label}
                              </th>
                            ))}
                            <th className="p-2 w-8" />
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/80">
                          {section.rows.map((row) => (
                            <tr key={row.id} className="align-top hover:bg-zinc-50/60 dark:hover:bg-zinc-900/30">
                              <td className="p-2">
                                <ConfidenceBadge
                                  value={row.confidence}
                                  onClick={() => cycleRowConfidence(section.id, row.id)}
                                />
                              </td>
                              {section.columns.map((col) => (
                                <td key={col.key} className="p-2">
                                  <input
                                    value={row.cells[col.key] ?? ""}
                                    onChange={(e) =>
                                      updateCell(section.id, row.id, col.key, e.target.value)
                                    }
                                    placeholder="—"
                                    className="w-full bg-transparent text-xs text-zinc-800 dark:text-zinc-200 placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300 dark:focus-visible:ring-zinc-700 rounded px-1 py-0.5"
                                  />
                                </td>
                              ))}
                              <td className="p-2">
                                <button
                                  type="button"
                                  onClick={() => deleteRow(section.id, row.id)}
                                  title="Xoá dòng"
                                  className="text-zinc-300 hover:text-rose-500 cursor-pointer"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => addRow(section.id)}
                      className="h-7 px-2 text-[11px] text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5 mr-1" /> Thêm dòng
                    </Button>
                  </div>
                )}
              </div>
            )}
          </Card>
        );
      })}
    </div>
  );
}
