import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, RefreshCw, ExternalLink } from "lucide-react";
import { NeoBackground } from "@/components/backgrounds";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SprintHero } from "@/components/sprint/SprintHero";
import { TaskBoard } from "@/components/sprint/TaskBoard";
import { BlockTimeline } from "@/components/sprint/BlockTimeline";
import {
  parseCurrentSprint,
  parsePlannedSprints,
  calculateProgress,
  type SprintData,
  type PlannedBlock,
} from "@/lib/sprint-parser";

export const revalidate = 30; // Revalidate every 30 seconds

// Fallback data in case API calls fail
const fallbackSprintData: SprintData = {
  status: "NOT STARTED",
  blockNumber: 1,
  blockLabel: "b1-bach",
  theme: "Foundation & Core Playback",
  startDate: "Sat, Jan 11, 2026",
  endDate: "Mon, Jan 13, 2026",
  goal: "Establish the core foundation for Chunes MVP. Focus on Apple Music integration, basic playback, and essential app stability.",
  tasks: [
    { id: "PXL-868", title: "🧹 Remove Spotify Integration Code", status: "Ready", priority: "Urgent" },
    { id: "PXL-871", title: "🎵 Complete Apple Music Metadata Fetching", status: "Ready", priority: "Urgent" },
    { id: "PXL-873", title: "▶️ Reliable Music Playback Foundation", status: "Ready", priority: "High" },
    { id: "PXL-874", title: "🚀 Fix App Startup and Basic Navigation", status: "Ready", priority: "High" },
  ],
  dailyLog: [
    { day: 1, date: "Sat, Jan 11", morningStandup: "-", eodSummary: "-" },
    { day: 2, date: "Sun, Jan 12", morningStandup: "-", eodSummary: "-" },
    { day: 3, date: "Mon, Jan 13", morningStandup: "-", eodSummary: "-", buildSubmitted: "-" },
  ],
  blockers: "_Track any blockers or important discoveries during the block_",
  outcome: {
    tasksPlanned: 4,
    tasksCompleted: 0,
    buildVersion: "-",
    submitted: "-",
  },
};

const fallbackPlannedBlocks: PlannedBlock[] = [
  {
    number: 1,
    name: "bach",
    dates: "Sat Jan 11 - Mon Jan 13, 2026",
    focus: "Foundation & Core Playback",
    tasks: [
      { id: "PXL-868", title: "🧹 Remove Spotify Integration Code", status: "Planned", priority: "Urgent" },
      { id: "PXL-871", title: "🎵 Complete Apple Music Metadata Fetching", status: "Planned", priority: "Urgent" },
      { id: "PXL-873", title: "▶️ Reliable Music Playback Foundation", status: "Planned", priority: "High" },
      { id: "PXL-874", title: "🚀 Fix App Startup and Basic Navigation", status: "Planned", priority: "High" },
    ],
  },
  {
    number: 2,
    name: "miles",
    dates: "Tue Jan 14 - Thu Jan 16, 2026",
    focus: "Tagging System Core",
    tasks: [
      { id: "PXL-878", title: "🏷️ Tag Management System", status: "Planned", priority: "High" },
      { id: "PXL-881", title: "✨ Add Tags to Songs", status: "Planned", priority: "High" },
      { id: "PXL-885", title: "📂 View Songs by Tag", status: "Planned", priority: "Medium" },
      { id: "PXL-887", title: "🗂️ Tag Categories and Organization", status: "Planned", priority: "Medium" },
    ],
  },
  {
    number: 3,
    name: "jimi",
    dates: "Fri Jan 17 - Sun Jan 19, 2026",
    focus: "Markers & Moments",
    tasks: [
      { id: "PXL-876", title: "📍 Create and Save Song Markers", status: "Planned", priority: "High" },
      { id: "PXL-879", title: "⏭️ Jump to Markers During Playback", status: "Planned", priority: "High" },
      { id: "PXL-882", title: "✏️ Edit and Manage Markers", status: "Planned", priority: "Medium" },
      { id: "PXL-886", title: "🔍 Filter Songs by Marker Names", status: "Planned", priority: "Medium" },
    ],
  },
  {
    number: 4,
    name: "ella",
    dates: "Mon Jan 20 - Wed Jan 22, 2026",
    focus: "Filtering & Discovery",
    tasks: [
      { id: "PXL-867", title: "🎤 Vocal Level Filtering", status: "Planned", priority: "High" },
      { id: "PXL-869", title: "↕️ Sort Your Music Your Way", status: "Planned", priority: "High" },
      { id: "PXL-870", title: "📅 Filter by Release Date and Duration", status: "Planned", priority: "Medium" },
      { id: "PXL-872", title: "⭐ Save Favorite Filter Combinations", status: "Planned", priority: "Medium" },
    ],
  },
  {
    number: 5,
    name: "duke",
    dates: "Thu Jan 23 - Sat Jan 25, 2026",
    focus: "Import & Export",
    tasks: [
      { id: "PXL-875", title: "📤 Export Your Chunes Data", status: "Planned", priority: "High" },
      { id: "PXL-877", title: "📥 Import Chunes Data", status: "Planned", priority: "High" },
      { id: "PXL-880", title: "🎯 Selective Export by Filter", status: "Planned", priority: "Medium" },
      { id: "PXL-883", title: "🛡️ Data Integrity and Validation", status: "Planned", priority: "Medium" },
    ],
  },
  {
    number: 6,
    name: "nina",
    dates: "Sun Jan 26 - Tue Jan 28, 2026",
    focus: "Polish & Launch Prep",
    tasks: [
      { id: "PXL-884", title: "🔎 Search Your Library", status: "Planned", priority: "High" },
      { id: "PXL-888", title: "🎨 Visualizer and Now Playing Polish", status: "Planned", priority: "Medium" },
      { id: "PXL-889", title: "⚡ Performance Optimization", status: "Planned", priority: "High" },
      { id: "PXL-890", title: "🚀 TestFlight Preparation and Bug Fixes", status: "Planned", priority: "Urgent" },
    ],
  },
];

