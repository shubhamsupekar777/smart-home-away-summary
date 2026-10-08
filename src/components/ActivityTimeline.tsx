import React from 'react';
import {
  Footprints,
  WifiOff,
  Download,
  ArrowRight,
  Info,
} from 'lucide-react';
import { SmartEvent } from '../types';

interface ActivityTimelineProps {
  events: SmartEvent[];
  onViewAllActivity: () => void;
  onSelectEvent?: (event: SmartEvent) => void;
}

export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({
  events,
  onViewAllActivity,
  onSelectEvent,
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'connection':
        return WifiOff;
      case 'update':
        return Download;
      case 'movement':
        return Footprints;
      default:
        return Info;
    }
  };

  return (
    <section className="px-5 py-3">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">
          Recent Activity
        </h2>
        <span className="text-xs text-slate-500 font-medium">Timeline</span>
      </div>
      <div className="relative pl-3 space-y-3 before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
        {events.map((event) => {
          const Icon = getCategoryIcon(event.category);
          const isImportant = event.isImportant;

          return (
            <div
              key={event.id}
              onClick={() => onSelectEvent && onSelectEvent(event)}
              className={`group relative flex items-start gap-3 p-3 rounded-xl transition-all duration-150 cursor-pointer ${
                isImportant
                  ? 'bg-slate-900 border border-amber-500/30 hover:border-amber-500/50 shadow-md shadow-amber-950/10'
                  : 'bg-slate-900/40 hover:bg-slate-900/80 border border-slate-800/40 hover:border-slate-800'
              }`}
            >
              <div
                className={`relative z-10 w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-150 group-hover:scale-110 ${
                  isImportant
                    ? 'bg-amber-500/20 text-amber-400 border-amber-400/40 shadow-sm shadow-amber-500/20'
                    : event.category === 'update'
                    ? 'bg-sky-500/10 text-sky-400 border-sky-500/30'
                    : 'bg-slate-800 text-slate-400 border-slate-700/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <span
                    className={`text-sm tracking-tight ${
                      isImportant
                        ? 'font-bold text-white'
                        : 'font-medium text-slate-300'
                    }`}
                  >
                    {event.title}
                  </span>
                  <span
                    className={`text-xs font-mono font-medium ${
                      isImportant ? 'text-amber-400' : 'text-slate-500'
                    }`}
                  >
                    {event.timestamp}
                  </span>
                </div>

               
                <p
                  className={`text-xs mt-0.5 line-clamp-1 ${
                    isImportant ? 'text-amber-200/90 font-medium' : 'text-slate-400 font-normal'
                  }`}
                >
                  {event.humanSummary}
                </p>
              </div>
            </div>
          );
        })}
      </div>

   
      <button
        onClick={onViewAllActivity}
        className="w-full mt-3 py-2.5 px-4 bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-xs font-bold text-slate-300 hover:text-white rounded-xl flex items-center justify-center gap-2 transition-all duration-150"
      >
        <span>View all activity</span>
        <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
      </button>
    </section>
  );
};
