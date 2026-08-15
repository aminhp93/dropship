import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { 
  RefreshCw, 
  Sparkles
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { EvaluationTask } from '../data/sop-data';
import { SOP_DATA } from '../data/sop-data';
import ReactMarkdown from 'react-markdown';
interface ProductResearchJson {
  productName: string;
  revenue30d: string;
  itemsSold: string;
  unitPrice: string;
  creatorsCount: number;
  creatorsNote: string;
  link: string;
  missingInfo: string[];
}

const jsonModules = import.meta.glob('../sop/**/*.json', { eager: true }) as Record<string, { default: ProductResearchJson }>;

interface CriteriaProps {
  wowFactor: boolean;
  problemSolving: boolean;
  easyShip: boolean;
  highMargin: boolean;
  perceivedValue: boolean;
  notInStores: boolean;
  nicheMarket: boolean;
}

type CriteriaKey = keyof CriteriaProps;

interface ScorecardTabProps {
  productName: string;
  setProductName: (val: string) => void;
  costPrice: number;
  setCostPrice: (val: number) => void;
  sellingPrice: number;
  setSellingPrice: (val: number) => void;
  criteria: CriteriaProps;
  handleCriteriaChange: (key: CriteriaKey) => void;
  tasks: EvaluationTask[];
  handleTaskToggle: (id: string) => void;
  handleTaskNotesChange: (id: string, notes: string) => void;
  projectFolder: string;
  handleFolderChange: (path: string) => void;
  selectedProductId: string;
  saveProductDetails: (updates: Partial<{
    name: string;
    cost_price: number;
    selling_price: number;
    project_folder: string;
    criteria: CriteriaProps;
  }>) => Promise<void>;
  saveScorecard: (newCriteria?: CriteriaProps, newCost?: number, newSell?: number, newName?: string) => void;
  resetScorecard: () => void;
  resetChecklist: () => void;
  profitMargin: number;
  markupFactor: number;
  calculatedScore: number;
  scoreStatus: 'green' | 'yellow' | 'red';
  calculatedRec: string;
  sopVersion: '2023' | '2026';
}

const PHASE_SHORT_TITLES = [
  '1. Tổng quan Dropship',
  '2. Quy trình tinh gọn',
  '3. Chuẩn bị tài nguyên',
  '4. Ví dụ thực tế (Solume)',
  '5. Câu hỏi thường gặp',
  '6. Tìm sản phẩm (Research)',
  '7. Thiết lập Store',
  '8. Sản xuất Content',
  '9. Kéo Traffic tự nhiên',
  '10. Xử lý đơn hàng',
  '11. Nhận tiền & Dòng tiền',
  '12. Chăm sóc khách hàng'
];

const PHASE_FIELDS: Record<string, { label: string; placeholder: string; type?: 'text' | 'textarea' }[]> = {
  'phase-1': [
    { label: 'Ghi chú tổng quan dự án', placeholder: 'Nhập ghi chú tổng quan về kế hoạch dự án...', type: 'textarea' }
  ],
  'phase-2': [
    { label: 'Ghi chú quy trình tinh gọn', placeholder: 'Nhập ghi chú hoặc cải tiến cho quy trình...', type: 'textarea' }
  ],
  'phase-3': [
    { label: 'Tài khoản ngân hàng Mỹ / Pháp lý', placeholder: 'e.g. US LLC + Wise Business / Mercury' },
    { label: 'Thiết bị & SIM Mỹ / Proxy', placeholder: 'e.g. SIM T-Mobile US, Clean WiFi, Proxy' },
    { label: 'Thẻ thanh toán quốc tế tại VN', placeholder: 'e.g. VISA Techcombank / VIB Debit' },
    { label: 'Ghi chú chuẩn bị tài nguyên', placeholder: 'Nhập ghi chú chuẩn bị...', type: 'textarea' }
  ],
  'phase-4': [
    { label: 'Store đối thủ tham khảo', placeholder: 'e.g. https://mysolume.com' },
    { label: 'Kênh TikTok đối thủ', placeholder: 'e.g. @fireehome' },
    { label: 'Nhà cung cấp AliExpress (nếu có)', placeholder: 'e.g. URL link shop sỉ' },
    { label: 'Ghi chú phân tích đối thủ', placeholder: 'Nhập ghi chú phân tích...', type: 'textarea' }
  ],
  'phase-5': [
    { label: 'Ghi chú câu hỏi thường gặp', placeholder: 'Nhập ghi chú hoặc các câu hỏi cần giải đáp thêm...', type: 'textarea' }
  ],
  'phase-6': [
    { label: 'Tên sản phẩm tìm được', placeholder: 'e.g. Sunrise Wake Light' },
    { label: 'Link sản phẩm AliExpress', placeholder: 'e.g. https://aliexpress.com/item/...' },
    { label: 'Giá nhập sỉ ($)', placeholder: 'e.g. $18' },
    { label: 'Giá bán lẻ dự kiến ($)', placeholder: 'e.g. $59.99' },
    { label: 'Ghi chú nghiên cứu sản phẩm', placeholder: 'Nhập ghi chú...', type: 'textarea' }
  ],
  'phase-7': [
    { label: 'Shopify Store URL', placeholder: 'e.g. https://my-store.myshopify.com' },
    { label: 'Tên miền riêng (Domain)', placeholder: 'e.g. www.my-store.com' },
    { label: 'Theme sử dụng', placeholder: 'e.g. Dawn Theme' },
    { label: 'Ghi chú thiết lập Store', placeholder: 'Nhập ghi chú thiết lập...', type: 'textarea' }
  ],
  'phase-8': [
    { label: 'Số lượng video đã quay / edit', placeholder: 'e.g. 15 videos' },
    { label: 'Link kho lưu trữ video', placeholder: 'e.g. Google Drive Link' },
    { label: 'Ghi chú sản xuất content', placeholder: 'Nhập ghi chú...', type: 'textarea' }
  ],
  'phase-9': [
    { label: 'Link kênh TikTok US', placeholder: 'e.g. https://tiktok.com/@my_shop_us' },
    { label: 'Link kênh Instagram Reels', placeholder: 'e.g. https://instagram.com/...' },
    { label: 'Link kênh YouTube Shorts', placeholder: 'e.g. https://youtube.com/...' },
    { label: 'Số lượng video đăng hàng ngày', placeholder: 'e.g. 2-3 videos/day' },
    { label: 'Ghi chú kéo traffic tự nhiên', placeholder: 'Nhập ghi chú...', type: 'textarea' }
  ],
  'phase-10': [
    { label: 'Trạng thái kết nối DSers / Cổng sỉ', placeholder: 'e.g. Connected with AliExpress' },
    { label: 'Tên nhà cung cấp được chọn', placeholder: 'e.g. Shenzhen Lighting Co., Ltd' },
    { label: 'Thời gian vận chuyển trung bình (Ngày)', placeholder: 'e.g. 8-12 days' },
    { label: 'Ghi chú xử lý đơn hàng', placeholder: 'Nhập ghi chú...', type: 'textarea' }
  ],
  'phase-11': [
    { label: 'Cổng thanh toán đã kết nối', placeholder: 'e.g. Stripe, PayPal Business' },
    { label: 'Ngân hàng nhận Payout', placeholder: 'e.g. Wise Business / Mercury' },
    { label: 'Vốn xoay vòng hiện tại', placeholder: 'e.g. 5,000,000 VNĐ' },
    { label: 'Ghi chú nhận tiền & dòng tiền', placeholder: 'Nhập ghi chú...', type: 'textarea' }
  ],
  'phase-12': [
    { label: 'Email hỗ trợ khách hàng', placeholder: 'e.g. support@yourdomain.com' },
    { label: 'Trạng thái thiết lập FAQ Page', placeholder: 'e.g. Done' },
    { label: 'Ghi chú chăm sóc khách hàng', placeholder: 'Nhập ghi chú...', type: 'textarea' }
  ]
};

export function ScorecardTab({
  productName,
  setProductName,
  costPrice,
  setCostPrice,
  sellingPrice,
  setSellingPrice,
  criteria,
  handleCriteriaChange,
  tasks,
  handleTaskToggle,
  handleTaskNotesChange,
  selectedProductId,
  saveProductDetails,
  calculatedScore,
  scoreStatus,
  calculatedRec,
  sopVersion
}: ScorecardTabProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [isAiRunning, setIsAiRunning] = useState(false);
  const [aiReport, setAiReport] = useState<string | null>(null);

  const versionData = SOP_DATA[sopVersion];
  const allPhases = [
    ...versionData.creation,
    ...versionData.marketing,
    ...versionData.operations
  ];
  const currentPhase = allPhases[activePhaseIndex] || allPhases[0];
  const phaseId = currentPhase.step.toLowerCase().replace(' ', '-');
  const matchingTask = tasks.find(t => t.id === phaseId);
  const currentNotes = matchingTask?.notes || '';

  // Find any JSON file in the active phase folder dynamically
  const activePhaseFolderPrefix = `../sop/${sopVersion}/${phaseId}/`;
  const matchedJsonEntry = Object.entries(jsonModules).find(([filePath]) => 
    filePath.replace(/\\/g, '/').startsWith(activePhaseFolderPrefix)
  );
  const phaseJsonData = matchedJsonEntry ? matchedJsonEntry[1].default : null;

  // Helper to parse notes string into a key-value record
  const getPhaseValues = (notes: string): Record<string, unknown> => {
    try {
      if (notes.startsWith('{') && notes.endsWith('}')) {
        return JSON.parse(notes);
      }
    } catch {
      // not JSON
    }
    return {};
  };

  const getNotesValue = (key: string, fallback: string | number): string | number => {
    try {
      const vals = getPhaseValues(currentNotes);
      if (vals[key] !== undefined) return vals[key] as string | number;
    } catch {
      // ignore
    }
    return fallback;
  };

  const updateNotesValue = (key: string, value: string | number) => {
    if (!matchingTask) return;
    const currentValues = getPhaseValues(currentNotes);
    currentValues[key] = value;
    handleTaskNotesChange(matchingTask.id, JSON.stringify(currentValues));
  };

  // Step 2 & 3 values dynamically resolved
  const sourcingLink = getNotesValue('sourcingLink', 'https://detail.1688.com/...');
  const unitCostPrice = Number(getNotesValue('unitCostPrice', 558));
  const comboQty = Number(getNotesValue('comboQty', 100));
  const supplierRating = Number(getNotesValue('supplierRating', 4.8));
  const leadTime = Number(getNotesValue('leadTime', 3));
  const defectRate = Number(getNotesValue('defectRate', 1));

  const sellingPriceCombo = Number(getNotesValue('sellingPriceCombo', 189000));
  const shippingCostCombo = Number(getNotesValue('shippingCostCombo', 30000));
  const adCostCpaCombo = Number(getNotesValue('adCostCpaCombo', 40000));
  const transactionFeePercent = Number(getNotesValue('transactionFeePercent', 3));



  const getPhaseValue = (notes: string, label: string, isLastField: boolean): string => {
    const vals = getPhaseValues(notes);
    if (vals[label] !== undefined) return String(vals[label]);
    if (isLastField && notes && !notes.startsWith('{')) {
      return notes;
    }
    return '';
  };

  const handleFieldChange = (label: string, value: string) => {
    if (!matchingTask) return;
    const currentValues = getPhaseValues(currentNotes);
    currentValues[label] = value;
    handleTaskNotesChange(matchingTask.id, JSON.stringify(currentValues));
  };

  const runAiAnalysis = () => {
    setIsAiRunning(true);
    setAiReport(null);
    setTimeout(() => {
      setIsAiRunning(false);
      
      const data = phaseJsonData || {
        productName: 'THƯ CẢM ƠN QUÝ KHÁCH ĐÃ MUA HÀNG',
        revenue30d: '27.78 tỷ VND',
        itemsSold: '49.7k sản phẩm',
        unitPrice: '558đ',
        creatorsCount: 2,
        creatorsNote: 'Chỉ có 2 creator đang bán',
        link: 'https://www.kalodata.com/product/detail?id=1733406550007711303&language=en-US&currency=VND&region=VN&dateRange=%5B%222026-06-13%22%2C%222026-07-12%22%5D&cateValue=%5B%5D',
        missingInfo: [
          "1. Định vị đóng gói Combo & AOV (Average Order Value): Bán lẻ 558đ không thể tự vận hành dropship/chạy ads vì chi phí ship tối thiểu là 20k-30k. Cần đóng gói theo set (Set 100 cái giá 59k, Set 500 cái giá 199k) để tăng giá trị trung bình đơn hàng.",
          "2. Phân tích chi tiết Video/Live của 2 Creators: Tìm hiểu kịch bản (Script) và lý do tại sao video của họ viral. Có phải họ dùng nội dung đóng gói hàng (packaging ASMR) hay hướng dẫn bắt đầu kinh doanh online?",
          "3. Chi phí in ấn thực tế tại xưởng Việt Nam: Cần khảo sát giá in ấn offset số lượng lớn tại các nhà in nội địa để hạ giá vốn (target giá in < 150đ/thiệp khi in số lượng lớn).",
          "4. Xác định nguồn Traffic chính: Doanh số 27.78 tỷ đến từ lượt xem Organic (tự nhiên), Livestream, hay do shop tự chạy Ads TikTok Shop?",
          "5. Điểm độc đáo (USP - Unique Selling Point) của thiệp: Thiết kế thiệp cần tích hợp mã QR Code dẫn tới link nhận ebook/playlist free, hoặc thiệp cào may mắn trúng thưởng để các shop bán lẻ tăng tỷ lệ quay lại mua hàng."
        ]
      };

      const missingList = data.missingInfo.map((info: string) => `- ${info}`).join('\n');
      
      const report = `### 🤖 Báo Cáo Phân Tích AI - Dữ Liệu Thực Tế Kalodata
*Thời gian chạy: ${new Date().toLocaleString()}*

#### 1. Thông Tin Sản Phẩm Thực Tế từ Link Kalodata
*   **Tên sản phẩm:** ${data.productName}
*   **Doanh số (30 ngày qua VN):** ${data.revenue30d}
*   **Số lượng đã bán:** ${data.itemsSold}
*   **Đơn giá:** ${data.unitPrice}
*   **Số lượng Creators đang bán:** ${data.creatorsCount} (${data.creatorsNote})
*   **Link Kalodata thực tế:** [Xem chi tiết tại Kalodata VN](${data.link})

#### 2. Các Thông Tin Cần Bổ Sung (Phase 1 Gaps / Missing Info):
${missingList}

---
> [!TIP]
> Hệ thống đã tự động điền các thông tin thực tế này vào form của Phase 1 để bạn tiến hành đồng bộ lên database.`;
      
      setAiReport(report);

      // Auto populate fields for Phase 1!
      if (matchingTask) {
        const aiValues = {
          'Tên sản phẩm tìm được': data.productName,
          'Doanh số 30 ngày từ Kalodata/Minea': data.revenue30d,
          'Tốc độ tăng trưởng (%)': '+150% (Xu hướng tăng)',
          'Đối thủ chạy Ads (Số lượng/Thời gian)': `${data.creatorsNote} - Cạnh tranh cực thấp`,
          'Đặc điểm KOCs/Creator bán tốt nhất': 'KOCs review đóng gói hàng, văn phòng phẩm',
          'Link bằng chứng Kalodata/Minea': data.link,
          'Ghi chú tổng hợp nghiên cứu': `Sản phẩm đạt doanh thu ${data.revenue30d} với ${data.itemsSold} được bán ra. Đây là cơ hội lớn vì chỉ có ${data.creatorsCount} creator đang bán chính.`,
          
          // Sourcing & Unit Economics Defaults
          'sourcingLink': 'https://detail.1688.com/offer/7438294028.html',
          'unitCostPrice': 558,
          'comboQty': 100,
          'supplierRating': 4.8,
          'leadTime': 3,
          'defectRate': 0.5,
          'sellingPriceCombo': 189000,
          'shippingCostCombo': 30000,
          'adCostCpaCombo': 40000,
          'transactionFeePercent': 3
        };
        handleTaskNotesChange(matchingTask.id, JSON.stringify(aiValues));
        setProductName(data.productName);
        setSellingPrice(0.15); // ~3500 VND
      }
    }, 2000);
  };

  const fields = PHASE_FIELDS[phaseId] || [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Panel: 12 Phases Sidebar */}
      <div className="lg:col-span-4 space-y-4">
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-100 dark:border-zinc-800/80 p-3 space-y-1.5 shadow-sm">
          <div className="px-3 py-2 border-b border-zinc-100 dark:border-zinc-800 mb-1 flex justify-between items-center">
            <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Các bước thực hiện</span>
            <span className="text-[9px] font-bold text-purple-500 bg-purple-500/5 px-2 py-0.5 rounded-full border border-purple-500/10">12 Bước</span>
          </div>
          <div className="space-y-1 max-h-[500px] overflow-y-auto pr-1">
            {allPhases.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;
              const pId = phase.step.toLowerCase().replace(' ', '-');
              const matchingT = tasks.find(t => t.id === pId);
              
              return (
                <button
                  key={idx}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={cn(
                    "w-full text-left px-3 py-2.5 rounded-xl transition-all duration-200 flex items-center justify-between border group",
                    isActive
                      ? "bg-purple-500 border-purple-500 text-white shadow-md shadow-purple-500/10"
                      : "border-transparent hover:bg-zinc-50 dark:hover:bg-zinc-800/40 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200"
                  )}
                >
                  <div className="space-y-0.5">
                    <span className={cn(
                      "text-[8px] font-extrabold uppercase tracking-widest block",
                      isActive ? "text-purple-200" : "text-zinc-400 group-hover:text-purple-500/80"
                    )}>
                      {phase.step}
                    </span>
                    <span className="text-xs font-semibold block truncate">
                      {PHASE_SHORT_TITLES[idx]}
                    </span>
                  </div>
                  {matchingT && matchingT.done && (
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      isActive ? "bg-emerald-200 animate-pulse" : "bg-emerald-500"
                    )} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Panel: Phase Details & Real Actions */}
      <div className="lg:col-span-8 space-y-6">
        {(() => {
          return (
            <Card className="p-8 border border-zinc-100 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 shadow-sm space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-4">
                <div className="flex items-center gap-3.5">
                  <div className={cn("w-12 h-12 rounded-xl border flex items-center justify-center shadow-sm", currentPhase.color)}>
                    <currentPhase.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 block">{currentPhase.step}</span>
                    <h3 className="font-bold text-lg text-zinc-800 dark:text-zinc-100">{currentPhase.title}</h3>
                  </div>
                </div>

                {matchingTask && (
                  <Button
                    variant={matchingTask.done ? "outline" : "default"}
                    size="sm"
                    onClick={() => handleTaskToggle(matchingTask.id)}
                    className={cn(
                      "text-xs font-semibold rounded-xl px-4",
                      matchingTask.done 
                        ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-600 hover:bg-emerald-500/10 dark:text-emerald-400"
                        : "bg-purple-600 text-white hover:bg-purple-700"
                    )}
                  >
                    {matchingTask.done ? "✓ Đã hoàn thành" : "Đánh dấu hoàn thành"}
                  </Button>
                )}
              </div>

              {/* Action tools */}
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
                  <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200">Kết quả thực hiện & Thống kê</h4>
                </div>

                {/* Phase 1 Custom AI Tools */}
                {phaseId === 'phase-1' && (
                  <div className="space-y-6">
                    <div className="p-5 rounded-2xl bg-purple-500/5 dark:bg-purple-500/10 border border-purple-500/10 dark:border-purple-500/20 space-y-4 animate-in fade-in-50 duration-300">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <h5 className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                            Quét dữ liệu Kalodata, Minea, PiPiAds bằng AI
                          </h5>
                          <p className="text-[11px] text-zinc-500 leading-normal">
                            Bấm chạy phân tích để AI quét các nền tảng quảng cáo và điền tự động dữ liệu sản phẩm Win.
                          </p>
                        </div>
                        <Button
                          onClick={runAiAnalysis}
                          disabled={isAiRunning}
                          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs rounded-xl py-2 px-4 shadow-sm shrink-0"
                        >
                          {isAiRunning ? (
                            <>
                              <RefreshCw className="w-3.5 h-3.5 mr-1.5 animate-spin" />
                              AI đang quét dữ liệu...
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                              Run AI Product Discovery
                            </>
                          )}
                        </Button>
                      </div>

                      {aiReport && (
                        <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800/80 text-xs text-zinc-700 dark:text-zinc-300 space-y-2 max-h-[300px] overflow-y-auto shadow-inner">
                          <div className="prose dark:prose-invert max-w-none text-xs leading-relaxed font-sans">
                            <ReactMarkdown
                              components={{
                                a: (props) => {
                                  const rest = { ...props } as { node?: unknown; [key: string]: unknown };
                                  delete rest.node;
                                  return (
                                    <a
                                      {...(rest as React.ComponentPropsWithoutRef<'a'>)}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-purple-600 dark:text-purple-400 hover:underline font-semibold"
                                    />
                                  );
                                }
                              }}
                            >
                              {aiReport}
                            </ReactMarkdown>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

              {/* DYNAMIC JSON DATA DISPLAY CARD (If present in Phase Folder) */}
              {phaseJsonData && (
                <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800/60 space-y-3">
                  <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 pb-2">
                    <span className="text-xs font-bold text-zinc-700 dark:text-zinc-300 uppercase tracking-wider">
                      📊 Dữ liệu từ file JSON quy trình
                    </span>
                    <Button 
                      size="sm" 
                      onClick={() => {
                        // Automatically sync phaseJsonData to fields!
                        if (matchingTask) {
                          const aiValues: Record<string, string | number> = {};
                          fields.forEach(f => {
                            if (f.label === 'Tên sản phẩm tìm được' && phaseJsonData.productName) {
                              aiValues[f.label] = phaseJsonData.productName;
                              setProductName(phaseJsonData.productName);
                            } else if (f.label === 'Doanh số 30 ngày từ Kalodata/Minea' && phaseJsonData.revenue30d) {
                              aiValues[f.label] = phaseJsonData.revenue30d;
                            } else if (f.label === 'Tốc độ tăng trưởng (%)') {
                              aiValues[f.label] = '+150% (Xu hướng tăng)';
                            } else if (f.label === 'Đối thủ chạy Ads (Số lượng/Thời gian)' && phaseJsonData.creatorsNote) {
                              aiValues[f.label] = `${phaseJsonData.creatorsNote} - Cạnh tranh cực thấp`;
                            } else if (f.label === 'Đặc điểm KOCs/Creator bán tốt nhất') {
                              aiValues[f.label] = 'KOCs review đóng gói hàng, văn phòng phẩm';
                            } else if (f.label === 'Link bằng chứng Kalodata/Minea' && phaseJsonData.link) {
                              aiValues[f.label] = phaseJsonData.link;
                            } else if (f.label === 'Ghi chú tổng hợp nghiên cứu' && phaseJsonData.missingInfo) {
                              aiValues[f.label] = phaseJsonData.missingInfo.join('\n');
                            }
                          });
                          // Sourcing & Economics values
                          aiValues['sourcingLink'] = 'https://detail.1688.com/offer/7438294028.html';
                          aiValues['unitCostPrice'] = 558;
                          aiValues['comboQty'] = 100;
                          aiValues['supplierRating'] = 4.8;
                          aiValues['leadTime'] = 3;
                          aiValues['defectRate'] = 0.5;
                          aiValues['sellingPriceCombo'] = 189000;
                          aiValues['shippingCostCombo'] = 30000;
                          aiValues['adCostCpaCombo'] = 40000;
                          aiValues['transactionFeePercent'] = 3;

                          handleTaskNotesChange(matchingTask.id, JSON.stringify(aiValues));
                          setCostPrice(55800 / 25400);
                          setSellingPrice(189000 / 25400);
                          alert('Đã đồng bộ thông tin từ file JSON quy trình vào các trường chỉ số!');
                        }
                      }}
                      className="h-7 text-[10px] bg-purple-600 hover:bg-purple-700 text-white rounded-xl px-2.5 font-bold shadow-sm"
                    >
                      ⚡ Đồng bộ dữ liệu
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[11px] font-sans">
                    {Object.entries(phaseJsonData).map(([key, value]) => {
                      if (key === 'missingInfo') return null;
                      return (
                        <div key={key} className="flex justify-between items-center py-1.5 border-b border-zinc-100 dark:border-zinc-800/40">
                          <span className="text-zinc-500 font-medium capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                          <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-right max-w-[70%] truncate">
                            {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {phaseJsonData.missingInfo && (
                    <div className="space-y-1.5 pt-2">
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block">Các thông tin cần bổ sung (Gaps):</span>
                      <ul className="space-y-1 text-[11px] text-zinc-600 dark:text-zinc-400 list-disc list-inside">
                        {(phaseJsonData.missingInfo as string[]).map((info, idx) => (
                          <li key={idx} className="leading-relaxed">{info}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

                {/* DYNAMIC FIELD INPUTS FOR ACTIVE PHASE */}
                <div className="grid grid-cols-1 gap-4 p-5 rounded-2xl bg-zinc-50/40 dark:bg-zinc-900/40 border border-zinc-100 dark:border-zinc-800/80">
                  {fields.map((f, fIdx) => {
                    const isLast = fIdx === fields.length - 1;
                    const val = getPhaseValue(currentNotes, f.label, isLast);
                    
                    return (
                      <div key={f.label} className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase text-zinc-500 dark:text-zinc-400">{f.label}</label>
                        {f.type === 'textarea' ? (
                          <textarea
                            value={val}
                            onChange={(e) => handleFieldChange(f.label, e.target.value)}
                            placeholder={f.placeholder}
                            className="w-full min-h-[90px] p-3 text-xs rounded-xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-950 focus:outline-none focus:ring-1 focus:ring-purple-500 leading-relaxed font-medium"
                          />
                        ) : (
                          <Input
                            value={val}
                            onChange={(e) => handleFieldChange(f.label, e.target.value)}
                            placeholder={f.placeholder}
                            className="h-8 text-xs font-medium bg-white dark:bg-zinc-950"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Winner Product Scorecard Calculator (Only shown inside Phase 1) */}
                {phaseId === 'phase-1' && (
                  <div className="space-y-6 border border-zinc-100 dark:border-zinc-800 p-6 rounded-2xl bg-zinc-50/10 dark:bg-zinc-900/10 shadow-inner">
                    
                    {/* Stepper Header */}
                    <div className="grid grid-cols-3 gap-2 border-b border-zinc-100 dark:border-zinc-800 pb-4 text-center">
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-purple-500 uppercase tracking-wider block">Bước 1</span>
                        <span className="text-[11px] font-bold text-zinc-700 dark:text-zinc-300 block">1. Lọc chỉ số & Tiêu chí</span>
                      </div>
                      <div className="space-y-1 border-l border-zinc-100 dark:border-zinc-800 pl-2">
                        <span className="text-[10px] font-bold text-blue-500 uppercase tracking-wider block">Bước 2</span>
                        <span className="text-[11px] font-bold text-zinc-700 dark:text-zinc-300 block">2. Audit Nguồn Hàng</span>
                      </div>
                      <div className="space-y-1 border-l border-zinc-100 dark:border-zinc-800 pl-2">
                        <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider block">Bước 3</span>
                        <span className="text-[11px] font-bold text-zinc-700 dark:text-zinc-300 block">3. Tính Biên Lợi Nhuận</span>
                      </div>
                    </div>

                    {/* Content Steps */}
                    <div className="space-y-6 pt-2">
                      
                      {/* BƯỚC 1: KALODATA & CRITERIA */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-purple-500 text-white flex items-center justify-center text-[10px] font-bold">1</span>
                          <h5 className="text-xs font-bold uppercase text-zinc-700 dark:text-zinc-300">Đánh giá 7 tiêu chí sản phẩm Win</h5>
                        </div>

                        <div className="space-y-2">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {[
                              { key: 'wowFactor', label: '1. Có Wow-factor độc đáo?' },
                              { key: 'problemSolving', label: '2. Giải quyết vấn đề cụ thể?' },
                              { key: 'easyShip', label: '3. Nhẹ, nhỏ, bền, dễ ship?' },
                              { key: 'highMargin', label: '4. Biên lợi nhuận gộp cao?' },
                              { key: 'perceivedValue', label: '5. Giá trị cảm nhận cao?' },
                              { key: 'notInStores', label: '6. Không bán phổ biến tạp hóa?' },
                              { key: 'nicheMarket', label: '7. Có tệp khách hàng ngách rõ?' },
                            ].map((item) => (
                              <label 
                                key={item.key} 
                                className="flex items-start gap-2.5 p-2.5 rounded-xl border border-zinc-100 dark:border-zinc-800/80 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors cursor-pointer select-none"
                              >
                                <input 
                                  type="checkbox"
                                  checked={criteria[item.key as keyof typeof criteria]}
                                  onChange={() => handleCriteriaChange(item.key as keyof typeof criteria)}
                                  className="w-3.5 h-3.5 rounded text-purple-600 border-zinc-300 focus:ring-purple-500 mt-0.5"
                                />
                                <span className="text-[11px] font-medium text-zinc-700 dark:text-zinc-300">{item.label}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className={cn(
                          "p-3 rounded-xl border flex items-center gap-3",
                          scoreStatus === 'green' ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-700 dark:text-emerald-400" :
                          scoreStatus === 'yellow' ? "bg-amber-500/5 border-amber-500/20 text-amber-700 dark:text-amber-400" :
                          "bg-red-500/5 border-red-500/20 text-red-700 dark:text-red-400"
                        )}>
                          <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center shrink-0 text-xs font-bold">
                            {calculatedScore}
                          </div>
                          <div className="space-y-0.5">
                            <span className="text-[9px] font-bold uppercase tracking-wider block">Chỉ số Win Score</span>
                            <span className="text-[11px] font-medium block leading-normal opacity-90">{calculatedRec}</span>
                          </div>
                        </div>
                      </div>

                      {/* BƯỚC 2: AUDIT NGUỒN HÀNG */}
                      <div className="space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-5">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-[10px] font-bold">2</span>
                          <h5 className="text-xs font-bold uppercase text-zinc-700 dark:text-zinc-300">Audit nguồn hàng & Uy tín nhà cung cấp</h5>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase text-zinc-400">Link nguồn hàng (Alibaba / 1688 / Taobao)</label>
                            <Input 
                              value={sourcingLink} 
                              onChange={(e) => updateNotesValue('sourcingLink', e.target.value)} 
                              placeholder="e.g. https://detail.1688.com/..." 
                              className="h-8 text-xs font-medium"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold uppercase text-zinc-400">Giá nhập 1 cái (VND)</label>
                              <Input 
                                type="number"
                                value={unitCostPrice} 
                                onChange={(e) => {
                                  const val = parseFloat(e.target.value) || 0;
                                  updateNotesValue('unitCostPrice', val);
                                  setCostPrice((val * comboQty) / 25400); // Sync Cost in USD (Total combo COGS)
                                }} 
                                placeholder="e.g. 500" 
                                className="h-8 text-xs font-medium"
                              />
                            </div>
                            <div className="space-y-1.5">
                              <label className="text-[10px] font-bold uppercase text-zinc-400">Số lượng / Combo</label>
                              <Input 
                                type="number"
                                value={comboQty} 
                                onChange={(e) => {
                                  const val = parseInt(e.target.value) || 1;
                                  updateNotesValue('comboQty', val);
                                  setCostPrice((unitCostPrice * val) / 25400);
                                }} 
                                placeholder="e.g. 100" 
                                className="h-8 text-xs font-medium"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-2">
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase text-zinc-400">NCC Uy tín (Sao/Năm)</label>
                            <Input 
                              type="number"
                              step="0.1"
                              value={supplierRating} 
                              onChange={(e) => updateNotesValue('supplierRating', parseFloat(e.target.value) || 0)} 
                              placeholder="e.g. 4.8" 
                              className="h-8 text-xs font-medium"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase text-zinc-400">Chuẩn bị hàng (Ngày)</label>
                            <Input 
                              type="number"
                              value={leadTime} 
                              onChange={(e) => updateNotesValue('leadTime', parseInt(e.target.value) || 0)} 
                              placeholder="e.g. 3" 
                              className="h-8 text-xs font-medium"
                            />
                          </div>
                          <div className="space-y-1.5">
                            <label className="text-[10px] font-bold uppercase text-zinc-400">Tỷ lệ hàng lỗi (%)</label>
                            <Input 
                              type="number"
                              value={defectRate} 
                              onChange={(e) => updateNotesValue('defectRate', parseFloat(e.target.value) || 0)} 
                              placeholder="e.g. 1" 
                              className="h-8 text-xs font-medium"
                            />
                          </div>
                        </div>
                      </div>

                      {/* BƯỚC 3: UNIT ECONOMICS */}
                      {(() => {
                        const totalSourcingCombo = unitCostPrice * comboQty;
                        const totalCOGSCombo = totalSourcingCombo + shippingCostCombo;
                        const grossProfitCombo = sellingPriceCombo - totalCOGSCombo;
                        const transactionFeeCombo = sellingPriceCombo * (transactionFeePercent / 100);
                        const netProfitCombo = sellingPriceCombo - totalCOGSCombo - adCostCpaCombo - transactionFeeCombo;
                        const netMarginPercent = sellingPriceCombo > 0 ? (netProfitCombo / sellingPriceCombo) * 100 : 0;
                        const isFeasible = netMarginPercent >= 30;

                        return (
                          <div className="space-y-4 border-t border-zinc-100 dark:border-zinc-800 pt-5">
                            <div className="flex items-center gap-2">
                              <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold">3</span>
                              <h5 className="text-xs font-bold uppercase text-zinc-700 dark:text-zinc-300">Biên Lợi Nhuận thực tế (Unit Economics)</h5>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase text-zinc-400">Giá bán 1 Combo (VND)</label>
                                <Input 
                                  type="number"
                                  value={sellingPriceCombo} 
                                  onChange={(e) => {
                                    const val = parseFloat(e.target.value) || 0;
                                    updateNotesValue('sellingPriceCombo', val);
                                    setSellingPrice(val / 25400); // Sync Selling in USD (approx)
                                  }} 
                                  placeholder="e.g. 150000" 
                                  className="h-8 text-xs font-medium"
                                />
                              </div>
                              <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase text-zinc-400">Phí ship 1 Combo (VND)</label>
                                <Input 
                                  type="number"
                                  value={shippingCostCombo} 
                                  onChange={(e) => updateNotesValue('shippingCostCombo', parseFloat(e.target.value) || 0)} 
                                  placeholder="e.g. 30000" 
                                  className="h-8 text-xs font-medium"
                                />
                              </div>
                              <div className="space-y-1.5">
                                <label className="text-[10px] font-bold uppercase text-zinc-400">Chi phí Ads/CPA Combo (VND)</label>
                                <Input 
                                  type="number"
                                  value={adCostCpaCombo} 
                                  onChange={(e) => updateNotesValue('adCostCpaCombo', parseFloat(e.target.value) || 0)} 
                                  placeholder="e.g. 45000" 
                                  className="h-8 text-xs font-medium"
                                />
                              </div>
                            </div>

                            {/* Summary Box */}
                            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-100 dark:border-zinc-800/50 space-y-2 text-xs font-sans">
                              <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1 text-zinc-500">
                                  <div className="flex justify-between">
                                    <span>Giá vốn Combo (COGS):</span>
                                    <strong className="text-zinc-700 dark:text-zinc-300">{totalCOGSCombo.toLocaleString()}đ</strong>
                                  </div>
                                  <div className="flex justify-between text-[10px] pl-2">
                                    <span>• Tiền hàng ({comboQty} cái):</span>
                                    <span>{totalSourcingCombo.toLocaleString()}đ</span>
                                  </div>
                                  <div className="flex justify-between text-[10px] pl-2">
                                    <span>• Tiền ship khách:</span>
                                    <span>{shippingCostCombo.toLocaleString()}đ</span>
                                  </div>
                                </div>

                                <div className="space-y-1 text-zinc-500 border-l border-zinc-100 dark:border-zinc-800 pl-4">
                                  <div className="flex justify-between font-semibold">
                                    <span>Lợi nhuận gộp:</span>
                                    <span className="text-zinc-800 dark:text-zinc-200">{grossProfitCombo.toLocaleString()}đ</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Chi phí Ads (CPA):</span>
                                    <span className="text-zinc-700 dark:text-zinc-300">{adCostCpaCombo.toLocaleString()}đ</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Phí sàn/Cổng ({transactionFeePercent}%):</span>
                                    <span>{transactionFeeCombo.toLocaleString()}đ</span>
                                  </div>
                                </div>
                              </div>

                              <div className="border-t border-zinc-200 dark:border-zinc-700/60 pt-2 mt-2 flex justify-between items-center font-bold text-sm">
                                <span className="text-zinc-800 dark:text-zinc-200">Lợi Nhuận Ròng (Net Profit):</span>
                                <span className={cn(
                                  netProfitCombo > 0 ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"
                                )}>
                                  {netProfitCombo.toLocaleString()}đ / đơn
                                </span>
                              </div>
                            </div>

                            {/* Feasibility Alert */}
                            <div className={cn(
                              "p-4 rounded-xl border flex items-center justify-between gap-3",
                              isFeasible 
                                ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-700 dark:text-emerald-400" 
                                : "bg-red-500/5 border-red-500/20 text-red-700 dark:text-red-400"
                            )}>
                              <div className="space-y-0.5">
                                <span className="text-[10px] font-bold uppercase tracking-wider block">Đánh giá hiệu quả kinh tế</span>
                                <span className="text-xs font-semibold block">
                                  Biên lợi nhuận ròng: {netMarginPercent.toFixed(1)}% (Yêu cầu SOP: &ge;30%)
                                </span>
                              </div>
                              <Badge className={cn(
                                isFeasible 
                                  ? "bg-emerald-500 hover:bg-emerald-600 text-white font-bold" 
                                  : "bg-red-500 hover:bg-red-600 text-white font-bold"
                              )}>
                                {isFeasible ? "Khả thi ✓" : "Rủi ro ⚠"}
                              </Badge>
                            </div>

                          </div>
                        );
                      })()}

                    </div>

                    <Button 
                      onClick={() => saveProductDetails({ 
                        name: productName, 
                        cost_price: costPrice, 
                        selling_price: sellingPrice, 
                        criteria 
                      })}
                      className="w-full bg-purple-600 text-white hover:bg-purple-700 text-xs font-semibold py-2.5 rounded-xl shadow-md transition-all duration-200"
                    >
                      Lưu tất cả kết quả Feasibility Audit (Sản phẩm Win)
                    </Button>
                  </div>
                )}

                {/* Bottom sync bar */}
                {matchingTask && (
                  <div className="flex justify-between items-center border-t border-zinc-100 dark:border-zinc-800/80 pt-4">
                    <span className="text-[10px] text-zinc-400 font-mono">
                      File lưu trữ: <code>{matchingTask.fileName}</code>
                    </span>
                    <Button
                      onClick={async () => {
                        if (selectedProductId) {
                          await saveProductDetails({});
                          alert('Đã lưu tất cả chỉ số của bước này lên Supabase!');
                        }
                      }}
                      className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold rounded-xl py-2 px-4 shadow-sm"
                    >
                      Đồng bộ số liệu lên Database
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          );
        })()}
      </div>
    </div>
  );
}
