import { Link } from "@tanstack/react-router";
import { readings, slugify } from "@/features/dropshipping/data/linhthach-reading-data";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  BookOpen,
  ClipboardList,
  Newspaper,
  Plus,
  Save,
  FolderOpen,
  Loader2,
  ChevronDown,
  ChevronUp,
  LayoutGrid,
  List,
  Sparkles,
  Trophy,
  BarChart3,
  ExternalLink,
  Video,
  ShoppingBag,
  Scissors,
  Film,
  Search,
  Clock,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  fetchDropshipProducts,
  fetchDropshipProductDetail,
  createDropshipProduct,
  updateDropshipProduct,
  upsertDropshipPhaseContent,
} from "@/lib/api-client";
import {
  DEFAULT_TASKS,
  SOP_DATA,
  type EvaluationTask,
} from "@/features/dropshipping/data/sop-data";
import { BLOG_POSTS } from "@/features/dropshipping/data/blog-data";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export const Route = createFileRoute("/")({
  component: DropshippingPlaybook,
});

interface DropshipProduct {
  id: string;
  name: string;
  cost_price: number;
  selling_price: number;
  project_folder?: string;
  profit_margin?: number;
}

const PHASE_SHORT_TITLES = [
  "Tổng quan Dropship",
  "Quy trình tinh gọn",
  "Chuẩn bị tài nguyên",
  "Ví dụ thực tế (Solume)",
  "Câu hỏi thường gặp (FAQs)",
  "Tìm sản phẩm (Research)",
  "Thiết lập Store",
  "Sản xuất Content",
  "Kéo Traffic tự nhiên",
  "Xử lý đơn hàng",
  "Nhận tiền & Dòng tiền",
  "Chăm sóc khách hàng",
];

const TOP_5_WINNING_PRODUCTS = [
  {
    rank: 1,
    badge: "🥇 #1 Winner",
    name: "Máy Rửa/Sấy & Khử Trùng Bàn Chải UV-C Cầm Tay",
    englishName: "Portable UV-C Toothbrush Sanitizer & Dryer",
    category: "Health & Care",
    cogs: "$3.50 - $5.50",
    sellPrice: "$29.99 - $39.99",
    margin: "80%",
    score: 9.05,
    painPoint:
      "Vi khuẩn tích tụ trên bàn chải gây bệnh răng miệng & hơi thở hôi",
    angle:
      "Visual Ads cực đẹp với đèn sấy UV xanh/tím + đếm ngược thời gian. Biên lợi nhuận khủng.",
    aliExpressUrl:
      "https://www.aliexpress.com/w/wholesale-uv-c-toothbrush-sanitizer.html",
    tiktokUrl: "https://www.tiktok.com/search?q=uv%20toothbrush%20sanitizer",
    amazonUrl: "https://www.amazon.com/s?k=uv+c+toothbrush+sanitizer",
    metrics: { PS: 9.0, WF: 9.0, PM: 9.5, TA: 9.0, LG: 9.5, CP: 8.0 },
  },
  {
    rank: 2,
    badge: "🥈 #2 Runner-up",
    name: "Đệm/Gối Massage Cổ Xung Điện Ergonomic Hồng Ngoại",
    englishName: "Ergonomic Infrared Heated EMS Neck Massager",
    category: "Health & Wellness",
    cogs: "$8.00 - $12.00",
    sellPrice: "$49.99 - $69.99",
    margin: "78%",
    score: 8.78,
    painPoint:
      "Đau mỏi cổ vai gáy dai dẳng của dân văn phòng & người ngồi máy tính nhiều",
    angle:
      "15 phút mỗi ngày giải thoát cơn đau cổ vai gáy - AOV cao ($50-$70) lợi nhuận gộp tốt.",
    aliExpressUrl:
      "https://www.aliexpress.com/w/wholesale-ems-neck-massager-infrared.html",
    tiktokUrl: "https://www.tiktok.com/search?q=ems%20neck%20massager",
    amazonUrl: "https://www.amazon.com/s?k=ems+neck+massager",
    metrics: { PS: 9.5, WF: 8.5, PM: 9.0, TA: 8.5, LG: 8.5, CP: 7.5 },
  },
  {
    rank: 3,
    badge: "🥉 #3 High-AOV",
    name: "Bộ Hút Bụi & Chải Lông Thú Cưng Khử Ồn",
    englishName: "Quiet Pet Grooming & Hair Vacuum Clipper",
    category: "Pet Care",
    cogs: "$18.00 - $25.00",
    sellPrice: "$89.99 - $129.99",
    margin: "75%",
    score: 8.48,
    painPoint:
      "Lông chó mèo rụng vương vải khắp sofa/giường & chó mèo sợ tiếng ồn máy hút bụi",
    angle:
      "Chải lông & hút sạch 100% không lo lông bay - Tệp Pet Lovers chi tiêu rất mạnh tay.",
    aliExpressUrl:
      "https://www.aliexpress.com/w/wholesale-pet-grooming-vacuum-kit.html",
    tiktokUrl: "https://www.tiktok.com/search?q=pet%20grooming%20vacuum",
    amazonUrl: "https://www.amazon.com/s?k=pet+grooming+vacuum+kit",
    metrics: { PS: 9.0, WF: 8.5, PM: 8.5, TA: 8.0, LG: 7.5, CP: 8.5 },
  },
  {
    rank: 4,
    badge: "🏅 #4 Best Visual",
    name: "Đèn LED Cảm Ứng Chuyển Động Siêu Mỏng Dán Từ Tính",
    englishName: "Ultra-thin Magnetic Rechargeable Motion Sensor LED Bar",
    category: "Smart Home Decor",
    cogs: "$1.80 - $3.20",
    sellPrice: "$34.99 - $49.99 (Combo Set)",
    margin: "75%",
    score: 8.45,
    painPoint:
      "Tủ bếp, tủ quần áo thiếu sáng nhưng ngại khoan đục đi dây điện lằng nhằng",
    angle:
      "Biến tủ quần áo & gian bếp thành căn hộ 5 sao không cần đi 1 sợi dây điện. Bán combo 3-5 cái.",
    aliExpressUrl:
      "https://www.aliexpress.com/w/wholesale-magnetic-motion-sensor-led-light.html",
    tiktokUrl:
      "https://www.tiktok.com/search?q=under%20cabinet%20motion%20sensor%20light",
    amazonUrl: "https://www.amazon.com/s?k=magnetic+motion+sensor+led+bar",
    metrics: { PS: 7.5, WF: 9.5, PM: 8.5, TA: 9.5, LG: 9.0, CP: 7.0 },
  },
  {
    rank: 5,
    badge: "🏅 #5 Best Add-on",
    name: "Bộ Vệ Sinh Màn Hình & Bàn Phím Đa Năng 7-in-1 Compact",
    englishName: "7-in-1 Multifunctional Electronics Cleaning Brush Kit",
    category: "Tech Accessories",
    cogs: "$1.00 - $1.80",
    sellPrice: "$12.99 - $16.99",
    margin: "85%",
    score: 8.08,
    painPoint:
      "Bụi bẩn bám kẽ bàn phím, tai nghe Airpods & vết vân tay màn hình",
    angle:
      "7 công cụ thu gọn như thỏi son - Dễ chốt impulse buy hoặc làm sản phẩm quà tặng kèm.",
    aliExpressUrl:
      "https://www.aliexpress.com/w/wholesale-7-in-1-cleaner-kit.html",
    tiktokUrl: "https://www.tiktok.com/search?q=7%20in%201%20cleaning%20kit",
    amazonUrl: "https://www.amazon.com/s?k=7+in+1+cleaner+kit",
    metrics: { PS: 7.0, WF: 8.5, PM: 9.0, TA: 9.0, LG: 9.5, CP: 6.5 },
  },
];

