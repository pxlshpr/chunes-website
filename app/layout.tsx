import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
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
      <body className={`${playfairDisplay.variable} ${sourceSerif4.variable} ${jetbrainsMono.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}
