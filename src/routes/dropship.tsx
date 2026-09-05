import {
  createFileRoute,
  Outlet,
  Link,
  useLocation,
} from "@tanstack/react-router";
import { Radar, ListChecks, BookOpen, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dropship")({
  component: DropshipLayout,
});

export function DropshipLayout() {
  const location = useLocation();

  // "Dashboard (Buổi 4)" cũ gây hiểu nhầm là trang theo dõi tiến độ store của
  // mình. Thực chất đó là tool quét store đối thủ + gen ảnh + đăng bài, không
  // đọc dữ liệu store thật (Apex/Snuglet) lần nào. Tiến độ store nằm ở Progress.
  const navItems = [
    { to: "/dropship/progress", label: "Progress", icon: ListChecks },
    { to: "/dropship/dashboard", label: "Tool: Quét đối thủ", icon: Radar },
    { to: "/dropship/tools", label: "Tools", icon: Wrench },
    { to: "/dropship/doc", label: "Doc", icon: BookOpen },
  ];

  return (
    <div className="flex flex-col h-full bg-zinc-50 dark:bg-zinc-950 font-sans">
      <header className="h-14 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center px-6 shrink-0 z-10 justify-between">
        <div className="flex items-center gap-6 overflow-x-auto py-2 scrollbar-none">
          <nav className="flex items-center gap-2 shrink-0">
            {navItems.map((item) => {
              const isActive = location.pathname.startsWith(item.to);

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex items-center gap-2 px-4 py-1.5 rounded-lg text-xs transition-all whitespace-nowrap font-medium",
                    isActive
                      ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-bold shadow-xs"
                      : "text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800/60",
                  )}
                >
                  <item.icon className="w-4 h-4" />
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
