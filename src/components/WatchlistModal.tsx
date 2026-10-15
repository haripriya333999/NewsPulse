import React from 'react';
import { TopicCluster } from '../types';
import { X, Bookmark, ArrowRight, Trash2 } from 'lucide-react';

interface WatchlistModalProps {
  bookmarkedTopics: TopicCluster[];
  onClose: () => void;
  onSelectTopic: (topic: TopicCluster) => void;
  onRemoveBookmark: (topicId: string) => void;
}

export const WatchlistModal: React.FC<WatchlistModalProps> = ({
  bookmarkedTopics,
  onClose,
  onSelectTopic,
  onRemoveBookmark
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#160F0D]/90 backdrop-blur-md animate-fade-in">
      <div 
        className="w-full max-w-xl bg-[#281A16] border border-[#493027] rounded-2xl shadow-2xl overflow-hidden text-[#F1DED1] max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1E130F] text-[#F1DED1] px-6 py-4 flex items-center justify-between border-b border-[#493027]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-[#35221B] text-[#C98E78] border border-[#493027]">
              <Bookmark className="w-4 h-4" />
            </span>
            <div>
              <h3 className="font-editorial text-lg font-bold">Personal Watchlist</h3>
              <p className="text-[11px] font-mono text-[#92796B]">Saved topics for rapid monitoring</p>
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
        <div className="p-6 overflow-y-auto space-y-3 flex-1 bg-[#281A16]">
          {bookmarkedTopics.length === 0 ? (
            <div className="text-center py-10 space-y-2 text-[#92796B]">
              <p className="text-sm font-sans">Your watchlist is currently empty.</p>
              <p className="text-xs font-mono">Click the bookmark icon on any topic card to pin it here.</p>
            </div>
          ) : (
            bookmarkedTopics.map((topic) => (
              <div
                key={topic.id}
                className="p-3.5 bg-[#160F0D] rounded-xl border border-[#493027] flex items-center justify-between gap-3 text-xs"
              >
                <div 
                  onClick={() => {
                    onClose();
                    onSelectTopic(topic);
                  }}
                  className="cursor-pointer flex-1 space-y-0.5"
                >
                  <div className="flex items-center gap-2 font-mono">
                    <span className="text-[10px] text-[#C98E78] uppercase">{topic.category}</span>
                    <span className="text-xs text-[#B77A50] font-bold">+{topic.growthRate}%</span>
                  </div>
                  <h4 className="font-bold text-[#F1DED1] hover:text-[#C98E78] transition-colors line-clamp-1">
                    {topic.label}
                  </h4>
                  <p className="text-[11px] text-[#BFA69B] line-clamp-1">{topic.tagline}</p>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={() => {
                      onClose();
                      onSelectTopic(topic);
                    }}
                    className="p-1.5 rounded-lg bg-[#35221B] hover:bg-[#493027] text-[#F1DED1]"
                    title="Open Topic"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onRemoveBookmark(topic.id)}
                    className="p-1.5 rounded-lg hover:bg-rose-950 text-rose-400"
                    title="Remove from Watchlist"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#1E130F] px-6 py-3 border-t border-[#493027] flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-[#35221B] hover:bg-[#493027] text-[#F1DED1] text-xs font-semibold rounded-lg border border-[#493027] font-mono"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
