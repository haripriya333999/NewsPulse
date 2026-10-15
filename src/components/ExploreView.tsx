import React, { useState, useEffect } from 'react';
import { TopicCluster } from '../types';
import { trendEngine } from '../services/trendEngine';
import {
  Search,
  ArrowUpRight,
  Clock,
  Sparkles,
  ExternalLink,
  Layers,
  CheckCircle2
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ExploreViewProps {
  initialQuery?: string;
  onSelectTopic: (topic: TopicCluster) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  initialQuery = '',
  onSelectTopic
}) => {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeTopic, setActiveTopic] = useState<TopicCluster | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([
    'AI regulation',
    'Quantum computing',
    'Electric vehicles'
  ]);
  const [isSearching, setIsSearching] = useState(false);

  const suggestedTopics = [
    'Semiconductors',
    'SpaceX Starship',
    'Cancer mRNA trials',
    'Cricket Champions Trophy',
    'Clean hydrogen',
    'UN Water Treaty'
  ];

  const performSearch = (query: string) => {
    if (!query.trim()) return;
    setIsSearching(true);

    // Add to recent searches
    setRecentSearches((prev) => [query, ...prev.filter((q) => q.toLowerCase() !== query.toLowerCase())].slice(0, 5));

    setTimeout(() => {
      const result = trendEngine.searchOrSynthesizeTopic(query);
      setActiveTopic(result);
      setIsSearching(false);
    }, 180);
  };

  useEffect(() => {
    if (initialQuery) {
      setSearchQuery(initialQuery);
      performSearch(initialQuery);
    } else {
      setActiveTopic(trendEngine.getAllTopics()[0]);
    }
  }, [initialQuery]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    performSearch(searchQuery);
  };

  return (
    <div className="space-y-10 pb-20 max-w-5xl mx-auto animate-fade-in">
      {/* Header & Search */}
      <div className="space-y-5 pt-4 border-b border-[#493027]/70 pb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-[#C98E78] uppercase tracking-wider">
          <span>03 — EXPLORE</span>
          <span className="text-[#704735]">•</span>
          <span className="text-[#BFA69B]">Search without category restrictions</span>
        </div>

        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-editorial font-bold text-[#F1DED1]">
            Search the global news stream
          </h1>
          <p className="text-sm text-[#BFA69B] max-w-xl">
            Query any company, person, technology, or event. The pipeline dynamically groups coverage and calculates trend velocity.
          </p>
        </div>

        {/* Universal Search Bar */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-2xl">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#92796B] absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search any phrase, topic or company..."
              className="w-full pl-11 pr-4 py-3 bg-[#281A16] border border-[#493027] rounded-xl text-sm text-[#F1DED1] placeholder-[#92796B] focus:outline-none focus:border-[#C98E78] transition-colors"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-[#C98E78] hover:bg-[#B77A50] text-[#160F0D] font-bold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-1.5 shrink-0"
          >
            {isSearching ? 'Analyzing...' : 'Analyze'} <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>

        {/* Recent & Suggested Topics */}
        <div className="space-y-2 pt-1 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[#92796B] font-mono">Recent:</span>
            {recentSearches.map((q) => (
              <button
                key={q}
                onClick={() => {
                  setSearchQuery(q);
                  performSearch(q);
                }}
                className="px-2.5 py-0.5 rounded-md bg-[#281A16] hover:bg-[#35221B] text-[#BFA69B] border border-[#493027] text-[11px] font-mono transition-colors"
              >
                {q}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-[#92796B] font-mono">Suggested:</span>
            {suggestedTopics.map((s) => (
              <button
                key={s}
                onClick={() => {
                  setSearchQuery(s);
                  performSearch(s);
                }}
                className="text-[#BFA69B] hover:text-[#C98E78] text-[11px] underline decoration-[#493027] hover:decoration-[#C98E78] transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Result Topic Dossier */}
      {activeTopic && (
        <div className="p-6 sm:p-8 rounded-2xl bg-[#281A16] border border-[#493027] space-y-6">
          {/* Header Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#493027]/60 pb-4">
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#35221B] text-[#C98E78] border border-[#493027]">
                {activeTopic.category}
              </span>
              <span className="text-[#92796B] font-mono">• {activeTopic.region}</span>
              <span className="text-[#B77A50] font-mono font-bold">
                +{activeTopic.growthRate}% {activeTopic.velocityStatus}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-[#F1DED1] bg-[#160F0D] px-2.5 py-1 rounded border border-[#493027]">
                Score: <strong className="text-[#C98E78]">{activeTopic.trendScore}/100</strong>
              </span>
              <button
                onClick={() => onSelectTopic(activeTopic)}
                className="px-3.5 py-1 bg-[#C98E78] hover:bg-[#B77A50] text-[#160F0D] text-xs font-bold rounded-lg flex items-center gap-1 transition-colors"
              >
                Full Story ↗
              </button>
            </div>
          </div>

          {/* Title & Tagline */}
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#F1DED1] leading-snug">
              {activeTopic.label}
            </h2>
            <p className="text-xs sm:text-sm text-[#BFA69B] italic font-editorial">
              "{activeTopic.tagline}"
            </p>
          </div>

          {/* Synthesized Briefing */}
          <div className="p-4 bg-[#160F0D] rounded-xl border border-[#493027] space-y-3 text-xs sm:text-sm leading-relaxed">
            <p className="text-[#F1DED1] font-sans">{activeTopic.summary}</p>
            <div className="pt-2 border-t border-[#493027]/60 flex items-start gap-2 text-xs">
              <CheckCircle2 className="w-4 h-4 text-[#C98E78] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#C98E78]">Bottom line: </strong>
                <span className="text-[#BFA69B]">{activeTopic.purposeConclusion}</span>
              </div>
            </div>
          </div>

          {/* Why Trending Evidence */}
          <div className="p-4 bg-[#35221B]/40 rounded-xl border border-[#493027] space-y-2 text-xs">
            <div className="flex items-center justify-between text-[#C98E78] font-mono">
              <span className="font-semibold uppercase tracking-wider text-[11px]">Why is this trending?</span>
              <span className="text-[11px] text-[#92796B]">{activeTopic.whyTrending.comparisonPeriod}</span>
            </div>
            <p className="text-[#F1DED1]">
              {activeTopic.whyTrending.evidenceSummary}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
              {activeTopic.whyTrending.drivers.map((d, i) => (
                <div key={i} className="p-2 bg-[#281A16] rounded-lg border border-[#493027] text-[#BFA69B]">
                  <span className="text-[#C98E78]">#{i + 1}</span> {d}
                </div>
              ))}
            </div>
          </div>

          {/* 7-Day Trajectory */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-[#92796B]">
              <span className="text-[#F1DED1] font-semibold">7-Day Coverage Volume</span>
              <span>{activeTopic.currentArticleCount} articles analyzed</span>
            </div>
            <div className="h-36 w-full bg-[#160F0D] p-3 rounded-xl border border-[#493027]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activeTopic.historicalVolume}>
                  <XAxis dataKey="timeLabel" stroke="#92796B" fontSize={10} />
                  <YAxis stroke="#92796B" fontSize={10} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#1E130F',
                      borderColor: '#493027',
                      color: '#F1DED1',
                      borderRadius: '8px',
                      fontSize: '11px'
                    }}
                  />
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
          </div>

          {/* Articles Citations */}
          <div className="space-y-2.5 pt-1">
            <span className="text-xs font-mono text-[#C98E78] uppercase tracking-wider block">
              Reporting Sources & Citations ({activeTopic.articles.length})
            </span>
            <div className="space-y-2">
              {activeTopic.articles.map((art) => (
                <div
                  key={art.id}
                  className="p-3 bg-[#160F0D] rounded-xl border border-[#493027] hover:border-[#C98E78]/50 transition-colors text-xs space-y-1"
                >
                  <div className="flex items-center justify-between text-[11px] text-[#92796B] font-mono">
                    <span className="text-[#F1DED1] font-semibold">{art.source}</span>
                    <span>{art.publishedAt}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-[#F1DED1]">{art.title}</h4>
                  <p className="text-xs text-[#BFA69B] line-clamp-1">{art.description}</p>
                  <a
                    href={art.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-mono text-[#C98E78] hover:underline inline-flex items-center gap-1 pt-0.5"
                  >
                    Source article <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
