import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Katalog Mesin & Robot Ready Stock Indonesia',
  description: 'Cari mesin CNC, Milling, Press, dan Robot industri ready stock di PT. Asai Metal. Kualitas terjamin dengan dukungan teknis penuh. Lihat stok terbaru kami!',
  alternates: {
    canonical: 'https://asaimetal-website.leekheemahendra.workers.dev/stock',
  },
};

export default function StockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
