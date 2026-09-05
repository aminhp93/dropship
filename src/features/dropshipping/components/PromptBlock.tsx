import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function PromptBlock({
  title,
  prompt,
}: Readonly<{ title: string; prompt: string }>) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between gap-2">
        <span className="text-[11px] font-bold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide">
          {title}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-1 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-colors shrink-0"
        >
          {copied ? (
            <Check className="w-3 h-3 text-emerald-300" />
          ) : (
            <Copy className="w-3 h-3" />
          )}
          {copied ? "Đã copy!" : "Copy"}
        </button>
      </div>
      <pre className="p-3.5 bg-zinc-950 rounded-xl border border-zinc-800 text-xs text-zinc-300 font-mono whitespace-pre-wrap leading-relaxed overflow-x-auto">
        {prompt}
      </pre>
    </div>
  );
}
