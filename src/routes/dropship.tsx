import { createFileRoute, Outlet, Link, useLocation } from "@tanstack/react-router";
import { Sparkles, Video } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dropship")({
  component: DropshipLayout,
});

export function DropshipLayout() {
  const location = useLocation();

  const navItems = [
    { to: "/dropship/quy-trinh-2026", label: "Quy trình 2026", icon: Sparkles },
    { to: "/dropship/reading", label: "Blog Linh Thạch", icon: Video },
  ];

  return (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-zinc-950 font-sans">
      <header className="h-14 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center px-6 shrink-0 z-10 justify-between">
        <div className="flex items-center gap-6 overflow-x-auto py-2 scrollbar-none">
          <nav className="flex items-center gap-1 shrink-0">
            {navItems.map((item) => {
              const isActive = item.exact
                ? location.pathname === item.to || location.pathname === "/dropship/" || location.pathname === "/dropship"
                : location.pathname.startsWith(item.to);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap",
                    isActive
                      ? "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 shadow-2xs"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  )}
                >
                  <item.icon className="w-3.5 h-3.5" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
      <main className="flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
}
