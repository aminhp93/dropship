import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { 
  TrendingUp, 
  ShoppingBag, 
  Store, 
  Video, 
  Search, 
  Sparkles, 
  Layers, 
  ExternalLink, 
  Eye, 
  Download, 
  Zap, 
  DollarSign, 
  BarChart3, 
  Filter, 
  Code2, 
  Cpu, 
  Globe, 
  CheckCircle2,
  Clock,
  Flame
} from 'lucide-react';

// Mock Data for PPSPY Features
const MOCK_LIVE_SALES = [
  { id: 'ord-1', time: '1 phút trước', store: 'Solume Co (US)', product: 'Portable UV-C Toothbrush Sanitizer', price: 39.99, qty: 2, country: '🇺🇸 US' },
  { id: 'ord-2', time: '3 phút trước', store: 'LumbarCare Pro', product: 'Ergonomic EMS Neck Massager', price: 59.99, qty: 1, country: '🇨🇦 CA' },
  { id: 'ord-3', time: '5 phút trước', store: 'Pawsome Haven', product: 'Quiet Pet Grooming & Vacuum Kit', price: 109.99, qty: 1, country: '🇬🇧 UK' },
  { id: 'ord-4', time: '7 phút trước', store: 'GlowHome Studio', product: 'Ultra-thin Motion Sensor LED Bar (3-Set)', price: 44.99, qty: 3, country: '🇦🇺 AU' },
  { id: 'ord-5', time: '12 phút trước', store: 'TechCleaner US', product: '7-in-1 Multifunctional Cleaner Kit', price: 16.99, qty: 2, country: '🇺🇸 US' },
];

const MOCK_BEST_SELLERS = [
  {
    id: 'prod-1',
    name: 'Portable UV-C Toothbrush Sanitizer & Dryer',
    store: 'Solume Co.',
    dailySales: 142,
    revenue15d: '$48,320',
    cogs: '$4.50',
    price: '$39.99',
    margin: '88%',
    apps: ['Loox Reviews', 'DSers', 'Klaviyo', 'PageFly'],
    theme: 'Dawn (Customized)',
    adTraffic: { meta: 65, tiktok: 25, search: 10 },
    winningScore: 9.4,
  },
  {
    id: 'prod-2',
    name: 'Ergonomic Infrared Heated EMS Neck Massager',
    store: 'NeckCare Studio',
    dailySales: 98,
    revenue15d: '$34,120',
    cogs: '$9.80',
    price: '$59.99',
    margin: '83%',
    apps: ['Judge.me', 'CJ Dropshipping', 'Omnisend'],
    theme: 'Impulse 7.1',
    adTraffic: { meta: 40, tiktok: 50, search: 10 },
    winningScore: 9.1,
  },
  {
    id: 'prod-3',
    name: 'Quiet Pet Grooming & Hair Vacuum Kit',
    store: 'Furless Pet Co.',
    dailySales: 64,
    revenue15d: '$52,480',
    cogs: '$22.00',
    price: '$119.99',
    margin: '81%',
    apps: ['Loox', 'Zendrop', 'Recharge Payments'],
    theme: 'Prestige 8.0',
    adTraffic: { meta: 75, tiktok: 15, search: 10 },
    winningScore: 8.8,
  },
];

const MOCK_STORES = [
  {
    name: 'solume.co',
    type: 'One-Product Store',
    estMonthlyRev: '$95,000 - $140,000',
    topProduct: 'UV Toothbrush Sanitizer',
    pixelId: 'FB-9842104921',
    theme: 'Dawn Theme v12.0',
    appsCount: 14,
    traffic: 'Meta Ads (70%), TikTok Ads (30%)',
    country: 'United States',
  },
  {
    name: 'glowhome-decor.com',
    type: 'Niche Store (Smart Lighting)',
    estMonthlyRev: '$60,000 - $85,000',
    topProduct: 'Magnetic Motion Sensor LED Bar',
    pixelId: 'FB-4412093812',
    theme: 'Impulse Theme',
    appsCount: 18,
    traffic: 'TikTok Organic (50%), Meta Ads (50%)',
    country: 'United States',
  },
];

