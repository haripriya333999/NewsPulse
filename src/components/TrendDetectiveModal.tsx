import React, { useState } from 'react';
import { TopicCluster } from '../types';
import { X, HelpCircle, CheckCircle, AlertTriangle, ShieldCheck, Zap, BarChart2 } from 'lucide-react';

interface TrendDetectiveModalProps {
  topics: TopicCluster[];
  onClose: () => void;
  onSelectTopic: (topic: TopicCluster) => void;
}

export const TrendDetectiveModal: React.FC<TrendDetectiveModalProps> = ({
  topics,
  onClose,
  onSelectTopic
}) => {
  const [activeMode, setActiveMode] = useState<'detective' | 'signal_noise'>('detective');
  const [selectedGuess, setSelectedGuess] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);

  // Contestants for Trend Detective
  const candidates = topics.slice(0, 4);
  const highestGrowthTopic = [...candidates].sort((a, b) => b.growthRate - a.growthRate)[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C120E]/85 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-[#FFFDF8] border border-[#D9B99A] rounded-2xl shadow-2xl overflow-hidden text-[#1C120E]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#2A1A15] text-[#F7F1E8] px-6 py-4 flex items-center justify-between border-b border-[#4A2C22]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#C98B5B]/30 text-[#D9B99A]">
              <HelpCircle className="w-4 h-4 text-[#C98B5B]" />
            </span>
            <div>
              <h3 className="font-editorial text-lg font-bold">Trend Detective & Signal Lab</h3>
              <p className="text-[11px] text-[#D9B99A]/70">Evaluate news signals, detect genuine breakouts, and test your news radar.</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-[#4A2C22] text-[#F7F1E8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector */}
        <div className="flex border-b border-[#D9B99A]/40 bg-[#F7F1E8] text-xs font-semibold">
          <button
            onClick={() => {
              setActiveMode('detective');
              setRevealed(false);
              setSelectedGuess(null);
            }}
            className={`flex-1 py-3 text-center transition-colors ${
              activeMode === 'detective'
                ? 'bg-[#FFFDF8] border-b-2 border-[#C98B5B] text-[#4A2C22]'
                : 'text-[#75665D] hover:text-[#1C120E]'
            }`}
          >
            🕵️‍♂️ Challenge 1: The Trend Detective
          </button>
          <button
            onClick={() => {
              setActiveMode('signal_noise');
              setRevealed(false);
              setSelectedGuess(null);
            }}
            className={`flex-1 py-3 text-center transition-colors ${
              activeMode === 'signal_noise'
                ? 'bg-[#FFFDF8] border-b-2 border-[#C98B5B] text-[#4A2C22]'
                : 'text-[#75665D] hover:text-[#1C120E]'
            }`}
          >
            📡 Challenge 2: Signal vs Noise
          </button>
        </div>

        {/* Mode 1: Trend Detective */}
        {activeMode === 'detective' && (
          <div className="p-6 space-y-4">
            <div>
              <h4 className="text-sm font-bold text-[#1C120E] mb-1">
                Which of these 4 developing stories recorded the highest velocity surge this week?
              </h4>
              <p className="text-xs text-[#75665D]">
                Data science evaluates early news volume, publisher diversity, and citation spread. Pick your prediction:
              </p>
            </div>

            <div className="space-y-2.5">
              {candidates.map((c) => {
                const isSelected = selectedGuess === c.id;
                const isWinner = c.id === highestGrowthTopic.id;
                return (
                  <button
                    key={c.id}
                    disabled={revealed}
                    onClick={() => setSelectedGuess(c.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs flex items-center justify-between ${
                      revealed
                        ? isWinner
                          ? 'border-emerald-600 bg-emerald-50 text-emerald-950 font-bold'
                          : isSelected
                          ? 'border-rose-400 bg-rose-50 text-rose-950 opacity-80'
                          : 'border-[#D9B99A]/40 bg-[#FFFDF8] opacity-60'
                        : isSelected
                        ? 'border-[#C98B5B] bg-[#C98B5B]/10 text-[#1C120E] font-semibold'
                        : 'border-[#D9B99A]/50 bg-[#FFFDF8] hover:border-[#C98B5B] text-[#2A1A15]'
                    }`}
                  >
                    <div>
                      <span className="font-bold text-sm block mb-0.5">{c.label}</span>
                      <span className="text-[#6B4030]">{c.category} • {c.region}</span>
                    </div>

                    {revealed ? (
                      <span className={`px-2 py-1 rounded font-mono text-xs ${isWinner ? 'bg-emerald-200 text-emerald-900 font-bold' : 'bg-gray-100 text-gray-700'}`}>
                        +{c.growthRate}%
                      </span>
                    ) : (
                      <span className="text-[#75665D] text-xs">Select</span>
                    )}
                  </button>
                );
              })}
            </div>

            {!revealed ? (
              <button
                disabled={!selectedGuess}
                onClick={() => setRevealed(true)}
                className="w-full py-2.5 bg-[#2A1A15] hover:bg-[#1C120E] text-[#F7F1E8] rounded-xl text-xs font-bold transition-colors disabled:opacity-40"
              >
                Verify With Observed Data Science Metrics
              </button>
            ) : (
              <div className="p-4 bg-[#F7F1E8] rounded-xl border border-[#D9B99A]/60 text-xs space-y-2">
                <div className="flex items-center gap-2 font-bold text-sm text-[#1C120E]">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  Winner: {highestGrowthTopic.label} (+{highestGrowthTopic.growthRate}% growth)
                </div>
                <p className="text-[#4A2C22]">
                  {highestGrowthTopic.whyTrending.evidenceSummary}
                </p>
                <div className="pt-2 flex justify-between items-center">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectTopic(highestGrowthTopic);
                    }}
                    className="text-xs font-bold text-[#C98B5B] hover:underline"
                  >
                    Inspect Full {highestGrowthTopic.label} Dossier →
                  </button>
                  <button
                    onClick={() => {
                      setRevealed(false);
                      setSelectedGuess(null);
                    }}
                    className="text-xs text-[#75665D] hover:text-[#1C120E]"
                  >
                    Play Again
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Mode 2: Signal vs Noise */}
        {activeMode === 'signal_noise' && (
          <div className="p-6 space-y-4">
            <div>
              <h4 className="text-sm font-bold text-[#1C120E] mb-1">
                How NewPulse distinguishes Authentic Breakouts from Syndicated Noise
              </h4>
              <p className="text-xs text-[#75665D]">
                A major challenge in news intelligence: 50 automated aggregator sites republishing the exact same AP wire headline is NOT 50 distinct sources!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-4 bg-[#FFFDF8] rounded-xl border border-rose-200">
                <div className="flex items-center gap-1.5 text-rose-700 font-bold mb-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Synthesized Noise (Trap)
                </div>
                <p className="text-[#4A2C22] leading-relaxed">
                  High raw headline count (e.g., 200 posts in 1 hour), but MinHash similarity reveals 94% text duplication originating from a single syndicated press release.
                </p>
                <div className="mt-3 text-[11px] font-mono text-rose-800 bg-rose-50 p-1.5 rounded">
                  Source Diversity Score: &lt;15% (Flagged)
                </div>
              </div>

              <div className="p-4 bg-[#FFFDF8] rounded-xl border border-emerald-200">
                <div className="flex items-center gap-1.5 text-emerald-700 font-bold mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  Authentic Trend Signal
                </div>
                <p className="text-[#4A2C22] leading-relaxed">
                  Independent reporting from diverse editorial desks (e.g. Reuters, BBC, The Hindu, Nikkei) with distinct linguistic angles, investigative quotes, and persistent multi-day trajectory.
                </p>
                <div className="mt-3 text-[11px] font-mono text-emerald-800 bg-emerald-50 p-1.5 rounded">
                  Source Diversity Score: &gt;80% (Verified)
                </div>
              </div>
            </div>

            <div className="p-3 bg-[#F7F1E8] rounded-lg border border-[#D9B99A]/50 text-xs text-[#6B4030]">
              💡 <strong>Data Science Rule:</strong> In NewPulse, trend scores penalize duplicate syndication and heavily reward verified multi-newsroom independence.
            </div>
          </div>
        )}

        <div className="bg-[#F7F1E8] px-6 py-3 border-t border-[#D9B99A]/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#2A1A15] text-[#F7F1E8] text-xs font-semibold rounded-lg hover:bg-[#1C120E]"
          >
            Close Lab
          </button>
        </div>
      </div>
    </div>
  );
};
