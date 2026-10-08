import React from 'react';
import { X, Lightbulb, Target, Layers, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';

interface UXPhilosophyDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UXPhilosophyDrawer: React.FC<UXPhilosophyDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white">UX & Product Design Rationale</h2>
              <p className="text-xs text-slate-400">Software Intern Design Assignment</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 overflow-y-auto pr-1 py-4 flex-1 text-xs text-slate-300">
          <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/50 to-slate-900 border border-indigo-500/30">
            <div className="flex items-center gap-2 text-indigo-300 font-bold uppercase tracking-wider text-[11px] mb-1">
              <Sparkles className="w-3.5 h-3.5" /> Core Design Vision
            </div>
            <p className="text-sm font-semibold text-white leading-snug">
              "I changed the experience from showing users what happened to helping them understand what happened, what matters, and what they should do next."
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Target className="w-4 h-4 text-emerald-400" />
              The Framework: Summarize → Prioritize → Explain → Recommend
            </h3>
            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-bold text-emerald-400 block">1. Summarize</span>
                <span className="text-slate-400 text-[11px]">17 events since 7:30 AM aggregated cleanly</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-bold text-amber-400 block">2. Prioritize</span>
                <span className="text-slate-400 text-[11px]">Elevate 6-min connection drop above routine motion</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-bold text-indigo-400 block">3. Explain</span>
                <span className="text-slate-400 text-[11px]">Human language: "Lost Wi-Fi 6m, auto-reconnected"</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="font-bold text-sky-400 block">4. Recommend</span>
                <span className="text-slate-400 text-[11px]">Explicit guidance: "No action needed."</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              Strict Information Hierarchy
            </h3>
            <ol className="space-y-1.5 pl-2 pt-1 text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong className="text-white">1. Is everything okay?</strong> → Top Status Banner ("Home looks good")</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span><strong className="text-white">2. What matters?</strong> → Worth Your Attention Card</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-indigo-500/20 text-indigo-400 text-[10px] font-bold flex items-center justify-center shrink-0">3</span>
                <span><strong className="text-white">3. What happened?</strong> → Human Event Summary</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-sky-500/20 text-sky-400 text-[10px] font-bold flex items-center justify-center shrink-0">4</span>
                <span><strong className="text-white">4. Do I need to do something?</strong> → Action State ("No action needed")</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-slate-800 text-slate-400 text-[10px] font-bold flex items-center justify-center shrink-0">5</span>
                <span><strong className="text-white">5. Detailed activity & Tech metrics</strong> → Pushed to bottom/details</span>
              </li>
            </ol>
          </div>

          <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Before vs After UX Paradigm
            </h3>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="p-2.5 rounded-xl bg-red-950/20 border border-red-500/20">
                <div className="font-bold text-red-400 text-[11px] uppercase mb-1">❌ Technical Dashboard</div>
                <ul className="space-y-1 text-[11px] text-slate-400">
                  <li>• "-67 dBm (5 GHz)"</li>
                  <li>• "ERR_WIFI_DISCONNECT_0x4A"</li>
                  <li>• Equal visual weight for all 17 logs</li>
                </ul>
              </div>
              <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20">
                <div className="font-bold text-emerald-400 text-[11px] uppercase mb-1">✓ Human-Centric Insights</div>
                <ul className="space-y-1 text-[11px] text-slate-300">
                  <li>• "Connection: Good"</li>
                  <li>• "Lost Wi-Fi for 6m, auto-reconnected"</li>
                  <li>• Visual hierarchy emphasizing key events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl transition-colors shadow-md shadow-indigo-600/20"
          >
            Got it, return to app
          </button>
        </div>
      </div>
    </div>
  );
};
