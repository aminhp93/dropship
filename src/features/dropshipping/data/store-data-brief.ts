// Data thô để dựng store Shopify — điền ở /dropship/progress/2-store (tab "Data Brief").
// Seed lấy từ workspace/doc/2-store/snuglet-data-skeleton.md (31/08/2026).
// Quy ước Data Honesty: mỗi dòng có nhãn confidence — sourced (đã verify thật) /
// estimated (ước tính, chưa có nguồn) / missing (chưa có).

export type Confidence = "sourced" | "estimated" | "missing";

export const CONFIDENCE_META: Record<Confidence, { label: string; className: string }> = {
  sourced: {
    label: "sourced",
    className: "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/30",
  },
  estimated: {
    label: "estimated",
    className: "bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/30",
  },
  missing: {
    label: "chưa có",
    className: "bg-zinc-200/70 dark:bg-zinc-800 text-zinc-500 border-zinc-300 dark:border-zinc-700",
  },
};

export const CONFIDENCE_CYCLE: Confidence[] = ["missing", "estimated", "sourced"];

export type BriefField = {
  id: string;
  label: string;
  /** textarea = ô nhiều dòng; text = 1 dòng */
  type: "text" | "textarea";
  placeholder?: string;
  hint?: string;
  value: string;
  confidence: Confidence;
};

export type BriefColumn = {
  key: string;
  label: string;
  /** cột hẹp (giá, MOQ...) */
  narrow?: boolean;
  wide?: boolean;
};

export type BriefRow = {
  id: string;
  cells: Record<string, string>;
  confidence: Confidence;
};

export type BriefSection =
  | {
      kind: "fields";
      id: string;
      title: string;
      description?: string;
      iconName: string;
      fields: BriefField[];
    }
  | {
      kind: "table";
      id: string;
      title: string;
      description?: string;
      iconName: string;
      columns: BriefColumn[];
      rows: BriefRow[];
    };

export type StoreBrief = {
  storeKey: string;
  storeLabel: string;
  updatedNote: string;
  sections: BriefSection[];
};

