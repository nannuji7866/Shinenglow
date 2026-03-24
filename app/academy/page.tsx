import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Academy from '@/components/Academy';

export default function AcademyPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-white selection:bg-rose-gold selection:text-dark-bg">
      <Navbar />
      <div className="pt-24">
        <Academy />
      </div>
      <Footer />
    </main>
  );
}
