import { createFileRoute } from "@tanstack/react-router";
import { QuyTrinh2026Tab } from "@/features/dropshipping/components/QuyTrinh2026Tab";

export const Route = createFileRoute("/dropship/playbook")({
  component: DropshipPlaybookPage,
});

export function DropshipPlaybookPage() {
  return (
    <div className="h-full overflow-y-auto">
      <QuyTrinh2026Tab />
    </div>
  );
}
