# Legacy — not rendered in the current UI

This `2023/` SOP version is parsed into `SOP_DATA['2023']` by
[`sop-data.ts`](../../data/sop-data.ts), but no route or component currently
reads `SOP_DATA['2023']` — only the `2026/` version is rendered (see
`QuyTrinh2026Tab.tsx` and `/dropship/quy-trinh-2026`).

Kept for historical reference. If you're looking for the active SOP, use
[`../2026/`](../2026/).
