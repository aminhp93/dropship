import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/dropship/")({
  beforeLoad: () => {
    throw redirect({
      to: "/dropship/quy-trinh-2026",
    });
  },
  component: () => null,
});
