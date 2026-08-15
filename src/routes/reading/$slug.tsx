import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  BookOpen,
  Clock,
  ExternalLink,
  Quote,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  readings,
  slugify,
  type Reading,
} from "@/features/dropshipping/data/linhthach-reading-data";

export const Route = createFileRoute("/reading/$slug")({
  component: ReadingDetailPage,
});

function getYouTubeId(url: string): string | null {
  const match = url.match(/(?:v=|\/embed\/|\/watch\?v=)([^#&?]*)/);
  return match && match[1].length === 11 ? match[1] : null;
}

function ReadingDetailPage() {
  const { slug } = Route.useParams();
  const [showEmbed, setShowEmbed] = useState(false);

  // Find item by slug or by number
  const activeIndex = readings.findIndex(
    (r) => slugify(r.title) === slug || r.num === slug,
  );
  const active: Reading = readings[activeIndex !== -1 ? activeIndex : 0];
  const ytId = getYouTubeId(active.url);

  const prevItem = activeIndex > 0 ? readings[activeIndex - 1] : null;
  const nextItem =
    activeIndex < readings.length - 1 ? readings[activeIndex + 1] : null;

  return (
    <ScrollArea className="h-full">
      <div className="p-8 max-w-5xl mx-auto space-y-6">
        {/* Navigation Top */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại Blog Linh Thạch
          </Link>
          <div className="flex items-center gap-2">
            {prevItem && (
              <Link
                to="/reading/$slug"
                params={{ slug: slugify(prevItem.title) }}
                className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-purple-600 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Bài trước
              </Link>
            )}
            {nextItem && (
              <Link
                to="/reading/$slug"
                params={{ slug: slugify(nextItem.title) }}
                className="inline-flex items-center gap-1 text-xs font-medium text-zinc-500 hover:text-purple-600 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 transition-colors"
              >
                Bài tiếp <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </div>
        </div>

        {/* Main Card */}
        <Card className="p-8 border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
              <Badge
                variant="outline"
                className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 font-bold"
              >
                READING {active.num}
              </Badge>
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
              <span className="font-semibold text-zinc-700 dark:text-zinc-300">
                Kênh {active.channel}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-zinc-400" /> {active.duration}
              </span>
              <span className="text-zinc-300 dark:text-zinc-700">·</span>
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-purple-600 dark:text-purple-400 hover:underline font-semibold"
              >
                Xem video gốc trên YouTube <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100 leading-snug">
              {active.title}
            </h1>

            <div className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed bg-zinc-50 dark:bg-zinc-800/50 border-l-3 border-purple-500 rounded-r-lg px-4 py-3">
              {active.note}
            </div>
          </div>

          {/* YouTube Video Player Embed / Banner */}
          {ytId && (
            <div className="rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-black aspect-video relative shadow-md">
              {showEmbed ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${ytId}?autoplay=1`}
                  title={active.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              ) : (
                <div className="w-full h-full relative flex flex-col items-center justify-center bg-zinc-950 text-white p-6 group">
                  <img
                    src={`https://i.ytimg.com/vi/${ytId}/hqdefault.jpg`}
                    alt={active.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
                  <button
                    onClick={() => setShowEmbed(true)}
                    className="relative z-10 w-16 h-16 rounded-full bg-purple-600 hover:bg-purple-500 text-white flex items-center justify-center shadow-xl transition-transform transform group-hover:scale-110 cursor-pointer"
                  >
                    <Play className="w-7 h-7 fill-current ml-1" />
                  </button>
                  <span className="relative z-10 text-xs font-bold mt-3 text-zinc-200">
                    Phát Video YouTube ({active.duration})
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Time-stamped Chapters */}
          <div className="space-y-0 pt-2">
            <div className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 pb-3 border-b border-zinc-100 dark:border-zinc-800 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-purple-500" />
              Tóm tắt theo mốc thời gian
            </div>
            {active.chapters.map((c) => (
              <div
                key={c.time}
                className="grid grid-cols-1 sm:grid-cols-[90px_minmax(0,1fr)] gap-4 py-5 border-b border-zinc-100 dark:border-zinc-800 last:border-none"
              >
                <time className="text-[11px] font-mono font-bold text-purple-600 dark:text-purple-400 pt-0.5 tabular-nums">
                  {c.time}
                </time>
                <div className="space-y-2">
                  <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-200">
                    {c.heading}
                  </h3>
                  {c.body.map((p, idx) => (
                    <p
                      key={idx}
                      className="text-xs leading-relaxed text-zinc-600 dark:text-zinc-300 max-w-[68ch]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Quote Section */}
          {active.quote && (
            <div className="rounded-xl bg-purple-500/5 border border-purple-500/20 p-6 space-y-2">
              <Quote className="w-5 h-5 text-purple-500" />
              <p className="text-base italic text-purple-700 dark:text-purple-300 leading-snug font-medium">
                "{active.quote.text}"
              </p>
              <Badge
                variant="outline"
                className="text-[9px] font-bold uppercase tracking-widest border-purple-200 text-purple-600 dark:text-purple-400"
              >
                {active.quote.cite}
              </Badge>
            </div>
          )}

          {/* Bottom Footer Navigation */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800 text-xs text-zinc-500">
            <Link
              to="/"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Quay lại danh sách Blog Linh Thạch
            </Link>
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 truncate max-w-[280px]"
            >
              {active.url}
            </a>
          </div>
        </Card>
      </div>
    </ScrollArea>
  );
}
