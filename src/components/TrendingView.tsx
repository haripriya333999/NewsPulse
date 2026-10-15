import React, { useState } from 'react';
import { TopicCluster, Category } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

interface TrendingViewProps {
  topics: TopicCluster[];
  onSelectTopic: (topic: TopicCluster) => void;
}

export const TrendingView: React.FC<TrendingViewProps> = ({
  topics,
  onSelectTopic
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [timePeriod, setTimePeriod] = useState<'24H' | '7D' | '30D'>('7D');

  const categories: Category[] = [
    'All',
    'Technology & AI',
    'World & Politics',
    'Business & Economy',
    'Science & Space',
    'Health & Medicine',
    'Climate & Energy',
    'Sports',
    'India & Regional'
  ];

  const filteredTopics = topics
    .filter((t) => selectedCategory === 'All' || t.category === selectedCategory)
    .sort((a, b) => b.growthRate - a.growthRate);

  return (
    <div className="space-y-8 pb-20 max-w-5xl mx-auto animate-fade-in">
      {/* Editorial Header */}
      <div className="space-y-4 pt-4 border-b border-[#493027]/70 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#C98E78] uppercase tracking-wider">
          <span>02 — TRENDS</span>
          <span className="text-[#704735]">•</span>
          <span className="text-[#BFA69B]">Ranked by measured news growth</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-editorial font-bold text-[#F1DED1]">
              Discover what's growing
            </h1>
            <p className="text-sm text-[#BFA69B] mt-1 max-w-xl">
              Topics ranked by coverage acceleration over their preceding baseline period.
            </p>
          </div>

          {/* Time Period Selector */}
          <div className="flex items-center gap-1 bg-[#281A16] p-1 rounded-lg border border-[#493027] text-xs font-mono shrink-0">
            {(['24H', '7D', '30D'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setTimePeriod(period)}
                className={`px-3 py-1 rounded transition-colors ${
                  timePeriod === period
                    ? 'bg-[#C98E78] text-[#160F0D] font-bold'
                    : 'text-[#BFA69B] hover:text-[#F1DED1]'
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                selectedCategory === cat
                  ? 'bg-[#493027] text-[#F1DED1] border border-[#C98E78]/50'
                  : 'text-[#92796B] hover:text-[#F1DED1] hover:bg-[#281A16]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Ranked List of Topics with Tiny Copper Trendlines */}
      <div className="space-y-3">
        {filteredTopics.map((topic, index) => (
          <div
            key={topic.id}
            onClick={() => onSelectTopic(topic)}
            className="p-4 sm:p-5 rounded-xl bg-[#281A16] hover:bg-[#35221B] border border-[#493027] hover:border-[#C98E78]/60 cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
          >
            {/* Left: Index, Title, Description */}
            <div className="flex items-start gap-4 flex-1">
              <span className="font-mono text-sm text-[#704735] font-bold pt-0.5 shrink-0">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="space-y-1">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-[10px] font-mono text-[#C98E78] uppercase">
                    {topic.category}
                  </span>
                  <span className="text-[#704735]">•</span>
                  <span className="text-[11px] text-[#92796B]">{topic.region}</span>
                </div>

                <h2 className="text-base sm:text-lg font-editorial font-bold text-[#F1DED1] group-hover:text-[#C98E78] transition-colors leading-snug">
                  {topic.label}
                </h2>

                <p className="text-xs text-[#BFA69B] line-clamp-1 max-w-2xl leading-relaxed">
                  {topic.summary}
                </p>
              </div>
            </div>

            {/* Right: Tiny Trendline + Metrics */}
            <div className="flex items-center justify-between sm:justify-end gap-6 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#493027]/40">
              {/* Tiny copper trendline */}
              <div className="w-24 h-9">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={topic.historicalVolume}>
                    <Area
                      type="monotone"
                      dataKey="volume"
                      stroke="#C98E78"
                      strokeWidth={1.5}
                      fill="#C98E78"
                      fillOpacity={0.15}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Coverage Metrics */}
              <div className="text-right font-mono text-xs space-y-0.5">
                <div className="text-[#B77A50] font-bold">
                  +{topic.growthRate}%
                </div>
                <div className="text-[11px] text-[#92796B]">
                  {topic.currentArticleCount} arts • {topic.independentSourcesCount} sources
                </div>
              </div>

              <span className="text-[#C98E78] group-hover:translate-x-1 transition-transform hidden sm:inline">
                ↗
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
