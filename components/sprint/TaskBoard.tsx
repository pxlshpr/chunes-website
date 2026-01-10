"use client";

import {
  Clock,
  Play,
  CheckCircle2,
  AlertTriangle,
  Pause,
  Circle,
  ExternalLink,
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
      color: "bg-green-400",
      borderColor: "border-green-500",
      label: "Done",
    };
  }
  if (s.includes("running") || s.includes("in progress")) {
    return {
      icon: Play,
      color: "bg-neo-accent",
      borderColor: "border-neo-accent",
      label: "Running",
    };
  }
  if (s.includes("testing")) {
    return {
      icon: AlertTriangle,
      color: "bg-orange-400",
      borderColor: "border-orange-400",
      label: "Testing",
    };
  }
  if (s.includes("ready") || s.includes("queue")) {
    return {
      icon: Clock,
      color: "bg-neo-secondary",
      borderColor: "border-neo-secondary",
      label: "Ready",
    };
  }
  if (s.includes("blocked") || s.includes("paused")) {
    return {
      icon: Pause,
      color: "bg-neo-muted",
      borderColor: "border-neo-muted",
      label: "Blocked",
    };
  }
  return {
    icon: Circle,
    color: "bg-gray-300",
    borderColor: "border-gray-300",
    label: status,
  };
}

function getPriorityConfig(priority: string) {
  const p = priority.toLowerCase();

  if (p.includes("urgent")) {
    return { color: "bg-red-500 text-white", label: "Urgent" };
  }
  if (p.includes("high")) {
    return { color: "bg-orange-400", label: "High" };
  }
  if (p.includes("medium")) {
    return { color: "bg-neo-secondary", label: "Medium" };
  }
  if (p.includes("low")) {
    return { color: "bg-neo-muted", label: "Low" };
  }
  return { color: "bg-gray-200", label: priority };
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
    const aPriority =
      priorityOrder[a.priority.toLowerCase()] ?? 4;
    const bPriority =
      priorityOrder[b.priority.toLowerCase()] ?? 4;
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
            <Badge
              key={status}
              variant="default"
              size="md"
              className={config.color}
            >
              <config.icon className="w-4 h-4 mr-1" />
              {count} {status}
            </Badge>
          );
        })}
      </div>

      {/* Task Grid */}
      <div className="grid gap-4">
        {sortedTasks.map((task, index) => {
          const statusConfig = getStatusConfig(task.status);
          const priorityConfig = getPriorityConfig(task.priority);
          const StatusIcon = statusConfig.icon;
          const isRunning = task.status.toLowerCase().includes("running");
          const isDone = task.status.toLowerCase().includes("done");

          return (
            <Card
              key={task.id}
              hoverable
              rotation={index % 3 === 0 ? 0.5 : index % 3 === 1 ? -0.3 : 0}
              className={`
                ${isRunning ? `border-l-8 ${statusConfig.borderColor}` : ""}
                ${isDone ? "opacity-70" : ""}
                transition-all duration-200
              `}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  {/* Left Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {/* Task ID */}
                      <code className="font-bold text-sm bg-black text-white px-2 py-1">
                        {task.id}
                      </code>

                      {/* Priority Badge */}
                      <Badge
                        variant="default"
                        size="sm"
                        className={priorityConfig.color}
                      >
                        {priorityConfig.label}
                      </Badge>
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-black text-xl uppercase tracking-tight ${
                        isDone ? "line-through opacity-60" : ""
                      }`}
                    >
                      {task.title}
                    </h3>
                  </div>

                  {/* Status */}
                  <div
                    className={`flex items-center gap-2 px-4 py-2 border-4 border-black shadow-neo-sm ${statusConfig.color}`}
                  >
                    <StatusIcon className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase tracking-wide">
                      {statusConfig.label}
                    </span>
                  </div>
                </div>

                {/* Running indicator */}
                {isRunning && (
                  <div className="mt-4 h-1 bg-neo-accent animate-pulse rounded-none" />
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
