import type { Metadata } from "next";
import { Navigation } from '@/components/Navigation';
import ModernProductOverview from '@/components/ModernProductOverview';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Product Features - RYFT",
  description: "Explore RYFT's 5 breakthrough features: Zero Setup, AI Plan Parsing, Real-time Calculations, Complete Auditability, and Bring Your Own Cloud security.",
  keywords: "commission management features, zero setup, AI plan parsing, real-time calculations, commission audit, BYOC security",
  openGraph: {
    title: "Product Features - RYFT", 
    description: "Explore RYFT's 5 breakthrough features: Zero Setup, AI Plan Parsing, Real-time Calculations, Complete Auditability, and Bring Your Own Cloud security.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Features - RYFT",
    description: "Explore RYFT's 5 breakthrough features: Zero Setup, AI Plan Parsing, Real-time Calculations, Complete Auditability, and Bring Your Own Cloud security.",
  },
};

export default function ProductPage() {
  return (
    <>
      <Navigation />
      <main>
        <ModernProductOverview />
      </main>
      <Footer />
    </>
  );
}