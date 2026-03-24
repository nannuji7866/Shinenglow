import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Bridal from '@/components/Bridal';

export default function BridalPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-rose-gold selection:text-dark-bg">
      <Navbar />
      <Bridal />
      <Footer />
    </main>
  );
}
