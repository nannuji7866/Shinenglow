import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import ServicesPreview from '@/components/ServicesPreview';
import BranchShowcase from '@/components/BranchShowcase';
import AcademyPreview from '@/components/AcademyPreview';
import Reviews from '@/components/Reviews';
import Locations from '@/components/Locations';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-rose-gold selection:text-dark-bg">
      <Navbar />
      <HeroSlider />
      <ServicesPreview />
      <BranchShowcase />
      <AcademyPreview />
      <Reviews />
      <Locations />
      <InstagramFeed />
      <Footer />
    </main>
  );
}
