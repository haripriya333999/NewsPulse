import React from 'react';
import { TopicCluster } from '../types';
import { TrendingUp, ArrowUpRight, Clock, ExternalLink } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

interface StorylinesViewProps {
  topics: TopicCluster[];
  onSelectTopic: (topic: TopicCluster) => void;
}

export const StorylinesView: React.FC<StorylinesViewProps> = ({
  topics,
  onSelectTopic
}) => {
  return (
    <div className="space-y-8 pb-20 max-w-5xl mx-auto animate-fade-in">
      {/* Editorial Header */}
      <div className="space-y-2 pt-4 border-b border-[#493027]/70 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#C98E78] uppercase tracking-wider">
          <span>04 — STORIES</span>
          <span className="text-[#704735]">•</span>
          <span className="text-[#BFA69B]">Narrative clustering</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-editorial font-bold text-[#F1DED1]">
          Understand the narrative
        </h1>
        <p className="text-sm text-[#BFA69B] max-w-xl">
          Related articles grouped into chronological storylines, comparing publisher angles and timeline milestones.
        </p>
      </div>

      {/* Clean Two-Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {topics.map((story) => (
          <div
            key={story.id}
            onClick={() => onSelectTopic(story)}
            className="p-5 rounded-2xl bg-[#281A16] hover:bg-[#35221B] border border-[#493027] hover:border-[#C98E78]/60 cursor-pointer transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-2.5">
              {/* Category & Growth */}
              <div className="flex items-center justify-between text-xs">
                <span className="text-[10px] font-mono text-[#C98E78] uppercase tracking-wider">
                  {story.category}
                </span>
                <span className="font-mono text-xs text-[#B77A50] font-bold">
                  +{story.growthRate}% {story.velocityStatus}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-lg font-editorial font-bold text-[#F1DED1] group-hover:text-[#C98E78] transition-colors leading-snug">
                {story.label}
              </h2>

              {/* 1-2 line summary */}
              <p className="text-xs text-[#BFA69B] line-clamp-2 leading-relaxed">
                {story.summary}
              </p>

              {/* Key Event / Milestone Snippet */}
              {story.timeline[0] && (
                <div className="p-2.5 bg-[#160F0D] rounded-lg border border-[#493027] text-xs space-y-0.5">
                  <div className="flex items-center justify-between text-[10px] text-[#92796B] font-mono">
                    <span className="text-[#C98E78] font-semibold">{story.timeline[0].time}</span>
                    <span>{story.timeline[0].source}</span>
                  </div>
                  <div className="text-[#F1DED1] text-xs font-medium line-clamp-1">
                    {story.timeline[0].headline}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom: Sparkline + Action */}
            <div className="space-y-2 pt-2 border-t border-[#493027]/50">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#92796B]">
                <span>{story.currentArticleCount} articles • {story.independentSourcesCount} publishers</span>
                <span className="text-[#C98E78] group-hover:translate-x-0.5 transition-transform">
                  Explore narrative ↗
                </span>
              </div>

              <div className="h-10 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={story.historicalVolume}>
                    <Area
                      type="monotone"
                      dataKey="volume"
                      stroke="#C98E78"
                      strokeWidth={1.5}
                      fill="#C98E78"
                      fillOpacity={0.12}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
