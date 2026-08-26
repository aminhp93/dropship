import { createFileRoute } from "@tanstack/react-router";
import { NomnaBuoi4Dashboard } from "@/features/dropshipping/components/NomnaBuoi4Dashboard";

export const Route = createFileRoute("/dropship/dashboard")({
  component: DropshipDashboardPage,
});

export function DropshipDashboardPage() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden bg-gray-100 dark:bg-gray-100 text-gray-900">
      <NomnaBuoi4Dashboard />
    </div>
  );
}
