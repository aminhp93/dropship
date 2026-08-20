# AGENTS & SPECIALIZED SKILLS IN DROPSHIP PROJECT

This repository includes 6 specialized AI agents / skills located in `.agents/skills/`:

## 1. Product Lab Multi-Agent Evaluator (`product-lab`)
- **Location**: [.agents/skills/product-lab/SKILL.md](file:///Users/aminhp93/personal/dropship/.agents/skills/product-lab/SKILL.md)
- **Role**: Command workflow (`/product-lab [tên sản phẩm]`) that runs a 5-perspective evaluation and writes the structured JSON to `src/features/dropshipping/data/evaluated-products.json` for live UI rendering on `/dropship/lab`.

## 2. Market Research & WIN Product Hunter (`market-research-hunter`)
- **Location**: [.agents/skills/market-research-hunter/SKILL.md](file:///Users/aminhp93/personal/dropship/.agents/skills/market-research-hunter/SKILL.md)
- **Role**: Specializes in market research, viral product discovery, and quantitative validation based on 2026 E-commerce standards and SOP Step 2.

## 3. Master E-Commerce Seller & Growth Operator (`master-ecom-seller`)
- **Location**: [.agents/skills/master-ecom-seller/SKILL.md](file:///Users/aminhp93/personal/dropship/.agents/skills/master-ecom-seller/SKILL.md)
- **Role**: High-level E-commerce Business Strategist, Growth Operator, and Executive Mentor for 2026.

## 4. Creative & UGC Video Director (`creative-ugc-director`)
- **Location**: [.agents/skills/creative-ugc-director/SKILL.md](file:///Users/aminhp93/personal/dropship/.agents/skills/creative-ugc-director/SKILL.md)
- **Role**: Specialized Ad Video Director for TikTok/Reels/Shorts, 3s Hook Scriptwriting, UGC Briefs, and Creative Testing Systems.

## 5. Supply Chain & 3PL Logistics Auditor (`supply-chain-auditor`)
- **Location**: [.agents/skills/supply-chain-auditor/SKILL.md](file:///Users/aminhp93/personal/dropship/.agents/skills/supply-chain-auditor/SKILL.md)
- **Role**: Logistics Auditor, Landed Cost Calculator, Compliance Auditor (CE, FCC, RoHS, FDA), and Private Label 3PL Scaling Planner.

## 6. Performance Marketer & Media Buyer (`performance-media-buyer`)
- **Location**: [.agents/skills/performance-media-buyer/SKILL.md](file:///Users/aminhp93/personal/dropship/.agents/skills/performance-media-buyer/SKILL.md)
- **Role**: Paid Media Specialist for Meta/TikTok/Google Ads, Break-even CAC/ROAS Calculator, CBO Campaign Structuring, and Ad Fatigue Manager.

## 7. Store Clone Orchestrator (`store-cloner`)
- **Location**: [.agents/skills/store-cloner/SKILL.md](file:///Users/aminhp93/personal/dropship/.agents/skills/store-cloner/SKILL.md)
- **Role**: Takes a reference store/product URL, extracts its structural blueprint (UX widgets, upsell mechanics, trust elements, app stack), and dispatches `supply-chain-auditor`, `master-ecom-seller`, and `creative-ugc-director` in parallel to produce a buildable Store Build Checklist — structure only, never the reference's exact copy/photos/brand.

## 8. Competitor Store Evaluator (`competitor-store-evaluator`)
- **Location**: [.agents/skills/competitor-store-evaluator/SKILL.md](file:///Users/aminhp93/personal/dropship/.agents/skills/competitor-store-evaluator/SKILL.md)
- **Role**: Judges a competitor/reference store's real traction with no ads data available yet, using only live-sourced signals: PPSPY store spy (`/api/v1/personal/dropshipping/spy?domain=`), Meta Ads Library active/total ratio, and a WebSearch competitor landscape scan. Pairs with `store-cloner` — clone the structure, then use this to decide if the niche is actually worth it.

## Data Honesty Rule
None of the 5 evaluation agents has a live connection to Google Trends, TikTok Creative Center, Amazon, or ad-account APIs. Every quantitative claim they output must be labeled `dataConfidence: "sourced"` (only if a real tool call backs it) or `"estimated"` (reasoned range, no false precision) — see `product-lab/SKILL.md` Step 2b. The Product Lab UI (`/dropship/lab`) renders this label on every agent card.

## SOP Content Versions
`src/features/dropshipping/sop/` has two versions, `2023/` and `2026/`. Only `2026/` is currently rendered in the UI (`/dropship/quy-trinh-2026`); `2023/` is kept for historical reference only — see [its README](file:///Users/aminhp93/personal/dropship/src/features/dropshipping/sop/2023/README.md).
