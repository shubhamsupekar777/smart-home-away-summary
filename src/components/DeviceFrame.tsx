import React from 'react';
import { Smartphone, Monitor, Info, RefreshCw, Wifi, Signal, Battery } from 'lucide-react';
import { SystemStatusState } from '../types';

interface DeviceFrameProps {
  children: React.ReactNode;
  isMobileFrame: boolean;
  onToggleFrame: () => void;
  statusState: SystemStatusState;
  onToggleStatus: () => void;
  onOpenPhilosophy: () => void;
}

export const DeviceFrame: React.FC<DeviceFrameProps> = ({
  children,
  isMobileFrame,
  onToggleFrame,
  statusState,
  onToggleStatus,
  onOpenPhilosophy,
}) => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start selection:bg-indigo-500 selection:text-white">
      <div className="w-full bg-slate-900 border-b border-slate-800 px-4 py-2.5 z-40 sticky top-0 flex flex-wrap items-center justify-between gap-3 text-xs shadow-md">
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-sky-400 text-sm">
            Smart Home UX Prototype
          </span>
          <span className="hidden sm:inline text-slate-500">•</span>
          <span className="hidden sm:inline text-slate-400 font-medium">
            While You Were Away
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleStatus}
            className={`px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all ${
              statusState === 'good'
                ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
                : 'bg-amber-500/10 text-amber-400 border-amber-500/30 hover:bg-amber-500/20'
            }`}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>State: {statusState === 'good' ? '✓ Home Looks Good' : '⚠️ Attention Needed'}</span>
          </button>

          <button
            onClick={onToggleFrame}
            className="px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-all"
          >
            {isMobileFrame ? (
              <>
                <Smartphone className="w-3.5 h-3.5 text-indigo-400" />
                <span className="hidden md:inline">Frame: Mobile 390px</span>
              </>
            ) : (
              <>
                <Monitor className="w-3.5 h-3.5 text-indigo-400" />
                <span className="hidden md:inline">Frame: Responsive</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenPhilosophy}
            className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm shadow-indigo-600/30"
          >
            <Info className="w-3.5 h-3.5" />
            <span>UX Rationale</span>
          </button>
        </div>
      </div>

      <div className="w-full flex-1 flex justify-center items-center p-0 sm:p-6 overflow-y-auto">
        {isMobileFrame ? (          <div className="relative w-full max-w-[400px] h-[864px] bg-slate-900 rounded-[48px] border-[10px] border-slate-800 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col my-auto ring-1 ring-slate-700/50">
            <div className="bg-slate-900 pt-3 px-7 flex items-center justify-between z-40 shrink-0 text-slate-400 text-[11px] font-mono select-none">
              <span>9:41</span>
              <div className="w-24 h-4 bg-slate-950 rounded-full flex items-center justify-center border border-slate-800">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Signal className="w-3 h-3" />
                <Wifi className="w-3 h-3" />
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden relative bg-slate-950">
              {children}
            </div>

            <div className="bg-slate-950 py-2 flex items-center justify-center shrink-0 z-40">
              <div className="w-32 h-1 bg-slate-700 rounded-full" />
            </div>
          </div>
        ) : (
          <div className="w-full max-w-2xl min-h-[800px] bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden my-auto">
            {children}
          </div>
        )}
      </div>
    </div>
  );
};
