import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Proof from '@/components/Proof';
import Benefits from '@/components/Benefits';
import Catalog from '@/components/Catalog';
import Authority from '@/components/Authority';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Pusat Otomasi Industri & Integrasi Robot #1 Indonesia',
  description: 'PT. Asai Metal menyediakan solusi otomasi pabrik lengkap: integrasi robot, konversi mesin manual ke otomatis, dan teknologi AMR. Konsultasi GRATIS sekarang!',
  alternates: {
    canonical: 'https://asaimetal-website.leekheemahendra.workers.dev',
  },
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
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
