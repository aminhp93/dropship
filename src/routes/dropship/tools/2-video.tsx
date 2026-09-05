import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { PromptBlock } from "@/features/dropshipping/components/PromptBlock";
import {
  Clapperboard,
  Film,
  ListOrdered,
  ThumbsUp,
  ThumbsDown,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const Route = createFileRoute("/dropship/tools/2-video")({
  component: VideoToolPage,
});

const USE_CASES = [
  "Video preview sản phẩm ngắn (15-30s) cho trang sản phẩm hoặc đăng organic TikTok/Reels.",
  "Video quảng cáo trả phí (ads creative) — nhiều độ dài khác nhau cho từng vị trí/đối tượng.",
  "Video demo hướng dẫn sử dụng sản phẩm.",
  "Video UGC-style testimonial — CHỈ khi có khách hàng thật đồng ý quay, không dàn dựng giả.",
  "Dựng video từ ảnh tĩnh khi chưa có cảnh quay thật (dùng HyperFrames, như video 15s Snuglet hiện tại).",
];

const TOOLS_RECOMMENDED = [
  {
    need: "Dựng slideshow/video từ ảnh tĩnh",
    tools: "HyperFrames (skill nội bộ đã dùng cho video 15s Snuglet)",
    note: "Ưu tiên dùng tiếp vì đã có sẵn quy trình, xuất đúng 1080×1920.",
  },
  {
    need: "Cắt/ghép clip quay tay, thêm caption tự động",
    tools: "CapCut",
    note: "Free, có mobile + desktop, nhiều template hook sẵn cho TikTok/Reels.",
  },
  {
    need: "Avatar AI nói + voice-over không cần quay người thật",
    tools: "HeyGen",
    note: "Đã có sẵn trong quy trình nhưng đang kẹt ở bước cài/đăng nhập CLI — cần xử lý riêng.",
  },
  {
    need: "Text-to-speech cho voice-over",
    tools: "ElevenLabs hoặc TTS tích hợp HeyGen",
    note: "Dùng khi không có giọng đọc thật, phải nghe thử trước khi chốt giọng cuối.",
  },
];

const SCRIPT_STRUCTURE = [
  { step: "0-3s", label: "Hook", detail: "Nêu đúng pain point thật của khách hàng ngay lập tức, không cường điệu. 3 giây đầu phải hiểu được dù tắt tiếng (auto-play im lặng)." },
  { step: "3-8s", label: "Vấn đề", detail: "Mô tả cụ thể nỗi đau/tình huống thật, để khách thấy mình trong đó." },
  { step: "8-18s", label: "Giải pháp", detail: "Giới thiệu sản phẩm + cách dùng, tập trung công dụng thật đã verify (không claim quá đà)." },
  { step: "18-25s", label: "Bằng chứng", detail: "Thông số kỹ thuật thật hoặc demo trực tiếp. KHÔNG bịa review/testimonial nếu chưa có khách hàng thật." },
  { step: "25-30s", label: "CTA", detail: "Lời kêu gọi rõ ràng, ngắn gọn (xem sản phẩm / mua ngay / đăng ký ưu đãi thật)." },
];

const GOOD_ANGLES = [
  "Pain-point thật dẫn dắt (hook đúng nỗi đau, không phóng đại).",
  "So sánh trước/sau CHỈ với dữ liệu/hình ảnh có thật.",
  "Giáo dục (vd: '3 dấu hiệu mọc răng cha mẹ nên biết') để build trust, không kèm claim y khoa vô căn cứ.",
  "Unboxing/demo sản phẩm thật, quay đúng những gì khách nhận được.",
  "Câu chuyện thương hiệu thật (vì sao chọn ngách/sản phẩm này).",
];

const BAD_PATTERNS = [
  "Claim y khoa không có nguồn (vd: 'nhắm đúng dây thần kinh sinh ba') — rủi ro pháp lý thật.",
  "Mượn uy tín y khoa qua hình ảnh (áo choàng trắng, danh xưng 'Dr.') mà không có bằng cấp xác thực đi kèm.",
  "Review/testimonial tự soạn đưa thẳng vào copy quảng cáo mà không phải khách hàng thật.",
  "Ưu đãi 'kết thúc hôm nay' lặp lại nhiều tháng liền — fake urgency dễ bị phát hiện và mất uy tín dài hạn.",
];

const REQUIREMENTS = [
  "Độ phân giải tối thiểu 1080×1920 (dọc) cho social ads/organic.",
  "Format MP4, codec H.264 để tương thích mọi nền tảng.",
  "Có caption/phụ đề cứng — nhiều người xem tắt tiếng khi lướt feed.",
  "3 giây đầu phải truyền được thông điệp chính dù không có âm thanh.",
  "Xuất thêm bản 1:1 (feed) và 16:9 (YouTube/website) nếu cần đăng đa nền tảng.",
  "Logo/watermark thương hiệu ở góc nếu dự định repost nhiều nơi.",
];

export function VideoToolPage() {
  return (
    <div className="space-y-6">
      <Card className="p-5 border-sky-500/20 bg-sky-500/5 space-y-2">
        <h3 className="text-xs font-bold uppercase text-sky-700 dark:text-sky-400">
          Hướng dẫn dùng — chưa phải tool code riêng
        </h3>
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          Tổng hợp cấu trúc kịch bản + công cụ dựng video + bài học rút ra từ
          phân tích creative đối thủ (CopaCalmer, xem doc "Snuglet vs
          CopaCalmer") để áp dụng cho bất kỳ sản phẩm nào, không riêng
          Snuglet.
        </p>
      </Card>

      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2">
          <Clapperboard className="w-4 h-4 text-zinc-500" />
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Khi nào cần
          </h2>
        </div>
        <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 list-disc pl-4">
          {USE_CASES.map((u) => (
            <li key={u}>{u}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2">
          <Film className="w-4 h-4 text-zinc-500" />
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Công cụ đề xuất theo nhu cầu
          </h2>
        </div>
        <div className="space-y-2.5">
          {TOOLS_RECOMMENDED.map((t) => (
            <div
              key={t.need}
              className="p-3 rounded-lg bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80"
            >
              <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                {t.need}
              </p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5">
                <span className="font-semibold text-zinc-600 dark:text-zinc-300">
                  Công cụ:
                </span>{" "}
                {t.tools}
              </p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                {t.note}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2">
          <ListOrdered className="w-4 h-4 text-zinc-500" />
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Cấu trúc kịch bản chuẩn (30s, co giãn được cho 15s/60s)
          </h2>
        </div>
        <div className="space-y-2.5">
          {SCRIPT_STRUCTURE.map((s) => (
            <div key={s.step} className="flex items-start gap-3">
              <span className="text-[10px] font-mono font-bold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 px-2 py-1 rounded-md shrink-0 mt-0.5">
                {s.step}
              </span>
              <div>
                <span className="text-xs font-bold text-zinc-900 dark:text-white">
                  {s.label}
                </span>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  {s.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Card className="p-5 border-emerald-500/20 bg-emerald-500/5 space-y-3">
          <div className="flex items-center gap-2">
            <ThumbsUp className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
            <h3 className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-500">
              Angle nên dùng
            </h3>
          </div>
          <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 list-disc pl-4">
            {GOOD_ANGLES.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Card>

        <Card className="p-5 border-red-500/20 bg-red-500/5 space-y-3">
          <div className="flex items-center gap-2">
            <ThumbsDown className="w-4 h-4 text-red-600 dark:text-red-500" />
            <h3 className="text-xs font-bold uppercase text-red-700 dark:text-red-500">
              Pattern KHÔNG nên học (từ CopaCalmer)
            </h3>
          </div>
          <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 list-disc pl-4">
            {BAD_PATTERNS.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </Card>
      </div>

      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-4">
        <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
          Prompt mẫu — nhờ AI viết kịch bản
        </h2>
        <PromptBlock
          title="Prompt viết script quảng cáo 30s"
          prompt={`Viết kịch bản video quảng cáo dài 30 giây cho sản phẩm [tên sản phẩm, mô tả ngắn], đối tượng khách hàng là [chân dung khách hàng]. Cấu trúc bắt buộc:
(1) Hook 3 giây nêu đúng pain point thật, không cường điệu;
(2) Mô tả vấn đề 5-7 giây;
(3) Giới thiệu giải pháp/cách dùng sản phẩm 10-12 giây;
(4) Bằng chứng cụ thể — thông số kỹ thuật thật hoặc demo, KHÔNG bịa review/testimonial nếu chưa có khách hàng thật;
(5) CTA rõ ràng 3-5 giây cuối.
Giọng văn chân thực, gần gũi. Không dùng claim y khoa không có nguồn, không dùng ưu đãi "kết thúc hôm nay" nếu ưu đãi đó không thật sự giới hạn thời gian.`}
        />
      </Card>

      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-zinc-500" />
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Yêu cầu kỹ thuật
          </h2>
        </div>
        <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 list-disc pl-4">
          {REQUIREMENTS.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </Card>

      <Card className="p-5 border-amber-500/20 bg-amber-500/5 space-y-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-500" />
          <h3 className="text-xs font-bold uppercase text-amber-700 dark:text-amber-500">
            Data Honesty — bắt buộc
          </h3>
        </div>
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          Nếu video dựng từ ảnh tĩnh (không phải quay thật) hoặc dùng avatar
          AI/voice AI, phải ghi rõ trong tài liệu tracking nội bộ. Không bịa
          testimonial khách hàng nếu chưa có review thật — đúng nguyên tắc đã
          giữ cho video 15s Snuglet hiện tại (chưa có testimonial vì chưa có
          khách hàng thật).
        </p>
      </Card>
    </div>
  );
}
