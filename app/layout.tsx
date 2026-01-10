import type { Metadata } from "next";
import { Nunito, DM_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-heading",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Chunes - Organize Your Music, Your Way",
  description:
    "The ultimate iOS app for music lovers who want control. Tag, filter, and navigate your music library like never before.",
  keywords: [
    "music app",
    "iOS",
    "Apple Music",
    "music organization",
    "tagging",
    "playlist",
  ],
  authors: [{ name: "Chunes" }],
  openGraph: {
    title: "Chunes - Organize Your Music, Your Way",
    description:
      "The ultimate iOS app for music lovers who want control. Tag, filter, and navigate your music library like never before.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chunes - Organize Your Music, Your Way",
    description:
      "The ultimate iOS app for music lovers who want control.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${dmSans.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
