import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  ExternalLink, 
  Sparkles, 
  TrendingUp, 
  ShoppingBag, 
  Video, 
  Facebook, 
  Image as ImageIcon,
  CheckCircle2
} from 'lucide-react';

interface PlatformConfig {
  id: string;
  name: string;
  category: 'ads' | 'social' | 'shopping' | 'trends';
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  badge: string;
  description: string;
  getUrl: (query: string) => string;
}

export function MarketResearchTool() {
  const [keyword, setKeyword] = useState<string>("Portable UV Toothbrush Sanitizer");
  const [selectedPlatforms, setSelectedPlatforms] = useState<Record<string, boolean>>({
    fbAds: true,
    tiktok: true,
    pinterest: true,
    googleTrends: true,
    aliExpress: true,
  });
  const [lastLaunchedKeyword, setLastLaunchedKeyword] = useState<string | null>(null);

  const cleanQuery = keyword.trim() || "Portable UV Toothbrush Sanitizer";

  const platforms: PlatformConfig[] = [
    {
      id: "fbAds",
      name: "Facebook Ads Library (US)",
      category: "ads",
      icon: Facebook,
      color: "border-blue-500/30 text-blue-400 bg-blue-500/10",
      badge: "Active Ads • Max Impressions",
      description: "Xem các mẫu quảng cáo Facebook/Instagram đang active tại Mỹ, xếp theo lượt hiển thị cao nhất.",
      getUrl: (q) => `https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&is_targeted_country=false&media_type=all&q=${encodeURIComponent(q)}&search_type=keyword_unordered`
    },
    {
      id: "tiktok",
      name: "TikTok Search (Organic & Viral)",
      category: "social",
      icon: Video,
      color: "border-pink-500/30 text-pink-400 bg-pink-500/10",
      badge: "Organic Traffic • Viral Video",
      description: "Tìm kiếm video ngắn viral, xem ý định mua hàng trong comment (#tiktokmademebuyit).",
      getUrl: (q) => `https://www.tiktok.com/search?q=${encodeURIComponent(q)}`
    },
    {
      id: "pinterest",
      name: "Pinterest Search & Trends",
      category: "social",
      icon: ImageIcon,
      color: "border-red-500/30 text-red-400 bg-red-500/10",
      badge: "Visual Search • Aesthetic Trends",
      description: "Tra cứu hình ảnh visual, infographic sản phẩm và ý tưởng trang trí/quà tặng của tệp nữ Mỹ.",
      getUrl: (q) => `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(q)}`
    },
    {
      id: "googleTrends",
      name: "Google Trends (US 5-Year)",
      category: "trends",
      icon: TrendingUp,
      color: "border-amber-500/30 text-amber-400 bg-amber-500/10",
      badge: "5-Year Search Volume • Seasonality",
      description: "Phân tích xu hướng tìm kiếm 5 năm qua tại Mỹ (kiểm tra tính mùa vụ & độ tăng trưởng).",
      getUrl: (q) => `https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=${encodeURIComponent(q)}&hl=en`
    },
    {
      id: "aliExpress",
      name: "AliExpress Wholesale Search",
      category: "shopping",
      icon: ShoppingBag,
      color: "border-orange-500/30 text-orange-400 bg-orange-500/10",
      badge: "COGS & Suppliers",
      description: "Tra cứu giá vốn nhập kho, lượt bán và xếp hạng nhà cung cấp uy tín trên AliExpress.",
      getUrl: (q) => `https://www.aliexpress.com/w/wholesale-${encodeURIComponent(q).replace(/%20/g, '-')}.html`
    }
  ];

  const handleTogglePlatform = (id: string) => {
    setSelectedPlatforms(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectAll = (select: boolean) => {
    const updated: Record<string, boolean> = {};
    platforms.forEach(p => { updated[p.id] = select; });
    setSelectedPlatforms(updated);
  };

  const handleLaunchAll = (targetQuery?: string) => {
    const q = targetQuery || cleanQuery;
    const activeList = platforms.filter(p => selectedPlatforms[p.id]);
    activeList.forEach(p => {
      window.open(p.getUrl(q), '_blank');
    });
    setLastLaunchedKeyword(q);
  };

  const handleLaunchSingle = (p: PlatformConfig) => {
    window.open(p.getUrl(cleanQuery), '_blank');
  };

  return (
    <Card className="bg-zinc-900/90 border-purple-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800 pb-6">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Badge className="bg-purple-500/20 text-purple-400 border border-purple-500/30 font-mono text-[10px] uppercase tracking-widest font-bold">
              Product Research Tool
            </Badge>
            <span className="text-xs text-zinc-500 font-mono">1-Click Multi-Tab Launcher</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Search className="w-6 h-6 text-purple-400" />
            Tra Cứu Thị Trường & Ads Spy Cửa Sổ Mới
          </h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Nhập từ khóa sản phẩm để tự động mở đồng loạt cả 5 nền tảng (Facebook Ads Library, TikTok, Pinterest, Google Trends, AliExpress) trong 5 tab trình duyệt mới!
          </p>
        </div>

        <Button
          onClick={() => handleLaunchAll()}
          className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs px-6 py-3.5 rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          🚀 MỞ CẢ 5 TAB TRÌNH DUYỆT MỚI
        </Button>
      </div>

      {/* Input Section */}
      <div className="space-y-4 bg-zinc-950/70 p-5 rounded-2xl border border-zinc-800/80">
        <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
          Nhập Từ Khóa Sản Phẩm (Keyword):
        </label>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Nhập tên sản phẩm (Ví dụ: Portable UV Toothbrush Sanitizer)..."
              className="pl-10 bg-zinc-900 border-zinc-700 text-white text-sm focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
            />
          </div>

          <Button
            onClick={() => handleLaunchAll()}
            className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <ExternalLink className="w-4 h-4" />
            Mở Tất Cả 5 Tab Mới
          </Button>
        </div>
      </div>

      {/* Controls Bar & Checkboxes */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <span className="font-bold text-zinc-300 uppercase tracking-wider text-[11px]">Danh Sách 5 Nền Tảng Sẽ Mở:</span>
            <button
              onClick={() => handleSelectAll(true)}
              className="text-purple-400 hover:underline font-semibold text-[11px] cursor-pointer"
            >
              Chọn tất cả (5)
            </button>
            <span className="text-zinc-600">•</span>
            <button
              onClick={() => handleSelectAll(false)}
              className="text-zinc-500 hover:underline font-medium text-[11px] cursor-pointer"
            >
              Bỏ chọn
            </button>
          </div>
          {lastLaunchedKeyword && (
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Đã mở từ khóa "{lastLaunchedKeyword}"
            </span>
          )}
        </div>

        {/* Platform Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {platforms.map((p) => {
            const isChecked = !!selectedPlatforms[p.id];
            return (
              <div
                key={p.id}
                onClick={() => handleTogglePlatform(p.id)}
                className={cn(
                  "p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3",
                  isChecked
                    ? "bg-zinc-900/80 border-purple-500/40 shadow-xs"
                    : "bg-zinc-950/40 border-zinc-800/60 opacity-60 hover:opacity-100"
                )}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={cn("p-1.5 rounded-lg border", p.color)}>
                        <p.icon className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-bold text-white">{p.name}</span>
                    </div>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="accent-purple-500 w-4 h-4 cursor-pointer"
                    />
                  </div>
                  <Badge variant="outline" className="text-[9px] font-mono text-zinc-400 border-zinc-800">
                    {p.badge}
                  </Badge>
                  <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <Button
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleLaunchSingle(p);
                  }}
                  className="w-full bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-semibold py-1.5 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Mở riêng tab này</span>
                  <ExternalLink className="w-3 h-3 text-zinc-400" />
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}
