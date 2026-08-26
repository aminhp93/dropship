import { createFileRoute } from '@tanstack/react-router';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Lock, CircleDot, CheckCircle2, Circle, Ban } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DailyLog } from '@/features/dropshipping/components/DailyLog';
import {
  GOAL,
  GATES,
  EMERGENCY_RESERVE,
  STOP_RULES,
  ROADMAP,
} from '@/features/dropshipping/data/timeline-data';

export const Route = createFileRoute('/dropship/progress/0-timeline')({
  component: TimelineTabRoute,
});

function GoalSection() {
  const allocated = GATES.reduce((a, g) => a + g.budget, 0) + EMERGENCY_RESERVE;

  return (
    <Card className="p-5 sm:p-6 border-zinc-200 dark:border-zinc-800 space-y-5">
      <div className="flex items-start gap-4 flex-wrap">
        <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
          <Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
        </div>
        <div className="flex-1 min-w-[240px]">
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
            Mục tiêu
          </div>
          <div className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mt-0.5">
            {GOAL.target}{' '}
            <span className="text-base font-medium text-zinc-500">{GOAL.targetUnit}</span>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
            {GOAL.targetDeadline}, với vốn khởi điểm{' '}
            <strong className="text-zinc-700 dark:text-zinc-300">
              ${GOAL.capital.toLocaleString('en-US')}
            </strong>
            . Bắt đầu {GOAL.startDate} · review 6 tháng {GOAL.reviewDate}.
          </p>
        </div>
      </div>

      {/* 3 Gate — vốn chỉ mở khoá khi gate trước đạt điều kiện */}
      <div className="space-y-2">
        <div className="flex items-baseline justify-between">
          <h3 className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
            Phân bổ vốn theo 3 Gate
          </h3>
          <span className="text-[10px] font-mono text-zinc-400">
            ${allocated.toLocaleString('en-US')} / ${GOAL.capital.toLocaleString('en-US')}
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {GATES.map((gate) => (
            <div
              key={gate.id}
              className={cn(
                'p-3.5 rounded-xl border space-y-1.5',
                gate.status === 'open'
                  ? 'border-emerald-500/40 bg-emerald-500/5'
                  : 'border-zinc-200 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/40',
              )}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="text-[11px] font-bold text-zinc-800 dark:text-zinc-200">
                  {gate.name}
                </span>
                {gate.status === 'open' ? (
                  <Badge className="text-[9px] h-4 px-1.5 bg-emerald-600 text-white border-0">
                    ĐANG MỞ
                  </Badge>
                ) : (
                  <Lock className="w-3 h-3 text-zinc-400 shrink-0" />
                )}
              </div>
              <div className="text-lg font-bold font-mono text-zinc-900 dark:text-zinc-100">
                ${gate.budget.toLocaleString('en-US')}
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-snug">
                {gate.purpose}
              </p>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-500 leading-snug pt-1 border-t border-zinc-200/70 dark:border-zinc-800">
                <span className="font-semibold">Mở khoá tiếp khi:</span> {gate.exitCondition}
              </p>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 pt-1">
          Còn <strong>${EMERGENCY_RESERVE}</strong> dự phòng khẩn cấp — không đụng tới.{' '}
          <span className="text-zinc-400">
            Bắt buộc organic trước, trả phí sau: riêng TikTok đã khuyến nghị $700–1.000 cho tháng
            đầu test ads, chi ngay từ đầu là gần hết vốn chỉ sau 1 sản phẩm.
          </span>
        </p>
      </div>

      {/* Rule dừng */}
      <div className="space-y-2 pt-1">
        <h3 className="text-xs font-bold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
          <Ban className="w-3.5 h-3.5 text-red-500" /> Rule dừng / đổi hướng
        </h3>
        <ul className="space-y-1">
          {STOP_RULES.map((rule, i) => (
            <li
              key={i}
              className="text-[11px] text-zinc-600 dark:text-zinc-400 leading-relaxed flex gap-2"
            >
              <span className="text-red-500 shrink-0">→</span>
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}

function RoadmapSection() {
  const totalDays = 184;
  const currentDay = 26; // 26/08/2026
  const progressPercent = Math.min(100, Math.round((currentDay / totalDays) * 100));

  return (
    <Card className="p-5 sm:p-6 border-zinc-200 dark:border-zinc-800 space-y-6">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
          Roadmap 6 tháng
        </h2>
      </div>

      {/* Overall Progress Bar */}
      <div className="relative pt-7 pb-1">
        {/* Dynamic Floating Pointer for Today's Date */}
        <div
          className="absolute top-0 text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-500/15 border border-emerald-500/35 px-2 py-0.5 rounded-full -translate-x-1/2 transition-all duration-500 shadow-2xs pointer-events-none flex items-center gap-1.5 shrink-0"
          style={{ left: `${Math.max(6, Math.min(94, progressPercent))}%` }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>26/08/2026</span>
        </div>

        {/* Progress Track */}
        <div className="h-2.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden p-0.5 border border-zinc-200/50 dark:border-zinc-800/60">
          <div
            className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500 shadow-sm"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Start and End Date Labels */}
        <div className="flex justify-between text-[11px] font-mono text-zinc-400 mt-1.5">
          <span>01/08/2026</span>
          <span>31/01/2027</span>
        </div>
      </div>

      {/* Horizontal Progress Stepper */}
      <div className="relative pt-2 overflow-x-auto pb-2 scrollbar-none">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 sm:gap-4 relative z-10 min-w-[720px] md:min-w-0">
          {ROADMAP.map((m) => {
            const isCurrent = m.status === 'current';
            const isDone = m.status === 'done';

            return (
              <div
                key={m.index}
                className={cn(
                  'flex flex-col p-3.5 rounded-xl border transition-all duration-200 relative',
                  isCurrent
                    ? 'border-emerald-500/50 bg-emerald-500/5 dark:bg-emerald-950/20 shadow-md shadow-emerald-500/5 ring-1 ring-emerald-500/30'
                    : isDone
                      ? 'border-emerald-500/20 bg-emerald-500/5'
                      : 'border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 opacity-80 hover:opacity-100'
                )}
              >
                {/* Step Node Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div
                      className={cn(
                        'w-6 h-6 rounded-full flex items-center justify-center shrink-0 text-[11px] font-bold font-mono border',
                        isCurrent
                          ? 'bg-emerald-600 text-white border-emerald-500 shadow-sm ring-2 ring-emerald-500/20'
                          : isDone
                            ? 'bg-emerald-500 text-white border-emerald-400'
                            : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-400 border-zinc-300 dark:border-zinc-700'
                      )}
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                      ) : (
                        m.index
                      )}
                    </div>
                  </div>

                  <span className="text-[10px] font-mono text-zinc-400">
                    {m.period}
                  </span>
                </div>

                {/* Status Badges */}
                <div className="flex items-center gap-1.5 flex-wrap mb-2">
                  {isCurrent && (
                    <Badge className="text-[9px] h-4 px-1.5 bg-emerald-600 text-white font-semibold border-0 animate-pulse">
                      ĐANG Ở ĐÂY
                    </Badge>
                  )}
                  {m.gate && (
                    <Badge
                      variant="outline"
                      className={cn(
                        'text-[9px] h-4 px-1.5 font-medium',
                        isCurrent
                          ? 'border-emerald-500/40 text-emerald-700 dark:text-emerald-300 bg-emerald-500/10'
                          : 'border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400'
                      )}
                    >
                      {m.gate}
                    </Badge>
                  )}
                </div>

                {/* Main Goal */}
                <p
                  className={cn(
                    'text-[11px] leading-snug mt-auto pt-1',
                    isCurrent
                      ? 'text-zinc-800 dark:text-zinc-200 font-medium'
                      : 'text-zinc-600 dark:text-zinc-400'
                  )}
                >
                  {m.goal}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

export function TimelineTabRoute() {
  return (
    <div className="space-y-5">
      <GoalSection />
      <RoadmapSection />
      <DailyLog />
    </div>
  );
}
