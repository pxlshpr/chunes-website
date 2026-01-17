import Image from "next/image";
import Link from "next/link";
import {
  HelpCircle,
  ArrowLeft,
  Mail,
  MessageCircle,
  Book,
  Bug,
  Lightbulb,
  ExternalLink,
} from "lucide-react";
import { ClayBackground } from "@/components/backgrounds";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Support - Chunes",
  description:
    "Get help with Chunes. FAQ, troubleshooting, and contact information.",
};

const faqs = [
  {
    question: "How do I get started with Chunes?",
    answer:
      'After installing Chunes, you\'ll be prompted to grant Apple Music access. Once granted, tap "Import Library" to bring your music into Chunes. Then start tagging and organizing your songs!',
  },
  {
    question: "Does Chunes work with Spotify or other services?",
    answer:
      "Chunes is built specifically for Apple Music and requires an Apple Music subscription to access your library. Support for other services is not currently planned.",
  },
  {
    question: "How does sync work?",
    answer:
      "Chunes syncs your tags, markers, and playlists across all your devices using iCloud and our backend service. You can enable or disable sync in Settings. Your music library itself remains in Apple Music.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes! You can export all your tags, markers, and playlists from Settings > Export Data. This gives you a complete backup of your music organization in JSON format.",
  },
  {
    question: "What are markers?",
    answer:
      "Markers let you bookmark specific moments in songs. Great for jumping to your favorite verse, chorus, or drop. You can add unlimited markers to any song.",
  },
  {
    question: "How do tag suggestions work?",
    answer:
      "When you enable tag suggestions, Chunes uses Last.fm, Genius, and other music databases to recommend relevant tags based on song metadata, lyrics, and community data.",
  },
  {
    question: "Is my data private?",
    answer:
      'Yes. Your music data stays on your device and in your personal iCloud account. We don\'t sell or share your data. See our <a href="/privacy" class="text-clay-accent hover:underline">Privacy Policy</a> for details.',
  },
  {
    question: "What iOS version do I need?",
    answer:
      "Chunes requires iOS 18.2 or later. It's optimized for the latest iOS features and performance.",
  },
];

const contactOptions = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    action: "support@chunes.app",
    link: "mailto:support@chunes.app",
    gradient: "from-purple-400 to-purple-600",
  },
  {
    icon: Bug,
    title: "Report a Bug",
    description: "Found something broken?",
    action: "bugs@chunes.app",
    link: "mailto:bugs@chunes.app",
    gradient: "from-pink-400 to-pink-600",
  },
  {
    icon: Lightbulb,
    title: "Feature Request",
    description: "Share your ideas",
    action: "ideas@chunes.app",
    link: "mailto:ideas@chunes.app",
    gradient: "from-blue-400 to-blue-600",
  },
];

export default function SupportPage() {
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

              {/* Back Button */}
              <Link href="/">
                <Button variant="secondary" size="sm">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative py-16 sm:py-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="accent" size="lg" className="mb-6">
              <HelpCircle className="w-4 h-4 mr-2" />
              Support
            </Badge>
            <h1
              className="font-black text-4xl sm:text-5xl md:text-6xl text-clay-foreground tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              How Can We Help?
            </h1>
            <p className="text-lg sm:text-xl font-medium text-clay-muted leading-relaxed max-w-2xl mx-auto">
              Find answers to common questions or get in touch with our support
              team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="pb-12 sm:pb-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactOptions.map((option) => (
              <a
                key={option.title}
                href={option.link}
                className="block group"
              >
                <Card variant="glass" hoverable>
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div
                      className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${option.gradient} shadow-clayButton flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <option.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3
                      className="font-extrabold text-xl text-clay-foreground mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {option.title}
                    </h3>
                    <p className="font-medium text-sm text-clay-muted mb-3">
                      {option.description}
                    </p>
                    <p className="font-bold text-sm text-clay-accent group-hover:underline">
                      {option.action}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-12">
            <h2
              className="font-black text-3xl sm:text-4xl md:text-5xl text-clay-foreground tracking-tight mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} variant="glass">
                <CardContent className="p-6 sm:p-8">
                  <h3
                    className="font-extrabold text-lg text-clay-foreground mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {faq.question}
                  </h3>
                  <p
                    className="font-medium text-base text-clay-muted leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Card variant="solid" className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/5 to-transparent" />
            <CardContent className="relative z-10 py-12 sm:py-16 text-center">
              <Book className="w-12 h-12 mx-auto mb-6 text-clay-accent" />
              <h2
                className="font-black text-2xl sm:text-3xl md:text-4xl text-clay-foreground tracking-tight mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Still Need Help?
              </h2>
              <p className="text-lg font-medium text-clay-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                Our support team is here for you. We typically respond within
                24 hours.
              </p>
              <a href="mailto:support@chunes.app">
                <Button variant="primary" size="lg">
                  <Mail className="w-5 h-5" />
                  Contact Support
                  <ExternalLink className="w-5 h-5" />
                </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 sm:py-12">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="glass-strong rounded-[32px] px-6 sm:px-8 py-8 shadow-clayCard">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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

              <div className="flex items-center gap-6">
                <Link
                  href="/"
                  className="font-medium text-sm text-clay-muted hover:text-clay-accent transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/support"
                  className="font-medium text-sm text-clay-accent transition-colors"
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

              <p className="font-medium text-sm text-clay-muted">
                &copy; 2026 Chunes
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
