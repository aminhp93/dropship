import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { fetchLiveStoreSpy } from '@/lib/api-client';
import {
  ShoppingBag,
  Search,
  ExternalLink,
  Eye,
  DollarSign,
  Cpu,
  Globe,
  Loader2,
  AlertCircle,
  Users,
  Activity,
  TrendingUp
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

interface RevenueEstimate {
  available: boolean;
  source?: string;
  monthlyRevenueUsd?: number | null;
  annualRevenueUsd?: number | null;
  monthlyVisits?: number | null;
  globalRank?: number | null;
  trafficSources?: Record<string, number> | null;
  reason?: string;
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
  revenueEstimate?: RevenueEstimate;
}

const TRAFFIC_CHANNEL_COLORS = ['bg-blue-500', 'bg-pink-500', 'bg-emerald-500', 'bg-amber-500', 'bg-purple-500', 'bg-cyan-500'];

function formatChannelLabel(key: string): string {
  return key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

// Apify may return shares as fractions (0-1) or already as percent (0-100).
function normalizeTrafficSources(sources: Record<string, number>): { channel: string; percent: number }[] {
  const entries = Object.entries(sources).filter(([, v]) => typeof v === 'number');
  const maxVal = Math.max(0, ...entries.map(([, v]) => v));
  const isFraction = maxVal <= 1;
  return entries
    .map(([key, v]) => ({ channel: formatChannelLabel(key), percent: Math.round(isFraction ? v * 100 : v) }))
    .filter((e) => e.percent > 0)
    .sort((a, b) => b.percent - a.percent);
}

export function PPSPYDashboard() {
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

  useEffect(() => {
    handleInspectStore('govee.com');
  }, []);

  const revenueEstimate = liveData?.revenueEstimate;
  const realAvgPrice = liveData ? (parseFloat(liveData.metrics.avgPrice) || 0) : 0;
  const realTotalProducts = liveData?.metrics.totalProducts || 0;
  const trafficChannels = revenueEstimate?.available && revenueEstimate.trafficSources
    ? normalizeTrafficSources(revenueEstimate.trafficSources)
    : [];

  return (
    <Card className="bg-zinc-950 border-purple-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-8 text-white font-sans">
      {/* Search Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="bg-emerald-600 text-white font-black text-[10px] tracking-widest uppercase px-2.5 py-0.5">
              Real Scraped Data (Products/Pixels/Apps)
            </Badge>
            <Badge className="bg-amber-600 text-white font-black text-[10px] tracking-widest uppercase px-2.5 py-0.5">
              Revenue/Traffic: Apify 3rd-Party Estimate
            </Badge>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2">
            <Eye className="w-6 h-6 text-purple-400" />
            PPSPY Dynamic Overview Dashboard ({liveData?.domain || 'govee.com'})
          </h2>
        </div>

        {/* Input Form */}
        <form onSubmit={(e) => { e.preventDefault(); handleInspectStore(); }} className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Input
              type="text"
              value={inspectorUrl}
              onChange={(e) => setInspectorUrl(e.target.value)}
              placeholder="Nhập domain (Ví dụ: govee.com)..."
              className="pl-10 bg-zinc-900 border-zinc-700 text-white text-xs focus:border-purple-500 rounded-xl"
            />
          </div>
          <Button type="submit" disabled={isLoading} className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-4 py-2 rounded-xl cursor-pointer shrink-0">
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Soi Store'}
          </Button>
        </form>
      </div>

      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex items-center gap-2 font-medium">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* TOP EXECUTIVE KPI CARDS */}
      {liveData && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-zinc-900/80 p-5 rounded-2xl border border-amber-500/20 space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-[10px] font-bold uppercase tracking-wider block">Doanh Thu Ước Tính / Tháng</span>
              <DollarSign className="w-4 h-4 text-emerald-400" />
            </div>
            {revenueEstimate?.available && typeof revenueEstimate.monthlyRevenueUsd === 'number' ? (
              <>
                <div className="text-2xl font-black text-emerald-400 font-mono">
                  ${(revenueEstimate.monthlyRevenueUsd / 1000).toFixed(1)}k USD
                </div>
                <span className="text-[10px] text-zinc-400 block">
                  ~${((revenueEstimate.annualRevenueUsd ?? revenueEstimate.monthlyRevenueUsd * 12) / 1000000).toFixed(2)}M/năm · nguồn: Apify Shopify Store Analyzer
                </span>
              </>
            ) : (
              <>
                <div className="text-sm font-bold text-zinc-500">Không khả dụng</div>
                <span className="text-[10px] text-amber-400 block">{revenueEstimate?.reason || 'Cần cấu hình APIFY_API_TOKEN ở backend'}</span>
              </>
            )}
          </div>

          <div className="bg-zinc-900/80 p-5 rounded-2xl border border-amber-500/20 space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-[10px] font-bold uppercase tracking-wider block">Traffic Ước Tính / Tháng</span>
              <Users className="w-4 h-4 text-purple-400" />
            </div>
            {revenueEstimate?.available && typeof revenueEstimate.monthlyVisits === 'number' ? (
              <>
                <div className="text-2xl font-black text-purple-400 font-mono">
                  {(revenueEstimate.monthlyVisits / 1000).toFixed(1)}k Visits
                </div>
                <span className="text-[10px] text-zinc-400 flex items-center gap-1">
                  <Activity className="w-3 h-3 text-purple-400" />
                  {revenueEstimate.globalRank ? `Global Rank #${revenueEstimate.globalRank.toLocaleString()}` : 'Ước tính bên thứ 3 (Apify)'}
                </span>
              </>
            ) : (
              <>
                <div className="text-sm font-bold text-zinc-500">Không khả dụng</div>
                <span className="text-[10px] text-amber-400 block">{revenueEstimate?.reason || 'Cần cấu hình APIFY_API_TOKEN ở backend'}</span>
              </>
            )}
          </div>

          <div className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800 space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-[10px] font-bold uppercase tracking-wider block">Giá Trị Đơn (AOV Real)</span>
              <ShoppingBag className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl font-black text-amber-400 font-mono">
              ${realAvgPrice.toFixed(2)}
            </div>
            <span className="text-[10px] text-zinc-400 block">Tính từ giá thật trong /products.json</span>
          </div>

          <div className="bg-zinc-900/80 p-5 rounded-2xl border border-zinc-800 space-y-1.5 shadow-xs">
            <div className="flex items-center justify-between text-zinc-400">
              <span className="text-[10px] font-bold uppercase tracking-wider block">Tổng Sản Phẩm Real On-Sale</span>
              <Globe className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl font-black text-blue-400 font-mono">
              {realTotalProducts} Sản Phẩm
            </div>
            <span className="text-[10px] text-zinc-400 block">Quét trực tiếp từ /products.json</span>
          </div>
        </div>
      )}

      {liveData && !revenueEstimate?.available && (
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-start gap-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            Chưa có số liệu Doanh thu/Traffic đáng tin cậy cho domain này ({revenueEstimate?.reason || 'thiếu cấu hình nguồn dữ liệu'}).
            Dashboard đã <strong>ngừng bịa số</strong> cho phần này — cần cấu hình <code className="font-mono">APIFY_API_TOKEN</code> ở backend
            (actor <a href="https://apify.com/apivault_labs/shopify-store-analyzer" target="_blank" rel="noopener noreferrer" className="underline">apivault_labs/shopify-store-analyzer</a>, ~$0.007/store) để có ước tính thật từ traffic panel.
          </span>
        </div>
      )}

      {/* TRAFFIC SOURCES BREAKDOWN & STORE TECH STACK */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <Card className="lg:col-span-6 bg-zinc-900 border-zinc-800 p-6 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
            <TrendingUp className="w-4 h-4 text-purple-400" />
            Cơ Cấu Nguồn Traffic ({liveData?.domain || '...'})
          </h3>

          {trafficChannels.length > 0 ? (
            <div className="space-y-3 pt-1">
              <p className="text-[10px] text-zinc-500 -mt-1">Nguồn: {revenueEstimate?.source}</p>
              {trafficChannels.map((t, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-zinc-300">{t.channel}</span>
                    <span className="font-mono text-purple-300 font-bold">{t.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                    <div style={{ width: `${t.percent}%` }} className={cn("h-full rounded-full", TRAFFIC_CHANNEL_COLORS[idx % TRAFFIC_CHANNEL_COLORS.length])} />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-xs text-zinc-500 p-4 text-center">
              Không có dữ liệu nguồn traffic thật cho store này (cần APIFY_API_TOKEN, hoặc actor không trả về traffic_sources cho domain này).
            </div>
          )}
        </Card>

        <Card className="lg:col-span-6 bg-zinc-900 border-zinc-800 p-6 rounded-2xl space-y-4">
          <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
            <Cpu className="w-4 h-4 text-purple-400" />
            Cấu Hình Kỹ Thuật Store Real ({liveData?.domain || 'govee.com'})
          </h3>

          {liveData ? (
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400">Shopify Theme Detected:</span>
                <span className="font-bold text-purple-400 font-mono">{liveData.theme}</span>
              </div>

              <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400">Meta Facebook Pixel ID:</span>
                <span className="font-bold text-blue-400 font-mono">{liveData.metaPixel}</span>
              </div>

              <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 flex justify-between items-center">
                <span className="text-zinc-400">TikTok Pixel ID:</span>
                <span className="font-bold text-pink-400 font-mono">{liveData.tiktokPixel}</span>
              </div>

              <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 space-y-1.5">
                <span className="text-amber-400 font-bold uppercase tracking-wider text-[10px] block">
                  Apps & Plugins Phát Hiện ({liveData.apps.length} Apps):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {liveData.apps.length > 0 ? liveData.apps.map((app, idx) => (
                    <span key={idx} className="text-[10px] bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2 py-0.5 rounded-md font-mono">
                      {app}
                    </span>
                  )) : <span className="text-[11px] text-zinc-500">Shopify Store Standard Stack</span>}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-xs text-zinc-500 p-6 text-center">Đang tải cấu hình store đối thủ...</div>
          )}
        </Card>
      </div>

      {/* LIVE PRODUCTS SHOWCASE FROM /products.json */}
      {liveData && liveData.products.length > 0 && (
        <Card className="bg-zinc-900 border-zinc-800 p-6 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-purple-400" />
              Sản Phẩm Thực Tế Quét Trực Tiếp Từ `/products.json` ({liveData.products.length} Items)
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {liveData.products.slice(0, 4).map((p) => (
              <div key={p.id} className="p-3.5 bg-zinc-950 rounded-xl border border-zinc-800 space-y-2.5 flex flex-col justify-between">
                <div className="space-y-2">
                  {p.image ? (
                    <div className="w-full h-32 rounded-lg bg-zinc-900 overflow-hidden">
                      <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                    </div>
                  ) : null}
                  <h4 className="font-bold text-xs text-zinc-200 line-clamp-2">{p.title}</h4>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-zinc-900 text-xs font-mono">
                  <span className="font-bold text-emerald-400">${p.price.toFixed(2)}</span>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline flex items-center gap-1 text-[11px]">
                    Link Live <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </Card>
  );
}
