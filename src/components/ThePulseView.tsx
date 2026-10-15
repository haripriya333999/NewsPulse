import React, { useState } from 'react';
import { TopicCluster } from '../types';
import {
  Search,
  ArrowUpRight,
  TrendingUp,
  Zap,
  Layers,
  Sparkles
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

interface ThePulseViewProps {
  topics: TopicCluster[];
  onSelectTopic: (topic: TopicCluster) => void;
  onSearchTopic: (query: string) => void;
  onNavigateTab: (tab: any) => void;
}

export const ThePulseView: React.FC<ThePulseViewProps> = ({
  topics,
  onSelectTopic,
  onSearchTopic,
  onNavigateTab
}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearchTopic(searchInput.trim());
    }
  };

  // Rising topics
  const risingTopics = topics.filter((t) => t.velocityStatus === 'emerging' || t.growthRate >= 180).slice(0, 3);
  
  // Connected stories
  const connectedStories = topics.slice(0, 3);

  return (
    <div className="space-y-16 pb-20 max-w-5xl mx-auto animate-fade-in">
      {/* Editorial Cover Hero */}
      <section className="pt-6 sm:pt-12 space-y-8">
        <div className="flex items-center gap-3 text-xs font-mono">
          <span className="text-[#C98E78] uppercase tracking-widest font-semibold">
            GLOBAL NEWS INTELLIGENCE
          </span>
          <span className="text-[#704735]">•</span>
          <span className="flex items-center gap-1.5 text-[#BFA69B]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B77A50] animate-pulse" />
            Live data pipeline synced
          </span>
        </div>

        {/* Oversized Serif Headline */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-editorial font-bold tracking-tight text-[#F1DED1] leading-[1.08]">
            The world moves. <br />
            <span className="text-[#C98E78] italic font-editorial">Discover what's next.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#BFA69B] max-w-xl font-sans leading-relaxed pt-2">
            Explore emerging topics, connect related stories, and understand how news coverage changes over time.
          </p>
        </div>

        {/* Universal Search Field */}
        <div className="space-y-3 max-w-2xl">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#92796B] absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search any topic, event, person, or keyword..."
                className="w-full pl-11 pr-4 py-3.5 bg-[#281A16] border border-[#493027] rounded-xl text-sm text-[#F1DED1] placeholder-[#92796B] focus:outline-none focus:border-[#C98E78] transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3.5 bg-[#C98E78] hover:bg-[#B77A50] text-[#160F0D] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5 shrink-0"
            >
              Analyze <ArrowUpRight className="w-4 h-4" />
            </button>
          </form>

          {/* Search suggestions */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-[#92796B]">
            <span className="font-mono">Try:</span>
            {['AI regulation', 'electric vehicles', 'space exploration', 'semiconductors'].map((term) => (
              <button
                key={term}
                onClick={() => onSearchTopic(term)}
                className="text-[#BFA69B] hover:text-[#C98E78] underline decoration-[#493027] hover:decoration-[#C98E78] transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Pulse */}
      <section className="space-y-8 pt-6 border-t border-[#493027]/60">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#F1DED1]">
            Today's pulse
          </h2>
          <button
            onClick={() => onNavigateTab('trends')}
            className="text-xs font-mono text-[#C98E78] hover:text-[#F1DED1] flex items-center gap-1 transition-colors"
          >
            Explore trends <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Two-Column Grid: Rising topics & Connected stories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Column 1: Rising Topics */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#493027]/70 pb-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C98E78]">
                01 — Rising topics
              </span>
              <span className="text-[11px] text-[#92796B]">What is gaining coverage?</span>
            </div>

            <div className="space-y-3">
              {risingTopics.map((topic) => (
                <div
                  key={topic.id}
                  onClick={() => onSelectTopic(topic)}
                  className="p-4 rounded-xl bg-[#281A16] hover:bg-[#35221B] border border-[#493027] hover:border-[#C98E78]/50 cursor-pointer transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono text-[#C98E78] uppercase">
                      {topic.category}
                    </span>
                    <span className="font-mono text-xs text-[#B77A50] font-bold">
                      +{topic.growthRate}% spike
                    </span>
                  </div>

                  <h3 className="text-base font-editorial font-bold text-[#F1DED1] group-hover:text-[#C98E78] transition-colors leading-snug">
                    {topic.label}
                  </h3>

                  <p className="text-xs text-[#BFA69B] line-clamp-2 leading-relaxed">
                    {topic.summary}
                  </p>

                  <div className="pt-1 flex items-center justify-between text-[11px] text-[#92796B] font-mono">
                    <span>{topic.currentArticleCount} articles • {topic.independentSourcesCount} sources</span>
                    <span className="text-[#C98E78] group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                      Explore ↗
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Connected Stories */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[#493027]/70 pb-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C98E78]">
                02 — Connected stories
              </span>
              <span className="text-[11px] text-[#92796B]">How are events related?</span>
            </div>

            <div className="space-y-3">
              {connectedStories.map((story) => (
                <div
                  key={story.id}
                  onClick={() => onSelectTopic(story)}
                  className="p-4 rounded-xl bg-[#281A16] hover:bg-[#35221B] border border-[#493027] hover:border-[#C98E78]/50 cursor-pointer transition-all space-y-2.5 group"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono text-[#92796B] uppercase">
                      Story Narrative
                    </span>
                    <span className="font-mono text-[11px] text-[#BFA69B]">
                      {story.articles.length} verified reports
                    </span>
                  </div>

                  <h3 className="text-base font-editorial font-bold text-[#F1DED1] group-hover:text-[#C98E78] transition-colors leading-snug">
                    {story.label}
                  </h3>

                  {/* Tiny copper-colored trendline */}
                  <div className="h-8 w-full pt-1">
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

                  <div className="pt-1 flex items-center justify-between text-[11px] text-[#92796B]">
                    <span className="italic line-clamp-1 max-w-[80%]">"{story.tagline}"</span>
                    <span className="text-[#C98E78] font-mono shrink-0">Details ↗</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
