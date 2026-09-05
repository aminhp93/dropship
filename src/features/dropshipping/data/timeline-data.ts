/**
 * Dữ liệu cho trang /dropship/progress/0-timeline.
 *
 * Nguồn gốc: workspace/doc/0-general/timeline-6-thang.md
 * Ngày trong DAILY_LOG_SEED lấy từ git log của repo này + ngày sửa file thật
 * trong workspace/ — không phải ngày ước lượng.
 */

/* ─────────────────────────  MỤC TIÊU  ───────────────────────── */

export const GOAL = {
  /**
   * Đích cuối. Trước đây ghi "$500 – $1.000 lợi nhuận / tháng" — sửa lại
   * 29/08 theo đúng nội dung thật của mục tiêu: không lỗ, không phải một
   * mốc lợi nhuận cụ thể.
   */
  target: "Không lỗ",
  /**
   * Deadline thật = mốc cuối roadmap (xem ROADMAP bên dưới, dừng ở tháng 5-6
   * = 1/2027). Trước đây ghi "trong 12 tháng" trong khi roadmap + reviewDate
   * đều chỉ đi tới 1/2027 (6 tháng) — 2 con số không khớp nhau. Sửa lại cho
   * đúng 1 deadline duy nhất, không lố quá 1/2027.
   */
  targetDeadline: "trong 6 tháng",
  capital: 3000,
  startDate: "2026-08-01",
  /** Deadline cuối — trùng với điểm kết thúc ROADMAP. */
  reviewDate: "2027-01-31",
};

export type Gate = {
  id: string;
  name: string;
  budget: number;
  purpose: string;
  exitCondition: string;
  status: "open" | "locked" | "passed";
};

export const GATES: Gate[] = [
  {
    id: "A",
    name: "Gate A — Research",
    budget: 200,
    purpose: "Chốt 1 sản phẩm + đặt mẫu thật về tay.",
    exitCondition: "Có mẫu thật trong tay để quay video.",
    status: "open",
  },
  {
    id: "B",
    name: "Gate B — Validate (organic)",
    budget: 500,
    purpose:
      "Chứng minh có người muốn mua, bằng organic TikTok trước khi trả tiền ads.",
    exitCondition: "Có bình luận hỏi mua / đơn hàng đầu tiên từ organic.",
    status: "locked",
  },
  {
    id: "C",
    name: "Gate C — Scale (paid)",
    budget: 2000,
    purpose: "Đổ ads vào hook đã được organic xác nhận.",
    exitCondition: "Contribution margin dương và ổn định.",
    status: "locked",
  },
];

/** Không đụng tới, kể cả khi Gate C cần thêm. */
export const EMERGENCY_RESERVE = 300;

export const STOP_RULES = [
  "Cắt lỗ 1 sản phẩm nếu sau 2 tuần organic không có bình luận hỏi mua nào.",
  "Không chi quá $250 test paid cho 1 sản phẩm nếu chưa có tín hiệu organic trước.",
  "Tổng lỗ tích luỹ chạm $800 mà chưa hoà vốn → dừng hẳn, đánh giá lại mô hình.",
];

/* ─────────────────────────  ROADMAP  ───────────────────────── */

export type RoadmapMonth = {
  index: number;
  label: string;
  period: string;
  goal: string;
  gate?: string;
  status: "done" | "current" | "upcoming";
};

export const ROADMAP: RoadmapMonth[] = [
  {
    index: 1,
    label: "Tháng 1",
    period: "8/2026",
    goal: "Chốt 1 sản phẩm từ pool đã research, đặt mẫu thật.",
    gate: "Mở Gate A",
    status: "current",
  },
  {
    index: 2,
    label: "Tháng 2",
    period: "9/2026",
    goal: "Dựng store thật, đăng organic 2–3 video/ngày. Chưa chạy ads.",
    status: "upcoming",
  },
  {
    index: 3,
    label: "Tháng 3",
    period: "10/2026",
    goal: "Có tín hiệu organic → test paid nhẹ để xác nhận hook.",
    gate: "Mở Gate B",
    status: "upcoming",
  },
  {
    index: 4,
    label: "Tháng 4",
    period: "11/2026",
    goal: "Gate B pass → scale bằng ads. Không pass → quay lại ứng viên #2.",
    gate: "Mở Gate C",
    status: "upcoming",
  },
  {
    index: 5,
    label: "Tháng 5–6",
    period: "12/2026 – 1/2027",
    goal: "Tối ưu contribution margin, viết SOP, chuẩn bị nền 6 tháng tiếp.",
    status: "upcoming",
  },
];

