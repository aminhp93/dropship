import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Home as HomeIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { HOME_PROGRESS_TABS } from "@/features/dropshipping/data/home-progress-data";
import { StoreChecklistTab } from "@/features/dropshipping/components/StoreChecklistTab";

export function HomeTab() {
  const [activeTab, setActiveTab] = useState(HOME_PROGRESS_TABS[0].id);

  return (
    <ScrollArea className="h-full">
      <div className="p-6 md:p-8 max-w-5xl mx-auto space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-500 text-xs font-bold uppercase tracking-wider">
            <HomeIcon className="w-3.5 h-3.5" />
            Home
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Tổng quan tiến độ
          </h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Snapshot render của 5 file .md theo dõi tiến độ trong{" "}
            <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
              workspace/dropship-progress/
            </code>
            . Đây là bản đọc nhanh, không phải nguồn chính — sửa tiến độ thì sửa ở file .md gốc
            (đường dẫn ghi trong mỗi tab), rồi đồng bộ lại nội dung ở đây.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="h-auto flex-wrap gap-1 p-1">
            {HOME_PROGRESS_TABS.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id} className="text-xs">
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {HOME_PROGRESS_TABS.map((tab) =>
            tab.id === "store" ? (
              <TabsContent key={tab.id} value={tab.id}>
                <StoreChecklistTab />
              </TabsContent>
            ) : (
              <TabsContent key={tab.id} value={tab.id}>
                <Card className="p-8 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl shadow-2xs">
                  <p className="text-[10px] font-mono text-zinc-400 mb-4">
                    {tab.sourcePath}
                  </p>
                  <div className="prose dark:prose-invert max-w-none text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-sans">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {tab.markdown}
                    </ReactMarkdown>
                  </div>
                </Card>
              </TabsContent>
            ),
          )}
        </Tabs>
      </div>
    </ScrollArea>
  );
}
