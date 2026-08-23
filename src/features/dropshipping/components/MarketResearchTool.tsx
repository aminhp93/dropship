import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Sparkles,
  AlertCircle,
  FileText,
  Copy,
  Check,
  Plus,
  Trash2,
  Save,
} from 'lucide-react';
import type { ResearchConfig } from '@/features/dropshipping/hooks/useResearchConfig';
import type { Candidate, ResearchRun } from '@/features/dropshipping/hooks/useMarketResearchRuns';

export interface MarketResearchToolProps {
  config: ResearchConfig;
  addRun: (
    run: Omit<ResearchRun, 'id' | 'version'> & { version?: number },
  ) => ResearchRun;
  nextVersionFor: (niche: string) => number;
  /** Called right after a run is saved, so the parent can switch its view to it. */
  onSaved?: (run: ResearchRun) => void;
}

const platforms: { id: string; name: string; getUrl: (query: string) => string }[] = [
  {
    id: 'fbAds',
    name: 'Facebook Ads Library (US)',
    getUrl: (q) =>
      `https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&is_targeted_country=false&media_type=all&q=${encodeURIComponent(q)}&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc`,
  },
  {
    id: 'tiktok',
    name: 'TikTok Search Video',
    getUrl: (q) => `https://www.tiktok.com/search/video?q=${encodeURIComponent(q)}`,
  },
  {
    id: 'googleShopping',
    name: 'Google Shopping US',
    getUrl: (q) =>
      `https://www.google.com/search?q=${encodeURIComponent(q).replace(/%20/g, '+')}&hl=en&gl=us&sec_src=docs&udm=28`,
  },
  {
    id: 'googleTrends',
    name: 'Google Trends (US 5-Year)',
    getUrl: (q) =>
      `https://trends.google.com/trends/explore?geo=US&date=today%205-y&q=${encodeURIComponent(q)}&hl=en`,
  },
  {
    id: 'keywordPlanner',
    name: 'Google Keyword Planner',
    getUrl: () =>
      `https://ads.google.com/aw/keywordplanner/ideas/new?ocid=8463729243&ascid=8463729243&euid=6596601082&__u=4928328618&uscid=8463729243&__c=9691242307&authuser=0&sourceid=emp`,
  },
];

interface CandidateDraft {
  localId: string;
  name: string;
  keyword: string;
  cogs: string;
  retailPrice: string;
  margin: string;
  status: 'shortlisted' | 'rejected';
  strengths: string;
  risks: string;
  rawNotes: string;
  metaAdsNote: string;
  filterResults: Record<string, boolean>;
}

