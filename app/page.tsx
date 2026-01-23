import Image from "next/image";
import Link from "next/link";
import {
  Music,
  Tags,
  Filter,
  Timer,
  Download,
  ArrowRight,
  Zap,
  Headphones,
  Clock,
  BarChart3,
  Heart,
} from "lucide-react";
import { MonochromeBackground } from "@/components/backgrounds";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ThemeToggle } from "@/components/ThemeToggle";

// Sprint/Block data
const blocks = [
  {
    number: 1,
    name: "Bach",
    theme: "Foundation & Core Playback",
    dates: "Jan 11-13",
    status: "current",
  },
  {
    number: 2,
    name: "Miles",
    theme: "Tagging System Core",
    dates: "Jan 14-16",
    status: "upcoming",
  },
  {
    number: 3,
    name: "Jimi",
    theme: "Markers & Moments",
    dates: "Jan 17-19",
    status: "upcoming",
  },
  {
    number: 4,
    name: "Ella",
    theme: "Filtering & Discovery",
    dates: "Jan 20-22",
    status: "upcoming",
  },
  {
    number: 5,
    name: "Duke",
    theme: "Import & Export",
    dates: "Jan 23-25",
    status: "upcoming",
  },
  {
    number: 6,
    name: "Nina",
    theme: "Polish & Launch",
    dates: "Jan 26-28",
    status: "upcoming",
  },
];

const features = [
  {
    icon: Tags,
    title: "Smart Tagging",
    description:
      "Organize with 22+ mood tags, activity tags, genres, and custom labels. Every song, perfectly categorized.",
  },
  {
    icon: Filter,
    title: "Powerful Filters",
    description:
      "Find exactly what you want. Filter by mood, vocals, artist, duration, release date, and more.",
  },
  {
    icon: Timer,
    title: "Song Markers",
    description:
      "Mark your favorite moments. Jump instantly to verses, choruses, or that perfect drop.",
  },
  {
    icon: BarChart3,
    title: "Deep Stats",
    description:
      "Track play counts, skip history, and discover forgotten favorites in your library.",
  },
  {
    icon: Music,
    title: "Apple Music Native",
    description:
      "Built for iOS. Works seamlessly with your existing Apple Music library and metadata.",
  },
  {
    icon: Download,
    title: "Your Data, Your Way",
    description:
      "Export your entire music organization. Import, backup, and take control of your data.",
  },
];

