import React from 'react';
import { CheckCircle2, AlertTriangle, Clock, Sparkles } from 'lucide-react';
import { SystemStatusState, ActivitySummaryData } from '../types';

interface StatusSummaryProps {
  statusState: SystemStatusState;
  summary: ActivitySummaryData;
  attentionCount: number;
  onToggleStatus?: () => void;
}

export const StatusSummary: React.FC<StatusSummaryProps> = ({
  statusState,
  summary,
  attentionCount,
}) => {
  const isHealthy = statusState === 'good';

  return (
    <section className="px-5 pt-4 pb-2">
      <div
        className={`relative overflow-hidden rounded-2xl p-4 transition-all duration-300 border ${
          isHealthy
            ? 'bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900/90 border-emerald-500/30 shadow-lg shadow-emerald-950/20'
            : 'bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900/90 border-amber-500/30 shadow-lg shadow-amber-950/20'
        }`}
      >
        <div
          className={`absolute -right-10 -top-10 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none ${
            isHealthy ? 'bg-emerald-400' : 'bg-amber-400'
          }`}
        />

        <div className="relative z-10 flex flex-col gap-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              {isHealthy ? (
                <div className="w-9 h-9 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shrink-0 shadow-inner">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
              ) : (
                <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 shadow-inner animate-pulse-subtle">
                  <AlertTriangle className="w-5 h-5 stroke-[2.5]" />
                </div>
              )}

              <div>
                <h2 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
                  {isHealthy ? '✓ Home looks good' : '⚠️ 1 thing needs your attention'}
                </h2>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mt-0.5">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>
                    {summary.totalEvents} events since {summary.timeRange}
                  </span>
                </div>
              </div>
            </div>

            <span
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border shadow-sm ${
                isHealthy
                  ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
                  : 'bg-amber-500/10 text-amber-300 border-amber-500/20'
              }`}
            >
              {isHealthy ? 'All Clear' : 'Action Required'}
            </span>
          </div>

          <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 font-medium text-slate-300">
              <Sparkles className={`w-3.5 h-3.5 ${isHealthy ? 'text-emerald-400' : 'text-amber-400'}`} />
              <span>
                {isHealthy
                  ? `${attentionCount} thing worth knowing`
                  : `${attentionCount} active issue requires review`}
              </span>
            </div>
            <span className="text-[11px] text-slate-500">Auto-summarized</span>
          </div>
        </div>
      </div>
    </section>
  );
};
