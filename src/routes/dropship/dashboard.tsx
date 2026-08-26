import { createFileRoute } from "@tanstack/react-router";
import { NomnaBuoi4Dashboard } from "@/features/dropshipping/components/NomnaBuoi4Dashboard";

export const Route = createFileRoute("/dropship/dashboard")({
  component: DropshipDashboardPage,
});

export function DropshipDashboardPage() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-6">
      <NomnaBuoi4Dashboard />
    </div>
  );
}