export function PPSPYDashboard() {
  const [activeTab, setActiveTab] = useState<'sales' | 'products' | 'stores' | 'detector'>('sales');
  const [inspectorUrl, setInspectorUrl] = useState<string>('solume.co');
  const [inspectedData, setInspectedData] = useState<typeof MOCK_STORES[0] | null>(MOCK_STORES[0]);
  const [isInspecting, setIsInspecting] = useState<boolean>(false);

  const handleInspectStore = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inspectorUrl.trim()) return;
    setIsInspecting(true);
    setTimeout(() => {
      setInspectedData({
        name: inspectorUrl.replace(/^https?:\/\//, '').replace(/\/.*$/, ''),
        type: inspectorUrl.includes('one') ? 'One-Product Store' : 'General Niche Store',
        estMonthlyRev: '$45,000 - $80,000 (AI Estimate)',
        topProduct: 'Portable UV-C Toothbrush Sanitizer',
        pixelId: `FB-${Math.floor(1000000000 + Math.random() * 9000000000)}`,
        theme: 'Dawn Theme (Shopify Official)',
        appsCount: 12,
        traffic: 'Meta Ads Library (60%), TikTok Ads (40%)',
        country: 'United States',
      });
      setIsInspecting(false);
    }, 600);
  };

  return (
    <Card className="bg-zinc-950 border-purple-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6 text-white font-sans">
      {/* PPSPY Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Badge className="bg-purple-600 text-white font-black text-[10px] tracking-widest uppercase px-2.5 py-0.5">
              PPSPY Spy Suite
            </Badge>
            <span className="text-xs text-purple-400 font-mono flex items-center gap-1 font-bold">
              <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> Live Shopify Competitor Intelligence
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight flex items-center gap-2">
            <Eye className="w-6 h-6 text-purple-400" />
            PPSPY Competitor & Product Research Dashboard
          </h2>
          <p className="text-xs text-zinc-400 max-w-2xl leading-relaxed">
            Hệ thống theo dõi doanh số theo thời gian thực (Real-time Sales Tracker), soi Theme & App Shopify, phân tích nguồn Traffic Ads và tìm sản phẩm WIN.
          </p>
        </div>

        {/* Sub Feature Tabs */}
        <div className="flex items-center gap-1 bg-zinc-900/90 p-1.5 rounded-2xl border border-zinc-800/80 shrink-0">
          {[
            { id: 'sales', label: 'Sales Tracker', icon: DollarSign },
            { id: 'products', label: 'Product Research', icon: ShoppingBag },
            { id: 'stores', label: 'Store Explorer', icon: Store },
            { id: 'detector', label: 'Theme & App Detector', icon: Cpu },
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

      {/* TAB 1: REAL-TIME SALES TRACKER */}
      {activeTab === 'sales' && (
        <div className="space-y-6">
          {/* Top Live Stats Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Doanh số 24h (AI Forecast)</span>
              <span className="text-xl font-black text-emerald-400 font-mono">$18,450.00</span>
              <span className="text-[10px] text-zinc-500 block">↑ +14.2% so với hôm qua</span>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Đơn hàng mới / giờ</span>
              <span className="text-xl font-black text-purple-400 font-mono">32 Đơn/Giờ</span>
              <span className="text-[10px] text-zinc-500 block">Peak Time: 19:00 - 23:00 EST</span>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">AOV (Giá trị đơn trung bình)</span>
              <span className="text-xl font-black text-amber-400 font-mono">$46.80</span>
              <span className="text-[10px] text-zinc-500 block">Combo Multi-item 64%</span>
            </div>
            <div className="bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block">Báo cáo AI 15 Ngày</span>
              <span className="text-xl font-black text-blue-400 font-mono">$245,800.00</span>
              <span className="text-[10px] text-zinc-500 block">Độ chính xác AI: 96.5%</span>
            </div>
          </div>

          {/* Live Order Ticker Feed */}
          <div className="bg-zinc-900/60 p-5 rounded-2xl border border-zinc-800 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                Live Order Stream (Thời gian thực)
              </h3>
              <Badge variant="outline" className="text-[9px] font-mono border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
                ● Live Streaming
              </Badge>
            </div>

            <div className="space-y-2">
              {MOCK_LIVE_SALES.map((ord) => (
                <div key={ord.id} className="p-3 bg-zinc-950/80 rounded-xl border border-zinc-800/80 flex items-center justify-between text-xs hover:border-purple-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-zinc-500 shrink-0">{ord.time}</span>
                    <span className="font-bold text-purple-400 shrink-0">{ord.store}</span>
                    <span className="text-zinc-300 font-medium truncate max-w-[280px] sm:max-w-md">{ord.product}</span>
                  </div>
                  <div className="flex items-center gap-3 shrink-0 font-mono">
                    <span className="text-zinc-400">x{ord.qty}</span>
                    <span className="font-bold text-emerald-400">${(ord.price * ord.qty).toFixed(2)}</span>
                    <span className="text-[10px] bg-zinc-800 px-2 py-0.5 rounded-md text-zinc-300">{ord.country}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PRODUCT RESEARCH */}
      {activeTab === 'products' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-purple-400" />
              Sản Phẩm Bán Chạy Nhất Trực Tuyến (200M+ Database)
            </h3>
            <Button size="sm" className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-xl">
              <Download className="w-3.5 h-3.5 mr-1" /> Xuất File Excel / CSV
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_BEST_SELLERS.map((p) => (
              <Card key={p.id} className="bg-zinc-900 border-zinc-800 p-5 rounded-2xl space-y-4 text-white hover:border-purple-500/40 transition-all">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <Badge className="bg-purple-500/20 text-purple-300 font-mono text-[9px]">Score: {p.winningScore} / 10</Badge>
                    <span className="text-[10px] font-bold text-zinc-400">{p.store}</span>
                  </div>
                  <h4 className="font-bold text-sm text-zinc-100 line-clamp-2 leading-snug">{p.name}</h4>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800">
                    <span className="text-[9px] text-zinc-400 uppercase block font-sans">Doanh Thu 15 Ngày</span>
                    <span className="font-black text-emerald-400 text-sm">{p.revenue15d}</span>
                  </div>
                  <div className="p-2.5 bg-zinc-950 rounded-xl border border-zinc-800">
                    <span className="text-[9px] text-zinc-400 uppercase block font-sans">Đơn/Ngày</span>
                    <span className="font-black text-purple-400 text-sm">{p.dailySales} đơn</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-zinc-400 text-[11px]">
                    <span>Giá vốn (COGS): <strong className="text-zinc-200">{p.cogs}</strong></span>
                    <span>Giá bán: <strong className="text-zinc-200">{p.price}</strong></span>
                  </div>
                  <div className="flex justify-between text-zinc-400 text-[11px]">
                    <span>Biên lãi gộp: <strong className="text-emerald-400">{p.margin}</strong></span>
                    <span>Theme: <strong className="text-zinc-200">{p.theme}</strong></span>
                  </div>
                </div>

                <div className="pt-2 border-t border-zinc-800 flex flex-wrap gap-1">
                  {p.apps.map((app, i) => (
                    <span key={i} className="text-[9px] bg-zinc-800 text-zinc-300 px-2 py-0.5 rounded-md font-mono">{app}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: STORE EXPLORER */}
      {activeTab === 'stores' && (
        <div className="space-y-6">
          <h3 className="text-sm font-bold text-white flex items-center gap-2">
            <Store className="w-4 h-4 text-purple-400" />
            Khám Phá Cửa Hàng Shopify Đối Thủ (1M+ Active Stores)
          </h3>

          <div className="space-y-3">
            {MOCK_STORES.map((s, idx) => (
              <div key={idx} className="p-5 bg-zinc-900 rounded-2xl border border-zinc-800 space-y-3 hover:border-purple-500/30 transition-all">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-base text-purple-400">{s.name}</span>
                      <Badge variant="outline" className="text-[9px] font-mono text-zinc-300 border-zinc-700">{s.type}</Badge>
                    </div>
                    <span className="text-xs text-zinc-400">Sản phẩm chủ lực: <strong className="text-white">{s.topProduct}</strong></span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-zinc-400 block uppercase font-mono">Doanh thu dự tính / tháng</span>
                    <span className="font-black text-emerald-400 text-sm font-mono">{s.estMonthlyRev}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-300">
                  <div><span className="text-zinc-500">Facebook Pixel ID:</span> <code className="text-purple-300 font-mono">{s.pixelId}</code></div>
                  <div><span className="text-zinc-500">Shopify Theme:</span> <strong className="text-white">{s.theme}</strong></div>
                  <div><span className="text-zinc-500">Nguồn Traffic:</span> <strong className="text-white">{s.traffic}</strong></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: THEME & APP DETECTOR */}
      {activeTab === 'detector' && (
        <div className="space-y-6">
          <form onSubmit={handleInspectStore} className="space-y-3 bg-zinc-900 p-5 rounded-2xl border border-zinc-800">
            <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
              Nhập Tên Miền Cửa Hàng Shopify (Domain):
            </label>
            <div className="flex gap-3">
              <Input
                type="text"
                value={inspectorUrl}
                onChange={(e) => setInspectorUrl(e.target.value)}
                placeholder="Nhập tên miền đối thủ (Ví dụ: solume.co hoặc store.myshopify.com)..."
                className="bg-zinc-950 border-zinc-700 text-white text-sm focus:border-purple-500 rounded-xl"
              />
              <Button type="submit" disabled={isInspecting} className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-6 rounded-xl cursor-pointer">
                {isInspecting ? 'Đang Soi Store...' : 'Soi Theme & App Trực Tiếp'}
              </Button>
            </div>
          </form>

          {inspectedData && (
            <Card className="bg-zinc-900 border-purple-500/30 p-6 rounded-2xl space-y-5 text-white">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <div>
                  <h4 className="font-bold text-lg text-purple-400">{inspectedData.name}</h4>
                  <span className="text-xs text-zinc-400">Kết quả phân tích tự động bởi PPSPY Inspector Engine</span>
                </div>
                <Badge className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">Active Shopify Store</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-2">
                  <span className="text-purple-400 font-bold uppercase tracking-wider text-[10px] block">🎨 Shopify Theme Detected</span>
                  <span className="text-sm font-bold text-white block">{inspectedData.theme}</span>
                  <p className="text-zinc-400 text-[11px]">Cấu trúc Theme đã được tối ưu hóa tốc độ tải trang mobile & tỷ lệ chuyển đổi cao.</p>
                </div>

                <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-2">
                  <span className="text-purple-400 font-bold uppercase tracking-wider text-[10px] block">⚡ Apps & Plugins Cài Đặt (12 Apps)</span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {['Loox Reviews', 'DSers Fulfillment', 'Klaviyo Email', 'PageFly Builder', 'Sticky Cart Pro', 'Lucky Orange'].map((app, i) => (
                      <span key={i} className="text-[10px] bg-purple-500/10 text-purple-300 border border-purple-500/20 px-2 py-0.5 rounded-md font-mono">{app}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          )}
        </div>
      )}
    </Card>
  );
}
