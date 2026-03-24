import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-rose-gold selection:text-dark-bg">
      <Navbar />
      <div className="pt-24">
        <About />
      </div>
      <Footer />
    </main>
  );
}
