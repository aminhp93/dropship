import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Plus,
  Trash2,
  TrendingUp,
  AlertTriangle,
  Copy,
  Check,
  FileText,
  GitCommitHorizontal,
  ChevronRight,
  ChevronDown,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { cn } from '@/lib/utils';
import {
  useLocalStorageBackedState,
  useCopyToClaude,
} from '@/features/dropshipping/hooks/useLocalStorageBackedState';
import {
  GOAL,
  DAILY_LOG_SEED,
  LOG_CATEGORIES,
  LOG_ALIGNMENTS,
  type DailyLogEntry,
  type LogCategory,
  type LogAlignment,
} from '@/features/dropshipping/data/timeline-data';
import { REAL_LOG_CONTENT } from '@/features/dropshipping/data/daily-log-content';

const STORAGE_KEY = 'dropship-daily-log-v2';

const ALIGNMENT_STYLES: Record<LogAlignment, string> = {
  direct: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30',
  support: 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/30',
  detour: 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/30',
};

const WEEKDAYS = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

/** Nội dung đầy đủ của 1 ngày: ưu tiên content tự nhập, fallback về file .md thật. */
function resolveContent(entry: DailyLogEntry): string {
  return entry.content ?? REAL_LOG_CONTENT[entry.date] ?? '';
}

function formatDateLabel(iso: string) {
  const d = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(d.getTime())) return { weekday: '', dayMonth: iso };
  return {
    weekday: WEEKDAYS[d.getDay()],
    dayMonth: `${String(d.getDate()).padStart(2, '0')}/${String(d.getMonth() + 1).padStart(2, '0')}`,
  };
}

