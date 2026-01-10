"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Zap, CheckCircle2, Clock, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { PlannedBlock, SprintTask } from "@/lib/sprint-parser";

// Block name lookup
const BLOCK_NAMES: Record<number, string> = {
  1: "Bach",
  2: "Miles",
  3: "Jimi",
  4: "Ella",
  5: "Duke",
  6: "Nina",
};

interface SprintTimelineProps {
  blocks: PlannedBlock[];
  currentBlockNumber: number;
  currentTasks: SprintTask[];
}

interface TimelineNode {
  number: number;
  name: string;
  focus: string;
  dates: string;
  isCurrent: boolean;
  isPast: boolean;
  isFuture: boolean;
  tasks: SprintTask[];
  startDate?: Date;
  endDate?: Date;
}

// Parse date range like "Sat Jan 11 - Mon Jan 13, 2026"
function parseDateRange(dateRange: string): { start: Date; end: Date } | null {
  try {
    if (dateRange.includes(" - ")) {
      const [startPart, endPart] = dateRange.split(" - ");
      const yearMatch = endPart.match(/\d{4}/);
      const year = yearMatch ? yearMatch[0] : new Date().getFullYear().toString();

      const startMatch = startPart.match(/(\w+)\s+(\d+)/);
      if (!startMatch) return null;
      const startMonthDay = `${startMatch[1]} ${startMatch[2]}, ${year}`;
      const endClean = endPart.replace(/^\w+\s+/, "");

      return {
        start: new Date(startMonthDay),
        end: new Date(endClean),
      };
    }
    return null;
  } catch {
    return null;
  }
}

