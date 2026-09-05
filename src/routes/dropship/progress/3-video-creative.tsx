import { createFileRoute } from "@tanstack/react-router";
import type { ComponentProps } from "react";
import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HOME_PROGRESS_TABS } from "@/features/dropshipping/data/home-progress-data";

export const Route = createFileRoute("/dropship/progress/3-video-creative")({
  component: VideoCreativeTabRoute,
});

const getTab = (id: string) => HOME_PROGRESS_TABS.find((t) => t.id === id);

const MARKDOWN_COMPONENTS = {
  a: ({ node: _node, ...props }: ComponentProps<"a"> & { node?: unknown }) => (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-600 underline hover:text-red-700 font-medium"
    />
  ),
};

const VIDEO_DRAFT_FLOW = [
  {
    step: 1,
    label: "Khóa angle theo sản phẩm đã chốt",
    detail:
      "Sản phẩm chính đã chốt là Teething Toys (Snuglet). Ưu tiên angle sensory/cooling + BPA-free + giảm đau mọc răng, không quay lại flow fairy lights cũ.",
  },
  {
    step: 2,
    label: "Viết hook 3 giây + script 15s",
    detail:
      "Hook tập trung pain point thật của cha mẹ có bé mọc răng. Script ngắn theo nhịp video dọc đã dựng từ ảnh thật Newsun.",
  },
  {
    step: 3,
    label: "Asset trạng thái hiện tại",
    detail:
      "Đã có video preview 15s (1080x1920) dựng từ 6 ảnh thật sản phẩm. Chưa có bản quay tay UGC và chưa thêm nhạc nền.",
  },
  {
    step: 4,
    label: "Hoàn thiện bản đăng organic",
    detail:
      "Thêm nhạc nền, caption ngắn, CTA mềm (xem sản phẩm/đăng ký nhận ưu đãi). Hoãn voice-clone cho tới khi có tín hiệu organic đầu tiên.",
  },
  {
    step: 5,
    label: "Đăng + log tín hiệu",
    detail:
      "Đăng TikTok/Reels và log view/hold-rate/comment hỏi mua về tab Progress để đối chiếu Gate B (validate organic).",
  },
];

function MarkdownCard({ tabId }: Readonly<{ tabId: string }>) {
  const tab = getTab(tabId);
  if (!tab) return null;
  return (
    <Card className="p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl shadow-2xs">
      <p className="text-[10px] font-mono text-zinc-400 mb-4">
        {tab.sourcePath}
      </p>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={MARKDOWN_COMPONENTS}
      >
        {tab.markdown}
      </ReactMarkdown>
    </Card>
  );
}

export function VideoCreativeTabRoute() {
  return (
    <div className="space-y-6">
      <Card className="p-5 border-amber-500/20 bg-amber-500/5 space-y-3">
        <h3 className="text-xs font-bold uppercase text-amber-700 dark:text-amber-500">
          Video execution flow (Snuglet · Teething Toys)
        </h3>
        <div className="space-y-2.5">
          {VIDEO_DRAFT_FLOW.map((f) => (
            <div key={f.step} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                {f.step}
              </span>
              <div>
                <span className="text-xs font-bold text-zinc-900 dark:text-white">
                  {f.label}
                </span>
                <p className="text-xs text-zinc-500">{f.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
      <MarkdownCard tabId="video-ai" />
    </div>
  );
}
