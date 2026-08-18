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

### Step 2: Conduct 5-Agent Perspective Evaluation
Evaluate the product across all 5 specialized agent frameworks:

1. **Market Research Hunter (`market-research-hunter`)**:
   - 4 Golden Pillars: 3s Wow Factor, Problem-Solving Pain Point, Profit Margin (Retail >= 3.5x COGS), Ship-Friendly (< 500g, non-fragile).
   - Score out of 10 (1.00 – 10.00).

2. **Master E-Com Seller (`master-ecom-seller`)**:
   - Business Owner Critique (Commodity Trap vs Scalable Brand).
   - Unit Economics: Retail Price, COGS, Break-even CAC, ROAS.
   - Offer Strategy (Bundle $49.99 vs single product).

3. **Creative & UGC Director (`creative-ugc-director`)**:
   - 3s Hook Script & Visual Thumb-Stop Rate.
   - UGC Creator Brief (9:16 vertical, 15-20s).

4. **Supply Chain & Logistics Auditor (`supply-chain-auditor`)**:
   - Landed Cost (Product + Air Freight), Weight & Dimensions.
   - Compliance (CE, FCC, RoHS, MSDS battery check), Delivery lead time.

5. **Performance Media Buyer (`performance-media-buyer`)**:
   - Paid Acquisition Strategy (TikTok/Meta Ads), CBO campaign structure.
   - Target CVR, CTR, and Kill/Scale decision criteria.

### Step 3: Format & Append to Data Store
Read [evaluated-products.json](file:///Users/aminhp93/personal/dropship/src/features/dropshipping/data/evaluated-products.json), check if the product ID already exists (update if exists, or append if new), and write the updated array back to `src/features/dropshipping/data/evaluated-products.json`.

### Step 4: Present Executive Summary & Link
Output an executive summary in chat and provide a clickable link to open the UI visualization page:
- Link: [Xem Kết Quả Trực Quan Trên Product Lab UI](file:///Users/aminhp93/personal/dropship/src/routes/dropship/lab.tsx)
- Route: `/dropship/lab`
