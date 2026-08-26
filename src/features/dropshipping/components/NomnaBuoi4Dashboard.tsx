import React, { useState } from 'react';
import {
  Globe,
  Plus,
  History,
  Settings,
  Search,
  CheckCircle2,
  Sparkles,
  Download,
  Store,
  Layers,
  Box,
  Clock,
  ExternalLink,
  ChevronRight,
  Filter,
  Image as ImageIcon,
  FileText,
  Trash2,
  RefreshCw,
  User,
} from 'lucide-react';

export interface StoreCardData {
  id: string;
  name: string;
  domain: string;
  productsCount: number;
  collectionsCount: number;
  deletedCount?: number;
  lastUpdated: string;
  iconBg: string;
  isNiche?: boolean;
}

export interface NomnaProductItem {
  id: string;
  name: string;
  collection: string;
  imageUrl: string;
  aiMockups: string[];
  adCopies: string[];
}

const MOCK_STORES: StoreCardData[] = [
  {
    id: 'store-1',
    name: 'Nail Handy',
    domain: 'nailhandy.com',
    productsCount: 1403,
    collectionsCount: 45,
    deletedCount: 4,
    lastUpdated: 'Cập nhật 35 phút trước',
    iconBg: 'bg-zinc-800',
    isNiche: true,
  },
  {
    id: 'store-2',
    name: 'spryinterior.com',
    domain: 'spryinterior.com',
    productsCount: 8387,
    collectionsCount: 143,
    deletedCount: 21,
    lastUpdated: 'Cập nhật 12:59 13/08/2026',
    iconBg: 'bg-zinc-800',
  },
  {
    id: 'store-3',
    name: 'etswoodcrafts.com',
    domain: 'etswoodcrafts.com',
    productsCount: 3748,
    collectionsCount: 55,
    deletedCount: 0,
    lastUpdated: 'Cập nhật 08/08/2026',
    iconBg: 'bg-zinc-800',
  },
  {
    id: 'store-4',
    name: 'roytimber.com',
    domain: 'roytimber.com',
    productsCount: 3748,
    collectionsCount: 55,
    deletedCount: 10,
    lastUpdated: 'Cập nhật 12:59 13/08/2026',
    iconBg: 'bg-zinc-800',
  },
  {
    id: 'store-5',
    name: 'Timber Vintique',
    domain: 'timber-vintique.com',
    productsCount: 10765,
    collectionsCount: 124,
    deletedCount: 13,
    lastUpdated: 'Cập nhật 23:17 12/08/2026',
    iconBg: 'bg-zinc-800',
  },
  {
    id: 'store-6',
    name: '3 nguồn nội thất',
    domain: 'roytimber-etswoodcrafts-spry-union',
    productsCount: 11455,
    collectionsCount: 124,
    deletedCount: 25,
    lastUpdated: 'Cập nhật 23:17 05/07/2026',
    iconBg: 'bg-zinc-800',
  },
  {
    id: 'store-7',
    name: 'donsilcart.com',
    domain: 'donsilcart.com',
    productsCount: 200,
    collectionsCount: 13,
    deletedCount: 0,
    lastUpdated: 'Cập nhật 10/08/2026',
    iconBg: 'bg-zinc-800',
  },
  {
    id: 'store-8',
    name: 'lovful.com',
    domain: 'lovful.com',
    productsCount: 2453,
    collectionsCount: 100,
    deletedCount: 0,
    lastUpdated: 'Cập nhật 11/08/2026',
    iconBg: 'bg-zinc-800',
  },
];

const MOCK_NOMNA_PRODUCTS: NomnaProductItem[] = [
  {
    id: 'p-1',
    name: 'Mad Hour',
    collection: 'Press-On Nails',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80',
    aiMockups: [
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&auto=format&fit=crop&q=80',
    ],
    adCopies: [
      '🔥 Mẫu Mad Hour Press-On Nails hot nhất mùa Halloween! Đẹp chuẩn Salon chỉ sau 5 phút.',
      'Giải pháp làm móng nhanh gọn không sợ hư hại móng gốc với Mad Hour Set.',
    ],
  },
  {
    id: 'p-2',
    name: 'Twin Spiral',
    collection: 'Press-On Nails',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&auto=format&fit=crop&q=80',
    aiMockups: ['https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&auto=format&fit=crop&q=80'],
    adCopies: ['Twin Spiral Nail Art Set - Phong cách tối giản sang trọng.'],
  },
  {
    id: 'p-3',
    name: 'Haunted Cement',
    collection: 'Press-On Nails',
    imageUrl: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&auto=format&fit=crop&q=80',
    aiMockups: ['https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&auto=format&fit=crop&q=80'],
    adCopies: ['Haunted Cement - Tone xám mờ cá tính đỉnh cao.'],
  },
];

