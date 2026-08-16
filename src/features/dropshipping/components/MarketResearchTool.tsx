import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Search, 
  ExternalLink, 
  Sparkles, 
  TrendingUp, 
  Share2, 
  ShoppingBag, 
  Video, 
  Facebook, 
  Layers,
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

const PRESET_KEYWORDS = [
  "Compostable paper plates",
  "Portable UV Toothbrush Sanitizer",
  "Astronaut Star Projector",
  "Dog Car Seat Cover",
  "Electric Cleaning Brush"
];

export function MarketResearchTool() {
  const [keyword, setKeyword] = useState<string>("Compostable paper plates");
  const [selectedPlatforms, setSelectedPlatforms] = useState<Record<string, boolean>>({
    fbAds: true,
    tiktok: true,
    googleShopping: true,
    googleTrends: true,
    keywordPlanner: true,
  });
  const [lastLaunchedKeyword, setLastLaunchedKeyword] = useState<string | null>(null);

  const cleanQuery = keyword.trim() || "Compostable paper plates";

  const platforms: PlatformConfig[] = [
    {
      id: "fbAds",
      name: "Facebook Ads Library (US)",
      category: "ads",
      icon: Facebook,
      color: "border-blue-500/30 text-blue-400 bg-blue-500/10",
      badge: "Active Ads • Max Impressions",
      description: "Xem các mẫu quảng cáo Facebook/Instagram đang active tại Mỹ, xếp theo lượt hiển thị cao nhất.",
      getUrl: (q) => `https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&is_targeted_country=false&media_type=all&q=${encodeURIComponent(q)}&search_type=keyword_unordered&sort_data[direction]=desc&sort_data[mode]=total_impressions`
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
      id: "googleShopping",
      name: "Google Shopping US",
      category: "shopping",
      icon: ShoppingBag,
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
      badge: "US Market Price • Competitors",
      description: "So sánh giá bán thực tế và nghiên cứu trang bán hàng của các đối thủ Mỹ.",
      getUrl: (q) => `https://www.google.com/search?q=${encodeURIComponent(q).replace(/%20/g, '+')}&hl=en&gl=us&udm=28`
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
      id: "keywordPlanner",
      name: "Google Keyword Planner",
      category: "trends",
      icon: Layers,
      color: "border-purple-500/30 text-purple-400 bg-purple-500/10",
      badge: "Search Volume • Top of Page Bid",
      description: "Đo lường lượng tìm kiếm hàng tháng (Monthly Search Volume) và chi phí đấu giá từ khóa.",
      getUrl: () => `https://ads.google.com/aw/keywordplanner/ideas/new?ocid=8463729243&ascid=8463729243&euid=6596601082&__u=4928328618&uscid=8463729243&__c=9691242307&authuser=0&sourceid=emp`
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

  const handleLaunchAll = () => {
    const activeList = platforms.filter(p => selectedPlatforms[p.id]);
    activeList.forEach(p => {
      window.open(p.getUrl(cleanQuery), '_blank');
    });
    setLastLaunchedKeyword(cleanQuery);
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
            <span className="text-xs text-zinc-500 font-mono">1-Click Spy Hub</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
            <Search className="w-6 h-6 text-purple-400" />
            Công Cụ Tra Cứu Thị Trường & Ads Spy
          </h2>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Nhập tên sản phẩm để tự động mở đồng loạt 5 nền tảng nghiên cứu thị trường & quảng cáo tại Mỹ.
          </p>
        </div>

        <Button
          onClick={handleLaunchAll}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs px-6 py-3 rounded-2xl shadow-xl transition-all hover:scale-105 flex items-center gap-2 shrink-0 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
          🚀 MỞ TẤT CẢ TABS NGHỊÊN CỨU
        </Button>
      </div>

      {/* Input Section */}
      <div className="space-y-3 bg-zinc-950/70 p-5 rounded-2xl border border-zinc-800/80">
        <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
          Tên / Từ Khóa Sản Phẩm (Keyword):
        </label>
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Nhập tên sản phẩm (Ví dụ: Compostable paper plates)..."
              className="pl-10 bg-zinc-900 border-zinc-700 text-white text-sm focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
            />
          </div>
          <Button
            onClick={handleLaunchAll}
            className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-5 rounded-xl flex items-center gap-1.5 shrink-0"
          >
            <Share2 className="w-4 h-4" />
            Tra Cứu Từ Khóa
          </Button>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          <span className="text-[11px] text-zinc-500 font-medium">Gợi ý từ khóa mẫu:</span>
          {PRESET_KEYWORDS.map((preset) => (
            <button
              key={preset}
              onClick={() => setKeyword(preset)}
              className={cn(
                "text-[11px] px-2.5 py-1 rounded-lg border transition-all font-mono cursor-pointer",
                keyword === preset
                  ? "bg-purple-500/20 text-purple-300 border-purple-500/50 font-bold"
                  : "bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-800 hover:text-zinc-200"
              )}
            >
              {preset}
            </button>
          ))}
        </div>
      </div>

      {/* Controls Bar */}
      <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
        <div className="flex items-center gap-3">
          <span className="font-semibold text-zinc-300">Chọn Nền Tảng Theo Dõi:</span>
          <button
            onClick={() => handleSelectAll(true)}
            className="text-purple-400 hover:underline font-medium text-[11px] cursor-pointer"
          >
            Chọn tất cả
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
          <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5" />
            Đã mở tabs cho: "{lastLaunchedKeyword}"
          </span>
        )}
      </div>

      {/* Platforms List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {platforms.map((p) => {
          const isSelected = !!selectedPlatforms[p.id];
          const IconComp = p.icon;
          const currentUrl = p.getUrl(cleanQuery);

          return (
            <div
              key={p.id}
              className={cn(
                "p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-3 relative group",
                isSelected
                  ? "bg-zinc-950/80 border-zinc-700/80 shadow-md"
                  : "bg-zinc-950/40 border-zinc-800/50 opacity-60"
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id={`platform-${p.id}`}
                    checked={isSelected}
                    onCheckedChange={() => handleTogglePlatform(p.id)}
                    className="mt-1 border-zinc-700 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className={cn("p-1.5 rounded-lg border flex items-center justify-center shrink-0", p.color)}>
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h4 className="font-bold text-sm text-white">{p.name}</h4>
                    </div>
                    <Badge variant="outline" className={cn("text-[9px] font-mono font-bold uppercase py-0.5 px-2", p.color)}>
                      {p.badge}
                    </Badge>
                  </div>
                </div>

                <Button
                  onClick={() => handleLaunchSingle(p)}
                  size="sm"
                  variant="outline"
                  className="border-zinc-700 hover:border-purple-500 hover:bg-purple-500/10 text-xs font-bold text-zinc-300 hover:text-purple-300 rounded-xl flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  <span>Mở Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Button>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed pl-7">
                {p.description}
              </p>

              <div className="pl-7 pt-1">
                <a
                  href={currentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-mono text-zinc-500 hover:text-purple-400 truncate block transition-colors max-w-full"
                >
                  🔗 {currentUrl}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