function formatDateShort(date: Date): string {
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function formatDateFull(date: Date): string {
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

export function SprintTimeline({ blocks, currentBlockNumber, currentTasks }: SprintTimelineProps) {
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  // Build timeline nodes
  const nodes: TimelineNode[] = useMemo(() => {
    return blocks.map((block) => {
      const dates = parseDateRange(block.dates);
      return {
        number: block.number,
        name: BLOCK_NAMES[block.number] || block.name,
        focus: block.focus,
        dates: block.dates,
        isCurrent: block.number === currentBlockNumber,
        isPast: block.number < currentBlockNumber,
        isFuture: block.number > currentBlockNumber,
        tasks: block.number === currentBlockNumber ? currentTasks : block.tasks,
        startDate: dates?.start,
        endDate: dates?.end,
      };
    });
  }, [blocks, currentBlockNumber, currentTasks]);

  const selectedNode = nodes.find((n) => n.number === selectedBlock);

  // Check scroll state
  const updateScrollState = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
    }
  };

  useEffect(() => {
    updateScrollState();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollState);
      window.addEventListener("resize", updateScrollState);
      return () => {
        container.removeEventListener("scroll", updateScrollState);
        window.removeEventListener("resize", updateScrollState);
      };
    }
  }, [nodes.length]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-8 sm:py-12">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2
            className="font-extrabold text-2xl sm:text-3xl text-clay-foreground mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            What&apos;s Coming Next
          </h2>
          <p className="font-medium text-sm text-clay-muted">
            Tap a block to see its planned tasks
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong shadow-clayCard flex items-center justify-center transition-all duration-200 ${
              canScrollLeft ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronLeft className="w-5 h-5 text-clay-foreground" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong shadow-clayCard flex items-center justify-center transition-all duration-200 ${
              canScrollRight ? "opacity-100 cursor-pointer" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronRight className="w-5 h-5 text-clay-foreground" />
          </button>

          {/* Fade edges */}
          <div
            className={`absolute left-10 top-0 bottom-0 w-8 bg-gradient-to-r from-clay-background to-transparent z-10 pointer-events-none transition-opacity ${
              canScrollLeft ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`absolute right-10 top-0 bottom-0 w-8 bg-gradient-to-l from-clay-background to-transparent z-10 pointer-events-none transition-opacity ${
              canScrollRight ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Scrollable Timeline */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto px-12 pb-4 scrollbar-hide"
          >
            <div className="flex gap-4 min-w-max py-4">
              {nodes.map((node) => {
                const isSelected = selectedBlock === node.number;

                return (
                  <button
                    key={node.number}
                    onClick={() => {
                      setSelectedBlock(isSelected ? null : node.number);
                    }}
                    className={`relative flex-shrink-0 w-32 sm:w-40 h-24 sm:h-28 rounded-[20px] transition-all duration-300 ${
                      isSelected ? "scale-105 z-20" : "hover:scale-[1.02]"
                    } ${selectedBlock !== null && !isSelected ? "opacity-50" : ""}`}
                  >
                    {/* Block Background */}
                    <div
                      className={`absolute inset-0 rounded-[20px] transition-all duration-300 ${
                        node.isCurrent
                          ? "gradient-primary shadow-clayButton"
                          : node.isPast
                          ? "bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-clayButton"
                          : isSelected
                          ? "glass-strong shadow-clayCardHover"
                          : "glass shadow-clayCard"
                      }`}
                    >
                      {/* Current badge */}
                      {node.isCurrent && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <Badge variant="warning" size="sm" className="animate-clay-breathe">
                            <Zap className="w-3 h-3" />
                          </Badge>
                        </div>
                      )}
                      {node.isPast && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <Badge variant="success" size="sm">
                            <CheckCircle2 className="w-3 h-3" />
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Block Content */}
                    <div className="relative h-full flex flex-col items-center justify-center px-3">
                      <span
                        className={`font-black text-2xl sm:text-3xl ${
                          node.isCurrent || node.isPast ? "text-white" : "text-clay-foreground"
                        }`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {node.number.toString().padStart(2, "0")}
                      </span>
                      <span
                        className={`font-bold text-xs sm:text-sm capitalize ${
                          node.isCurrent || node.isPast ? "text-white/90" : "text-clay-muted"
                        }`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {node.name}
                      </span>
                      {node.startDate && (
                        <span
                          className={`font-medium text-[10px] mt-1 ${
                            node.isCurrent || node.isPast ? "text-white/70" : "text-clay-muted/70"
                          }`}
                        >
                          {formatDateShort(node.startDate)}
                        </span>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Selected Block Tasks Panel */}
        {selectedNode && (
          <div className="mt-6 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="glass-strong rounded-[24px] p-6 shadow-clayCard">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3
                    className="font-extrabold text-lg text-clay-foreground mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Block {selectedNode.number}: {selectedNode.name}
                  </h3>
                  <p className="font-medium text-sm text-clay-muted">
                    {selectedNode.focus}
                  </p>
                  {selectedNode.startDate && selectedNode.endDate && (
                    <p className="font-medium text-xs text-clay-muted/70 mt-1">
                      {formatDateFull(selectedNode.startDate)} - {formatDateFull(selectedNode.endDate)}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedBlock(null)}
                  className="p-2 rounded-full glass hover:bg-white/50 transition-colors"
                >
                  <X className="w-4 h-4 text-clay-muted" />
                </button>
              </div>

              {selectedNode.tasks.length > 0 ? (
                <div className="space-y-2">
                  {selectedNode.tasks.map((task, idx) => (
                    <div
                      key={task.id}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 glass rounded-[16px] animate-in fade-in slide-in-from-left-2"
                      style={{ animationDelay: `${idx * 50}ms` }}
                    >
                      <code
                        className="font-bold text-xs px-2 py-1 rounded-lg gradient-primary text-white w-fit"
                      >
                        {task.id}
                      </code>
                      <span className="font-medium text-sm text-clay-foreground flex-1">
                        {task.title}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="font-medium text-sm text-clay-muted text-center py-4">
                  {selectedNode.isPast ? "No task history available" : "No tasks planned yet"}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
