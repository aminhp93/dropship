import { createFileRoute } from "@tanstack/react-router";
import { StoreChecklistTab } from "@/features/dropshipping/components/StoreChecklistTab";

export const Route = createFileRoute("/dropship/progress/2-store")({
  component: StoreTabRoute,
});

export function StoreTabRoute() {
  return <StoreChecklistTab />;
}
