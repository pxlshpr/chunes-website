"use client";

import { Clock, Zap, CheckCircle2, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { SprintData } from "@/lib/sprint-parser";

interface SprintHeroProps {
  sprint: SprintData;
  progress: number;
}

function getStatusConfig(status: string) {
  const normalizedStatus = status.toLowerCase();

  if (normalizedStatus.includes("not started")) {
    return {
      color: "bg-neo-muted",
      icon: Clock,
      text: "Not Started",
    };
  }
  if (normalizedStatus.includes("in progress") || normalizedStatus.includes("running")) {
    return {
      color: "bg-neo-accent",
      icon: Zap,
      text: "In Progress",
    };
  }
  if (normalizedStatus.includes("done") || normalizedStatus.includes("completed")) {
    return {
      color: "bg-green-400",
      icon: CheckCircle2,
      text: "Completed",
    };
  }
  return {
    color: "bg-neo-secondary",
    icon: AlertCircle,
    text: status,
  };
}

export function SprintHero({ sprint, progress }: SprintHeroProps) {
  const statusConfig = getStatusConfig(sprint.status);
  const StatusIcon = statusConfig.icon;

  // Calculate days remaining
  const endDate = new Date(sprint.endDate.replace(/(\w+), (\w+ \d+), (\d+)/, "$2, $3"));
  const now = new Date();
  const daysRemaining = Math.max(0, Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)));

  return (
    <div className="relative">
      {/* Main Hero Card */}
      <div className="bg-white border-4 border-black shadow-neo-xl p-8 md:p-12">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          {/* Left Content */}
          <div>
            {/* Status Badge */}
            <Badge
              variant={sprint.status.toLowerCase().includes("progress") ? "accent" : "muted"}
              size="lg"
              className="mb-6"
            >
              <StatusIcon className="w-5 h-5 mr-2" />
              {statusConfig.text}
            </Badge>

            {/* Block Title */}
            <div className="flex items-baseline gap-4 mb-4">
              <span className="font-black text-6xl md:text-8xl tracking-tighter">
                {sprint.blockNumber.toString().padStart(2, "0")}
              </span>
              <div>
                <h1 className="font-black text-3xl md:text-4xl uppercase tracking-tight">
                  Block {sprint.blockLabel.split("-")[1]?.toUpperCase() || sprint.blockLabel}
                </h1>
                <p className="font-bold text-lg md:text-xl opacity-70">
                  {sprint.theme}
                </p>
              </div>
            </div>

            {/* Dates */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="border-4 border-black bg-neo-secondary px-4 py-2 shadow-neo-sm">
                <span className="font-bold text-sm uppercase tracking-wide">
                  {sprint.startDate} → {sprint.endDate}
                </span>
              </div>
              {daysRemaining > 0 && (
                <div className="border-4 border-black bg-neo-muted px-4 py-2 shadow-neo-sm">
                  <span className="font-bold text-sm uppercase tracking-wide">
                    {daysRemaining} {daysRemaining === 1 ? "Day" : "Days"} Left
                  </span>
                </div>
              )}
            </div>

            {/* Goal */}
            <p className="font-bold text-lg leading-relaxed max-w-2xl">
              {sprint.goal}
            </p>
          </div>

          {/* Progress Ring */}
          <div className="flex flex-col items-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48">
              {/* Background circle */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="black"
                  strokeWidth="8"
                  className="opacity-20"
                />
                {/* Progress circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="8"
                  strokeLinecap="square"
                  strokeDasharray={`${progress * 2.64} 264`}
                  className="transition-all duration-500"
                />
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-black text-4xl md:text-5xl">{progress}%</span>
                <span className="font-bold text-sm uppercase tracking-wide opacity-70">
                  Complete
                </span>
              </div>
            </div>

            {/* Task count */}
            <div className="mt-4 text-center">
              <span className="font-black text-2xl">
                {sprint.outcome.tasksCompleted}/{sprint.outcome.tasksPlanned}
              </span>
              <span className="font-bold text-sm uppercase tracking-wide opacity-70 ml-2">
                Tasks
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-4 -right-4 w-16 h-16 bg-neo-secondary border-4 border-black shadow-neo-md rotate-12 -z-10" />
      <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-neo-accent border-4 border-black shadow-neo-md -rotate-6 -z-10" />
    </div>
  );
}
