import React, { useState, useEffect } from 'react';
import { TopicCluster, PipelineState, PipelineConfig } from './types';
import { trendEngine } from './services/trendEngine';
import { Navbar, MainNavTab } from './components/Navbar';
import { ThePulseView } from './components/ThePulseView';
import { TrendingView } from './components/TrendingView';
import { ExploreView } from './components/ExploreView';
import { StorylinesView } from './components/StorylinesView';
import { AnalyticsView } from './components/AnalyticsView';
import { StoryDetailModal } from './components/StoryDetailModal';
import { WatchlistModal } from './components/WatchlistModal';
import { SourcesModal } from './components/SourcesModal';
import { PipelineSettingsModal } from './components/PipelineSettingsModal';
import { AcademicInfoModal } from './components/AcademicInfoModal';
import { Radio, GraduationCap, Settings, Globe } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<MainNavTab>('pulse');
  const [topics, setTopics] = useState<TopicCluster[]>([]);
  const [pipelineState, setPipelineState] = useState<PipelineState>(trendEngine.getPipelineState());
  const [pipelineConfig, setPipelineConfig] = useState<PipelineConfig>(trendEngine.getPipelineConfig());
  const [isPipelineRunning, setIsPipelineRunning] = useState(false);

  // Search query state for Explore tab
  const [exploreQuery, setExploreQuery] = useState('');

  // Modals state
  const [selectedTopic, setSelectedTopic] = useState<TopicCluster | null>(null);
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const [isSourcesOpen, setIsSourcesOpen] = useState(false);
  const [isPipelineSettingsOpen, setIsPipelineSettingsOpen] = useState(false);
  const [isAcademicModalOpen, setIsAcademicModalOpen] = useState(false);

  // Watchlist persisted in localStorage
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('newpulse_watchlist');
      return saved ? JSON.parse(saved) : ['topic-ai-reasoning', 'topic-india-semiconductors'];
    } catch {
      return ['topic-ai-reasoning'];
    }
  });

  useEffect(() => {
    setTopics(trendEngine.getAllTopics());
  }, []);

  const handleToggleBookmark = (topicId: string) => {
    setBookmarkedIds((prev) => {
      const updated = prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId];
      try {
        localStorage.setItem('newpulse_watchlist', JSON.stringify(updated));
      } catch (e) {
        // ignore
      }
      return updated;
    });
  };

  const handleRunPipeline = async () => {
    if (isPipelineRunning) return;
    setIsPipelineRunning(true);
    try {
      const newState = await trendEngine.executePipeline((st) => {
        setPipelineState(st);
      });
      setPipelineState(newState);
      setTopics([...trendEngine.getAllTopics()]);
    } finally {
      setIsPipelineRunning(false);
    }
  };

  const handleSearchSubmit = (query: string) => {
    setExploreQuery(query);
    setActiveTab('explore');
  };

  const bookmarkedTopics = topics.filter((t) => bookmarkedIds.includes(t.id));

  return (
    <div className="min-h-screen bg-[#160F0D] text-[#F1DED1] flex flex-col font-sans selection:bg-[#C98E78]/30 selection:text-[#F1DED1]">
      {/* 5-Destination Editorial Navbar */}
      <Navbar
        activeTab={activeTab}
        onTabChange={(tab) => {
          setActiveTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPipelineSettings={() => setIsPipelineSettingsOpen(true)}
        onOpenSourcesModal={() => setIsSourcesOpen(true)}
        onOpenWatchlistModal={() => setIsWatchlistOpen(true)}
        onOpenAcademicModal={() => setIsAcademicModalOpen(true)}
        watchlistCount={bookmarkedIds.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {activeTab === 'pulse' && (
          <ThePulseView
            topics={topics}
            onSelectTopic={(t) => setSelectedTopic(t)}
            onSearchTopic={handleSearchSubmit}
            onNavigateTab={(tab) => {
              setActiveTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'trends' && (
          <TrendingView
            topics={topics}
            onSelectTopic={(t) => setSelectedTopic(t)}
          />
        )}

        {activeTab === 'explore' && (
          <ExploreView
            initialQuery={exploreQuery}
            onSelectTopic={(t) => setSelectedTopic(t)}
          />
        )}

        {activeTab === 'stories' && (
          <StorylinesView
            topics={topics}
            onSelectTopic={(t) => setSelectedTopic(t)}
          />
        )}

        {activeTab === 'analytics' && (
          <AnalyticsView
            topics={topics}
            onSelectTopic={(t) => setSelectedTopic(t)}
          />
        )}
      </main>

      {/* Minimal Dark Editorial Footer */}
      <footer className="mt-auto bg-[#1E130F] text-[#BFA69B] border-t border-[#493027] py-8 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-[#281A16] border border-[#493027] flex items-center justify-center text-[#C98E78]">
              <Radio className="w-3 h-3" />
            </div>
            <span className="font-editorial text-sm font-bold text-[#F1DED1]">
              NewPulse
            </span>
            <span className="text-[#704735]">•</span>
            <span className="text-[11px] text-[#92796B]">News Trend Intelligence System</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <button
              onClick={() => setIsAcademicModalOpen(true)}
              className="hover:text-[#F1DED1] flex items-center gap-1 transition-colors"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#C98E78]" />
              Hari Priya Yathirajula (324103282046)
            </button>
            <span className="text-[#704735]">•</span>
            <button
              onClick={() => setIsPipelineSettingsOpen(true)}
              className="hover:text-[#F1DED1] flex items-center gap-1 transition-colors"
            >
              <Settings className="w-3.5 h-3.5 text-[#C98E78]" />
              Pipeline
            </button>
            <span className="text-[#704735]">•</span>
            <button
              onClick={() => setIsSourcesOpen(true)}
              className="hover:text-[#F1DED1] flex items-center gap-1 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#C98E78]" />
              Sources
            </button>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedTopic && (
        <StoryDetailModal
          topic={selectedTopic}
          onClose={() => setSelectedTopic(null)}
          isBookmarked={bookmarkedIds.includes(selectedTopic.id)}
          onToggleBookmark={handleToggleBookmark}
        />
      )}

      {isWatchlistOpen && (
        <WatchlistModal
          bookmarkedTopics={bookmarkedTopics}
          onClose={() => setIsWatchlistOpen(false)}
          onSelectTopic={(t) => setSelectedTopic(t)}
          onRemoveBookmark={handleToggleBookmark}
        />
      )}

      {isSourcesOpen && (
        <SourcesModal
          onClose={() => setIsSourcesOpen(false)}
        />
      )}

      {isPipelineSettingsOpen && (
        <PipelineSettingsModal
          pipelineState={pipelineState}
          config={pipelineConfig}
          onClose={() => setIsPipelineSettingsOpen(false)}
          onRunPipeline={handleRunPipeline}
          onUpdateConfig={(cfg) => {
            const updated = trendEngine.updateConfig(cfg);
            setPipelineConfig(updated);
          }}
          isPipelineRunning={isPipelineRunning}
        />
      )}

      {isAcademicModalOpen && (
        <AcademicInfoModal
          onClose={() => setIsAcademicModalOpen(false)}
        />
      )}
    </div>
  );
}
