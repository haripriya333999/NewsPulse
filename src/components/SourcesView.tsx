import React from 'react';
import { CONNECTED_SOURCES } from '../data/mockNewsData';
import { Globe, ShieldCheck, Clock, AlertTriangle, ExternalLink, Activity, CheckCircle2 } from 'lucide-react';

export const SourcesView: React.FC = () => {
  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      {/* Intro Header */}
      <div className="bg-[#FFFDF8] p-6 sm:p-8 rounded-3xl border border-[#D9B99A]/60 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-[#C98B5B] uppercase tracking-wider">
          <Globe className="w-4 h-4" />
          The Signal: Ingestion Network & Newsroom Diversity
        </div>
        <h1 className="text-3xl sm:text-4xl font-editorial font-bold text-[#1C120E]">
          Connected News Sources & Ingestion Freshness
        </h1>
        <p className="text-sm text-[#4A2C22] max-w-3xl leading-relaxed">
          NewPulse aggregates permitted news APIs, wire services, and publisher RSS feeds across multiple global geographies. To ensure integrity and trust, every trend indicates how many distinct publishers report the event, preventing syndicated duplicates from masquerading as broad consensus.
        </p>
      </div>

      {/* Sources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {CONNECTED_SOURCES.map((src) => (
          <div
            key={src.name}
            className="p-5 bg-[#FFFDF8] rounded-2xl border border-[#D9B99A]/60 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#C98B5B] transition-colors"
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F7F1E8] text-[#6B4030] border border-[#D9B99A]/40">
                  {src.category}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Active
                </span>
              </div>

              <h3 className="font-editorial text-lg font-bold text-[#1C120E]">
                {src.name}
              </h3>

              <div className="mt-3 space-y-1.5 text-xs text-[#4A2C22]">
                <div className="flex justify-between">
                  <span>Articles Analyzed:</span>
                  <span className="font-bold text-[#1C120E]">{src.articlesCollected.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Data Freshness:</span>
                  <span className="font-mono text-[#C98B5B]">{src.freshnessMinutes}m ago</span>
                </div>
                <div className="flex justify-between">
                  <span>Reliability Index:</span>
                  <span className="font-bold text-emerald-700">{src.reliabilityScore}/100</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#D9B99A]/30 flex items-center justify-between text-xs text-[#75665D]">
              <span>Coverage Share:</span>
              <span className="font-bold text-[#1C120E]">{src.coverageSharePct}%</span>
            </div>
          </div>
        ))}
      </div>

      {/* Trust & Limitations Callout (From User's Master Brief) */}
      <div className="p-6 sm:p-8 bg-[#2A1A15] text-[#F7F1E8] rounded-3xl border border-[#4A2C22] shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#C98B5B] uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          Transparency & Responsible Data Science Principles
        </div>
        <h2 className="text-xl font-editorial font-bold text-white">
          Why Data Limitations & Source Diversity Matter
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#D9B99A] leading-relaxed pt-1">
          <div className="p-4 bg-[#1C120E] rounded-xl border border-[#4A2C22] space-y-1">
            <strong className="text-[#FFFDF8] block text-sm">1. News Coverage ≠ Social Virality</strong>
            <p>
              NewPulse measures editorial news attention, not social media vanity likes or bot engagement. A topic trending in news represents verified journalistic focus.
            </p>
          </div>
          <div className="p-4 bg-[#1C120E] rounded-xl border border-[#4A2C22] space-y-1">
            <strong className="text-[#FFFDF8] block text-sm">2. Never Fabricate Numbers</strong>
            <p>
              Trend velocity scores are grounded in verifiable time-window ratios. Unsubstantiated claims or AI-hallucinated metrics are prohibited by design.
            </p>
          </div>
          <div className="p-4 bg-[#1C120E] rounded-xl border border-[#4A2C22] space-y-1">
            <strong className="text-[#FFFDF8] block text-sm">3. Respect Original Publishers</strong>
            <p>
              NewPulse analyzes patterns behind the news, providing short synthesized summaries and attribution links to the original investigative publications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
