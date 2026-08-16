import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FolderOpen, Plus, Loader2 } from "lucide-react";
import {
  fetchDropshipProducts,
  createDropshipProduct,
} from "@/lib/api-client";

export const Route = createFileRoute("/dropship/sanpham")({
  component: SanPhamPage,
});

interface DropshipProduct {
  id: string;
  name: string;
  cost_price: number;
  selling_price: number;
  project_folder?: string;
}

export function SanPhamPage() {
  const [products, setProducts] = useState<DropshipProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const data = await fetchDropshipProducts();
      setProducts(data || []);
    } catch (e) {
      console.error("Error loading products:", e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleCreate = async () => {
    const name = window.prompt("Nhập tên sản phẩm mới:");
    if (!name) return;
    try {
      await createDropshipProduct({
        name,
        cost_price: 10,
        selling_price: 39.99,
        project_folder: "/Users/minhpham/personal/githubcoffee",
      });
      alert("Tạo sản phẩm thành công!");
      await loadProducts();
    } catch {
      alert("Không thể tạo sản phẩm!");
    }
  };

  return (
    <ScrollArea className="h-full">
      <div className="p-8 max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div className="space-y-1">
            <Badge className="bg-purple-600 text-white font-bold text-[10px]">
              Quản lý sản phẩm
            </Badge>
            <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <FolderOpen className="w-6 h-6 text-purple-500" />
              Danh Sách Sản Phẩm Dropshipping
            </h1>
          </div>
          <Button onClick={handleCreate} size="sm" className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs">
            <Plus className="w-4 h-4 mr-1" /> Thêm Sản Phẩm Mới
          </Button>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center p-12 text-zinc-400 text-xs">
            <Loader2 className="w-5 h-5 animate-spin mr-2" /> Đang tải danh sách sản phẩm...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <Card key={p.id} className="p-6 border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl space-y-4 shadow-xs">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">{p.name}</h3>
                  <Badge variant="outline" className="text-[9px] font-mono shrink-0">ID: {p.id.slice(0, 8)}</Badge>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800">
                    <span className="text-[10px] text-zinc-400 font-bold block uppercase">Giá vốn (COGS)</span>
                    <span className="font-bold text-emerald-500">${Number(p.cost_price).toFixed(2)}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-100 dark:border-zinc-800">
                    <span className="text-[10px] text-zinc-400 font-bold block uppercase">Giá bán (Price)</span>
                    <span className="font-bold text-purple-500">${Number(p.selling_price).toFixed(2)}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
