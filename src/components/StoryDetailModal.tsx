import React, { useState } from 'react';
import { TopicCluster } from '../types';
import {
  X,
  TrendingUp,
  Share2,
  Bookmark,
  BookmarkCheck,
  Compass,
  FileText,
  Clock,
  Layers,
  GitBranch,
  CheckCircle2,
  ExternalLink,
  Bell,
  BellRing,
  Mail,
  Check
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface StoryDetailModalProps {
  topic: TopicCluster | null;
  onClose: () => void;
  isBookmarked?: boolean;
  onToggleBookmark?: (topicId: string) => void;
}

export const StoryDetailModal: React.FC<StoryDetailModalProps> = ({
  topic,
  onClose,
  isBookmarked = false,
  onToggleBookmark
}) => {
  const [activeTab, setActiveTab] = useState<'briefing' | 'timeline' | 'perspectives' | 'articles' | 'analytics'>('briefing');
  const [copied, setCopied] = useState(false);

  // Notification state
  const [showNotifyPanel, setShowNotifyPanel] = useState(false);
  const [emailInput, setEmailInput] = useState('haripy333@gmail.com');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [notificationStatus, setNotificationStatus] = useState<string | null>(null);

  if (!topic) return null;

  const handleShare = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubscribeNotification = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;

    let permissionResult: NotificationPermission = 'default';

    if ('Notification' in window) {
      try {
        permissionResult = await Notification.requestPermission();
        if (permissionResult === 'granted') {
          new Notification(`NewPulse Alert: ${topic.label.substring(0, 40)}...`, {
            body: `Subscribed! Alerts for coverage surges on this topic will be sent to ${emailInput}.`,
            icon: '/favicon.ico'
          });
        }
      } catch (err) {
        console.warn('Browser Notification API error:', err);
      }
    }

    setIsSubscribed(true);
    setNotificationStatus(
      permissionResult === 'granted'
        ? `Browser push & email alerts activated for ${emailInput}!`
        : `Email trend alerts activated for ${emailInput}!`
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#160F0D]/90 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#281A16] border border-[#493027] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] text-[#F1DED1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#1E130F] text-[#F1DED1] px-6 py-4 flex items-center justify-between border-b border-[#493027]">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-[#35221B] text-[#C98E78] border border-[#493027]">
              {topic.category}
            </span>
            <span className="text-xs text-[#92796B] font-mono flex items-center gap-1">
              <Compass className="w-3.5 h-3.5 text-[#C98E78]" />
              {topic.region}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded bg-[#160F0D] text-[#C98E78] border border-[#493027] font-mono">
              <TrendingUp className="w-3 h-3" />
              Trend Score: {topic.trendScore}/100
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Get Notified Button */}
            <button
              onClick={() => setShowNotifyPanel(!showNotifyPanel)}
              className={`px-3 py-1 rounded-lg text-xs font-mono font-semibold flex items-center gap-1.5 transition-colors border ${
                isSubscribed
                  ? 'bg-emerald-950 text-emerald-400 border-emerald-800'
                  : showNotifyPanel
                  ? 'bg-[#C98E78] text-[#160F0D] border-[#C98E78]'
                  : 'bg-[#35221B] hover:bg-[#493027] text-[#F1DED1] border-[#493027]'
              }`}
              title="Get Email & Push Alerts on Trend Updates"
            >
              {isSubscribed ? (
                <>
                  <BellRing className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="hidden sm:inline">Alerts Active</span>
                </>
              ) : (
                <>
                  <Bell className="w-3.5 h-3.5 text-[#C98E78]" />
                  <span>Get Notified</span>
                </>
              )}
            </button>

            {onToggleBookmark && (
              <button
                onClick={() => onToggleBookmark(topic.id)}
                className="p-1.5 rounded-lg hover:bg-[#35221B] text-[#BFA69B] hover:text-[#F1DED1] transition-colors"
                title={isBookmarked ? 'Remove from Watchlist' : 'Save to Watchlist'}
              >
                {isBookmarked ? (
                  <BookmarkCheck className="w-4 h-4 text-[#C98E78]" />
                ) : (
                  <Bookmark className="w-4 h-4" />
                )}
              </button>
            )}

            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg hover:bg-[#35221B] text-[#BFA69B] hover:text-[#F1DED1] transition-colors relative"
              title="Copy Story Link"
            >
              <Share2 className="w-4 h-4" />
              {copied && (
                <span className="absolute -bottom-8 right-0 text-[10px] font-mono bg-[#C98E78] text-[#160F0D] font-bold px-2 py-0.5 rounded shadow">
                  Copied!
                </span>
              )}
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-[#35221B] text-[#BFA69B] hover:text-[#F1DED1] transition-colors ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Email & Browser Notification Subscription Panel */}
        {showNotifyPanel && (
          <div className="bg-[#160F0D] border-b border-[#493027] p-4 sm:p-5 animate-fade-in text-xs space-y-3">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BellRing className="w-4 h-4 text-[#C98E78]" />
                  <span className="font-bold text-sm text-[#F1DED1]">
                    Subscribe to Real-Time Trend Updates
                  </span>
                </div>
                <p className="text-[#BFA69B] text-xs">
                  Receive instant browser notifications and email summaries when coverage surges &gt;20% or new major breakthroughs occur for <strong className="text-[#F1DED1]">"{topic.label.substring(0, 45)}..."</strong>
                </p>
              </div>

              <button
                onClick={() => setShowNotifyPanel(false)}
                className="text-[#BFA69B] hover:text-[#F1DED1] p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {!isSubscribed ? (
              <form onSubmit={handleSubscribeNotification} className="flex flex-col sm:flex-row gap-2 pt-1 max-w-xl">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-[#92796B] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email address..."
                    className="w-full pl-9 pr-3 py-2 bg-[#281A16] border border-[#493027] rounded-xl text-xs text-[#F1DED1] focus:outline-none focus:border-[#C98E78]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#C98E78] hover:bg-[#B77A50] text-[#160F0D] font-bold text-xs rounded-xl flex items-center justify-center gap-1.5 transition-colors shrink-0"
                >
                  <Bell className="w-3.5 h-3.5" />
                  Enable Alerts
                </button>
              </form>
            ) : (
              <div className="p-3 bg-emerald-950/70 border border-emerald-800 rounded-xl flex items-center justify-between text-xs text-emerald-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>{notificationStatus}</span>
                </div>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="text-xs text-emerald-400 hover:underline ml-3"
                >
                  Change Email
                </button>
              </div>
            )}
          </div>
        )}

        {/* Story Title & Headline Bar */}
        <div className="px-6 pt-5 pb-4 border-b border-[#493027] bg-[#1E130F]/60">
          <h2 className="text-xl sm:text-2xl font-editorial font-bold text-[#F1DED1] leading-tight mb-1">
            {topic.label}
          </h2>
          <p className="text-xs sm:text-sm text-[#BFA69B] italic font-editorial">
            "{topic.tagline}"
          </p>

          {/* Quick Metrics Strip */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 mt-3 pt-3 border-t border-[#493027]/50 text-xs font-mono">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm text-[#B77A50]">+{topic.growthRate}%</span>
              <span className="text-[#92796B]">Surge</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm text-[#F1DED1]">{topic.currentArticleCount}</span>
              <span className="text-[#92796B]">Articles</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm text-[#F1DED1]">{topic.independentSourcesCount}</span>
              <span className="text-[#92796B]">Publishers</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm text-[#F1DED1]">{topic.sourceDiversityScore}%</span>
              <span className="text-[#92796B]">Diversity</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1 px-6 bg-[#160F0D] border-b border-[#493027] overflow-x-auto text-xs font-medium">
          {[
            { id: 'briefing', label: 'Briefing & Takeaway', icon: FileText },
            { id: 'timeline', label: 'Timeline', icon: Clock },
            { id: 'perspectives', label: 'Publisher Perspectives', icon: GitBranch },
            { id: 'articles', label: `Articles (${topic.articles.length})`, icon: Layers },
            { id: 'analytics', label: 'Coverage Metrics', icon: TrendingUp }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-2.5 px-3 flex items-center gap-1.5 border-b-2 whitespace-nowrap transition-colors ${
                  isActive
                    ? 'border-[#C98E78] text-[#C98E78] font-bold bg-[#281A16]'
                    : 'border-transparent text-[#92796B] hover:text-[#F1DED1] hover:bg-[#281A16]/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content Area */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 bg-[#281A16]">
          {/* TAB 1: EXECUTIVE BRIEFING & PURPOSE */}
          {activeTab === 'briefing' && (
            <div className="space-y-4">
              {/* Journalistic Summary */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C98E78]">
                  Executive News Synthesis
                </span>
                <p className="text-sm sm:text-base text-[#F1DED1] leading-relaxed bg-[#160F0D] p-4 rounded-xl border border-[#493027]">
                  {topic.summary}
                </p>
              </div>

              {/* CORE PURPOSE & STRATEGIC CONCLUSION */}
              <div className="bg-[#35221B] text-[#F1DED1] p-4 rounded-xl border border-[#493027] space-y-1">
                <div className="flex items-center gap-1.5 text-[#C98E78] text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  Core Purpose & Takeaway
                </div>
                <p className="text-xs sm:text-sm text-[#F1DED1] leading-relaxed font-serif">
                  {topic.purposeConclusion}
                </p>
              </div>

              {/* WHY IS THIS TRENDING? PANEL */}
              <div className="bg-[#160F0D] border border-[#493027] rounded-xl p-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-1.5 font-bold text-[#C98E78] uppercase tracking-wider">
                    <TrendingUp className="w-4 h-4" />
                    Why is this topic trending?
                  </div>
                  <span className="text-[#92796B]">
                    +{topic.whyTrending.growthPct}% vs {topic.whyTrending.comparisonPeriod}
                  </span>
                </div>

                <p className="text-xs text-[#BFA69B]">
                  {topic.whyTrending.evidenceSummary}
                </p>

                <div className="space-y-1.5 pt-1">
                  {topic.whyTrending.drivers.map((driver, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#F1DED1] bg-[#281A16] p-2 rounded-lg border border-[#493027]">
                      <span className="w-4 h-4 rounded-full bg-[#C98E78] text-[#160F0D] flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{driver}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* KEY ENTITIES */}
              <div className="p-4 bg-[#160F0D] rounded-xl border border-[#493027] space-y-2 text-xs">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C98E78] block">
                  Key Entities Detected
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {topic.topEntities.orgs.map((org, i) => (
                    <span key={i} className="px-2 py-0.5 bg-[#281A16] rounded text-[#F1DED1] border border-[#493027]">
                      🏢 {org}
                    </span>
                  ))}
                  {topic.topEntities.locations.map((loc, i) => (
                    <span key={i} className="px-2 py-0.5 bg-[#281A16] rounded text-[#F1DED1] border border-[#493027]">
                      📍 {loc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: TIMELINE */}
          {activeTab === 'timeline' && (
            <div className="space-y-3">
              <p className="text-xs text-[#92796B]">
                Chronological news events reconstructed from monitored publications:
              </p>

              <div className="space-y-2.5">
                {topic.timeline.map((event, i) => (
                  <div key={i} className="bg-[#160F0D] p-3.5 rounded-xl border border-[#493027] text-xs space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="font-mono text-[#C98E78] font-bold">{event.time}</span>
                      <span className="bg-[#281A16] px-2 py-0.5 rounded text-[#92796B] border border-[#493027]">
                        {event.source}
                      </span>
                    </div>
                    <h5 className="font-bold text-[#F1DED1] text-sm">{event.headline}</h5>
                    <p className="text-[#BFA69B] text-xs leading-relaxed">{event.snippet}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: PUBLISHER ANGLES */}
          {activeTab === 'perspectives' && (
            <div className="space-y-3">
              <p className="text-xs text-[#92796B]">
                How different newsrooms framed this story based on editorial analysis:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {topic.perspectives.map((p, idx) => (
                  <div key={idx} className="bg-[#160F0D] border border-[#493027] rounded-xl p-3.5 space-y-1.5 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sm text-[#F1DED1]">{p.source}</span>
                      <span className="text-[10px] text-[#C98E78] bg-[#281A16] px-1.5 py-0.5 rounded border border-[#493027]">
                        {p.stance}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#C98E78]">Focus: {p.focusAngle}</div>
                    <p className="text-[#BFA69B] italic pt-1 border-l-2 border-[#C98E78] pl-2">
                      "{p.keyObservation}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: RELATED ARTICLES */}
          {activeTab === 'articles' && (
            <div className="space-y-2.5">
              {topic.articles.map((art) => (
                <div
                  key={art.id}
                  className="bg-[#160F0D] p-3.5 rounded-xl border border-[#493027] hover:border-[#C98E78] transition-colors text-xs"
                >
                  <div className="flex items-center justify-between text-[11px] text-[#92796B] font-mono mb-1">
                    <span className="font-bold text-[#F1DED1]">{art.source}</span>
                    <span>{art.publishedAt}</span>
                  </div>
                  <h4 className="text-sm font-bold text-[#F1DED1] mb-1">{art.title}</h4>
                  <p className="text-xs text-[#BFA69B] line-clamp-2 mb-2">{art.description}</p>
                  <a
                    href={art.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#C98E78] hover:underline inline-flex items-center gap-1 font-mono"
                  >
                    Open original article <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          )}

          {/* TAB 5: COVERAGE METRICS */}
          {activeTab === 'analytics' && (
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono font-semibold text-[#C98E78] uppercase tracking-wider block mb-2">
                  7-Day Coverage Volume
                </span>
                <div className="h-44 w-full bg-[#160F0D] p-3 rounded-xl border border-[#493027]">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={topic.historicalVolume}>
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
                        fill="#C98E78"
                        fillOpacity={0.2}
                        strokeWidth={1.5}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 bg-[#160F0D] rounded-xl border border-[#493027]">
                  <span className="text-[#92796B] block mb-1">Estimated Sentiment</span>
                  <div className="space-y-1">
                    <div className="text-emerald-400">Positive: {topic.sentimentBreakdown.positive}%</div>
                    <div className="text-[#BFA69B]">Neutral: {topic.sentimentBreakdown.neutral}%</div>
                    <div className="text-rose-400">Negative: {topic.sentimentBreakdown.negative}%</div>
                  </div>
                </div>

                <div className="p-3 bg-[#160F0D] rounded-xl border border-[#493027]">
                  <span className="text-[#92796B] block mb-1">Source Verification</span>
                  <div className="space-y-1">
                    <div>{topic.independentSourcesCount} publishers</div>
                    <div className="text-[#C98E78]">Diversity: {topic.sourceDiversityScore}%</div>
                    <div>Status: {topic.velocityStatus}</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="bg-[#1E130F] px-6 py-3 border-t border-[#493027] flex items-center justify-between text-xs text-[#92796B] font-mono">
          <span>Topic ID: {topic.id}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#35221B] hover:bg-[#493027] text-[#F1DED1] rounded-lg font-semibold transition-colors border border-[#493027]"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};
