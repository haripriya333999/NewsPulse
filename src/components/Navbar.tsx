import React, { useState } from 'react';
import {
  Radio,
  TrendingUp,
  Compass,
  Layers,
  BarChart3,
  MoreVertical,
  Settings,
  Globe,
  Bookmark,
  GraduationCap,
  Menu,
  X
} from 'lucide-react';

export type MainNavTab = 'pulse' | 'trends' | 'explore' | 'stories' | 'analytics';

interface NavbarProps {
  activeTab: MainNavTab;
  onTabChange: (tab: MainNavTab) => void;
  onOpenPipelineSettings: () => void;
  onOpenSourcesModal: () => void;
  onOpenWatchlistModal: () => void;
  onOpenAcademicModal: () => void;
  watchlistCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  onTabChange,
  onOpenPipelineSettings,
  onOpenSourcesModal,
  onOpenWatchlistModal,
  onOpenAcademicModal,
  watchlistCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [secondaryMenuOpen, setSecondaryMenuOpen] = useState(false);

  const mainTabs: Array<{ id: MainNavTab; label: string }> = [
    { id: 'pulse', label: 'Pulse' },
    { id: 'trends', label: 'Trends' },
    { id: 'explore', label: 'Explore' },
    { id: 'stories', label: 'Stories' },
    { id: 'analytics', label: 'Analytics' }
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#1E130F]/95 backdrop-blur-md border-b border-[#493027]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <div
          onClick={() => onTabChange('pulse')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-8 h-8 rounded-lg bg-[#281A16] border border-[#493027] flex items-center justify-center text-[#C98E78] group-hover:border-[#C98E78] transition-colors">
            <Radio className="w-4 h-4" />
          </div>
          <div>
            <span className="font-editorial text-xl font-bold tracking-tight text-[#F1DED1] block leading-none">
              NewPulse
            </span>
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#BFA69B] block mt-0.5">
              News Trend Intelligence
            </span>
          </div>
        </div>

        {/* 5 Primary Destinations (Clean Minimal Editorial Style) */}
        <nav className="hidden md:flex items-center gap-6">
          {mainTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`relative py-1 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#C98E78] font-semibold'
                    : 'text-[#BFA69B] hover:text-[#F1DED1]'
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#C98E78] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Secondary Menu (Compact Dropdown) */}
        <div className="relative hidden md:flex items-center gap-2">
          {watchlistCount > 0 && (
            <button
              onClick={onOpenWatchlistModal}
              className="px-2.5 py-1 rounded-md bg-[#281A16] hover:bg-[#35221B] text-[#C98E78] border border-[#493027] text-xs font-mono flex items-center gap-1.5 transition-colors"
              title="Saved Watchlist"
            >
              <Bookmark className="w-3 h-3" />
              <span>{watchlistCount}</span>
            </button>
          )}

          <div className="relative">
            <button
              onClick={() => setSecondaryMenuOpen(!secondaryMenuOpen)}
              className="p-1.5 rounded-lg bg-[#281A16] hover:bg-[#35221B] text-[#BFA69B] hover:text-[#F1DED1] border border-[#493027] text-xs transition-colors"
              title="More Options"
            >
              <MoreVertical className="w-4 h-4" />
            </button>

            {secondaryMenuOpen && (
              <div 
                className="absolute right-0 mt-2 w-52 bg-[#281A16] border border-[#493027] rounded-xl shadow-2xl p-1.5 z-50 text-xs space-y-0.5 animate-fade-in"
                onClick={() => setSecondaryMenuOpen(false)}
              >
                <button
                  onClick={onOpenPipelineSettings}
                  className="w-full text-left px-3 py-2 rounded-lg text-[#F1DED1] hover:bg-[#35221B] flex items-center gap-2 transition-colors"
                >
                  <Settings className="w-3.5 h-3.5 text-[#C98E78]" />
                  <span>Pipeline & ML Settings</span>
                </button>
                <button
                  onClick={onOpenSourcesModal}
                  className="w-full text-left px-3 py-2 rounded-lg text-[#F1DED1] hover:bg-[#35221B] flex items-center gap-2 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-[#C98E78]" />
                  <span>Monitored Sources</span>
                </button>
                <button
                  onClick={onOpenWatchlistModal}
                  className="w-full text-left px-3 py-2 rounded-lg text-[#F1DED1] hover:bg-[#35221B] flex items-center gap-2 transition-colors"
                >
                  <Bookmark className="w-3.5 h-3.5 text-[#C98E78]" />
                  <span>Saved Stories ({watchlistCount})</span>
                </button>
                <button
                  onClick={onOpenAcademicModal}
                  className="w-full text-left px-3 py-2 rounded-lg text-[#F1DED1] hover:bg-[#35221B] flex items-center gap-2 transition-colors border-t border-[#493027]/50 pt-2"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-[#C98E78]" />
                  <span>Project Spec (Hari Priya)</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg bg-[#281A16] text-[#BFA69B] hover:text-[#F1DED1] border border-[#493027]"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1E130F] border-b border-[#493027] px-4 py-3 space-y-2">
          {mainTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  onTabChange(tab.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#281A16] text-[#C98E78] font-semibold'
                    : 'text-[#BFA69B] hover:bg-[#281A16]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}

          <div className="pt-2 border-t border-[#493027] space-y-1">
            <button
              onClick={() => {
                onOpenWatchlistModal();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-1.5 text-xs text-[#BFA69B] flex items-center gap-2"
            >
              <Bookmark className="w-3.5 h-3.5 text-[#C98E78]" /> Watchlist ({watchlistCount})
            </button>
            <button
              onClick={() => {
                onOpenPipelineSettings();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-1.5 text-xs text-[#BFA69B] flex items-center gap-2"
            >
              <Settings className="w-3.5 h-3.5 text-[#C98E78]" /> Pipeline & ML Settings
            </button>
            <button
              onClick={() => {
                onOpenAcademicModal();
                setMobileMenuOpen(false);
              }}
              className="w-full text-left px-3 py-1.5 text-xs text-[#BFA69B] flex items-center gap-2"
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#C98E78]" /> Project Spec (Hari Priya)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
