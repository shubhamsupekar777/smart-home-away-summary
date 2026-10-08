import React, { useState } from 'react';
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Zap,
  HelpCircle,
  RefreshCw,
  Info,
} from 'lucide-react';
import { SmartEvent } from '../types';

interface EventDetailsScreenProps {
  event: SmartEvent;
  onBack: () => void;
}

export const EventDetailsScreen: React.FC<EventDetailsScreenProps> = ({
  event,
  onBack,
}) => {
  const [isRunningTest, setIsRunningTest] = useState(false);
  const [testResult, setTestResult] = useState<string | null>(null);

  const handleRunTest = () => {
    setIsRunningTest(true);
    setTestResult(null);
    setTimeout(() => {
      setIsRunningTest(false);
      setTestResult('Ping test successful (14ms latency). Signal strength is optimal (-67 dBm).');
    }, 1200);
  };

  const details = event.details || {
    cause: 'Wi-Fi gateway channel hop',
    impact: 'No activity was missed.',
    currentStatus: '✓ Connected',
    recommendedAction: 'No action required.',
    timeline: [
      { time: '10:18 AM', label: 'Connection lost', status: 'error' as const },
      { time: '10:24 AM', label: 'Connection restored', status: 'success' as const },
    ],
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
        <span className="text-xs font-medium text-slate-500">Event Analysis</span>
      </div>

      <div className="px-5 pt-5 space-y-4 max-w-lg mx-auto w-full">
        <div className="bg-slate-900/90 rounded-2xl p-5 border border-amber-500/30 relative overflow-hidden shadow-lg shadow-slate-950/40">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 shrink-0">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold text-white tracking-tight">{event.title}</h1>
              </div>
              <p className="text-xs text-slate-400 mt-1 font-mono">
                Event ID: {event.id} · {event.timeFormatted}
              </p>
            </div>
          </div>

          <div className="mt-4 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-sm text-slate-200 leading-relaxed font-medium">
            "{event.humanSummary}"
          </div>
        </div>

        <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 shadow-sm">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-indigo-400" />
            Event Sequence Timeline
          </h2>

          <div className="relative pl-6 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
            <div className="relative">
              <div className="absolute -left-[30px] top-0.5 w-5 h-5 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">Connection lost</span>
                <span className="text-xs font-mono font-semibold text-red-400 bg-red-500/10 px-2 py-0.5 rounded">
                  10:18 AM
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Hub stopped receiving heartbeat signal from gateway
              </p>
            </div>

            <div className="relative py-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full">
                <Clock className="w-3 h-3" />
                <span>Interruption Duration: {event.duration || '6 minutes'}</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[30px] top-0.5 w-5 h-5 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-white">Connection restored</span>
                <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  10:24 AM
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Automatically reconnected & backlogged telemetry synced
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              Duration
            </div>
            <div className="text-lg font-bold text-white mt-1">
              {event.duration || '6 minutes'}
            </div>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Impact
            </div>
            <div className="text-sm font-bold text-emerald-300 mt-1">
              {details.impact}
            </div>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Current status
            </div>
            <div className="text-base font-bold text-emerald-400 mt-1 flex items-center gap-1">
              <span>{details.currentStatus}</span>
            </div>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
            <div className="text-xs font-medium text-slate-400 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Recommended action
            </div>
            <div className="text-sm font-bold text-slate-200 mt-1">
              {details.recommendedAction}
            </div>
          </div>
        </div>

      
        <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-sky-400" />
            Why Did This Happen?
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            {details.cause || 'The gateway router underwent a brief channel hop during routine spectrum optimization. Smart Hub buffered event logs locally and transmitted them upon reconnection.'}
          </p>
        </div>

        <div className="bg-slate-900/90 p-4 rounded-2xl border border-indigo-500/20 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-bold text-white">Live Diagnostics</div>
              <div className="text-xs text-slate-400">Verify active connection health now</div>
            </div>
            <button
              onClick={handleRunTest}
              disabled={isRunningTest}
              className="inline-flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold px-3 py-2 rounded-xl transition-all disabled:opacity-50"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRunningTest ? 'animate-spin' : ''}`} />
              <span>{isRunningTest ? 'Testing...' : 'Test Connection'}</span>
            </button>
          </div>

          {testResult && (
            <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-xs font-medium text-emerald-300 flex items-center gap-2 animate-in fade-in duration-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{testResult}</span>
            </div>
          )}
        </div>

        <button
          onClick={onBack}
          className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold text-xs rounded-xl border border-slate-800 transition-colors"
        >
          Return to Home Overview
        </button>
      </div>
    </div>
  );
};
