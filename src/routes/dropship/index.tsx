import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dropship/")({
  beforeLoad: () => {
    throw redirect({ to: "/dropship/ai-agent" });
  },
});
