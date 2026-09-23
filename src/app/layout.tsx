import type { Metadata } from "next";
import { Cormorant_Garamond, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thoughtdaughter.com"),
  title: "Thought Daughter — An Intimate Inquiry Deck",
  description:
    "A contemplative card deck crafted in deep stillness. 64 questions for unhurried evenings, quiet rooms, and sincere hearts.",
  keywords: ["Thought Daughter", "card deck", "prompts", "contemplation", "editorial", "luxury journal"],
  openGraph: {
    title: "Thought Daughter — An Intimate Inquiry Deck",
    description: "64 inquiries designed to peel away defenses gently.",
    images: ["/images/cards/Card.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${instrumentSerif.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
