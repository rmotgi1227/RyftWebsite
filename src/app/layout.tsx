import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RYFT",
  description: "Enterprise-grade commission tracking with zero setup complexity. Deploy in minutes, not months.",
  keywords: "commission management, sales operations, enterprise software, zero setup, commission tracking",
  authors: [{ name: "RYFT" }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
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
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
