import React from 'react';
import { X, Smartphone, Monitor, RefreshCw, Sparkles, Check, AlertTriangle } from 'lucide-react';
import { SystemStatusState } from '../types';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  statusState: SystemStatusState;
  onSetStatusState: (state: SystemStatusState) => void;
  isMobileFrame: boolean;
  onToggleMobileFrame: () => void;
  onOpenPhilosophy: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  statusState,
  onSetStatusState,
  isMobileFrame,
  onToggleMobileFrame,
  onOpenPhilosophy,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-sm bg-slate-900 border border-slate-800 rounded-3xl p-5 shadow-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <h3 className="text-base font-bold text-white">Prototype Settings & Controls</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 py-4">
          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Home State Scenario
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => onSetStatusState('good')}
                className={`p-3 rounded-xl border flex flex-col items-start gap-1 transition-all text-left ${
                  statusState === 'good'
                    ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-sm'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-xs text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>✓ Home looks good</span>
                </div>
                <span className="text-[11px] text-slate-400">All clear, 1 info event</span>
              </button>

              <button
                onClick={() => onSetStatusState('attention')}
                className={`p-3 rounded-xl border flex flex-col items-start gap-1 transition-all text-left ${
                  statusState === 'attention'
                    ? 'bg-amber-500/15 border-amber-500 text-white shadow-sm'
                    : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-1.5 font-bold text-xs text-amber-400">
                  <AlertTriangle className="w-4 h-4" />
                  <span>⚠️ Needs attention</span>
                </div>
                <span className="text-[11px] text-slate-400">Active issue scenario</span>
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Display Frame View
            </label>
            <button
              onClick={onToggleMobileFrame}
              className="w-full p-3 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-slate-700 flex items-center justify-between text-xs text-slate-200"
            >
              <div className="flex items-center gap-2">
                {isMobileFrame ? (
                  <Smartphone className="w-4 h-4 text-indigo-400" />
                ) : (
                  <Monitor className="w-4 h-4 text-indigo-400" />
                )}
                <span className="font-semibold">
                  {isMobileFrame ? '390×844 Mobile Device Frame' : 'Responsive Desktop View'}
                </span>
              </div>
              <span className="text-[11px] font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                Toggle
              </span>
            </button>
          </div>

          <div>
            <button
              onClick={() => {
                onClose();
                onOpenPhilosophy();
              }}
              className="w-full p-3 rounded-xl bg-indigo-600/20 border border-indigo-500/30 hover:bg-indigo-600/30 flex items-center justify-center gap-2 text-xs font-bold text-indigo-300 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span>Read Intern UX Rationale</span>
            </button>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
