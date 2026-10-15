import React from 'react';
import { X, GraduationCap, Cpu, Workflow } from 'lucide-react';

interface AcademicInfoModalProps {
  onClose: () => void;
}

export const AcademicInfoModal: React.FC<AcademicInfoModalProps> = ({ onClose }) => {
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
              <GraduationCap className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-editorial text-lg font-bold">NewPulse — Academic Project Specification</h3>
              <p className="text-[11px] font-mono text-[#92796B]">Assignment-3 • News Trend Intelligence System</p>
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
        <div className="p-6 overflow-y-auto space-y-5 text-xs text-[#F1DED1] bg-[#281A16]">
          {/* Author Badge */}
          <div className="p-4 bg-[#160F0D] border border-[#493027] rounded-xl flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="text-[#C98E78] font-mono font-semibold text-xs uppercase tracking-wider">Student Lead / Researcher</div>
              <div className="text-xl font-editorial font-bold text-[#F1DED1] mt-0.5">Hari Priya Yathirajula</div>
              <div className="text-xs text-[#92796B] font-mono mt-0.5">Roll No: 324103282046</div>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-[#281A16] border border-[#493027] text-right font-mono">
              <span className="block text-[10px] text-[#92796B]">Architecture</span>
              <span className="font-bold text-xs text-[#C98E78]">FastAPI + React + Python NLP</span>
            </div>
          </div>

          {/* 7-Stage Pipeline */}
          <div>
            <h4 className="font-bold text-sm text-[#F1DED1] mb-2.5 flex items-center gap-2">
              <Workflow className="w-4 h-4 text-[#C98E78]" />
              The 7-Stage Data Science Lifecycle in NewPulse
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {[
                { step: '1. Ingestion', desc: 'Retrieves article metadata and timestamps via GDELT, RSS feeds, and News APIs.' },
                { step: '2. Preprocessing', desc: 'Sanitizes text and purges duplicate wire syndication via MinHash LSH.' },
                { step: '3. NLP & NER', desc: 'spaCy model extracts People, Organizations, and Locations with TF-IDF keyphrases.' },
                { step: '4. Embeddings', desc: 'Sentence Transformers creates 384-d semantic vectors representing article intent.' },
                { step: '5. Dynamic Clustering', desc: 'HDBSCAN density clustering groups articles without requiring pre-set categories.' },
                { step: '6. Trend Velocity', desc: 'Evaluates Growth = ((Current - Baseline) / Baseline) * 100 with publisher diversity.' },
                { step: '7. Synthesis', desc: 'Produces journalistic briefings, purpose statements, and "Why is this trending" evidence.' }
              ].map((item, idx) => (
                <div key={idx} className="p-3 bg-[#160F0D] border border-[#493027] rounded-xl">
                  <div className="font-bold text-xs text-[#C98E78] font-mono mb-0.5">{item.step}</div>
                  <div className="text-[11px] text-[#BFA69B] leading-relaxed">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Matrix */}
          <div>
            <h4 className="font-bold text-sm text-[#F1DED1] mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#C98E78]" />
              Technology Stack
            </h4>
            <div className="border border-[#493027] rounded-xl overflow-hidden bg-[#160F0D]">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-[#1E130F] text-[#C98E78]">
                  <tr>
                    <th className="p-2 font-semibold">Layer</th>
                    <th className="p-2 font-semibold">Technology</th>
                    <th className="p-2 font-semibold">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#493027]/60 text-[#BFA69B]">
                  <tr>
                    <td className="p-2 font-bold text-[#F1DED1]">Frontend</td>
                    <td className="p-2">React 19 + Vite 8 + Tailwind CSS</td>
                    <td className="p-2">Dark editorial intelligence UI</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-[#F1DED1]">Charts</td>
                    <td className="p-2">Recharts</td>
                    <td className="p-2">Copper volume & diversity trajectories</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-[#F1DED1]">Backend</td>
                    <td className="p-2">Python + FastAPI</td>
                    <td className="p-2">REST API & ML pipeline execution</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-bold text-[#F1DED1]">NLP & AI</td>
                    <td className="p-2">Sentence Transformers + spaCy</td>
                    <td className="p-2">Semantic embeddings & entity extraction</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#1E130F] px-6 py-3 border-t border-[#493027] flex justify-end font-mono">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#35221B] hover:bg-[#493027] text-[#F1DED1] text-xs font-semibold rounded-lg border border-[#493027]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
