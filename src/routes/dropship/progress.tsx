import { createFileRoute, Outlet, Link, useLocation } from "@tanstack/react-router";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ListChecks, Target, ShoppingBag, Video } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dropship/progress")({
  component: ProgressLayout,
});

const PROGRESS_TABS = [
  { to: "/dropship/progress/0-timeline", label: "0. Timeline", icon: ListChecks },
  { to: "/dropship/progress/1-market-research", label: "1. Market Research", icon: Target },
  { to: "/dropship/progress/2-store", label: "2. Store Shopify", icon: ShoppingBag },
  { to: "/dropship/progress/3-video-creative", label: "3. Video Creative", icon: Video },
];

export function ProgressLayout() {
  const location = useLocation();

  return (
    <ScrollArea className="h-full">
      <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-6">
        {/* Sub-route Tab Links */}
        <div className="flex items-center gap-1.5 flex-wrap p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
          {PROGRESS_TABS.map((tab) => {
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
        <div className="pt-1">
          <Outlet />
        </div>
      </div>
    </ScrollArea>
  );
}
