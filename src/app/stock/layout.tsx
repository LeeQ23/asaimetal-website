import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stok Mesin & Robot - PT. Asai Metal',
  description: 'Jelajahi stok mesin dan robot terbaru dari PT. Asai Metal. Milling, CNC, Press, Robot, dan lainnya. Request quote sekarang!',
};

export default function StockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
