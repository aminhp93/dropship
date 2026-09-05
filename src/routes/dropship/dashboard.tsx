import { createFileRoute } from "@tanstack/react-router";
import { NomnaBuoi4Dashboard } from "@/features/dropshipping/components/NomnaBuoi4Dashboard";

export const Route = createFileRoute("/dropship/dashboard")({
  component: DropshipDashboardPage,
});

/**
 * Tool quét store đối thủ (tên cũ: "Dashboard Buổi 4").
 *
 * KHÔNG phải trang theo dõi tiến độ store của mình — trang này crawl
 * `/products.json` của store đối thủ công khai, gen lại ảnh và soạn bài đăng.
 * Nó chưa từng đọc dữ liệu store thật (Apex / Snuglet) lần nào.
 * Tiến độ store thật nằm ở /dropship/progress → tab "2. Store Snuglet".
 *
 * Hướng sau này: gộp vào workflow automation A→Z (nghiên cứu → dựng store →
 * content → ads) thay vì để rời như hiện tại.
 */
export function DropshipDashboardPage() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-gray-100 dark:bg-gray-100 text-gray-900">
      <div className="shrink-0 px-4 py-2 bg-amber-50 border-b border-amber-200 text-[11px] text-amber-900 flex items-center gap-2">
        <span className="font-bold">Tool nghiên cứu đối thủ</span>
        <span className="text-amber-700">
          — crawl store công khai + gen ảnh + soạn bài. Không đọc dữ liệu store
          Snuglet/Apex. Tiến độ store thật xem ở tab Progress → 2. Store Snuglet.
        </span>
      </div>
      <NomnaBuoi4Dashboard />
    </div>
  );
}
