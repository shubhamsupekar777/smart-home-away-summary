import React from 'react';
import { Footprints, WifiOff, Download, CheckCircle } from 'lucide-react';
import { ActivitySummaryData } from '../types';

interface ActivitySummaryProps {
  summary: ActivitySummaryData;
  onSelectCategory?: (category: string) => void;
}

export const ActivitySummary: React.FC<ActivitySummaryProps> = ({
  summary,
  onSelectCategory,
}) => {
  const categories = [
    {
      id: 'movement',
      count: summary.movementCount,
      label: 'movement events',
      icon: Footprints,
      color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      badge: '6',
    },
    {
      id: 'connection',
      count: summary.connectionCount,
      label: 'connection interruption',
      icon: WifiOff,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      badge: '1',
    },
    {
      id: 'update',
      count: summary.updateCount,
      label: 'software update',
      icon: Download,
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
      badge: '1',
    },
    {
      id: 'routine',
      count: summary.routineCount,
      label: 'routine events',
      icon: CheckCircle,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      badge: '9',
    },
  ];

  return (
    <section className="px-5 py-3">
      <div className="flex items-center justify-between mb-2.5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          While You Were Away
        </h2>
        <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">
          {summary.totalEvents} events
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory && onSelectCategory(cat.id)}
              className="flex items-center gap-3 p-3 bg-slate-900/80 rounded-xl border border-slate-800 hover:border-slate-700 hover:bg-slate-800/60 transition-all duration-150 text-left group"
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center border shrink-0 ${cat.color} group-hover:scale-105 transition-transform duration-150`}
              >
                <Icon className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-white leading-none">
                  {cat.count}
                </div>
                <div className="text-[11px] font-medium text-slate-400 truncate mt-1 leading-tight">
                  {cat.label}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};
