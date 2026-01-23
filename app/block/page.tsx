import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, RefreshCw, ExternalLink } from "lucide-react";
import { MonochromeBackground } from "@/components/backgrounds";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SprintHero, TaskBoard, SprintTimeline } from "@/components/sprint";
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
    { id: "PXL-868", title: "Remove Spotify Integration Code", status: "Ready", priority: "Urgent" },
    { id: "PXL-871", title: "Complete Apple Music Metadata Fetching", status: "Ready", priority: "Urgent" },
    { id: "PXL-873", title: "Reliable Music Playback Foundation", status: "Ready", priority: "High" },
    { id: "PXL-874", title: "Fix App Startup and Basic Navigation", status: "Ready", priority: "High" },
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
      { id: "PXL-868", title: "Remove Spotify Integration Code", status: "Planned", priority: "Urgent" },
      { id: "PXL-871", title: "Complete Apple Music Metadata Fetching", status: "Planned", priority: "Urgent" },
      { id: "PXL-873", title: "Reliable Music Playback Foundation", status: "Planned", priority: "High" },
      { id: "PXL-874", title: "Fix App Startup and Basic Navigation", status: "Planned", priority: "High" },
    ],
  },
  {
    number: 2,
    name: "miles",
    dates: "Tue Jan 14 - Thu Jan 16, 2026",
    focus: "Tagging System Core",
    tasks: [
      { id: "PXL-878", title: "Tag Management System", status: "Planned", priority: "High" },
      { id: "PXL-881", title: "Add Tags to Songs", status: "Planned", priority: "High" },
      { id: "PXL-885", title: "View Songs by Tag", status: "Planned", priority: "Medium" },
      { id: "PXL-887", title: "Tag Categories and Organization", status: "Planned", priority: "Medium" },
    ],
  },
  {
    number: 3,
    name: "jimi",
    dates: "Fri Jan 17 - Sun Jan 19, 2026",
    focus: "Markers & Moments",
    tasks: [
      { id: "PXL-876", title: "Create and Save Song Markers", status: "Planned", priority: "High" },
      { id: "PXL-879", title: "Jump to Markers During Playback", status: "Planned", priority: "High" },
      { id: "PXL-882", title: "Edit and Manage Markers", status: "Planned", priority: "Medium" },
      { id: "PXL-886", title: "Filter Songs by Marker Names", status: "Planned", priority: "Medium" },
    ],
  },
  {
    number: 4,
    name: "ella",
    dates: "Mon Jan 20 - Wed Jan 22, 2026",
    focus: "Filtering & Discovery",
    tasks: [
      { id: "PXL-867", title: "Vocal Level Filtering", status: "Planned", priority: "High" },
      { id: "PXL-869", title: "Sort Your Music Your Way", status: "Planned", priority: "High" },
      { id: "PXL-870", title: "Filter by Release Date and Duration", status: "Planned", priority: "Medium" },
      { id: "PXL-872", title: "Save Favorite Filter Combinations", status: "Planned", priority: "Medium" },
    ],
  },
  {
    number: 5,
    name: "duke",
    dates: "Thu Jan 23 - Sat Jan 25, 2026",
    focus: "Import & Export",
    tasks: [
      { id: "PXL-875", title: "Export Your Chunes Data", status: "Planned", priority: "High" },
      { id: "PXL-877", title: "Import Chunes Data", status: "Planned", priority: "High" },
      { id: "PXL-880", title: "Selective Export by Filter", status: "Planned", priority: "Medium" },
      { id: "PXL-883", title: "Data Integrity and Validation", status: "Planned", priority: "Medium" },
    ],
  },
  {
    number: 6,
    name: "nina",
    dates: "Sun Jan 26 - Tue Jan 28, 2026",
    focus: "Polish & Launch Prep",
    tasks: [
      { id: "PXL-884", title: "Search Your Library", status: "Planned", priority: "High" },
      { id: "PXL-888", title: "Visualizer and Now Playing Polish", status: "Planned", priority: "Medium" },
      { id: "PXL-889", title: "Performance Optimization", status: "Planned", priority: "High" },
      { id: "PXL-890", title: "TestFlight Preparation and Bug Fixes", status: "Planned", priority: "Urgent" },
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
      <MonochromeBackground />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--color-background)] border-b-2 border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Back to Home */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 border-2 border-[var(--color-border)] overflow-hidden">
                <Image
                  src="/chunes-icon.png"
                  alt="Chunes"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span
                className="text-2xl tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Chunes
              </span>
            </Link>

            {/* Page Title & Status */}
            <div className="hidden md:flex items-center gap-3">
              <Badge variant="default" size="sm">
                Development Tracker
              </Badge>
              {isLive ? (
                <Badge variant="accent" size="sm">
                  <RefreshCw className="w-3 h-3 mr-1" strokeWidth={1.5} />
                  Live
                </Badge>
              ) : (
                <Badge variant="muted" size="sm">
                  Static Data
                </Badge>
              )}
            </div>

            {/* Back Button */}
            <Link href="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12 py-16 relative z-10">
        {/* Sprint Hero */}
        <section className="mb-16">
          <SprintHero sprint={sprint} progress={progress} />
        </section>

        <hr className="rule-separator mb-16" />

        {/* Tasks Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2
              className="text-4xl md:text-5xl tracking-tighter"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Sprint Tasks
            </h2>
            <Badge variant="accent" size="md">
              Block {sprint.blockNumber}
            </Badge>
          </div>
          <TaskBoard tasks={sprint.tasks} />
        </section>

        {/* Daily Log */}
        {sprint.dailyLog.length > 0 && (
          <>
            <hr className="rule-separator mb-16" />
            <section className="mb-16">
              <h2
                className="text-4xl md:text-5xl tracking-tighter mb-8"
                style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
              >
                Daily Log
              </h2>
              <div className="grid md:grid-cols-3 gap-0 border-t-2 border-l-2 border-[var(--color-border)]">
                {sprint.dailyLog.map((day) => (
                  <div
                    key={day.day}
                    className="border-r-2 border-b-2 border-[var(--color-border)] p-6"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <span
                        className="text-3xl tracking-tighter"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
                      >
                        Day {day.day}
                      </span>
                      <span className="text-xs uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-mono)" }}>
                        {day.date}
                      </span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs uppercase tracking-[0.1em] mb-1 block" style={{ fontFamily: "var(--font-mono)" }}>
                          Standup
                        </span>
                        <p className="text-sm" style={{ fontFamily: "var(--font-body)" }}>
                          {day.morningStandup === "-" ? "—" : day.morningStandup}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs uppercase tracking-[0.1em] mb-1 block" style={{ fontFamily: "var(--font-mono)" }}>
                          EOD Summary
                        </span>
                        <p className="text-sm" style={{ fontFamily: "var(--font-body)" }}>
                          {day.eodSummary === "-" ? "—" : day.eodSummary}
                        </p>
                      </div>
                      {day.buildSubmitted && (
                        <div>
                          <span className="text-xs uppercase tracking-[0.1em] mb-1 block" style={{ fontFamily: "var(--font-mono)" }}>
                            Build
                          </span>
                          <p className="text-sm" style={{ fontFamily: "var(--font-body)" }}>
                            {day.buildSubmitted === "-" ? "—" : day.buildSubmitted}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <hr className="rule-separator mb-16" />

        {/* Sprint Timeline */}
        <SprintTimeline
          blocks={blocks}
          currentBlockNumber={sprint.blockNumber}
          currentTasks={sprint.tasks}
        />

        {/* Linear Link */}
        <section className="text-center py-16 mt-16 border-2 border-[var(--color-border)]">
          <p className="text-lg mb-6" style={{ fontFamily: "var(--font-body)" }}>
            Want to see more details?
          </p>
          <a
            href="https://linear.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              View in Linear
              <ExternalLink className="w-4 h-4" strokeWidth={1.5} />
            </Button>
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t-2 border-[var(--color-border)] relative z-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-mono)" }}>
            Building Chunes in public • 6 Blocks • 18 Days
          </p>
        </div>
      </footer>
    </div>
  );
}