async function getSprintData(): Promise<{
  sprint: SprintData;
  blocks: PlannedBlock[];
  isLive: boolean;
}> {
  try {
    const [sprint, blocks] = await Promise.all([
      parseCurrentSprint(),
      parsePlannedSprints(),
    ]);

    return {
      sprint: sprint || fallbackSprintData,
      blocks: blocks.length > 0 ? blocks : fallbackPlannedBlocks,
      isLive: !!(sprint && blocks.length > 0),
    };
  } catch (error) {
    console.error("Error fetching sprint data:", error);
    return {
      sprint: fallbackSprintData,
      blocks: fallbackPlannedBlocks,
      isLive: false,
    };
  }
}

export default async function BlockPage() {
  const { sprint, blocks, isLive } = await getSprintData();
  const progress = calculateProgress(sprint.tasks);

  return (
    <div className="min-h-screen">
      <NeoBackground />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-neo-background border-b-4 border-black">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Back to Home */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
            >
              <div className="w-12 h-12 bg-neo-secondary border-4 border-black shadow-neo-sm overflow-hidden">
                <Image
                  src="/chunes-icon.png"
                  alt="Chunes"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-black text-2xl uppercase tracking-tight">
                Chunes
              </span>
            </Link>

            {/* Page Title & Status */}
            <div className="hidden md:flex items-center gap-4">
              <Badge variant="muted" size="md">
                Development Tracker
              </Badge>
              {isLive ? (
                <Badge variant="accent" size="sm">
                  <RefreshCw className="w-3 h-3 mr-1 animate-spin-slow" />
                  Live
                </Badge>
              ) : (
                <Badge variant="secondary" size="sm">
                  Static Data
                </Badge>
              )}
            </div>

            {/* Back Button */}
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto max-w-7xl px-6 py-12">
        {/* Sprint Hero */}
        <section className="mb-16">
          <SprintHero sprint={sprint} progress={progress} />
        </section>

        {/* Tasks Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tighter">
              Sprint Tasks
            </h2>
            <Badge variant="secondary" size="md">
              Block {sprint.blockNumber}
            </Badge>
          </div>
          <TaskBoard tasks={sprint.tasks} />
        </section>

        {/* Daily Log */}
        {sprint.dailyLog.length > 0 && (
          <section className="mb-16">
            <h2 className="font-black text-3xl md:text-4xl uppercase tracking-tighter mb-6">
              Daily Log
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {sprint.dailyLog.map((day) => (
                <div
                  key={day.day}
                  className="bg-white border-4 border-black shadow-neo-sm p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-black text-2xl">Day {day.day}</span>
                    <span className="font-bold text-sm opacity-60">
                      {day.date}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <span className="font-black text-xs uppercase tracking-widest opacity-60">
                        Standup
                      </span>
                      <p className="font-bold">
                        {day.morningStandup === "-" ? "—" : day.morningStandup}
                      </p>
                    </div>
                    <div>
                      <span className="font-black text-xs uppercase tracking-widest opacity-60">
                        EOD Summary
                      </span>
                      <p className="font-bold">
                        {day.eodSummary === "-" ? "—" : day.eodSummary}
                      </p>
                    </div>
                    {day.buildSubmitted && (
                      <div>
                        <span className="font-black text-xs uppercase tracking-widest opacity-60">
                          Build
                        </span>
                        <p className="font-bold">
                          {day.buildSubmitted === "-" ? "—" : day.buildSubmitted}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Block Timeline */}
        <section className="mb-16">
          <BlockTimeline blocks={blocks} currentBlockNumber={sprint.blockNumber} />
        </section>

        {/* Linear Link */}
        <section className="text-center py-12 border-t-4 border-black border-dashed">
          <p className="font-bold text-lg mb-4 opacity-70">
            Want to see more details?
          </p>
          <a
            href="https://linear.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              <ExternalLink className="w-5 h-5" />
              View in Linear
            </Button>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-black text-white border-t-4 border-neo-secondary">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <p className="font-bold text-sm opacity-60">
            Building Chunes in public • 6 Blocks • 18 Days
          </p>
        </div>
      </footer>
    </div>
  );
}
