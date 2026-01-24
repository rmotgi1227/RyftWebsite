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
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
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
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
