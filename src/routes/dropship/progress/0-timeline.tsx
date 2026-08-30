import { createFileRoute } from '@tanstack/react-router';
import { Card } from '@/components/ui/card';
import { Target } from 'lucide-react';
import { DailyLog } from '@/features/dropshipping/components/DailyLog';
import { GOAL } from '@/features/dropshipping/data/timeline-data';

export const Route = createFileRoute('/dropship/progress/0-timeline')({
  component: TimelineTabRoute,
});

const TOTAL_MONTHS = 6;

/** Tính % thời gian đã qua trong khoảng startDate → reviewDate, dựa trên ngày thật (không hardcode). */
function computeTimeProgress() {
  const start = new Date(`${GOAL.startDate}T00:00:00`).getTime();
  const end = new Date(`${GOAL.reviewDate}T00:00:00`).getTime();
  const now = Date.now();

  const percent = Math.min(100, Math.max(0, Math.round(((now - start) / (end - start)) * 100)));
  const monthIndex = Math.min(
    TOTAL_MONTHS,
    Math.max(1, Math.ceil(((now - start) / (end - start)) * TOTAL_MONTHS)),
  );
  const daysLeft = Math.max(0, Math.ceil((end - now) / (1000 * 60 * 60 * 24)));

  return { percent, monthIndex, daysLeft };
}

function GoalSection() {
  const { percent, monthIndex, daysLeft } = computeTimeProgress();

  return (
    <Card className="p-5 sm:p-6 border-zinc-200 dark:border-zinc-800 space-y-4">
      <div className="flex items-start gap-4 flex-wrap">
        <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
          <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="flex-1 min-w-[240px]">
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
            Mục tiêu
          </div>
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mt-0.5">
            {GOAL.target}
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            {GOAL.targetDeadline} (đến {GOAL.reviewDate}) · Ngân sách{' '}
            <strong className="text-zinc-700 dark:text-zinc-300">
              ${GOAL.capital.toLocaleString('en-US')}
            </strong>{' '}
            · Bắt đầu {GOAL.startDate}.
          </p>
        </div>
      </div>

      {/* Progress trực quan — % thời gian đã đi qua, tính lại mỗi lần mở trang */}
      <div className="pt-1">
        <div className="flex items-baseline justify-between mb-1.5">
          <span className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
            Tháng {monthIndex}/{TOTAL_MONTHS}
          </span>
          <span className="text-[11px] font-mono text-zinc-500">
            {percent}% · còn {daysLeft} ngày
          </span>
        </div>
        <div className="h-2.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden border border-zinc-200/60 dark:border-zinc-800">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="flex justify-between text-[10px] font-mono text-zinc-400 mt-1">
          <span>{GOAL.startDate}</span>
          <span>{GOAL.reviewDate}</span>
        </div>
      </div>
    </Card>
  );
}

export function TimelineTabRoute() {
  return (
    <div className="space-y-5">
      <GoalSection />
      <DailyLog />
    </div>
  );
}
