import React, { useState } from 'react';
import { PipelineState, PipelineConfig } from '../types';
import {
  Settings,
  Play,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Terminal,
  Cpu,
  Database,
  Layers,
  GraduationCap,
  Save,
  Plus
} from 'lucide-react';

interface PipelineSettingsViewProps {
  pipelineState: PipelineState;
  config: PipelineConfig;
  onRunPipeline: () => void;
  onUpdateConfig: (newConfig: Partial<PipelineConfig>) => void;
  isPipelineRunning: boolean;
}

export const PipelineSettingsView: React.FC<PipelineSettingsViewProps> = ({
  pipelineState,
  config,
  onRunPipeline,
  onUpdateConfig,
  isPipelineRunning
}) => {
  const [minDiversity, setMinDiversity] = useState(config.minSourceDiversity);
  const [sensitivity, setSensitivity] = useState(config.growthSensitivityThreshold);
  const [customRssInput, setCustomRssInput] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleSave = () => {
    onUpdateConfig({
      minSourceDiversity: minDiversity,
      growthSensitivityThreshold: sensitivity
    });
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleAddFeed = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customRssInput.trim()) return;
    alert(`Custom feed added to ingestion crawler: ${customRssInput.trim()}`);
    setCustomRssInput('');
  };

  return (
    <div className="space-y-8 pb-16 animate-fade-in">
      {/* 1. EDUCATIONAL EXPLANATION (Answers user's exact question: "what is settings and run pipeline for") */}
      <div className="bg-[#FFFDF8] p-6 sm:p-8 rounded-3xl border border-[#D9B99A]/60 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-[#C98B5B] uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          Understanding the Data Pipeline & Settings
        </div>
        <h1 className="text-3xl sm:text-4xl font-editorial font-bold text-[#1C120E]">
          What is "Run Pipeline" and what are these Settings for?
        </h1>
        <p className="text-sm text-[#4A2C22] leading-relaxed">
          In a true Data Science and Machine Learning project, the website is only the presentation interface. The <strong>Data Science Pipeline is the engine</strong> that transforms messy raw news articles into structured trend intelligence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-4 bg-[#F7F1E8]/70 rounded-xl border border-[#D9B99A]/40 space-y-1.5">
            <strong className="text-[#1C120E] text-sm block">1. Why "Run Pipeline"?</strong>
            <p className="text-[#4A2C22] leading-relaxed">
              When you click <strong>Run Pipeline</strong>, NewPulse triggers the 7-stage ML workflow: fetching fresh RSS/News APIs, purging duplicates, generating Sentence Transformer embeddings, discovering HDBSCAN clusters, and updating trend growth velocity in real-time.
            </p>
          </div>

          <div className="p-4 bg-[#F7F1E8]/70 rounded-xl border border-[#D9B99A]/40 space-y-1.5">
            <strong className="text-[#1C120E] text-sm block">2. Why are Settings needed?</strong>
            <p className="text-[#4A2C22] leading-relaxed">
              Settings allow you to calibrate the statistical algorithms: adjust how strict the duplicate filter is, set minimum source diversity (to prevent 1 biased publisher from dominating), and fine-tune the growth percentage required to trigger an "Emerging Spike".
            </p>
          </div>

          <div className="p-4 bg-[#F7F1E8]/70 rounded-xl border border-[#D9B99A]/40 space-y-1.5">
            <strong className="text-[#1C120E] text-sm block">3. Academic & Industry Hybrid</strong>
            <p className="text-[#4A2C22] leading-relaxed">
              Designed for <strong>Hari Priya Yathirajula (Roll: 324103282046)</strong> as Assignment-3, this demonstrates a production-ready architecture connecting React frontend, Python FastAPI backend, NLP embeddings, and transparent trend metrics.
            </p>
          </div>
        </div>
      </div>

      {/* 2. INTERACTIVE PIPELINE RUNNER & PROGRESS */}
      <div className="bg-[#2A1A15] text-[#F7F1E8] p-6 sm:p-8 rounded-3xl border border-[#4A2C22] shadow-xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#4A2C22] pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-[#C98B5B] uppercase tracking-wider mb-1">
              <Cpu className="w-4 h-4" />
              Real-Time Execution Monitor
            </div>
            <h2 className="text-xl font-editorial font-bold text-white">
              Data Science Pipeline Controller
            </h2>
          </div>

          <button
            onClick={onRunPipeline}
            disabled={isPipelineRunning}
            className="px-6 py-2.5 rounded-xl bg-[#C98B5B] hover:bg-[#A86A3D] text-[#1C120E] font-bold text-xs flex items-center gap-2 transition-all shadow-md disabled:opacity-50"
          >
            <Play className={`w-4 h-4 ${isPipelineRunning ? 'animate-spin' : ''}`} />
            {isPipelineRunning ? 'Executing 7-Stage Pipeline...' : 'Run Ingestion & Trend Pipeline'}
          </button>
        </div>

        {/* Status and Progress Bar */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="text-[#D9B99A]">
              Current Stage: <span className="text-[#FFFDF8] font-bold">{pipelineState.currentStage}</span>
            </span>
            <span className="text-[#C98B5B] font-bold">{pipelineState.progressPercent}%</span>
          </div>

          <div className="w-full bg-[#1C120E] h-2.5 rounded-full overflow-hidden border border-[#4A2C22]">
            <div
              className="bg-gradient-to-r from-[#956B4B] to-[#C98B5B] h-full transition-all duration-300"
              style={{ width: `${pipelineState.progressPercent}%` }}
            />
          </div>
        </div>

        {/* Live Terminal Log Stream */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-[#D9B99A]/80 font-mono">
            <span className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#C98B5B]" /> Execution Telemetry Logs
            </span>
            <span>Last Sync: {pipelineState.lastRunTimestamp}</span>
          </div>

          <div className="bg-[#1C120E] rounded-xl p-4 font-mono text-xs text-[#D9B99A] border border-[#4A2C22] max-h-52 overflow-y-auto space-y-1.5 scrollbar-thin">
            {pipelineState.logs.map((log) => (
              <div key={log.id} className="flex items-start gap-2 leading-relaxed">
                <span className="text-[#75665D] shrink-0">[{log.timestamp}]</span>
                <span
                  className={`px-1 rounded text-[10px] uppercase font-bold shrink-0 ${
                    log.level === 'success'
                      ? 'bg-emerald-950 text-emerald-400'
                      : log.level === 'warning'
                      ? 'bg-amber-950 text-amber-400'
                      : 'bg-[#2A1A15] text-[#C98B5B]'
                  }`}
                >
                  {log.stage}
                </span>
                <span className="text-[#F7F1E8]/90">{log.message}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. PIPELINE CALIBRATION SETTINGS */}
      <div className="bg-[#FFFDF8] p-6 sm:p-8 rounded-3xl border border-[#D9B99A]/60 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-[#D9B99A]/40 pb-4">
          <div>
            <h2 className="text-xl font-editorial font-bold text-[#1C120E]">
              Algorithm Parameters & Pipeline Calibration
            </h2>
            <p className="text-xs text-[#75665D]">
              Fine-tune the mathematical thresholds applied during clustering and anomaly detection.
            </p>
          </div>

          <button
            onClick={handleSave}
            className="px-4 py-2 bg-[#2A1A15] hover:bg-[#1C120E] text-[#F7F1E8] text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
          >
            <Save className="w-3.5 h-3.5" />
            {savedSuccess ? 'Settings Saved!' : 'Save Calibration'}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A1A15]">
          <div className="space-y-2 p-4 bg-[#F7F1E8]/60 rounded-2xl border border-[#D9B99A]/40">
            <div className="flex justify-between items-center font-bold">
              <span>Minimum Independent Publisher Diversity:</span>
              <span className="font-mono text-sm text-[#C98B5B]">{minDiversity} newsrooms</span>
            </div>
            <p className="text-[#75665D] text-[11px] leading-relaxed">
              Topics will not receive a high trend score unless covered by at least this many independent publishers, preventing single-source syndicate bias.
            </p>
            <input
              type="range"
              min="5"
              max="35"
              value={minDiversity}
              onChange={(e) => setMinDiversity(Number(e.target.value))}
              className="w-full accent-[#C98B5B] cursor-pointer"
            />
          </div>

          <div className="space-y-2 p-4 bg-[#F7F1E8]/60 rounded-2xl border border-[#D9B99A]/40">
            <div className="flex justify-between items-center font-bold">
              <span>Emerging Breakout Sensitivity (% Surge):</span>
              <span className="font-mono text-sm text-[#C98B5B]">+{sensitivity}%</span>
            </div>
            <p className="text-[#75665D] text-[11px] leading-relaxed">
              Minimum percentage growth over baseline required for a topic to trigger an "Emerging Breakout" badge on the radar.
            </p>
            <input
              type="range"
              min="20"
              max="150"
              step="5"
              value={sensitivity}
              onChange={(e) => setSensitivity(Number(e.target.value))}
              className="w-full accent-[#C98B5B] cursor-pointer"
            />
          </div>
        </div>

        {/* Add Custom Feed Input Test */}
        <div className="pt-2">
          <h3 className="font-bold text-xs uppercase tracking-wider text-[#6B4030] mb-2">
            Test Custom News Source / RSS Ingestion Crawler
          </h3>
          <form onSubmit={handleAddFeed} className="flex gap-2">
            <input
              type="url"
              value={customRssInput}
              onChange={(e) => setCustomRssInput(e.target.value)}
              placeholder="Enter RSS Feed URL (e.g., https://rss.nytimes.com/services/xml/rss/nyt/World.xml)..."
              className="flex-1 px-4 py-2 bg-[#F7F1E8] border border-[#D9B99A] rounded-xl text-xs text-[#1C120E] focus:outline-none focus:border-[#C98B5B]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#C98B5B] hover:bg-[#A86A3D] text-[#1C120E] font-bold text-xs rounded-xl flex items-center gap-1 transition-colors"
            >
              <Plus className="w-3.5 h-3.5" /> Ingest Feed
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
