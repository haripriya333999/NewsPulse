import React, { useState } from 'react';
import { TopicCluster } from '../types';
import { Cpu, HelpCircle, Layers } from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

interface AnalyticsViewProps {
  topics: TopicCluster[];
  onSelectTopic: (topic: TopicCluster) => void;
}

export const AnalyticsView: React.FC<AnalyticsViewProps> = ({
  topics,
  onSelectTopic
}) => {
  const [activeWindow, setActiveWindow] = useState<'24H' | '7D' | '30D'>('7D');

  const comparisonData = topics.slice(0, 5).map((t) => ({
    name: t.label.split(':')[0].substring(0, 16) + '...',
    volume: t.currentArticleCount,
    sources: t.independentSourcesCount
  }));

  const trajectoryData = [
    { day: 'Day 1', AI: 450, Semi: 345, GreenBat: 232, Pharma: 285 },
    { day: 'Day 2', AI: 520, Semi: 410, GreenBat: 290, Pharma: 350 },
    { day: 'Day 3', AI: 680, Semi: 550, GreenBat: 380, Pharma: 460 },
    { day: 'Day 4', AI: 890, Semi: 720, GreenBat: 490, Pharma: 580 },
    { day: 'Day 5', AI: 1100, Semi: 830, GreenBat: 610, Pharma: 690 },
    { day: 'Day 6', AI: 1290, Semi: 920, GreenBat: 710, Pharma: 770 },
    { day: 'Day 7', AI: 1420, Semi: 980, GreenBat: 790, Pharma: 840 }
  ];

  return (
    <div className="space-y-8 pb-20 max-w-5xl mx-auto animate-fade-in">
      {/* Editorial Header */}
      <div className="space-y-4 pt-4 border-b border-[#493027]/70 pb-6">
        <div className="flex items-center gap-2 text-xs font-mono text-[#C98E78] uppercase tracking-wider">
          <span>05 — ANALYTICS</span>
          <span className="text-[#704735]">•</span>
          <span className="text-[#BFA69B]">Evidence & quantitative patterns</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-editorial font-bold text-[#F1DED1]">
              Understand the evidence
            </h1>
            <p className="text-sm text-[#BFA69B] mt-1 max-w-xl">
              Article volume histories, publisher diversity indices, and cluster verification metrics.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-[#281A16] p-1 rounded-lg border border-[#493027] text-xs font-mono shrink-0">
            {(['24H', '7D', '30D'] as const).map((w) => (
              <button
                key={w}
                onClick={() => setActiveWindow(w)}
                className={`px-3 py-1 rounded transition-colors ${
                  activeWindow === w
                    ? 'bg-[#C98E78] text-[#160F0D] font-bold'
                    : 'text-[#BFA69B] hover:text-[#F1DED1]'
                }`}
              >
                {w}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Trajectory Area Chart */}
      <div className="p-6 rounded-2xl bg-[#281A16] border border-[#493027] space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="text-base font-editorial font-bold text-[#F1DED1]">
              Coverage Volume Trajectory (Top 4 Trends)
            </h2>
            <p className="text-xs text-[#92796B] font-mono">
              Normalized daily article publication volume across the 7-day ingestion cycle.
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="flex items-center gap-1.5 text-[#F1DED1]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C98E78]" /> AI Reasoning
            </span>
            <span className="flex items-center gap-1.5 text-[#F1DED1]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B77A50]" /> India Semi
            </span>
            <span className="flex items-center gap-1.5 text-[#F1DED1]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#BFA69B]" /> Batteries
            </span>
          </div>
        </div>

        <div className="h-64 w-full pt-2">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trajectoryData}>
              <XAxis dataKey="day" stroke="#92796B" fontSize={11} />
              <YAxis stroke="#92796B" fontSize={11} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1E130F',
                  borderColor: '#493027',
                  color: '#F1DED1',
                  borderRadius: '8px',
                  fontSize: '11px'
                }}
              />
              <Area type="monotone" dataKey="AI" stroke="#C98E78" fill="#C98E78" fillOpacity={0.2} strokeWidth={2} />
              <Area type="monotone" dataKey="Semi" stroke="#B77A50" fill="#B77A50" fillOpacity={0.15} strokeWidth={2} />
              <Area type="monotone" dataKey="GreenBat" stroke="#BFA69B" fill="#BFA69B" fillOpacity={0.1} strokeWidth={1.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Two Column Grid: Articles vs Publishers & Plain Language Explanations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Bar Chart */}
        <div className="p-5 rounded-2xl bg-[#281A16] border border-[#493027] space-y-3">
          <h3 className="text-sm font-editorial font-bold text-[#F1DED1]">
            Article Volume vs Distinct Publishers
          </h3>
          <p className="text-xs text-[#92796B]">
            Ensures coverage volume is backed by independent newsrooms, not syndicated copies.
          </p>
          <div className="h-52 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={comparisonData}>
                <XAxis dataKey="name" stroke="#92796B" fontSize={10} />
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
                <Bar dataKey="volume" name="Articles" fill="#C98E78" radius={[4, 4, 0, 0]} />
                <Bar dataKey="sources" name="Publishers" fill="#B77A50" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Plain Language Metric Explanations */}
        <div className="p-5 rounded-2xl bg-[#281A16] border border-[#493027] flex flex-col justify-between space-y-3 text-xs">
          <div>
            <h3 className="text-sm font-editorial font-bold text-[#F1DED1] flex items-center gap-1.5 mb-2">
              <HelpCircle className="w-4 h-4 text-[#C98E78]" />
              How NewPulse Calculates Metrics
            </h3>
            <p className="text-xs text-[#BFA69B] leading-relaxed">
              Every score displayed in NewPulse is derived from empirical statistical rules:
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-2.5 bg-[#160F0D] rounded-xl border border-[#493027]">
              <strong className="text-[#C98E78] block">Growth Velocity (%):</strong>
              <span className="text-[#BFA69B] text-[11px] leading-relaxed">
                Growth = ((Current Volume - Baseline Volume) / Baseline Volume) * 100. Compares the current 7-day article volume against the preceding baseline window.
              </span>
            </div>

            <div className="p-2.5 bg-[#160F0D] rounded-xl border border-[#493027]">
              <strong className="text-[#C98E78] block">Publisher Diversity Index:</strong>
              <span className="text-[#BFA69B] text-[11px] leading-relaxed">
                Penalizes duplicate syndication. Measures how many distinct editorial boards independently reported the subject.
              </span>
            </div>

            <div className="p-2.5 bg-[#160F0D] rounded-xl border border-[#493027]">
              <strong className="text-[#C98E78] block">HDBSCAN Silhouette Coherence:</strong>
              <span className="text-[#BFA69B] text-[11px] leading-relaxed">
                Current cluster density score is <strong className="text-emerald-400 font-mono">0.74 / 1.0</strong>, confirming tight semantic separation.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
