export default function Proof() {
  const logos = Array.from({ length: 14 }, (_, i) => `/logos/${i + 1}.png`);
  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section id="proof" className="section-modern bg-black overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-transparent to-red-900/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h3 className="heading-modern text-4xl md:text-5xl font-bold mb-6">
            Kepercayaan Dibangun Dari Hasil
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Inilah perusahaan-perusahaan yang sudah bekerja bersama kami
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Animated Logo Carousel */}
        <div className="relative w-full overflow-hidden mb-20">
          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="logo-scroll flex">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${index}-${logo}`}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="glass-morphism p-8 rounded-2xl shadow-modern hover:shadow-modern-lg transition-all duration-500 hover:-translate-y-2 min-w-[200px] h-32 flex items-center justify-center group">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                  {/* Logo */}
                  <img
                    src={logo}
                    alt={`Company Logo ${(index % 14) + 1}`}
                    className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110 filter brightness-75 group-hover:brightness-100 relative z-10"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <div className="glass-morphism inline-flex items-center px-12 py-6 rounded-full shadow-modern">
            <div className="flex -space-x-2 mr-6">
              <div className="w-4 h-4 bg-red-400 rounded-full animate-pulse"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="font-bold text-xl text-white font-barlow">15+ Perusahaan Terpercaya</span>
          </div>
        </div>
      </div>
    </section>
  );
}