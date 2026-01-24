import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import IntegrationsSection from '@/components/landing/IntegrationsSection';
// import PricingSection from '@/components/landing/PricingSection';
import FAQSection from '@/components/landing/FAQSection';
import BlogPreviewSection from '@/components/landing/BlogPreviewSection';
// import CTASection from '@/components/landing/CTASection';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <IntegrationsSection />
      {/* <PricingSection /> */}
      <BlogPreviewSection />
      <FAQSection />
      {/* <CTASection /> */}
      <Footer />
    </main>
  );
}
