import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import type {
  ExclusionFilter,
  ResearchConfig,
} from "@/features/dropshipping/hooks/useResearchConfig";
import { useCopyToClaude } from "@/features/dropshipping/hooks/useLocalStorageBackedState";
import { Settings2, Copy, Check, RotateCcw, Plus, X } from "lucide-react";

export interface ResearchConfigPanelProps {
  config: ResearchConfig;
  update: (patch: Partial<ResearchConfig>) => void;
  resetToDefault: () => void;
  exportJSON: () => string;
  isDirty: boolean;
}

/** Parses a number input's raw string, rejecting empty/NaN so clearing the field never silently commits 0. */
function parseNumberInput(raw: string): number | null {
  if (raw.trim() === "") return null;
  const n = Number(raw);
  return Number.isNaN(n) ? null : n;
}

export function ResearchConfigPanel({
  config,
  update,
  resetToDefault,
  exportJSON,
  isDirty,
}: ResearchConfigPanelProps) {
  const [collapsed, setCollapsed] = useState(true);
  const { copied, copy: handleCopy } = useCopyToClaude(
    () =>
      `Cập nhật lại research-config.default.json (và market-research-hunter/SKILL.md nếu liên quan) theo đúng nội dung JSON sau — đây là config mình vừa chỉnh trên web:\n\n${exportJSON()}`,
  );

  const updateFilter = (id: string, patch: Partial<ExclusionFilter>) => {
    update({
      exclusionFilters: config.exclusionFilters.map((f) =>
        f.id === id ? { ...f, ...patch } : f,
      ),
    });
  };

  const addFilter = () => {
    update({
      exclusionFilters: [
        ...config.exclusionFilters,
        {
          id: `custom-${Date.now()}`,
          label: "Tiêu chí mới...",
          active: true,
        },
      ],
    });
  };

  const removeFilter = (id: string) => {
    update({
      exclusionFilters: config.exclusionFilters.filter((f) => f.id !== id),
    });
  };

  return (
    <Card className="border-amber-500/30 bg-amber-500/5 rounded-2xl overflow-hidden">
      <button
        onClick={() => setCollapsed((c) => !c)}
        className="w-full flex items-center justify-between p-4 text-left cursor-pointer"
      >
        <div className="flex items-center gap-2">
          <Settings2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />
          <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Config tiêu chí
          </span>
          {isDirty && (
            <Badge
              variant="outline"
              className="text-[9px] uppercase bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30"
            >
              đã sửa — chỉ lưu trên máy này
            </Badge>
          )}
        </div>
        <span className="text-xs text-zinc-400">
          {collapsed ? "Mở rộng" : "Thu gọn"}
        </span>
      </button>

      {!collapsed && (
        <div className="px-4 pb-4 space-y-5 border-t border-amber-500/20 pt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
                Margin mục tiêu ({config.marginTarget.unit})
              </label>
              <div className="flex items-center gap-1.5">
                <Input
                  type="number"
                  defaultValue={config.marginTarget.min}
                  key={`margin-min-${config.marginTarget.min}`}
                  onChange={(e) => {
                    const n = parseNumberInput(e.target.value);
                    if (n === null) return;
                    update({
                      marginTarget: { ...config.marginTarget, min: n },
                    });
                  }}
                  className="h-8 text-xs"
                />
                <span className="text-zinc-400 text-xs">–</span>
                <Input
                  type="number"
                  defaultValue={config.marginTarget.max}
                  key={`margin-max-${config.marginTarget.max}`}
                  onChange={(e) => {
                    const n = parseNumberInput(e.target.value);
                    if (n === null) return;
                    update({
                      marginTarget: { ...config.marginTarget, max: n },
                    });
                  }}
                  className="h-8 text-xs"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
                AOV mục tiêu ({config.aovTarget.unit})
              </label>
              <div className="flex items-center gap-1.5">
                <Input
                  type="number"
                  defaultValue={config.aovTarget.min}
                  key={`aov-min-${config.aovTarget.min}`}
                  onChange={(e) => {
                    const n = parseNumberInput(e.target.value);
                    if (n === null) return;
                    update({ aovTarget: { ...config.aovTarget, min: n } });
                  }}
                  className="h-8 text-xs"
                />
                <span className="text-zinc-400 text-xs">–</span>
                <Input
                  type="number"
                  defaultValue={config.aovTarget.max}
                  key={`aov-max-${config.aovTarget.max}`}
                  onChange={(e) => {
                    const n = parseNumberInput(e.target.value);
                    if (n === null) return;
                    update({ aovTarget: { ...config.aovTarget, max: n } });
                  }}
                  className="h-8 text-xs"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
                Giới hạn cân nặng — gadget ({config.shipWeightLimitGadget.unit}
                )
              </label>
              <Input
                type="number"
                defaultValue={config.shipWeightLimitGadget.value}
                key={`weight-${config.shipWeightLimitGadget.value}`}
                onChange={(e) => {
                  const n = parseNumberInput(e.target.value);
                  if (n === null) return;
                  update({
                    shipWeightLimitGadget: {
                      ...config.shipWeightLimitGadget,
                      value: n,
                    },
                  });
                }}
                className="h-8 text-xs"
              />
              <p className="text-[10px] text-zinc-400 leading-snug">
                {config.shipWeightLimitGadget.note}
              </p>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[10px] font-bold uppercase text-zinc-500 tracking-wider">
                Tiêu chí loại trừ (Section 0)
              </label>
              <Button
                size="sm"
                variant="outline"
                onClick={addFilter}
                className="h-6 text-[10px] px-2"
              >
                <Plus className="w-3 h-3 mr-1" /> Thêm
              </Button>
            </div>
            {config.exclusionFilters.map((f) => (
              <div key={f.id} className="flex items-center gap-2">
                <Checkbox
                  checked={f.active}
                  onCheckedChange={(v) =>
                    updateFilter(f.id, { active: v === true })
                  }
                />
                <Input
                  value={f.label}
                  onChange={(e) => updateFilter(f.id, { label: e.target.value })}
                  className="h-7 text-xs flex-1"
                />
                <button
                  onClick={() => removeFilter(f.id)}
                  className="text-zinc-400 hover:text-red-500 cursor-pointer shrink-0"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 pt-2 border-t border-amber-500/20">
            <Button
              size="sm"
              onClick={handleCopy}
              className="text-xs h-8 bg-amber-600 hover:bg-amber-500 text-white"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 mr-1.5" />
              ) : (
                <Copy className="w-3.5 h-3.5 mr-1.5" />
              )}
              {copied ? "Đã copy!" : "Copy JSON để đồng bộ với Claude"}
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={resetToDefault}
              className="text-xs h-8"
            >
              <RotateCcw className="w-3.5 h-3.5 mr-1.5" /> Khôi phục mặc định
            </Button>
          </div>
          <p className="text-[10px] text-zinc-400 leading-snug">
            Config chỉ lưu trong trình duyệt máy này (localStorage). Muốn
            Claude cũng dùng đúng ngưỡng này cho các lần research sau, bấm
            "Copy JSON" rồi dán vào chat.
          </p>
        </div>
      )}
    </Card>
  );
}
