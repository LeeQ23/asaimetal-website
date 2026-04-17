import { generateWhatsAppLink, generateWhatsAppMessage } from '@/utils/whatsapp';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden bg-black">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white font-barlow leading-tight animate-fade-in-up">
            Transformasikan Pabrik Anda Dengan{' '}
            <span className="text-gradient">Otomasi Tanpa Batas</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-5xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
            Mesin, robot, sistem — semua bisa kami buat & integrasikan, sesuai budget dan kebutuhan Anda.
          </p>

          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-4xl mx-auto animate-fade-in-up animate-delay-400">
            Anda cukup bilang apa yang Anda mau, kami yang wujudkan.
          </p>

          <div className="animate-fade-in-up animate-delay-500">
            <a
              href={generateWhatsAppLink(generateWhatsAppMessage('hero_consultation'), 'hero_cta')}
              className="btn-modern inline-block text-center font-bold uppercase shadow-lg animate-pulse-modern px-12 py-6 text-xl rounded-2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Konsultasi Gratis Automasi Pabrik Anda
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}