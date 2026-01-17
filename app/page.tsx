import Image from "next/image";
import Link from "next/link";
import {
  Music,
  Tags,
  Filter,
  Timer,
  Download,
  ArrowRight,
  Star,
  Zap,
  Headphones,
  Disc3,
  Clock,
  BarChart3,
  Sparkles,
  Heart,
  CheckCircle2,
} from "lucide-react";
import { ClayBackground } from "@/components/backgrounds";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

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
    gradient: "from-purple-400 to-purple-600",
  },
  {
    icon: Filter,
    title: "Powerful Filters",
    description:
      "Find exactly what you want. Filter by mood, vocals, artist, duration, release date, and more.",
    gradient: "from-pink-400 to-pink-600",
  },
  {
    icon: Timer,
    title: "Song Markers",
    description:
      "Mark your favorite moments. Jump instantly to verses, choruses, or that perfect drop.",
    gradient: "from-blue-400 to-blue-600",
  },
  {
    icon: BarChart3,
    title: "Deep Stats",
    description:
      "Track play counts, skip history, and discover forgotten favorites in your library.",
    gradient: "from-emerald-400 to-emerald-600",
  },
  {
    icon: Music,
    title: "Apple Music Native",
    description:
      "Built for iOS. Works seamlessly with your existing Apple Music library and metadata.",
    gradient: "from-cyan-400 to-cyan-600",
  },
  {
    icon: Download,
    title: "Your Data, Your Way",
    description:
      "Export your entire music organization. Import, backup, and take control of your data.",
    gradient: "from-amber-400 to-amber-600",
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
      <ClayBackground />

      {/* Navigation */}
      <nav className="sticky top-4 z-50 mx-4 sm:mx-6 lg:mx-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-strong rounded-[32px] sm:rounded-[40px] px-4 sm:px-8 py-4 sm:py-5 shadow-clayCard">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shadow-clayButton">
                  <Image
                    src="/chunes-icon.png"
                    alt="Chunes"
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className="font-black text-xl sm:text-2xl text-clay-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Chunes
                </span>
              </Link>

              {/* Nav Links - Desktop */}
              <div className="hidden md:flex items-center gap-6">
                <Link
                  href="#features"
                  className="font-bold text-sm text-clay-muted hover:text-clay-accent transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#roadmap"
                  className="font-bold text-sm text-clay-muted hover:text-clay-accent transition-colors"
                >
                  Roadmap
                </Link>
                <Link
                  href="/block"
                  className="font-bold text-sm text-clay-muted hover:text-clay-accent transition-colors"
                >
                  Development
                </Link>
              </div>

              {/* CTA */}
              <Button variant="primary" size="sm">
                <Zap className="w-4 h-4" />
                <span className="hidden sm:inline">Join Beta</span>
                <span className="sm:hidden">Beta</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="relative z-10 text-center lg:text-left">
              {/* Badge */}
              <div className="flex justify-center lg:justify-start mb-6">
                <Badge variant="accent" size="lg" className="animate-clay-breathe">
                  <Sparkles className="w-4 h-4 mr-2" />
                  For Music Lovers
                </Badge>
              </div>

              {/* Headline */}
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.1] tracking-tight mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="block text-clay-foreground">Organize</span>
                <span className="block gradient-text">Your Music</span>
                <span className="block text-clay-foreground">Your Way</span>
              </h1>

              {/* Tagline */}
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-clay-muted leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                The ultimate iOS app for music lovers who want control. Tag,
                filter, and navigate your library like never before.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="primary" size="lg" fullWidth className="sm:w-auto">
                  <Headphones className="w-5 h-5" />
                  Join TestFlight
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Link href="/block" className="w-full sm:w-auto">
                  <Button variant="secondary" size="lg" fullWidth className="sm:w-auto">
                    Track Development
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - App Preview */}
            <div className="relative flex justify-center lg:justify-end">
              {/* Floating decorative orbs */}
              <div className="absolute -top-8 -left-8 w-20 h-20 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-clayButton animate-clay-float-slow opacity-80" />
              <div className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 shadow-clayButton animate-clay-float-delayed opacity-70" />
              <div className="absolute top-1/2 -right-4 w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-clayButton animate-clay-float opacity-60" />

              {/* Main card */}
              <Card variant="glass" className="relative z-10 w-full max-w-sm shadow-clayCard">
                <CardContent className="flex flex-col items-center py-10">
                  {/* Now Playing header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-500" />
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-gradient-to-br from-green-400 to-green-500" />
                    </div>
                    <span
                      className="font-bold text-sm text-clay-muted ml-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      Now Playing
                    </span>
                  </div>

                  {/* Album art */}
                  <div className="w-44 h-44 rounded-[24px] bg-gradient-to-br from-purple-400 to-purple-600 shadow-clayCard mb-6 flex items-center justify-center">
                    <Disc3 className="w-20 h-20 text-white/80 animate-[spin_8s_linear_infinite]" />
                  </div>

                  {/* Track info */}
                  <h3
                    className="font-black text-xl text-clay-foreground mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Your Favorite Song
                  </h3>
                  <p className="font-medium text-base text-clay-muted mb-6">
                    Amazing Artist
                  </p>

                  {/* Tags preview */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="accent" size="sm">
                      🔥 Energetic
                    </Badge>
                    <Badge variant="default" size="sm">
                      🎸 Rock
                    </Badge>
                    <Badge variant="default" size="sm">
                      🚗 Driving
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="relative group"
              >
                <div className="glass-strong rounded-[24px] p-6 sm:p-8 text-center shadow-clayCard card-lift">
                  <div
                    className={`w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br ${
                      index === 0
                        ? "from-pink-400 to-pink-600"
                        : index === 1
                        ? "from-purple-400 to-purple-600"
                        : index === 2
                        ? "from-blue-400 to-blue-600"
                        : "from-emerald-400 to-emerald-600"
                    } shadow-clayButton flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className="font-black text-3xl sm:text-4xl text-clay-foreground mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {stat.value}
                  </div>
                  <div className="font-medium text-sm text-clay-muted">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="accent" size="lg" className="mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Features
            </Badge>
            <h2
              className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-clay-foreground tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Everything You Need
            </h2>
            <p className="text-lg sm:text-xl font-medium text-clay-muted max-w-2xl mx-auto leading-relaxed">
              Built for power users who want complete control over their music
              library.
            </p>
          </div>

          {/* Features Grid - Bento Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                variant="glass"
                hoverable
                className={`${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <CardContent className="p-6 sm:p-8">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-clayButton flex items-center justify-center mb-6`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3
                    className="font-extrabold text-xl sm:text-2xl text-clay-foreground mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {feature.title}
                  </h3>
                  <p className="font-medium text-base text-clay-muted leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Badge variant="default" size="lg" className="mb-6">
              <Clock className="w-4 h-4 mr-2" />
              Development
            </Badge>
            <h2
              className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-clay-foreground tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Roadmap
            </h2>
            <p className="text-lg sm:text-xl font-medium text-clay-muted max-w-2xl mx-auto leading-relaxed">
              Building Chunes in public. Six blocks. 18 days. One mission.
            </p>
          </div>

          {/* Blocks Timeline */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blocks.map((block, index) => {
              const isCurrent = block.status === "current";
              return (
                <Card
                  key={block.number}
                  variant={isCurrent ? "solid" : "glass"}
                  hoverable
                  className={`relative ${
                    isCurrent ? "ring-4 ring-clay-accent/30" : ""
                  }`}
                >
                  {isCurrent && (
                    <Badge
                      variant="accent"
                      size="sm"
                      className="absolute -top-3 -right-3 z-10 animate-clay-breathe"
                    >
                      <Zap className="w-3 h-3 mr-1" />
                      Live
                    </Badge>
                  )}
                  <CardContent className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl ${
                          isCurrent
                            ? "bg-gradient-to-br from-purple-400 to-purple-600 text-white shadow-clayButton"
                            : "bg-clay-muted/10 text-clay-muted"
                        }`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {block.number.toString().padStart(2, "0")}
                      </div>
                      <span
                        className={`font-bold text-lg ${
                          isCurrent ? "text-clay-accent" : "text-clay-muted"
                        }`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {block.name}
                      </span>
                    </div>
                    <h3
                      className="font-extrabold text-lg text-clay-foreground mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {block.theme}
                    </h3>
                    <p className="font-medium text-sm text-clay-muted">
                      {block.dates}, 2026
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* View Details CTA */}
          <div className="text-center mt-10 sm:mt-12">
            <Link href="/block">
              <Button variant="secondary" size="lg">
                View Current Sprint
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Card variant="solid" className="relative overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent" />

            <CardContent className="relative z-10 py-12 sm:py-16 md:py-20 text-center">
              <h2
                className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-clay-foreground tracking-tight mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Ready to Take Control?
              </h2>
              <p className="text-lg sm:text-xl font-medium text-clay-muted mb-10 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                Join the beta and be among the first to experience a new way to
                organize your music.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="lg" fullWidth className="sm:w-auto">
                  <Headphones className="w-5 h-5" />
                  Join TestFlight
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Link href="/block" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" fullWidth className="sm:w-auto">
                    Follow Development
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-[32px] px-6 sm:px-8 py-8 shadow-clayCard">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl overflow-hidden shadow-clayButton">
                  <Image
                    src="/chunes-icon.png"
                    alt="Chunes"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span
                  className="font-black text-xl text-clay-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Chunes
                </span>
              </div>

              {/* Links */}
              <div className="flex items-center gap-6">
                <Link
                  href="#features"
                  className="font-medium text-sm text-clay-muted hover:text-clay-accent transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="#roadmap"
                  className="font-medium text-sm text-clay-muted hover:text-clay-accent transition-colors"
                >
                  Roadmap
                </Link>
                <Link
                  href="/support"
                  className="font-medium text-sm text-clay-muted hover:text-clay-accent transition-colors"
                >
                  Support
                </Link>
                <Link
                  href="/privacy"
                  className="font-medium text-sm text-clay-muted hover:text-clay-accent transition-colors"
                >
                  Privacy
                </Link>
              </div>

              {/* Copyright */}
              <p className="font-medium text-sm text-clay-muted">
                &copy; 2026 Chunes. Built with{" "}
                <Heart className="w-4 h-4 inline text-clay-accent-alt" />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
