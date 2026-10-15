import React, { useState, useRef, useEffect } from 'react';
import { TopicCluster } from '../types';
import { Sparkles, ZoomIn, ZoomOut, RotateCcw, Compass, ArrowRight, TrendingUp } from 'lucide-react';

interface TrendGalaxyViewProps {
  topics: TopicCluster[];
  onSelectTopic: (topic: TopicCluster) => void;
}

interface GalaxyNode {
  topic: TopicCluster;
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
}

export const TrendGalaxyView: React.FC<TrendGalaxyViewProps> = ({
  topics,
  onSelectTopic
}) => {
  const [selectedNode, setSelectedNode] = useState<TopicCluster | null>(null);
  const [hoveredNode, setHoveredNode] = useState<TopicCluster | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Position nodes radially based on semantic affinity
  const nodes = useRef<GalaxyNode[]>([]);

  useEffect(() => {
    const width = 800;
    const height = 550;
    const centerX = width / 2;
    const centerY = height / 2;

    nodes.current = topics.map((topic, i) => {
      const angle = (i / topics.length) * Math.PI * 2;
      const distance = 120 + ((i * 47) % 130);
      const radius = Math.max(18, Math.min(42, Math.sqrt(topic.currentArticleCount) * 0.95));

      return {
        topic,
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        radius,
        vx: 0,
        vy: 0
      };
    });
  }, [topics]);

  // Canvas render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw background space nebula
      const grad = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        50,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 1.5
      );
      grad.addColorStop(0, '#2A1A15');
      grad.addColorStop(1, '#1C120E');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle background grid
      ctx.strokeStyle = 'rgba(74, 44, 34, 0.25)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < canvas.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw semantic similarity connecting edges
      for (let i = 0; i < nodes.current.length; i++) {
        for (let j = i + 1; j < nodes.current.length; j++) {
          const n1 = nodes.current[i];
          const n2 = nodes.current[j];
          const dx = n2.x - n1.x;
          const dy = n2.y - n1.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect nodes that share category or are within semantic distance
          const shareCategory = n1.topic.category === n2.topic.category;
          if (dist < 260 || shareCategory) {
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.strokeStyle = shareCategory ? 'rgba(201, 139, 91, 0.35)' : 'rgba(217, 185, 154, 0.15)';
            ctx.lineWidth = shareCategory ? 1.5 : 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.current.forEach((n) => {
        const isHovered = hoveredNode?.id === n.topic.id;
        const isSelected = selectedNode?.id === n.topic.id;
        const matchesCategory = filterCategory === 'All' || n.topic.category === filterCategory;

        const effectiveRadius = (isHovered || isSelected ? n.radius * 1.25 : n.radius) * zoomLevel;

        ctx.save();
        ctx.globalAlpha = matchesCategory ? 1 : 0.25;

        // Outer glow
        const glow = ctx.createRadialGradient(n.x, n.y, effectiveRadius * 0.4, n.x, n.y, effectiveRadius * 1.8);
        glow.addColorStop(0, n.topic.growthRate > 180 ? 'rgba(201, 139, 91, 0.6)' : 'rgba(149, 107, 75, 0.4)');
        glow.addColorStop(1, 'rgba(28, 18, 14, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(n.x, n.y, effectiveRadius * 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Node Body
        const nodeGrad = ctx.createRadialGradient(n.x - 4, n.y - 4, 2, n.x, n.y, effectiveRadius);
        if (n.topic.growthRate > 200) {
          nodeGrad.addColorStop(0, '#FFE8D6');
          nodeGrad.addColorStop(0.5, '#C98B5B');
          nodeGrad.addColorStop(1, '#6B4030');
        } else {
          nodeGrad.addColorStop(0, '#D9B99A');
          nodeGrad.addColorStop(0.6, '#956B4B');
          nodeGrad.addColorStop(1, '#2A1A15');
        }

        ctx.fillStyle = nodeGrad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, effectiveRadius, 0, Math.PI * 2);
        ctx.fill();

        // Border ring
        ctx.strokeStyle = isHovered || isSelected ? '#FFFFFF' : '#C98B5B';
        ctx.lineWidth = isHovered || isSelected ? 2.5 : 1;
        ctx.stroke();

        // Topic Label Text
        ctx.fillStyle = '#F7F1E8';
        ctx.font = isHovered || isSelected ? 'bold 11px Plus Jakarta Sans' : '10px Plus Jakarta Sans';
        ctx.textAlign = 'center';
        const labelWords = n.topic.label.split(' ');
        const shortLabel = labelWords.slice(0, 3).join(' ') + (labelWords.length > 3 ? '...' : '');
        ctx.fillText(shortLabel, n.x, n.y + effectiveRadius + 14);

        // Growth tag below
        ctx.fillStyle = '#C98B5B';
        ctx.font = 'bold 9px JetBrains Mono';
        ctx.fillText(`+${n.topic.growthRate}%`, n.x, n.y + effectiveRadius + 26);

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [hoveredNode, selectedNode, filterCategory, zoomLevel]);

  // Handle canvas clicks & hovering
  const handleCanvasMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    const hit = nodes.current.find((n) => {
      const dx = mouseX - n.x;
      const dy = mouseY - n.y;
      return Math.sqrt(dx * dx + dy * dy) <= n.radius * zoomLevel + 6;
    });

    setHoveredNode(hit ? hit.topic : null);
  };

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const mouseX = (e.clientX - rect.left) * scaleX;
    const mouseY = (e.clientY - rect.top) * scaleY;

    const hit = nodes.current.find((n) => {
      const dx = mouseX - n.x;
      const dy = mouseY - n.y;
      return Math.sqrt(dx * dx + dy * dy) <= n.radius * zoomLevel + 8;
    });

    if (hit) {
      setSelectedNode(hit.topic);
    }
  };

  return (
    <div className="space-y-6 pb-16 animate-fade-in">
      {/* Title */}
      <div className="bg-[#FFFDF8] p-6 sm:p-8 rounded-3xl border border-[#D9B99A]/60 shadow-xs flex flex-wrap items-center justify-between gap-4">
        <div className="max-w-2xl space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-[#C98B5B] uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            Signature Semantic Visualization
          </div>
          <h1 className="text-3xl font-editorial font-bold text-[#1C120E]">
            Trend Galaxy: The Discovered News Map
          </h1>
          <p className="text-xs sm:text-sm text-[#4A2C22]">
            Node size corresponds to article volume. Copper glow represents momentum velocity. Lines show semantic similarity and shared entities. Click any node to open its full intelligence dossier.
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoomLevel((z) => Math.min(1.4, z + 0.1))}
            className="p-2 bg-[#F7F1E8] hover:bg-[#D9B99A]/50 rounded-lg text-[#1C120E] border border-[#D9B99A]/50"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(0.7, z - 0.1))}
            className="p-2 bg-[#F7F1E8] hover:bg-[#D9B99A]/50 rounded-lg text-[#1C120E] border border-[#D9B99A]/50"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            className="p-2 bg-[#F7F1E8] hover:bg-[#D9B99A]/50 rounded-lg text-[#1C120E] border border-[#D9B99A]/50"
            title="Reset Zoom"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Galaxy Canvas Container */}
      <div className="relative rounded-3xl overflow-hidden border border-[#4A2C22] shadow-2xl bg-[#1C120E]">
        <canvas
          ref={canvasRef}
          width={880}
          height={550}
          onMouseMove={handleCanvasMouseMove}
          onClick={handleCanvasClick}
          className="w-full h-[520px] cursor-pointer block"
        />

        {/* Interactive Floating Inspection Drawer */}
        {(selectedNode || hoveredNode) && (
          <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 bg-[#FFFDF8] border border-[#C98B5B] rounded-2xl p-5 shadow-2xl animate-fade-in text-xs text-[#1C120E] space-y-3">
            {(() => {
              const active = selectedNode || hoveredNode!;
              return (
                <>
                  <div className="flex items-center justify-between text-[11px] text-[#6B4030]">
                    <span className="font-bold text-[#C98B5B] uppercase tracking-wider">{active.category}</span>
                    <span className="font-mono">Trend Score: {active.trendScore}/100</span>
                  </div>

                  <h3 className="font-editorial text-base font-bold text-[#1C120E] leading-snug">
                    {active.label}
                  </h3>

                  <p className="text-[#4A2C22] line-clamp-2 leading-relaxed">
                    {active.summary}
                  </p>

                  <div className="flex items-center justify-between pt-2 border-t border-[#D9B99A]/40 text-xs">
                    <span className="font-bold text-[#C98B5B]">+{active.growthRate}% Growth</span>
                    <button
                      onClick={() => onSelectTopic(active)}
                      className="px-3 py-1.5 bg-[#2A1A15] hover:bg-[#1C120E] text-[#F7F1E8] font-bold rounded-lg flex items-center gap-1 transition-colors"
                    >
                      Open Dossier <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
};
