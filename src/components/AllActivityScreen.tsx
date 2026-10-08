import React, { useState } from 'react';
import {
  ArrowLeft,
  Filter,
  Search,
  Footprints,
  WifiOff,
  Download,
  CheckCircle,
  Info,
  Calendar,
  ChevronRight,
} from 'lucide-react';
import { SmartEvent, EventCategory } from '../types';

interface AllActivityScreenProps {
  events: SmartEvent[];
  onBack: () => void;
  onSelectEvent: (event: SmartEvent) => void;
  initialFilter?: string;
}

export const AllActivityScreen: React.FC<AllActivityScreenProps> = ({
  events,
  onBack,
  onSelectEvent,
  initialFilter = 'all',
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    { id: 'all', label: 'All' },
    { id: 'movement', label: 'Movement' },
    { id: 'connection', label: 'Device' },
    { id: 'update', label: 'Updates' },
    { id: 'routine', label: 'Routine' },
  ];

  const filteredEvents = events.filter((evt) => {

    if (activeFilter !== 'all') {
      if (activeFilter === 'connection' && evt.category !== 'connection') return false;
      if (activeFilter === 'movement' && evt.category !== 'movement') return false;
      if (activeFilter === 'update' && evt.category !== 'update') return false;
      if (activeFilter === 'routine' && evt.category !== 'routine') return false;
    }


    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      return (
        evt.title.toLowerCase().includes(q) ||
        evt.humanSummary.toLowerCase().includes(q) ||
        evt.timestamp.toLowerCase().includes(q)
      );
    }

    return true;
  });


  const todayEvents = filteredEvents.filter((e) => e.dateGroup === 'Today');
  const yesterdayEvents = filteredEvents.filter((e) => e.dateGroup === 'Yesterday');

  const getCategoryIcon = (category: EventCategory) => {
    switch (category) {
      case 'movement':
        return Footprints;
      case 'connection':
        return WifiOff;
      case 'update':
        return Download;
      case 'routine':
        return CheckCircle;
      default:
        return Info;
    }
  };

  return (
    <div className="min-h-full bg-slate-950 text-slate-100 flex flex-col pb-8 animate-in fade-in duration-200">
   
      <div className="sticky top-0 z-30 bg-slate-900/90 backdrop-blur-md px-5 py-4 border-b border-slate-800/80 flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700/60 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
        <h1 className="text-base font-bold text-white">All Activity</h1>
      </div>

      <div className="px-5 pt-4 space-y-4 max-w-lg mx-auto w-full">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-3.5" />
          <input
            type="text"
            placeholder="Search events, locations, timestamps..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 border ${
                  isActive
                    ? 'bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/20'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="space-y-6 pt-2">
          {todayEvents.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>Today</span>
                <span className="text-[10px] text-slate-500 font-mono">
                  ({todayEvents.length})
                </span>
              </div>

              <div className="space-y-2">
                {todayEvents.map((evt) => {
                  const Icon = getCategoryIcon(evt.category);
                  const isImportant = evt.isImportant;

                  return (
                    <div
                      key={evt.id}
                      onClick={() => onSelectEvent(evt)}
                      className={`group flex items-start gap-3 p-3.5 rounded-2xl transition-all cursor-pointer border ${
                        isImportant
                          ? 'bg-slate-900 border-amber-500/30 hover:border-amber-500/50 shadow-md shadow-amber-950/10'
                          : 'bg-slate-900/60 hover:bg-slate-900 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 border ${
                          isImportant
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                            : evt.category === 'update'
                            ? 'bg-sky-500/10 text-sky-400 border-sky-500/20'
                            : 'bg-slate-800 text-slate-400 border-slate-700'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3
                            className={`text-sm tracking-tight ${
                              isImportant ? 'font-bold text-white' : 'font-medium text-slate-200'
                            }`}
                          >
                            {evt.title}
                          </h3>
                          <span
                            className={`text-xs font-mono font-medium ${
                              isImportant ? 'text-amber-400' : 'text-slate-500'
                            }`}
                          >
                            {evt.timestamp}
                          </span>
                        </div>
                        <p
                          className={`text-xs mt-1 ${
                            isImportant ? 'text-amber-200/90 font-medium' : 'text-slate-400'
                          }`}
                        >
                          {evt.humanSummary}
                        </p>
                      </div>

                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 self-center shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {yesterdayEvents.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>Yesterday</span>
                <span className="text-[10px] text-slate-500 font-mono">
                  ({yesterdayEvents.length})
                </span>
              </div>

              <div className="space-y-2">
                {yesterdayEvents.map((evt) => {
                  const Icon = getCategoryIcon(evt.category);
                  return (
                    <div
                      key={evt.id}
                      onClick={() => onSelectEvent(evt)}
                      className="group flex items-start gap-3 p-3.5 rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-slate-700 transition-all cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-xl bg-slate-800 text-slate-400 border border-slate-700 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-sm font-medium text-slate-300">{evt.title}</h3>
                          <span className="text-xs font-mono text-slate-500">{evt.timestamp}</span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1">{evt.humanSummary}</p>
                      </div>

                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 self-center shrink-0" />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12 bg-slate-900/40 rounded-2xl border border-slate-800/60">
              <Filter className="w-8 h-8 text-slate-600 mx-auto mb-2" />
              <h3 className="text-sm font-bold text-slate-300">No events match filter</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try selecting a different category tab or clearing your search.
              </p>
              <button
                onClick={() => {
                  setActiveFilter('all');
                  setSearchQuery('');
                }}
                className="mt-3 px-3 py-1.5 bg-slate-800 text-xs font-semibold text-indigo-400 rounded-xl hover:bg-slate-700"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
