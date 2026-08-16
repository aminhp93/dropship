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
  Layers,
  CheckCircle2,
  AlertCircle
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
  const [keyword, setKeyword] = useState<string>("dash cam");
  const [lastLaunchedKeyword, setLastLaunchedKeyword] = useState<string | null>(null);

  const cleanQuery = keyword.trim() || "dash cam";

  const platforms: PlatformConfig[] = [
    {
      id: "fbAds",
      name: "Facebook Ads Library (US)",
      category: "ads",
      icon: Facebook,
      color: "border-blue-500/30 text-blue-400 bg-blue-500/10",
      badge: "Active Ads • Max Impressions",
      description: "Xem các mẫu quảng cáo Facebook/Instagram đang active tại Mỹ, xếp theo lượt hiển thị cao nhất.",
      getUrl: (q) => `https://www.facebook.com/ads/library/?active_status=active&ad_type=all&country=US&is_targeted_country=false&media_type=all&q=${encodeURIComponent(q)}&search_type=keyword_unordered&sort_data[mode]=total_impressions&sort_data[direction]=desc`
    },
    {
      id: "tiktok",
      name: "TikTok Search Video",
      category: "social",
      icon: Video,
      color: "border-pink-500/30 text-pink-400 bg-pink-500/10",
      badge: "Organic Traffic • Viral Video",
      description: "Tìm kiếm video ngắn viral, xem ý định mua hàng trong comment (#tiktokmademebuyit).",
      getUrl: (q) => `https://www.tiktok.com/search/video?q=${encodeURIComponent(q)}`
    },
    {
      id: "googleShopping",
      name: "Google Shopping US",
      category: "shopping",
      icon: ShoppingBag,
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
      badge: "US Price • Competitors",
      description: "So sánh giá bán thực tế và nghiên cứu trang bán hàng của các đối thủ tại Mỹ.",
      getUrl: (q) => `https://www.google.com/search?q=${encodeURIComponent(q).replace(/%20/g, '+')}&hl=en&gl=us&sec_src=docs&udm=28`
    },
    {
      id: "googleTrends",
      name: "Google Trends (US 5-Year)",
      category: "trends",
      icon: TrendingUp,
      color: "border-amber-500/30 text-amber-400 bg-amber-500/10",
      badge: "5-Year Search Volume • Seasonality",
      description: "Phân tích xu hướng tìm kiếm 5 năm qua tại Mỹ (kiểm tra tính mùa vụ & độ tăng trưởng).",
      getUrl: (q) => `https://trends.google.com/trends/explore?geo=US&date=today%205-y&q=${encodeURIComponent(q)}&hl=en`
    },
    {
      id: "keywordPlanner",
      name: "Google Keyword Planner",
      category: "trends",
      icon: Layers,
      color: "border-purple-500/30 text-purple-400 bg-purple-500/10",
      badge: "Search Volume • Top Bids",
      description: "Đo lường lượng tìm kiếm hàng tháng (Monthly Search Volume) và chi phí đấu giá từ khóa.",
      getUrl: () => `https://ads.google.com/aw/keywordplanner/ideas/new?ocid=8463729243&ascid=8463729243&euid=6596601082&__u=4928328618&uscid=8463729243&__c=9691242307&authuser=0&sourceid=emp`
    }
  ];

  const handleLaunchAll = (targetQuery?: string) => {
    const q = targetQuery || cleanQuery;
    
    // Open all 5 links with micro-delays to bypass browser pop-up blocker
    platforms.forEach((p, index) => {
      setTimeout(() => {
        const link = document.createElement('a');
        link.href = p.getUrl(q);
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }, index * 100);
    });

    setLastLaunchedKeyword(q);
  };

  const handleLaunchSingle = (p: PlatformConfig) => {
    window.open(p.getUrl(cleanQuery), '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="bg-zinc-900/90 border-purple-500/30 p-6 sm:p-8 rounded-3xl shadow-2xl space-y-6">
      {/* Input Section */}
      <div className="space-y-4 bg-zinc-950/70 p-5 rounded-2xl border border-zinc-800/80">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider block">
            Nhập Từ Khóa Sản Phẩm (Keyword):
          </label>
          {lastLaunchedKeyword && (
            <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> Đã mở 5 tab cho từ khóa "{lastLaunchedKeyword}"
            </span>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <Input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="Nhập tên sản phẩm (Ví dụ: dash cam)..."
              className="pl-10 bg-zinc-900 border-zinc-700 text-white text-sm focus:border-purple-500 focus:ring-purple-500/20 rounded-xl"
            />
          </div>

          <Button
            onClick={() => handleLaunchAll()}
            className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-6 py-2.5 rounded-xl flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-md"
          >
            <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
            🚀 Mở Tất Cả 5 Tab Mới
          </Button>
        </div>

        {/* Browser Pop-up Hint Note */}
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300/90 font-medium">
          <AlertCircle className="w-4 h-4 shrink-0 text-amber-400" />
          <span>
            Lưu ý: Nếu trình duyệt hiển thị thông báo **"Pop-ups blocked"** ở góc thanh URL, hãy chọn **"Always allow pop-ups" (Luôn cho phép cửa sổ bật lên)** để trình duyệt mở đủ 5 tab cùng lúc.
          </span>
        </div>
      </div>

      {/* Platform Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {platforms.map((p) => (
          <div
            key={p.id}
            onClick={() => handleLaunchSingle(p)}
            className="p-4 rounded-2xl border border-zinc-800/80 bg-zinc-900/60 hover:bg-zinc-900 hover:border-purple-500/40 transition-all cursor-pointer flex flex-col justify-between space-y-3 group shadow-xs"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn("p-1.5 rounded-lg border", p.color)}>
                    <p.icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white group-hover:text-purple-400 transition-colors">{p.name}</span>
                </div>
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
              className="w-full bg-zinc-800 hover:bg-purple-600 text-zinc-200 hover:text-white text-[11px] font-semibold py-1.5 rounded-xl flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
            >
              <span>Mở tab này</span>
              <ExternalLink className="w-3 h-3 text-zinc-400 group-hover:text-white" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}
