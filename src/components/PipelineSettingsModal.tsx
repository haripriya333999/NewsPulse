import React, { useState } from 'react';
import { PipelineState, PipelineConfig } from '../types';
import {
  X,
  Settings,
  Play,
  Terminal,
  Cpu,
  Save,
  Plus,
  HelpCircle
} from 'lucide-react';

interface PipelineSettingsModalProps {
  pipelineState: PipelineState;
  config: PipelineConfig;
  onClose: () => void;
  onRunPipeline: () => void;
  onUpdateConfig: (newConfig: Partial<PipelineConfig>) => void;
  isPipelineRunning: boolean;
}

export const PipelineSettingsModal: React.FC<PipelineSettingsModalProps> = ({
  pipelineState,
  config,
  onClose,
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
    alert(`Feed queued for crawler ingestion: ${customRssInput.trim()}`);
    setCustomRssInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#160F0D]/90 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-3xl bg-[#281A16] border border-[#493027] rounded-2xl shadow-2xl overflow-hidden text-[#F1DED1] max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1E130F] text-[#F1DED1] px-6 py-4 flex items-center justify-between border-b border-[#493027]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#35221B] text-[#C98E78] border border-[#493027]">
              <Settings className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-editorial text-lg font-bold">Pipeline & Model Settings</h3>
              <p className="text-[11px] font-mono text-[#92796B]">Control news ingestion, clustering sensitivity, and live ML models</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-[#35221B] text-[#BFA69B] hover:text-[#F1DED1]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1 bg-[#281A16] text-xs">
          {/* Explanation Box */}
          <div className="p-4 bg-[#160F0D] rounded-xl border border-[#493027] text-xs text-[#BFA69B] leading-relaxed space-y-1.5">
            <strong className="text-[#C98E78] flex items-center gap-1 text-xs font-mono">
              <HelpCircle className="w-3.5 h-3.5" /> What is the Data Science Pipeline for?
            </strong>
            <p>
              NewPulse is not a static list of articles. When you trigger the pipeline, the system fetches fresh news from 48 sources, removes wire duplicates with MinHash, extracts entities with spaCy, generates 384-dimensional Sentence Transformer embeddings, groups stories with HDBSCAN clustering, and computes trend velocity ratios.
            </p>
          </div>

          {/* Live Runner Card */}
          <div className="p-4 bg-[#160F0D] rounded-xl border border-[#493027] space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] text-[#C98E78] font-mono font-semibold uppercase tracking-wider block">
                  Pipeline Execution Monitor
                </span>
                <span className="text-sm font-bold text-[#F1DED1]">{pipelineState.currentStage}</span>
              </div>

              <button
                onClick={onRunPipeline}
                disabled={isPipelineRunning}
                className="px-4 py-2 bg-[#C98E78] hover:bg-[#B77A50] text-[#160F0D] font-bold text-xs rounded-xl flex items-center gap-1.5 transition-colors disabled:opacity-50 font-mono"
              >
                <Play className={`w-3.5 h-3.5 ${isPipelineRunning ? 'animate-spin' : ''}`} />
                {isPipelineRunning ? 'Running ML...' : 'Run Pipeline'}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-[#281A16] h-2 rounded-full overflow-hidden border border-[#493027]">
              <div
                className="bg-[#C98E78] h-full transition-all duration-300"
                style={{ width: `${pipelineState.progressPercent}%` }}
              />
            </div>

            {/* Logs */}
            <div className="bg-[#1E130F] p-3 rounded-lg border border-[#493027] font-mono text-[11px] text-[#BFA69B] max-h-36 overflow-y-auto space-y-1">
              {pipelineState.logs.map((log) => (
                <div key={log.id} className="flex items-start gap-2">
                  <span className="text-[#C98E78]">[{log.timestamp}]</span>
                  <span className="text-[#F1DED1]">{log.message}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Calibration Sliders */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 bg-[#160F0D] rounded-xl border border-[#493027] space-y-2">
              <div className="flex justify-between font-bold">
                <span className="text-[#F1DED1]">Min Source Diversity:</span>
                <span className="text-[#C98E78] font-mono">{minDiversity} publishers</span>
              </div>
              <p className="text-[#BFA69B] text-[11px]">
                Requires at least this many independent media houses for high trend score.
              </p>
              <input
                type="range"
                min="5"
                max="35"
                value={minDiversity}
                onChange={(e) => setMinDiversity(Number(e.target.value))}
                className="w-full accent-[#C98E78]"
              />
            </div>

            <div className="p-3.5 bg-[#160F0D] rounded-xl border border-[#493027] space-y-2">
              <div className="flex justify-between font-bold">
                <span className="text-[#F1DED1]">Breakout Spike Sensitivity:</span>
                <span className="text-[#C98E78] font-mono">+{sensitivity}%</span>
              </div>
              <p className="text-[#BFA69B] text-[11px]">
                Percentage increase required to trigger an "Emerging Spike" badge.
              </p>
              <input
                type="range"
                min="20"
                max="150"
                step="5"
                value={sensitivity}
                onChange={(e) => setSensitivity(Number(e.target.value))}
                className="w-full accent-[#C98E78]"
              />
            </div>
          </div>

          {/* Custom Feed Crawler */}
          <div className="p-3.5 bg-[#160F0D] rounded-xl border border-[#493027] space-y-2">
            <span className="font-bold text-[#F1DED1] block">Test Custom News Feed Crawler</span>
            <form onSubmit={handleAddFeed} className="flex gap-2">
              <input
                type="url"
                value={customRssInput}
                onChange={(e) => setCustomRssInput(e.target.value)}
                placeholder="Enter RSS Feed URL..."
                className="flex-1 px-3 py-1.5 bg-[#281A16] border border-[#493027] rounded-lg text-xs text-[#F1DED1] focus:outline-none focus:border-[#C98E78]"
              />
              <button
                type="submit"
                className="px-3 py-1.5 bg-[#C98E78] text-[#160F0D] font-bold rounded-lg text-xs flex items-center gap-1 font-mono"
              >
                <Plus className="w-3.5 h-3.5" /> Ingest
              </button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#1E130F] px-6 py-3 border-t border-[#493027] flex justify-between items-center text-xs font-mono">
          <button
            onClick={handleSave}
            className="px-4 py-1.5 bg-[#C98E78] hover:bg-[#B77A50] text-[#160F0D] font-bold rounded-lg flex items-center gap-1"
          >
            <Save className="w-3.5 h-3.5" />
            {savedSuccess ? 'Saved!' : 'Save Calibration'}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#35221B] hover:bg-[#493027] text-[#F1DED1] font-semibold rounded-lg border border-[#493027]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