/* ─────────────────────────  DAILY LOG  ───────────────────────── */

/** Loại công việc — để thấy thời gian thực sự đổ vào đâu. */
export const LOG_CATEGORIES = {
  hoc: { label: "Học lý thuyết", color: "blue" },
  research: { label: "Nghiên cứu thị trường", color: "purple" },
  tooling: { label: "Xây tool / dashboard", color: "zinc" },
  store: { label: "Dựng store", color: "amber" },
  content: { label: "Video / content", color: "pink" },
  sales: { label: "Hành động bán hàng", color: "emerald" },
} as const;

export type LogCategory = keyof typeof LOG_CATEGORIES;

/**
 * Mức độ đóng góp vào mục tiêu — đây là cột quan trọng nhất khi review:
 * làm nhiều không bằng làm đúng thứ đưa tới đơn hàng đầu tiên.
 */
export const LOG_ALIGNMENTS = {
  direct: {
    label: "Trực tiếp",
    hint: "Đưa thẳng tới đơn hàng đầu tiên (đặt mẫu, dựng store thật, đăng video, chốt quyết định).",
    color: "emerald",
  },
  support: {
    label: "Hỗ trợ",
    hint: "Cần thiết nhưng gián tiếp (học, research có kết luận dùng được).",
    color: "blue",
  },
  detour: {
    label: "Lệch hướng",
    hint: "Không đưa tới đơn hàng ở giai đoạn này (xây tool, research lặp lại, tối ưu sớm).",
    color: "red",
  },
} as const;

export type LogAlignment = keyof typeof LOG_ALIGNMENTS;

export type LogSource = "file" | "git";

export type DailyLogEntry = {
  id: string;
  /** YYYY-MM-DD. Là khoá duy nhất — không cho tồn tại 2 mục cùng ngày. */
  date: string;
  /** Tóm tắt 1 dòng, hiện khi hover ở danh sách. */
  summary: string;
  category: LogCategory;
  alignment: LogAlignment;
  /** 'file' = có file .md thật trong ~/personal/daily-log/, 'git' = dựng lại từ git log. */
  source: LogSource;
  /** Nội dung markdown đầy đủ. Với source='file' thì lấy từ REAL_LOG_CONTENT. */
  content?: string;
};

/**
 * Lịch sử từ 1/8/2026 → nay.
 * - source 'file': chép nguyên văn từ ~/personal/daily-log/YYYY-MM-DD.md
 * - source 'git' : dựng lại từ git log repo này (những ngày chưa có file .md)
 */