function makeEmptyCandidate(activeFilterIds: string[]): CandidateDraft {
  const filterResults: Record<string, boolean> = {};
  activeFilterIds.forEach((id) => (filterResults[id] = true));
  return {
    localId: `c-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    name: '',
    keyword: '',
    cogs: '',
    retailPrice: '',
    margin: '',
    status: 'shortlisted',
    strengths: '',
    risks: '',
    rawNotes: '',
    metaAdsNote: '',
    filterResults,
  };
}

/** Parses "Title | URL" lines. A line with no "|" is kept as a title-only source (no fabricated URL). */
function parseSourceLines(text: string): { title: string; url: string }[] {
  return text
    .split('\n')
    .map((s) => s.trim())
    .filter(Boolean)
    .map((line) => {
      const pipeIndex = line.indexOf('|');
      if (pipeIndex === -1) return { title: line, url: '' };
      const title = line.slice(0, pipeIndex).trim();
      const url = line.slice(pipeIndex + 1).trim();
      return { title: title || line, url };
    });
}

export function MarketResearchTool({
  config,
  addRun,
  nextVersionFor,
  onSaved,
}: MarketResearchToolProps) {
  const activeFilterIds = config.exclusionFilters
    .filter((f) => f.active)
    .map((f) => f.id);

  const [niche, setNiche] = useState('');
  const [changeNote, setChangeNote] = useState('');
  const [candidates, setCandidates] = useState<CandidateDraft[]>([
    makeEmptyCandidate(activeFilterIds),
  ]);
  const [actionItemsText, setActionItemsText] = useState('');
  const [sourcesText, setSourcesText] = useState('');
  const [isPromptOpen, setIsPromptOpen] = useState(false);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [savedRun, setSavedRun] = useState<{ niche: string; version: number } | null>(null);

  const updateCandidate = (localId: string, patch: Partial<CandidateDraft>) => {
    setCandidates((prev) =>
      prev.map((c) => (c.localId === localId ? { ...c, ...patch } : c)),
    );
  };

  const addCandidate = () =>
    setCandidates((prev) => [...prev, makeEmptyCandidate(activeFilterIds)]);

  const removeCandidate = (localId: string) =>
    setCandidates((prev) => prev.filter((c) => c.localId !== localId));

  const handleLaunchAll = (keyword: string) => {
    const q = keyword.trim();
    if (!q) return;
    platforms.forEach((p, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = p.getUrl(q);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 100);
    });
  };

  const buildPrompt = () => {
    const activeFilters = config.exclusionFilters.filter((f) => f.active);
    return `Bạn là Market Research Hunter (đọc .agents/skills/market-research-hunter/SKILL.md nếu có trong repo). Hãy phân tích và chấm điểm lại các ứng viên sản phẩm dưới đây cho ngách "${niche || '[chưa đặt tên ngách]'}".

### Config đang áp dụng
- Margin mục tiêu: ${config.marginTarget.min}-${config.marginTarget.max}${config.marginTarget.unit}
- AOV mục tiêu: $${config.aovTarget.min}-${config.aovTarget.max}
- Giới hạn cân nặng (gadget): <${config.shipWeightLimitGadget.value}${config.shipWeightLimitGadget.unit}
- Tiêu chí loại trừ đang bật: ${activeFilters.map((f) => f.label).join('; ') || '(không có)'}

### Ứng viên đã ghi nhận (${candidates.length})
${candidates
  .map(
    (c, i) => `${i + 1}. ${c.name || '[chưa đặt tên]'}
   - Từ khoá đã research: ${c.keyword || '(chưa nhập)'}
   - COGS/Giá bán/Margin ước tính: ${c.cogs || '?'} / ${c.retailPrice || '?'} / ${c.margin || '?'}
   - Ghi chú/link/số đã tìm được (5 nguồn): ${c.rawNotes || '(chưa ghi)'}
   - Meta Ads Library note: ${c.metaAdsNote || '(chưa check)'}`,
  )
  .join('\n')}

### Yêu cầu
1. Áp filter loại trừ ở trên cho từng ứng viên, giải thích rõ pass/fail.
2. Với ứng viên pass, chấm điểm theo 4 Golden Pillars trong SKILL.md.
3. Kết luận: ứng viên nào shortlisted, ứng viên nào rejected, vì sao.
4. Đề xuất hành động tiếp theo.`;
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(buildPrompt());
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const handleSaveRun = () => {
    if (!niche.trim() || candidates.length === 0) return;
    const mapped: Candidate[] = candidates.map((c) => ({
      name: c.name || '(chưa đặt tên)',
      status: c.status,
      cogs: c.cogs || null,
      retailPrice: c.retailPrice || null,
      margin: c.margin || null,
      dataConfidence: 'estimated',
      strengths: c.strengths || c.rawNotes,
      risks: c.risks,
      rawNotes: c.rawNotes,
      exclusionFilters: {
        // Snapshot id+label+passed at save time so later edits/deletes to
        // config.exclusionFilters don't retroactively change this run's history.
        results: activeFilterIds.map((fid) => ({
          id: fid,
          label: config.exclusionFilters.find((f) => f.id === fid)?.label ?? fid,
          passed: c.filterResults[fid] ?? true,
        })),
        notes: c.rawNotes,
      },
      metaAdsLibrary: {
        checked: !!c.metaAdsNote,
        pages: [],
        note: c.metaAdsNote,
      },
    }));

    const actionItems = actionItemsText
      .split('\n')
      .map((s) => s.trim())
      .filter(Boolean);
    const sources = parseSourceLines(sourcesText);

    const version = nextVersionFor(niche.trim());
    const saved = addRun({
      niche: niche.trim(),
      date: new Date().toISOString().slice(0, 10),
      changeNote: changeNote || `Lần chạy v${version}.`,
      candidates: mapped,
      sources,
      actionItems,
    });
    setSavedRun({ niche: saved.niche, version: saved.version });
    onSaved?.(saved);
  };

  return (
    <Card className="bg-zinc-900/90 border-purple-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
          Ngách đang research
        </label>
        <Input
          value={niche}
          onChange={(e) => setNiche(e.target.value)}
          placeholder="Ví dụ: Home & Bedroom"
          className="bg-zinc-950 border-zinc-700 text-white text-sm rounded-xl"
        />
      </div>

      <div className="space-y-4">
        {candidates.map((c, idx) => (
          <div
            key={c.localId}
            className="p-4 rounded-2xl border border-zinc-800 bg-zinc-950/60 space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-purple-400">
                Ứng viên #{idx + 1}
              </span>
              {candidates.length > 1 && (
                <button
                  onClick={() => removeCandidate(c.localId)}
                  className="text-zinc-500 hover:text-red-400 cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <Input
                value={c.name}
                onChange={(e) => updateCandidate(c.localId, { name: e.target.value })}
                placeholder="Tên sản phẩm"
                className="h-8 text-xs bg-zinc-900 border-zinc-700 text-white"
              />
              <div className="flex items-center gap-2">
                <Input
                  value={c.keyword}
                  onChange={(e) =>
                    updateCandidate(c.localId, { keyword: e.target.value })
                  }
                  placeholder="Từ khoá tra cứu (vd: floating shelf)"
                  className="h-8 text-xs bg-zinc-900 border-zinc-700 text-white flex-1"
                />
                <Button
                  size="sm"
                  onClick={() => handleLaunchAll(c.keyword)}
                  className="h-8 shrink-0 bg-purple-600 hover:bg-purple-500 text-white text-[10px] px-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <Input
                value={c.cogs}
                onChange={(e) => updateCandidate(c.localId, { cogs: e.target.value })}
                placeholder="COGS"
                className="h-8 text-xs bg-zinc-900 border-zinc-700 text-white"
              />
              <Input
                value={c.retailPrice}
                onChange={(e) =>
                  updateCandidate(c.localId, { retailPrice: e.target.value })
                }
                placeholder="Giá bán"
                className="h-8 text-xs bg-zinc-900 border-zinc-700 text-white"
              />
              <Input
                value={c.margin}
                onChange={(e) => updateCandidate(c.localId, { margin: e.target.value })}
                placeholder="Margin"
                className="h-8 text-xs bg-zinc-900 border-zinc-700 text-white"
              />
            </div>

            <textarea
              value={c.rawNotes}
              onChange={(e) => updateCandidate(c.localId, { rawNotes: e.target.value })}
              placeholder="Ghi lại link/số tìm được từ 5 nguồn ở trên (dán trực tiếp, không cần format đẹp)..."
              rows={2}
              className="w-full text-xs bg-zinc-900 border border-zinc-700 text-white rounded-lg p-2 resize-y"
            />

            <Input
              value={c.metaAdsNote}
              onChange={(e) =>
                updateCandidate(c.localId, { metaAdsNote: e.target.value })
              }
              placeholder="Meta Ads Library: tên Page — follower — active/total"
              className="h-8 text-xs bg-zinc-900 border-zinc-700 text-white"
            />

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1">
              {activeFilterIds.map((fid) => {
                const label =
                  config.exclusionFilters.find((f) => f.id === fid)?.label ?? fid;
                return (
                  <label
                    key={fid}
                    className="flex items-center gap-1.5 text-[11px] text-zinc-400"
                  >
                    <Checkbox
                      checked={c.filterResults[fid] ?? true}
                      onCheckedChange={(v) =>
                        updateCandidate(c.localId, {
                          filterResults: {
                            ...c.filterResults,
                            [fid]: v === true,
                          },
                        })
                      }
                    />
                    {label}
                  </label>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  updateCandidate(c.localId, { status: 'shortlisted' })
                }
                className={cn(
                  'text-[10px] font-bold uppercase px-2.5 py-1 rounded-full cursor-pointer',
                  c.status === 'shortlisted'
                    ? 'bg-emerald-500/20 text-emerald-400'
                    : 'bg-zinc-800 text-zinc-500',
                )}
              >
                Shortlisted
              </button>
              <button
                onClick={() => updateCandidate(c.localId, { status: 'rejected' })}
                className={cn(
                  'text-[10px] font-bold uppercase px-2.5 py-1 rounded-full cursor-pointer',
                  c.status === 'rejected'
                    ? 'bg-red-500/20 text-red-400'
                    : 'bg-zinc-800 text-zinc-500',
                )}
              >
                Rejected
              </button>
            </div>
          </div>
        ))}

        <Button
          variant="outline"
          onClick={addCandidate}
          className="w-full text-xs border-dashed border-zinc-700 text-zinc-400 hover:text-white"
        >
          <Plus className="w-3.5 h-3.5 mr-1.5" /> Thêm sản phẩm ứng viên
        </Button>
      </div>

      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300/90 font-medium">
        <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
        <span>
          Nếu trình duyệt chặn pop-up khi bấm nút tia sét, chọn "Always allow
          pop-ups" để mở đủ 5 tab.
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <textarea
          value={changeNote}
          onChange={(e) => setChangeNote(e.target.value)}
          placeholder="Ghi chú cho lần chạy này (có gì khác version trước)..."
          rows={2}
          className="text-xs bg-zinc-950 border border-zinc-700 text-white rounded-lg p-2 resize-y"
        />
        <textarea
          value={actionItemsText}
          onChange={(e) => setActionItemsText(e.target.value)}
          placeholder={'Hành động tiếp theo, mỗi dòng 1 việc...'}
          rows={2}
          className="text-xs bg-zinc-950 border border-zinc-700 text-white rounded-lg p-2 resize-y"
        />
      </div>
      <textarea
        value={sourcesText}
        onChange={(e) => setSourcesText(e.target.value)}
        placeholder={'Sources, mỗi dòng: Tiêu đề | URL (URL để trống nếu chưa có)'}
        rows={2}
        className="w-full text-xs bg-zinc-950 border border-zinc-700 text-white rounded-lg p-2 resize-y"
      />

      <div className="flex items-center gap-2 flex-wrap">
        <Button
          onClick={() => setIsPromptOpen((v) => !v)}
          variant="outline"
          className="bg-zinc-800 hover:bg-zinc-700 border-zinc-700 text-purple-300 hover:text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5"
        >
          <FileText className="w-4 h-4 text-purple-400" />
          {isPromptOpen ? 'Ẩn prompt phân tích' : 'Xem prompt phân tích cho Claude'}
        </Button>
        <Button
          onClick={handleSaveRun}
          disabled={!niche.trim()}
          className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 disabled:opacity-40"
        >
          <Save className="w-4 h-4" /> Lưu thành báo cáo
        </Button>
        {savedRun && (
          <span className="text-xs text-emerald-400 flex items-center gap-1">
            Đã lưu {savedRun.niche} v{savedRun.version} — xem ở danh sách bên
            dưới
          </span>
        )}
      </div>

      {isPromptOpen && (
        <div className="space-y-2 pt-2 border-t border-zinc-800">
          <div className="flex items-center justify-between">
            <span className="text-xs text-zinc-400">
              Copy prompt này rồi dán vào Claude để phân tích:
            </span>
            <Button
              size="sm"
              onClick={handleCopyPrompt}
              className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5"
            >
              {copiedPrompt ? (
                <Check className="w-3.5 h-3.5 text-emerald-300" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
              {copiedPrompt ? 'Đã Copy!' : 'Copy Prompt'}
            </Button>
          </div>
          <pre className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 text-xs text-zinc-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto max-h-80 overflow-y-auto">
            {buildPrompt()}
          </pre>
        </div>
      )}
    </Card>
  );
}