export function NomnaBuoi4Dashboard() {
  const [topTab, setTopTab] = useState<'nomna' | 'dangbai' | 'video' | 'shopify' | 'quangcao'>('shopify');
  const [selectedStoreSidebar, setSelectedStoreSidebar] = useState('sanpham');
  const [selectedProduct, setSelectedProduct] = useState<NomnaProductItem>(MOCK_NOMNA_PRODUCTS[0]);
  const [centerSubTab, setCenterSubTab] = useState<'image' | 'content'>('image');
  const [selectedMockupIndex, setSelectedMockupIndex] = useState(0);
  const [showCrawlerWidget, setShowCrawlerWidget] = useState(true);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white rounded-xl overflow-hidden border border-zinc-800">
      {/* 1. TOP HEADER NAVIGATION */}
      <header className="h-14 bg-zinc-900 border-b border-zinc-800 px-6 flex items-center justify-between sticky top-0 z-40">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-red-600 text-white font-extrabold flex items-center justify-center text-sm tracking-tighter">
              N
            </div>
            <span className="font-extrabold text-base text-white tracking-tight">Nomna</span>
          </div>

          <nav className="flex items-center gap-1 text-xs font-semibold">
            <button
              onClick={() => setTopTab('nomna')}
              className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                topTab === 'nomna' ? 'bg-red-600 text-white font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Nomna
            </button>
            <button
              onClick={() => setTopTab('dangbai')}
              className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                topTab === 'dangbai' ? 'bg-red-600 text-white font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Đăng bài
            </button>
            <button
              onClick={() => setTopTab('video')}
              className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                topTab === 'video' ? 'bg-red-600 text-white font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Video
            </button>
            <button
              onClick={() => setTopTab('shopify')}
              className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                topTab === 'shopify' ? 'bg-red-600 text-white font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Shopify
            </button>
            <button
              onClick={() => setTopTab('quangcao')}
              className={`px-4 py-1.5 rounded-full transition-colors cursor-pointer ${
                topTab === 'quangcao' ? 'bg-red-600 text-white font-bold' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Quảng cáo
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Tìm kiếm store..."
              className="h-8 pl-8 pr-3 bg-zinc-950 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500 focus:outline-none w-44"
            />
          </div>

          <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-300">
            <User className="w-3.5 h-3.5 text-red-500" />
            <span className="font-semibold text-xs">Nail Handy</span>
          </div>
        </div>
      </header>

      {/* 2. FLOATING TC CRAWLER EXTENSION OVERLAY WIDGET */}
      {showCrawlerWidget && (
        <div className="fixed top-20 right-8 z-50 bg-zinc-900 border border-zinc-700 rounded-xl p-3.5 shadow-2xl space-y-2.5 w-76 text-xs">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
            <div className="flex items-center gap-2 font-bold text-white">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              TC Crawler Extension
            </div>
            <button onClick={() => setShowCrawlerWidget(false)} className="text-zinc-500 hover:text-zinc-300">✕</button>
          </div>
          <div className="space-y-1.5">
            <button onClick={() => alert('Đang tải toàn bộ 1.403 sản phẩm...')} className="w-full py-1.5 rounded bg-red-600 hover:bg-red-500 text-white font-bold cursor-pointer text-center">
              Tải sản phẩm (1.403)
            </button>
            <button onClick={() => alert('Đang tải toàn bộ 45 bộ sưu tập...')} className="w-full py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold cursor-pointer text-center border border-zinc-700">
              Tải bộ sưu tập (45)
            </button>
          </div>
        </div>
      )}

      {/* 3. TAB CONTENT 'SHOPIFY' */}
      {topTab === 'shopify' && (
        <div className="flex-1 flex overflow-hidden">
          <aside className="w-56 bg-zinc-900/60 border-r border-zinc-800 p-4 space-y-6 shrink-0 text-xs">
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">TỔNG QUAN</div>
              <button className="w-full text-left px-3 py-1.5 rounded bg-zinc-800 text-white font-semibold">Tắt</button>
            </div>
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">DỮ LIỆU CRAWL</div>
              <button onClick={() => setSelectedStoreSidebar('sanpham')} className={`w-full text-left px-3 py-1.5 rounded ${selectedStoreSidebar === 'sanpham' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400'}`}>Sản phẩm</button>
              <button onClick={() => setSelectedStoreSidebar('local')} className={`w-full text-left px-3 py-1.5 rounded ${selectedStoreSidebar === 'local' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400'}`}>Local</button>
              <button onClick={() => setSelectedStoreSidebar('trenstore')} className={`w-full text-left px-3 py-1.5 rounded ${selectedStoreSidebar === 'trenstore' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400'}`}>Trên store</button>
            </div>
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">BIÊN TẬP</div>
              <button className="w-full text-left px-3 py-1.5 rounded text-zinc-400">Nội dung</button>
              <button className="w-full text-left px-3 py-1.5 rounded text-zinc-400">Đưa lên Shopify</button>
              <button className="w-full text-left px-3 py-1.5 rounded text-zinc-400">Ảnh trên store</button>
            </div>
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono text-zinc-500 uppercase">PHÁT HÀNH</div>
              <button className="w-full text-left px-3 py-1.5 rounded text-zinc-400">Kết nối store</button>
            </div>
          </aside>

          <main className="flex-1 p-6 overflow-y-auto space-y-6">
            <div>
              <div className="text-xs text-zinc-500 font-mono">Shopify / Registry</div>
              <h2 className="text-2xl font-bold text-white mt-0.5">Shopify</h2>
              <p className="text-xs text-zinc-400">Quản lý sản phẩm và cửa hàng</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="text-xs text-zinc-500">Cửa hàng</div>
                <div className="text-2xl font-bold text-white">12</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="text-xs text-zinc-500">Sản phẩm</div>
                <div className="text-2xl font-bold text-white">46.319</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="text-xs text-zinc-500">Bộ sưu tập</div>
                <div className="text-2xl font-bold text-white">1.054</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-1">
                <div className="text-xs text-zinc-500">Đã mục chờ duyệt (30 ngày)</div>
                <div className="text-2xl font-bold text-white">574</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Store className="w-4 h-4 text-zinc-400" /> Cửa hàng đã lưu
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MOCK_STORES.map((store) => (
                  <div key={store.id} className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-bold text-white">
                        {store.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-bold text-sm text-white">{store.name}</h4>
                          {store.isNiche && <span className="px-1.5 py-0.2 rounded bg-red-950 text-red-400 border border-red-800 text-[10px] font-mono">Niche Active</span>}
                        </div>
                        <div className="text-xs text-zinc-400 font-mono">{store.domain}</div>
                        <div className="flex items-center gap-3 text-xs text-zinc-400 pt-1">
                          <span><strong className="text-white">{store.productsCount.toLocaleString('vi-VN')}</strong> sản phẩm</span>
                          <span>•</span>
                          <span><strong className="text-white">{store.collectionsCount}</strong> bộ sưu tập</span>
                        </div>
                        <div className="text-[10px] text-zinc-500 font-mono pt-1">{store.lastUpdated}</div>
                      </div>
                    </div>
                    <a href={`https://${store.domain}`} target="_blank" rel="noreferrer" className="p-1.5 bg-zinc-800 text-zinc-400 hover:text-white rounded-lg">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      )}

      {/* 4. TAB CONTENT 'QUẢNG CÁO' */}
      {topTab === 'quangcao' && (
        <div className="flex-1 flex overflow-hidden">
          <div className="w-full flex flex-col">
            <div className="h-10 bg-zinc-900/90 border-b border-zinc-800 px-6 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3 text-zinc-400">
                <span className="text-white font-bold">Tất cả sản phẩm</span>
                <span>/</span>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono text-[11px]">Catalog live 1-18 / 1.374</span>
              </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
              <aside className="w-48 bg-zinc-900/60 border-r border-zinc-800 p-4 space-y-4 shrink-0 text-xs">
                <button onClick={() => alert('Đang tạo chiến dịch quảng cáo...')} className="w-full py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg flex items-center justify-center gap-1.5">
                  <Plus className="w-4 h-4" /> Tạo
                </button>
                <div className="space-y-1 pt-2">
                  <button className="w-full text-left px-3 py-1.5 rounded bg-zinc-800 text-white font-bold flex items-center gap-2">
                    <History className="w-3.5 h-3.5 text-zinc-400" /> Lịch sử
                  </button>
                  <button className="w-full text-left px-3 py-1.5 rounded text-zinc-400 hover:text-white flex items-center gap-2">
                    <Settings className="w-3.5 h-3.5 text-zinc-400" /> Cài đặt Meta
                  </button>
                </div>
              </aside>

              <div className="w-64 border-r border-zinc-800 p-4 space-y-3 shrink-0 flex flex-col bg-zinc-950">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input type="text" placeholder="Tìm sản phẩm..." className="w-full h-8 pl-8 pr-3 bg-zinc-900 border border-zinc-800 rounded-lg text-xs text-white placeholder-zinc-500" />
                </div>
                <div className="flex-1 overflow-y-auto space-y-1 pr-1">
                  {MOCK_NOMNA_PRODUCTS.map((prod) => (
                    <button key={prod.id} onClick={() => setSelectedProduct(prod)} className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between ${selectedProduct.id === prod.id ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400'}`}>
                      <span className="truncate">{prod.name}</span>
                      <ChevronRight className="w-3 h-3 text-zinc-600" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex-1 p-6 overflow-y-auto space-y-6 flex flex-col">
                <div className="flex items-center gap-3 border-b border-zinc-800 pb-3">
                  <button onClick={() => setCenterSubTab('image')} className={`px-4 py-1.5 rounded-full text-xs font-bold ${centerSubTab === 'image' ? 'bg-red-600 text-white' : 'bg-zinc-900 text-zinc-400'}`}>1. Hình ảnh</button>
                  <button onClick={() => setCenterSubTab('content')} className={`px-4 py-1.5 rounded-full text-xs font-bold ${centerSubTab === 'content' ? 'bg-red-600 text-white' : 'bg-zinc-900 text-zinc-400'}`}>2. Nội dung Ads</button>
                </div>

                {centerSubTab === 'image' && (
                  <div className="flex-1 flex flex-col space-y-4">
                    <div className="flex-1 p-4 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center relative min-h-[320px]">
                      <img src={selectedProduct.aiMockups[selectedMockupIndex] || selectedProduct.imageUrl} alt={selectedProduct.name} className="max-h-[380px] w-auto object-contain rounded-lg" />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
