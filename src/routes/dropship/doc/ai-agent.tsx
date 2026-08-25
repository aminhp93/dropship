import type { ComponentType } from "react";
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Target,
  FlaskConical,
  ShoppingBag,
  Copy,
  Search,
  Truck,
  Video,
  DollarSign,
  Bot,
  ArrowRight,
  Eye,
} from "lucide-react";
import { PPSPYDashboard } from "@/features/dropshipping/components/PPSPYDashboard";

export const Route = createFileRoute("/dropship/doc/ai-agent")({
  component: AIAgentPage,
});

interface StepDef {
  step: string;
  title: string;
  description: string;
  agents: { name: string; skillPath: string }[];
  status: "live" | "reference";
  liveTo?: string;
  icon: ComponentType<{ className?: string }>;
  priority?: boolean;
  inlineTool?: "ppspy";
}

const STEPS: StepDef[] = [
  {
    step: "1",
    title: "Nghiên cứu sản phẩm & thị trường",
    description:
      "Chọn ngách, tìm ứng viên sản phẩm, áp bộ tiêu chí loại trừ (không trend, không brand equity), check Meta Ads Library.",
    agents: [
      { name: "market-research-hunter", skillPath: ".agents/skills/market-research-hunter/SKILL.md" },
    ],
    status: "live",
    liveTo: "/dropship/doc/research",
    icon: Search,
    priority: true,
  },
  {
    step: "1b",
    title: "Đánh giá sâu 1 sản phẩm cụ thể",
    description:
      "Sau khi có ứng viên, chấm điểm chi tiết theo 5 góc nhìn độc lập (thị trường, chiến lược bán, content, supply chain, media buy).",
    agents: [
      { name: "product-lab", skillPath: ".agents/skills/product-lab/SKILL.md" },
    ],
    status: "live",
    liveTo: "/dropship/doc/lab",
    icon: FlaskConical,
  },
  {
    step: "2",
    title: "Dựng store",
    description:
      "Checklist đủ trải nghiệm khách hàng trước khi lo làm đẹp; thiết lập Shopify, theme, app, chính sách.",
    agents: [
      { name: "master-ecom-seller", skillPath: ".agents/skills/master-ecom-seller/SKILL.md" },
    ],
    status: "reference",
    icon: ShoppingBag,
    priority: true,
  },
  {
    step: "2b",
    title: "Soi & clone store tham chiếu",
    description:
      "Chọn 1 store đối thủ làm mẫu, trích blueprint cấu trúc/UX (không copy nguyên văn), đánh giá sức khoẻ qua PPSPY + Ads Library trước khi quyết định.",
    agents: [
      { name: "store-cloner", skillPath: ".agents/skills/store-cloner/SKILL.md" },
      { name: "competitor-store-evaluator", skillPath: ".agents/skills/competitor-store-evaluator/SKILL.md" },
    ],
    status: "reference",
    icon: Copy,
    inlineTool: "ppspy",
  },
  {
    step: "3",
    title: "Sourcing & logistics",
    description:
      "Landed cost, cân nặng/kích thước, compliance, thời gian ship thực tế cho newbie (không copy lời hứa ship của đối thủ lớn).",
    agents: [
      { name: "supply-chain-auditor", skillPath: ".agents/skills/supply-chain-auditor/SKILL.md" },
    ],
    status: "reference",
    icon: Truck,
  },
  {
    step: "4",
    title: "Sản xuất content",
    description: "Hook 3 giây, UGC brief, viết lại benefit/FAQ bằng giọng riêng — không copy nguyên văn đối thủ.",
    agents: [
      { name: "creative-ugc-director", skillPath: ".agents/skills/creative-ugc-director/SKILL.md" },
    ],
    status: "reference",
    icon: Video,
  },
  {
    step: "5",
    title: "Chạy ads & tối ưu",
    description: "Break-even CAC/ROAS, cấu trúc campaign, kill/scale criteria.",
    agents: [
      { name: "performance-media-buyer", skillPath: ".agents/skills/performance-media-buyer/SKILL.md" },
    ],
    status: "reference",
    icon: DollarSign,
  },
];

export function AIAgentPage() {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div className="space-y-1.5 border-b border-zinc-200 dark:border-zinc-800 pb-4">
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-[11px] font-bold uppercase tracking-wider">
          <Bot className="w-3.5 h-3.5" />
          AI Agents Framework
        </div>
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
          Quy trình các bước + Agent hỗ trợ
        </h2>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          Rút ra từ 3 buổi học thực tế (
          <Link to="/dropship/doc/quy-trinh-2026" className="text-purple-500 hover:underline font-medium">
            xem quy trình 2026 tại đây
          </Link>
          ), tổng quát hoá thành quy trình dropship, mỗi bước gắn agent hỗ trợ tương ứng.
        </p>
      </div>

      <div className="space-y-4">
        {STEPS.map((s) => {
          const Icon = s.icon;
          return (
            <Card
              key={s.step}
              className={cn(
                "p-5 border space-y-3 shadow-2xs",
                s.priority
                  ? "border-purple-500/30 bg-purple-500/5"
                  : "border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 flex items-center justify-center shrink-0 font-bold">
                    <Icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[10px] font-mono">
                        Bước {s.step}
                      </Badge>
                      {s.status === "live" ? (
                        <Badge className="text-[10px] bg-emerald-500/10 text-emerald-600 border-emerald-500/20 font-bold">
                          Live — có worksheet
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="text-[10px] text-zinc-400">
                          Reference — làm qua Claude
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-bold text-sm text-zinc-900 dark:text-white mt-1">
                      {s.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-600 dark:text-zinc-400 pl-12 leading-relaxed">
                {s.description}
              </p>

              <div className="flex items-center justify-between pl-12 flex-wrap gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {s.agents.map((a) => (
                    <Badge
                      key={a.name}
                      variant="outline"
                      className="text-[10px] font-mono text-zinc-500 dark:text-zinc-400"
                      title={a.skillPath}
                    >
                      {a.name}
                    </Badge>
                  ))}
                </div>
                {s.liveTo && (
                  <Link
                    to={s.liveTo}
                    className="text-xs font-semibold text-purple-500 hover:underline flex items-center gap-1"
                  >
                    Mở worksheet <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
                {s.inlineTool === "ppspy" && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      setExpandedStep((cur) => (cur === s.step ? null : s.step))
                    }
                    className="text-xs h-7 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 mr-1.5" />
                    {expandedStep === s.step
                      ? "Ẩn PPSPY Dashboard"
                      : "Mở PPSPY Dashboard"}
                  </Button>
                )}
              </div>

              {s.inlineTool === "ppspy" && expandedStep === s.step && (
                <div className="pl-12 pt-2">
                  <PPSPYDashboard />
                </div>
              )}
            </Card>
          );
        })}
      </div>

      <Card className="p-5 border-zinc-200 dark:border-zinc-800 space-y-1 bg-white dark:bg-zinc-900">
        <h3 className="font-bold text-sm text-zinc-900 dark:text-white flex items-center gap-2">
          <Target className="w-4 h-4 text-purple-500" />
          Cách dùng 1 agent chưa có worksheet
        </h3>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
          Nói với Claude: "dùng agent [tên skill] để [việc cần làm]" — Claude
          sẽ đọc đúng file SKILL.md tương ứng trong{" "}
          <code className="text-[11px] bg-zinc-100 dark:bg-zinc-800 px-1 py-0.5 rounded font-mono">
            .agents/skills/
          </code>{" "}
          và làm theo đúng tiêu chí đã định nghĩa.
        </p>
      </Card>
    </div>
  );
}
