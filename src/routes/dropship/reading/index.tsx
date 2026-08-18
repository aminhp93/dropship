import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Clock, ExternalLink, Search, Video } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  readings,
  slugify,
} from "@/features/dropshipping/data/linhthach-reading-data";

export const Route = createFileRoute("/dropship/reading/")({
  component: ReadingListPage,
});

export function ReadingListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const filteredReadings = useMemo(() => {
    if (!searchTerm.trim()) return readings;
    const term = searchTerm.toLowerCase();
    return readings.filter(
      (r) =>
        r.title.toLowerCase().includes(term) ||
        r.note.toLowerCase().includes(term) ||
        r.num.includes(term),
    );
  }, [searchTerm]);

  const active = filteredReadings[activeIndex] || filteredReadings[0] || readings[0];

  return (
    <ScrollArea className="h-full">
      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700 font-semibold text-[10px]">
                179 Bài Học
              </Badge>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <Video className="w-5 h-5 text-zinc-700 dark:text-zinc-300" />
              Blog Linh Thạch
            </h1>
            <p className="text-xs text-zinc-500 leading-relaxed max-w-2xl">
              Tổng hợp 179 bài học & video cẩm nang thực chiến Dropshipping của Linh Thạch (sắp xếp theo thứ tự từ cũ đến mới).
            </p>
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm bài học / video..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setActiveIndex(0);
              }}
              className="w-full text-xs pl-9 pr-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg bg-white dark:bg-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:border-zinc-400 dark:focus:border-zinc-500 transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-8 items-start">
          <Card className="p-4 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl space-y-3 shadow-2xs">
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 px-2 flex justify-between items-center">
              <span>Danh sách bài học</span>
              <span className="font-mono text-zinc-700 dark:text-zinc-300 font-semibold">
                {filteredReadings.length} bài
              </span>
            </div>

            <ScrollArea className="h-[calc(100vh-280px)] pr-2">
              <div className="space-y-1">
                {filteredReadings.map((r, i) => (
                  <button
                    key={r.num}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      "w-full text-left px-3 py-2.5 rounded-lg transition-all flex flex-col gap-0.5 border cursor-pointer",
                      i === activeIndex
                        ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 border-zinc-900 dark:border-zinc-100 font-semibold"
                        : "border-transparent text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800/60 hover:text-zinc-900 dark:hover:text-zinc-100",
                    )}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold tracking-widest opacity-70">
                        READING {r.num}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 opacity-80">
                        {r.duration}
                      </span>
                    </div>
                    <span className="text-xs leading-snug line-clamp-2">
                      {r.title}
                    </span>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </Card>

          {active && (
            <Card className="p-8 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xs space-y-8 rounded-xl">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
                  <Badge
                    variant="outline"
                    className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700 font-semibold"
                  >
                    Reading {active.num}
                  </Badge>
                  <span className="text-zinc-300 dark:text-zinc-700">·</span>
                  <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                    Kênh {active.channel}
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700">·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-zinc-400" /> {active.duration}
                  </span>
                  <span className="text-zinc-300 dark:text-zinc-700">·</span>
                  <a
                    href={active.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 hover:underline font-semibold"
                  >
                    Xem nguồn gốc <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 leading-snug">
                  <Link
                    to="/dropship/reading/$slug"
                    params={{ slug: slugify(active.title) }}
                    className="hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span>{active.title}</span>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-purple-500 shrink-0" />
                  </Link>
                </h2>

                <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed bg-zinc-50 dark:bg-zinc-800/50 border-l-3 border-purple-500 rounded-r-lg px-4 py-3">
                  {active.note}
                </div>
              </div>

              <div className="space-y-0">
                <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                  Tóm tắt theo mốc thời gian
                </div>
                {active.chapters.map((c) => (
                  <div
                    key={c.time}
                    className="grid grid-cols-1 sm:grid-cols-[80px_minmax(0,1fr)] gap-4 py-5 border-b border-zinc-100 dark:border-zinc-800 last:border-none"
                  >
                    <time className="text-[11px] font-mono font-bold text-purple-600 dark:text-purple-400 pt-0.5 tabular-nums">
                      {c.time}
                    </time>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-sm text-zinc-800 dark:text-zinc-200">
                        {c.heading}
                      </h3>
                      {c.body.map((p, idx) => (
                        <p
                          key={idx}
                          className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-[64ch]"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-zinc-500">
                  Bấm vào tiêu đề bài viết để tới trang chi tiết đầy đủ với video player.
                </span>
                <Link
                  to="/dropship/reading/$slug"
                  params={{ slug: slugify(active.title) }}
                  className="font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                >
                  Xem trang chi tiết bài học →
                </Link>
              </div>
            </Card>
          )}
        </div>
      </div>
    </ScrollArea>
  );
}
