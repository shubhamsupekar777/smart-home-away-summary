import React from 'react';
import { Battery, Wifi, Cpu, RotateCcw, ChevronRight, Info } from 'lucide-react';
import { DeviceHealth } from '../types';

interface DeviceHealthCardProps {
  health: DeviceHealth;
  onOpenTechDetails: () => void;
}

export const DeviceHealthCard: React.FC<DeviceHealthCardProps> = ({
  health,
  onOpenTechDetails,
}) => {
  return (
    <section className="px-5 py-3 mb-6">
      <div className="flex items-center justify-between mb-2.5">
        <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
          Device Health
        </h2>
        <button
          onClick={onOpenTechDetails}
          className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 hover:underline"
        >
          <span>Inspect technical data</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <div
        onClick={onOpenTechDetails}
        className="bg-slate-900/80 hover:bg-slate-900 rounded-2xl p-4 border border-slate-800 hover:border-slate-700 transition-all duration-200 cursor-pointer shadow-md shadow-slate-950/20 group"
      >
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <Battery className="w-3.5 h-3.5 text-emerald-400" />
                Battery
              </span>
              <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                Normal
              </span>
            </div>
            <div className="text-lg font-bold text-white mt-1">
              {health.batteryPercentage}%
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
              <div
                className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${health.batteryPercentage}%` }}
              />
            </div>
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <Wifi className="w-3.5 h-3.5 text-indigo-400" />
                Connection
              </span>
              <span className="text-[11px] font-bold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded">
                Stable
              </span>
            </div>
            <div className="text-lg font-bold text-white mt-1">
              {health.connectionQuality}
            </div>
            <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
              <Info className="w-3 h-3 text-slate-500" />
              <span>Tap for -67 dBm data</span>
            </div>
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                Software
              </span>
            </div>
            <div className="text-base font-bold text-white mt-1 font-mono">
              {health.softwareVersion}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Up to date
            </div>
          </div>

          <div className="p-3 bg-slate-950/60 rounded-xl border border-slate-800/80">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
                <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                Last restart
              </span>
            </div>
            <div className="text-xs font-bold text-white mt-2 leading-tight">
              {health.lastRestart}
            </div>
            <div className="text-[11px] text-slate-400 mt-1">
              Automatic sync
            </div>
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400 group-hover:text-slate-300">
          <span className="font-medium">Raw metrics hidden to keep view clean</span>
          <span className="text-indigo-400 font-semibold group-hover:translate-x-0.5 transition-transform">
            View technical details →
          </span>
        </div>
      </div>
    </section>
  );
};
