import { NewHomeNavigation } from '@/components/newhome/NewHomeNavigation';
import Footer from '@/components/Footer';
import NewHomeHero from '@/components/newhome/NewHomeHero';
import FeatureDemos from '@/components/newhome/FeatureDemos';
import FAQ from '@/components/FAQ';
import NewHomeCTA from '@/components/newhome/NewHomeCTA';

export default function NewHomePage() {
  return (
    <>
      <NewHomeNavigation />
      <main>
        <NewHomeHero />
        <FeatureDemos />
        <FAQ />
        <NewHomeCTA />
      </main>
      <Footer />
    </>
  );
}

