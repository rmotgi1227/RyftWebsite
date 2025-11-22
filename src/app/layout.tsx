import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Analytics from "@/components/Analytics";
import NexusChat from "@/components/NexusChat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "RYFT",
  description: "Enterprise-grade commission tracking with zero setup complexity. Deploy in minutes, not months.",
  keywords: "commission management, sales operations, enterprise software, zero setup, commission tracking",
  authors: [{ name: "RYFT" }],
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "RYFT",
    description: "Enterprise-grade commission tracking with zero setup complexity. Deploy in minutes, not months.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RYFT",
    description: "Enterprise-grade commission tracking with zero setup complexity. Deploy in minutes, not months.",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plusJakarta.variable} antialiased`}>
        <Analytics />
        {children}
        <NexusChat />
      </body>
    </html>
  );
}
