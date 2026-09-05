import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/dropship/tools/")({
  component: () => <Navigate to="/dropship/tools/1-image" replace />,
});