export const STORE_DATA_BRIEF_SEED: StoreBrief = {
  storeKey: "snuglet",
  storeLabel: "Snuglet — Sensory Silicone Teethers",
  updatedNote:
    "Seed từ workspace/doc/2-store/snuglet-data-skeleton.md (31/08/2026). Sửa trực tiếp ở đây, tự lưu vào máy (localStorage).",
  sections: [
    {
      kind: "fields",
      id: "brand",
      title: "1. Brand & Identity",
      description: "Thông tin nhận diện — điền xong mới đặt tên store/domain trên Shopify.",
      iconName: "Store",
      fields: [
        {
          id: "store-name",
          label: "Tên store",
          type: "text",
          placeholder: "VD: Snuglet",
          value: "Snuglet",
          confidence: "sourced",
        },
        {
          id: "domain",
          label: "Domain",
          type: "text",
          placeholder: "VD: snuglet.com hoặc xxx.myshopify.com",
          hint: "Chưa mua domain thì để trống — điền sau khi tạo trial Shopify.",
          value: "",
          confidence: "missing",
        },
        {
          id: "tagline",
          label: "Tagline",
          type: "text",
          placeholder: "1 câu ngắn dưới logo",
          value: "Little Chompers, Happy Gums",
          confidence: "sourced",
        },
        {
          id: "logo",
          label: "Logo",
          type: "text",
          placeholder: "File logo / hoặc dùng text logo",
          value: "Chưa có — dùng text logo (theme hỗ trợ sẵn)",
          confidence: "missing",
        },
        {
          id: "colors",
          label: "Màu chủ đạo",
          type: "textarea",
          placeholder: "Primary / accent / nền",
          value:
            "Sage xanh trầm #3F6B5A (primary) + Terracotta ấm #D97757 (accent) trên nền kem ấm #F7F5F0",
          confidence: "sourced",
        },
        {
          id: "theme-status",
          label: "Đã set trong theme chưa",
          type: "textarea",
          placeholder: "File config nào đã set sẵn màu/layout",
          value:
            "Rồi — snuglet-store/config/settings_data.json (preset \"Snuglet\": màu, button pill, card radius 16px, free-ship threshold $25)",
          confidence: "sourced",
        },
      ],
    },
    {
      kind: "table",
      id: "products",
      title: "2. Danh sách sản phẩm (SKU)",
      description:
        "Mỗi dòng = 1 SKU sẽ tạo trên Shopify. Bắt đầu 1 SKU, không dàn trải khi chưa có sample thật.",
      iconName: "Package",
      columns: [
        { key: "name", label: "Tên sản phẩm", wide: true },
        { key: "sku", label: "SKU", narrow: true },
        { key: "price", label: "Giá bán", narrow: true },
        { key: "compareAt", label: "Compare-at", narrow: true },
        { key: "cogs", label: "COGS landed", narrow: true },
        { key: "weight", label: "Trọng lượng", narrow: true },
        { key: "note", label: "Ghi chú", wide: true },
      ],
      rows: [
        {
          id: "p1",
          confidence: "estimated",
          cells: {
            name: "3-Piece Sensory Teether Set",
            sku: "SNG-TEE-3PC",
            price: "$19.99",
            compareAt: "$27.99",
            cogs: "~$9-18/set (3 × $3-6)",
            weight: "25g/cái (spec supplier)",
            note: "Giá bán chưa chốt cuối — chờ báo giá supplier thật. Bán theo bộ, không bán lẻ 1 cái.",
          },
        },
      ],
    },
    {
      kind: "table",
      id: "collections",
      title: "3. Danh sách collection",
      description: "Collection nào chứa SKU nào — dùng để tạo Collections trên Shopify.",
      iconName: "FolderTree",
      columns: [
        { key: "name", label: "Tên collection" },
        { key: "products", label: "Sản phẩm thuộc collection", wide: true },
        { key: "seo", label: "Mô tả ngắn / SEO", wide: true },
      ],
      rows: [
        {
          id: "c1",
          confidence: "sourced",
          cells: {
            name: "Sensory Teethers",
            products: "3-Piece Sensory Teether Set",
            seo: "",
          },
        },
      ],
    },
    {
      kind: "table",
      id: "sourcing",
      title: "4. Nguồn hàng (supplier)",
      description:
        "Giá FOB/MOQ thật lấy từ Made-in-China (31/08). Chưa liên hệ ai — cập nhật cột trạng thái khi đã nhắn/đặt sample.",
      iconName: "Factory",
      columns: [
        { key: "product", label: "Sản phẩm", wide: true },
        { key: "supplier", label: "Supplier", wide: true },
        { key: "fob", label: "Giá FOB", narrow: true },
        { key: "moq", label: "MOQ", narrow: true },
        { key: "link", label: "Link" },
        { key: "status", label: "Trạng thái liên hệ" },
      ],
      rows: [
        {
          id: "s1",
          confidence: "sourced",
          cells: {
            product: "Starfish Sensory Teether (BPA-free)",
            supplier: "Newsun Silicone Products Co., Limited (Guangdong, Diamond)",
            fob: "$0.35–0.38",
            moq: "20 pcs",
            link: "https://newsunsilicone.en.made-in-china.com/",
            status: "Chưa liên hệ — ứng viên #1 để đặt sample",
          },
        },
        {
          id: "s2",
          confidence: "sourced",
          cells: {
            product: "Unicorn Sensory Teether",
            supplier: "Skylark Network Co., Ltd (Diamond)",
            fob: "$0.59–3.37",
            moq: "20 pcs",
            link: "https://www.made-in-china.com/products-search/hot-china-products/Sensory_Teether.html",
            status: "Chưa liên hệ",
          },
        },
        {
          id: "s3",
          confidence: "sourced",
          cells: {
            product: "Manhattan Ball Sensory Teether",
            supplier: "Shenzhen Color Life Lighting Co. (Gold)",
            fob: "$1.60–2.00",
            moq: "1 pc",
            link: "https://www.made-in-china.com/products-search/hot-china-products/Sensory_Teether.html",
            status: "Chưa liên hệ — MOQ 1 pc, dễ lấy sample nhất",
          },
        },
        {
          id: "s4",
          confidence: "estimated",
          cells: {
            product: "Ship US (YunExpress tham chiếu)",
            supplier: "Chưa chốt 3PL",
            fob: "~$2-4/đơn (<100g)",
            moq: "—",
            link: "",
            status: "Ước tính từ ~$14/lb, min billing 50g — CẦN báo giá thật",
          },
        },
      ],
    },
    {
      kind: "table",
      id: "images",
      title: "5. Hình ảnh & video",
      description:
        "Ảnh thật của đúng sản phẩm đang cân nhắc (không phải ảnh AI). Lưu tại snuglet-store/product-photos/.",
      iconName: "Image",
      columns: [
        { key: "file", label: "File / đường dẫn", wide: true },
        { key: "role", label: "Nội dung / vai trò", wide: true },
        { key: "usedIn", label: "Dùng ở đâu" },
      ],
      rows: [
        {
          id: "i1",
          confidence: "sourced",
          cells: {
            file: "snuglet-store/product-photos/01-hero-colors.jpg",
            role: "Line-up 6 màu — ảnh chính",
            usedIn: "Product page ảnh 1 + homepage hero",
          },
        },
        {
          id: "i2",
          confidence: "sourced",
          cells: {
            file: "snuglet-store/product-photos/02-baby-lifestyle-square.jpg",
            role: "Em bé thật đang cắn teether — lifestyle mạnh nhất",
            usedIn: "Homepage banner + ads creative",
          },
        },
        {
          id: "i3",
          confidence: "sourced",
          cells: {
            file: "snuglet-store/product-photos/03-flex-detail.jpg",
            role: "Cận cảnh độ mềm dẻo",
            usedIn: "Product page gallery",
          },
        },
        {
          id: "i4",
          confidence: "sourced",
          cells: {
            file: "snuglet-store/product-photos/04-water-splash.jpg",
            role: "Rửa nước — minh hoạ dễ vệ sinh",
            usedIn: "Product page gallery",
          },
        },
        {
          id: "i5",
          confidence: "sourced",
          cells: {
            file: "snuglet-store/product-photos/05-texture-macro.jpg",
            role: "Cận cảnh bề mặt đa kết cấu",
            usedIn: "Product page gallery",
          },
        },
        {
          id: "i6",
          confidence: "sourced",
          cells: {
            file: "snuglet-store/product-photos/06-spec-sheet.jpg",
            role: "Bảng spec gốc supplier: 77mm, 25g, 100% food grade silicone, 3-18 tháng",
            usedIn: "Product description (dữ liệu spec)",
          },
        },
        {
          id: "i7",
          confidence: "sourced",
          cells: {
            file: "videos/snuglet-teether-preview/renders/video.mp4",
            role: "Video preview 15s (6 cảnh, 1080×1920) — chưa có nhạc nền",
            usedIn: "TikTok organic / product page video",
          },
        },
      ],
    },
    {
      kind: "fields",
      id: "promo",
      title: "6. Text promo / copy trang chủ",
      description: "Viết sẵn ở đây rồi mới paste lên Shopify — tránh viết ứng biến trong admin.",
      iconName: "Megaphone",
      fields: [
        {
          id: "headline",
          label: "Headline homepage",
          type: "text",
          placeholder: "Câu lớn nhất trên hero",
          value: "",
          confidence: "missing",
        },
        {
          id: "subheadline",
          label: "Sub-headline",
          type: "textarea",
          placeholder: "1-2 câu bổ trợ dưới headline",
          value: "",
          confidence: "missing",
        },
        {
          id: "value-props",
          label: "3 value props (mỗi dòng 1 ý)",
          type: "textarea",
          placeholder: "VD: Food-grade silicone, không BPA...",
          value:
            "Silicone thực phẩm (food-grade), không BPA/phthalate\nThiết kế đa kết cấu — tiếp cận đúng vùng nướu đau\nAn toàn tủ lạnh & máy rửa chén",
          confidence: "sourced",
        },
        {
          id: "cta",
          label: "CTA chính",
          type: "text",
          placeholder: "VD: Shop the 3-Piece Set",
          value: "",
          confidence: "missing",
        },
        {
          id: "product-copy",
          label: "Product page copy",
          type: "textarea",
          placeholder: "Mô tả sản phẩm chi tiết",
          hint: "Chờ ảnh/kích thước/trọng lượng thật từ sample rồi mới viết bản cuối.",
          value: "",
          confidence: "missing",
        },
      ],
    },
    {
      kind: "fields",
      id: "policies",
      title: "7. Chính sách & ưu đãi",
      description: "Chỉ ghi cam kết vận hành thật — không bịa lịch sử bán hàng/review.",
      iconName: "ShieldCheck",
      fields: [
        {
          id: "free-ship",
          label: "Free shipping threshold",
          type: "text",
          placeholder: "VD: $25+",
          value: "$25+ (đã set sẵn trong theme)",
          confidence: "sourced",
        },
        {
          id: "returns",
          label: "Chính sách đổi trả",
          type: "text",
          placeholder: "VD: đổi trả 30 ngày",
          value: "Đổi trả 30 ngày",
          confidence: "sourced",
        },
        {
          id: "support",
          label: "Cam kết hỗ trợ",
          type: "text",
          placeholder: "VD: trả lời trong 24h",
          value: "Trả lời trong 24h",
          confidence: "sourced",
        },
        {
          id: "ship-time",
          label: "Thời gian ship thực tế",
          type: "text",
          placeholder: "VD: 8-15 ngày làm việc",
          hint: "Ước tính từ YunExpress — xác nhận lại khi chốt supplier.",
          value: "8-15 ngày làm việc",
          confidence: "estimated",
        },
        {
          id: "launch-discount",
          label: "Discount code ra mắt",
          type: "text",
          placeholder: "VD: WELCOME10 — giảm 10%",
          value: "",
          confidence: "missing",
        },
        {
          id: "bundle",
          label: "Bundle / upsell offer",
          type: "textarea",
          placeholder: "VD: mua 2 set giảm 15%",
          hint: "1 set $19.99 chưa đạt ngưỡng free ship $25 — cân nhắc bundle để đẩy AOV.",
          value: "",
          confidence: "missing",
        },
        {
          id: "reviews",
          label: "Review / social proof",
          type: "textarea",
          placeholder: "Có review thật chưa?",
          value:
            "CHƯA có — đã bỏ hẳn section Testimonials khỏi trang chủ thay vì bịa review. Bật lại khi có review thật.",
          confidence: "sourced",
        },
      ],
    },
    {
      kind: "table",
      id: "blockers",
      title: "8. Việc chặn trước khi go-live",
      description: "Chưa xong hết mục này thì chưa nên bật store bán thật.",
      iconName: "AlertTriangle",
      columns: [
        { key: "task", label: "Việc cần làm", wide: true },
        { key: "owner", label: "Ai làm" },
        { key: "status", label: "Trạng thái" },
      ],
      rows: [
        {
          id: "b1",
          confidence: "missing",
          cells: {
            task: "Đặt sample 2-3 mẫu từ Newsun Silicone + 1 supplier khác",
            owner: "User",
            status: "Chưa làm — chặn ảnh/video thật",
          },
        },
        {
          id: "b2",
          confidence: "missing",
          cells: {
            task: "Xin báo giá supplier thật (thay COGS estimated)",
            owner: "User",
            status: "Chưa làm — chặn giá bán cuối",
          },
        },
        {
          id: "b3",
          confidence: "missing",
          cells: {
            task: "Tạo Shopify trial mới + báo domain",
            owner: "User",
            status: "Chưa làm",
          },
        },
        {
          id: "b4",
          confidence: "missing",
          cells: {
            task: "Deploy snuglet-store/ theme + set shipping zones thật",
            owner: "Claude (khi có store)",
            status: "Chờ store tồn tại",
          },
        },
        {
          id: "b5",
          confidence: "missing",
          cells: {
            task: "Viết product page copy cho 3-Piece Sensory Teether Set",
            owner: "Claude",
            status: "Chờ spec/ảnh thật từ sample",
          },
        },
      ],
    },
  ],
};
