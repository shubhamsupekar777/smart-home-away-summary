import React from 'react';
import { X, Server, Radio, ShieldCheck, Activity, HardDrive, Wifi } from 'lucide-react';
import { DeviceHealth } from '../types';

interface TechDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  health: DeviceHealth;
}

export const TechDetailsModal: React.FC<TechDetailsModalProps> = ({
  isOpen,
  onClose,
  health,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Technical Diagnostics</h3>
              <p className="text-xs text-slate-400">Raw telemetry for advanced inspection</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="my-3 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 leading-relaxed">
          <span className="font-semibold text-indigo-300">UX Design Principle:</span> These technical values are intentionally hidden on the main home screen to prevent data overload and keep focus on actionable insights.
        </div>

        <div className="space-y-2.5 overflow-y-auto pr-1 py-2 flex-1">
          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Radio className="w-4 h-4 text-indigo-400" />
              <div>
                <div className="text-xs font-medium text-slate-400">Signal Strength (RSSI)</div>
                <div className="text-sm font-bold font-mono text-white">{health.connectionRaw}</div>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
              Good
            </span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Wifi className="w-4 h-4 text-sky-400" />
              <div>
                <div className="text-xs font-medium text-slate-400">Mesh Access Point</div>
                <div className="text-sm font-semibold text-white">{health.meshNode}</div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <HardDrive className="w-4 h-4 text-slate-400" />
              <div>
                <div className="text-xs font-medium text-slate-400">Local IP Address</div>
                <div className="text-sm font-mono text-white">{health.ipAddress}</div>
              </div>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">DHCP</span>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <Activity className="w-4 h-4 text-slate-400" />
              <div>
                <div className="text-xs font-medium text-slate-400">MAC Hardware ID</div>
                <div className="text-sm font-mono text-white">{health.macAddress}</div>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <div>
                <div className="text-xs font-medium text-slate-400">Continuous Uptime</div>
                <div className="text-sm font-semibold text-white">{health.uptime}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs rounded-xl transition-colors"
          >
            Close Telemetry Inspector
          </button>
        </div>
      </div>
    </div>
  );
};
