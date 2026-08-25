import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/dropship/progress/")({
  component: () => <Navigate to="/dropship/progress/0-timeline" replace />,
});
