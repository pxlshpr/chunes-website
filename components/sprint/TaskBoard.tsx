"use client";

import {
  Clock,
  Play,
  CheckCircle2,
  AlertTriangle,
  Pause,
  Circle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import type { SprintTask } from "@/lib/sprint-parser";

interface TaskBoardProps {
  tasks: SprintTask[];
}

function getStatusConfig(status: string) {
  const s = status.toLowerCase();

  if (s.includes("done") || s.includes("completed")) {
    return {
      icon: CheckCircle2,
      gradient: "from-emerald-400 to-emerald-600",
      label: "Done",
      textColor: "text-clay-success",
    };
  }
  if (s.includes("running") || s.includes("in progress")) {
    return {
      icon: Play,
      gradient: "from-purple-400 to-purple-600",
      label: "Running",
      textColor: "text-clay-accent",
    };
  }
  if (s.includes("testing")) {
    return {
      icon: AlertTriangle,
      gradient: "from-amber-400 to-amber-600",
      label: "Testing",
      textColor: "text-clay-warning",
    };
  }
  if (s.includes("ready") || s.includes("queue")) {
    return {
      icon: Clock,
      gradient: "from-blue-400 to-blue-600",
      label: "Ready",
      textColor: "text-clay-sky",
    };
  }
  if (s.includes("blocked") || s.includes("paused")) {
    return {
      icon: Pause,
      gradient: "from-gray-400 to-gray-500",
      label: "Blocked",
      textColor: "text-clay-muted",
    };
  }
  return {
    icon: Circle,
    gradient: "from-gray-300 to-gray-400",
    label: status,
    textColor: "text-clay-muted",
  };
}

function getPriorityConfig(priority: string) {
  const p = priority.toLowerCase();

  if (p.includes("urgent")) {
    return { gradient: "from-red-400 to-red-600", label: "Urgent", variant: "accent" as const };
  }
  if (p.includes("high")) {
    return { gradient: "from-orange-400 to-orange-600", label: "High", variant: "warning" as const };
  }
  if (p.includes("medium")) {
    return { gradient: "from-blue-400 to-blue-600", label: "Medium", variant: "default" as const };
  }
  if (p.includes("low")) {
    return { gradient: "from-gray-400 to-gray-500", label: "Low", variant: "muted" as const };
  }
  return { gradient: "from-gray-300 to-gray-400", label: priority, variant: "muted" as const };
}

export function TaskBoard({ tasks }: TaskBoardProps) {
  // Sort tasks: Running first, then by priority
  const sortedTasks = [...tasks].sort((a, b) => {
    const aRunning = a.status.toLowerCase().includes("running") ? 0 : 1;
    const bRunning = b.status.toLowerCase().includes("running") ? 0 : 1;
    if (aRunning !== bRunning) return aRunning - bRunning;

    const priorityOrder: Record<string, number> = {
      urgent: 0,
      high: 1,
      medium: 2,
      low: 3,
    };
    const aPriority = priorityOrder[a.priority.toLowerCase()] ?? 4;
    const bPriority = priorityOrder[b.priority.toLowerCase()] ?? 4;
    return aPriority - bPriority;
  });

  // Status summary
  const statusCounts = tasks.reduce((acc, task) => {
    const config = getStatusConfig(task.status);
    acc[config.label] = (acc[config.label] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="space-y-6">
      {/* Status Summary */}
      <div className="flex flex-wrap gap-3">
        {Object.entries(statusCounts).map(([status, count]) => {
          const config = getStatusConfig(status);
          return (
            <div
              key={status}
              className="glass rounded-full px-4 py-2 shadow-clayCard flex items-center gap-2"
            >
              <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${config.gradient} flex items-center justify-center`}>
                <config.icon className="w-3 h-3 text-white" />
              </div>
              <span className="font-bold text-sm text-clay-foreground">
                {count} {status}
              </span>
            </div>
          );
        })}
      </div>

      {/* Task Grid */}
      <div className="grid gap-4">
        {sortedTasks.map((task) => {
          const statusConfig = getStatusConfig(task.status);
          const priorityConfig = getPriorityConfig(task.priority);
          const StatusIcon = statusConfig.icon;
          const isRunning = task.status.toLowerCase().includes("running");
          const isDone = task.status.toLowerCase().includes("done");

          return (
            <Card
              key={task.id}
              variant="glass"
              hoverable
              className={`
                ${isRunning ? "ring-2 ring-clay-accent/50" : ""}
                ${isDone ? "opacity-70" : ""}
              `}
            >
              <CardContent className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      {/* Task ID */}
                      <code
                        className="font-bold text-xs px-2 py-1 rounded-lg bg-gradient-to-br from-purple-400 to-purple-600 text-white"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {task.id}
                      </code>

                      {/* Priority Badge */}
                      <Badge variant={priorityConfig.variant} size="sm">
                        {priorityConfig.label}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-extrabold text-lg sm:text-xl text-clay-foreground ${
                        isDone ? "line-through opacity-60" : ""
                      }`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {task.title}
                    </h3>
                  </div>

                  {/* Status */}
                  <div
                    className={`flex items-center gap-2 px-4 py-2 rounded-[16px] bg-gradient-to-br ${statusConfig.gradient} shadow-clayButton`}
                  >
                    <StatusIcon className="w-4 h-4 text-white" />
                    <span
                      className="font-bold text-sm text-white"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {statusConfig.label}
                    </span>
                  </div>
                </div>

                {/* Running indicator */}
                {isRunning && (
                  <div className="mt-4 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse" />
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
