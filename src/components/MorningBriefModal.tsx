import React, { useState } from 'react';
import { TopicCluster } from '../types';
import { X, Sparkles, Volume2, Play, Pause, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';

interface MorningBriefModalProps {
  topics: TopicCluster[];
  onClose: () => void;
  onSelectTopic: (topic: TopicCluster) => void;
}

export const MorningBriefModal: React.FC<MorningBriefModalProps> = ({
  topics,
  onClose,
  onSelectTopic
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Top 3 Major Trends, 2 Emerging Stories, 1 Overlooked
  const majorTrends = topics.slice(0, 3);
  const emergingStories = topics.filter((t) => t.velocityStatus === 'emerging' || t.growthRate > 200).slice(0, 2);
  const overlookedStory = topics[topics.length - 1];

  const briefItems = [
    ...majorTrends.map((t) => ({ type: 'Major Trend', topic: t, badge: 'High Volume' })),
    ...emergingStories.map((t) => ({ type: 'Emerging Signal', topic: t, badge: 'Rapid Surge' })),
    { type: 'Overlooked Signal', topic: overlookedStory, badge: 'High Potential' }
  ];

  const current = briefItems[currentSlide];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C120E]/85 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-2xl bg-[#FFFDF8] border border-[#D9B99A] rounded-2xl shadow-2xl overflow-hidden text-[#1C120E]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-[#2A1A15] text-[#F7F1E8] px-6 py-4 flex items-center justify-between border-b border-[#4A2C22]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#C98B5B]/30 text-[#D9B99A]">
              <Sparkles className="w-4 h-4 text-[#C98B5B]" />
            </span>
            <div>
              <h3 className="font-editorial text-lg font-bold">60-Second Morning Intelligence Brief</h3>
              <p className="text-[11px] text-[#D9B99A]/70">Curated daily synthesis: 3 major trends • 2 emerging signals • 1 overlooked story</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-[#4A2C22] text-[#F7F1E8]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex w-full h-1 bg-[#D9B99A]/30">
          {briefItems.map((_, i) => (
            <div
              key={i}
              className={`flex-1 transition-all duration-300 ${
                i <= currentSlide ? 'bg-[#C98B5B]' : 'bg-transparent'
              }`}
            />
          ))}
        </div>

        {/* Slide Body */}
        <div className="p-6 space-y-5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold uppercase tracking-wider text-[#C98B5B] bg-[#C98B5B]/10 px-2.5 py-0.5 rounded border border-[#C98B5B]/20">
              {current.type} ({currentSlide + 1} of {briefItems.length})
            </span>
            <span className="text-[#75665D] font-mono">
              +{current.topic.growthRate}% coverage growth
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-editorial font-bold text-[#1C120E] leading-snug">
            {current.topic.label}
          </h2>

          <div className="p-4 bg-[#F7F1E8] rounded-xl border border-[#D9B99A]/50 text-sm leading-relaxed text-[#2A1A15]">
            <p className="font-sans mb-3">
              {current.topic.summary}
            </p>
            <div className="pt-2 border-t border-[#D9B99A]/40 flex items-center justify-between text-xs text-[#6B4030]">
              <span className="font-medium">Strategic takeaway:</span>
              <span className="italic font-editorial text-right max-w-[80%] line-clamp-1">
                {current.topic.purposeConclusion}
              </span>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 text-center text-xs">
            <div className="p-2.5 bg-[#FFFDF8] border border-[#D9B99A]/40 rounded-lg">
              <span className="block text-[#75665D]">Articles</span>
              <span className="font-bold text-sm text-[#1C120E]">{current.topic.currentArticleCount}</span>
            </div>
            <div className="p-2.5 bg-[#FFFDF8] border border-[#D9B99A]/40 rounded-lg">
              <span className="block text-[#75665D]">Sources</span>
              <span className="font-bold text-sm text-[#1C120E]">{current.topic.independentSourcesCount} outlets</span>
            </div>
            <div className="p-2.5 bg-[#FFFDF8] border border-[#D9B99A]/40 rounded-lg">
              <span className="block text-[#75665D]">Trend Score</span>
              <span className="font-bold text-sm text-[#C98B5B]">{current.topic.trendScore}/100</span>
            </div>
          </div>
        </div>

        {/* Modal Controls */}
        <div className="bg-[#F7F1E8] px-6 py-4 border-t border-[#D9B99A]/40 flex items-center justify-between">
          <button
            onClick={() => {
              onClose();
              onSelectTopic(current.topic);
            }}
            className="text-xs font-bold text-[#C98B5B] hover:text-[#A86A3D] flex items-center gap-1"
          >
            Open Full Story Dossier <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide((prev) => Math.max(0, prev - 1))}
              disabled={currentSlide === 0}
              className="px-3 py-1.5 rounded-lg border border-[#D9B99A] text-xs font-semibold disabled:opacity-40 hover:bg-[#FFFDF8]"
            >
              Previous
            </button>
            <button
              onClick={() => {
                if (currentSlide < briefItems.length - 1) {
                  setCurrentSlide((prev) => prev + 1);
                } else {
                  onClose();
                }
              }}
              className="px-4 py-1.5 rounded-lg bg-[#2A1A15] text-[#F7F1E8] text-xs font-semibold hover:bg-[#1C120E] flex items-center gap-1"
            >
              {currentSlide < briefItems.length - 1 ? (
                <>Next Story <ChevronRight className="w-3.5 h-3.5" /></>
              ) : (
                'Finish Brief'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
