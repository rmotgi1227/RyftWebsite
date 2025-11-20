import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo - RYFT",
  description: "Schedule a personalized demo of RYFT's commission management platform. See how we can transform your RevOps, Finance, and Sales operations.",
  keywords: "book demo, schedule meeting, commission management demo, RYFT demo",
  openGraph: {
    title: "Book a Demo - RYFT",
    description: "Schedule a personalized demo of RYFT's commission management platform. See how we can transform your RevOps, Finance, and Sales operations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Demo - RYFT",
    description: "Schedule a personalized demo of RYFT's commission management platform. See how we can transform your RevOps, Finance, and Sales operations.",
  },
};

export default function DemoPage() {
  return (
    <div>
      <h1>Book a Demo - Coming Soon</h1>
      <p>This page will contain the Calendly integration for demo bookings.</p>
    </div>
  );
}