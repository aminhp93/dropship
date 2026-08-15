import React from 'react';
import { 
  Target, 
  ShoppingBag, 
  Scissors, 
  Users, 
  Mail, 
  TrendingUp, 
  Calculator, 
  Globe, 
  Ship, 
  Sparkles, 
  Percent,
  BookOpen,
  ClipboardList
} from 'lucide-react';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Target, 
  ShoppingBag, 
  Scissors, 
  Users, 
  Mail, 
  TrendingUp, 
  Calculator, 
  Globe, 
  Ship, 
  Sparkles, 
  Percent,
  BookOpen,
  ClipboardList
};

export interface EvaluationTask {
  id: string;
  category: 'creation' | 'marketing' | 'operations';
  text: string;
  done: boolean;
  fileName: string;
  notes?: string;
}

export const DEFAULT_TASKS: EvaluationTask[] = [
  // Creation (Phases 1-4)
  { id: 'phase-1', category: 'creation', text: 'PHẦN 1: Tổng quan về Dropshipping', done: false, fileName: '01_tong_quan.md', notes: '' },
  { id: 'phase-2', category: 'creation', text: 'PHẦN 2: Quy trình Dropship Organic Tinh Gọn', done: false, fileName: '02_quy_trinh.md', notes: '' },
  { id: 'phase-3', category: 'creation', text: 'PHẦN 3: Chuẩn bị tài nguyên thực tế', done: false, fileName: '03_chuan_bi.md', notes: '' },
  { id: 'phase-4', category: 'creation', text: 'PHẦN 4: Phân tích ví dụ thực tế (Case Study)', done: false, fileName: '04_vi_du_thuc_te.md', notes: '' },
  
  // Marketing (Phases 5-8)
  { id: 'phase-5', category: 'marketing', text: 'PHẦN 5: Những câu hỏi thường gặp (FAQs)', done: false, fileName: '05_faq.md', notes: '' },
  { id: 'phase-6', category: 'marketing', text: 'PHASE 1: Tìm sản phẩm tiềm năng (Product Research)', done: false, fileName: '06_tim_san_pham.md', notes: '' },
  { id: 'phase-7', category: 'marketing', text: 'PHASE 2: Thiết lập cửa hàng (Store Setup)', done: false, fileName: '07_thiet_lap_store.md', notes: '' },
  { id: 'phase-8', category: 'marketing', text: 'PHASE 3: Sản xuất Content (Content Production)', done: false, fileName: '08_san_xuat_content.md', notes: '' },

  // Operations (Phases 9-12)
  { id: 'phase-9', category: 'operations', text: 'PHASE 4: Kéo Traffic tự nhiên (Organic Publishing)', done: false, fileName: '09_keo_traffic_organic.md', notes: '' },
  { id: 'phase-10', category: 'operations', text: 'PHASE 5: Xử lý đơn hàng (Fulfillment)', done: false, fileName: '10_xu_ly_don_hang.md', notes: '' },
  { id: 'phase-11', category: 'operations', text: 'PHASE 6: Nhận tiền & Quản trị dòng tiền', done: false, fileName: '11_nhan_tien_dong_tien.md', notes: '' },
  { id: 'phase-12', category: 'operations', text: 'PHASE 7: Chăm sóc khách hàng (Customer Service)', done: false, fileName: '12_cham_soc_khach_hang.md', notes: '' },
];

function parseFrontmatter(rawContent: string) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
  const match = rawContent.match(frontmatterRegex);
  if (!match) return { metadata: {} as Record<string, string>, content: rawContent };
  
  const yamlBlock = match[1];
  const content = match[2];
  const metadata: Record<string, string> = {};
  
  yamlBlock.split('\n').forEach(line => {
    const parts = line.split(':');
    if (parts.length >= 2) {
      const key = parts[0].trim();
      const value = parts.slice(1).join(':').trim().replace(/^['"]|['"]$/g, '');
      metadata[key] = value;
    }
  });
  
  return { metadata, content };
}

export interface SOPPhase {
  step: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  details: string[];
  content: string;
  phaseNum: number;
}

interface VersionData {
  creation: SOPPhase[];
  marketing: SOPPhase[];
  operations: SOPPhase[];
}

export const SOP_DATA: Record<'2023' | '2026', VersionData> = {
  '2023': { creation: [], marketing: [], operations: [] },
  '2026': { creation: [], marketing: [], operations: [] }
};

// Import all markdown files from the sop directory dynamically
const mdModules = import.meta.glob('../sop/**/*.md', { query: '?raw', eager: true }) as Record<string, { default: string }>;

Object.entries(mdModules).forEach(([filePath, module]) => {
  const parts = filePath.split('/');
  if (parts.length < 5) return; // Skip files directly in 2026/ or 2023/ root
  const version = parts[2] as '2023' | '2026';
  const phaseFolder = parts[3]; // e.g. "phase-1" or "01-nghien-cuu-..."
  let phaseNum: number;
  if (phaseFolder.startsWith('phase-')) {
    phaseNum = parseInt(phaseFolder.replace('phase-', ''), 10);
  } else {
    const match = phaseFolder.match(/^(\d+)/);
    phaseNum = match ? parseInt(match[1], 10) : 0;
  }

  const rawText = module.default || '';
  const { metadata, content } = parseFrontmatter(rawText);

  const step = metadata.step || `PHASE ${phaseNum}`;
  const title = metadata.title || '';
  const iconName = metadata.icon || 'Target';
  const color = metadata.color || 'border-zinc-500/30 text-zinc-500 bg-zinc-500/5';

  const icon = ICON_MAP[iconName] || Target;

  const details: string[] = [];
  content.split('\n').forEach(line => {
    const cleaned = line.trim();
    if (cleaned.startsWith('- ')) {
      details.push(cleaned.substring(2));
    }
  });

  const phaseObj: SOPPhase = {
    step,
    title,
    icon,
    color,
    details,
    content,
    phaseNum
  };

  let category: 'creation' | 'marketing' | 'operations';
  if (phaseNum <= 4) {
    category = 'creation';
  } else if (phaseNum <= 8) {
    category = 'marketing';
  } else {
    category = 'operations';
  }

  SOP_DATA[version][category].push(phaseObj);
});

// Sort phases in each category by phaseNum
const versions: Array<'2023' | '2026'> = ['2023', '2026'];
const categories: Array<'creation' | 'marketing' | 'operations'> = ['creation', 'marketing', 'operations'];

versions.forEach(v => {
  categories.forEach(c => {
    SOP_DATA[v][c].sort((a, b) => a.phaseNum - b.phaseNum);
  });
});
