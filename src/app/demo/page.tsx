'use client';

import { Navigation } from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import useAnalytics from "@/hooks/useAnalytics";

export default function DemoPage() {
  const { trackPageView, trackDemo } = useAnalytics();

  useEffect(() => {
    trackPageView('demo-page');
    
    // Track when Calendly events happen
    const handleCalendlyEvent = (event: any) => {
      if (event.data?.event === 'calendly.event_scheduled') {
        trackDemo('demo-page');
      }
    };

    window.addEventListener('message', handleCalendlyEvent);
    return () => window.removeEventListener('message', handleCalendlyEvent);
  }, [trackPageView, trackDemo]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="pt-16 pb-4 h-screen flex flex-col">
        <div className="container mx-auto px-6 flex-1 flex flex-col">
          {/* Hero Section */}
          <div className="text-center mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-navy-900">
              Schedule Your Demo
            </h1>
          </div>

          {/* Calendly Widget */}
          <div className="flex-1 max-w-6xl mx-auto w-full">
            <iframe
              src="https://calendly.com/rishab-motgi-complytics/ryft-discovery-call"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Schedule a RYFT Demo"
              className="w-full h-full"
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}