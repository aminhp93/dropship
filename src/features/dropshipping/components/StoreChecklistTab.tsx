import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  ChevronDown,
  ChevronRight,
  ExternalLink,
  Eye,
  CheckCircle2,
  Circle,
  Search,
  FileText,
  X,
  Store,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  APEX_STORE_CHECKLIST,
  ULTRACARMATS_STORE_CHECKLIST,
  STORE_LIST,
  type StoreChecklistItem,
  type StoreListEntry,
} from "@/features/dropshipping/data/store-checklist-data";

export function StoreChecklistTab() {
  const [selectedStoreId, setSelectedStoreId] = useState<string>("apex-auto-mats");
  const [searchQuery, setSearchQuery] = useState("");
  const [openSections, setOpenSections] = useState<Set<string>>(
    new Set(["A", "B", "C", "H", "N", "U_A", "U_B", "U_C", "U_D"]),
  );
  const [previewItem, setPreviewItem] = useState<StoreChecklistItem | null>(null);

  // Active Store object
  const activeStore = useMemo<StoreListEntry>(() => {
    return STORE_LIST.find((s) => s.id === selectedStoreId) || STORE_LIST[0];
  }, [selectedStoreId]);

  // Active Store Checklist
  const activeRawChecklist = useMemo(() => {
    return selectedStoreId === "ultra-car-mats"
      ? ULTRACARMATS_STORE_CHECKLIST
      : APEX_STORE_CHECKLIST;
  }, [selectedStoreId]);

  const allItems = useMemo(
    () => activeRawChecklist.flatMap((s) => s.items),
    [activeRawChecklist],
  );
  const doneCount = allItems.filter((i) => i.done).length;
  const percent = Math.round((doneCount / allItems.length) * 100);

  // Search filter logic
  const filteredSections = useMemo(() => {
    if (!searchQuery.trim()) return activeRawChecklist;

    const query = searchQuery.toLowerCase().trim();

    return activeRawChecklist
      .map((section) => {
        const sectionMatch = section.title.toLowerCase().includes(query);

        const matchingItems = section.items.filter((item) => {
          return (
            item.label.toLowerCase().includes(query) ||
            item.howTo.toLowerCase().includes(query) ||
            item.id.toLowerCase().includes(query) ||
            (item.previewTitle && item.previewTitle.toLowerCase().includes(query)) ||
            (item.previewContent && item.previewContent.toLowerCase().includes(query))
          );
        });

        if (sectionMatch || matchingItems.length > 0) {
          return {
            ...section,
            items: sectionMatch ? section.items : matchingItems,
          };
        }
        return null;
      })
      .filter(Boolean) as typeof activeRawChecklist;
  }, [searchQuery, activeRawChecklist]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="space-y-6">
      {/* STORE SELECTOR DROPDOWN */}
      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-4 shadow-2xs">
        <div className="flex items-center justify-between">
          <h2 className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 flex items-center gap-1.5">
            <Store className="w-3.5 h-3.5 text-purple-500" /> Store Shopify Dashboard
          </h2>
          <Badge
            variant="outline"
            className={cn(
              "text-[10px] font-bold uppercase",
              activeStore.isCompetitor
                ? "bg-amber-500/10 text-amber-600 border-amber-500/30"
                : "bg-emerald-500/10 text-emerald-600 border-emerald-500/30",
            )}
          >
            {activeStore.badgeText}
          </Badge>
        </div>

        {/* Dropdown Selector */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 bg-zinc-50 dark:bg-zinc-900/60 rounded-xl border border-zinc-200 dark:border-zinc-800">
          <div className="space-y-1.5 flex-1 max-w-md">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
              Chọn Store để xem & đối chiếu checklist
            </label>
            <div className="relative">
              <select
                value={selectedStoreId}
                onChange={(e) => {
                  setSelectedStoreId(e.target.value);
                  setSearchQuery("");
                }}
                className="w-full text-xs font-bold font-sans pl-3.5 pr-10 py-2.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer shadow-2xs appearance-none"
              >
                {STORE_LIST.map((store) => (
                  <option key={store.id} value={store.id}>
                    {store.name} ({store.badgeText}) — {store.domain}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-zinc-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Selected Store Status & Live Button */}
          <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-zinc-200 dark:border-zinc-800">
            <div className="space-y-0.5">
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Trạng thái</span>
              <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 block max-w-[200px] truncate">
                {activeStore.status}
              </span>
            </div>

            <a
              href={activeStore.storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-xs transition-colors shrink-0 cursor-pointer"
            >
              <span>Mở Web Live</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Competitor Comparison Insight Note */}
        {activeStore.isCompetitor && (
          <div className="p-3.5 bg-amber-50 dark:bg-amber-950/30 rounded-xl border border-amber-300/60 dark:border-amber-800 text-xs text-amber-800 dark:text-amber-300 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold block">
                Đang xem Checklist & Bóc tách Dữ liệu đối thủ: Ultra Car Mats (ultracarmats.com)
              </span>
              <p className="text-[11px] leading-relaxed text-amber-700 dark:text-amber-400">
                Dữ liệu bên dưới được trích xuất trực tiếp từ web <b>ultracarmats.com</b> để bạn đối chiếu với store Apex Auto Mats của bạn. Lưu ý không copy nguyên văn các claim sai rủi ro (như claim "Airbag compatible" hay claim "ship 5 ngày").
              </p>
            </div>
          </div>
        )}
      </Card>

      {/* Main Checklist Section with Search & Content Preview */}
      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-5">
        {/* Top Header & Progress */}
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="space-y-1 flex-1 min-w-[200px]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                  Checklist & Blueprint: {activeStore.name}
                </h2>
                <Badge
                  variant="outline"
                  className="text-[10px] font-medium text-zinc-500 flex items-center gap-1"
                >
                  <Eye className="w-3 h-3 text-purple-500" /> View Only
                </Badge>
              </div>
              <span className="text-xs font-mono text-zinc-500">
                {doneCount}/{allItems.length} ({percent}%)
              </span>
            </div>
            <Progress value={percent} className="h-2" />
          </div>
        </div>

        {/* SEARCH BAR FOR CHECKLIST & CONTENT PREVIEW */}
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder={`Tìm kiếm trong ${activeStore.name} (ví dụ: 'pháp lý', 'privacy', 'pricing', 'airbag', 'selector')...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full text-xs pl-9 pr-8 py-2.5 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50 dark:bg-zinc-900/80 focus:outline-none focus:ring-1 focus:ring-purple-500 focus:border-purple-500 font-medium transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search Results Summary Banner */}
        {searchQuery && (
          <div className="text-xs text-zinc-500 dark:text-zinc-400 flex items-center justify-between px-1">
            <span>
              Tìm thấy <b>{filteredSections.reduce((acc, s) => acc + s.items.length, 0)}</b> mục trong <b>{activeStore.name}</b> khớp từ khóa "<b>{searchQuery}</b>"
            </span>
            <button
              onClick={() => setSearchQuery("")}
              className="text-purple-500 hover:underline font-medium text-[11px]"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}

        {/* LIST OF SECTIONS */}
        <div className="space-y-3">
          {filteredSections.length === 0 ? (
            <div className="p-8 text-center space-y-2 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-xl">
              <Search className="w-6 h-6 text-zinc-400 mx-auto" />
              <p className="text-xs text-zinc-500">
                Không tìm thấy mục nào khớp từ khóa "<b>{searchQuery}</b>" trong {activeStore.name}.
              </p>
            </div>
          ) : (
            filteredSections.map((section) => {
              const sectionDone = section.items.filter((i) => i.done).length;
              const isOpen = openSections.has(section.id) || Boolean(searchQuery);

              return (
                <div
                  key={section.id}
                  className="border border-zinc-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-2xs"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full flex items-center justify-between gap-2 px-4 py-3 bg-zinc-50 dark:bg-zinc-900/60 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 transition-colors text-left"
                  >
                    <span className="flex items-center gap-2 text-xs font-bold text-zinc-800 dark:text-zinc-200">
                      {isOpen ? (
                        <ChevronDown className="w-3.5 h-3.5 shrink-0 text-zinc-400" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-zinc-400" />
                      )}
                      {section.title}
                    </span>
                    <Badge
                      variant="outline"
                      className={cn(
                        "text-[10px] font-mono shrink-0",
                        sectionDone === section.items.length
                          ? "border-emerald-500/30 text-emerald-600 bg-emerald-500/10"
                          : "border-zinc-300 dark:border-zinc-700 text-zinc-500",
                      )}
                    >
                      {sectionDone}/{section.items.length}
                    </Badge>
                  </button>

                  {isOpen && (
                    <div className="px-4 py-3 space-y-3 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800/60">
                      {section.items.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 p-3 rounded-lg border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-900/40 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors"
                        >
                          <div className="flex items-start gap-2.5 text-left flex-1">
                            {item.done ? (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            ) : (
                              <Circle className="w-4 h-4 text-zinc-300 dark:text-zinc-700 shrink-0 mt-0.5" />
                            )}
                            <div className="space-y-1">
                              <span
                                className={cn(
                                  "block text-xs leading-relaxed font-medium transition-colors",
                                  item.done
                                    ? "text-zinc-400 line-through"
                                    : "text-zinc-800 dark:text-zinc-200",
                                )}
                              >
                                {item.label}
                              </span>
                              <span className="block text-[11px] text-purple-600/90 dark:text-purple-400/90 font-mono">
                                → {item.howTo}
                              </span>
                            </div>
                          </div>

                          {/* PREVIEW CONTENT BUTTON */}
                          {item.previewContent && (
                            <button
                              onClick={() => setPreviewItem(item)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20 border border-purple-500/20 transition-all shrink-0 cursor-pointer self-start"
                            >
                              <FileText className="w-3.5 h-3.5" />
                              <span>Preview Nội dung</span>
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </Card>

      {/* CONTENT PREVIEW MODAL / DRAWER */}
      {previewItem && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="p-5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/80">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center font-bold">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <Badge variant="outline" className="text-[9px] font-mono uppercase text-purple-500 border-purple-500/30">
                    Preview Nội Dung ({previewItem.id}) · {activeStore.name}
                  </Badge>
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mt-0.5">
                    {previewItem.previewTitle || previewItem.label}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setPreviewItem(null)}
                className="w-8 h-8 rounded-full bg-zinc-200/60 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 flex items-center justify-center text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Markdown Body */}
            <div className="p-6 overflow-y-auto flex-1 space-y-4">
              <div className="prose dark:prose-invert max-w-none text-xs leading-relaxed font-sans text-zinc-700 dark:text-zinc-300">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {previewItem.previewContent || ""}
                </ReactMarkdown>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/80 flex items-center justify-between text-xs">
              <span className="text-zinc-500 text-[11px]">
                Nội dung thực tế từ {activeStore.name}
              </span>
              <button
                onClick={() => setPreviewItem(null)}
                className="px-4 py-2 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 rounded-lg font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Đóng Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
