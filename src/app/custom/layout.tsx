import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solusi Kustom Otomasi & Desain Mesin Khusus',
  description: 'Butuh solusi otomasi yang unik? PT. Asai Metal mendesain dan membangun mesin kustom sesuai kebutuhan spesifik pabrik Anda. Konsultasikan kebutuhan Anda!',
  alternates: {
    canonical: 'https://asaimetal-website.leekheemahendra.workers.dev/custom',
  },
};

export default function CustomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