export function DailyLog() {
  const { value: entries, setValueImmediate: setEntries } =
    useLocalStorageBackedState<DailyLogEntry[]>(STORAGE_KEY, DAILY_LOG_SEED);

  const [openEntry, setOpenEntry] = useState<DailyLogEntry | null>(null);
  const [showList, setShowList] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [draftDate, setDraftDate] = useState(todayISO);
  const [draftSummary, setDraftSummary] = useState('');
  const [draftContent, setDraftContent] = useState('');
  const [draftCategory, setDraftCategory] = useState<LogCategory>('sales');
  const [draftAlignment, setDraftAlignment] = useState<LogAlignment>('direct');

  const sorted = useMemo(
    () => [...entries].sort((a, b) => b.date.localeCompare(a.date)),
    [entries],
  );

  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const isAllExpanded = sorted.length > 0 && expandedIds.size === sorted.length;

  const toggleExpandAll = () => {
    if (isAllExpanded) {
      setExpandedIds(new Set());
    } else {
      setExpandedIds(new Set(sorted.map((e) => e.id)));
    }
  };

  const toggleEntry = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  /** Ngày là khoá duy nhất — chặn tạo trùng ngay từ lúc gõ. */
  const dateTaken = useMemo(
    () => entries.some((e) => e.date === draftDate),
    [entries, draftDate],
  );
  const canSubmit = Boolean(draftDate) && !dateTaken && draftSummary.trim().length > 0;

  const stats = useMemo(() => {
    const total = entries.length;
    const byAlignment = { direct: 0, support: 0, detour: 0 };
    const byCategory: Record<string, number> = {};
    for (const e of entries) {
      byAlignment[e.alignment] += 1;
      byCategory[e.category] = (byCategory[e.category] ?? 0) + 1;
    }
    return {
      total,
      byAlignment,
      byCategory,
      directPct: total ? Math.round((byAlignment.direct / total) * 100) : 0,
      detourPct: total ? Math.round((byAlignment.detour / total) * 100) : 0,
    };
  }, [entries]);

  const { copied, copy } = useCopyToClaude(() => {
    const lines = sorted.map(
      (e) =>
        `- ${e.date} | ${LOG_CATEGORIES[e.category].label} | ${LOG_ALIGNMENTS[e.alignment].label} | ${e.summary}`,
    );
    return `Đây là daily log dự án dropship (${stats.total} ngày, ${stats.directPct}% trực tiếp / ${stats.detourPct}% lệch hướng). Đánh giá giúp mình có đang đi đúng hướng tới mục tiêu "${GOAL.target}" (${GOAL.targetDeadline}, đến ${GOAL.reviewDate}) không, và việc nên làm tiếp theo là gì:\n\n${lines.join('\n')}`;
  });

  const addEntry = () => {
    if (!canSubmit) return;
    const entry: DailyLogEntry = {
      id: `log-${draftDate}`,
      date: draftDate,
      summary: draftSummary.trim(),
      category: draftCategory,
      alignment: draftAlignment,
      source: 'file',
      content: draftContent.trim() || undefined,
    };
    setEntries([entry, ...entries]);
    setDraftSummary('');
    setDraftContent('');
    setDraftDate(todayISO());
    setShowForm(false);
    setShowList(true);
  };

  const removeEntry = (id: string) => {
    setEntries(entries.filter((e) => e.id !== id));
  };

  return (
    <Card className="p-5 sm:p-6 border-zinc-200 dark:border-zinc-800 space-y-5">
      <div className="flex items-start justify-between gap-3 flex-wrap">
        <div className="space-y-0.5">
          <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">Daily Log</h2>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-xl">
            Bấm vào một ngày để xem toàn bộ nội dung. Cột <strong>Đóng góp</strong> là chỗ soi
            lại: việc hôm đó có thật sự đẩy dự án tới đơn hàng đầu tiên không?
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowList((v) => !v)}
            className="h-8 text-[11px] cursor-pointer font-bold border-zinc-300 dark:border-zinc-700"
          >
            {showList ? (
              <>
                <ChevronDown className="w-3.5 h-3.5 mr-1 text-zinc-500" /> Thu gọn danh sách nhật ký
              </>
            ) : (
              <>
                <ChevronRight className="w-3.5 h-3.5 mr-1 text-emerald-600 dark:text-emerald-400" /> Xem danh sách nhật ký ({sorted.length} ngày)
              </>
            )}
          </Button>

          {showList && (
            <Button size="sm" variant="outline" onClick={toggleExpandAll} className="h-8 text-[11px] cursor-pointer">
              {isAllExpanded ? (
                <>
                  <ChevronDown className="w-3.5 h-3.5 mr-1" /> Thu gọn chi tiết
                </>
              ) : (
                <>
                  <ChevronRight className="w-3.5 h-3.5 mr-1" /> Mở chi tiết tất cả
                </>
              )}
            </Button>
          )}

          <Button size="sm" variant="outline" onClick={copy} className="h-8 text-[11px] cursor-pointer">
            {copied ? <Check className="w-3.5 h-3.5 mr-1" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
            {copied ? 'Đã copy' : 'Copy để Claude đánh giá'}
          </Button>

          <Button
            size="sm"
            onClick={() => setShowForm((v) => !v)}
            className="h-8 text-[11px] bg-zinc-900 hover:bg-zinc-800 text-white dark:bg-zinc-100 dark:text-zinc-900 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5 mr-1" /> Thêm ngày
          </Button>
        </div>
      </div>

      {/* Tổng kết — trả lời nhanh "có đang đi đúng hướng không" */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="text-[10px] uppercase tracking-wide text-zinc-500 font-bold">
            Ngày đã log
          </div>
          <div className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100">
            {stats.total}
          </div>
        </div>
        {(Object.keys(LOG_ALIGNMENTS) as LogAlignment[]).map((key) => (
          <div
            key={key}
            className={cn('p-3 rounded-xl border', ALIGNMENT_STYLES[key])}
            title={LOG_ALIGNMENTS[key].hint}
          >
            <div className="text-[10px] uppercase tracking-wide font-bold opacity-80">
              {LOG_ALIGNMENTS[key].label}
            </div>
            <div className="text-xl font-bold font-mono">
              {stats.byAlignment[key]}
              <span className="text-xs font-normal opacity-70 ml-1">
                ({stats.total ? Math.round((stats.byAlignment[key] / stats.total) * 100) : 0}%)
              </span>
            </div>
          </div>
        ))}
      </div>

      {stats.total > 0 && (
        <div
          className={cn(
            'flex items-start gap-2.5 p-3 rounded-xl border text-xs leading-relaxed',
            stats.detourPct > stats.directPct
              ? 'bg-amber-500/10 border-amber-500/30 text-amber-900 dark:text-amber-300'
              : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-900 dark:text-emerald-300',
          )}
        >
          {stats.detourPct > stats.directPct ? (
            <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          ) : (
            <TrendingUp className="w-4 h-4 shrink-0 mt-0.5" />
          )}
          <span>
            {stats.detourPct > stats.directPct ? (
              <>
                <strong>{stats.detourPct}% số ngày là việc lệch hướng</strong>, so với chỉ{' '}
                {stats.directPct}% đi thẳng tới đơn hàng. Phần lớn thời gian đang đổ vào{' '}
                {LOG_CATEGORIES[
                  (Object.entries(stats.byCategory).sort((a, b) => b[1] - a[1])[0]?.[0] ??
                    'tooling') as LogCategory
                ].label.toLowerCase()}
                . Việc kế tiếp nên là hành động bán hàng thật, không phải chuẩn bị thêm.
              </>
            ) : (
              <>
                <strong>{stats.directPct}% số ngày đi thẳng tới mục tiêu.</strong> Đang giữ đúng
                trọng tâm — tiếp tục ưu tiên việc tạo ra đơn hàng thật.
              </>
            )}
          </span>
        </div>
      )}

      {/* Form thêm ngày */}
      {showForm && (
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-zinc-500">Ngày</label>
              <Input
                type="date"
                value={draftDate}
                onChange={(e) => setDraftDate(e.target.value)}
                className={cn(
                  'h-8 text-xs',
                  dateTaken && 'border-red-500 focus-visible:ring-red-500',
                )}
              />
              {dateTaken && (
                <p className="text-[10px] text-red-600 dark:text-red-400 font-medium">
                  Ngày này đã có log — mỗi ngày chỉ 1 mục.
                </p>
              )}
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-zinc-500">
                Tóm tắt 1 dòng
              </label>
              <Input
                value={draftSummary}
                onChange={(e) => setDraftSummary(e.target.value)}
                placeholder="VD: Đặt mẫu fairy lights trên AliExpress, $18"
                className="h-8 text-xs"
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase text-zinc-500">
              Nội dung chi tiết (markdown, không bắt buộc)
            </label>
            <textarea
              rows={5}
              value={draftContent}
              onChange={(e) => setDraftContent(e.target.value)}
              placeholder={'## Dropship\n\n1. ...\n\n## Note\n\n1. ...'}
              className="w-full p-2.5 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs font-mono leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-zinc-500">Loại việc</label>
              <select
                value={draftCategory}
                onChange={(e) => setDraftCategory(e.target.value as LogCategory)}
                className="w-full h-8 px-2 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs"
              >
                {(Object.keys(LOG_CATEGORIES) as LogCategory[]).map((k) => (
                  <option key={k} value={k}>
                    {LOG_CATEGORIES[k].label}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold uppercase text-zinc-500">
                Đóng góp vào mục tiêu
              </label>
              <select
                value={draftAlignment}
                onChange={(e) => setDraftAlignment(e.target.value as LogAlignment)}
                className="w-full h-8 px-2 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs"
              >
                {(Object.keys(LOG_ALIGNMENTS) as LogAlignment[]).map((k) => (
                  <option key={k} value={k}>
                    {LOG_ALIGNMENTS[k].label} — {LOG_ALIGNMENTS[k].hint}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button size="sm" onClick={addEntry} disabled={!canSubmit} className="h-8 text-[11px]">
              Lưu
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowForm(false)}
              className="h-8 text-[11px]"
            >
              Huỷ
            </Button>
          </div>
        </div>
      )}

      {/* Danh sách nhật ký — Mặc định ẩn (showList === false), bấm nút ở trên để xem */}
      {showList && (
        <div className="space-y-1.5 pt-2 animate-in fade-in duration-200">
          {sorted.map((e) => {
            const { weekday, dayMonth } = formatDateLabel(e.date);
            const content = resolveContent(e);
            const isExpanded = expandedIds.has(e.id);

            return (
              <div
                key={e.id}
                className={cn(
                  'rounded-xl border transition-all duration-200 overflow-hidden',
                  isExpanded
                    ? 'border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/60 shadow-2xs'
                    : 'border-zinc-200/60 dark:border-zinc-800/60 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 bg-zinc-50/40 dark:bg-zinc-900/20'
                )}
              >
                <div className="group flex items-center gap-3 p-2.5">
                  <button
                    onClick={() => toggleEntry(e.id)}
                    title={e.summary}
                    className="flex-1 flex items-center gap-3 text-left min-w-0 cursor-pointer"
                  >
                    <div className="flex items-center gap-1.5 shrink-0 w-[96px]">
                      {isExpanded ? (
                        <ChevronDown className="w-3.5 h-3.5 text-zinc-600 dark:text-zinc-400 shrink-0" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      )}
                      <span className="font-mono text-xs font-bold text-zinc-900 dark:text-zinc-100">
                        {dayMonth}
                      </span>
                      <span className="text-[10px] font-medium text-zinc-400">{weekday}</span>
                    </div>

                    {e.source === 'file' ? (
                      <FileText
                        className="w-3.5 h-3.5 shrink-0 text-zinc-400"
                        aria-label="Có file .md gốc"
                      />
                    ) : (
                      <GitCommitHorizontal
                        className="w-3.5 h-3.5 shrink-0 text-zinc-300 dark:text-zinc-600"
                        aria-label="Dựng lại từ git log"
                      />
                    )}

                    <span className="text-xs text-zinc-700 dark:text-zinc-300 truncate flex-1 font-medium">
                      {e.summary}
                    </span>

                    <Badge
                      variant="outline"
                      className={cn(
                        'text-[10px] shrink-0 font-bold',
                        ALIGNMENT_STYLES[e.alignment],
                      )}
                      title={LOG_ALIGNMENTS[e.alignment].hint}
                    >
                      {LOG_ALIGNMENTS[e.alignment].label}
                    </Badge>
                  </button>

                  <button
                    onClick={() => removeEntry(e.id)}
                    className="opacity-0 group-hover:opacity-100 text-zinc-400 hover:text-red-500 transition-all shrink-0 pr-2 cursor-pointer"
                    aria-label={`Xoá log ngày ${e.date}`}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Inline Collapsible Content */}
                {isExpanded && (
                  <div className="px-4 pb-3.5 pt-1.5 border-t border-zinc-100 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-950/40 text-xs space-y-2">
                    {content ? (
                      <div className="prose prose-sm dark:prose-invert max-w-none text-xs text-zinc-700 dark:text-zinc-300 pt-1">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
                      </div>
                    ) : (
                      <p className="text-xs text-zinc-400 italic pt-1">
                        Ngày này chưa có file <code>.md</code> — nội dung được dựng lại từ git log nên chỉ có dòng tóm tắt ở trên.
                      </p>
                    )}
                    <div className="text-[10px] font-mono text-zinc-400 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/60 flex justify-between items-center">
                      <span>{e.source === 'file' ? `~/personal/daily-log/${e.date}.md` : 'nguồn: git log'}</span>
                      <button
                        onClick={() => setOpenEntry(e)}
                        className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold cursor-pointer"
                      >
                        Mở trong Popup ↗
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Dialog chi tiết */}
      <Dialog open={Boolean(openEntry)} onOpenChange={(o) => !o && setOpenEntry(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {openEntry && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2.5 flex-wrap text-base">
                  <span className="font-mono">{openEntry.date}</span>
                  <Badge
                    variant="outline"
                    className={cn('text-[10px] font-bold', ALIGNMENT_STYLES[openEntry.alignment])}
                  >
                    {LOG_ALIGNMENTS[openEntry.alignment].label}
                  </Badge>
                  <Badge variant="outline" className="text-[10px] font-medium">
                    {LOG_CATEGORIES[openEntry.category].label}
                  </Badge>
                </DialogTitle>
              </DialogHeader>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 -mt-1">
                {openEntry.summary}
              </p>

              {resolveContent(openEntry) ? (
                <div className="prose prose-sm dark:prose-invert max-w-none text-sm text-zinc-700 dark:text-zinc-300 border-t border-zinc-200 dark:border-zinc-800 pt-4">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {resolveContent(openEntry)}
                  </ReactMarkdown>
                </div>
              ) : (
                <p className="text-xs text-zinc-500 italic border-t border-zinc-200 dark:border-zinc-800 pt-4">
                  Ngày này chưa có file <code>.md</code> — nội dung được dựng lại từ git log nên
                  chỉ có dòng tóm tắt ở trên.
                </p>
              )}

              <p className="text-[10px] font-mono text-zinc-400 border-t border-zinc-200 dark:border-zinc-800 pt-3">
                {openEntry.source === 'file'
                  ? `~/personal/daily-log/${openEntry.date}.md`
                  : 'nguồn: git log'}
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Card>
  );
}
