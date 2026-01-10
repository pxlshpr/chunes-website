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
} from "lucide-react";
import { NeoBackground } from "@/components/backgrounds";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
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
    color: "bg-neo-accent",
  },
  {
    icon: Filter,
    title: "Powerful Filters",
    description:
      "Find exactly what you want. Filter by mood, vocals, artist, duration, release date, and more.",
    color: "bg-neo-secondary",
  },
  {
    icon: Timer,
    title: "Song Markers",
    description:
      "Mark your favorite moments. Jump instantly to verses, choruses, or that perfect drop.",
    color: "bg-neo-muted",
  },
  {
    icon: BarChart3,
    title: "Deep Stats",
    description:
      "Track play counts, skip history, and discover forgotten favorites in your library.",
    color: "bg-neo-accent",
  },
  {
    icon: Music,
    title: "Apple Music Native",
    description:
      "Built for iOS. Works seamlessly with your existing Apple Music library and metadata.",
    color: "bg-neo-secondary",
  },
  {
    icon: Download,
    title: "Your Data, Your Way",
    description:
      "Export your entire music organization. Import, backup, and take control of your data.",
    color: "bg-neo-muted",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <NeoBackground />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-neo-background border-b-4 border-black">
        <div className="container mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
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

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="#features"
                className="font-bold uppercase tracking-wide text-sm link-brutal px-2 py-1"
              >
                Features
              </Link>
              <Link
                href="#roadmap"
                className="font-bold uppercase tracking-wide text-sm link-brutal px-2 py-1"
              >
                Roadmap
              </Link>
              <Link
                href="/block"
                className="font-bold uppercase tracking-wide text-sm link-brutal px-2 py-1"
              >
                Development
              </Link>
            </div>

            {/* CTA */}
            <Button variant="primary" size="sm">
              <Zap className="w-4 h-4" />
              Join Beta
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="relative z-10">
              {/* Badge */}
              <Badge variant="secondary" rotation={-2} className="mb-6">
                <Star className="w-4 h-4 mr-1 fill-black" />
                For Music Lovers
              </Badge>

              {/* Headline */}
              <h1 className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-tighter mb-6">
                <span className="block">Organize</span>
                <span className="block text-stroke-fill-white">Your Music</span>
                <span className="block bg-neo-accent inline-block px-4 py-2 border-4 border-black shadow-neo-md -rotate-1">
                  Your Way
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-xl md:text-2xl font-bold leading-relaxed mb-8 max-w-lg">
                The ultimate iOS app for music lovers who want control. Tag,
                filter, and navigate your library like never before.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" size="lg">
                  <Headphones className="w-5 h-5" />
                  Join TestFlight
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Link href="/block">
                  <Button variant="outline" size="lg">
                    Track Development
                  </Button>
                </Link>
              </div>

              {/* Stats */}
              <div className="flex gap-8 mt-12">
                <div className="border-4 border-black bg-white px-6 py-4 shadow-neo-sm">
                  <div className="font-black text-3xl">22+</div>
                  <div className="font-bold text-sm uppercase tracking-wide opacity-70">
                    Mood Tags
                  </div>
                </div>
                <div className="border-4 border-black bg-white px-6 py-4 shadow-neo-sm">
                  <div className="font-black text-3xl">100+</div>
                  <div className="font-bold text-sm uppercase tracking-wide opacity-70">
                    Genres
                  </div>
                </div>
                <div className="border-4 border-black bg-white px-6 py-4 shadow-neo-sm">
                  <div className="font-black text-3xl">∞</div>
                  <div className="font-bold text-sm uppercase tracking-wide opacity-70">
                    Markers
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - App Preview */}
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-neo-secondary border-4 border-black shadow-neo-lg rotate-12 z-0" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-neo-muted border-4 border-black shadow-neo-lg -rotate-6 z-0" />

              {/* Main card */}
              <Card
                variant="default"
                className="relative z-10 shadow-neo-xl rotate-2"
              >
                <CardHeader variant="secondary">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-4 h-4 rounded-full bg-neo-accent border-2 border-black" />
                      <div className="w-4 h-4 rounded-full bg-neo-secondary border-2 border-black" />
                      <div className="w-4 h-4 rounded-full bg-neo-muted border-2 border-black" />
                    </div>
                    <span className="font-black text-sm uppercase tracking-widest">
                      Now Playing
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col items-center py-12">
                  <div className="w-48 h-48 bg-neo-muted border-4 border-black shadow-neo-md mb-6 flex items-center justify-center">
                    <Disc3 className="w-24 h-24 animate-spin-slow" />
                  </div>
                  <h3 className="font-black text-2xl uppercase tracking-tight mb-2">
                    Your Favorite Song
                  </h3>
                  <p className="font-bold text-lg opacity-70 mb-6">
                    Amazing Artist
                  </p>

                  {/* Tags preview */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Badge variant="accent" size="sm">
                      🔥 Energetic
                    </Badge>
                    <Badge variant="secondary" size="sm">
                      🎸 Rock
                    </Badge>
                    <Badge variant="muted" size="sm">
                      🚗 Driving
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              {/* Floating badge */}
              <div className="absolute -top-4 right-8 z-20">
                <Badge
                  variant="accent"
                  size="lg"
                  rotation={6}
                  className="animate-float"
                >
                  <Star className="w-5 h-5 mr-1 fill-black" />
                  Beta
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative stars */}
        <Star className="absolute top-20 right-10 w-12 h-12 fill-neo-secondary stroke-black stroke-2 animate-spin-slow opacity-60" />
        <Star className="absolute bottom-40 left-20 w-8 h-8 fill-neo-accent stroke-black stroke-2 opacity-50" />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-black text-white">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="secondary" rotation={2} className="mb-6">
              <Zap className="w-4 h-4 mr-1" />
              Features
            </Badge>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-6">
              Everything You Need
            </h2>
            <p className="text-xl md:text-2xl font-bold opacity-80 max-w-2xl mx-auto">
              Built for power users who want complete control over their music
              library.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={feature.title}
                variant="default"
                hoverable
                rotation={index % 2 === 0 ? 1 : -1}
                className="bg-neo-background text-black"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 ${feature.color} border-4 border-black shadow-neo-sm flex items-center justify-center mb-6`}
                  >
                    <feature.icon className="w-8 h-8 stroke-[3px]" />
                  </div>
                  <h3 className="font-black text-2xl uppercase tracking-tight mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-bold text-lg leading-relaxed opacity-80">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-6 bg-neo-secondary border-y-4 border-black overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="font-black text-2xl uppercase tracking-widest mx-8 flex items-center gap-4"
            >
              <Star className="w-6 h-6 fill-black" />
              Organize
              <Star className="w-6 h-6 fill-black" />
              Tag
              <Star className="w-6 h-6 fill-black" />
              Filter
              <Star className="w-6 h-6 fill-black" />
              Discover
            </span>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="muted" rotation={-2} className="mb-6">
              <Clock className="w-4 h-4 mr-1" />
              Development
            </Badge>
            <h2 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-6">
              The Roadmap
            </h2>
            <p className="text-xl md:text-2xl font-bold opacity-80 max-w-2xl mx-auto">
              Building Chunes in public. Six blocks. 18 days. One mission.
            </p>
          </div>

          {/* Blocks Timeline */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blocks.map((block) => (
              <Card
                key={block.number}
                variant={block.status === "current" ? "secondary" : "default"}
                hoverable
                className={`relative ${
                  block.status === "current"
                    ? "border-neo-accent shadow-neo-lg"
                    : ""
                }`}
              >
                {block.status === "current" && (
                  <Badge
                    variant="accent"
                    size="sm"
                    rotation={6}
                    className="absolute -top-3 -right-3 z-10"
                  >
                    Live
                  </Badge>
                )}
                <CardHeader
                  variant={block.status === "current" ? "accent" : "muted"}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-4xl">
                      {block.number.toString().padStart(2, "0")}
                    </span>
                    <span className="font-black text-xl uppercase">
                      {block.name}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-black text-xl uppercase tracking-tight mb-2">
                    {block.theme}
                  </h3>
                  <p className="font-bold text-sm uppercase tracking-wide opacity-60">
                    {block.dates}, 2026
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View Details CTA */}
          <div className="text-center mt-12">
            <Link href="/block">
              <Button variant="outline" size="lg">
                View Current Sprint
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-neo-accent border-y-4 border-black">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tighter mb-6">
            Ready to Take Control?
          </h2>
          <p className="text-xl md:text-2xl font-bold mb-12 max-w-2xl mx-auto">
            Join the beta and be among the first to experience a new way to
            organize your music.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="bg-black text-white hover:bg-gray-800"
            >
              <Headphones className="w-5 h-5" />
              Join TestFlight
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white">
              <Link href="/block" className="flex items-center gap-2">
                Follow Development
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-white border-t-4 border-neo-secondary">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-neo-secondary border-4 border-white overflow-hidden">
                <Image
                  src="/chunes-icon.png"
                  alt="Chunes"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-black text-xl uppercase tracking-tight">
                Chunes
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <Link
                href="#features"
                className="font-bold text-sm uppercase tracking-wide hover:text-neo-secondary transition-colors"
              >
                Features
              </Link>
              <Link
                href="#roadmap"
                className="font-bold text-sm uppercase tracking-wide hover:text-neo-secondary transition-colors"
              >
                Roadmap
              </Link>
              <Link
                href="/block"
                className="font-bold text-sm uppercase tracking-wide hover:text-neo-secondary transition-colors"
              >
                Development
              </Link>
            </div>

            {/* Copyright */}
            <p className="font-bold text-sm opacity-60">
              &copy; 2026 Chunes. Built with{" "}
              <span className="text-neo-accent">♥</span>
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
