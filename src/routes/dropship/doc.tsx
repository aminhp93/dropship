import { createFileRoute, Outlet, Link, useLocation } from "@tanstack/react-router";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bot, FlaskConical, Target, Sparkles, Video, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dropship/doc")({
  component: DocLayout,
});

const DOC_TABS = [
  { to: "/dropship/doc/ai-agent", label: "AI Agents", icon: Bot },
  { to: "/dropship/doc/lab", label: "Product Lab", icon: FlaskConical },
  { to: "/dropship/doc/research", label: "Market Research", icon: Target },
  { to: "/dropship/doc/quy-trinh-2026", label: "Quy trình 2026", icon: Sparkles },
  { to: "/dropship/doc/reading", label: "Blog Linh Thạch", icon: Video },
];

export function DocLayout() {
  const location = useLocation();

  return (
    <ScrollArea className="h-full">
      <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Documentation & Tools
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Dropship — Documentation & AI Worksheets
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Tổng hợp quy trình, công cụ đánh giá sản phẩm, nghiên cứu thị trường và cẩm nang thực chiến.
          </p>
        </div>

        {/* Sub-route Tab Links inside Doc */}
        <div className="flex items-center gap-1.5 flex-wrap p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
          {DOC_TABS.map((tab) => {
            const isActive = location.pathname.startsWith(tab.to);

            return (
              <Link
                key={tab.to}
                to={tab.to}
                className={cn(
                  "flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all",
                  isActive
                    ? "bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs border border-zinc-200/80 dark:border-zinc-700/60 font-bold"
                    : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/40",
                )}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </Link>
            );
          })}
        </div>

        {/* Sub-route Outlet Content */}
        <div className="pt-2">
          <Outlet />
        </div>
      </div>
    </ScrollArea>
  );
}
