import {
  createFileRoute,
  Outlet,
  Link,
  useLocation,
} from "@tanstack/react-router";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Image as ImageIcon, Video, Store } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dropship/tools")({
  component: ToolsLayout,
});

const TOOLS_TABS = [
  { to: "/dropship/tools/1-image", label: "1. Ảnh", icon: ImageIcon },
  { to: "/dropship/tools/2-video", label: "2. Video", icon: Video },
  { to: "/dropship/tools/3-store", label: "3. Store", icon: Store },
];

export function ToolsLayout() {
  const location = useLocation();

  return (
    <ScrollArea className="h-full">
      <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-6">
        {/* Sub-route Tab Links */}
        <div className="flex items-center gap-1.5 flex-wrap p-1.5 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
          {TOOLS_TABS.map((tab) => {
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
