import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Gallery from '@/components/Gallery';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-rose-gold selection:text-dark-bg">
      <Navbar />
      <Gallery />
      <Footer />
    </main>
  );
}