const CONTENT_SCRIPT_DATA = {
  productName: "Máy Rửa/Sấy & Khử Trùng Bàn Chải UV-C Cầm Tay",
  englishName: "Portable UV-C Toothbrush Sanitizer & Dryer",
  duration: "45 Giây (Viral POV Concept: Microscopic Monster Party)",
  style: "POV Dramatic Comedy + Sci-Fi Laser Apocalypse + Product Solution",
  targetAudience:
    "Người trẻ (20-38 tuổi), Gen Z & Millennial yêu thích nội dung sáng tạo, tò mò",
  shots: [
    {
      time: "0s - 4s (POV Hook)",
      visual:
        'POV góc nhìn vi khuẩn "Bacty": Ống kính hiển vi quay cận lông bàn chải ướt. Vi khuẩn hoạt hình nhút nhít nằm ngửa ngâm mình sung sướng.',
      audio:
        '(Nhạc quẩy EDM sôi động)\nVoice vi khuẩn (Chipmunk hài hước): "Welcome to my 5-star luxury resort! Best wet place in the bathroom!"',
      text: "POV: You’re a bacteria living on a wet toothbrush 🦠",
    },
    {
      time: "4s - 12s (The Agitation)",
      visual:
        "Bồn cầu xả nước ở xa xa -> Vi khuẩn văng tới -> 10,000 vi khuẩn mới nhảy dù xuống lông bàn chải quẩy party sung sức.",
      audio:
        'Voice vi khuẩn: "Thanks to the human flushing with lid open, 10,000 new friends just joined my party!"',
      text: "10,000 New Roommates Just Dropped In! 🤢💩",
    },
    {
      time: "12s - 22s (Plot Twist)",
      visual:
        'Bàn chải bị nhấc lên nhét vào hộp bí ẩn -> Cửa đóng sầm "CẠCH" tối om.',
      audio:
        '(Nhạc quẩy dừng đột ngột - Sound effect: Tiếng phanh xe cháy đường)\nVoice vi khuẩn: "Wait... who turned off the lights? What is this floating box?!"',
      text: "WHAT IS HAPPENING?! 😱",
    },
    {
      time: "22s - 34s (Sci-Fi Execution)",
      visual:
        'Đèn LED UV-C tím bừng sáng như tia Laser vũ trụ + Quạt sấy mini tạo lốc xoáy bốc hơi nước. Vi khuẩn "Bacty" la hét tiêu tùng.',
      audio:
        '(Còi báo động Sci-Fi + Tiếng quạt sấy lốc xoáy)\nVoice vi khuẩn (La hét tiêu tùng): "AAHHH! IT’S PURE UV-C RAYS! IT’S DRYING MY HOME! I’M MELTINGGG!!!"',
      text: "99.9% BACTERIA ERADICATED BY UV-C & AUTO-DRYER! ⚡",
    },
    {
      time: "34s - 40s (Satisfying Proof)",
      visual:
        "Chuyển cảnh 4K phòng tắm 5 sao: Máy tiệt trùng dán từ tính sang trọng. Chủ nhà lấy bàn chải khô ráo thơm tho ra đánh răng tự tin.",
      audio:
        '(Nhạc tươi mát, sang trọng)\nVoice thật (Giọng tự tin): "Stop letting germs throw a party on your toothbrush every night."',
      text: "Keep Your Brush 100% Sterile & Dry Every Day ✨",
    },
    {
      time: "40s - 45s (Call to Action)",
      visual:
        "Gấp gọn máy bỏ túi du lịch + Ưu đãi Buy 1 Get 1 30% OFF nhấp nháy.",
      audio:
        'Voice thật: "Get 30% OFF today + Free Worldwide Shipping. Tap the link in my Bio before the party starts again!"',
      text: "🔥 BUY 1 GET 1 30% OFF\n👉 CLICK LINK IN BIO TO DESTROY BACTERIA!",
    },
  ],
  notes: [
    'Filter Voice Vi Khuẩn: Dùng Filter "Chipmunk / Trickster" trên CapCut/TikTok tạo giọng hài hước, kịch tính.',
    "Hiệu Ứng Sci-Fi: Ghép hiệu ứng tia Laser tím UV-C và tiếng quạt lốc xoáy ASMR bóc băng dính 3M.",
    "Hashtags Đề Xuất: #POV #MicroscopicWorld #BathroomHacks #TikTokMadeMeBuyIt #ToothbrushSanitizer",
  ],
};

