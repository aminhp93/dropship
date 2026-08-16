import { createFileRoute } from "@tanstack/react-router";
import { QuyTrinh2026Tab } from "@/features/dropshipping/components/QuyTrinh2026Tab";

export const Route = createFileRoute("/dropship/quy-trinh-2026")({
  component: QuyTrinh2026Page,
});

export function QuyTrinh2026Page() {
  return (
    <div className="h-full overflow-y-auto">
      <QuyTrinh2026Tab />
    </div>
  );
}
