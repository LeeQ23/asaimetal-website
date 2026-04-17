import Link from 'next/link';
import Image from 'next/image';
import { generateWhatsAppLink, generateWhatsAppMessage } from '@/utils/whatsapp';

export default function Catalog() {
  const services = [
    {
      title: "Machine & Robot Integration",
      subtitle: "Integrasi Mesin & Robot",
      description: "PT. Asai Metal adalah ahli integrasi mesin dan robot lintas brand. Kami bisa menghubungkan mesin manual, CNC, injection molding, hingga robot industri dari berbagai brand seperti Fanuc, ABB, KUKA, Yaskawa, Mitsubishi, Siemens, Omron, Kawasaki, Universal Robots, dan banyak lainnya. Dengan pengalaman 100+ robot berhasil diintegrasikan di Chemco, kami tahu bagaimana membuat semua perangkat bekerja seamless dalam satu sistem terpusat. Hasilnya: produksi lebih cepat, presisi lebih tinggi, dan koordinasi antar-mesin tanpa hambatan.",
      image: "/Integrasi Mesin & Robot.jpg"
    },
    {
      title: "Production Line Automation",
      subtitle: "Automasi Line Produksi",
      description: "Kami bisa membuat line produksi Anda full otomatis dari awal sampai akhir. Mulai dari input material, proses produksi, quality control, hingga packaging — semuanya dapat dijalankan tanpa campur tangan manual yang membuang waktu dan biaya. Dengan otomasi penuh, Anda akan mendapatkan: Efisiensi biaya operasional (lebih sedikit tenaga kerja manual, lebih banyak output). Kecepatan produksi (produk jadi lebih cepat, lead time berkurang drastis). Kualitas konsisten (human error dihilangkan, standar kualitas lebih terjamin).",
      image: "/Automasi Line Produksi.png"
    },
    {
      title: "Manual to Automatic Conversion",
      subtitle: "Konversi Manual → Otomatis",
      description: "Lihat transformasi nyata: mesin manual menjadi otomatis dalam 2-4 minggu! Kami upgrade mesin lama Anda dengan sensor canggih, actuator presisi, PLC modern, dan software kontrol sistem tanpa mengganggu operasi existing.\n\nHasil yang bisa Anda lihat langsung:\n• Mesin manual → Sistem otomatis 24/7\n• Operator manual → Kontrol sentral terintegrasi\n• Produksi terbatas → Output maksimal konsisten\n\nLebih hemat daripada beli mesin baru, lebih cepat implementasi, lebih produktif hasilnya.",
      image: "/Konversi Manual ke Otomatis.png"
    },
    {
      title: "Advanced AMR Technology",
      subtitle: "Teknologi AMR Canggih",
      description: "PT. Asai Metal adalah Integrator AMR (Autonomous Mobile Robot) #1 di Indonesia. AMR kami dilengkapi dengan: SLAM (Simultaneous Localization & Mapping) untuk navigasi presisi. GPS Locator untuk pelacakan real-time. Integrasi langsung ke MES/ERP system agar bisa sinkron dengan jadwal produksi. Manfaat AMR untuk pabrik Anda: Transportasi material otomatis dari satu mesin ke mesin lain. Mengurangi tenaga kerja manual di bagian logistik internal. Meningkatkan keamanan kerja dengan sistem deteksi tabrakan. Dengan sertifikasi langsung dari Shanghai, tim kami menjamin AMR yang stabil, aman, dan siap digunakan dalam skala besar.",
      video: "/videos/amr-video.mp4"
    }
  ];

  return (
    <section id="catalog" className="section-spacious bg-gradient-to-br from-black via-gray-900 to-purple-900">
      <div className="container mx-auto">
        {/* Subheader */}
        <div className="text-center mb-8">
          <span className="inline-block px-8 py-3 bg-red-500/20 text-red-400 font-bold text-sm uppercase tracking-wider rounded-full border border-red-500/30">
            BLUEPRINT OTOMASI PABRIK ANDA
          </span>
        </div>

        {/* Main Title */}
        <h3 className="text-3xl font-bold text-center mb-12 text-white">
          Solusi Otomasi Kami
        </h3>

        <div className="space-y-16">
          {/* Machine & Robot Integration */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-7/12 space-y-4 shrink-0">
              <div className="w-12 bg-red-600 mb-4"></div>
              <div className="flex items-center">
                <span className="text-red-500 font-bold text-2xl mr-4">✓</span>
                <h4 className="text-red-400 font-bold text-xl uppercase">
                  Machine & Robot Integration
                </h4>
              </div>
              <p className="text-gray-300 leading-relaxed pl-10 text-base">
                PT. Asai Metal adalah ahli <strong className="text-red-400">integrasi mesin dan robot lintas brand</strong>. Kami dapat menghubungkan mesin manual, CNC, <strong className="text-red-400">injection molding</strong>, hingga robot industri dari berbagai brand global seperti <strong className="text-red-400">Fanuc, ABB, KUKA, Yaskawa, Mitsubishi, Siemens, Omron, Kawasaki, Universal Robots</strong>, dan banyak lainnya.<br/><br/>
                Dengan pengalaman sukses <strong className="text-red-400">100+ robot terintegrasi di Chemco</strong>, kami tahu cara membuat semua perangkat bekerja seamless dalam satu sistem terpusat.<br/>
                Hasilnya:<br/><br/>
                • <strong className="text-red-400">Produksi lebih cepat & efisien</strong><br/>
                • <strong className="text-red-400">Presisi lebih tinggi</strong> dengan error minimal<br/>
                • Koordinasi antar-mesin tanpa hambatan
              </p>
              <div className="pl-10 mt-4">
                <a href={generateWhatsAppLink(generateWhatsAppMessage('catalog_robot_integration'), 'catalog_robot_integration')} className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors" target="_blank" rel="noopener noreferrer">
                  Pelajari integrasi robot →
                </a>
              </div>
            </div>
            <div className="w-full lg:w-5/12 shrink-0">
              <div className="group relative overflow-hidden rounded-xl shadow-2xl hover-lift w-full">
                <video
                  src="/videos/The ASAI METAL AMR Showroom  Armawati 08170968855 Mohamad Fajar 08788411183.mp4"
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                {/* Text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      {services[0].title}
                    </h4>
                    <p className="text-gray-300 text-xs">
                      {services[0].subtitle}
                    </p>
                  </div>
                </div>
                {/* Red glow effect */}
                <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Production Line Automation */}
          <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-7/12 shrink-0">
              <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 w-full">
                <Image src={services[1].image!} alt={services[1].title} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700" width={800} height={600} />
                {/* Text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      {services[1].title}
                    </h4>
                    <p className="text-gray-300 text-xs">
                      {services[1].subtitle}
                    </p>
                  </div>
                </div>
                {/* Red glow effect */}
                <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
            </div>
            <div className="w-full lg:w-5/12 space-y-4 shrink-0">
              <div className="w-12 h-1 bg-red-600 mb-4"></div>
              <div className="flex items-center">
                <span className="text-red-500 font-bold text-2xl mr-4">✓</span>
                <h4 className="text-red-400 font-bold text-xl uppercase">
                  Production Line Automation
                </h4>
              </div>
              <p className="text-gray-300 text-base leading-relaxed pl-10">
                Kami mengubah line produksi Anda menjadi <strong className="text-red-400">100% otomatis, dari input hingga packaging</strong> — <strong className="text-red-400">tanpa downtime</strong>, tanpa kompromi kualitas. Mulai dari input material, proses produksi, <strong className="text-red-400">quality control injection molding</strong>, hingga packaging, semuanya dapat dijalankan tanpa campur tangan manual.<br/><br/>
                Keuntungan langsung untuk pabrik Anda:<br/><br/>
                • <strong className="text-red-400">Efisiensi biaya</strong>: tenaga kerja manual berkurang, output meningkat<br/>
                • <strong className="text-red-400">Kecepatan produksi</strong>: lead time turun drastis, produk jadi lebih cepat<br/>
                • <strong className="text-red-400">Kualitas konsisten</strong>: human error hilang, standar terjaga
              </p>
              <div className="pl-10 mt-4">
                <a href={generateWhatsAppLink(generateWhatsAppMessage('catalog_production_automation'), 'catalog_production_automation')} className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors" target="_blank" rel="noopener noreferrer">
                  Otomasi line produksi Anda →
                </a>
              </div>
            </div>
          </div>

          {/* Manual to Automatic Conversion */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            <div className="w-full lg:w-7/12 space-y-4 shrink-0">
              <div className="w-12 h-1 bg-red-600 mb-4"></div>
              <div className="flex items-center">
                <span className="text-red-500 font-bold text-2xl mr-4">✓</span>
                <h4 className="text-red-400 font-bold text-xl uppercase">
                  Manual to Automatic Conversion
                </h4>
              </div>
              <p className="text-gray-300 text-base leading-relaxed pl-10 whitespace-pre-line">
                Dalam hanya <strong className="text-red-400">2–4 minggu</strong>, mesin manual Anda berubah jadi <strong className="text-red-400">sistem otomatis 24/7</strong> — tanpa harus investasi mesin baru! Kami upgrade mesin lama Anda dengan <strong className="text-red-400">sensor canggih</strong>, <strong className="text-red-400">actuator presisi</strong>, <strong className="text-red-400">PLC modern</strong>, dan <strong className="text-red-400">software kontrol sistem</strong> tanpa mengganggu operasi berjalan.

                Before vs After:

                • Mesin manual → <strong className="text-red-400">Sistem otomatis 24/7</strong>
                • Operator manual → <strong className="text-red-400">Kontrol sentral terintegrasi</strong>
                • Produksi terbatas → <strong className="text-red-400">Output maksimal konsisten</strong>

                Lebih hemat dibanding beli mesin baru, lebih cepat implementasi, lebih produktif hasilnya.
              </p>
              <div className="pl-10 mt-4">
                <a href={generateWhatsAppLink(generateWhatsAppMessage('catalog_manual_conversion'), 'catalog_manual_conversion')} className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors" target="_blank" rel="noopener noreferrer">
                  Mulai konversi mesin Anda →
                </a>
              </div>
            </div>
            <div className="w-full lg:w-5/12 shrink-0">
              <div className="group relative overflow-hidden rounded-xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 w-full">
                <Image src={services[2].image!} alt={services[2].title} className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700" width={800} height={600} />
                {/* Text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">
                      {services[2].title}
                    </h4>
                    <p className="text-gray-300 text-xs">
                      {services[2].subtitle}
                    </p>
                  </div>
                </div>
                {/* Red glow effect */}
                <div className="absolute inset-0 bg-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>


        {/* Additional Specialized Services */}
        <div className="mt-24 mb-16">
          <div className="text-center mb-10">
            <h4 className="text-2xl md:text-3xl font-bold text-white font-barlow inline-flex shadow-red-500">
              Layanan Spesialis & Manufaktur
            </h4>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* OEM Feeder */}
            <div className="bg-gray-800/40 p-6 rounded-xl border border-red-500/10 hover:border-red-500/40 hover:bg-gray-800/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                <span className="text-red-400 text-2xl flex items-center">⚙️</span>
              </div>
              <h5 className="text-white font-bold mb-2 font-barlow">Mesin Feeder ASAI METAL</h5>
              <p className="text-gray-400 text-sm leading-relaxed font-mulish">
                Kami bukan sekadar integrator. Kami dengan bangga memproduksi NC Feeder berkualitas standar industri dengan brand asli kebanggaan kami sendiri: <strong className="text-red-400">ASAI METAL</strong>.
              </p>
            </div>

            {/* Retrofit */}
            <div className="bg-gray-800/40 p-6 rounded-xl border border-red-500/10 hover:border-red-500/40 hover:bg-gray-800/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                <span className="text-red-400 text-2xl flex items-center">🔌</span>
              </div>
              <h5 className="text-white font-bold mb-2 font-barlow">Retrofit Panel Control</h5>
              <p className="text-gray-400 text-sm leading-relaxed font-mulish">
                Modernisasi mesin lama tanpa biaya fantastis. Kami memodifikasi panel & sistem kontrol yang sudah usang menjadi <strong className="text-red-400">sistem pintar yang kekinian</strong>.
              </p>
            </div>

            {/* Service & Maintenance */}
            <div className="bg-gray-800/40 p-6 rounded-xl border border-red-500/10 hover:border-red-500/40 hover:bg-gray-800/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                <span className="text-red-400 text-2xl flex items-center">🔧</span>
              </div>
              <h5 className="text-white font-bold mb-2 font-barlow">Service Machine Press</h5>
              <p className="text-gray-400 text-sm leading-relaxed font-mulish">
                Layanan perbaikan darurat dan maintenance rutin khusus untuk berbagai tipe Mesin Press guna melindungi uptime pabrik 24/7.
              </p>
            </div>

            {/* Sparepart */}
            <div className="bg-gray-800/40 p-6 rounded-xl border border-red-500/10 hover:border-red-500/40 hover:bg-gray-800/60 transition-all duration-300 hover:-translate-y-1 group">
              <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600/30 transition-colors">
                <span className="text-red-400 text-2xl flex items-center">📦</span>
              </div>
              <h5 className="text-white font-bold mb-2 font-barlow">Robot Sparepart & Aksesoris</h5>
              <p className="text-gray-400 text-sm leading-relaxed font-mulish">
                Ketersediaan jaminan suku cadang lengkap (ready stock) untuk robot Fanuc, ABB, Yaskawa, KUKA dan perangkat industri lainnya.
              </p>
            </div>

          </div>
        </div>

        <div className="text-center mt-16">
          <div className="mb-6">
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto text-lg">
              Apapun kebutuhan Anda — <strong className="text-red-400">mesin, robot, otomasi penuh, atau konversi mesin lama</strong> — PT. Asai Metal siap menjadi <strong className="text-white">satu-satunya partner otomasi yang Anda butuhkan</strong>.
              Hubungi kami sekarang untuk <strong className="text-red-400">konsultasi gratis</strong> dan mulailah transformasi pabrik Anda menuju <strong className="text-red-400">efisiensi maksimal</strong>.
            </p>
          </div>

          {/* Stock Page Teaser */}
          <div className="mb-8">
            <Link
              href="/stock"
              className="inline-flex items-center px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 hover:text-white rounded-lg transition-all duration-300 border border-gray-600 hover:border-gray-500 text-base"
            >
              Lihat Stok Mesin Kami →
            </Link>
          </div>
          <a
            href={generateWhatsAppLink(generateWhatsAppMessage('cta_final'), 'catalog_main_cta')}
            className="px-8 py-4 text-lg font-bold bg-gradient-to-r from-red-600 to-red-500 text-white uppercase hover-lift shadow-lg transition-all duration-300"
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