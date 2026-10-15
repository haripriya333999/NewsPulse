import React from 'react';
import { TopicCluster } from '../types';
import { Zap, AlertCircle, TrendingUp, ArrowRight, ShieldAlert, Sparkles, Layers, Activity } from 'lucide-react';

interface EmergingViewProps {
  topics: TopicCluster[];
  onSelectTopic: (topic: TopicCluster) => void;
}

export const EmergingView: React.FC<EmergingViewProps> = ({
  topics,
  onSelectTopic
}) => {
  // Sort by growth rate descending (highest acceleration first)
  const emergingTopics = [...topics].sort((a, b) => b.growthRate - a.growthRate);

  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      {/* Header */}
      <div className="bg-[#1C120E] text-[#F7F1E8] p-6 sm:p-8 rounded-3xl border border-[#4A2C22] shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#C98B5B]/10 blur-3xl pointer-events-none" />

        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A1A15] border border-[#C98B5B]/30 text-xs text-[#C98B5B] font-bold">
            <Zap className="w-3.5 h-3.5" />
            EARLY DETECTION RADAR
          </div>

          <h1 className="text-3xl sm:text-4xl font-editorial font-bold text-[#FFFDF8]">
            Rising Now: Emerging Breakout Trends
          </h1>

          <p className="text-sm text-[#D9B99A] leading-relaxed">
            The data science engine tracks statistical baselines to discover topics whose coverage is rising at an unusual pace. Unlike general trending stories that may have been popular for months, these are newly observed subjects and developing stories breaking out right now.
          </p>
        </div>
      </div>

      {/* Grid of Breakouts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {emergingTopics.map((topic) => (
          <div
            key={topic.id}
            onClick={() => onSelectTopic(topic)}
            className="group cursor-pointer bg-[#FFFDF8] hover:bg-[#F7F1E8] border border-[#D9B99A]/60 hover:border-[#C98B5B] rounded-2xl p-6 transition-all shadow-xs flex flex-col justify-between space-y-4"
          >
            <div>
              {/* Top Anomaly Badge */}
              <div className="flex items-center justify-between text-xs mb-3">
                <span className="px-2.5 py-1 rounded-full bg-rose-50 text-rose-800 border border-rose-200 font-bold flex items-center gap-1.5 text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
                  Spike Velocity: +{topic.growthRate}%
                </span>
                <span className="text-[#75665D] font-mono text-[11px]">
                  {topic.category}
                </span>
              </div>

              <h2 className="text-xl font-editorial font-bold text-[#1C120E] group-hover:text-[#6B4030] transition-colors leading-snug mb-2">
                {topic.label}
              </h2>

              <p className="text-xs text-[#4A2C22] leading-relaxed line-clamp-3 mb-4">
                {topic.summary}
              </p>

              {/* Baseline vs Current Volume Comparison */}
              <div className="p-3 bg-[#F7F1E8]/70 rounded-xl border border-[#D9B99A]/40 space-y-2 text-xs">
                <div className="flex justify-between text-[#6B4030]">
                  <span>Previous Baseline Period:</span>
                  <span className="font-mono font-bold text-[#1C120E]">{topic.previousArticleCount} articles</span>
                </div>
                <div className="flex justify-between text-[#6B4030]">
                  <span>Current 7-Day Window:</span>
                  <span className="font-mono font-bold text-[#C98B5B]">{topic.currentArticleCount} articles (+{topic.growthRate}%)</span>
                </div>
                <div className="flex justify-between text-[#6B4030] pt-1 border-t border-[#D9B99A]/30">
                  <span>Independent Newsrooms:</span>
                  <span className="font-mono font-bold text-[#1C120E]">{topic.independentSourcesCount} publishers</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#D9B99A]/30 flex items-center justify-between text-xs">
              <span className="text-[#75665D] italic">
                "{topic.whyTrending.drivers[0]}"
              </span>
              <span className="text-[#C98B5B] font-bold group-hover:underline flex items-center gap-1 shrink-0 ml-2">
                Inspect <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
