---
name: product-lab
description: >-
  Run multi-agent 5-perspective product evaluation (Market Research, Master Seller, Creative Director, Supply Chain Auditor, Media Buyer) for any target product name, then save the output to the Product Lab UI data store (`src/features/dropshipping/data/evaluated-products.json`) for interactive visualization on `/dropship/lab`.
---

# PRODUCT LAB MULTI-AGENT EVALUATION WORKFLOW

## OVERVIEW
This skill runs an automated 5-agent multi-angle evaluation for any requested product name (e.g. `/product-lab Mini Air Conditioner` or `/product-lab Đèn ngủ phi hành gia`) and persists the structured JSON results to the project data store `src/features/dropshipping/data/evaluated-products.json`.

Once written, the product analysis automatically renders on the interactive UI dashboard at **`/dropship/lab`**.

---

## WORKFLOW STEPS

### Step 1: Parse Product Name
Extract the target product name from the user prompt (e.g., "Mini Portable Air Conditioner", "Gối Massage Cổ Hồng Ngoại EMS").

### Step 2: Run the 5 Perspectives as INDEPENDENT Agents (not sequential turns)

To keep the 5 verdicts genuinely independent — not one agent anchoring on the previous agent's opinion — dispatch **5 separate `Agent` tool calls in parallel, in the same message**, one per perspective below. Each call must only receive: the product name, its own SKILL.md persona/framework, and the shared output JSON schema (Step 3). Do **not** paste the other 4 agents' outputs into any of the 5 prompts — that is what breaks independence.

1. **Market Research Hunter (`market-research-hunter`)** — 4 Golden Pillars: 3s Wow Factor, Problem-Solving Pain Point, Profit Margin (Retail >= 3.5x COGS), Ship-Friendly (< 500g, non-fragile).
2. **Master E-Com Seller (`master-ecom-seller`)** — Business Owner Critique (Commodity Trap vs Scalable Brand), Unit Economics, Offer Strategy.
3. **Creative & UGC Director (`creative-ugc-director`)** — 3s Hook Script & Visual Thumb-Stop Rate, UGC Creator Brief.
4. **Supply Chain & Logistics Auditor (`supply-chain-auditor`)** — Landed Cost, Weight & Dimensions, Compliance, Delivery lead time.
5. **Performance Media Buyer (`performance-media-buyer`)** — Paid Acquisition Strategy, CBO structure, Target CVR/CTR, Kill/Scale criteria.

Each agent scores 1.00–10.00 per its own SKILL.md scoring matrix.

### Step 2b: DATA HONESTY RULE (applies to every agent, no exceptions)

None of these 5 agents has a live connection to Google Trends, Google Ads Keyword Planner, TikTok Creative Center, or Amazon. Do not output invented exact figures (e.g. a specific "165,000 searches/mo" or "1.2B views") as if they were pulled from a real API — that is fabrication, and it previously caused a real trust problem in this project (see `PPSPYDashboard.tsx`, which had to be corrected to stop doing exactly this).

For every quantitative claim in `bulletPoints`:
- If you actually used a tool (WebSearch/WebFetch) to look it up, cite the source inline and set `"dataConfidence": "sourced"`.
- Otherwise, state it as a **reasoned estimate**: use ranges, not false-precision single numbers (e.g. "MSV ước tính 80,000–150,000/tháng dựa trên độ phổ biến ngách tương tự" instead of "165,000 searches/mo"), and set `"dataConfidence": "estimated"`.
- Never mix the two without labeling which is which.

### Step 3: Shared Output JSON Schema (per agent)
```json
{
  "agentId": "market-research-hunter",
  "agentName": "Market Research Hunter",
  "role": "...",
  "iconName": "Target",
  "score": 7.85,
  "verdict": "WINNER | HIGH_RISK | CONDITIONAL | EXCELLENT",
  "verdictLabel": "...",
  "dataConfidence": "estimated | sourced",
  "summary": "...",
  "bulletPoints": ["..."],
  "recommendations": ["..."]
}
```

### Step 4: Synthesis Pass (reconciliation, not just concatenation)
After all 5 independent results come back, do a short synthesis pass **in the main session** (this is the one step allowed to see all 5 outputs together):
- Flag any direct disagreement between agents (e.g. Market Research says WINNER while Master Seller says HIGH_RISK) and add one line explaining the tension instead of silently picking a side.
- Compute an overall weighted score only as a reference (do not overwrite individual agent scores).

### Step 5: Validate & Write to Data Store
Read [evaluated-products.json](file:///Users/aminhp93/personal/dropship/src/features/dropshipping/data/evaluated-products.json):
- Validate the new entry against the schema above (all 5 perspectives present, `score` in range, `dataConfidence` set on every perspective).
- Check if the product `id` already exists (update in place) or append if new — never write a duplicate `id`.
- Write the updated array back to `src/features/dropshipping/data/evaluated-products.json`.

### Step 6: Present Executive Summary & Link
Output an executive summary in chat (including the Step 4 disagreement flags, if any) and provide a clickable link to open the UI visualization page:
- Link: [Xem Kết Quả Trực Quan Trên Product Lab UI](file:///Users/aminhp93/personal/dropship/src/routes/dropship/lab.tsx)
- Route: `/dropship/lab`
