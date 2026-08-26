import { createFileRoute } from "@tanstack/react-router";
import { NomnaBuoi4Dashboard } from "@/features/dropshipping/components/NomnaBuoi4Dashboard";

export const Route = createFileRoute("/dropship/progress/4-nomna-dashboard")({
  component: NomnaBuoi4DashboardPage,
});

export function NomnaBuoi4DashboardPage() {
  return <NomnaBuoi4Dashboard />;
}