function DropshippingPlaybook() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "quytrinh" | "blog" | "blog-linh-thach" | "sanpham"
  >("overview");
  const sopVersion = "2026";
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const [selectedBlogPostId, setSelectedBlogPostId] = useState<string | null>(
    null,
  );
  const [blogViewMode, setBlogViewMode] = useState<"grid" | "list">("grid");
  const [linhThachSearch, setLinhThachSearch] = useState<string>("");

  // Result toggle state for Product Research Phase
  const [showResearchResults, setShowResearchResults] = useState<boolean>(false);

  // Script Modal state for Content Production Phase
  const [showScriptModal, setShowScriptModal] = useState<boolean>(false);

  // Interactive Product States
  const [products, setProducts] = useState<DropshipProduct[]>([]);
  const [selectedProductId, setSelectedProductId] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [expandedTaskIndex, setExpandedTaskIndex] = useState<number | null>(
    null,
  );

  // Inputs for editing product details
  const [productNameInput, setProductNameInput] = useState<string>("");
  const [costPriceInput, setCostPriceInput] = useState<number>(0);
  const [sellingPriceInput, setSellingPriceInput] = useState<number>(0);
  const [projectFolderInput, setProjectFolderInput] = useState<string>("");

  // Checklist state
  const [tasks, setTasks] = useState<EvaluationTask[]>(DEFAULT_TASKS);

  // Load products list from API
  const loadProducts = async () => {
    try {
      const data = await fetchDropshipProducts();
      setProducts(data || []);
      return data || [];
    } catch (e) {
      console.error("Error loading products:", e);
      return [];
    }
  };

  // Load specific product and its phase contents from API
  const loadProductData = async (productId: string) => {
    if (!productId) return;
    setIsLoading(true);
    try {
      const { product, phases } = await fetchDropshipProductDetail(productId);

      setSelectedProductId(productId);
      setProductNameInput(product.name || "");
      setCostPriceInput(Number(product.cost_price) || 0);
      setSellingPriceInput(Number(product.selling_price) || 0);
      setProjectFolderInput(product.project_folder || "");

      // Update tasks state
      const updatedTasks = DEFAULT_TASKS.map((defTask) => {
        const dbPhase = phases?.find(
          (ph: { phase_id: string; content: string; done: boolean }) =>
            ph.phase_id === defTask.id,
        );
        return {
          ...defTask,
          done: dbPhase ? dbPhase.done : false,
          notes: dbPhase ? dbPhase.content : "",
        };
      });
      setTasks(updatedTasks);
    } catch (e) {
      console.error("Error loading product data:", e);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    loadProducts().then((data) => {
      if (data && data.length > 0) {
        setSelectedProductId(data[0].id);
        loadProductData(data[0].id);
      }
    });
  }, []);

  const handleProductSelect = async (id: string) => {
    setSelectedProductId(id);
    if (id) {
      await loadProductData(id);
    } else {
      setProductNameInput("");
      setCostPriceInput(0);
      setSellingPriceInput(0);
      setProjectFolderInput("");
      setTasks(DEFAULT_TASKS);
    }
  };

  const handleUpdateProduct = async () => {
    if (!selectedProductId) return;
    setIsLoading(true);
    try {
      await updateDropshipProduct(selectedProductId, {
        name: productNameInput,
        cost_price: costPriceInput,
        selling_price: sellingPriceInput,
        project_folder: projectFolderInput,
      });
      alert("Đã cập nhật thông tin sản phẩm thành công!");
      await loadProducts();
    } catch (e) {
      console.error("Error updating product:", e);
      alert("Không thể cập nhật sản phẩm!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateNewProduct = async () => {
    const name = window.prompt("Nhập tên sản phẩm mới:");
    if (!name) return;

    setIsLoading(true);
    try {
      const newProduct = await createDropshipProduct({
        name,
        cost_price: 10,
        selling_price: 39.99,
        project_folder: "/Users/minhpham/personal/githubcoffee",
        criteria: {
          wowFactor: false,
          problemSolving: false,
          easyShip: false,
          highMargin: false,
          perceivedValue: false,
          notInStores: false,
          nicheMarket: false,
        },
      });

      alert("Tạo sản phẩm thành công!");
      await loadProducts();
      if (newProduct && newProduct.id) {
        await loadProductData(newProduct.id);
      }
    } catch (e) {
      console.error("Error creating product:", e);
      alert("Không thể tạo sản phẩm!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleTask = async (taskIndex: number) => {
    if (!selectedProductId) return;
    const task = tasks[taskIndex];
    const newDone = !task.done;

    // Update local state
    const updated = [...tasks];
    updated[taskIndex] = { ...task, done: newDone };
    setTasks(updated);

    try {
      await upsertDropshipPhaseContent(selectedProductId, {
        phase_id: task.id,
        content: task.notes || "",
        done: newDone,
      });
    } catch (e) {
      console.error("Error toggling task:", e);
    }
  };

  const handleSaveTaskNotes = async (taskIndex: number, text: string) => {
    if (!selectedProductId) return;
    const task = tasks[taskIndex];

    // Update local state
    const updated = [...tasks];
    updated[taskIndex] = { ...task, notes: text };
    setTasks(updated);

    try {
      await upsertDropshipPhaseContent(selectedProductId, {
        phase_id: task.id,
        content: text,
        done: task.done,
      });
      alert("Đã lưu ghi chú thành công!");
    } catch (e) {
      console.error("Error saving task notes:", e);
      alert("Không thể lưu ghi chú!");
    }
  };

  
  const filteredLinhThachReadings = readings.filter((item) => {
    if (!linhThachSearch.trim()) return true;
    const term = linhThachSearch.toLowerCase();
    return (
      item.title.toLowerCase().includes(term) ||
      item.note.toLowerCase().includes(term) ||
      item.num.includes(term)
    );
  });

  const versionData = SOP_DATA[sopVersion];
  const allPhases = [
    ...versionData.creation,
    ...versionData.marketing,
    ...versionData.operations,
  ];
  const currentPhase = allPhases[activePhaseIndex] || allPhases[0];

  return (
    <ScrollArea className="h-full">
      <div className="p-8 space-y-10 max-w-7xl mx-auto">
        {/* Tab Headers */}
        <div className="flex border-b border-zinc-200 dark:border-zinc-800">
          {[
            { id: "overview", label: "Tổng quan", icon: BookOpen },
            { id: "quytrinh", label: "Quy trình", icon: ClipboardList },
            { id: "blog", label: "Blog", icon: Newspaper },
            { id: "blog-linh-thach", label: "Blog Linh Thạch", icon: Video },
            { id: "sanpham", label: "Sản phẩm", icon: FolderOpen },
          ].map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(
                    tab.id as "overview" | "quytrinh" | "blog" | "blog-linh-thach" | "sanpham",
                  );
                  if (tab.id === "overview") {
                    setActivePhaseIndex(0);
                  } else if (tab.id === "quytrinh") {
                    setActivePhaseIndex(5);
                  } else {
                    setSelectedBlogPostId(null);
                  }
                }}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 border-b-2 text-sm font-medium transition-all",
                  isActive
                    ? "border-purple-500 text-purple-600 dark:text-purple-400"
                    : "border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200",
                )}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic SOP Content */}
        {(activeTab === "overview" || activeTab === "quytrinh") && (
          <div className="space-y-6">
            {/* Top Result Banner Button for Phase 1 */}
            {activeTab === "quytrinh" &&
              (currentPhase.step === "PHASE 1" ||
                currentPhase.title.includes("Tìm Sản Phẩm")) && (
                <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-800 p-4 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-white animate-in fade-in slide-in-from-top-3 duration-300">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30">
                      <Trophy className="w-6 h-6 text-amber-300" />
                    </div>
                    <div>
                      <h3 className="font-black text-base flex items-center gap-2">
                        Báo Cáo Nghiên Cứu Sản Phẩm WIN (Top 5)
                        <Badge className="bg-amber-400 text-purple-950 font-mono text-[10px] font-bold">
                          2026 Output
                        </Badge>
                      </h3>
                      <p className="text-xs text-purple-100/90">
                        Xem bảng xếp hạng Top 5 sản phẩm WIN được đánh giá theo
                        hệ thống 6 chỉ số định lượng
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setShowResearchResults(true)}
                    className="bg-amber-400 hover:bg-amber-300 text-purple-950 font-black text-xs px-5 py-2.5 rounded-xl shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4 text-purple-900 animate-pulse" />
                    🔥 XEM KẾT QUẢ TOP 5 SẢN PHẨM WIN
                  </Button>
                </div>
              )}

            {/* Top Result Banner Button for Phase 3 Content Production */}
            {activeTab === "quytrinh" &&
              (currentPhase.step === "PHASE 3" ||
                currentPhase.title.includes("Sản Xuất Content") ||
                currentPhase.step === "PHASE 8") && (
                <div className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-700 p-4 rounded-2xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-white animate-in fade-in slide-in-from-top-3 duration-300">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/30">
                      <Scissors className="w-6 h-6 text-amber-300" />
                    </div>
                    <div>
                      <h3 className="font-black text-base flex items-center gap-2">
                        Kịch Bản Content TikTok/Reels (Sản Phẩm #1 WIN)
                        <Badge className="bg-amber-400 text-purple-950 font-mono text-[10px] font-bold">
                          45s Script
                        </Badge>
                      </h3>
                      <p className="text-xs text-rose-100/90">
                        Kịch bản phân cảnh chi tiết (Visual, Voiceover,
                        Text-on-screen) tối ưu tỉ lệ chuyển đổi
                      </p>
                    </div>
                  </div>
                  <Button
                    onClick={() => setShowScriptModal(true)}
                    className="bg-amber-400 hover:bg-amber-300 text-purple-950 font-black text-xs px-5 py-2.5 rounded-xl shadow-lg transition-all flex items-center gap-2 shrink-0 cursor-pointer hover:scale-105"
                  >
                    <Sparkles className="w-4 h-4 text-purple-900 animate-pulse" />
                    🎬 XEM KỊCH BẢN TIKTOK (SẢN PHẨM #1)
                  </Button>
                </div>
              )}

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Navigation: Phases Sidebar */}
              <div className="lg:col-span-4 space-y-4">
                {/* Vertical Menu */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800/80 p-3 space-y-1.5 shadow-sm">
                  <div className="px-3 py-2 border-b border-zinc-100 dark:border-zinc-800 mb-1 flex justify-between items-center">
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">
                      {activeTab === "overview"
                        ? "Nội dung tổng quan"
                        : "Các bước quy trình"}
                    </span>
                    <span className="text-[9px] font-bold text-purple-500 bg-purple-500/5 px-2 py-0.5 rounded-full border border-purple-500/10">
                      {activeTab === "overview" ? "5 Phần" : "7 Bước"}
                    </span>
                  </div>
                  <div className="space-y-1 max-h-[500px] overflow-y-auto pr-1">
                    {allPhases
                      .map((phase, idx) => ({ phase, idx }))
                      .filter(({ idx }) => {
                        if (activeTab === "overview") {
                          return idx < 5;
                        } else {
                          return idx >= 5;
                        }
                      })
                      .map(({ phase, idx }) => {
                        const isActive = activePhaseIndex === idx;
                        const phaseId = phase.step
                          .toLowerCase()
                          .replace(" ", "-");
                        const matchingTask = tasks.find(
                          (t) => t.id === phaseId,
                        );

                        return (
                          <button
                            key={idx}
                            onClick={() => setActivePhaseIndex(idx)}
                            className={cn(
                              "w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between border group",
                              isActive
                                ? "bg-purple-500 border-purple-500 text-white shadow-md shadow-purple-500/10"
                                : "border-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200",
                            )}
                          >
                            <div className="space-y-0.5">
                              <span
                                className={cn(
                                  "text-[8px] font-extrabold uppercase tracking-widest block",
                                  isActive
                                    ? "text-purple-200"
                                    : "text-zinc-400 group-hover:text-purple-500/80",
                                )}
                              >
                                {phase.step}
                              </span>
                              <span className="text-xs font-semibold block truncate">
                                {PHASE_SHORT_TITLES[idx]}
                              </span>
                            </div>
                            {matchingTask && matchingTask.done && (
                              <div
                                className={cn(
                                  "w-2 h-2 rounded-full",
                                  isActive
                                    ? "bg-emerald-200 animate-pulse"
                                    : "bg-emerald-500",
                                )}
                              />
                            )}
                          </button>
                        );
                      })}
                  </div>
                </div>
              </div>

              {/* Right Panel: Phase Details */}
              <div className="lg:col-span-8">
                {(() => {
                  const phaseId = currentPhase.step
                    .toLowerCase()
                    .replace(" ", "-");
                  const matchingTask = tasks.find((t) => t.id === phaseId);

                  return (
                    <>
                      <Card className="p-8 border border-zinc-100 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 shadow-sm space-y-6">
                        <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
                          <div className="flex items-center gap-3.5">
                            <div
                              className={cn(
                                "w-12 h-12 rounded-xl border flex items-center justify-center shadow-sm",
                                currentPhase.color,
                              )}
                            >
                              <currentPhase.icon className="w-6 h-6" />
                            </div>
                            <div>
                              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">
                                {currentPhase.step}
                              </span>
                              <h3 className="font-bold text-lg text-zinc-800 dark:text-zinc-100">
                                {currentPhase.title}
                              </h3>
                            </div>
                          </div>
                        </div>

                        <div className="prose dark:prose-invert max-w-none text-sm text-zinc-600 dark:text-zinc-300 pt-2 leading-relaxed">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              a: (props) => {
                                const rest = { ...props } as {
                                  node?: unknown;
                                  [key: string]: unknown;
                                };
                                delete rest.node;
                                return (
                                  <a
                                    {...(rest as React.ComponentPropsWithoutRef<"a">)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
                                  />
                                );
                              },
                            }}
                          >
                            {currentPhase.content}
                          </ReactMarkdown>
                        </div>

                        {/* Actual result from DB notes */}
                        {matchingTask && matchingTask.notes && (
                          <div className="mt-4 p-4 rounded-xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/10 dark:border-purple-500/20 text-xs text-purple-700 dark:text-purple-300 space-y-2">
                            <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px]">
                              <span>📝 Ghi chú kết quả thực tế</span>
                              {matchingTask.done && (
                                <Badge
                                  variant="outline"
                                  className="text-[9px] py-0 px-1 bg-emerald-500/10 text-emerald-500 border-emerald-500/20 font-bold"
                                >
                                  Hoàn thành
                                </Badge>
                              )}
                            </div>
                            <p className="whitespace-pre-line text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans mt-1">
                              {matchingTask.notes}
                            </p>
                          </div>
                        )}
                      </Card>

                      {/* Popup Dialog Modal for Product Research Output */}
                      <Dialog
                        open={showResearchResults}
                        onOpenChange={setShowResearchResults}
                      >
                        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-2xl">
                          <DialogHeader className="border-b border-zinc-100 dark:border-zinc-800 pb-4">
                            <DialogTitle className="flex items-center gap-3 text-lg font-bold text-zinc-900 dark:text-zinc-100">
                              <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shadow-md shrink-0">
                                <Trophy className="w-5 h-5 text-amber-300" />
                              </div>
                              <div>
                                <span className="flex items-center gap-2">
                                  Bảng Kết Quả Nghiên Cứu Sản Phẩm WIN (Top 5)
                                  <Badge className="bg-purple-600 text-white text-[10px] font-mono">
                                    2026 Output
                                  </Badge>
                                </span>
                                <span className="block text-xs font-normal text-zinc-500 dark:text-zinc-400 mt-0.5">
                                  Đã phân tích chi tiết & đánh giá xếp hạng theo
                                  6 chỉ số định lượng
                                </span>
                              </div>
                            </DialogTitle>
                          </DialogHeader>

                          <div className="space-y-6 pt-4">
                            {/* Metric Badges Summary */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                              <div className="bg-zinc-50 dark:bg-zinc-800/60 p-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 text-center">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                                  Sản Phẩm WIN
                                </span>
                                <span className="text-base sm:text-lg font-black text-purple-600 dark:text-purple-400">
                                  5 Winner
                                </span>
                              </div>
                              <div className="bg-zinc-50 dark:bg-zinc-800/60 p-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 text-center">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                                  Điểm Winner Cao Nhất
                                </span>
                                <span className="text-base sm:text-lg font-black text-emerald-500">
                                  9.05 / 10
                                </span>
                              </div>
                              <div className="bg-zinc-50 dark:bg-zinc-800/60 p-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 text-center">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                                  Margin Trung Bình
                                </span>
                                <span className="text-base sm:text-lg font-black text-amber-500">
                                  ~78% - 85%
                                </span>
                              </div>
                              <div className="bg-zinc-50 dark:bg-zinc-800/60 p-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 text-center">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                                  Tiêu Chuẩn Lợi Nhuận
                                </span>
                                <span className="text-base sm:text-lg font-black text-blue-500">
                                  Markup &gt; 3.5x
                                </span>
                              </div>
                            </div>

                            {/* Top 5 Products List */}
                            <div className="space-y-3">
                              <h5 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                                <BarChart3 className="w-4 h-4 text-purple-500" />{" "}
                                Bảng Xếp Hạng & Chi Tiết Top 5 Sản Phẩm WIN
                              </h5>

                              {TOP_5_WINNING_PRODUCTS.map((prod) => (
                                <div
                                  key={prod.rank}
                                  className="p-5 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 hover:border-purple-500/40 transition-all space-y-3 shadow-xs"
                                >
                                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-200/60 dark:border-zinc-800/80 pb-3">
                                    <div className="flex items-center gap-2.5">
                                      <Badge
                                        className={cn(
                                          "text-xs font-bold px-2.5 py-1 rounded-lg",
                                          prod.rank === 1
                                            ? "bg-amber-500 text-white"
                                            : prod.rank === 2
                                              ? "bg-slate-400 text-white"
                                              : prod.rank === 3
                                                ? "bg-amber-700 text-white"
                                                : "bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20",
                                        )}
                                      >
                                        {prod.badge}
                                      </Badge>
                                      <div>
                                        <h6 className="font-extrabold text-sm text-zinc-900 dark:text-zinc-100">
                                          {prod.name}
                                        </h6>
                                        <span className="text-[10px] text-zinc-400 font-mono italic">
                                          {prod.englishName}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-2 shrink-0">
                                      <span className="text-[10px] font-bold text-zinc-400 uppercase">
                                        Điểm Winner:
                                      </span>
                                      <span className="text-xs font-black bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded-md border border-emerald-500/20">
                                        {prod.score} / 10
                                      </span>
                                    </div>
                                  </div>

                                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                                    <div className="bg-white dark:bg-zinc-800/40 p-2 rounded-lg border border-zinc-100 dark:border-zinc-800">
                                      <span className="text-[10px] text-zinc-400 block font-semibold">
                                        Giá vốn (COGS):
                                      </span>
                                      <span className="font-mono font-bold text-zinc-700 dark:text-zinc-300">
                                        {prod.cogs}
                                      </span>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-800/40 p-2 rounded-lg border border-zinc-100 dark:border-zinc-800">
                                      <span className="text-[10px] text-zinc-400 block font-semibold">
                                        Giá bán lẻ (Retail):
                                      </span>
                                      <span className="font-mono font-bold text-purple-600 dark:text-purple-400">
                                        {prod.sellPrice}
                                      </span>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-800/40 p-2 rounded-lg border border-zinc-100 dark:border-zinc-800">
                                      <span className="text-[10px] text-zinc-400 block font-semibold">
                                        Biên lợi nhuận:
                                      </span>
                                      <span className="font-mono font-bold text-emerald-500">
                                        {prod.margin}
                                      </span>
                                    </div>
                                    <div className="bg-white dark:bg-zinc-800/40 p-2 rounded-lg border border-zinc-100 dark:border-zinc-800">
                                      <span className="text-[10px] text-zinc-400 block font-semibold">
                                        Ngành hàng:
                                      </span>
                                      <span className="font-semibold text-zinc-600 dark:text-zinc-400">
                                        {prod.category}
                                      </span>
                                    </div>
                                  </div>

                                  <div className="space-y-1.5 pt-1 text-xs">
                                    <div className="p-2.5 rounded-xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/10 text-amber-800 dark:text-amber-300">
                                      <strong className="font-bold">
                                        Nỗi đau giải quyết:
                                      </strong>{" "}
                                      {prod.painPoint}
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/10 text-purple-800 dark:text-purple-300">
                                      <strong className="font-bold">
                                        Góc Marketing Angle:
                                      </strong>{" "}
                                      {prod.angle}
                                    </div>

                                    {/* Reference Links & Action Buttons */}
                                    <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-200/60 dark:border-zinc-800/80">
                                      {prod.aliExpressUrl && (
                                        <a
                                          href={prod.aliExpressUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 hover:bg-orange-500/20 text-[11px] font-bold transition-colors"
                                        >
                                          <ShoppingBag className="w-3.5 h-3.5" />
                                          Supplier (AliExpress)
                                          <ExternalLink className="w-3 h-3" />
                                        </a>
                                      )}
                                      {prod.tiktokUrl && (
                                        <a
                                          href={prod.tiktokUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-500/10 text-pink-600 dark:text-pink-400 hover:bg-pink-500/20 text-[11px] font-bold transition-colors"
                                        >
                                          <Video className="w-3.5 h-3.5" />
                                          TikTok Creative / Search
                                          <ExternalLink className="w-3 h-3" />
                                        </a>
                                      )}
                                      {prod.amazonUrl && (
                                        <a
                                          href={prod.amazonUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 text-[11px] font-bold transition-colors"
                                        >
                                          <ExternalLink className="w-3.5 h-3.5" />
                                          Tham Khảo Amazon
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>

                      {/* Popup Dialog Modal for Phase 3 Content Script */}
                      <Dialog
                        open={showScriptModal}
                        onOpenChange={setShowScriptModal}
                      >
                        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-6 rounded-2xl shadow-2xl">
                          <DialogHeader className="border-b border-zinc-100 dark:border-zinc-800 pb-4">
                            <DialogTitle className="flex items-center gap-3 text-lg font-bold text-zinc-900 dark:text-zinc-100">
                              <div className="w-10 h-10 rounded-xl bg-pink-600 text-white flex items-center justify-center shadow-md shrink-0">
                                <Film className="w-5 h-5 text-amber-300" />
                              </div>
                              <div>
                                <span className="flex items-center gap-2">
                                  Kịch Bản Short-Video TikTok / Reels (45s)
                                  <Badge className="bg-pink-600 text-white text-[10px] font-mono">
                                    Sản Phẩm #1 WIN
                                  </Badge>
                                </span>
                                <span className="block text-xs font-normal text-zinc-500 dark:text-zinc-400 mt-0.5">
                                  {CONTENT_SCRIPT_DATA.productName} (
                                  {CONTENT_SCRIPT_DATA.englishName})
                                </span>
                              </div>
                            </DialogTitle>
                          </DialogHeader>

                          <div className="space-y-6 pt-4">
                            {/* Target Specs Summary */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                              <div className="bg-zinc-50 dark:bg-zinc-800/60 p-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 text-center">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                                  Thời Lượng
                                </span>
                                <span className="text-sm sm:text-base font-black text-pink-600 dark:text-pink-400">
                                  45 Giây
                                </span>
                              </div>
                              <div className="bg-zinc-50 dark:bg-zinc-800/60 p-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 text-center">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                                  Phong Cách
                                </span>
                                <span className="text-xs font-bold text-emerald-500">
                                  ASMR + Hook Shock
                                </span>
                              </div>
                              <div className="bg-zinc-50 dark:bg-zinc-800/60 p-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 text-center">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                                  Nền Tảng
                                </span>
                                <span className="text-xs font-bold text-purple-500">
                                  TikTok / Reels / Shorts
                                </span>
                              </div>
                              <div className="bg-zinc-50 dark:bg-zinc-800/60 p-3.5 rounded-xl border border-zinc-200/60 dark:border-zinc-700/60 text-center">
                                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">
                                  Mục Tiêu
                                </span>
                                <span className="text-xs font-bold text-amber-500">
                                  Chuyển Đổi Impulse Buy
                                </span>
                              </div>
                            </div>

                            {/* Shot-by-Shot Table */}
                            <div className="space-y-3">
                              <h5 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider flex items-center gap-1.5">
                                <Scissors className="w-4 h-4 text-pink-500" />{" "}
                                Kịch Bản Phân Cảnh Chi Tiết (Shot-by-Shot)
                              </h5>

                              <div className="space-y-3">
                                {CONTENT_SCRIPT_DATA.shots.map((shot, i) => (
                                  <div
                                    key={i}
                                    className="p-4 rounded-2xl border border-zinc-200/80 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-2 text-xs"
                                  >
                                    <div className="flex items-center justify-between border-b border-zinc-200/60 dark:border-zinc-800/80 pb-2">
                                      <Badge className="bg-pink-600/10 text-pink-600 dark:text-pink-400 border border-pink-500/20 font-mono font-bold text-[10px]">
                                        ⏱️ {shot.time}
                                      </Badge>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
                                      <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800">
                                        <span className="text-[10px] font-bold text-zinc-400 block uppercase mb-1">
                                          📹 Visual (Cảnh Quay):
                                        </span>
                                        <p className="text-zinc-700 dark:text-zinc-300 font-sans leading-relaxed">
                                          {shot.visual}
                                        </p>
                                      </div>
                                      <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800">
                                        <span className="text-[10px] font-bold text-zinc-400 block uppercase mb-1">
                                          🎙️ Audio / Voiceover:
                                        </span>
                                        <p className="text-purple-700 dark:text-purple-300 font-sans leading-relaxed whitespace-pre-line">
                                          {shot.audio}
                                        </p>
                                      </div>
                                      <div className="p-2.5 rounded-xl bg-white dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800">
                                        <span className="text-[10px] font-bold text-zinc-400 block uppercase mb-1">
                                          📝 On-screen Text (Chữ Màn Hình):
                                        </span>
                                        <p className="text-amber-800 dark:text-amber-300 font-mono font-bold leading-relaxed whitespace-pre-line">
                                          {shot.text}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Production Notes & Hashtags */}
                            <div className="p-4 rounded-2xl bg-pink-500/5 dark:bg-pink-500/10 border border-pink-500/15 space-y-2 text-xs">
                              <h6 className="font-bold text-pink-700 dark:text-pink-300 uppercase tracking-wider text-[10px]">
                                💡 Production Notes & Hashtags:
                              </h6>
                              <ul className="list-disc list-inside space-y-1 text-zinc-600 dark:text-zinc-400">
                                {CONTENT_SCRIPT_DATA.notes.map((note, idx) => (
                                  <li key={idx}>{note}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Blog Tab Content */}
        {activeTab === "blog" && (
          <div className="space-y-8 max-w-4xl mx-auto">
            {selectedBlogPostId === null ? (
              <div className="space-y-6">
                <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                  <div>
                    <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
                      <Newspaper className="w-5 h-5 text-purple-500" />
                      Dropship Strategy & Insights
                    </h2>
                    <p className="text-sm text-zinc-500 mt-1">
                      Các bài viết phân tích, cẩm nang thực chiến giúp bạn tối
                      ưu hóa dòng tiền, marketing và kỹ năng dropship.
                    </p>
                  </div>
                  {/* Grid vs Row Switcher */}
                  <div className="flex bg-zinc-100 dark:bg-zinc-800 p-1 rounded-lg self-start sm:self-auto shrink-0">
                    <button
                      onClick={() => setBlogViewMode("grid")}
                      className={cn(
                        "p-1.5 rounded-md transition-all cursor-pointer",
                        blogViewMode === "grid"
                          ? "bg-white dark:bg-zinc-700 text-purple-600 dark:text-purple-400 shadow-sm"
                          : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300",
                      )}
                      title="Hiển thị lưới (Grid)"
                    >
                      <LayoutGrid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setBlogViewMode("list")}
                      className={cn(
                        "p-1.5 rounded-md transition-all cursor-pointer",
                        blogViewMode === "list"
                          ? "bg-white dark:bg-zinc-700 text-purple-600 dark:text-purple-400 shadow-sm"
                          : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300",
                      )}
                      title="Hiển thị dòng (Row)"
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div
                  className={cn(
                    blogViewMode === "grid"
                      ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                      : "space-y-4",
                  )}
                >
                  {BLOG_POSTS.map((post) => (
                    <Card
                      key={post.id}
                      onClick={() => setSelectedBlogPostId(post.id)}
                      className={cn(
                        "group cursor-pointer border border-zinc-100 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm hover:shadow-md hover:border-purple-500/30 transition-all duration-300 flex rounded-2xl",
                        blogViewMode === "grid"
                          ? "flex-col h-full"
                          : "flex-col md:flex-row md:h-44 items-stretch",
                      )}
                    >
                      {/* Card Header Gradient cover */}
                      <div
                        className={cn(
                          "bg-gradient-to-br transition-transform duration-500 group-hover:scale-105 shrink-0",
                          post.coverImage,
                          blogViewMode === "grid"
                            ? "h-32 w-full"
                            : "h-32 md:h-auto w-full md:w-48",
                        )}
                      />
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest">
                            <span>{post.category}</span>
                            <span>{post.readTime}</span>
                          </div>
                          <h3 className="font-bold text-base text-zinc-800 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 leading-relaxed font-sans">
                            {post.excerpt}
                          </p>
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[10px] text-zinc-400 font-medium">
                          <span>Tác giả: {post.author}</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              (() => {
                const post = BLOG_POSTS.find(
                  (p) => p.id === selectedBlogPostId,
                );
                if (!post) return null;
                return (
                  <div className="space-y-6">
                    <button
                      onClick={() => setSelectedBlogPostId(null)}
                      className="flex items-center gap-1.5 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline cursor-pointer group"
                    >
                      <span className="transition-transform group-hover:-translate-x-1">
                        ←
                      </span>{" "}
                      Quay lại danh sách bài viết
                    </button>
                    <Card className="p-8 md:p-10 border border-zinc-100 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 shadow-sm rounded-2xl space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xs font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                          <span className="bg-purple-500/10 px-2.5 py-0.5 rounded-full">
                            {post.category}
                          </span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h1 className="text-2xl md:text-3xl font-extrabold text-zinc-800 dark:text-zinc-100 leading-tight">
                          {post.title}
                        </h1>
                        <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-100 dark:border-zinc-800 pb-4">
                          <span>
                            Tác giả:{" "}
                            <strong className="text-zinc-600 dark:text-zinc-300">
                              {post.author}
                            </strong>
                          </span>
                          <span>Ngày viết: {post.date}</span>
                        </div>
                      </div>
                      <div className="prose dark:prose-invert max-w-none text-sm text-zinc-600 dark:text-zinc-300 pt-2 leading-relaxed">
                        <ReactMarkdown
                          remarkPlugins={[remarkGfm]}
                          components={{
                            a: (props) => {
                              const rest = { ...props } as {
                                node?: unknown;
                                [key: string]: unknown;
                              };
                              delete rest.node;
                              return (
                                <a
                                  {...(rest as React.ComponentPropsWithoutRef<"a">)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
                                />
                              );
                            },
                          }}
                        >
                          {post.content}
                        </ReactMarkdown>
                      </div>
                    </Card>
                  </div>
                );
              })()
            )}
          </div>
        )}

        
        {/* Blog Linh Thạch Tab Content */}
        {activeTab === "blog-linh-thach" && (
          <div className="space-y-6 max-w-6xl mx-auto">
            {/* Header */}
            <div className="border-b border-zinc-200 dark:border-zinc-800 pb-4 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
                  <Video className="w-5 h-5 text-purple-500" />
                  Blog Linh Thạch ({readings.length} Bài Học Videos)
                </h2>
                <p className="text-sm text-zinc-500 mt-1">
                  Tổng hợp bài học & cẩm nang thực chiến Dropshipping của Linh Thạch (từ cũ đến mới). Click vào tiêu đề bài viết để mở link chi tiết.
                </p>
              </div>
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Tìm kiếm bài học..."
                  value={linhThachSearch}
                  onChange={(e) => setLinhThachSearch(e.target.value)}
                  className="w-full text-xs pl-9 pr-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-white dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                />
              </div>
            </div>

            {/* Video List Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredLinhThachReadings.map((item) => (
                <Card
                  key={item.num}
                  className="p-5 border border-zinc-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl hover:border-purple-500/40 transition-all space-y-3 flex flex-col justify-between group shadow-xs"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="outline"
                        className="bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20 font-bold text-[10px]"
                      >
                        READING {item.num}
                      </Badge>
                      <span className="text-xs text-zinc-400 flex items-center gap-1 font-mono">
                        <Clock className="w-3 h-3" /> {item.duration}
                      </span>
                    </div>

                    {/* Clickable Title Requirement 2 */}
                    <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 leading-snug">
                      <Link
                        to="/reading/$slug"
                        params={{ slug: slugify(item.title) }}
                        className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors inline-flex items-start gap-1.5 group-hover:text-purple-600 dark:group-hover:text-purple-400 cursor-pointer"
                      >
                        <span>{item.title}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-purple-500 shrink-0 mt-1" />
                      </Link>
                    </h3>

                    <p className="text-xs text-zinc-500 leading-relaxed line-clamp-3">
                      {item.note}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 text-[11px] flex items-center gap-1"
                    >
                      YouTube gốc <ExternalLink className="w-3 h-3" />
                    </a>
                    <Link
                      to="/reading/$slug"
                      params={{ slug: slugify(item.title) }}
                      className="text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1"
                    >
                      Đọc chi tiết →
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* My Product Tab Content */}
        {activeTab === "sanpham" && (
          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Header Action Bar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-zinc-800 dark:text-zinc-100 flex items-center gap-2">
                  <FolderOpen className="w-5 h-5 text-purple-500" />
                  Không Gian Vận Hành Dự Án (Product Hub)
                </h2>
                <p className="text-sm text-zinc-500 mt-1">
                  Quản lý chi phí, thư mục dự án và ghi chú chi tiết từng bước
                  thực thi từ A đến Z.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-1.5 px-3">
                {isLoading ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-purple-500" />
                ) : (
                  <span className="text-[10px] font-bold uppercase text-zinc-400">
                    Sản phẩm:
                  </span>
                )}
                <select
                  value={selectedProductId}
                  onChange={(e) => handleProductSelect(e.target.value)}
                  disabled={isLoading}
                  className="text-xs bg-transparent border-none text-zinc-700 dark:text-zinc-300 font-semibold focus:outline-none cursor-pointer pr-1"
                >
                  <option value="" className="bg-white dark:bg-zinc-900">
                    -- Chọn sản phẩm --
                  </option>
                  {products.map((p) => (
                    <option
                      key={p.id}
                      value={p.id}
                      className="bg-white dark:bg-zinc-900"
                    >
                      {p.name}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleCreateNewProduct}
                  disabled={isLoading}
                  className="h-6 px-2 text-[10px] font-bold text-purple-600 dark:text-purple-400 hover:bg-purple-500/5 rounded flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3 h-3" /> Mới
                </button>
              </div>
            </div>

            {selectedProductId === "" ? (
              <Card className="p-12 text-center border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl space-y-4">
                <div className="w-16 h-16 bg-purple-500/5 border border-purple-500/10 rounded-2xl flex items-center justify-center mx-auto">
                  <FolderOpen className="w-8 h-8 text-purple-500" />
                </div>
                <div className="space-y-2 max-w-sm mx-auto">
                  <h3 className="font-bold text-zinc-800 dark:text-zinc-200 text-lg">
                    Chưa có sản phẩm nào được chọn
                  </h3>
                  <p className="text-xs text-zinc-500 leading-relaxed font-sans">
                    Hãy chọn một sản phẩm từ danh sách phía trên hoặc bấm nút "+
                    Mới" để tạo không gian theo dõi sản phẩm của riêng bạn.
                  </p>
                </div>
              </Card>
            ) : (
              <div className="space-y-8">
                {/* General Info Form & KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* General settings form card */}
                  <Card className="p-6 border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl space-y-4 md:col-span-2">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-400 border-b border-zinc-100 dark:border-zinc-800 pb-2">
                      ⚙️ Cài đặt chung & Định giá
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-zinc-400 uppercase">
                          Tên sản phẩm
                        </label>
                        <input
                          type="text"
                          value={productNameInput}
                          onChange={(e) => setProductNameInput(e.target.value)}
                          className="w-full text-xs font-semibold p-2 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent focus:ring-1 focus:ring-purple-500 outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-zinc-400 uppercase">
                          Thư mục dự án (Local Workspace)
                        </label>
                        <input
                          type="text"
                          value={projectFolderInput}
                          onChange={(e) =>
                            setProjectFolderInput(e.target.value)
                          }
                          className="w-full text-xs font-medium p-2 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent focus:ring-1 focus:ring-purple-500 outline-none font-mono"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-zinc-400 uppercase">
                          Giá nhập (Cost Price - $)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={costPriceInput}
                          onChange={(e) =>
                            setCostPriceInput(Number(e.target.value))
                          }
                          className="w-full text-xs font-semibold p-2 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent focus:ring-1 focus:ring-purple-500 outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-zinc-400 uppercase">
                          Giá bán (Selling Price - $)
                        </label>
                        <input
                          type="number"
                          step="0.01"
                          value={sellingPriceInput}
                          onChange={(e) =>
                            setSellingPriceInput(Number(e.target.value))
                          }
                          className="w-full text-xs font-semibold p-2 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent focus:ring-1 focus:ring-purple-500 outline-none"
                        />
                      </div>
                    </div>
                    <div className="flex justify-end pt-2">
                      <button
                        onClick={handleUpdateProduct}
                        disabled={isLoading}
                        className="flex items-center gap-1.5 text-xs font-bold bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl transition shadow-sm shadow-purple-500/10 cursor-pointer"
                      >
                        <Save className="w-3.5 h-3.5" /> Lưu thay đổi sản phẩm
                      </button>
                    </div>
                  </Card>

                  {/* Financial KPI Summary Cards */}
                  <Card className="p-6 border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl flex flex-col justify-between space-y-4">
                    <h3 className="font-bold text-xs uppercase tracking-wider text-zinc-400 border-b border-zinc-100 dark:border-zinc-800 pb-2">
                      📊 Chỉ số tài chính
                    </h3>
                    <div className="space-y-4 flex-1 flex flex-col justify-center">
                      <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/60 pb-2">
                        <span className="text-xs text-zinc-400">
                          Lợi nhuận gộp (Margin)
                        </span>
                        <span className="text-sm font-bold text-emerald-500">
                          ${(sellingPriceInput - costPriceInput).toFixed(2)}
                        </span>
                      </div>
                      <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800/60 pb-2">
                        <span className="text-xs text-zinc-400">
                          Hệ số định giá (Markup)
                        </span>
                        <span className="text-sm font-bold text-purple-500">
                          {costPriceInput > 0
                            ? (sellingPriceInput / costPriceInput).toFixed(1)
                            : "0"}
                          x
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-zinc-400">
                          Độ sẵn sàng mở Store
                        </span>
                        <span
                          className={cn(
                            "text-xs font-extrabold uppercase px-2 py-0.5 rounded-full border",
                            (costPriceInput > 0
                              ? sellingPriceInput / costPriceInput
                              : 0) >= 3
                              ? "bg-emerald-500/5 text-emerald-500 border-emerald-500/10"
                              : "bg-rose-500/5 text-rose-500 border-rose-500/10",
                          )}
                        >
                          {(costPriceInput > 0
                            ? sellingPriceInput / costPriceInput
                            : 0) >= 3
                            ? "ĐẠT TIÊU CHUẨN"
                            : "MARGIN MỎNG"}
                        </span>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Progress Tracking Widget */}
                <Card className="p-6 border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl space-y-4">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div>
                      <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-200">
                        🚀 Tiến Độ Dự Án Tổng Thể (A đến Z)
                      </h3>
                      <p className="text-xs text-zinc-500 mt-0.5">
                        Tỉ lệ hoàn thành 12 bước trong quy trình kiểm chứng và
                        thiết lập e-commerce.
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-purple-500/5 text-purple-600 dark:text-purple-400 border-purple-500/20 text-xs py-1 px-3"
                    >
                      {tasks.filter((t) => t.done).length} / 12 Hoàn thành
                    </Badge>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${(tasks.filter((t) => t.done).length / 12) * 100}%`,
                      }}
                    />
                  </div>
                </Card>

                {/* Accordion List from A to Z */}
                <div className="space-y-4">
                  <h3 className="font-bold text-sm text-zinc-800 dark:text-zinc-200 flex items-center gap-2">
                    📋 Chi Tiết Tiến Độ Thực Thi (12 Phần)
                  </h3>

                  <div className="space-y-3">
                    {allPhases.map((phase, idx) => {
                      const isExpanded = expandedTaskIndex === idx;
                      const matchingTask = tasks[idx];

                      return (
                        <Card
                          key={idx}
                          className={cn(
                            "border transition-all duration-200 overflow-hidden",
                            isExpanded
                              ? "border-purple-500/30 bg-white dark:bg-zinc-900 shadow-md"
                              : "border-zinc-100 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 hover:border-zinc-200 dark:hover:border-zinc-700/80 shadow-sm",
                          )}
                        >
                          {/* Accordion Header */}
                          <div
                            onClick={() =>
                              setExpandedTaskIndex(isExpanded ? null : idx)
                            }
                            className="p-4 flex items-center justify-between cursor-pointer select-none"
                          >
                            <div className="flex items-center gap-3.5">
                              {/* Checkbox */}
                              <div
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleToggleTask(idx);
                                }}
                                className="cursor-pointer shrink-0"
                              >
                                <div
                                  className={cn(
                                    "w-5 h-5 rounded-md border flex items-center justify-center transition-all",
                                    matchingTask?.done
                                      ? "bg-emerald-500 border-emerald-500 text-white"
                                      : "border-zinc-300 hover:border-purple-500 dark:border-zinc-700",
                                  )}
                                >
                                  {matchingTask?.done && (
                                    <span className="text-[10px] font-bold">
                                      ✓
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant="outline"
                                  className="text-[9px] uppercase tracking-wider bg-zinc-50 dark:bg-zinc-800/40 text-zinc-500 border-zinc-200 dark:border-zinc-700"
                                >
                                  {phase.step}
                                </Badge>
                                <span className="font-bold text-xs text-zinc-700 dark:text-zinc-200">
                                  {PHASE_SHORT_TITLES[idx]}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              {matchingTask?.notes ? (
                                <Badge
                                  variant="outline"
                                  className="text-[9px] bg-purple-500/5 text-purple-500 border-purple-500/10"
                                >
                                  Đã có ghi chú
                                </Badge>
                              ) : (
                                <span className="text-[9px] text-zinc-400">
                                  Trống
                                </span>
                              )}
                              {isExpanded ? (
                                <ChevronUp className="w-4 h-4 text-zinc-400" />
                              ) : (
                                <ChevronDown className="w-4 h-4 text-zinc-400" />
                              )}
                            </div>
                          </div>

                          {/* Accordion Content */}
                          {isExpanded && (
                            <div className="border-t border-zinc-100 dark:border-zinc-800/60 p-5 bg-zinc-50/30 dark:bg-zinc-950/10 space-y-4">
                              {/* Short standard playbook instructions */}
                              <div className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed font-sans space-y-1 border-l-2 border-purple-500/20 pl-3">
                                <strong className="text-zinc-600 dark:text-zinc-300">
                                  Tài liệu chuẩn:
                                </strong>
                                <p className="line-clamp-2">
                                  {phase.title} • Trọng tâm kiểm chứng và các
                                  checklist chuẩn bị.
                                </p>
                              </div>

                              {/* Textarea for actual work content */}
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <label className="text-[10px] font-bold text-zinc-400 uppercase">
                                    📝 Ghi chú kiểm chứng & Dữ liệu thực tế của
                                    bạn
                                  </label>
                                  <span className="text-[9px] text-zinc-400">
                                    Tự động đồng bộ với cơ sở dữ liệu
                                  </span>
                                </div>
                                <textarea
                                  rows={4}
                                  value={matchingTask?.notes || ""}
                                  onChange={(e) => {
                                    const updated = [...tasks];
                                    updated[idx] = {
                                      ...matchingTask,
                                      notes: e.target.value,
                                    };
                                    setTasks(updated);
                                  }}
                                  placeholder="Nhập thông tin nhà cung cấp, tệp khách hàng, ngân sách chi tiết, liên kết cửa hàng, kịch bản video marketing, hoặc ghi chú kiểm chứng..."
                                  className="w-full text-xs p-3 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent focus:ring-1 focus:ring-purple-500 outline-none font-sans leading-relaxed text-zinc-700 dark:text-zinc-300 placeholder-zinc-400"
                                />
                                <div className="flex justify-end">
                                  <button
                                    onClick={() =>
                                      handleSaveTaskNotes(
                                        idx,
                                        matchingTask?.notes || "",
                                      )
                                    }
                                    className="flex items-center gap-1.5 text-xs font-bold bg-zinc-800 dark:bg-zinc-700 hover:bg-zinc-900 text-white px-3 py-1.5 rounded-lg transition"
                                  >
                                    <Save className="w-3 h-3" /> Lưu ghi chú
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
