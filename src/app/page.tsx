import { Navigation } from '@/components/Navigation';
import InteractiveHero from '@/components/InteractiveHero';
import SimpleProblemsNew from '@/components/SimpleProblemsNew';
import LiveDashboardDemo from '@/components/LiveDashboardDemo';
import EnhancedComparison from '@/components/EnhancedComparison';
import BlogSection from '@/components/BlogSection';
import FAQ from '@/components/FAQ';
import BottomCTA from '@/components/BottomCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <InteractiveHero />
        <SimpleProblemsNew />
        <LiveDashboardDemo />
        <EnhancedComparison />
        <BlogSection />
        <FAQ />
        <BottomCTA />
      </main>
      <Footer />
    </>
  );
}
