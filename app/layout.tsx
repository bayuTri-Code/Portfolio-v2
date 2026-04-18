import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bayu Tri — Fullstack Web Developer",
  description:
    "Portfolio Bayu Tri — Fullstack Web Developer specializing in React, Next.js, Laravel, and modern web technologies. Building impactful digital experiences.",
  keywords: [
    "Bayu Tri",
    "Fullstack Developer",
    "Web Developer",
    "React",
    "Next.js",
    "Laravel",
    "Portfolio",
  ],
  authors: [{ name: "Bayu Tri" }],
  openGraph: {
    title: "Bayu Tri — Fullstack Web Developer",
    description:
      "Fullstack Web Developer specializing in React, Next.js, Laravel, and modern web technologies.",
    type: "website",
    locale: "id_ID",
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
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-bg text-text">{children}</body>
    </html>
  );
}
