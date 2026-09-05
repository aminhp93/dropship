import { createFileRoute } from "@tanstack/react-router";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { StoreChecklistTab } from "@/features/dropshipping/components/StoreChecklistTab";
import { StoreDataBrief } from "@/features/dropshipping/components/StoreDataBrief";

export const Route = createFileRoute("/dropship/progress/2-store")({
  component: StoreTabRoute,
});

export function StoreTabRoute() {
  return (
    <Tabs defaultValue="checklist" className="space-y-4">
      <TabsList>
        <TabsTrigger value="checklist" className="cursor-pointer">
          ✅ Checklist A→Z
        </TabsTrigger>
        <TabsTrigger value="data-brief" className="cursor-pointer">
          📋 Data Brief (điền trước khi lên Shopify)
        </TabsTrigger>
      </TabsList>

      <TabsContent value="checklist">
        <StoreChecklistTab />
      </TabsContent>

      <TabsContent value="data-brief">
        <StoreDataBrief />
      </TabsContent>
    </Tabs>
  );
}
