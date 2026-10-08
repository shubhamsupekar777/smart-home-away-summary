import React from 'react';
import { Settings, Info, RefreshCw, Home as HomeIcon } from 'lucide-react';
import { SystemStatusState } from '../types';

interface HeaderProps {
  statusState: SystemStatusState;
  onToggleStatus: () => void;
  onOpenSettings: () => void;
  onOpenPhilosophy: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  statusState,
  onToggleStatus,
  onOpenSettings,
  onOpenPhilosophy,
}) => {
  return (
    <header className="px-5 pt-5 pb-3 bg-slate-900/90 backdrop-blur-md sticky top-0 z-30 border-b border-slate-800/80">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <HomeIcon className="w-4 h-4" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-white">Home</h1>
          </div>
          <p className="text-xs font-medium text-slate-400 mt-0.5">While you were away</p>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={onOpenPhilosophy}
            title="UX Philosophy & Insights"
            className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-xl transition-all duration-200"
            aria-label="UX Insights"
          >
            <Info className="w-5 h-5" />
          </button>

          <button
            onClick={onToggleStatus}
            title={`Current State: ${statusState.toUpperCase()} (Click to toggle)`}
            className={`p-2 rounded-xl transition-all duration-200 border flex items-center gap-1 text-xs font-semibold ${
              statusState === 'good'
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20'
                : 'bg-amber-500/10 text-amber-400 border-amber-500/20 hover:bg-amber-500/20'
            }`}
            aria-label="Toggle Demo State"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {statusState === 'good' ? 'Healthy' : 'Attention'}
            </span>
          </button>

          <button
            onClick={onOpenSettings}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-all duration-200"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};
