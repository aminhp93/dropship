import { createFileRoute, Navigate } from "@tanstack/react-router";

export const Route = createFileRoute("/dropship/doc/")({
  component: () => <Navigate to="/dropship/doc/ai-agent" replace />,
});