export const DAILY_LOG_SEED: DailyLogEntry[] = [
  {
    id: "seed-2026-08-05",
    date: "2026-08-05",
    summary: "Học buổi 1 Ngô Thành Ecom — Giới thiệu dropship vs POD",
    category: "hoc",
    alignment: "support",
    source: "git",
  },
  {
    id: "seed-2026-08-09",
    date: "2026-08-09",
    summary: "Học buổi 2 — Sản phẩm",
    category: "hoc",
    alignment: "support",
    source: "git",
  },
  {
    id: "seed-2026-08-10",
    date: "2026-08-10",
    summary: "Làm 2 báo cáo research ngách: Car Accessories + Sustainability",
    category: "research",
    alignment: "support",
    source: "git",
  },
  {
    id: "seed-2026-08-12",
    date: "2026-08-12",
    summary: "Học buổi 3 — Store",
    category: "hoc",
    alignment: "support",
    source: "git",
  },
  {
    id: "seed-2026-08-15",
    date: "2026-08-15",
    summary: "Khởi tạo dashboard dropship-web + cấu trúc SOP/playbook 2026",
    category: "tooling",
    alignment: "detour",
    source: "git",
  },
  {
    id: "seed-2026-08-16",
    date: "2026-08-16",
    summary:
      "Xây PPSPY Dashboard, Market Research Tool, restructure routes (21 commit/ngày)",
    category: "tooling",
    alignment: "detour",
    source: "git",
  },
  {
    id: "seed-2026-08-17",
    date: "2026-08-17",
    summary: "Dựng workflow + agents cho video creative",
    category: "tooling",
    alignment: "detour",
    source: "git",
  },
  {
    id: "seed-2026-08-18",
    date: "2026-08-18",
    summary: "Refactor routes, viết agent skills cho ecom workflow",
    category: "tooling",
    alignment: "detour",
    source: "git",
  },
  {
    id: "seed-2026-08-19",
    date: "2026-08-19",
    summary:
      "Research Essential Oil Diffusers; nhận ra quy trình market research chưa rõ; đẩy mạnh video AI",
    category: "research",
    alignment: "support",
    source: "file",
  },
  {
    id: "seed-2026-08-20",
    date: "2026-08-20",
    summary:
      "Chốt tiêu chí chọn sản phẩm (không local brand, không trend); quyết định clone 1 store làm mẫu",
    category: "research",
    alignment: "direct",
    source: "file",
  },
  {
    id: "seed-2026-08-21",
    date: "2026-08-21",
    summary: "Viết task clone store + task tạo video",
    category: "tooling",
    alignment: "detour",
    source: "git",
  },
  {
    id: "seed-2026-08-23",
    date: "2026-08-23",
    summary:
      "Gom file tiến độ; fairy lights là candidate ưu tiên #1 tại thời điểm đó (đã rút lại sau)",
    category: "research",
    alignment: "support",
    source: "git",
  },
  {
    id: "seed-2026-08-24",
    date: "2026-08-24",
    summary:
      "Quy trình clone store + checklist review; khởi tạo Daily Log Agent & CLI",
    category: "store",
    alignment: "support",
    source: "file",
  },
  {
    id: "seed-2026-08-25",
    date: "2026-08-25",
    summary:
      "Store issue: ảnh bản quyền, product/collection phải làm tay; review quy trình Ngô Thành Ecom",
    category: "store",
    alignment: "support",
    source: "file",
  },
  {
    id: "seed-2026-08-26",
    date: "2026-08-26",
    summary:
      "Gen ảnh từ store đối thủ (ChatGPT cho kết quả tốt nhất, móng tay khó nhất)",
    category: "content",
    alignment: "support",
    source: "file",
  },
  {
    id: "seed-2026-08-27",
    date: "2026-08-27",
    summary:
      "Rút lại candidate fairy lights; mở hướng research mới sang Nails (so sánh 3 store)",
    category: "research",
    alignment: "direct",
    source: "file",
  },
  {
    id: "seed-2026-08-28",
    date: "2026-08-28",
    summary:
      "So sánh 3 store Nails, phát hiện report gốc có số liệu bịa (83 Ads, theme Shrine PRO) — không dùng",
    category: "research",
    alignment: "direct",
    source: "file",
  },
  {
    id: "seed-2026-08-29",
    date: "2026-08-29",
    summary:
      "Mở rộng khung benchmark store + bắt đầu tự động hoá quét tin tức ngành",
    category: "research",
    alignment: "support",
    source: "file",
  },
  {
    id: "seed-2026-08-31",
    date: "2026-08-31",
    summary:
      "Đóng gap Nails (Trends/Meta/Amazon), chốt Teething Toys, tìm supplier Newsun, dựng video 15s và store Snuglet",
    category: "store",
    alignment: "direct",
    source: "file",
  },
];
