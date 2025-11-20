import SimpleWaitlist from '@/components/SimpleWaitlist';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Waitlist - RYFT",
  description: "Join the RYFT waitlist for early access to enterprise-grade commission management with zero setup complexity.",
  keywords: "waitlist, early access, commission management, RYFT signup",
  openGraph: {
    title: "Join Waitlist - RYFT",
    description: "Join the RYFT waitlist for early access to enterprise-grade commission management with zero setup complexity.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join Waitlist - RYFT",
    description: "Join the RYFT waitlist for early access to enterprise-grade commission management with zero setup complexity.",
  },
};

export default function WaitlistPage() {
  return (
    <main>
      <SimpleWaitlist />
    </main>
  );
}