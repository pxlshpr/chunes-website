"use client";

import { Check, Clock, Zap } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { PlannedBlock } from "@/lib/sprint-parser";

interface BlockTimelineProps {
  blocks: PlannedBlock[];
  currentBlockNumber: number;
}

export function BlockTimeline({ blocks, currentBlockNumber }: BlockTimelineProps) {
  return (
    <div className="space-y-6">
      <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tighter">
        Block Timeline
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blocks.map((block) => {
          const isCurrent = block.number === currentBlockNumber;
          const isPast = block.number < currentBlockNumber;
          const isFuture = block.number > currentBlockNumber;

          return (
            <Card
              key={block.number}
              variant={isCurrent ? "secondary" : isPast ? "default" : "default"}
              hoverable={!isPast}
              className={`
                relative
                ${isCurrent ? "border-neo-accent shadow-neo-lg" : ""}
                ${isPast ? "opacity-60" : ""}
              `}
            >
              {/* Status Badge */}
              {isCurrent && (
                <Badge
                  variant="accent"
                  size="sm"
                  rotation={6}
                  className="absolute -top-3 -right-3 z-10"
                >
                  <Zap className="w-3 h-3 mr-1" />
                  Current
                </Badge>
              )}
              {isPast && (
                <Badge
                  variant="black"
                  size="sm"
                  className="absolute -top-3 -right-3 z-10"
                >
                  <Check className="w-3 h-3 mr-1" />
                  Done
                </Badge>
              )}

              <CardHeader
                variant={isCurrent ? "accent" : isPast ? "muted" : "default"}
              >
                <div className="flex items-center justify-between">
                  <span className="font-black text-3xl">
                    {block.number.toString().padStart(2, "0")}
                  </span>
                  <span className="font-black text-lg uppercase">
                    {block.name}
                  </span>
                </div>
              </CardHeader>

              <CardContent>
                <h3 className="font-black text-lg uppercase tracking-tight mb-2">
                  {block.focus}
                </h3>
                <p className="font-bold text-sm uppercase tracking-wide opacity-60 mb-4">
                  {block.dates}
                </p>

                {/* Task count */}
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 opacity-60" />
                  <span className="font-bold text-sm opacity-70">
                    {block.tasks.length} Tasks
                  </span>
                </div>

                {/* Task list preview */}
                {isCurrent && block.tasks.length > 0 && (
                  <div className="mt-4 pt-4 border-t-2 border-black border-dashed">
                    <ul className="space-y-1">
                      {block.tasks.slice(0, 3).map((task) => (
                        <li
                          key={task.id}
                          className="font-bold text-sm truncate"
                        >
                          • {task.title}
                        </li>
                      ))}
                      {block.tasks.length > 3 && (
                        <li className="font-bold text-sm opacity-60">
                          +{block.tasks.length - 3} more...
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
