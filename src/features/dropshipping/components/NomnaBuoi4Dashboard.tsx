import React, { useState } from 'react';
import {
  Search,
  CheckCircle2,
  ExternalLink,
  Plus,
  History,
  Settings,
  Store,
  Box,
  Image as ImageIcon,
  FileText,
  Trash2,
  User,
  AlertTriangle,
  Sparkles,
  Download,
  ArrowRight,
  Globe,
  ChevronDown,
  RotateCcw,
  Check,
  ShieldCheck,
  X,
  LayoutDashboard,
  Wand2,
  CloudUpload,
  Link as LinkIcon,
  Folder,
  Zap,
  Edit3,
  Maximize2,
  ChevronLeft,
  Bot,
  ArrowLeftRight,
  Copy,
  Loader2,
  Key,
  Save,
  Sliders,
  Send,
  PenTool,
} from 'lucide-react';

export interface StoreCardData {
  id: string;
  name: string;
  domain: string;
  productsCount: number;
  collectionsCount: number;
  deletedCount?: number;
  lastUpdated: string;
  imageUrl: string;
  isNiche?: boolean;
}

export interface NomnaProductItem {
  id: string;
  code: string;
  name: string;
  collection: string;
  price: string;
  competitorImageUrl: string;
  thumbnails: string[];
  aiMockups: string[];
  adCopies: string[];
  status: 'choduyet' | 'live' | 'error';
  selected?: boolean;
  itemCount: number;
  imageCountBadge?: string;
  promptUsed?: string;
}

export interface CrawledStoreRecord {
  domain: string;
  url: string;
  crawledAt: string;
  /** `true` = dữ liệu mẫu để xem giao diện, KHÔNG phải kết quả crawl thật. */
  isDemoData?: boolean;
  /**
   * Số sản phẩm thực sự lưu được trong `products`. Khác `productsCount`
   * (tổng số store công bố) vì API Shopify giới hạn 250/lần và ta chỉ giữ
   * một phần để tránh vỡ quota localStorage.
   */
  productsStored?: number;
  /** `null` khi không phát hiện được — không đoán bừa tên theme. */
  themeDetected: string | null;
  productsCount: number;
  collectionsCount: number;
  imagesCount: number;
  otherMediaCount?: number;
  otherMedia?: string[];
  products: NomnaProductItem[];
  collections: { name: string; handle: string; coverImg: string }[];
  storeChecklist: {
    announcementBar: string | null;
    trustBadges: string[];
    appStackDetected: string[];
    policiesExtracted: string[];
  };
}

const DEMO_OTHER_MEDIA: string[] = [
  'https://ultracarmats.com/cdn/shop/files/Ultra_Car_Seat_Covers_-_Horizontal.jpg?v=1769505311&width=2500',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=600&auto=format&fit=crop&q=80',
];

const MOCK_STORES: StoreCardData[] = [
  {
    id: 'store-1',
    name: 'Nail Handy',
    domain: 'nailhandy.com',
    productsCount: 1402,
    collectionsCount: 45,
    deletedCount: 4,
    lastUpdated: 'Cập nhật 33 phút trước',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&auto=format&fit=crop&q=80',
    isNiche: true,
  },
  {
    id: 'store-2',
    name: 'lovful.com',
    domain: 'lovful.com',
    productsCount: 2453,
    collectionsCount: 100,
    deletedCount: 0,
    lastUpdated: 'Cập nhật 22:22 28/05/2026',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'store-3',
    name: 'www.spryinterior.com',
    domain: 'spryinterior.com',
    productsCount: 8387,
    collectionsCount: 143,
    deletedCount: 21,
    lastUpdated: 'Cập nhật 12:59 13/08/2026',
    imageUrl: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'store-4',
    name: 'etwoodcrafts.com',
    domain: 'etswoodcrafts.com',
    productsCount: 3748,
    collectionsCount: 55,
    deletedCount: 16,
    lastUpdated: 'Cập nhật 12:59 13/08/2026',
    imageUrl: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'store-5',
    name: 'www.roytimber.com',
    domain: 'roytimber.com',
    productsCount: 3748,
    collectionsCount: 54,
    deletedCount: 10,
    lastUpdated: 'Cập nhật 12:59 13/08/2026',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'store-6',
    name: 'Timber Vintique',
    domain: 'timbervintique.com',
    productsCount: 10765,
    collectionsCount: 124,
    deletedCount: 13,
    lastUpdated: 'Cập nhật 23:17 12/08/2026',
    imageUrl: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'store-7',
    name: '3 nguồn nội thất',
    domain: 'roytimber-etwoodcrafts-spry-unique',
    productsCount: 11455,
    collectionsCount: 124,
    deletedCount: 25,
    lastUpdated: 'Cập nhật 23:17 05/07/2026',
    imageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'store-8',
    name: 'donailsart.com',
    domain: 'donailsart.com',
    productsCount: 200,
    collectionsCount: 13,
    deletedCount: 0,
    lastUpdated: 'Cập nhật 22:29 28/05/2026',
    imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'store-9',
    name: 'gushbeauty.com',
    domain: 'gushbeauty.com',
    productsCount: 317,
    collectionsCount: 0,
    deletedCount: 0,
    lastUpdated: 'Cập nhật 20:25 18/05/2026',
    imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=200&auto=format&fit=crop&q=80',
  },
  {
    id: 'store-10',
    name: 'www.kissusa.com',
    domain: 'kissusa.com',
    productsCount: 1143,
    collectionsCount: 295,
    deletedCount: 0,
    lastUpdated: 'Cập nhật 20:24 18/05/2026',
    imageUrl: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=200&auto=format&fit=crop&q=80',
  },
];

const REGEN_VARIANT_POOL = [
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
];

const MOCK_STORE_PRODUCTS: NomnaProductItem[] = [
  {
    id: 'sp-1',
    code: 'P-00001',
    name: "90's Darling Handmade Nails H230",
    collection: 'Press-On Nails',
    price: '$24.85',
    itemCount: 5,
    imageCountBadge: '5 ảnh',
    competitorImageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80',
    promptUsed: 'Analyze competitor product image P-00001 from lovful.com. Re-generate high-end press-on nail set in 90s gothic theme with studio lighting, custom brand color palette, and 8K clarity.',
    thumbnails: [
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=300&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=300&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=300&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&auto=format&fit=crop&q=80',
    ],
    aiMockups: [
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80',
    ],
    adCopies: ['90s Darling Handmade Nails Set H230'],
    status: 'live',
    selected: true,
  },
  {
    id: 'sp-2',
    code: 'P-00002',
    name: '@Armoni_H... Pink Velvet',
    collection: 'Press-On Nails',
    price: '$26.50',
    itemCount: 3,
    imageCountBadge: '3 ảnh',
    competitorImageUrl: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&auto=format&fit=crop&q=80',
    promptUsed: 'Extract pink velvet nail art design from competitor image. Generate luxury lifestyle background with velvet podium.',
    thumbnails: [
      'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=300&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=300&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=300&auto=format&fit=crop&q=80',
    ],
    aiMockups: ['https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=600&auto=format&fit=crop&q=80'],
    adCopies: ['Armoni Pink Velvet Set'],
    status: 'live',
  },
  {
    id: 'sp-3',
    code: 'P-00003',
    name: '@Armoni_H... Chrome Luxury',
    collection: 'Press-On Nails',
    price: '$29.00',
    itemCount: 9,
    imageCountBadge: '9 ảnh',
    competitorImageUrl: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&auto=format&fit=crop&q=80',
    promptUsed: 'Chrome metallic press-on nails re-imagined with Futuristic Cyberpunk aesthetics and soft rim light.',
    thumbnails: [
      'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=300&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=300&auto=format&fit=crop&q=80',
    ],
    aiMockups: ['https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=600&auto=format&fit=crop&q=80'],
    adCopies: ['Armoni Chrome Luxury Set'],
    status: 'live',
  },
  {
    id: 'sp-4',
    code: 'P-00004',
    name: '@Armoni_H... Dark Crystal',
    collection: 'Press-On Nails',
    price: '$22.00',
    itemCount: 4,
    imageCountBadge: '4 ảnh',
    thumbnails: ['https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=300&auto=format&fit=crop&q=80'],
    aiMockups: ['https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=600&auto=format&fit=crop&q=80'],
    adCopies: ['Armoni Dark Crystal'],
    status: 'choduyet',
  },
];

/**
 * Dữ liệu MẪU để xem giao diện khi chưa crawl store nào — KHÔNG phải kết quả crawl.
 *
 * Trước đây seed này để nguyên tên miền thật kèm số liệu cụ thể (nailhandy.com
 * "1.402 sản phẩm / Shopify Impact Theme 5.2") trong khi chưa hề crawl store đó,
 * nên nhìn không phân biệt được đâu là số thật. Giờ mỗi bản ghi mang cờ
 * `isDemoData` và UI gắn nhãn rõ ràng.
 *
 * Muốn xem số liệu THẬT của lovful.com (1.250 sản phẩm) thì đọc từ
 * `workspace/crawled-stores/lovful.com/products.json` do script Node sinh ra —
 * dashboard hiện chưa nạp file đó, xem ghi chú ở `handleStartCrawlPipeline`.
 */
const DEFAULT_CRAWLED_STORES_SEED: CrawledStoreRecord[] = [
  {
    domain: 'demo-store.example',
    url: 'https://demo-store.example',
    crawledAt: '2026-08-26T16:20:00Z',
    isDemoData: true,
    themeDetected: null,
    productsCount: MOCK_STORE_PRODUCTS.length,
    productsStored: MOCK_STORE_PRODUCTS.length,
    collectionsCount: 3,
    imagesCount: MOCK_STORE_PRODUCTS.reduce((acc, p) => acc + p.thumbnails.length, 0),
    products: MOCK_STORE_PRODUCTS,
    collections: [
      { name: 'Gothic Luxury Nails', handle: 'gothic-luxury-nails', coverImg: REGEN_VARIANT_POOL[0] },
      { name: 'Y2K Cyberpunk Series', handle: 'y2k-cyberpunk-series', coverImg: REGEN_VARIANT_POOL[1] },
      { name: 'Velvet & Crystal Collection', handle: 'velvet-crystal-collection', coverImg: REGEN_VARIANT_POOL[2] },
    ],
    storeChecklist: {
      announcementBar: '🔥 (Nội dung mẫu) Buy 2 Get 1 FREE on All Press-On Nail Sets!',
      trustBadges: ['(mẫu) 30-Day Money Back Guarantee', '(mẫu) Free Shipping over $50'],
      appStackDetected: [],
      policiesExtracted: [],
    },
  },
];

