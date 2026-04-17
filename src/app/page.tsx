import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Proof from '@/components/Proof';
import Benefits from '@/components/Benefits';
import Catalog from '@/components/Catalog';
import Authority from '@/components/Authority';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'PT. Asai Metal - Otomasi Pabrik Terbaik',
  description: 'Transformasikan pabrik Anda dengan mesin, robot & otomasi. Solusi otomasi lengkap dari PT. Asai Metal.',
};

export default function Home() {
  return (
    <div className="bg-black">

      <Header />
      <main>
        <Hero />
        <Proof />
        <Benefits />
        <Catalog />
        <Authority />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
