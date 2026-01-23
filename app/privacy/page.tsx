import Image from "next/image";
import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import { MonochromeBackground } from "@/components/backgrounds";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ThemeToggle } from "@/components/ThemeToggle";

export const metadata = {
  title: "Privacy Policy - Chunes",
  description: "Privacy policy for Chunes - Your music, your data, your control.",
};

export default function PrivacyPage() {
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
                className="text-2xl tracking-tight"
                style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
              >
                Chunes
              </span>
            </Link>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative py-16 sm:py-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge variant="accent" size="lg" className="mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </Badge>
            <h1
              className="font-black text-4xl sm:text-5xl md:text-6xl text-clay-foreground tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Your Music, Your Data
            </h1>
            <p className="text-lg sm:text-xl font-medium text-clay-muted leading-relaxed">
              Last Updated: January 18, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16 sm:pb-24">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Card variant="glass">
            <CardContent className="p-6 sm:p-10 space-y-8">
              {/* Introduction */}
              <div>
                <h2
                  className="font-extrabold text-2xl text-clay-foreground mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Introduction
                </h2>
                <p className="font-medium text-base text-clay-muted leading-relaxed">
                  Chunes ("we," "our," or "us") is committed to protecting your
                  privacy. This Privacy Policy explains how we collect, use,
                  and protect your information when you use the Chunes iOS
                  application.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2
                  className="font-extrabold text-2xl text-clay-foreground mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-lg text-clay-foreground mb-2">
                      Apple Music Library Data
                    </h3>
                    <p className="font-medium text-base text-clay-muted leading-relaxed">
                      Chunes accesses your Apple Music library to display and
                      organize your music. This includes song titles, artists,
                      albums, artwork, and playback information. This data is
                      processed locally on your device and synced via iCloud
                      (if enabled).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-clay-foreground mb-2">
                      User-Created Content
                    </h3>
                    <p className="font-medium text-base text-clay-muted leading-relaxed">
                      We collect and store the tags, markers, filters, and
                      playlists you create within Chunes. This data is stored
                      locally on your device and optionally synced to our
                      backend service (Supabase) and iCloud for cross-device
                      synchronization.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-clay-foreground mb-2">
                      Device Information
                    </h3>
                    <p className="font-medium text-base text-clay-muted leading-relaxed">
                      We generate a unique device identifier to enable data
                      synchronization across your devices. This identifier is
                      used solely for sync purposes and is not linked to
                      personally identifiable information.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg text-clay-foreground mb-2">
                      External API Data
                    </h3>
                    <p className="font-medium text-base text-clay-muted leading-relaxed">
                      When using the tag suggestion feature, Chunes may send
                      song metadata to third-party services (Last.fm, Genius,
                      Lyrics.ovh) to provide intelligent tag recommendations.
                      No personal information is shared with these services.
                    </p>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2
                  className="font-extrabold text-2xl text-clay-foreground mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2 font-medium text-base text-clay-muted leading-relaxed">
                  <li>
                    To provide core app functionality (tagging, filtering,
                    playback)
                  </li>
                  <li>
                    To synchronize your data across your devices via iCloud and
                    our backend
                  </li>
                  <li>
                    To provide intelligent tag suggestions using external APIs
                  </li>
                  <li>To improve and optimize the Chunes experience</li>
                  <li>
                    To send you push notifications about sync status (if
                    enabled)
                  </li>
                </ul>
              </div>

              {/* Data Storage and Synchronization */}
              <div>
                <h2
                  className="font-extrabold text-2xl text-clay-foreground mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Data Storage and Synchronization
                </h2>
                <p className="font-medium text-base text-clay-muted leading-relaxed mb-4">
                  Your data is primarily stored locally on your device. When
                  synchronization is enabled, your tags, markers, and
                  preferences are:
                </p>
                <ul className="list-disc list-inside space-y-2 font-medium text-base text-clay-muted leading-relaxed">
                  <li>
                    Synced to iCloud using Apple's CloudKit framework (stored
                    in your personal iCloud account)
                  </li>
                  <li>
                    Optionally synced to our Supabase backend for enhanced
                    cross-device functionality
                  </li>
                  <li>
                    Encrypted in transit using industry-standard encryption
                    (TLS/SSL)
                  </li>
                </ul>
              </div>

              {/* Third-Party Services */}
              <div>
                <h2
                  className="font-extrabold text-2xl text-clay-foreground mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Third-Party Services
                </h2>
                <p className="font-medium text-base text-clay-muted leading-relaxed mb-4">
                  Chunes integrates with the following third-party services:
                </p>
                <ul className="list-disc list-inside space-y-2 font-medium text-base text-clay-muted leading-relaxed">
                  <li>
                    <strong>Apple Music/MusicKit:</strong> To access your music
                    library and playback functionality
                  </li>
                  <li>
                    <strong>iCloud/CloudKit:</strong> For optional data
                    synchronization across your Apple devices
                  </li>
                  <li>
                    <strong>Supabase:</strong> For backend data synchronization
                    and storage
                  </li>
                  <li>
                    <strong>Last.fm, Genius, Lyrics.ovh:</strong> For tag
                    suggestion and music metadata enrichment
                  </li>
                </ul>
                <p className="font-medium text-base text-clay-muted leading-relaxed mt-4">
                  These services have their own privacy policies and terms of
                  service. We recommend reviewing them.
                </p>
              </div>

              {/* Data Sharing */}
              <div>
                <h2
                  className="font-extrabold text-2xl text-clay-foreground mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Data Sharing
                </h2>
                <p className="font-medium text-base text-clay-muted leading-relaxed">
                  We do not sell, trade, or rent your personal information to
                  third parties. We only share data with the third-party
                  services listed above as necessary to provide app
                  functionality.
                </p>
              </div>

              {/* Your Rights and Choices */}
              <div>
                <h2
                  className="font-extrabold text-2xl text-clay-foreground mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Your Rights and Choices
                </h2>
                <ul className="list-disc list-inside space-y-2 font-medium text-base text-clay-muted leading-relaxed">
                  <li>
                    <strong>Access and Export:</strong> You can export all your
                    data (tags, markers, playlists) directly from the app
                  </li>
                  <li>
                    <strong>Deletion:</strong> You can delete your data at any
                    time by uninstalling the app and removing data from iCloud
                  </li>
                  <li>
                    <strong>Sync Control:</strong> You can enable or disable
                    iCloud and backend synchronization in the app settings
                  </li>
                  <li>
                    <strong>Permissions:</strong> You can revoke Apple Music
                    access at any time through iOS Settings
                  </li>
                </ul>
              </div>

              {/* Children's Privacy */}
              <div>
                <h2
                  className="font-extrabold text-2xl text-clay-foreground mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Children's Privacy
                </h2>
                <p className="font-medium text-base text-clay-muted leading-relaxed">
                  Chunes is not directed to children under the age of 13. We do
                  not knowingly collect personal information from children under
                  13.
                </p>
              </div>

              {/* Security */}
              <div>
                <h2
                  className="font-extrabold text-2xl text-clay-foreground mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Security
                </h2>
                <p className="font-medium text-base text-clay-muted leading-relaxed">
                  We implement reasonable security measures to protect your
                  data, including encryption in transit and secure cloud
                  storage. However, no method of electronic storage is 100%
                  secure.
                </p>
              </div>

              {/* Changes to This Policy */}
              <div>
                <h2
                  className="font-extrabold text-2xl text-clay-foreground mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Changes to This Policy
                </h2>
                <p className="font-medium text-base text-clay-muted leading-relaxed">
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by updating the "Last Updated" date
                  at the top of this policy.
                </p>
              </div>

              {/* Contact Us */}
              <div>
                <h2
                  className="font-extrabold text-2xl text-clay-foreground mb-4"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Contact Us
                </h2>
                <p className="font-medium text-base text-clay-muted leading-relaxed">
                  If you have any questions about this Privacy Policy, please
                  contact us at{" "}
                  <a
                    href="mailto:privacy@chunes.app"
                    className="text-clay-accent hover:underline"
                  >
                    privacy@chunes.app
                  </a>
                  .
                </p>
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
                  className="font-medium text-sm text-clay-muted hover:text-clay-accent transition-colors"
                >
                  Support
                </Link>
                <Link
                  href="/privacy"
                  className="font-medium text-sm text-clay-accent transition-colors"
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