export function NomnaBuoi4Dashboard() {
  const [topTab, setTopTab] = useState<'nomna' | 'dangbai' | 'video' | 'shopify' | 'quangcao'>('shopify');
  const [shopifySidebarTab, setShopifySidebarTab] = useState<'tongquan' | 'crawl' | 'local' | 'trenstore' | 'noidung' | 'dualen' | 'anhtrenstore' | 'ketnoi'>('tongquan');
  const [dangbaiSidebarTab, setDangbaiSidebarTab] = useState<'soanbai' | 'lichsu' | 'taikhoan'>('soanbai');
  const [activeStoreDetail, setActiveStoreDetail] = useState<StoreCardData | null>(null);
  const [localSubTab, setLocalSubTab] = useState<'ytuong' | 'taosanpham' | 'datao'>('datao');
  const [selectedProduct, setSelectedProduct] = useState<NomnaProductItem>(MOCK_STORE_PRODUCTS[0]);
  const [productsList, setProductsList] = useState<NomnaProductItem[]>(MOCK_STORE_PRODUCTS);
  const [centerSubTab, setCenterSubTab] = useState<'image' | 'content'>('image');
  const [showCrawlerWidget, setShowCrawlerWidget] = useState(true);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // OCTOPOST / ĐĂNG BÀI FORM STATES (Matching User Screenshot)
  const [composeAccount, setComposeAccount] = useState('[facebook] Bowtie Nail Box');
  const [composePostType, setComposePostType] = useState('Text');
  const [composeCaption, setComposeCaption] = useState('');
  const [composeLink, setComposeLink] = useState('');
  const [composeScheduleTime, setComposeScheduleTime] = useState('');
  const [isSubmittingPost, setIsSubmittingPost] = useState(false);

  // SHOPIFY CRAWLER WORKSPACE STATES & LOCALSTORAGE PERSISTENCE
  const [crawledStoresHistory, setCrawledStoresHistory] = useState<CrawledStoreRecord[]>(() => {
    const saved = localStorage.getItem('NOMNA_CRAWLED_STORES');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.warn('Failed to parse NOMNA_CRAWLED_STORES:', e);
      }
    }
    return DEFAULT_CRAWLED_STORES_SEED;
  });

  const [activeCrawledDomain, setActiveCrawledDomain] = useState<string>(
    () => DEFAULT_CRAWLED_STORES_SEED[0].domain
  );
  const [crawlUrlInput, setCrawlUrlInput] = useState('https://lovful.com');
  const [isCrawlRunning, setIsCrawlRunning] = useState(false);
  const [crawlStepMessage, setCrawlStepMessage] = useState('');
  const [crawlProgressPercent, setCrawlProgressPercent] = useState(0);
  const [crawlSubTab, setCrawlSubTab] = useState<'overview' | 'products' | 'collections' | 'other_media' | 'checklist' | 'architecture'>('overview');
  const [checkedProductIds, setCheckedProductIds] = useState<string[]>([]);
  const [checkedMediaUrls, setCheckedMediaUrls] = useState<string[]>([]);
  const [mediaSearchQuery, setMediaSearchQuery] = useState('');

  // CHATGPT AI GENERATION LOGIC STATES
  const [isAiGenerating, setIsAiGenerating] = useState(false);
  const [singleRegenIndex, setSingleRegenIndex] = useState<number | null>(null);
  const [aiGenStepText, setAiGenStepText] = useState('');

  // CHATGPT API CONFIGURATION STATES
  // API key KHÔNG còn nằm ở client — server (/api/generate-image) giữ key.
  // Lựa chọn của người dùng (localStorage) phải được ưu tiên, nếu không thì
  // dropdown chọn model và ô sửa prompt sẽ là nút chết.
  const [showApiConfigModal, setShowApiConfigModal] = useState(false);
  const [aiModel, setAiModel] = useState(
    () => localStorage.getItem('NOMNA_AI_MODEL') || 'gpt-image-1-mini'
  );
  const [customSystemPrompt, setCustomSystemPrompt] = useState(
    () =>
      localStorage.getItem('NOMNA_SYSTEM_PROMPT') ||
      'Analyze competitor product photo. Extract nail geometry, colors, and art pattern. Re-render into 8K high-resolution studio mockup with clean brand backdrop, removing copyright watermarks.'
  );

  const handleSaveApiConfig = () => {
    localStorage.setItem('NOMNA_AI_MODEL', aiModel);
    localStorage.setItem('NOMNA_SYSTEM_PROMPT', customSystemPrompt);
    setShowApiConfigModal(false);
    alert('✅ Đã lưu Model & System Prompt. Cấu hình này được dùng ngay cho lần sinh ảnh kế tiếp.');
  };

  const handleOpenStoreDetail = (store: StoreCardData) => {
    setActiveStoreDetail(store);
    setShopifySidebarTab('trenstore');
  };

  const handleBackToStoresList = () => {
    setActiveStoreDetail(null);
    setShopifySidebarTab('tongquan');
  };

  const toggleSelectAll = () => {
    const allSelected = productsList.every((p) => p.selected);
    setProductsList(productsList.map((p) => ({ ...p, selected: !allSelected })));
  };

  const toggleProductSelect = (id: string) => {
    setProductsList(productsList.map((p) => (p.id === id ? { ...p, selected: !p.selected } : p)));
  };

  /**
   * Gọi sinh ảnh qua serverless function của chính mình (`/api/generate-image`),
   * KHÔNG gọi thẳng api.openai.com. Key nằm ở server nên không lộ ra trình duyệt.
   */
  const callOpenAiImageGenApi = async (promptText: string): Promise<string> => {
    const res = await fetch('/api/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: `${customSystemPrompt}\n\nProduct Target: ${promptText}`,
        model: aiModel,
        size: '1024x1024',
      }),
    });

    const data = (await res.json().catch(() => null)) as
      | { imageUrl?: string; error?: string }
      | null;

    if (!res.ok) {
      throw new Error(data?.error || `Lỗi ${res.status}: ${res.statusText}`);
    }
    if (!data?.imageUrl) {
      throw new Error('Server không trả về dữ liệu ảnh.');
    }
    return data.imageUrl;
  };

  // TRIGGER RE-GEN ALL CARDS FOR THIS PRODUCT WITH REAL OPENAI API CALL
  const handleTriggerChatGPTRegenAll = async (product: NomnaProductItem) => {
    setIsAiGenerating(true);
    setAiGenStepText('🤖 Đang gửi yêu cầu sinh ảnh tới server (/api/generate-image)...');

    try {
      const targetPrompt = product.promptUsed || `Re-generate competitor product ${product.code} (${product.name}) into 8K studio mockup`;
      setAiGenStepText(`🎨 Model ${aiModel}: đang sinh ảnh...`);
      const realImageUrl = await callOpenAiImageGenApi(targetPrompt);

      const updatedThumbnails = [...product.thumbnails];
      updatedThumbnails[0] = realImageUrl;
      const updatedProduct = { ...product, thumbnails: updatedThumbnails };
      setSelectedProduct(updatedProduct);
      setProductsList(productsList.map((p) => (p.id === product.id ? updatedProduct : p)));
      alert(`🎉 Đã nhận ảnh AI từ model ${aiModel}.`);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn('Image generation error:', message);
      // Không đổi ảnh khi lỗi — giữ nguyên ảnh cũ và nói đúng sự thật là
      // không sinh được, thay vì hứa "tải bản demo" rồi không làm gì.
      alert(`⚠️ Không sinh được ảnh:\n${message}\n\nẢnh hiện tại được giữ nguyên.`);
    } finally {
      setIsAiGenerating(false);
    }
  };

  // TRIGGER SINGLE CARD RE-GEN ONLY
  const handleTriggerSingleCardRegen = async (cardIndex: number) => {
    setSingleRegenIndex(cardIndex);
    const targetPrompt = selectedProduct.promptUsed || `Re-generate competitor product ${selectedProduct.code} (${selectedProduct.name}) mockup #${cardIndex + 1}`;

    try {
      const realImageUrl = await callOpenAiImageGenApi(targetPrompt);

      const updatedThumbnails = [...selectedProduct.thumbnails];
      updatedThumbnails[cardIndex] = realImageUrl;

      const updatedProduct = { ...selectedProduct, thumbnails: updatedThumbnails };
      setSelectedProduct(updatedProduct);
      setProductsList(productsList.map((p) => (p.id === selectedProduct.id ? updatedProduct : p)));
      alert(`🎉 Đã nhận ảnh AI từ model ${aiModel} cho thẻ #${cardIndex + 1}.`);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn('Image generation error:', message);
      // Giữ nguyên ảnh cũ. Trước đây chỗ này thay bằng 1 ảnh Unsplash ngẫu nhiên,
      // khiến ảnh stock trông như thành phẩm AI.
      alert(`⚠️ Không sinh được ảnh cho thẻ #${cardIndex + 1}:\n${message}\n\nẢnh hiện tại được giữ nguyên.`);
    } finally {
      setSingleRegenIndex(null);
    }
  };

  /**
   * Crawl live 1 Shopify store công khai từ trình duyệt.
   *
   * GIỚI HẠN cần biết: `/products.json` chặn cứng ở 250 sản phẩm/lần và hàm này
   * KHÔNG phân trang, nên store lớn (vd lovful.com có 1.250 sản phẩm) sẽ chỉ lấy
   * được trang đầu. Muốn lấy đủ, chạy script Node
   * `workspace/scripts/crawl-shopify-store.mjs` (có phân trang, ghi ra file).
   */
  const handleStartCrawlPipeline = async () => {
    if (!crawlUrlInput.trim()) {
      alert('Vui lòng nhập URL website đối thủ!');
      return;
    }

    const domainClean = crawlUrlInput.trim().replace(/^https?:\/\//, '').replace(/\/.*$/, '');
    setIsCrawlRunning(true);
    setCrawlProgressPercent(15);
    setCrawlStepMessage(`🔍 Đang tải https://${domainClean}/products.json?limit=250...`);

    try {
      let targetProductsUrl = `https://${domainClean}/products.json?limit=250`;
      let res = await fetch(targetProductsUrl).catch(() => null);

      if (!res || !res.ok) {
        // Store chặn CORS => đi vòng qua proxy công cộng.
        // Lưu ý: corsproxy.io là bên thứ ba, họ thấy được toàn bộ request này.
        targetProductsUrl = `https://corsproxy.io/?${encodeURIComponent(`https://${domainClean}/products.json?limit=250`)}`;
        res = await fetch(targetProductsUrl);
      }

      if (!res.ok) {
        throw new Error(`HTTP Error ${res.status}: ${res.statusText}`);
      }

      setCrawlProgressPercent(50);
      setCrawlStepMessage(`📦 Đã nhận dữ liệu từ ${domainClean}. Đang bóc tách JSON...`);

      const data = await res.json();
      const realProducts = data.products || [];

      if (!realProducts || realProducts.length === 0) {
        throw new Error(`Domain ${domainClean} không phải là Shopify Store công khai hoặc không cho phép đọc /products.json`);
      }

      // Crawl thêm collections THẬT thay vì bịa 2 mục cố định.
      setCrawlProgressPercent(70);
      setCrawlStepMessage(`📁 Đang tải danh sách collection thật của ${domainClean}...`);
      let realCollections: Array<{ title?: string; handle?: string; image?: { src?: string } }> = [];
      try {
        let cRes = await fetch(`https://${domainClean}/collections.json?limit=250`).catch(() => null);
        if (!cRes || !cRes.ok) {
          cRes = await fetch(
            `https://corsproxy.io/?${encodeURIComponent(`https://${domainClean}/collections.json?limit=250`)}`
          );
        }
        if (cRes.ok) {
          const cData = await cRes.json();
          realCollections = cData.collections || [];
        }
      } catch {
        // Không lấy được collections thì để mảng rỗng — không bịa dữ liệu thay thế.
        realCollections = [];
      }

      // Crawl thêm toàn bộ Banners, Logos, Trust Badges & Media khác từ Homepage
      setCrawlProgressPercent(80);
      setCrawlStepMessage(`🖼️ Đang bóc tách toàn bộ Banners & Media khác trên homepage của ${domainClean}...`);
      let otherMediaList: string[] = [];
      try {
        let hRes = await fetch(`https://${domainClean}/`).catch(() => null);
        if (!hRes || !hRes.ok) {
          hRes = await fetch(`https://corsproxy.io/?${encodeURIComponent(`https://${domainClean}/`)}`).catch(() => null);
        }
        if (hRes && hRes.ok) {
          const html = await hRes.text();
          const sanitize = (rawUrl: string) => {
            let u = rawUrl.replace(/&amp;/g, '&').replace(/\\"/g, '').replace(/["']/g, '').trim();
            u = u.split(/\s+/)[0];
            if (u.startsWith('//')) u = 'https:' + u;
            if (u.startsWith('/')) u = `https://${domainClean}` + u;
            return u;
          };

          const mediaSet = new Set<string>();
          const imgRegex = /(?:src|data-src|data-original|srcset)\s*=\s*["']([^"']+)["']/gi;
          let match: RegExpExecArray | null;
          while ((match = imgRegex.exec(html)) !== null) {
            const u = sanitize(match[1]);
            if (u.match(/\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i) || u.includes('/cdn.shopify.com/')) {
              mediaSet.add(u);
            }
          }
          const bgRegex = /url\(['"]?([^'"\)]+)['"]?\)/gi;
          while ((match = bgRegex.exec(html)) !== null) {
            const u = sanitize(match[1]);
            if (u.match(/\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i) || u.includes('/cdn.shopify.com/')) {
              mediaSet.add(u);
            }
          }
          const shopifyCdnRegex = /https?:\/\/[^"'<>\s]+\.(?:jpg|jpeg|png|webp|gif|svg)(?:\?[^"'<>\s]*)?/gi;
          while ((match = shopifyCdnRegex.exec(html)) !== null) {
            const u = sanitize(match[0]);
            mediaSet.add(u);
          }
          otherMediaList = Array.from(mediaSet);
        }
      } catch (e) {
        console.warn('Other media crawl error:', e);
      }

      const totalImagesExtracted = realProducts.reduce(
        (acc: number, p: { images?: unknown[] }) => acc + (p.images?.length || 0),
        0
      );
      setCrawlProgressPercent(90);
      setCrawlStepMessage(`🖼️ Đã bóc tách ${realProducts.length} sản phẩm, ${totalImagesExtracted} ảnh & ${otherMediaList.length} media khác.`);

      // Lưu tối đa 250 sản phẩm chuẩn Shopify API limit để hiển thị đầy đủ danh sách.
      const PRODUCTS_TO_STORE = 250;
      type ShopifyProduct = {
        id?: number;
        title?: string;
        product_type?: string;
        variants?: Array<{ price?: string }>;
        images?: Array<{ src?: string }>;
      };

      const formattedRealProducts: NomnaProductItem[] = realProducts
        .slice(0, PRODUCTS_TO_STORE)
        .map((p: ShopifyProduct, idx: number) => {
          const imgs = (p.images || [])
            .map((img) => img.src)
            .filter((src): src is string => Boolean(src));
          return {
            id: `real-p-${p.id || idx}`,
            code: `P-${String(idx + 1).padStart(5, '0')}`,
            name: p.title || 'Sản phẩm Shopify Crawled',
            collection: p.product_type || 'Chưa phân loại',
            price: p.variants?.[0]?.price ? `$${p.variants[0].price}` : '—',
            itemCount: imgs.length,
            imageCountBadge: `${imgs.length} ảnh`,
            competitorImageUrl: imgs[0] || REGEN_VARIANT_POOL[0],
            thumbnails: imgs.slice(0, 5),
            aiMockups: imgs.slice(0, 5),
            adCopies: [`${p.title} | ${domainClean}`],
            status: 'live',
            promptUsed: `Analyze crawled competitor product ${p.title}. Re-render into 8K studio mockup.`,
          };
        });

      setProductsList(formattedRealProducts);
      setSelectedProduct(formattedRealProducts[0]);

      const newRecord: CrawledStoreRecord = {
        domain: domainClean,
        url: `https://${domainClean}`,
        crawledAt: new Date().toISOString(),
        isDemoData: false,
        themeDetected: null,
        productsCount: realProducts.length,
        productsStored: formattedRealProducts.length,
        collectionsCount: realCollections.length,
        imagesCount: totalImagesExtracted,
        otherMediaCount: otherMediaList.length,
        otherMedia: otherMediaList,
        products: formattedRealProducts,
        collections: realCollections.map((c) => ({
          name: c.title || c.handle || 'Không rõ tên',
          handle: c.handle || '',
          coverImg: c.image?.src || formattedRealProducts[0]?.thumbnails[0] || REGEN_VARIANT_POOL[0],
        })),
        storeChecklist: {
          announcementBar: null,
          trustBadges: [],
          appStackDetected: [],
          policiesExtracted: [],
        },
      };

      const existingIdx = crawledStoresHistory.findIndex((s) => s.domain === domainClean);
      let updatedHistory: CrawledStoreRecord[];
      if (existingIdx >= 0) {
        updatedHistory = [...crawledStoresHistory];
        updatedHistory[existingIdx] = newRecord;
      } else {
        updatedHistory = [newRecord, ...crawledStoresHistory];
      }

      setCrawledStoresHistory(updatedHistory);
      setActiveCrawledDomain(domainClean);
      try {
        localStorage.setItem('NOMNA_CRAWLED_STORES', JSON.stringify(updatedHistory));
      } catch {
        alert('⚠️ LocalStorage đã đầy — không lưu được lịch sử crawl. Xoá bớt store cũ rồi thử lại.');
      }

      setCrawlProgressPercent(100);

      const truncatedNote =
        realProducts.length > PRODUCTS_TO_STORE
          ? `\n\n⚠️ Chỉ lưu ${PRODUCTS_TO_STORE}/${realProducts.length} sản phẩm để không vỡ localStorage.`
          : '';
      const paginationNote =
        realProducts.length === 250
          ? `\n⚠️ Chạm trần 250 sản phẩm/lần của Shopify — store có thể còn nhiều hơn. Dùng script Node để lấy đủ.`
          : '';

      alert(
        `✅ Crawl xong ${domainClean}\n\n` +
        `- Sản phẩm đọc được: ${realProducts.length}\n` +
        `- Ảnh: ${totalImagesExtracted}\n` +
        `- Collection: ${realCollections.length}` +
        truncatedNote +
        paginationNote
      );
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      console.warn('Crawl error:', message);
      alert(`⚠️ Không crawl được ${domainClean}:\n${message}`);
    } finally {
      setIsCrawlRunning(false);
    }
  };

  const handleDownloadSelectedImages = async () => {
    const targetProducts = productsList.filter((p) => p.selected);
    const productsToDownload = targetProducts.length > 0 ? targetProducts : productsList;

    const imageUrls: Array<{ name: string; url: string }> = [];
    productsToDownload.forEach((p, pIdx) => {
      const imgs = p.thumbnails && p.thumbnails.length > 0 ? p.thumbnails : (p.competitorImageUrl ? [p.competitorImageUrl] : []);
      imgs.forEach((url, iIdx) => {
        if (url) {
          imageUrls.push({
            name: `${activeCrawledDomain}_${p.code || `P-${pIdx + 1}`}_img_${iIdx + 1}.jpg`,
            url: url,
          });
        }
      });
    });

    if (imageUrls.length === 0) {
      alert('Không tìm thấy ảnh nào để tải về!');
      return;
    }

    const confirmDownload = confirm(
      `📥 Bạn có muốn tải về ${imageUrls.length} ảnh (${productsToDownload.length} sản phẩm) của ${activeCrawledDomain}?`
    );
    if (!confirmDownload) return;

    let downloadedCount = 0;
    for (let i = 0; i < imageUrls.length; i++) {
      const item = imageUrls[i];
      try {
        const response = await fetch(item.url);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = item.name;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(blobUrl);
        downloadedCount++;
      } catch {
        const link = document.createElement('a');
        link.href = item.url;
        link.target = '_blank';
        link.download = item.name;
        document.body.appendChild(link);
        link.click();
        link.remove();
        downloadedCount++;
      }
      await new Promise((resolve) => setTimeout(resolve, 150));
    }

    alert(`✅ Đã hoàn tất tải về ${downloadedCount}/${imageUrls.length} ảnh vào máy local!`);
  };

  const handleDownloadCheckedImages = async (products: NomnaProductItem[], domain: string) => {
    const targetProducts = checkedProductIds.length > 0
      ? products.filter((p) => checkedProductIds.includes(p.id))
      : products;

    const imageUrls: Array<{ name: string; url: string }> = [];
    targetProducts.forEach((p, pIdx) => {
      const imgs = p.thumbnails && p.thumbnails.length > 0 ? p.thumbnails : (p.competitorImageUrl ? [p.competitorImageUrl] : []);
      imgs.forEach((url, iIdx) => {
        if (url) {
          imageUrls.push({
            name: `${domain}_${p.code || `P-${pIdx + 1}`}_img_${iIdx + 1}.jpg`,
            url: url,
          });
        }
      });
    });

    if (imageUrls.length === 0) {
      alert('Vui lòng chọn ít nhất 1 sản phẩm/ảnh để tải về!');
      return;
    }

    const confirmDownload = confirm(`📥 Bạn có muốn tải về ${imageUrls.length} ảnh (${targetProducts.length} sản phẩm) của ${domain}?`);
    if (!confirmDownload) return;

    let count = 0;
    for (let i = 0; i < imageUrls.length; i++) {
      const item = imageUrls[i];
      try {
        const response = await fetch(item.url);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = item.name;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(blobUrl);
        count++;
      } catch {
        const link = document.createElement('a');
        link.href = item.url;
        link.target = '_blank';
        link.download = item.name;
        document.body.appendChild(link);
        link.click();
        link.remove();
        count++;
      }
      await new Promise((resolve) => setTimeout(resolve, 150));
    }

    alert(`✅ Đã hoàn tất tải về ${count}/${imageUrls.length} ảnh vào máy local!`);
  };

  const handleDownloadCheckedMedia = async (mediaUrls: string[], domain: string) => {
    const targetUrls = checkedMediaUrls.length > 0
      ? mediaUrls.filter((u) => checkedMediaUrls.includes(u))
      : mediaUrls;

    if (targetUrls.length === 0) {
      alert('Không tìm thấy media/banner nào để tải về!');
      return;
    }

    const confirmDownload = confirm(`📥 Bạn có muốn tải về ${targetUrls.length} file media/banner của ${domain}?`);
    if (!confirmDownload) return;

    let count = 0;
    for (let i = 0; i < targetUrls.length; i++) {
      const url = targetUrls[i];
      const filename = `${domain}_media_asset_${i + 1}${url.match(/\.(png|jpg|jpeg|webp|gif|svg)/i)?.[0] || '.jpg'}`;
      try {
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(blobUrl);
        count++;
      } catch {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        count++;
      }
      await new Promise((resolve) => setTimeout(resolve, 120));
    }

    alert(`✅ Đã hoàn tất tải về ${count}/${targetUrls.length} media/banner vào máy local!`);
  };

  const handleCreatePublishJob = () => {
    if (!composeCaption.trim() && composePostType === 'Text') {
      alert('Vui lòng nhập nội dung bài đăng (Caption)!');
      return;
    }
    setIsSubmittingPost(true);
    setTimeout(() => {
      setIsSubmittingPost(false);
      alert(`🚀 Đã đưa bài đăng vào Publish Queue thành công cho tài khoản ${composeAccount}!`);
      setComposeCaption('');
      setComposeLink('');
    }, 1200);
  };

  const selectedCount = productsList.filter((p) => p.selected).length;
  const currentStoreDisplay = activeStoreDetail || MOCK_STORES[1];

  return (
    <div className="w-full h-full flex flex-col font-sans bg-[#f3f4f6] text-gray-900 selection:bg-red-500 selection:text-white overflow-hidden relative">
      {/* 1. TOP HEADER NAVIGATION */}
      <header className="h-14 bg-white border-b border-gray-200 px-6 flex items-center justify-between shrink-0 z-40 shadow-2xs">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-red-600 text-white font-extrabold flex items-center justify-center text-xs tracking-tighter shadow-xs">
              N
            </div>
            <span className="font-extrabold text-base text-gray-900 tracking-tight">Nomna</span>
          </div>

          <nav className="flex items-center gap-2 text-xs font-semibold">
            <button
              onClick={() => setTopTab('nomna')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                topTab === 'nomna' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Nomna
            </button>
            <button
              onClick={() => setTopTab('dangbai')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                topTab === 'dangbai' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Đăng bài
            </button>
            <button
              onClick={() => setTopTab('video')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                topTab === 'video' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Video
            </button>
            <button
              onClick={() => setTopTab('shopify')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                topTab === 'shopify' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Shopify
            </button>
            <button
              onClick={() => setTopTab('quangcao')}
              className={`px-4 py-1.5 rounded-full transition-all cursor-pointer ${
                topTab === 'quangcao' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Quảng cáo
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-4 text-xs"></div>
      </header>



      {/* 3. LIGHTBOX POPUP MODAL (EXTRA LARGE FULLSCREEN PREVIEW) */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="bg-gray-900 border border-gray-800 rounded-3xl p-5 max-w-6xl w-full max-h-[95vh] h-[92vh] flex flex-col space-y-4 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 text-white">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 font-bold shrink-0">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="truncate">
                  <h4 className="font-bold text-sm text-gray-100">Full-Size High Resolution Preview</h4>
                  <p className="text-[10px] text-gray-400 font-mono truncate max-w-lg">{lightboxImage}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = lightboxImage;
                    link.target = '_blank';
                    link.download = 'preview-image.jpg';
                    document.body.appendChild(link);
                    link.click();
                    link.remove();
                  }}
                  className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-colors shadow-2xs"
                >
                  <Download className="w-3.5 h-3.5" /> Tải Ảnh Này
                </button>
                <button
                  onClick={() => setLightboxImage(null)}
                  className="p-1.5 rounded-xl bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center bg-black/60 rounded-2xl p-2 border border-gray-800/80 overflow-hidden relative">
              <img
                src={lightboxImage}
                alt="lightbox preview"
                className="max-h-[80vh] max-w-full w-auto h-auto object-contain rounded-xl shadow-2xl select-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* 4. CHATGPT API TOKEN & PROMPT CONFIGURATION MODAL */}
      {showApiConfigModal && (
        <div className="fixed inset-0 z-50 bg-gray-900/70 backdrop-blur-xs flex items-center justify-center p-6" onClick={() => setShowApiConfigModal(false)}>
          <div className="bg-white rounded-2xl p-5 max-w-lg w-full space-y-4 shadow-2xl relative text-xs" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-2 font-bold text-sm text-gray-900">
                <Key className="w-5 h-5 text-amber-500" />
                <span>Cấu hình Model & System Prompt</span>
              </div>
              <button onClick={() => setShowApiConfigModal(false)} className="text-gray-400 hover:text-gray-600 cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5">
              <div className="rounded-lg bg-emerald-50 border border-emerald-200 p-2.5">
                <p className="text-[11px] text-emerald-900 leading-relaxed">
                  <span className="font-bold">🔒 API key nằm ở server.</span> Trình duyệt gọi{' '}
                  <code className="bg-white/70 px-1 rounded">/api/generate-image</code>, endpoint đó mới
                  giữ <code className="bg-white/70 px-1 rounded">OPENAI_API_KEY</code>. Key không được
                  gửi xuống client nên không thể bị lấy qua F12.
                </p>
                <p className="text-[10px] text-emerald-800/80 mt-1.5">
                  Đổi key: sửa <code className="bg-white/70 px-1 rounded">.env</code> (local) hoặc Vercel →
                  Settings → Environment Variables, rồi deploy lại.
                </p>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-xs text-gray-800 flex items-center gap-1.5">
                  <Sliders className="w-3.5 h-3.5 text-blue-500" /> Chọn Model AI Re-Gen:
                </label>
                <select
                  value={aiModel}
                  onChange={(e) => setAiModel(e.target.value)}
                  className="w-full h-9 px-3 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium cursor-pointer"
                >
                  <option value="gpt-image-1-mini">gpt-image-1-mini (nhanh, rẻ)</option>
                  <option value="gpt-image-1">gpt-image-1 (chất lượng cao nhất)</option>
                  <option value="dall-e-3">DALL-E 3</option>
                  <option value="dall-e-2">DALL-E 2 (cũ, rẻ nhất)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-xs text-gray-800 flex items-center gap-1.5">
                  <Bot className="w-3.5 h-3.5 text-red-600" /> System Prompt Tùy Chỉnh (Tái tạo ảnh đối thủ):
                </label>
                <textarea
                  rows={3}
                  value={customSystemPrompt}
                  onChange={(e) => setCustomSystemPrompt(e.target.value)}
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono leading-relaxed focus:border-red-500 focus:bg-white"
                />
              </div>
            </div>

            <div className="pt-3 flex items-center justify-between border-t border-gray-100">
              <span className="text-[10px] text-gray-400 font-mono">Key do server giữ · Model: {aiModel}</span>
              <div className="flex items-center gap-2">
                <button onClick={() => setShowApiConfigModal(false)} className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs cursor-pointer">
                  Hủy
                </button>
                <button onClick={handleSaveApiConfig} className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer">
                  <Save className="w-3.5 h-3.5" /> Lưu Cấu Hình
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. TAB CONTENT: ĐĂNG BÀI (OCTOPOST SOẠN BÀI - EXACT MATCH TO USER'S SCREENSHOT) */}
      {topTab === 'dangbai' && (
        <div className="flex-1 flex overflow-hidden bg-[#f3f4f6]">
          {/* OCTOPOST LEFT SIDEBAR */}
          <aside className="w-56 bg-[#f8f9fa] border-r border-gray-200 p-4 space-y-4 shrink-0 text-xs select-none">
            <div className="flex items-center gap-1 text-[11px] text-gray-400 font-mono pb-2 border-b border-gray-100">
              <span>Nomna</span>
              <span>/</span>
              <span className="text-gray-700 font-bold">Octopost</span>
            </div>

            {/* TOP RED ACTIVE BUTTON: SOẠN BÀI */}
            <button
              onClick={() => setDangbaiSidebarTab('soanbai')}
              className={`w-full text-left px-3.5 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2 shadow-2xs ${
                dangbaiSidebarTab === 'soanbai'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              <PenTool className="w-4 h-4" />
              <span>Soạn bài</span>
            </button>

            <div className="space-y-0.5">
              <button
                onClick={() => setDangbaiSidebarTab('lichsu')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                  dangbaiSidebarTab === 'lichsu' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-700 hover:bg-gray-200/60'
                }`}
              >
                <History className="w-4 h-4 text-gray-400" />
                <span>Lịch sử</span>
              </button>

              <button
                onClick={() => setDangbaiSidebarTab('taikhoan')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                  dangbaiSidebarTab === 'taikhoan' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-700 hover:bg-gray-200/60'
                }`}
              >
                <User className="w-4 h-4 text-gray-400" />
                <span>Tài khoản</span>
              </button>
            </div>
          </aside>

          {/* MAIN COMPOSE FORM WORKSPACE (Matching user screenshot) */}
          <main className="flex-1 flex overflow-hidden bg-[#f3f4f6]">
            {dangbaiSidebarTab === 'soanbai' ? (
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                {/* PAGE HEADER */}
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-gray-900 tracking-tight">Soạn bài</h2>
                  <p className="text-xs text-gray-500">
                    Tạo publish job cho TikTok, Facebook Page và Instagram Business — chọn kênh, nhập nội dung rồi đưa vào hàng đợi đăng.
                  </p>
                </div>

                <div className="flex gap-6">
                  {/* MAIN FORM COLUMN */}
                  <div className="flex-1 space-y-5">
                    {/* CARD 1: KÊNH ĐĂNG */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-4 shadow-2xs">
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Kênh đăng</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Chọn tài khoản và định dạng bài phù hợp với nền tảng.</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-xs font-bold text-gray-800">Tài khoản</label>
                          <select
                            value={composeAccount}
                            onChange={(e) => setComposeAccount(e.target.value)}
                            className="w-full h-10 px-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium cursor-pointer focus:bg-white focus:border-red-500"
                          >
                            <option value="[facebook] Bowtie Nail Box">[facebook] Bowtie Nail Box</option>
                            <option value="[instagram] Bowtie Nail Box">[instagram] Bowtie Nail Box</option>
                            <option value="[tiktok] Nail Handy Official">[tiktok] Nail Handy Official</option>
                          </select>
                        </div>

                        <div className="space-y-1">
                          <label className="text-xs font-bold text-gray-800">Loại bài</label>
                          <select
                            value={composePostType}
                            onChange={(e) => setComposePostType(e.target.value)}
                            className="w-full h-10 px-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium cursor-pointer focus:bg-white focus:border-red-500"
                          >
                            <option value="Text">Text</option>
                            <option value="Image">Image</option>
                            <option value="Video">Video</option>
                            <option value="Reels">Reels</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* CARD 2: NỘI DUNG */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-4 shadow-2xs">
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Nội dung</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Caption và media sẽ được đưa vào publish queue.</p>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-800">Caption</label>
                        <textarea
                          rows={4}
                          value={composeCaption}
                          onChange={(e) => setComposeCaption(e.target.value)}
                          placeholder="Nội dung bài đăng..."
                          className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs leading-relaxed focus:bg-white focus:border-red-500"
                        />
                      </div>
                    </div>

                    {/* CARD 3: FACEBOOK */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-4 shadow-2xs">
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Facebook</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Link đính kèm cho text post.</p>
                      </div>

                      <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-800">Link</label>
                        <input
                          type="text"
                          value={composeLink}
                          onChange={(e) => setComposeLink(e.target.value)}
                          placeholder="https://..."
                          className="w-full h-10 px-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono focus:bg-white focus:border-red-500"
                        />
                      </div>
                    </div>

                    {/* CARD 4: LỊCH ĐĂNG */}
                    <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-4 shadow-2xs">
                      <div>
                        <h3 className="font-bold text-sm text-gray-900">Lịch đăng</h3>
                        <p className="text-xs text-gray-500 mt-0.5">Đăng ngay hoặc chọn thời gian tự động đăng bài.</p>
                      </div>

                      <div className="space-y-1">
                        <input
                          type="datetime-local"
                          value={composeScheduleTime}
                          onChange={(e) => setComposeScheduleTime(e.target.value)}
                          className="w-full h-10 px-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono focus:bg-white focus:border-red-500"
                        />
                        <div className="text-[10px] text-gray-400 pt-0.5">Để trống = Đăng ngay lập tức.</div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT COLUMN SUMMARY CARD (Matching user screenshot) */}
                  <div className="w-80 space-y-4 shrink-0 select-none">
                    <div className="bg-white p-5 rounded-2xl border border-gray-200 space-y-4 shadow-2xs">
                      <div className="space-y-3 border-b border-gray-100 pb-4">
                        <div>
                          <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">NỀN TẢNG</div>
                          <div className="text-base font-extrabold text-gray-900 capitalize">
                            {composeAccount.includes('facebook') ? 'facebook' : composeAccount.includes('tiktok') ? 'tiktok' : 'instagram'}
                          </div>
                          <div className="text-xs text-gray-500 font-medium">
                            {composeAccount.replace(/\[.*?\]\s*/, '')}
                          </div>
                        </div>

                        <div>
                          <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">MEDIA</div>
                          <div className="text-base font-extrabold text-gray-900">0</div>
                          <div className="text-xs text-gray-500 font-medium">{composePostType.toLowerCase()} only</div>
                        </div>

                        <div>
                          <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">CAPTION</div>
                          <div className="text-base font-extrabold text-gray-900">{composeCaption.length}</div>
                          <div className="text-xs text-gray-500 font-medium">tối đa 4000 ký tự</div>
                        </div>

                        <div>
                          <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">LỊCH ĐĂNG</div>
                          <div className="text-base font-extrabold text-gray-900">
                            {composeScheduleTime ? composeScheduleTime : 'Đăng ngay'}
                          </div>
                          <div className="text-xs text-gray-500 font-medium">để trống = đăng ngay</div>
                        </div>
                      </div>

                      <button
                        onClick={handleCreatePublishJob}
                        disabled={isSubmittingPost}
                        className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold text-sm shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                      >
                        {isSubmittingPost ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                        <span>{isSubmittingPost ? 'Đang đưa vào queue...' : 'Đăng bài'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 p-8 flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 max-w-md w-full text-center space-y-3 shadow-2xs">
                  <h3 className="text-lg font-bold text-gray-900 capitalize">Mục {dangbaiSidebarTab}</h3>
                  <p className="text-xs text-gray-500">Mục lịch sử bài đăng & danh sách tài khoản liên kết.</p>
                  <button onClick={() => setDangbaiSidebarTab('soanbai')} className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg text-xs cursor-pointer">
                    Quay lại Soạn bài
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      )}

      {/* 6. TAB CONTENT: SHOPIFY */}
      {topTab === 'shopify' && (
        <div className="flex-1 flex overflow-hidden">
          {/* LEFT SIDEBAR */}
          <aside className="w-56 bg-[#f8f9fa] border-r border-gray-200 p-4 space-y-5 shrink-0 text-xs select-none">
            <button
              onClick={() => {
                setActiveStoreDetail(null);
                setShopifySidebarTab('tongquan');
              }}
              className={`w-full text-left px-3.5 py-2 rounded-lg font-bold transition-all cursor-pointer flex items-center gap-2 shadow-2xs ${
                shopifySidebarTab === 'tongquan'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-white text-gray-800 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Tổng quan</span>
            </button>

            {/* GROUP 1: DỮ LIỆU LOCAL */}
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-semibold">DỮ LIỆU LOCAL</div>
              <button
                onClick={() => setShopifySidebarTab('crawl')}
                className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                  shopifySidebarTab === 'crawl' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-700 hover:bg-gray-200/60'
                }`}
              >
                <Wand2 className="w-3.5 h-3.5 text-gray-400" />
                <span>Dữ liệu crawl</span>
              </button>
            </div>

            {/* GROUP 2: SẢN PHẨM */}
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-semibold flex items-center justify-between">
                <span className="flex items-center gap-1">⚡ Sản phẩm</span>
                <ChevronDown className="w-3 h-3 text-gray-400" />
              </div>
              <div className="space-y-0.5 pl-2 border-l border-gray-200 ml-1">
                <button
                  onClick={() => setShopifySidebarTab('local')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                    shopifySidebarTab === 'local' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-700 hover:bg-gray-200/60'
                  }`}
                >
                  <Box className="w-3.5 h-3.5 text-gray-400" />
                  <span>Local</span>
                </button>
                <button
                  onClick={() => setShopifySidebarTab('trenstore')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                    shopifySidebarTab === 'trenstore' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-700 hover:bg-gray-200/60'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5 text-gray-400" />
                  <span>Trên store</span>
                </button>
              </div>
            </div>

            {/* GROUP 3: STORE LIVE */}
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-semibold">STORE LIVE</div>
              <div className="space-y-0.5">
                <button
                  onClick={() => setShopifySidebarTab('noidung')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                    shopifySidebarTab === 'noidung' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-700 hover:bg-gray-200/60'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-gray-400" />
                  <span>Nội dung</span>
                </button>
                <button
                  onClick={() => setShopifySidebarTab('dualen')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                    shopifySidebarTab === 'dualen' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-700 hover:bg-gray-200/60'
                  }`}
                >
                  <CloudUpload className="w-3.5 h-3.5 text-gray-400" />
                  <span>Đưa lên Shopify</span>
                </button>
                <button
                  onClick={() => setShopifySidebarTab('anhtrenstore')}
                  className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                    shopifySidebarTab === 'anhtrenstore' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-700 hover:bg-gray-200/60'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5 text-gray-400" />
                  <span>Ảnh trên store</span>
                </button>
              </div>
            </div>

            {/* GROUP 4: CÀI ĐẶT */}
            <div className="space-y-1">
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-semibold">CÀI ĐẶT</div>
              <button
                onClick={() => setShopifySidebarTab('ketnoi')}
                className={`w-full text-left px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-2 ${
                  shopifySidebarTab === 'ketnoi' ? 'bg-red-600 text-white font-bold shadow-xs' : 'text-gray-700 hover:bg-gray-200/60'
                }`}
              >
                <LinkIcon className="w-3.5 h-3.5 text-gray-400" />
                <span>Kết nối store</span>
              </button>
            </div>
          </aside>

          {/* MAIN CONTENT VIEW */}
          <main className="flex-1 flex overflow-hidden bg-[#f3f4f6]">
            {/* SUB-VIEW 1: TỔNG QUAN */}
            {shopifySidebarTab === 'tongquan' && (
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                {/* Số liệu tính từ chính MOCK_STORES bên dưới, không hardcode rời rạc
                    (trước đây là 12 / 46.319 / 1.054 / 574 — không khớp với danh sách hiển thị). */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1 shadow-2xs">
                    <div className="text-[11px] text-gray-500 font-medium">Cửa hàng</div>
                    <div className="text-2xl font-bold text-gray-900">{MOCK_STORES.length}</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1 shadow-2xs">
                    <div className="text-[11px] text-gray-500 font-medium">Sản phẩm</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {MOCK_STORES.reduce((a, s) => a + s.productsCount, 0).toLocaleString('vi-VN')}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1 shadow-2xs">
                    <div className="text-[11px] text-gray-500 font-medium">Bộ sưu tập</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {MOCK_STORES.reduce((a, s) => a + s.collectionsCount, 0).toLocaleString('vi-VN')}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1 shadow-2xs">
                    <div className="text-[11px] text-gray-500 font-medium">Mục chờ duyệt (giữ 30 ngày)</div>
                    <div className="text-2xl font-bold text-gray-900">
                      {MOCK_STORES.reduce((a, s) => a + (s.deletedCount ?? 0), 0).toLocaleString('vi-VN')}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-gray-900">Cửa hàng đã lưu</h3>
                    {/* Toàn bộ danh sách này là MOCK_STORES hardcode trong code,
                        không phải store thật đã crawl — gắn nhãn để khỏi hiểu nhầm. */}
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300 text-[10px] font-bold uppercase tracking-wide">
                      Dữ liệu mẫu
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {MOCK_STORES.map((store) => (
                      <div
                        key={store.id}
                        onClick={() => handleOpenStoreDetail(store)}
                        className="p-4 rounded-2xl bg-white border border-gray-200 flex items-start justify-between shadow-2xs hover:shadow-md transition-all cursor-pointer group hover:border-red-300"
                      >
                        <div className="flex items-start gap-3.5">
                          <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100 border border-gray-200 shrink-0">
                            <img src={store.imageUrl} alt={store.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                          </div>
                          <div className="space-y-1.5">
                            <div>
                              <h4 className="font-bold text-sm text-gray-900 leading-tight group-hover:text-red-600 transition-colors">{store.name}</h4>
                              <div className="text-xs text-gray-400 font-mono leading-tight">{store.domain}</div>
                            </div>
                            <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
                              <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200 text-[11px] font-mono font-medium flex items-center gap-1">
                                <Box className="w-3 h-3 text-gray-400" /> {store.productsCount.toLocaleString('vi-VN')} sản phẩm
                              </span>
                              <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200 text-[11px] font-mono font-medium flex items-center gap-1">
                                <Folder className="w-3 h-3 text-gray-400" /> {store.collectionsCount} bộ sưu tập
                              </span>
                              {store.deletedCount !== undefined && store.deletedCount > 0 && (
                                <span className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-700 border border-gray-200 text-[11px] font-mono font-medium flex items-center gap-1">
                                  <Trash2 className="w-3 h-3 text-gray-400" /> {store.deletedCount} tạm xóa
                                </span>
                              )}
                            </div>
                            <div className="text-[10px] text-gray-400 font-mono pt-1">{store.lastUpdated}</div>
                          </div>
                        </div>
                        <a
                          href={`https://${store.domain}`}
                          target="_blank"
                          rel="noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1 text-gray-400 hover:text-gray-700 cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* SUB-VIEW 2: LOCAL PRODUCTS */}
            {shopifySidebarTab === 'local' && (
              <>
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold text-gray-900 tracking-tight">Sản phẩm Local</h2>
                    <div className="flex items-center gap-6 text-xs text-gray-500 font-semibold border-b border-gray-200 pb-2">
                      <button
                        onClick={() => setLocalSubTab('ytuong')}
                        className={`pb-2 -mb-2 transition-colors cursor-pointer ${
                          localSubTab === 'ytuong' ? 'text-gray-900 border-b-2 border-gray-900 font-bold' : 'hover:text-gray-900'
                        }`}
                      >
                        Ý tưởng
                      </button>
                      <button
                        onClick={() => setLocalSubTab('taosanpham')}
                        className={`pb-2 -mb-2 transition-colors cursor-pointer ${
                          localSubTab === 'taosanpham' ? 'text-gray-900 border-b-2 border-gray-900 font-bold' : 'hover:text-gray-900'
                        }`}
                      >
                        Tạo sản phẩm
                      </button>
                      <button
                        onClick={() => setLocalSubTab('datao')}
                        className={`pb-2 -mb-2 transition-colors cursor-pointer ${
                          localSubTab === 'datao' ? 'text-gray-900 border-b-2 border-gray-900 font-bold' : 'hover:text-gray-900'
                        }`}
                      >
                        Đã tạo
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-3 rounded-xl border border-gray-200 shadow-2xs">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-medium text-gray-800">
                        <span>Tất cả {productsList.length} sản phẩm</span>
                        <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                      </div>
                      <span className="text-xs text-gray-500 font-mono">Thứ Hai, 24/08/2026</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button onClick={toggleSelectAll} className="px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-xs border border-gray-200 flex items-center gap-1.5 cursor-pointer">
                        <Check className="w-3.5 h-3.5 text-gray-500" /> Chọn tất cả
                      </button>
                      <button onClick={() => setProductsList(productsList.map((p) => ({ ...p, selected: false })))} className="px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 font-semibold text-xs border border-gray-200 flex items-center gap-1.5 cursor-pointer">
                        <X className="w-3.5 h-3.5 text-gray-500" /> Bỏ chọn
                      </button>
                      <button onClick={handleDownloadSelectedImages} className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-2xs flex items-center gap-1.5 cursor-pointer">
                        <ImageIcon className="w-4 h-4" /> Tải Ảnh Đã Chọn {selectedCount > 0 ? `(${selectedCount} SP)` : '(Tất cả)'}
                      </button>
                      <button onClick={() => alert(`Đang kiểm duyệt ${selectedCount} sản phẩm...`)} className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-2xs flex items-center gap-1.5 cursor-pointer">
                        <ShieldCheck className="w-4 h-4" /> Kiểm duyệt
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {productsList.map((prod) => (
                      <div
                        key={prod.id}
                        onClick={() => toggleProductSelect(prod.id)}
                        className={`group bg-white rounded-xl border transition-all cursor-pointer p-4 space-y-3 shadow-2xs hover:shadow-md ${
                          prod.selected ? 'border-red-500 ring-1 ring-red-500' : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="grid grid-cols-3 gap-1.5 bg-gray-50 p-1.5 rounded-lg border border-gray-100">
                          {prod.thumbnails.slice(0, 6).map((img, idx) => (
                            <div key={idx} className="aspect-square rounded-md overflow-hidden bg-gray-200 border border-gray-200">
                              <img src={img} alt="thumb" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                            </div>
                          ))}
                        </div>

                        <div className="flex items-start justify-between gap-2">
                          <div className="space-y-0.5">
                            <div className="flex items-center gap-2">
                              <span className="font-mono text-xs font-bold text-gray-900">{prod.code}</span>
                              <span className="text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.2 rounded font-mono border border-gray-200">{prod.itemCount} sản phẩm</span>
                              <span className="font-bold text-xs text-red-600 font-mono">{prod.price}</span>
                            </div>
                            <h4 className="font-medium text-xs text-gray-700 truncate">{prod.name}</h4>
                          </div>

                          {prod.status === 'choduyet' ? (
                            <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-semibold whitespace-nowrap">Chờ duyệt sản phẩm</span>
                          ) : (
                            <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-semibold whitespace-nowrap">Live</span>
                          )}
                        </div>

                        <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                          <button onClick={(e) => { e.stopPropagation(); alert(`Tạo lại mockup cho ${prod.code}`); }} className="px-3 py-1 rounded bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200 font-medium flex items-center gap-1.5 text-[11px] cursor-pointer">
                            <RotateCcw className="w-3 h-3" /> Tạo lại
                          </button>
                          <button onClick={(e) => { e.stopPropagation(); alert(`Duyệt sản phẩm ${prod.code}`); }} className="px-3.5 py-1 rounded bg-red-50 hover:bg-red-100 text-red-700 font-bold border border-red-200 flex items-center gap-1 text-[11px] cursor-pointer">
                            <Check className="w-3 h-3" /> Duyệt
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <aside className="w-80 bg-white border-l border-gray-200 p-5 flex flex-col justify-between shrink-0 text-xs shadow-2xs select-none">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                      <div className="font-bold text-sm text-gray-900 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-red-600" /> Kiểm duyệt
                      </div>
                      <span className="text-[11px] text-gray-500 font-mono">Đã chọn: <strong className="text-gray-900 font-bold">{selectedCount}</strong></span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-[10px] font-mono text-gray-400 uppercase font-semibold">TIMELINE</div>
                      <div className="p-2 rounded-lg bg-gray-50 border border-gray-200 font-medium text-gray-800 flex items-center justify-between cursor-pointer">
                        <span>Tất cả 7 ngày</span>
                        <ChevronDown className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <div className="p-3 rounded-lg bg-amber-50/80 border border-amber-200 text-amber-900 space-y-1 text-[11px]">
                        <div className="font-bold flex items-center gap-1.5 text-amber-800"><AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-600" /> Sản phẩm gặp lỗi khi tạo</div>
                        <p className="text-amber-700 leading-snug">Sản phẩm gặp lỗi khi tạo mockup hoặc push. Xem chi tiết kỹ thuật.</p>
                      </div>

                      <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 space-y-1 text-[11px]">
                        <div className="font-bold flex items-center gap-1.5 text-gray-900"><AlertTriangle className="w-3.5 h-3.5 shrink-0 text-gray-500" /> Codes Image Returned</div>
                        <p className="text-gray-600 leading-snug">2 sản phẩm Codes image returned without the required fee.</p>
                      </div>

                      <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 space-y-1 text-[11px]">
                        <div className="font-bold flex items-center gap-1.5 text-gray-900"><AlertTriangle className="w-3.5 h-3.5 shrink-0 text-gray-500" /> Shopify Image Pan</div>
                        <p className="text-gray-600 leading-snug">2 sản phẩm "Settings" trên store shopify_image_pan_cover.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-100 space-y-2">
                    <div className="text-[10px] font-mono text-gray-400 text-center">244 sản phẩm chưa thể duyệt...</div>
                    <button onClick={() => alert(`Đã duyệt ${selectedCount || 12} sản phẩm!`)} className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md flex items-center justify-center gap-2 cursor-pointer">
                      <Check className="w-4 h-4" /> Duyệt {selectedCount || 12} sản phẩm
                    </button>
                  </div>
                </aside>
              </>
            )}

            {/* SUB-VIEW 3: TRÊN STORE (AI IMAGE GENERATION & COMPETITOR RE-GEN WORKSPACE) */}
            {shopifySidebarTab === 'trenstore' && (
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* BREADCRUMB & STORE HEADER */}
                <div className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between text-xs shrink-0 shadow-2xs">
                  <div className="flex items-center gap-3">
                    <button onClick={handleBackToStoresList} className="flex items-center gap-1 text-gray-500 hover:text-gray-900 font-semibold cursor-pointer">
                      <ChevronLeft className="w-4 h-4 text-gray-400" /> Shopify
                    </button>
                    <span className="text-gray-300">/</span>
                    <span className="font-bold text-gray-900 text-sm">{currentStoreDisplay.name}</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-mono text-[11px] font-bold border border-emerald-200">
                      {currentStoreDisplay.productsCount.toLocaleString('vi-VN')} đang dùng
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleTriggerChatGPTRegenAll(selectedProduct)}
                      disabled={isAiGenerating}
                      className="px-4 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold text-xs shadow-xs flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      {isAiGenerating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Zap className="w-3.5 h-3.5 fill-current" />}
                      <span>{isAiGenerating ? 'Đang Gen AI...' : `⚡ Gen tất cả - ${currentStoreDisplay.productsCount.toLocaleString('vi-VN')} SP`}</span>
                    </button>
                  </div>
                </div>

                {/* AI PIPELINE RUNNER BANNER */}
                {isAiGenerating && (
                  <div className="bg-gradient-to-r from-red-600 via-amber-600 to-red-700 text-white px-6 py-2 flex items-center justify-between text-xs animate-pulse font-medium shadow-inner shrink-0">
                    <div className="flex items-center gap-2 font-bold">
                      <Bot className="w-4 h-4 animate-bounce" />
                      <span>{aiGenStepText}</span>
                    </div>
                    <span className="font-mono text-[10px] bg-white/20 px-2 py-0.5 rounded-full">ChatGPT Vision Engine</span>
                  </div>
                )}

                {/* SEARCH & FILTERS BAR */}
                <div className="bg-white border-b border-gray-200 px-6 py-2.5 flex items-center justify-between text-xs gap-4 shrink-0">
                  <div className="relative flex-1 max-w-md">
                    <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="Tìm theo mã, tên, handle, vendor, type" className="w-full h-8 pl-8 pr-3 bg-gray-50 border border-gray-200 rounded-lg text-xs" />
                  </div>

                  <div className="flex items-center gap-4 text-[11px] font-medium text-gray-600">
                    <div className="flex items-center gap-1.5">
                      <span className="text-gray-400 font-mono text-[10px]">PHẠM VI:</span>
                      <button className="px-2.5 py-1 rounded bg-red-600 text-white font-bold shadow-2xs cursor-pointer">Tất cả</button>
                      <button className="px-2.5 py-1 rounded bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 flex items-center gap-1 cursor-pointer">
                        <Folder className="w-3 h-3 text-gray-400" /> Bộ sưu tập
                      </button>
                      <button className="px-2.5 py-1 rounded bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 flex items-center gap-1 cursor-pointer">
                        <Box className="w-3 h-3 text-gray-400" /> Sản phẩm
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="text-gray-400 font-mono text-[10px]">HIỂN THỊ:</span>
                      <button className="px-2.5 py-1 rounded bg-red-600 text-white font-bold shadow-2xs cursor-pointer">Tất cả</button>
                      <button className="px-2.5 py-1 rounded bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 cursor-pointer">Chưa gen</button>
                      <button className="px-2.5 py-1 rounded bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 cursor-pointer">Đang gen</button>
                      <button className="px-2.5 py-1 rounded bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 cursor-pointer">Lỗi</button>
                      <button className="px-2.5 py-1 rounded bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 cursor-pointer">Đã gen</button>
                      <button className="px-2.5 py-1 rounded bg-gray-50 hover:bg-gray-100 border border-gray-200 text-gray-700 cursor-pointer">Đã duyệt</button>
                    </div>
                  </div>
                </div>

                {/* WORKSPACE BODY */}
                <div className="flex-1 flex overflow-hidden">
                  {/* MIDDLE PRODUCT LIST SIDEBAR */}
                  <div className="w-64 bg-white border-r border-gray-200 p-3 space-y-2 shrink-0 flex flex-col">
                    <div className="flex items-center justify-between text-[11px] text-gray-500 font-mono pb-2 border-b border-gray-100">
                      <button className="flex items-center gap-1 text-gray-400 hover:text-gray-600 cursor-pointer">
                        ‹ Thu gọn
                      </button>
                      <div className="flex items-center gap-1 text-[10px]">
                        <span>1 - 25 / {currentStoreDisplay.productsCount.toLocaleString('vi-VN')}</span>
                        <span className="px-1 bg-gray-100 border border-gray-200 rounded font-bold">25 v</span>
                        <span>1/99</span>
                        <span>‹ ›</span>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto space-y-1.5 pr-1">
                      {productsList.map((p) => (
                        <div
                          key={p.id}
                          onClick={() => setSelectedProduct(p)}
                          className={`p-2.5 rounded-xl border text-xs cursor-pointer transition-all flex items-start gap-2.5 ${
                            selectedProduct.id === p.id ? 'border-red-500 bg-red-50/40 ring-1 ring-red-500' : 'border-gray-200 hover:border-gray-300 bg-white'
                          }`}
                        >
                          <img src={p.thumbnails[0]} alt="p" className="w-10 h-10 rounded-lg object-cover border border-gray-200 shrink-0" />
                          <div className="space-y-1 truncate">
                            <div className="font-bold text-gray-900 truncate leading-tight">{p.code} {p.name}</div>
                            <span className="inline-block text-[10px] bg-gray-100 text-gray-600 px-1.5 py-0.2 rounded font-mono border border-gray-200">
                              {p.imageCountBadge || `${p.itemCount} ảnh`}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* MAIN MOCKUP GENERATOR CANVAS */}
                  <div className="flex-1 p-6 overflow-y-auto space-y-5 bg-[#f3f4f6]">
                    {/* CANVAS HEADER */}
                    <div className="bg-white p-4 rounded-xl border border-gray-200 space-y-3 shadow-2xs">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-sm text-gray-900">{selectedProduct.name}</h3>
                            <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 text-[10px] font-bold flex items-center gap-1">
                              <Globe className="w-3 h-3 text-amber-600" /> Crawl từ {currentStoreDisplay.name}
                            </span>
                          </div>
                          <div className="text-xs text-gray-500 font-mono mt-0.5">
                            Duyệt ảnh • {selectedProduct.code} • Toàn bộ sản phẩm • {selectedProduct.itemCount} ảnh
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setShowApiConfigModal(true)}
                            className="px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold border border-gray-200 text-xs flex items-center gap-1.5 cursor-pointer"
                          >
                            <Bot className="w-3.5 h-3.5 text-red-600" /> Cấu hình ChatGPT Prompt
                          </button>

                          <button
                            onClick={() => handleTriggerChatGPTRegenAll(selectedProduct)}
                            disabled={isAiGenerating}
                            className="px-3.5 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs"
                          >
                            {isAiGenerating ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                            <span>{isAiGenerating ? 'Đang Re-Gen...' : '✨ Gen ảnh sản phẩm'}</span>
                          </button>
                        </div>
                      </div>

                      {/* COMPETITOR CRAWLED ORIGINAL SOURCE STRIP */}
                      <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden border border-gray-200 shrink-0 bg-white relative">
                            <img src={selectedProduct.competitorImageUrl} alt="competitor-thumb" className="w-full h-full object-cover" />
                            <span className="absolute bottom-0 inset-x-0 bg-gray-900/80 text-[8px] text-white font-mono text-center py-0.2">CRAWL</span>
                          </div>
                          <div className="space-y-0.5">
                            <div className="font-bold text-gray-800 flex items-center gap-1.5">
                              <span>Ảnh Gốc Crawl Từ Đối Thủ</span>
                              <span className="text-[10px] text-gray-400 font-normal">({currentStoreDisplay.domain})</span>
                            </div>
                            <p className="text-[11px] text-gray-500 leading-tight max-w-lg">
                              Thuật toán AI Nomna sẽ dùng ChatGPT Vision đọc hình ảnh này, giữ lại dáng sản phẩm nhưng thay đổi 100% phông nền & ánh sáng chuẩn thương hiệu riêng của bạn.
                            </p>
                          </div>
                        </div>

                        <button
                          onClick={() => setLightboxImage(selectedProduct.aiMockups[0] ?? null)}
                          className="px-3 py-1.5 rounded-lg bg-white hover:bg-gray-100 text-gray-700 font-bold border border-gray-200 text-[11px] flex items-center gap-1.5 cursor-pointer shrink-0 shadow-2xs"
                        >
                          <ArrowLeftRight className="w-3.5 h-3.5 text-red-600" /> So sánh đối thủ
                        </button>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {/* ROW 1: 5 PLACEHOLDER CARDS FOR UNGENERATED MOCKUPS */}
                      <div className="grid grid-cols-5 gap-3">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <div
                            key={n}
                            className={`aspect-4/5 rounded-xl border flex flex-col items-center justify-center p-3 space-y-2 text-gray-400 shadow-2xs relative overflow-hidden transition-all ${
                              isAiGenerating
                                ? 'border-red-400 bg-red-50/50 ring-2 ring-red-200'
                                : 'border-gray-200 bg-white/70 backdrop-blur-xs'
                            }`}
                          >
                            {isAiGenerating ? (
                              <div className="flex flex-col items-center gap-2 text-red-600">
                                <Loader2 className="w-6 h-6 animate-spin" />
                                <span className="text-[11px] font-bold text-red-700 animate-pulse text-center">ChatGPT đang Re-Gen ảnh {n}...</span>
                              </div>
                            ) : (
                              <>
                                <div className="absolute inset-0 bg-gray-100/60 backdrop-blur-sm"></div>
                                <div className="relative z-10 flex flex-col items-center gap-1">
                                  <Sparkles className="w-5 h-5 text-amber-500" />
                                  <span className="text-xs font-bold text-gray-700">Chưa gen</span>
                                  <span className="text-[9px] text-gray-400 font-mono">Bấm Gen để AI tái tạo</span>
                                </div>
                              </>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* ROW 2: 5 GENERATED MOCKUP CARDS */}
                      <div className="grid grid-cols-5 gap-3">
                        {selectedProduct.thumbnails.slice(0, 5).map((img, idx) => (
                          <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden p-2.5 space-y-2.5 shadow-2xs group relative">
                            <div className="aspect-4/5 rounded-lg overflow-hidden bg-gray-100 border border-gray-100 relative">
                              {singleRegenIndex === idx ? (
                                <div className="w-full h-full flex flex-col items-center justify-center bg-red-50/90 text-red-600 p-2 space-y-1">
                                  <Loader2 className="w-5 h-5 animate-spin text-red-600" />
                                  <span className="text-[10px] font-bold text-red-700 text-center animate-pulse">Đang Re-Gen ảnh #{idx + 1}...</span>
                                </div>
                              ) : (
                                <>
                                  <img src={img} alt="gen" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200" />
                                  <div className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-emerald-600/90 text-white font-mono text-[9px] font-bold backdrop-blur-xs">
                                    ✨ ChatGPT Re-Gen
                                  </div>
                                  <button
                                    onClick={() => setLightboxImage(img)}
                                    className="absolute bottom-2 right-2 p-1.5 bg-gray-900/80 text-white rounded-md backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                  >
                                    <Maximize2 className="w-3.5 h-3.5" />
                                  </button>
                                </>
                              )}
                            </div>

                            <div className="flex items-center justify-between text-xs gap-1.5 pt-0.5">
                              <button
                                onClick={() => handleTriggerSingleCardRegen(idx)}
                                disabled={singleRegenIndex === idx}
                                className="flex-1 py-1 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 font-semibold text-[11px] flex items-center justify-center gap-1 cursor-pointer transition-colors"
                              >
                                {singleRegenIndex === idx ? <Loader2 className="w-3 h-3 animate-spin text-red-600" /> : <RotateCcw className="w-3 h-3 text-red-600" />}
                                <span>{singleRegenIndex === idx ? 'Đang Re-Gen...' : 'Re-Gen'}</span>
                              </button>
                              <button onClick={() => alert(`Đã bỏ chọn ảnh ${idx + 1}`)} className="flex-1 py-1 rounded-md bg-gray-50 hover:bg-gray-100 text-gray-600 border border-gray-200 font-semibold text-[11px] flex items-center justify-center gap-1 cursor-pointer">
                                <Trash2 className="w-3 h-3" /> Bỏ
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SUB-VIEW 4: DỮ LIỆU CRAWL (SHOPIFY AUTOMATED CRAWLER & ARCHITECTURE EXTRACTOR) */}
            {shopifySidebarTab === 'crawl' && (
              <div className="flex-1 flex flex-col overflow-hidden bg-[#f3f4f6]">
                {/* CRAWLER TOP ACTION BAR */}
                <div className="bg-white border-b border-gray-200 px-6 py-4 space-y-3 shrink-0 shadow-2xs">


                  {/* SINGLE COMBINED ROW: URL INPUT + CRAWL BUTTON + LOCALSTORAGE STORE SELECTOR */}
                  <div className="flex items-center gap-3">
                    <div className="relative flex-1">
                      <Globe className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        value={crawlUrlInput}
                        onChange={(e) => setCrawlUrlInput(e.target.value)}
                        placeholder="https://lovful.com hoặc https://nailhandy.com..."
                        className="w-full h-10 pl-10 pr-4 bg-gray-50 border border-gray-200 rounded-xl text-xs font-mono focus:bg-white focus:border-red-500 focus:ring-1 focus:ring-red-500"
                      />
                    </div>

                    <button
                      onClick={handleStartCrawlPipeline}
                      disabled={isCrawlRunning}
                      className="px-4 h-10 rounded-xl bg-red-600 hover:bg-red-700 disabled:bg-gray-400 text-white font-bold text-xs shadow-md transition-colors cursor-pointer flex items-center gap-1.5 shrink-0"
                    >
                      {isCrawlRunning ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                      <span>{isCrawlRunning ? 'Đang Crawl...' : 'Bắt đầu Crawl'}</span>
                    </button>

                    <div className="h-6 w-[1px] bg-gray-200 shrink-0 mx-0.5" />

                    <div className="flex items-center gap-2 bg-amber-50/80 border border-amber-200 px-3 h-10 rounded-xl shrink-0">
                      <Store className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <select
                        value={activeCrawledDomain}
                        onChange={(e) => {
                          const dom = e.target.value;
                          setActiveCrawledDomain(dom);
                          setCrawlUrlInput(`https://${dom}`);
                          const record = crawledStoresHistory.find((s) => s.domain === dom);
                          if (record && record.products?.length > 0) {
                            setProductsList(record.products);
                            setSelectedProduct(record.products[0]);
                          }
                        }}
                        className="h-7 px-2 bg-white border border-amber-300 rounded-lg text-xs font-mono font-bold text-gray-900 cursor-pointer shadow-2xs focus:outline-none"
                      >
                        {crawledStoresHistory.map((s) => {
                          const stored = s.productsStored ?? s.products.length;
                          const countLabel =
                            stored < s.productsCount
                              ? `${stored}/${s.productsCount} SP`
                              : `${s.productsCount} SP`;
                          return (
                            <option key={s.domain} value={s.domain}>
                              {s.isDemoData ? '[DỮ LIỆU MẪU] ' : ''}
                              {s.domain} ({countLabel} • {new Date(s.crawledAt).toLocaleTimeString('vi-VN')})
                            </option>
                          );
                        })}
                      </select>

                      <button
                        onClick={() => {
                          if (confirm(`Bạn có chắc chắn muốn xóa store ${activeCrawledDomain} khỏi LocalStorage?`)) {
                            const updated = crawledStoresHistory.filter((s) => s.domain !== activeCrawledDomain);
                            setCrawledStoresHistory(updated);
                            localStorage.setItem('NOMNA_CRAWLED_STORES', JSON.stringify(updated));
                            if (updated.length > 0) {
                              setActiveCrawledDomain(updated[0].domain);
                              setCrawlUrlInput(`https://${updated[0].domain}`);
                            }
                          }
                        }}
                        className="px-2 py-1 rounded-lg bg-white hover:bg-red-50 text-red-600 font-bold border border-red-200 text-[11px] flex items-center gap-1 cursor-pointer"
                        title="Xóa store này khỏi LocalStorage"
                      >
                        <Trash2 className="w-3.5 h-3.5" /> Xóa
                      </button>
                    </div>
                  </div>
                </div>

                {/* REAL-TIME PROGRESS BANNER */}
                {isCrawlRunning && (
                  <div className="bg-gradient-to-r from-red-600 via-amber-600 to-red-700 text-white px-6 py-2.5 flex items-center justify-between text-xs animate-pulse font-medium shadow-inner shrink-0">
                    <div className="flex items-center gap-2 font-bold">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>{crawlStepMessage}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-36 h-2 bg-black/20 rounded-full overflow-hidden">
                        <div className="h-full bg-white rounded-full transition-all duration-300" style={{ width: `${crawlProgressPercent}%` }}></div>
                      </div>
                      <span className="font-mono text-[11px] font-bold">{crawlProgressPercent}%</span>
                    </div>
                  </div>
                )}

                {/* CRAWL WORKSPACE SUB-TABS AND MAIN BODY (DYNAMICALLY DERIVED FROM activeCrawledRecord) */}
                {(() => {
                  const activeRecord =
                    crawledStoresHistory.find((s) => s.domain === activeCrawledDomain) ||
                    crawledStoresHistory[0] ||
                    DEFAULT_CRAWLED_STORES_SEED[0];

                  const currentOtherMediaList = (activeRecord.otherMedia && activeRecord.otherMedia.length > 0)
                    ? activeRecord.otherMedia
                    : DEMO_OTHER_MEDIA;
                  const currentOtherMediaCount = currentOtherMediaList.length;

                  return (
                    <>
                      {/* Cảnh báo khi đang xem dữ liệu mẫu, tránh nhầm là số liệu crawl thật */}
                      {activeRecord.isDemoData && (
                        <div className="bg-amber-100 border-b border-amber-300 px-6 py-2 flex items-center gap-2 text-[11px] text-amber-900 shrink-0">
                          <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-amber-600" />
                          <span>
                            <span className="font-bold">Đây là dữ liệu mẫu để xem giao diện</span> — chưa
                            crawl store nào. Nhập domain Shopify ở trên và bấm crawl để lấy số liệu thật.
                          </span>
                        </div>
                      )}

                      {/* CRAWL SUB-TABS NAVIGATION */}
                      <div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center gap-2 text-xs font-semibold shrink-0">
                        <button
                          onClick={() => setCrawlSubTab('overview')}
                          className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                            crawlSubTab === 'overview' ? 'bg-red-600 text-white font-bold shadow-2xs' : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          📊 1. Tổng quan ({activeRecord.domain})
                        </button>
                        <button
                          onClick={() => setCrawlSubTab('products')}
                          className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                            crawlSubTab === 'products' ? 'bg-red-600 text-white font-bold shadow-2xs' : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          📦 2. Sản phẩm Crawled ({activeRecord.productsCount.toLocaleString('vi-VN')})
                        </button>
                        <button
                          onClick={() => setCrawlSubTab('collections')}
                          className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                            crawlSubTab === 'collections' ? 'bg-red-600 text-white font-bold shadow-2xs' : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          📁 3. Bộ sưu tập ({activeRecord.collectionsCount})
                        </button>
                        <button
                          onClick={() => setCrawlSubTab('other_media')}
                          className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                            crawlSubTab === 'other_media' ? 'bg-red-600 text-white font-bold shadow-2xs' : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          🖼️ 4. Banners & Media Khác ({currentOtherMediaCount})
                        </button>
                        <button
                          onClick={() => setCrawlSubTab('checklist')}
                          className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                            crawlSubTab === 'checklist' ? 'bg-red-600 text-white font-bold shadow-2xs' : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          🛡️ 5. Store Checklist & Trust Elements
                        </button>
                        <button
                          onClick={() => setCrawlSubTab('architecture')}
                          className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                            crawlSubTab === 'architecture' ? 'bg-red-600 text-white font-bold shadow-2xs' : 'text-gray-600 hover:bg-gray-100'
                          }`}
                        >
                          📂 6. Kiến trúc File Output ({activeRecord.domain})
                        </button>
                      </div>

                      <div className="flex-1 p-6 overflow-y-auto space-y-6">
                      {/* TAB 1: OVERVIEW */}
                      {crawlSubTab === 'overview' && (
                        <div className="space-y-6">
                          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl flex items-center justify-between text-xs">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                                <CheckCircle2 className="w-6 h-6" />
                              </div>
                              <div>
                                <div className="font-extrabold text-sm text-emerald-950">Xác nhận Shopify Store: {activeRecord.domain}</div>
                                <div className="text-emerald-800 font-mono text-[11px] mt-0.5">
                                  Đọc được /products.json. Theme:{' '}
                                  <strong>
                                    {activeRecord.themeDetected ?? 'không phát hiện được'}
                                  </strong>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-2xl border border-gray-200 space-y-1 shadow-2xs">
                              <div className="text-[11px] text-gray-500 font-medium">Tổng Sản Phẩm Crawled</div>
                              <div className="text-2xl font-extrabold text-gray-900 font-mono">{activeRecord.productsCount.toLocaleString('vi-VN')}</div>
                              <div className="text-[10px] text-gray-400 font-mono">
                                {(activeRecord.productsStored ?? activeRecord.products.length) < activeRecord.productsCount
                                  ? `Chỉ lưu ${activeRecord.productsStored ?? activeRecord.products.length} bản ghi`
                                  : 'Bóc tách từ /products.json'}
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-2xl border border-gray-200 space-y-1 shadow-2xs">
                              <div className="text-[11px] text-gray-500 font-medium">Bộ Sưu Tập</div>
                              <div className="text-2xl font-extrabold text-gray-900 font-mono">{activeRecord.collectionsCount}</div>
                              <div className="text-[10px] text-gray-400 font-mono">Bóc tách từ /collections.json</div>
                            </div>

                            <div className="bg-white p-4 rounded-2xl border border-gray-200 space-y-1 shadow-2xs">
                              <div className="text-[11px] text-gray-500 font-medium">Ảnh HD Shopify CDN</div>
                              <div className="text-2xl font-extrabold text-gray-900 font-mono">{activeRecord.imagesCount.toLocaleString('vi-VN')}</div>
                              <div className="text-[10px] text-gray-400 font-mono">Lưu URL danh mục trong images/</div>
                            </div>

                            <div className="bg-white p-4 rounded-2xl border border-gray-200 space-y-1 shadow-2xs">
                              <div className="text-[11px] text-gray-500 font-medium">Store Trust Badges</div>
                              <div className="text-2xl font-extrabold text-gray-900 font-mono">{activeRecord.storeChecklist.trustBadges.length} Widgets</div>
                              <div className="text-[10px] text-gray-400 font-mono">
                                {activeRecord.storeChecklist.trustBadges.length === 0
                                  ? 'Chưa hỗ trợ dò tự động'
                                  : 'Trích xuất theo checklist'}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TAB 2: PRODUCTS */}
                      {crawlSubTab === 'products' && (
                        <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4 shadow-2xs">
                          <div className="flex items-center justify-end border-b border-gray-100 pb-3">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  const allIds = activeRecord.products.map((p) => p.id);
                                  if (checkedProductIds.length === allIds.length) {
                                    setCheckedProductIds([]);
                                  } else {
                                    setCheckedProductIds(allIds);
                                  }
                                }}
                                className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold border border-gray-300 text-xs flex items-center gap-1.5 cursor-pointer"
                              >
                                <Check className="w-3.5 h-3.5 text-gray-600" />
                                <span>{checkedProductIds.length === activeRecord.products.length ? 'Bỏ chọn tất cả' : 'Select All (Chọn tất cả ảnh)'}</span>
                              </button>

                              <button
                                onClick={() => handleDownloadCheckedImages(activeRecord.products, activeRecord.domain)}
                                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs"
                              >
                                <ImageIcon className="w-4 h-4" />
                                <span>📥 Tải Ảnh Đã Chọn ({checkedProductIds.length > 0 ? checkedProductIds.length : activeRecord.products.length} SP)</span>
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            {activeRecord.products.map((p) => {
                              const isChecked = checkedProductIds.includes(p.id);
                              return (
                                <div
                                  key={p.id}
                                  className={`p-3 rounded-xl border flex items-start gap-3 text-xs transition-all ${
                                    isChecked ? 'bg-emerald-50/60 border-emerald-500 ring-1 ring-emerald-500' : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                                  }`}
                                >
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={(e) => {
                                      e.stopPropagation();
                                      if (isChecked) {
                                        setCheckedProductIds(checkedProductIds.filter((id) => id !== p.id));
                                      } else {
                                        setCheckedProductIds([...checkedProductIds, p.id]);
                                      }
                                    }}
                                    className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer accent-emerald-600 shrink-0"
                                  />
                                  <div
                                    onClick={() => setLightboxImage(p.thumbnails[0])}
                                    className="w-14 h-14 rounded-lg overflow-hidden border border-gray-200 shrink-0 relative group cursor-zoom-in"
                                    title="Click để phóng to xem ảnh preview"
                                  >
                                    <img src={p.thumbnails[0]} alt="p" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white">
                                      <Maximize2 className="w-3.5 h-3.5" />
                                    </div>
                                  </div>
                                  <div className="space-y-1 overflow-hidden flex-1">
                                    <div className="font-bold text-gray-900 truncate">{p.code} {p.name}</div>
                                    <div className="text-[10px] text-gray-500 font-mono">Vendor: {activeRecord.domain} • Type: {p.collection} • Giá: {p.price}</div>
                                    <div className="text-[10px] text-gray-400 truncate">Variant options: Size (XS, S, M, L), Shape (Almond, Coffin, Stiletto)</div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* TAB 3: COLLECTIONS */}
                      {crawlSubTab === 'collections' && (
                        <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4 shadow-2xs">
                          <div className="border-b border-gray-100 pb-3" />

                          <div className="grid grid-cols-3 gap-4">
                            {activeRecord.collections.map((col, idx) => (
                              <div key={idx} className="p-3 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-3 text-xs">
                                <div className="w-12 h-12 rounded-lg bg-gray-200 overflow-hidden shrink-0 border border-gray-200">
                                  <img src={col.coverImg} alt="c" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                  <div className="font-bold text-gray-900">{col.name}</div>
                                  <div className="text-[10px] text-gray-400 font-mono">Handle: /{col.handle}</div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* TAB 4: OTHER MEDIA & BANNERS */}
                      {crawlSubTab === 'other_media' && (
                        <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-4 shadow-2xs">
                          <div className="flex items-center justify-end border-b border-gray-100 pb-3">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => {
                                  if (checkedMediaUrls.length === currentOtherMediaList.length) {
                                    setCheckedMediaUrls([]);
                                  } else {
                                    setCheckedMediaUrls(currentOtherMediaList);
                                  }
                                }}
                                className="px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold border border-gray-300 text-xs flex items-center gap-1.5 cursor-pointer"
                              >
                                <Check className="w-3.5 h-3.5 text-gray-600" />
                                <span>{checkedMediaUrls.length === currentOtherMediaList.length ? 'Bỏ chọn tất cả' : 'Select All Media (Chọn tất cả)'}</span>
                              </button>

                              <button
                                onClick={() => handleDownloadCheckedMedia(currentOtherMediaList, activeRecord.domain)}
                                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs"
                              >
                                <ImageIcon className="w-4 h-4" />
                                <span>📥 Tải Media Đã Chọn ({checkedMediaUrls.length > 0 ? checkedMediaUrls.length : currentOtherMediaCount} File)</span>
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 bg-gray-50 p-2.5 rounded-xl border border-gray-200 text-xs">
                            <Search className="w-4 h-4 text-gray-400 shrink-0" />
                            <input
                              type="text"
                              value={mediaSearchQuery}
                              onChange={(e) => setMediaSearchQuery(e.target.value)}
                              placeholder="🔍 Tìm kiếm theo tên file ảnh (VD: Ultra_Car_Seat_Covers, logo, banner)..."
                              className="bg-transparent border-none outline-none w-full text-xs text-gray-800 placeholder-gray-400"
                            />
                            {mediaSearchQuery && (
                              <button onClick={() => setMediaSearchQuery('')} className="text-gray-400 hover:text-gray-600 text-xs font-bold px-1.5 cursor-pointer">✕ Clear</button>
                            )}
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {(activeRecord.otherMedia && activeRecord.otherMedia.length > 0 ? activeRecord.otherMedia : DEMO_OTHER_MEDIA)
                              .filter((mediaUrl) => !mediaSearchQuery || mediaUrl.toLowerCase().includes(mediaSearchQuery.toLowerCase()))
                              .map((mediaUrl, idx) => {
                                const isChecked = checkedMediaUrls.includes(mediaUrl);
                                return (
                                  <div
                                    key={idx}
                                    className={`p-2.5 rounded-xl border flex flex-col space-y-2 transition-all ${
                                      isChecked ? 'bg-emerald-50/60 border-emerald-500 ring-1 ring-emerald-500' : 'bg-gray-50 border-gray-200 hover:border-gray-300'
                                    }`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="font-mono text-[10px] text-gray-500 font-bold">Media #{idx + 1}</span>
                                      <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={(e) => {
                                          e.stopPropagation();
                                          if (isChecked) {
                                            setCheckedMediaUrls(checkedMediaUrls.filter((u) => u !== mediaUrl));
                                          } else {
                                            setCheckedMediaUrls([...checkedMediaUrls, mediaUrl]);
                                          }
                                        }}
                                        className="w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer accent-emerald-600 shrink-0"
                                      />
                                    </div>
                                    <div
                                      onClick={() => setLightboxImage(mediaUrl)}
                                      className="aspect-video bg-gray-200 rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center relative group cursor-zoom-in"
                                      title="Click để phóng to xem ảnh preview"
                                    >
                                      <img src={mediaUrl} alt="media" className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white">
                                        <Maximize2 className="w-4 h-4" />
                                      </div>
                                    </div>
                                    <div className="text-[9px] text-gray-400 font-mono truncate">{mediaUrl}</div>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}

                      {/* TAB 5: STORE CHECKLIST & TRUST ELEMENTS */}
                      {crawlSubTab === 'checklist' && (
                        <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-5 shadow-2xs">
                          <div>
                            <h3 className="font-bold text-sm text-gray-900">Báo cáo Store Checklist cho {activeRecord.domain}</h3>
                            <p className="text-xs text-gray-500">Phân tích các yếu tố tăng tỷ lệ chuyển đổi (CR) của đối thủ.</p>
                          </div>

                          <div className="grid grid-cols-2 gap-4 text-xs">
                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
                              <div className="font-bold text-gray-900 flex items-center gap-2">
                                <ShieldCheck className="w-4 h-4 text-emerald-600" /> Trust Badges Extracted
                              </div>
                              {activeRecord.storeChecklist.trustBadges.length === 0 ? (
                                <p className="text-gray-500 italic">
                                  Chưa dò được. Crawler hiện chỉ đọc /products.json và /collections.json —
                                  muốn lấy trust badge phải parse HTML trang chủ (chưa làm).
                                </p>
                              ) : (
                                <ul className="space-y-1 text-gray-700 pl-5 list-disc">
                                  {activeRecord.storeChecklist.trustBadges.map((badge, bIdx) => (
                                    <li key={bIdx}>{badge}</li>
                                  ))}
                                </ul>
                              )}
                            </div>

                            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 space-y-2">
                              <div className="font-bold text-gray-900 flex items-center gap-2">
                                <Bot className="w-4 h-4 text-blue-600" /> App Stack Detected
                              </div>
                              {activeRecord.storeChecklist.appStackDetected.length === 0 ? (
                                <p className="text-gray-500 italic">
                                  Chưa dò được. Cần parse HTML/script tag của storefront để nhận diện
                                  Loox / Klaviyo / Judge.me... (chưa làm).
                                </p>
                              ) : (
                                <ul className="space-y-1 text-gray-700 pl-5 list-disc">
                                  {activeRecord.storeChecklist.appStackDetected.map((app, aIdx) => (
                                    <li key={aIdx}>{app}</li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* TAB 5: ARCHITECTURE FILE TREE OUTPUT */}
                      {crawlSubTab === 'architecture' && (
                        <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-5 shadow-2xs">
                          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                            <div>
                              <h3 className="font-bold text-sm text-gray-900">Cấu trúc Thư mục Files Output (Workspace Architecture)</h3>
                              <p className="text-xs text-gray-500 font-mono">Đường dẫn local: workspace/crawled-stores/{activeRecord.domain}/</p>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={handleDownloadStoreJson}
                                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs"
                              >
                                <Download className="w-3.5 h-3.5" /> 📥 Tải File products.json ({activeRecord.domain})
                              </button>
                              <button
                                onClick={() => {
                                  navigator.clipboard.writeText(`/Users/aminhp93/personal/dropship/workspace/crawled-stores/${activeRecord.domain}/`);
                                  alert(`📋 Đã copy đường dẫn workspace/${activeRecord.domain}/ vào clipboard!`);
                                }}
                                className="px-3.5 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 font-bold border border-gray-200 text-xs flex items-center gap-1.5 cursor-pointer"
                              >
                                <Copy className="w-3.5 h-3.5" /> Copy Đường dẫn Workspace
                              </button>
                            </div>
                          </div>

                          {/* FILE TREE VIEW */}
                          <div className="bg-gray-900 text-gray-100 rounded-xl p-4 font-mono text-xs leading-relaxed space-y-1.5 shadow-inner">
                            <div className="text-emerald-400 font-bold">📂 workspace/crawled-stores/{activeRecord.domain}/</div>
                            <div className="pl-4 text-amber-300">├── 📄 products.json <span className="text-gray-500 text-[10px]">({activeRecord.productsCount} sản phẩm metadata, variants, prices & HTML descriptions)</span></div>
                            <div className="pl-4 text-amber-300">├── 📄 collections.json <span className="text-gray-500 text-[10px]">({activeRecord.collectionsCount} bộ sưu tập với cover image & handles)</span></div>
                            <div className="pl-4 text-amber-300">├── 📄 store-checklist.json <span className="text-gray-500 text-[10px]">(Trust badges, announcement bar, app stack & policy links)</span></div>
                            <div className="pl-4 text-emerald-400">└── 📂 images/</div>
                            <div className="pl-8 text-gray-400">├── 📄 product_images_catalog.json <span className="text-gray-500 text-[10px]">({activeRecord.imagesCount} URL ảnh HD CDN từ Shopify)</span></div>
                            <div className="pl-8 text-gray-400">└── 📄 collection_banners.json</div>
                          </div>
                        </div>
                      )}
                    </div>
                  </>
                );
              })()}
              </div>
            )}

            {/* OTHER SUB-VIEWS */}
            {(shopifySidebarTab === 'noidung' || shopifySidebarTab === 'dualen' || shopifySidebarTab === 'anhtrenstore' || shopifySidebarTab === 'ketnoi') && (
              <div className="flex-1 p-8 overflow-y-auto flex items-center justify-center bg-[#f3f4f6]">
                <div className="bg-white p-8 rounded-2xl border border-gray-200 max-w-md w-full text-center space-y-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 font-extrabold flex items-center justify-center mx-auto text-xl capitalize">
                    {shopifySidebarTab.substring(0, 2)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 capitalize">Phân hệ {shopifySidebarTab}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Tính năng <strong className="text-gray-800">{shopifySidebarTab}</strong> đang sẵn sàng kết nối. Bạn có thể chọn <strong className="text-red-600">Tổng quan</strong>, <strong className="text-red-600">Dữ liệu crawl</strong> hoặc <strong className="text-red-600">Trên store</strong> để xem dữ liệu demo.
                  </p>
                  <button onClick={() => setShopifySidebarTab('tongquan')} className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs shadow-xs cursor-pointer">
                    Quay lại Tổng quan
                  </button>
                </div>
              </div>
            )}
          </main>
        </div>
      )}

      {/* 7. TAB CONTENT: QUẢNG CÁO (ADS - EXACT MATCH TO USER'S SCREENSHOT) */}
      {topTab === 'quangcao' && (
        <div className="flex-1 flex overflow-hidden bg-[#f3f4f6]">
          <div className="w-full flex flex-col">
            {/* ADS TOP BAR */}
            <div className="h-10 bg-white border-b border-gray-200 px-6 flex items-center justify-between text-xs shrink-0 shadow-2xs">
              <div className="flex items-center gap-3 text-gray-500 font-medium">
                <span className="text-gray-900 font-bold text-sm">Nail Ads</span>
                <span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200 font-mono text-[10px] font-bold">
                  2 cảnh báo sync
                </span>
                <span className="text-gray-300">/</span>
                <button className="px-2.5 py-1 rounded bg-gray-50 border border-gray-200 text-gray-700 font-medium flex items-center gap-1 cursor-pointer hover:bg-gray-100">
                  <Folder className="w-3 h-3 text-gray-400" /> Bộ sưu tập
                </button>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-gray-50 border border-gray-200 text-gray-800 font-medium cursor-pointer hover:bg-gray-100">
                  <span>Tất cả sản phẩm</span>
                  <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                </div>
                <span className="px-2.5 py-0.5 rounded bg-gray-100 text-gray-700 font-mono text-[11px] border border-gray-200 font-medium">
                  Catalog live 1-18 / 1.374
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-gray-500 text-xs">
                <span>1/77</span>
                <button className="p-1 rounded bg-gray-50 border border-gray-200 text-gray-500 hover:bg-gray-100 cursor-pointer">‹</button>
                <button className="p-1 rounded bg-gray-50 border border-gray-200 text-gray-700 font-bold hover:bg-gray-100 cursor-pointer">›</button>
              </div>
            </div>

            <div className="flex-1 flex overflow-hidden">
              {/* LEFT ACTION SIDEBAR */}
              <aside className="w-48 bg-[#f8f9fa] border-r border-gray-200 p-4 space-y-4 shrink-0 text-xs select-none">
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-wider font-semibold">QUẢNG CÁO</div>
                <button
                  onClick={() => alert('Đang khởi tạo chiến dịch quảng cáo mới...')}
                  className="w-full py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg flex items-center justify-center gap-1.5 shadow-xs cursor-pointer transition-colors"
                >
                  <Plus className="w-4 h-4" /> Tạo quảng cáo
                </button>

                <div className="space-y-1 pt-2">
                  <button className="w-full text-left px-3 py-1.5 rounded-md bg-white border border-gray-200 text-gray-800 font-bold flex items-center gap-2 shadow-2xs cursor-pointer">
                    <History className="w-3.5 h-3.5 text-gray-500" /> Lịch sử
                  </button>
                  <button className="w-full text-left px-3 py-1.5 rounded-md text-gray-600 hover:bg-gray-200/60 flex items-center gap-2 cursor-pointer">
                    <Settings className="w-3.5 h-3.5 text-gray-400" /> Cài đặt Meta
                  </button>
                </div>
              </aside>

              {/* MIDDLE PRODUCT SELECTOR SIDEBAR (Matching 11 exact nail products from screenshot) */}
              <div className="w-64 border-r border-gray-200 p-3 space-y-3 shrink-0 flex flex-col bg-white">
                <div className="flex items-center justify-between text-xs text-gray-800 font-bold border-b border-gray-100 pb-2">
                  <span>Sản phẩm</span>
                  <Search className="w-3.5 h-3.5 text-gray-400 cursor-pointer" />
                </div>

                <div className="flex-1 overflow-y-auto space-y-1.5 pr-1">
                  {[
                    { id: 'ads-1', name: 'Mad Hour', code: 'NAIL - G12010 - 001', badge: '4 ảnh', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&auto=format&fit=crop&q=80', active: true },
                    { id: 'ads-2', name: 'Toxic Spiral', code: 'NAIL - G12007 - 001', badge: '4 ảnh', img: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=300&auto=format&fit=crop&q=80' },
                    { id: 'ads-3', name: 'Haunted Cameo', code: 'NAIL - G12008 - 001', badge: '4 ảnh', img: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=300&auto=format&fit=crop&q=80' },
                    { id: 'ads-4', name: 'Skull Crush', code: 'NAIL - G12009 - 001', badge: '4 ảnh', img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=300&auto=format&fit=crop&q=80' },
                    { id: 'ads-5', name: 'Boo Pop', code: 'NAIL - G12010 - 001', badge: '4 ảnh', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&auto=format&fit=crop&q=80' },
                    { id: 'ads-6', name: 'Steel Cover', code: 'NAIL - G12011 - 001', badge: '7 ảnh', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&auto=format&fit=crop&q=80' },
                    { id: 'ads-7', name: 'Chrome Relic', code: 'NAIL - G12014 - 001', badge: '7 ảnh', img: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=300&auto=format&fit=crop&q=80' },
                    { id: 'ads-8', name: 'Pink Rebel', code: 'NAIL - G12023 - 001', badge: '7 ảnh', img: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=300&auto=format&fit=crop&q=80' },
                    { id: 'ads-9', name: 'Pink Noir Charm P...', code: 'NAIL - G12052 - 001', badge: '7 ảnh', img: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=300&auto=format&fit=crop&q=80' },
                    { id: 'ads-10', name: 'Chrome Blush', code: 'NAIL - G12053 - 001', badge: '7 ảnh', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300&auto=format&fit=crop&q=80' },
                    { id: 'ads-11', name: 'Crimson Riot', code: 'NAIL - G12054 - 001', badge: '7 ảnh', img: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&auto=format&fit=crop&q=80' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      className={`w-full text-left p-2 rounded-xl text-xs flex items-center gap-2.5 transition-colors cursor-pointer ${
                        item.active
                          ? 'bg-pink-50 text-pink-900 font-bold border border-pink-300 shadow-2xs'
                          : 'text-gray-700 hover:bg-gray-50 border border-transparent'
                      }`}
                    >
                      <img src={item.img} alt="p" className="w-9 h-9 rounded-lg object-cover border border-gray-200 shrink-0" />
                      <div className="truncate">
                        <div className="truncate font-bold text-gray-900">{item.name}</div>
                        <div className="text-[10px] text-gray-400 font-mono leading-tight">{item.code} • {item.badge}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* MAIN CANVAS AREA (Matching central preview & bottom 5-card thumbnail strip) */}
              <div className="flex-1 p-6 overflow-y-auto space-y-5 flex flex-col bg-[#f3f4f6]">
                <div className="flex items-center gap-3 border-b border-gray-200 pb-3">
                  <button
                    onClick={() => setCenterSubTab('image')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      centerSubTab === 'image' ? 'bg-red-600 text-white shadow-2xs' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    🔴 1. Hình ảnh
                  </button>
                  <button
                    onClick={() => setCenterSubTab('content')}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                      centerSubTab === 'content' ? 'bg-red-600 text-white shadow-2xs' : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    2. Nội dung Ads
                  </button>

                  <div className="flex items-center gap-2 pl-4 border-l border-gray-200 text-xs">
                    <span className="px-3 py-1 rounded-md bg-gray-200 text-gray-800 font-bold">Ảnh nail</span>
                    <span className="px-3 py-1 rounded-md bg-gray-200 text-gray-800 font-bold">Đang xem</span>
                  </div>
                </div>

                {centerSubTab === 'image' ? (
                  <div className="flex-1 flex flex-col space-y-5">
                    {/* LARGE CENTRAL PREVIEW CANVAS */}
                    <div className="flex-1 p-6 rounded-2xl bg-white border border-gray-200 flex items-center justify-center relative min-h-[380px] shadow-2xs">
                      <img
                        src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&auto=format&fit=crop&q=80"
                        alt="Mad Hour Nail Set"
                        className="max-h-[360px] w-auto object-contain rounded-xl shadow-md border border-gray-100"
                      />
                    </div>

                    {/* BOTTOM THUMBNAIL STRIP (5 CARDS MATCHING SCREENSHOT) */}
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-mono text-gray-500 font-semibold">Danh sách ảnh Ads Creative (5 biến thể)</div>
                      <div className="grid grid-cols-5 gap-3">
                        <div className="aspect-4/3 rounded-xl overflow-hidden border-2 border-red-600 bg-white p-1 shadow-xs cursor-pointer">
                          <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&auto=format&fit=crop&q=80" alt="t1" className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="aspect-4/3 rounded-xl overflow-hidden border border-gray-200 bg-white p-2 shadow-xs cursor-pointer hover:border-gray-300 flex flex-col items-center justify-center text-center">
                          <div className="text-[9px] font-bold text-gray-800 uppercase tracking-tighter">COMPLIMENTARY</div>
                          <div className="text-[11px] font-extrabold text-red-600 uppercase">TOOLKIT</div>
                        </div>
                        <div className="aspect-4/3 rounded-xl overflow-hidden border border-gray-200 bg-white p-2 shadow-xs cursor-pointer hover:border-gray-300 flex flex-col items-center justify-center text-center">
                          <div className="text-[9px] font-bold text-gray-800 uppercase tracking-tighter">HOW TO MEASURE</div>
                          <div className="text-[11px] font-extrabold text-red-600 uppercase">YOUR NAILS</div>
                        </div>
                        <div className="aspect-4/3 rounded-xl overflow-hidden border border-gray-200 bg-white p-2 shadow-xs cursor-pointer hover:border-gray-300 flex flex-col items-center justify-center text-center">
                          <div className="text-[9px] font-bold text-gray-800 uppercase tracking-tighter">HOW TO</div>
                          <div className="text-[11px] font-extrabold text-red-600 uppercase">ORDER</div>
                        </div>
                        <div className="aspect-4/3 rounded-xl overflow-hidden border border-gray-200 bg-white p-1 shadow-xs cursor-pointer hover:border-gray-300">
                          <img src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=300&auto=format&fit=crop&q=80" alt="t5" className="w-full h-full object-cover rounded-lg" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-4 shadow-2xs">
                    <h3 className="font-bold text-sm text-gray-900">Mẫu nội dung quảng cáo Mad Hour</h3>
                    <div className="space-y-3">
                      <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 text-xs text-gray-700 leading-relaxed font-sans">
                        🔥 Mad Hour Handmade Press-On Nails Set | Gothic Chrome Luxury Edition. Free Toolkit Included!
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* RIGHT INSPECTOR PANEL (Matching Creative Catalog & Batch Builder in screenshot) */}
              <aside className="w-80 bg-white border-l border-gray-200 p-4 space-y-5 shrink-0 text-xs shadow-2xs select-none">
                <div className="bg-gray-50 p-3.5 rounded-2xl border border-gray-200 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-xs text-gray-900">Creative Catalog</h4>
                      <div className="text-[10px] text-gray-400 font-mono">3 creative</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <button className="px-2 py-1 rounded-lg bg-white border border-gray-200 text-gray-700 font-bold text-[10px] flex items-center gap-1 cursor-pointer hover:bg-gray-50">
                        <Edit3 className="w-3 h-3 text-gray-500" /> Biên tập
                      </button>
                      <button className="px-2 py-1 rounded-lg bg-white border border-gray-200 text-gray-700 font-bold text-[10px] flex items-center gap-1 cursor-pointer hover:bg-gray-50">
                        <Download className="w-3 h-3 text-gray-500" /> Tải creative
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-square rounded-xl overflow-hidden border border-gray-200 bg-red-950 p-1 flex flex-col items-center justify-center text-center shadow-xs">
                      <div className="text-[7px] text-red-300 font-mono uppercase font-bold">PRESS-ON NAILS</div>
                      <div className="text-[9px] text-white font-extrabold leading-tight">MAD HOUR</div>
                    </div>
                    <div className="aspect-square rounded-xl overflow-hidden border border-gray-200 bg-white shadow-xs">
                      <img src="https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=200&auto=format&fit=crop&q=80" alt="c2" className="w-full h-full object-cover" />
                    </div>
                    <div className="aspect-square rounded-xl overflow-hidden border border-gray-200 bg-red-900 p-1 flex flex-col items-center justify-center text-center shadow-xs">
                      <div className="text-[7px] text-amber-300 font-mono uppercase font-bold">HANDMADE</div>
                      <div className="text-[9px] text-white font-extrabold leading-tight">NAILS</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-sm text-gray-900">Tạo quảng cáo</h4>
                    <p className="text-gray-500 text-[11px]">Tất cả sản phẩm</p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                      <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">SẢN PHẨM</div>
                      <div className="text-xl font-extrabold text-gray-900">0 / 1374</div>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                      <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">CREATIVE</div>
                      <div className="text-xl font-extrabold text-gray-900">0</div>
                    </div>

                    <div className="p-3.5 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                      <div className="text-[10px] font-mono text-gray-400 uppercase font-bold">BATCH HIỆN TẠI</div>
                      <div className="text-xs text-gray-600 font-medium">Chưa tạo batch</div>
                    </div>
                  </div>

                  <button
                    onClick={() => alert('Đang kích hoạt xuất Ads Batch cho 1.374 sản phẩm...')}
                    className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs shadow-md transition-colors cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ArrowRight className="w-4 h-4" /> Xuất Ads Batch
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}

      {/* 8. TAB CONTENT: OTHER TABS */}
      {(topTab === 'nomna' || topTab === 'video') && (
        <div className="flex-1 p-8 overflow-y-auto flex items-center justify-center bg-[#f3f4f6]">
          <div className="bg-white p-8 rounded-2xl border border-gray-200 max-w-md w-full text-center space-y-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 font-extrabold flex items-center justify-center mx-auto text-xl">
              N
            </div>
            <h3 className="text-xl font-bold text-gray-900 capitalize">Phân hệ {topTab}</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Các tính năng của mô-đun <strong className="text-gray-800">{topTab}</strong> đang được đồng bộ dữ liệu từ hệ thống Nomna. Vui lòng chuyển sang tab <strong className="text-red-600">Đăng bài</strong>, <strong className="text-red-600">Shopify</strong> hoặc <strong className="text-red-600">Quảng cáo</strong> để xem demo đầy đủ.
            </p>
            <button
              onClick={() => setTopTab('shopify')}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-xs transition-colors cursor-pointer shadow-xs"
            >
              Quay lại Shopify Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
