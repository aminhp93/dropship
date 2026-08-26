import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HOME_PROGRESS_TABS } from "@/features/dropshipping/data/home-progress-data";

export const Route = createFileRoute("/dropship/progress/0-timeline")({
  component: TimelineTabRoute,
});

const getTab = (id: string) => HOME_PROGRESS_TABS.find((t) => t.id === id);

function MarkdownCard({ tabId }: { tabId: string }) {
  const tab = getTab(tabId);
  if (!tab) return null;
  return (
    <Card className="p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl shadow-2xs">
      <p className="text-[10px] font-mono text-zinc-400 mb-4">{tab.sourcePath}</p>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: ({ node, ...props }) => (
              <a {...props} target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-700 font-medium" />
            ),
          }}
        >
          {tab.markdown}
        </ReactMarkdown>
    </Card>
  );
}

export function TimelineTabRoute() {
  return (
    <div className="space-y-6">
      <MarkdownCard tabId="timeline" />
      <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <h3 className="text-sm font-bold text-zinc-900 dark:text-white mb-3">
          Lý thuyết nền — buổi học Ngô Thành Ecom
        </h3>
        <MarkdownCard tabId="theory" />
      </div>
    </div>
  );
}
