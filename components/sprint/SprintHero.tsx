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
      color: "from-gray-400 to-gray-500",
      icon: Clock,
      text: "Not Started",
      variant: "muted" as const,
    };
  }
  if (normalizedStatus.includes("in progress") || normalizedStatus.includes("running")) {
    return {
      color: "from-purple-400 to-purple-600",
      icon: Zap,
      text: "In Progress",
      variant: "accent" as const,
    };
  }
  if (normalizedStatus.includes("done") || normalizedStatus.includes("completed")) {
    return {
      color: "from-emerald-400 to-emerald-600",
      icon: CheckCircle2,
      text: "Completed",
      variant: "success" as const,
    };
  }
  return {
    color: "from-amber-400 to-amber-600",
    icon: AlertCircle,
    text: status,
    variant: "warning" as const,
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
      <div className="glass-strong rounded-[40px] shadow-clayCard p-6 sm:p-8 md:p-12">
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
          {/* Left Content */}
          <div>
            {/* Status Badge */}
            <Badge
              variant={statusConfig.variant}
              size="lg"
              className="mb-6"
            >
              <StatusIcon className="w-5 h-5 mr-2" />
              {statusConfig.text}
            </Badge>

            {/* Block Title */}
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-4">
              <span
                className="font-black text-5xl sm:text-6xl md:text-8xl tracking-tighter gradient-text"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {sprint.blockNumber.toString().padStart(2, "0")}
              </span>
              <div>
                <h1
                  className="font-black text-2xl sm:text-3xl md:text-4xl text-clay-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Block {sprint.blockLabel.split("-")[1]?.toUpperCase() || sprint.blockLabel}
                </h1>
                <p className="font-medium text-base sm:text-lg md:text-xl text-clay-muted">
                  {sprint.theme}
                </p>
              </div>
            </div>

            {/* Dates */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="glass rounded-[16px] px-4 py-2 shadow-clayCard">
                <span className="font-bold text-sm text-clay-foreground">
                  {sprint.startDate} → {sprint.endDate}
                </span>
              </div>
              {daysRemaining > 0 && (
                <div className="gradient-primary rounded-[16px] px-4 py-2 shadow-clayButton">
                  <span className="font-bold text-sm text-white">
                    {daysRemaining} {daysRemaining === 1 ? "Day" : "Days"} Left
                  </span>
                </div>
              )}
            </div>

            {/* Goal */}
            <p className="font-medium text-base sm:text-lg leading-relaxed text-clay-muted max-w-2xl">
              {sprint.goal}
            </p>
          </div>

          {/* Progress Ring */}
          <div className="flex flex-col items-center">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 animate-clay-breathe">
              {/* Background circle */}
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="8"
                  className="text-clay-muted/20"
                />
                {/* Progress circle */}
                <defs>
                  <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="100%" stopColor="#7C3AED" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  fill="none"
                  stroke="url(#progressGradient)"
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${progress * 2.64} 264`}
                  className="transition-all duration-500"
                />
              </svg>
              {/* Center text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span
                  className="font-black text-3xl sm:text-4xl md:text-5xl text-clay-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {progress}%
                </span>
                <span className="font-bold text-xs sm:text-sm text-clay-muted">
                  Complete
                </span>
              </div>
            </div>

            {/* Task count */}
            <div className="mt-4 text-center">
              <span
                className="font-black text-xl sm:text-2xl text-clay-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {sprint.outcome.tasksCompleted}/{sprint.outcome.tasksPlanned}
              </span>
              <span className="font-bold text-sm text-clay-muted ml-2">
                Tasks
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-clayButton opacity-60 animate-clay-float hidden lg:block" />
      <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 shadow-clayButton opacity-50 animate-clay-float-delayed hidden lg:block" />
    </div>
  );
}
