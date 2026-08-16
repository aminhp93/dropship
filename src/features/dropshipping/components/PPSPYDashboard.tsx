import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { fetchLiveStoreSpy } from '@/lib/api-client';
import { 
  TrendingUp, 
  ShoppingBag, 
  Store, 
  Search, 
  ExternalLink, 
  Eye, 
  Download, 
  Zap, 
  DollarSign, 
  Cpu, 
  CheckCircle2,
  Flame,
  Loader2,
  AlertCircle
} from 'lucide-react';

interface RealProduct {
  id: number;
  title: string;
  handle: string;
  vendor: string;
  product_type: string;
  price: number;
  compare_at_price: number;
  est_cogs: string;
  margin: string;
  created_at: string;
  tags: string[];
  image: string;
  url: string;
}

interface RealStoreSpyData {
  success: boolean;
  domain: string;
  isShopify: boolean;
  theme: string;
  metaPixel: string;
  tiktokPixel: string;
  apps: string[];
  metrics: {
    totalProducts: number;
    avgPrice: string;
    priceRange: string;
    newestProductDate: string;
  };
  products: RealProduct[];
}

export function PPSPYDashboard() {
  const [activeTab, setActiveTab] = useState<'detector' | 'products' | 'sales'>('detector');
  const [inspectorUrl, setInspectorUrl] = useState<string>('govee.com');
  const [liveData, setLiveData] = useState<RealStoreSpyData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const handleInspectStore = async (domainToFetch?: string) => {
    const target = domainToFetch || inspectorUrl;
    if (!target.trim()) return;

    setIsLoading(true);
    setErrorMsg('');

    try {
      const data = await fetchLiveStoreSpy(target);
      if (data && data.success) {
        setLiveData(data);
      } else {
        setErrorMsg('Không thể quét dữ liệu store. Hãy đảm bảo tên miền là một Shopify Store hợp lệ.');
      }
    } catch (err: any) {
      console.error('Error fetching live store spy:', err);
      setErrorMsg('Không thể kết nối đến backend API để quét store.');
    } finally {
      setIsLoading(false);
    }
  };

  // Initial fetch for default store
  useEffect(() => {
    handleInspectStore('govee.com');
  }, []);

  return (
    <Card className="bg-zinc-950 border-purple-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 text-white font-sans">
      {/* PPSPY Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Badge className="bg-purple-600 text-white font-black text-[10px] tracking-widest uppercase px-2.5 py-0.5">
              100% Real Live Data
            </Badge>
            <span className="text-xs text-purple-400 font-mono flex items-center gap-1 font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> Live Backend Proxy Engine
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2">
            <Eye className="w-6 h-6 text-purple-400" />
            PPSPY Real Live Competitor & Product Research
          </h2>
          <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed">
            Quét trực tiếp dữ liệu thật từ tên miền Shopify của đối thủ: Sản phẩm thực tế từ `/products.json`, giá bán, Theme đang dùng, Facebook/TikTok Pixels và danh sách Apps cài đặt.
          </p>
        </div>

        {/* Sub Feature Tabs */}
        <div className="flex items-center gap-1 bg-zinc-900/90 p-1.5 rounded-2xl border border-zinc-800/80 shrink-0">
          {[
            { id: 'detector', label: 'Store Inspector & Apps', icon: Cpu },
            { id: 'products', label: 'Live Products Catalog', icon: ShoppingBag },
            { id: 'sales', label: 'Pricing & Metrics', icon: DollarSign },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={cn(
                  "flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer",
                  isActive
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
                )}
              >
                <tab.icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Input Domain Form */}
      <form onSubmit={(e) => { e.preventDefault(); handleInspectStore(); }} className="space-y-3 bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
        <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
          Nhập Tên Miền Shopify Của Đối Thủ (Domain Thực Tế):
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Input
              type="text"
              value={inspectorUrl}
              onChange={(e) => setInspectorUrl(e.target.value)}
              placeholder="Nhập tên miền đối thủ (Ví dụ: govee.com, gymshark.com, solume.co)..."
              className="pl-10 bg-zinc-950 border-zinc-700 text-white text-sm focus:border-purple-500 rounded-xl"
            />
          </div>
          <Button type="submit" disabled={isLoading} className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-6 py-2.5 rounded-xl cursor-pointer shrink-0">
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin mr-1" /> : <Eye className="w-4 h-4 mr-1 text-amber-300" />}
            {isLoading ? 'Đang Quét Dữ Liệu Thật...' : 'Quét Dữ Liệu Store Ngay'}
          </Button>
        </div>

        {/* Preset Store Buttons */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-[11px] text-zinc-500 font-medium">Store mẫu thử nghiệm:</span>
          {['govee.com', 'gymshark.com', 'solume.co'].map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => {
                setInspectorUrl(preset);
                handleInspectStore(preset);
              }}
              className="text-[11px] px-2.5 py-1 rounded-lg border border-zinc-800 bg-zinc-950 text-purple-300 hover:bg-purple-500/20 transition-all font-mono cursor-pointer"
            >
              {preset}
            </button>
          ))}
        </div>
      </form>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex items-center gap-2 font-medium">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* TAB 1: STORE INSPECTOR & APPS */}
      {activeTab === 'detector' && liveData && (
        <div className="space-y-6">
          <Card className="bg-zinc-900 border-purple-500/30 p-6 rounded-2xl space-y-6 text-white">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-lg text-purple-400 font-mono">{liveData.domain}</h4>
                  <a href={`https://${liveData.domain}`} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <span className="text-xs text-zinc-400">Kết quả quét dữ liệu thời gian thực từ Backend API Proxy</span>
              </div>
              <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold">
                {liveData.isShopify ? 'Verified Shopify Store' : 'External Store'}
              </Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-1.5">
                <span className="text-purple-400 font-bold uppercase tracking-wider text-[10px] block">🎨 Shopify Theme</span>
                <span className="text-sm font-bold text-white block">{liveData.theme}</span>
              </div>

              <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-1.5">
                <span className="text-blue-400 font-bold uppercase tracking-wider text-[10px] block">🔵 Meta Facebook Pixel ID</span>
                <span className="text-sm font-bold text-white font-mono block">{liveData.metaPixel}</span>
              </div>

              <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-1.5">
                <span className="text-pink-400 font-bold uppercase tracking-wider text-[10px] block">🌸 TikTok Pixel ID</span>
                <span className="text-sm font-bold text-white font-mono block">{liveData.tiktokPixel}</span>
              </div>
            </div>

            {/* Detected Apps */}
            <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-3">
              <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] block">
                ⚡ Apps & Plugins Phát Hiện Được ({liveData.apps.length} Apps)
              </span>
              {liveData.apps.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {liveData.apps.map((app, i) => (
                    <span key={i} className="text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20 px-3 py-1 rounded-lg font-mono">
                      {app}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-zinc-500">Không phát hiện được App bên thứ ba công khai hoặc Store sử dụng Custom App bí mật.</p>
              )}
            </div>
          </Card>
        </div>
      )}

      {/* TAB 2: LIVE PRODUCTS CATALOG */}
      {activeTab === 'products' && liveData && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-purple-400" />
              Danh Sách Sản Phẩm Thực Tế Quét Từ `/products.json` ({liveData.products.length} Sản phẩm)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {liveData.products.slice(0, 12).map((p) => (
              <Card key={p.id} className="bg-zinc-900 border-zinc-800 p-5 rounded-2xl space-y-4 text-white hover:border-purple-500/40 transition-all flex flex-col justify-between">
                <div className="space-y-3">
                  {p.image ? (
                    <div className="w-full h-44 rounded-xl bg-zinc-950 overflow-hidden border border-zinc-800">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-all duration-300" />
                    </div>
                  ) : (
                    <div className="w-full h-44 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-600 text-xs">
                      No Image Available
                    </div>
                  )}

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-[9px] font-mono text-purple-400 border-purple-500/30">{p.vendor || 'Shopify Vendor'}</Badge>
                      <span className="text-[9px] text-zinc-500 font-mono">{p.created_at ? new Date(p.created_at).toLocaleDateString() : ''}</span>
                    </div>
                    <h4 className="font-bold text-xs text-zinc-100 line-clamp-2 leading-snug">{p.title}</h4>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2 bg-zinc-950 rounded-lg border border-zinc-800">
                      <span className="text-[9px] text-zinc-400 block font-sans uppercase">Giá Bán</span>
                      <span className="font-black text-emerald-400 text-sm">${p.price.toFixed(2)}</span>
                    </div>
                    <div className="p-2 bg-zinc-950 rounded-lg border border-zinc-800">
                      <span className="text-[9px] text-zinc-400 block font-sans uppercase">COGS Ước Tính</span>
                      <span className="font-black text-purple-400 text-sm">${p.est_cogs}</span>
                    </div>
                  </div>

                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2 bg-zinc-800 hover:bg-purple-600 text-zinc-200 hover:text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Xem Trang Sản Phẩm Live</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: PRICING & METRICS */}
      {activeTab === 'sales' && liveData && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Tổng Số Sản Phẩm Real</span>
              <span className="text-xl font-black text-purple-400 font-mono">{liveData.metrics.totalProducts} Sản phẩm</span>
            </div>

            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Giá Bán Trung Bình</span>
              <span className="text-xl font-black text-emerald-400 font-mono">${liveData.metrics.avgPrice}</span>
            </div>

            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Khoảng Giá Bán (Min - Max)</span>
              <span className="text-xl font-black text-amber-400 font-mono">{liveData.metrics.priceRange}</span>
            </div>

            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Sản Phẩm Mới Nhất Thêm Ngày</span>
              <span className="text-sm font-bold text-blue-400 font-mono">{liveData.metrics.newestProductDate}</span>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
