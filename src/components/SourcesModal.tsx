import React from 'react';
import { CONNECTED_SOURCES } from '../data/mockNewsData';
import { X, Globe, ShieldCheck } from 'lucide-react';

interface SourcesModalProps {
  onClose: () => void;
}

export const SourcesModal: React.FC<SourcesModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#160F0D]/90 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-3xl bg-[#281A16] border border-[#493027] rounded-2xl shadow-2xl overflow-hidden text-[#F1DED1] max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1E130F] text-[#F1DED1] px-6 py-4 flex items-center justify-between border-b border-[#493027]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#35221B] text-[#C98E78] border border-[#493027]">
              <Globe className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-editorial text-lg font-bold">Monitored News Sources</h3>
              <p className="text-[11px] font-mono text-[#92796B]">Connected newsrooms, wire services, and data freshness</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-[#35221B] text-[#BFA69B] hover:text-[#F1DED1]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1 bg-[#281A16] text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CONNECTED_SOURCES.map((src) => (
              <div
                key={src.name}
                className="p-3.5 bg-[#160F0D] rounded-xl border border-[#493027] flex flex-col justify-between space-y-2"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[#F1DED1]">{src.name}</span>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" /> Synced
                  </span>
                </div>

                <div className="space-y-1 text-[#BFA69B] text-[11px] font-mono">
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span className="text-[#F1DED1] font-medium">{src.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Articles Ingested:</span>
                    <span className="text-[#F1DED1]">{src.articlesCollected.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Last Updated:</span>
                    <span className="text-[#C98E78]">{src.freshnessMinutes}m ago</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Reliability Score:</span>
                    <span className="text-emerald-400 font-bold">{src.reliabilityScore}/100</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-[#35221B] rounded-xl border border-[#493027] text-xs text-[#BFA69B] space-y-1 leading-relaxed">
            <div className="flex items-center gap-1.5 text-[#C98E78] font-mono font-bold text-xs uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              Source Integrity Principle
            </div>
            <p>
              NewPulse weights trend velocity by <strong>independent publisher diversity</strong>. A spike reported by 20 distinct media houses carries far higher confidence than 100 syndicated duplicates from a single wire.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#1E130F] px-6 py-3 border-t border-[#493027] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#35221B] hover:bg-[#493027] text-[#F1DED1] text-xs font-semibold rounded-lg border border-[#493027] font-mono"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