const stats = [
  { value: "22+", label: "Mood Tags", icon: Heart },
  { value: "100+", label: "Genres", icon: Music },
  { value: "∞", label: "Markers", icon: Timer },
  { value: "100%", label: "Your Data", icon: Download },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <MonochromeBackground />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[var(--color-background)] border-b-2 border-[var(--color-border)]">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
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
                className="text-2xl tracking-tight text-[var(--color-foreground)]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Chunes
              </span>
            </Link>

            {/* Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#features"
                className="text-sm uppercase tracking-[0.1em] text-[var(--color-foreground)] hover:border-b-2 hover:border-[var(--color-foreground)] pb-1 transition-none font-medium"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Features
              </Link>
              <Link
                href="#roadmap"
                className="text-sm uppercase tracking-[0.1em] text-[var(--color-foreground)] hover:border-b-2 hover:border-[var(--color-foreground)] pb-1 transition-none font-medium"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Roadmap
              </Link>
              <Link
                href="/block"
                className="text-sm uppercase tracking-[0.1em] text-[var(--color-foreground)] hover:border-b-2 hover:border-[var(--color-foreground)] pb-1 transition-none font-medium"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Development
              </Link>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Button variant="primary" size="sm">
                <span className="hidden sm:inline">Join Beta</span>
                <span className="sm:hidden">Beta</span>
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40 texture-lines">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-5xl">
            {/* Decorative element */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-3 h-3 border-2 border-[var(--color-border)]" />
              <div className="h-px flex-1 bg-[var(--color-border)]" />
            </div>

            {/* Badge */}
            <div className="mb-8">
              <Badge variant="accent" size="md">
                For Music Lovers
              </Badge>
            </div>

            {/* Oversized Headline */}
            <h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tighter mb-12"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              <span className="block">Organize</span>
              <span className="block italic">Your Music</span>
              <span className="block">Your Way</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
              The ultimate iOS app for music lovers who want control. Tag,
              filter, and navigate your library like never before.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" size="lg">
                Join TestFlight
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Button>
              <Link href="/block">
                <Button variant="outline" size="lg">
                  Track Development
                </Button>
              </Link>
            </div>

            {/* Decorative bottom element */}
            <div className="flex items-center gap-4 mt-16">
              <div className="h-px flex-1 bg-[var(--color-border)]" />
              <div className="w-3 h-3 border-2 border-[var(--color-border)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <hr className="rule-separator" />

      {/* Stats Section - Inverted */}
      <section className="inverted py-24 md:py-32 texture-lines-inverted relative">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 border-2 border-[var(--color-accent-foreground)] flex items-center justify-center">
                  <stat.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <div
                  className="text-5xl md:text-6xl mb-2 tracking-tighter"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
                >
                  {stat.value}
                </div>
                <div className="text-sm uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-mono)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <hr className="rule-separator" />

      {/* Features Section */}
      <section id="features" className="py-24 md:py-32 lg:py-40 texture-grid">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="mb-16">
            <Badge variant="accent" size="md" className="mb-6">
              Features
            </Badge>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Everything You Need
            </h2>
            <p className="text-xl leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
              Built for power users who want complete control over their music library.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border-t-2 border-l-2 border-[var(--color-border)]">
            {features.map((feature) => (
              <Card
                key={feature.title}
                variant="border"
                hoverable
                className="border-l-0 border-t-0 border-r-2 border-b-2 group-hover:border-0"
              >
                <CardContent className="p-8">
                  <div className="w-12 h-12 border-2 border-[var(--color-border)] flex items-center justify-center mb-6 group-hover:border-[var(--color-accent-foreground)] transition-colors duration-100">
                    <feature.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-2xl mb-3 tracking-tight"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-base leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section divider */}
      <hr className="rule-separator" />

      {/* Roadmap Section */}
      <section id="roadmap" className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          {/* Section Header */}
          <div className="mb-16">
            <Badge variant="default" size="md" className="mb-6">
              Development
            </Badge>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tighter mb-6"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              The Roadmap
            </h2>
            <p className="text-xl leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-body)" }}>
              Building Chunes in public. Six blocks. 18 days. One mission.
            </p>
          </div>

          {/* Blocks Timeline */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t-2 border-l-2 border-[var(--color-border)]">
            {blocks.map((block) => {
              const isCurrent = block.status === "current";
              return (
                <Card
                  key={block.number}
                  variant={isCurrent ? "inverted" : "border"}
                  hoverable
                  className={`relative border-l-0 border-t-0 border-r-2 border-b-2 ${isCurrent ? "border-0" : ""}`}
                >
                  {isCurrent && (
                    <Badge
                      variant="accent"
                      size="sm"
                      className="absolute -top-3 -right-3 z-10 bg-[var(--color-background)] text-[var(--color-foreground)] border border-[var(--color-border)]"
                    >
                      Live
                    </Badge>
                  )}
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 border-2 flex items-center justify-center text-xl ${
                          isCurrent
                            ? "border-[var(--color-accent-foreground)]"
                            : "border-[var(--color-border)]"
                        }`}
                        style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}
                      >
                        {block.number.toString().padStart(2, "0")}
                      </div>
                      <span
                        className="text-sm uppercase tracking-[0.1em] italic"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {block.name}
                      </span>
                    </div>
                    <h3
                      className="text-xl mb-2 tracking-tight"
                      style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
                    >
                      {block.theme}
                    </h3>
                    <p className="text-sm uppercase tracking-[0.1em]" style={{ fontFamily: "var(--font-mono)" }}>
                      {block.dates}, 2026
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* View Details CTA */}
          <div className="mt-12">
            <Link href="/block">
              <Button variant="outline" size="lg">
                View Current Sprint
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section divider */}
      <hr className="rule-separator" />

      {/* CTA Section */}
      <section className="py-24 md:py-32 lg:py-40">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="text-center">
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter mb-8"
              style={{ fontFamily: "var(--font-display)", fontWeight: 900 }}
            >
              Ready to Take
              <span className="block italic">Control?</span>
            </h2>
            <p className="text-xl leading-relaxed mb-12 max-w-2xl mx-auto" style={{ fontFamily: "var(--font-body)" }}>
              Join the beta and be among the first to experience a new way to organize your music.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="lg">
                Join TestFlight
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Button>
              <Link href="/block">
                <Button variant="outline" size="lg">
                  Follow Development
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[var(--color-border)] py-12">
        <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
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
                className="text-xl tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Chunes
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8">
              <Link
                href="#features"
                className="text-sm uppercase tracking-[0.1em] hover:border-b-2 hover:border-[var(--color-foreground)] pb-1 transition-none font-medium"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Features
              </Link>
              <Link
                href="#roadmap"
                className="text-sm uppercase tracking-[0.1em] hover:border-b-2 hover:border-[var(--color-foreground)] pb-1 transition-none font-medium"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Roadmap
              </Link>
              <Link
                href="/support"
                className="text-sm uppercase tracking-[0.1em] hover:border-b-2 hover:border-[var(--color-foreground)] pb-1 transition-none font-medium"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Support
              </Link>
              <Link
                href="/privacy"
                className="text-sm uppercase tracking-[0.1em] hover:border-b-2 hover:border-[var(--color-foreground)] pb-1 transition-none font-medium"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Privacy
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-sm" style={{ fontFamily: "var(--font-mono)" }}>
              &copy; 2026 Chunes
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
