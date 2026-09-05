import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { PromptBlock } from "@/features/dropshipping/components/PromptBlock";
import {
  ImagePlus,
  Eraser,
  Wand2,
  Megaphone,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

export const Route = createFileRoute("/dropship/tools/1-image")({
  component: ImageToolPage,
});

const USE_CASES = [
  "Ảnh gốc từ supplier (Alibaba/Made-in-China) — cần xoá watermark/chữ overlay tiếng Trung trước khi dùng.",
  "Ảnh sản phẩm chính trên Shopify (product photo) — nền sạch, đúng tỷ lệ.",
  "Ảnh banner collection / hero trang chủ — tỷ lệ rộng, chừa khoảng trống cho text đè lên.",
  "Ảnh quảng cáo tĩnh (ads creative) — thêm text overlay, badge giá/khuyến mãi.",
  "Ảnh social (Instagram post 1:1, Story/Reels cover 9:16).",
  "Ảnh lifestyle minh hoạ khi CHƯA có ảnh thật — chỉ dùng tạm, phải note rõ là ảnh AI (xem cảnh báo Data Honesty bên dưới).",
];

const TOOLS_RECOMMENDED = [
  {
    need: "Xoá nền / cắt nền trong suốt",
    tools: "remove.bg, Photoroom, Canva Background Remover",
    note: "Dùng khi cần nền trắng/trong suốt chuẩn cho product photo.",
  },
  {
    need: "Xoá watermark / chữ overlay supplier",
    tools: "Adobe Firefly Generative Fill, Clipdrop Cleanup, Photoshop generative fill",
    note: "Xem prompt inpaint mẫu bên dưới — mô tả rõ vùng cần xoá, không tự vẽ thêm chi tiết mới.",
  },
  {
    need: "Upscale ảnh chất lượng thấp từ supplier",
    tools: "Topaz Gigapixel, Real-ESRGAN (chạy local, miễn phí)",
    note: "Ảnh supplier thường độ phân giải thấp — upscale trước khi dùng làm hero shot.",
  },
  {
    need: "Resize/crop hàng loạt đúng tỷ lệ Shopify",
    tools: "Canva bulk resize, hoặc script ImageMagick/Python Pillow nếu cần tự động hoá nhiều ảnh cùng lúc",
    note: "Giữ tỷ lệ nhất quán trong cùng 1 collection (tất cả 1:1 hoặc tất cả 4:5).",
  },
  {
    need: "Nén ảnh trước khi upload",
    tools: "TinyPNG, Squoosh, hoặc sharp/cwebp qua code",
    note: "Mục tiêu <300-500KB/ảnh để không làm chậm tốc độ tải trang.",
  },
  {
    need: "Làm ảnh quảng cáo có text/badge",
    tools: "Canva template, Placeit mockup",
    note: "Dùng cho ads tĩnh trên Meta/TikTok, không dùng để bịa badge giảm giá giả.",
  },
];

const PHOTO_ANGLES = [
  { n: 1, label: "Hero shot", detail: "Sản phẩm chính diện, nền sạch, ảnh đại diện chính của listing." },
  { n: 2, label: "Cụm biến thể/màu", detail: "Nếu có nhiều màu/size — xếp cạnh nhau trong 1 ảnh để khách so sánh nhanh." },
  { n: 3, label: "Cận cảnh chất liệu", detail: "Zoom kết cấu bề mặt, chất liệu thật (vd: silicone đa kết cấu, mối hàn, bi lăn)." },
  { n: 4, label: "Lifestyle sử dụng thật", detail: "Ảnh thật đang dùng sản phẩm trong bối cảnh thực tế — ưu tiên ảnh thật hơn AI." },
  { n: 5, label: "Demo công dụng", detail: "Minh hoạ hành động cụ thể (vd: rửa nước, lăn lên da, gấp gọn) — chứng minh claim trên trang." },
  { n: 6, label: "Bảng thông số/spec", detail: "Kích thước, chất liệu, độ tuổi khuyến nghị — nếu supplier có sẵn, giữ nguyên số liệu thật." },
  { n: 7, label: "Ảnh trong hộp / unboxing", detail: "Liệt kê đầy đủ những gì khách nhận được, tránh kỳ vọng sai lệch." },
  { n: 8, label: "Scale reference", detail: "So sánh kích thước với vật quen thuộc (bàn tay, đồng xu) để khách hình dung đúng size." },
];

const REQUIREMENTS = [
  "Kích thước tối thiểu 800×800px, khuyến nghị ≥2048px để hỗ trợ zoom trên Shopify.",
  "Định dạng JPEG cho ảnh chụp thường, PNG nếu cần nền trong suốt.",
  "Dung lượng nén dưới 300-500KB/ảnh sau khi tối ưu.",
  "Tỷ lệ khung hình nhất quán trong cùng 1 collection (không trộn 1:1 với 4:5).",
  "Không còn watermark/logo bên thứ ba (supplier) trên bất kỳ ảnh nào trước khi đăng.",
  "Alt text mô tả đúng sản phẩm cho từng ảnh (hỗ trợ SEO + accessibility).",
];

export function ImageToolPage() {
  return (
    <div className="space-y-6">
      <Card className="p-5 border-sky-500/20 bg-sky-500/5 space-y-2">
        <h3 className="text-xs font-bold uppercase text-sky-700 dark:text-sky-400">
          Hướng dẫn dùng — chưa phải tool code riêng
        </h3>
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          Trang này tổng hợp công cụ có sẵn + prompt mẫu để tự làm ảnh cho từng
          mục đích, thay vì phải nhớ lại mỗi lần cần. Chưa build tool tự động —
          dùng như checklist/reference khi cần xử lý ảnh cho bất kỳ sản phẩm/
          store nào, không riêng Snuglet.
        </p>
      </Card>

      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2">
          <ImagePlus className="w-4 h-4 text-zinc-500" />
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
          <Wand2 className="w-4 h-4 text-zinc-500" />
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
          <Eraser className="w-4 h-4 text-zinc-500" />
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            8 góc ảnh chuẩn cho 1 sản phẩm
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {PHOTO_ANGLES.map((a) => (
            <div
              key={a.n}
              className="flex items-start gap-3 p-3 rounded-lg bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80"
            >
              <span className="w-5 h-5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                {a.n}
              </span>
              <div>
                <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                  {a.label}
                </p>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                  {a.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2">
          <Megaphone className="w-4 h-4 text-zinc-500" />
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Prompt AI mẫu (paste vào Midjourney/GPT Image/Gemini Image/Firefly)
          </h2>
        </div>

        <PromptBlock
          title="1. Nền trắng studio (hero shot)"
          prompt={`Professional e-commerce product photography of [mô tả ngắn sản phẩm], centered in frame, pure white seamless background (#FFFFFF), soft even studio lighting, no harsh shadows, sharp focus on product texture and material, square 1:1 aspect ratio, high resolution 2048x2048px, no text or watermark.`}
        />

        <PromptBlock
          title="2. Lifestyle minh hoạ (CHỈ khi chưa có ảnh thật — phải note rõ là ảnh AI)"
          prompt={`Warm, candid lifestyle photo of [mô tả ngữ cảnh sử dụng thật, vd: a baby around 6 months old happily using a soft textured teething toy], natural window lighting, softly blurred cozy home background, editorial parenting-blog photography style, realistic skin tones, no visible logos or text of unrelated brands, no medical props unless truthfully applicable.`}
        />

        <PromptBlock
          title="3. Inpaint — xoá watermark/chữ overlay của supplier"
          prompt={`Remove the [mô tả watermark/chữ, vd: Chinese text watermark and logo] in the [vị trí, vd: bottom-right corner] of this image. Fill the area naturally to match the surrounding background/material, keep the rest of the product completely unchanged, no new artifacts or added details.`}
        />

        <PromptBlock
          title="4. Ảnh quảng cáo tĩnh có text overlay"
          prompt={`Take this product photo and add a bold, readable text overlay saying "[headline ngắn, vd: BPA-Free & Freezer-Safe]" in the top third, using a clean sans-serif font, high contrast color against the background, leave the product fully visible, vertical 4:5 or 9:16 aspect ratio for social ads.`}
        />
      </Card>

      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-zinc-500" />
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Yêu cầu kỹ thuật trước khi upload
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
          Nếu dùng ảnh AI-generated (prompt #2 ở trên) vì chưa có ảnh thật:
          phải ghi rõ trong tài liệu tracking nội bộ (Google Doc/daily log)
          đây là ảnh AI, không phải ảnh thật của sản phẩm/khách hàng. Không
          để lẫn ảnh AI với ảnh thật mà không note — đúng nguyên tắc đã áp
          dụng xuyên suốt dự án (vd: ảnh Snuglet Teether Set đều là ảnh thật
          từ supplier Newsun, có dẫn nguồn).
        </p>
      </Card>
    </div>
  );
}
