import { Link } from "@tanstack/react-router";
import { Globe, BookOpen, Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-50 flex items-center justify-between px-6">
      <div className="flex items-center gap-6">
        <Link to="/" className="flex items-center gap-2 text-white font-semibold text-base tracking-tight hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Globe className="w-4 h-4" />
          </div>
          <span>Dropship<span className="font-light text-zinc-400">HQ</span></span>
        </Link>

        <nav className="flex items-center gap-1">
          <Link
            to="/"
            activeProps={{ className: "bg-zinc-800 text-white font-medium" }}
            inactiveProps={{ className: "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900" }}
            activeOptions={{ exact: true }}
            className="px-3.5 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-2"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Playbook
          </Link>

          <Link
            to="/reading"
            activeProps={{ className: "bg-zinc-800 text-white font-medium" }}
            inactiveProps={{ className: "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900" }}
            className="px-3.5 py-1.5 rounded-lg text-xs transition-colors flex items-center gap-2"
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            Cẩm Nang Linh Thạch
          </Link>
        </nav>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-mono border border-zinc-800 px-2.5 py-1 rounded-full">
          Standalone App
        </span>
      </div>
    </header>
  );
}
