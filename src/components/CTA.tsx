import { generateWhatsAppLink, generateWhatsAppMessage } from '@/utils/whatsapp';

export default function CTA() {
  return (
    <section id="cta" className="section-modern bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-red-900/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="heading-modern text-4xl md:text-5xl font-bold mb-8">
            Siap Bikin Pabrik Anda Lebih Modern & Efisien?
          </h3>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 font-mulish leading-relaxed">
            Hubungi kami sekarang untuk konsultasi gratis.
          </p>
            <p className="text-lg md:text-xl mb-12 text-gray-400 font-mulish max-w-3xl mx-auto">
            Biarkan kami tunjukkan bagaimana lini produksi Anda bisa bekerja lebih baik dari sebelumnya.
          </p>

          <a
            href={generateWhatsAppLink(generateWhatsAppMessage('cta_final'), 'cta_main')}
            className="btn-modern text-xl font-bold uppercase shadow-lg animate-pulse-modern inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mulai Konsultasi Gratis Automasi Pabrik Anda
          </a>
        </div>
      </div>
    </section>
  );
}