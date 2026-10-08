import React from 'react';
import { AlertTriangle, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SmartEvent } from '../types';

interface AttentionCardProps {
  event: SmartEvent;
  onViewDetails: () => void;
}

export const AttentionCard: React.FC<AttentionCardProps> = ({
  event,
  onViewDetails,
}) => {
  return (
    <section className="px-5 py-3">
      <div className="flex items-center justify-between mb-2.5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
          Worth Your Attention
        </h2>
        <span className="text-[11px] font-medium text-slate-500 bg-slate-800/60 px-2 py-0.5 rounded-md">
          Priority 1
        </span>
      </div>
      <div className="group relative bg-slate-900/90 rounded-2xl p-4 border border-amber-500/30 hover:border-amber-500/50 transition-all duration-200 shadow-md shadow-slate-950/40">
        <div className="absolute left-0 top-3 bottom-3 w-1.5 bg-amber-500 rounded-r-full" />

        <div className="pl-2">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {event.title}
                </h3>
                <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>{event.timeFormatted}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
            <p className="font-medium text-slate-200">
              {event.humanSummary}
            </p>
          </div>

          <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full w-fit">
              <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Resolved · No action needed</span>
            </div>
            <button
              onClick={onViewDetails}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md shadow-indigo-600/20 transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            >
              <span>View details</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
