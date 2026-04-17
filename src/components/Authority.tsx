import { generateWhatsAppLink, generateWhatsAppMessage } from '@/utils/whatsapp';

export default function Authority() {
  return (
    <section id="authority" className="section-spacious bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block px-6 py-2 bg-red-500/10 border border-red-500/30 rounded-full mb-6 animate-fade-in-up">
            <span className="text-red-400 font-bold text-sm tracking-wider uppercase font-barlow">Established in Indonesia Since 2009</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in-up animate-delay-200">
            Dipandu Oleh Tim Ahli Dengan 15+ Tahun Pengalaman
          </h2>
          <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed text-lg animate-fade-in-up animate-delay-400 font-mulish">
            Kami dipercaya perusahaan di Indonesia & Singapura. Bedanya? Kalau Anda kerja sama dengan kami, Anda nggak cuma beli mesin. Anda masuk ke ekosistem yang akan selalu jaga kelancaran pabrik Anda.
          </p>
        </div>


        {/* 2x3 Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Row 1 */}
          <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500" style={{aspectRatio: '16/9'}}>
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
              
              preload="metadata"
            >
              <source src="/videos/fukui-tandem-line.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6">
              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-2">
                  FUKUI TANDEM LINE
                </h4>
                <p className="text-red-400 font-semibold text-sm mb-3">
                  Tandem Line Press Otomatis – Fukui
                </p>
                <p className="text-gray-300 text-sm">
                  Uptime 24/7 • Zero Manual Handling
                </p>
                <a
                  href="https://youtu.be/SHKVTJ11QYs"
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 text-sm font-medium inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Tonton Proyek
                </a>
              </div>
            </div>

            {/* Default overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
              <div>
                <h4 className="text-white font-bold text-lg uppercase tracking-wide">
                   FUKUI TANDEM LINE
                </h4>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500" style={{aspectRatio: '16/9'}}>
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
              
              preload="metadata"
            >
              <source src="/videos/robot-arm-transfer.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6">
              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-2">
                  ROBOT ARM TRANSFER
                </h4>
                <p className="text-red-400 font-semibold text-sm mb-3">
                  Robot Arm Transfer Otomatis
                </p>
                <p className="text-gray-300 text-sm">
                  Produksi lebih cepat 35%
                </p>
                <a
                  href="https://youtu.be/lsU84bRs0Fk"
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 text-sm font-medium inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Tonton Proyek
                </a>
              </div>
            </div>

            {/* Default overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
              <div>
                <h4 className="text-white font-bold text-lg uppercase tracking-wide">
                   ROBOT ARM TRANSFER
                </h4>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500" style={{aspectRatio: '16/9'}}>
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
              
              preload="metadata"
            >
              <source src="/videos/robot-handling-die-casting.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6">
              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-2">
                  ROBOT HANDLING FOR DIE CASTING MACHINE
                </h4>
                <p className="text-red-400 font-semibold text-sm mb-3">
                  Robot Handling untuk Die Casting
                </p>
                <p className="text-gray-300 text-sm">
                  Presisi tinggi • Konsistensi output
                </p>
                <a
                  href="https://youtu.be/lUa-egxRjaE"
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 text-sm font-medium inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Tonton Proyek
                </a>
              </div>
            </div>

            {/* Default overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
              <div>
                <h4 className="text-white font-bold text-lg uppercase tracking-wide">
                   ROBOT HANDLING FOR DIE CASTING
                </h4>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500" style={{aspectRatio: '16/9'}}>
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/videos/komatsu-yaskawa-tandem.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6">
              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-2">
                  KOMATSU TANDEM LINE + YASKAWA ROBOT HANDLING
                </h4>
                <p className="text-red-400 font-semibold text-sm mb-3">
                  Komatsu Tandem + Robot Yaskawa
                </p>
                <p className="text-gray-300 text-sm">
                  Efisiensi meningkat 40%
                </p>
                <a
                  href="https://youtu.be/1-QFhKfdp8M"
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 text-sm font-medium inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Tonton Proyek
                </a>
              </div>
            </div>

            {/* Default overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
              <div>
                <h4 className="text-white font-bold text-lg uppercase tracking-wide">
                   KOMATSU TANDEM + YASKAWA
                </h4>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500" style={{aspectRatio: '16/9'}}>
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
              
              preload="metadata"
            >
              <source src="/videos/press-line-integration.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6">
              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-2">
                  Video for slideshow 1
                </h4>
                <p className="text-red-400 font-semibold text-sm mb-3">
                  Robot Integrasi Press Line
                </p>
                <p className="text-gray-300 text-sm">
                  Fully automated pick & place
                </p>
                <a
                  href={generateWhatsAppLink(generateWhatsAppMessage('video_press_line'), 'video_press_line')}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Tonton Proyek
                </a>
              </div>
            </div>

            {/* Default overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
              <div>
                <h4 className="text-white font-bold text-lg uppercase tracking-wide">
                   ROBOT INTEGRASI PRESS LINE
                </h4>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500" style={{aspectRatio: '16/9'}}>
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
              
              preload="metadata"
            >
              <source src="/videos/ube-2500t-injection.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6">
              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-2">
                  MESIN INJECTION PLASTIC UBE 2500T
                </h4>
                <p className="text-red-400 font-semibold text-sm mb-3">
                  Injection Plastic UBE 2500T
                </p>
                <p className="text-gray-300 text-sm">
                  Output maksimal • Kualitas konsisten
                </p>
                <a
                  href="https://youtu.be/qZ5Q6p9iJHY"
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300 text-sm font-medium inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Tonton Proyek
                </a>
              </div>
            </div>

            {/* Default overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4 pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
              <div>
                <h4 className="text-white font-bold text-lg uppercase tracking-wide">
                   MESIN INJECTION PLASTIC UBE 2500T
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={generateWhatsAppLink(generateWhatsAppMessage('cta_final'), 'authority_main_cta')}
            className="inline-block px-12 py-6 rounded-xl text-[18px] font-bold uppercase transition-all duration-300 transform hover:scale-105 shadow-[0_4px_15px_rgba(220,38,38,0.3)] bg-gradient-to-br from-red-600 to-red-500 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi Gratis Automasi Pabrik Anda
          </a>
        </div>
      </div>
    </section>
  );
}