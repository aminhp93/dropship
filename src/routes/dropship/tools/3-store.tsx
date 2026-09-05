import { createFileRoute } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { PromptBlock } from "@/features/dropshipping/components/PromptBlock";
import {
  Palette,
  ListChecks,
  ClipboardList,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

export const Route = createFileRoute("/dropship/tools/3-store")({
  component: StoreToolPage,
});

const THEME_DECISION = [
  {
    option: "A. Build custom theme",
    when: "Có >2 tuần thời gian dev, cần kiểm soát hoàn toàn UX (vd: sticky ATC + low-stock badge thật như Shrine Edit), sản phẩm/ngách cạnh tranh cao cần khác biệt hoá rõ.",
    risk: "Rủi ro bug thật chỉ phát hiện khi test live (đã gặp 2 lần ở Shrine Edit: CSS [hidden] bị đè, lỗi cú pháp Liquid) — cần checklist verify kỹ ở Bước 4.",
  },
  {
    option: "B. Mua/dùng theme có sẵn (Shopify Theme Store)",
    when: "Cần launch nhanh (<1 tuần), ngân sách theme ($150-350 one-time) rẻ hơn nhiều so với thời gian dev, chấp nhận customize trong giới hạn theme editor.",
    risk: "Đã qua Shopify review nên ổn định hơn, nhưng khó áp nguyên tắc riêng (vd: đối thủ CopaCalmer dùng thẳng Shrine PRO nhưng vẫn cài thêm Countdown Timer Bar giả — theme có sẵn không tự đảm bảo hướng đi trung thực).",
  },
];

const EDIT_VS_KEEP = {
  keep: [
    "Cấu trúc layout tổng thể của theme (trừ khi có lý do UX cụ thể).",
    "Cart/checkout flow chuẩn Shopify.",
    "Các trang ít lượt xem (search, 404) — không cần custom sâu.",
  ],
  edit: [
    "Brand color/font — đồng bộ nhận diện thương hiệu.",
    "Nội dung trang chủ (hero, value prop) — viết đúng theo sản phẩm thật, không giữ copy demo.",
    "Trang sản phẩm — mô tả/ảnh/variant đúng thật 100%.",
    "Trang pháp lý — brand name đúng, không còn placeholder ('Cửa hàng của tôi', '[INSERT ...]').",
  ],
};

const INFO_CHECKLIST = [
  "Brand identity: tên, tagline, bảng màu, logo/font.",
  "Sản phẩm: tên, mô tả thật, ảnh thật đã xử lý sạch, giá bán, SKU/variant.",
  "Nguồn hàng: supplier đã chốt, giá FOB, MOQ, thời gian ship ước tính — để tính COGS/margin TRƯỚC khi định giá bán.",
  "Vận hành: ngưỡng free-ship, thời gian xử lý đơn, khu vực ship (nội địa hay quốc tế).",
  "Pháp lý: tên đăng ký kinh doanh, địa chỉ, SĐT, mã số thuế (nếu có) — không để trống khi launch thật.",
  "Nội dung: đã có review thật chưa? Nếu chưa, không bịa — chờ có thật rồi mới thêm.",
  "Domain: dùng tạm *.myshopify.com hay đã mua domain riêng?",
];

const VERIFY_STATIC = [
  "shopify theme check (lint tự động) — bắt lỗi cú pháp cơ bản.",
  "Kiểm tra còn placeholder demo (tên brand mặc định, Lorem ipsum, [INSERT ...]) chưa thay hết.",
  "Kiểm tra trang pháp lý (Privacy/Refund/Shipping/Terms) đúng tên brand.",
];

const VERIFY_LIVE = [
  "Test trực tiếp trên browser: trang chủ, sản phẩm, giỏ hàng, checkout, search, 404.",
  "Test đổi trạng thái tồn kho (còn nhiều/còn ít/hết hàng) — xác nhận badge/nút hiển thị đúng logic (đây chính là loại bug đã gặp thật, static check không bắt được).",
  "Test responsive: mobile + desktop.",
  "Test toàn bộ link nav/footer không bị 404.",
  "Kiểm tra tốc độ tải trang (Shopify theme inspector / PageSpeed Insights).",
  "Kiểm tra SEO cơ bản: title tag, meta description, alt text ảnh.",
];

export function StoreToolPage() {
  return (
    <div className="space-y-6">
      <Card className="p-5 border-sky-500/20 bg-sky-500/5 space-y-2">
        <h3 className="text-xs font-bold uppercase text-sky-700 dark:text-sky-400">
          Quy trình tham khảo — chưa phải tool tự động
        </h3>
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          Trả lời trực tiếp 4 câu hỏi đã ghi nhận là vấn đề (theme nào từ đầu,
          khi nào edit, cần thông tin gì, verify thế nào) — rút từ chính
          những gì đã vấp phải khi dựng store Snuglet. Dùng làm checklist cho
          bất kỳ store nào sau này, không riêng Snuglet.
        </p>
      </Card>

      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2">
          <Palette className="w-4 h-4 text-zinc-500" />
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Bước 1 — Chọn theme: build custom hay mua có sẵn?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {THEME_DECISION.map((d) => (
            <div
              key={d.option}
              className="p-3.5 rounded-lg bg-zinc-100/70 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 space-y-1.5"
            >
              <p className="text-xs font-bold text-zinc-900 dark:text-zinc-100">
                {d.option}
              </p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold text-zinc-600 dark:text-zinc-300">
                  Chọn khi:
                </span>{" "}
                {d.when}
              </p>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                <span className="font-semibold text-zinc-600 dark:text-zinc-300">
                  Lưu ý:
                </span>{" "}
                {d.risk}
              </p>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2">
          <ListChecks className="w-4 h-4 text-zinc-500" />
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Bước 2 — Khi nào edit, khi nào giữ nguyên
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase text-zinc-500 mb-1.5">
              Giữ nguyên
            </p>
            <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 list-disc pl-4">
              {EDIT_VS_KEEP.keep.map((k) => (
                <li key={k}>{k}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase text-zinc-500 mb-1.5">
              Cần edit
            </p>
            <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 list-disc pl-4">
              {EDIT_VS_KEEP.edit.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>

      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-3">
        <div className="flex items-center gap-2">
          <ClipboardList className="w-4 h-4 text-zinc-500" />
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Bước 3 — Checklist thông tin cần có TRƯỚC khi dựng store
          </h2>
        </div>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
          Ví dụ thật đã thiếu ở Snuglet: dựng store xong mới phát hiện supplier
          COGS chưa chốt và địa chỉ/SĐT kinh doanh chưa có — lẽ ra phải chốt
          trước.
        </p>
        <ol className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 list-decimal pl-4">
          {INFO_CHECKLIST.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ol>
      </Card>

      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-zinc-500" />
          <h2 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
            Bước 4 — Verify/review trước khi publish
          </h2>
        </div>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
          Bài học thật: 2 bug của Shrine Edit (CSS <code>[hidden]</code> bị
          đè, lỗi cú pháp Liquid <code>if...and</code>) chỉ phát hiện được
          khi test trực tiếp trên browser — review code tĩnh/theme check tự
          động KHÔNG bắt được. Luôn làm cả 2 nhóm dưới đây, không dừng ở static
          check.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-[11px] font-bold uppercase text-zinc-500 mb-1.5">
              Static check
            </p>
            <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 list-disc pl-4">
              {VERIFY_STATIC.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase text-zinc-500 mb-1.5">
              Live test (bắt buộc, không được bỏ qua)
            </p>
            <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-400 list-disc pl-4">
              {VERIFY_LIVE.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        </div>

        <PromptBlock
          title="Prompt tự audit store trước khi publish"
          prompt={`Kiểm tra toàn bộ store Shopify [tên store] trước khi publish:
(1) Vào từng trang chính (home, product, collection, cart, checkout, search, 404) và chụp screenshot;
(2) Kiểm tra tất cả text placeholder mặc định của theme demo đã được thay bằng nội dung thật chưa (tên brand, mô tả, câu CTA);
(3) Test đổi trạng thái tồn kho sản phẩm (còn nhiều/còn ít/hết hàng) và xác nhận badge/nút hiển thị đúng logic;
(4) Kiểm tra tất cả link nav/footer không bị 404;
(5) Kiểm tra trang pháp lý (Privacy/Refund/Shipping/Terms) đã đúng tên brand, chưa còn placeholder;
(6) Test trên cả mobile viewport và desktop;
(7) Báo cáo lại danh sách lỗi tìm được, không chỉ nói "đã xong" nếu chưa test live thật.`}
        />
      </Card>

      <Card className="p-5 border-amber-500/20 bg-amber-500/5 space-y-2">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-500" />
          <h3 className="text-xs font-bold uppercase text-amber-700 dark:text-amber-500">
            Ví dụ thật để đối chiếu
          </h3>
        </div>
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          Snuglet (Bước 1 → chọn build custom "Shrine Edit") và CopaCalmer
          (Bước 1 → mua theme "Shrine PRO" có sẵn, xem doc "Snuglet vs
          CopaCalmer") là 2 case study thật minh hoạ đúng 2 lựa chọn ở Bước
          1 — cả hai đều dùng chung 1 dòng theme Shrine trong cùng ngách
          teething.
        </p>
      </Card>
    </div>
  );
}
