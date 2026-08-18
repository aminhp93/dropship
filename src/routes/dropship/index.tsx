import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Bot,
  Target,
  Crown,
  CheckCircle2,
  Copy,
  Check,
  Zap,
  HelpCircle,
  FileCode,
} from "lucide-react";

export const Route = createFileRoute("/dropship/")({
  component: AgentsOverviewPage,
});

export function AgentsOverviewPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const agents = [
    {
      id: "market-research-hunter",
      name: "Market Research & WIN Product Hunter",
      tagline: "Săn Sản Phẩm WIN & Phân Tích Thị Trường",
      skillPath: ".agents/skills/market-research-hunter/SKILL.md",
      badge: "SOP Step 2",
      icon: Target,
      description:
        "Nghiên cứu ngách, phát hiện xu hướng viral (TikTok Spy, AliExpress Dropshipping Center), thẩm định 4 tiêu chí vàng và lập ma trận chấm điểm định lượng sản phẩm WIN.",
      pillars: [
        { label: "3s Wow Factor", desc: "Thu hút thị giác 3 giây đầu trên short video" },
        { label: "Problem-Solving", desc: "Giải quyết nỗi đau cụ thể theo 5 chiều" },
        { label: "Margin >= 75%", desc: "Giá bán = COGS × 3x - 4x" },
        { label: "Ship-Friendly", desc: "< 500g, không pin lớn/chất lỏng/dễ vỡ" },
      ],
      features: [
        "TikTok Organic Spy Protocol (#tiktokmademebuyit, #viralproduct)",
        "AliExpress Dropshipping Center 7-day Sales Growth",
        "Ma trận chấm điểm định lượng 1-10 (6 chỉ số trọng số)",
        "Tạo 10 Marketing Angles & Video Creative Hooks per product",
        "Checklist đặt hàng mẫu (Samples) & Audit nhà cung cấp (< 15 ngày US/EU)",
      ],
      samplePrompts: [
        {
          id: "mr-1",
          label: "Tìm 3 sản phẩm WIN ngách Pet Care",
          text: "Dùng agent market-research-hunter để tìm giúp tôi 3 sản phẩm WIN ngách Pet Care đáp ứng đúng 4 tiêu chuẩn vàng năm 2026.",
        },
        {
          id: "mr-2",
          label: "Thẩm định sản phẩm Đèn chiếu phi hành gia",
          text: "Dùng agent market-research-hunter thẩm định sản phẩm Đèn chiếu phi hành gia theo ma trận điểm 1-10 và đề xuất 10 Marketing Angles.",
        },
      ],
    },
    {
      id: "master-ecom-seller",
      name: "Master E-Commerce Seller & Growth Operator",
      tagline: "Chiến Lược Gia Kinh Doanh & Mentor Tăng Trưởng",
      skillPath: ".agents/skills/master-ecom-seller/SKILL.md",
      badge: "Business Owner",
      icon: Crown,
      description:
        "Mentor & Chiến lược gia E-commerce. Ép tư duy bài bản theo chuỗi Customer → Problem → Market → Offer → Product → Distribution → Economics → System → Scale.",
      pillars: [
        { label: "Unit Economics", desc: "CAC, AOV, Contribution Margin, LTV, Break-even" },
        { label: "Offer Creation", desc: "Product + Positioning + Pricing + Guarantee + Urgency" },
        { label: "Staged Validation", desc: "7 bước thử nghiệm từ ý tưởng đến quy mô" },
        { label: "Portfolio Operator", desc: "Xây dựng hệ thống nhiều Brand kinh doanh tự động" },
      ],
      features: [
        "Khung tư duy 20 câu hỏi chất vấn giả định mô hình kinh doanh",
        "Phân tích Unit Economics & tính toán điểm hòa vốn chính xác",
        "Xây dựng phễu Shopify CRO (Traffic → Landing → Offer → Retention)",
        "Chiến lược phân bổ vốn (Capital Allocation) & Kill/Scale criteria",
        "FIRST SESSION: 10 câu hỏi chẩn đoán & 90-day Seller Roadmap",
      ],
      samplePrompts: [
        {
          id: "me-1",
          label: "Khởi động First Session Chẩn Đoán 1-on-1",
          text: "Kích hoạt agent master-ecom-seller để bắt đầu buổi FIRST SESSION với 10 câu hỏi chẩn đoán tư duy kinh doanh của tôi.",
        },
        {
          id: "me-2",
          label: "Phản biện & Phân tích Unit Economics",
          text: "Tôi định bán gối massage cổ hồng ngoại với giá $49.99 trên Shopify. Hãy đóng vai Master Seller phản biện mô hình và phân tích Unit Economics giúp tôi.",
        },
      ],
    },
  ];

  return (
    <ScrollArea className="h-full">
      <div className="p-6 md:p-8 max-w-6xl mx-auto space-y-8">
        {/* Header Hero */}
        <div className="space-y-3 border-b border-zinc-200 dark:border-zinc-800 pb-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="outline" className="bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700 font-semibold text-[11px] px-2.5 py-0.5">
              AI Agents Workspace
            </Badge>
            <span className="text-xs text-zinc-400 font-mono">.agents/skills/</span>
          </div>

          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Hệ Thống AI Agents E-Commerce 2026
            </h1>
            <p className="text-xs text-zinc-500 max-w-2xl leading-relaxed">
              Các AI Agent chuyên biệt tích hợp sẵn trong repository giúp tự động hóa việc săn sản phẩm WIN, thẩm định thị trường và tư vấn chiến lược kinh doanh.
            </p>
          </div>
        </div>

        {/* Agents List */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {agents.map((agent) => (
              <Card
                key={agent.id}
                className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl space-y-5 shadow-2xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Agent Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 flex items-center justify-center font-bold shrink-0">
                        <agent.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                            {agent.name}
                          </h3>
                          <Badge variant="outline" className="text-[10px] font-semibold text-zinc-500 border-zinc-200 dark:border-zinc-800">
                            {agent.badge}
                          </Badge>
                        </div>
                        <p className="text-xs text-zinc-500">{agent.tagline}</p>
                      </div>
                    </div>
                  </div>

                  {/* Skill Path Badge */}
                  <div className="flex items-center gap-2 px-3 py-1 bg-zinc-50 dark:bg-zinc-800/50 rounded-lg text-[11px] font-mono text-zinc-500 border border-zinc-200/60 dark:border-zinc-800/80">
                    <FileCode className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span className="truncate">{agent.skillPath}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
                    {agent.description}
                  </p>

                  {/* Pillars Grid */}
                  <div className="space-y-2 pt-2 border-t border-zinc-100 dark:border-zinc-800">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Trụ Cột Khái Niệm
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {agent.pillars.map((p, idx) => (
                        <div key={idx} className="p-2 bg-zinc-50 dark:bg-zinc-800/30 border border-zinc-200/50 dark:border-zinc-800 rounded-lg space-y-0.5">
                          <span className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200 block">{p.label}</span>
                          <span className="text-[10px] text-zinc-500 leading-tight block line-clamp-1">{p.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">
                      Năng Lực & SOP Thực Thi
                    </span>
                    <ul className="space-y-1.5">
                      {agent.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Sample Prompts Action Box */}
                <div className="space-y-2.5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-zinc-500" />
                    Mẫu Câu Lệnh Trực Tiếp
                  </span>
                  <div className="space-y-2">
                    {agent.samplePrompts.map((prompt) => (
                      <div
                        key={prompt.id}
                        className="p-2.5 bg-zinc-50 dark:bg-zinc-800/40 rounded-lg border border-zinc-200/60 dark:border-zinc-800 flex flex-col justify-between gap-1.5"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200">{prompt.label}</span>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-6 text-[10px] font-semibold px-2 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center gap-1 shrink-0"
                            onClick={() => handleCopy(prompt.text, prompt.id)}
                          >
                            {copiedId === prompt.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-500" />
                                <span className="text-emerald-500">Đã chép!</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Sao chép</span>
                              </>
                            )}
                          </Button>
                        </div>
                        <p className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 bg-white dark:bg-zinc-900 p-2 rounded border border-zinc-200/40 dark:border-zinc-800 select-all leading-normal">
                          {prompt.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* How to use Guide */}
        <Card className="p-6 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center font-bold shrink-0">
              <HelpCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
                Hướng Dẫn Sử Dụng Agent
              </h3>
              <p className="text-xs text-zinc-500">
                Kích hoạt Agent dễ dàng trong khung trò chuyện Antigravity AI
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
            <div className="p-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-lg border border-zinc-200/60 dark:border-zinc-800 space-y-1">
              <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 block">1. Nhắc Tên Agent Trong Prompt</span>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Nhập tên agent như <code className="px-1.5 py-0.5 bg-zinc-200/60 dark:bg-zinc-800 rounded font-mono text-[11px] text-zinc-800 dark:text-zinc-200">market-research-hunter</code> hoặc <code className="px-1.5 py-0.5 bg-zinc-200/60 dark:bg-zinc-800 rounded font-mono text-[11px] text-zinc-800 dark:text-zinc-200">master-ecom-seller</code>. AI sẽ tự đọc file SKILL để nhập vai.
              </p>
            </div>

            <div className="p-3 bg-zinc-50 dark:bg-zinc-800/30 rounded-lg border border-zinc-200/60 dark:border-zinc-800 space-y-1">
              <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200 block">2. Gợi Ý Tự Động Theo Nhu Cầu</span>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Khi hỏi về <em>"tìm sản phẩm WIN"</em> hoặc <em>"tư vấn Unit Economics / phễu bán hàng"</em>, hệ thống sẽ tự nhận diện nhu cầu và đề xuất Agent tương ứng.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </ScrollArea>
  );
}
