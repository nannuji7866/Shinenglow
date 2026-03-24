import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServicesPreview from '@/components/ServicesPreview';
import AboutPreview from '@/components/AboutPreview';
import AcademyPreview from '@/components/AcademyPreview';
import Reviews from '@/components/Reviews';
import Locations from '@/components/Locations';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-rose-gold selection:text-dark-bg">
      <Navbar />
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <AcademyPreview />
      <Reviews />
      <Locations />
      <Footer />
    </main>
  );
}
