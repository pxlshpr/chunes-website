import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-display",
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
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
