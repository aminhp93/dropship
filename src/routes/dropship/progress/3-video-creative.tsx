import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HOME_PROGRESS_TABS } from "@/features/dropshipping/data/home-progress-data";

export const Route = createFileRoute("/dropship/progress/3-video-creative")({
  component: VideoCreativeTabRoute,
});

const getTab = (id: string) => HOME_PROGRESS_TABS.find((t) => t.id === id);

const VIDEO_DRAFT_FLOW = [
  {
    step: 1,
    label: "Chọn angle",
    detail:
      "Dùng creative-ugc-director chọn 1 góc (pain point/before-after/demo) cho fairy lights — sản phẩm thật đã chốt, không phải video mẫu đang clone thử.",
  },
  {
    step: 2,
    label: "Viết hook 3 giây + script ngắn",
    detail:
      "Không cần AI voice ngay — quay mặt/tay cầm sản phẩm bằng điện thoại trước, theo đúng khuyến nghị hiện có ở phần Video AI bên dưới.",
  },
  {
    step: 3,
    label: "Quay 12-20 giây",
    detail: "Ánh sáng tự nhiên, không cần dựng cầu kỳ — ưu tiên ra video thật hơn video đẹp.",
  },
  {
    step: 4,
    label: "Edit CapCut cơ bản",
    detail:
      "Cắt, caption tự động, nhạc nền — hoãn bước AI voice clone (giọng Adam) tới khi có vài video organic đơn giản trước.",
  },
  {
    step: 5,
    label: "Đăng + log kết quả",
    detail:
      "Đăng TikTok, ghi view/like/comment vào phần Market Research để đối chiếu tín hiệu Gate B.",
  },
];

function MarkdownCard({ tabId }: { tabId: string }) {
  const tab = getTab(tabId);
  if (!tab) return null;
  return (
    <Card className="p-6 sm:p-8 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl shadow-2xs">
      <p className="text-[10px] font-mono text-zinc-400 mb-4">{tab.sourcePath}</p>
      <div className="prose dark:prose-invert max-w-none text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{tab.markdown}</ReactMarkdown>
      </div>
    </Card>
  );
}

export function VideoCreativeTabRoute() {
  return (
    <div className="space-y-6">
      <Card className="p-5 border-amber-500/20 bg-amber-500/5 space-y-3">
        <h3 className="text-xs font-bold uppercase text-amber-700 dark:text-amber-500">
          Draft flow (chưa có flow hoàn chỉnh — bản nháp đầu tiên)
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
