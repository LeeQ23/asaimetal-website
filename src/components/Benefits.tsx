import Image from 'next/image';
import { generateWhatsAppLink, generateWhatsAppMessage } from '@/utils/whatsapp';

export default function Benefits() {
  const benefits = [
    {
      title: "Integrasi mesin & robot lintas brand — tanpa batasan.",
      description: "Semua brand, semua jenis mesin & robot bisa kami satukan dalam satu sistem terintegrasi. Dari Chemco hingga merek internasional lainnya.",
      image: "/Integrasi mesin & robot lintas brand — tanpa batasan..png",
      highlight: "lintas brand"
    },
    {
      title: "Personalisasi solusi sesuai budget & kebutuhan Anda.",
      description: "Setiap pabrik unik. Kami sesuaikan solusi otomasi dengan budget dan spesifikasi produksi Anda, tanpa kompromi pada kualitas.",
      image: "/Personalisasi solusi sesuai budget _ kebutuhan Anda..png",
      highlight: "sesuai budget"
    },
    {
      title: "Harga termurah + kualitas premium.",
      description: "Dapatkan teknologi otomasi kelas dunia dengan harga yang kompetitif. Kualitas premium tidak harus mahal.",
      image: "/Harga termurah + kualitas premium.png",
      highlight: "termurah"
    },
    {
      title: "After-sales service terbaik — downtime bukan masalah Anda lagi.",
      description: "Tim teknis siap 24/7. Maintenance rutin, troubleshooting cepat, dan upgrade sistem sesuai perkembangan teknologi.",
      image: "/After-sales service terbaik — downtime bukan masalah Anda lagi..png",
      highlight: "24/7"
    },
    {
      title: "Kapabilitas ekspor–impor kelas dunia.",
      description: "Pengalaman mengekspor ke Asia Tenggara dan mengimpor teknologi terdepan dari Eropa, Jepang, dan Amerika.",
      image: "/Kapabilitas ekspor–impor kelas dunia..png",
      highlight: "kelas dunia"
    },
    {
      title: "Bisa ubah mesin manual → otomatis dengan cepat & efisien.",
      description: "Transformasi mesin lama menjadi otomatis dalam waktu singkat. Tingkatkan produktivitas tanpa mengganti seluruh lini produksi.",
      image: "/Bisa ubah mesin manual _ otomatis dengan cepat & efisien.png",
      highlight: "cepat & efisien"
    },
    {
      title: "Teknologi AMR canggih untuk transportasi material otomatis.",
      description: "AMR dengan SLAM dan GPS Locator terbaik. Integrator AMR #1 di Indonesia dengan sertifikasi Shanghai.",
      image: "/Teknologi AMR canggih untuk transportasi material otomatis.png",
      highlight: "#1 di Indonesia"
    }
  ];

  return (
    <section id="benefits" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-transparent to-red-900/5"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="font-bold text-center mb-12 text-white">
          Kenapa PT. Asai Metal?
        </h2>
        <h3 className="text-red-400 font-bold text-center mb-12 text-lg max-w-5xl mx-auto">
          Jasa Otomasi Pabrik Indonesia • Integrator Robot Industri Fanuc, ABB, Yaskawa, KUKA • Konversi Production Line Manual ke Otomatis
        </h3>

        <div className="space-y-16">
          {/* Block 1: Text Left, Image Right */}
          <div className="flex-mobile-stack">
            <div className="flex-1 text-left">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="font-bold text-white text-lg md:text-xl lg:text-2xl">
                  Integrasi Mesin & Robot <span className="text-red-400">Lintas Brand — Tanpa Batasan</span>
                </h4>
              </div>
              <div className="mb-3 md:mb-4">
                <p className="text-red-400 font-bold text-sm md:text-base lg:text-lg">
                  Semua brand, satu sistem.
                </p>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg">
                Kami ahli dalam <strong className="text-white">integrasi mesin dan robot lintas brand</strong>. Mau pakai <strong className="text-red-400">Siemens, Mitsubishi, Fanuc, Yaskawa, Omron, ABB, atau KUKA</strong>? Semua bisa kami satukan dalam satu sistem otomasi yang <strong className="text-white">terintegrasi, stabil, dan mudah digunakan</strong>.<br/>
                Dengan pengalaman implementasi <strong className="text-red-400">100+ robot di Chemco</strong> dalam waktu singkat, kami membuktikan bahwa <strong className="text-white">tidak ada batasan brand</strong> untuk membuat pabrik Anda berjalan otomatis.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative group max-w-sm md:max-w-md mx-auto">
                <Image src={benefits[0].image} alt={benefits[0].title} className="w-full h-48 md:h-56 lg:h-64 object-cover rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl hover-lift" width={800} height={600} />
                <div className="absolute inset-0 bg-red-500/10 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Block 2: Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 text-left">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white">
                  Personalisasi Solusi <span className="text-red-400">Sesuai Budget & Kebutuhan Anda</span>
                </h4>
              </div>
              <div className="mb-4">
                <p className="text-red-400 font-bold text-lg">
                  Setiap pabrik unik, solusi custom.
                </p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Tidak ada dua pabrik yang sama. Karena itu, PT. Asai Metal menyediakan <strong className="text-white">solusi otomasi yang 100% disesuaikan dengan kebutuhan produksi dan budget perusahaan Anda</strong>.<br/>
                Apapun target Anda — <strong className="text-red-400">efisiensi biaya, peningkatan kapasitas produksi, peningkatan kualitas, atau full automation</strong> — kami bisa merancang dan membangun sistem yang tepat tanpa kompromi kualitas.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative group max-w-md mx-auto">
                <Image src={benefits[1].image} alt={benefits[1].title} className="w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:shadow-red-500/20 transition-all duration-500 transform group-hover:scale-105" width={800} height={600} />
                <div className="absolute inset-0 bg-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Block 3: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white">
                  Harga <span className="text-red-400">Kompetitif</span> + Kualitas Premium
                </h4>
              </div>
              <div className="mb-4">
                <p className="text-red-400 font-bold text-lg">
                  Kualitas premium, harga terjangkau.
                </p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Dengan PT. Asai Metal, Anda mendapatkan <strong className="text-white">teknologi otomasi kelas dunia</strong> dengan harga yang kompetitif.<br/>
                Kami memiliki <strong className="text-red-400">kapabilitas ekspor–impor langsung</strong> dari Eropa, Jepang, dan Amerika sehingga bisa memberikan <strong className="text-white">harga terbaik</strong> untuk mesin, robot, dan komponen, tanpa mengurangi kualitas premium.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative group max-w-md mx-auto">
                <Image src={benefits[2].image} alt={benefits[2].title} className="w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:shadow-red-500/20 transition-all duration-500 transform group-hover:scale-105" width={800} height={600} />
                <div className="absolute inset-0 bg-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Block 4: Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 text-left">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white">
                  After-Sales Service Terbaik — <span className="text-red-400">Downtime Bukan Masalah Anda Lagi</span>
                </h4>
              </div>
              <div className="mb-4">
                <p className="text-red-400 font-bold text-lg">
                  Support 24/7, maintenance rutin.
                </p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Kami bukan sekadar penjual, tapi <strong className="text-white">partner jangka panjang</strong>. Tim teknis PT. Asai Metal siap <strong className="text-red-400">24/7</strong> untuk melakukan <strong className="text-white">maintenance rutin, troubleshooting cepat, spare part ready-stock, dan upgrade sistem otomatisasi sesuai perkembangan teknologi terbaru</strong>.<br/>
                Dengan layanan after-sales kami, downtime bukan lagi masalah Anda.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative group max-w-md mx-auto">
                <Image src={benefits[3].image} alt={benefits[3].title} className="w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:shadow-red-500/20 transition-all duration-500 transform group-hover:scale-105" width={800} height={600} />
                <div className="absolute inset-0 bg-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Block 5: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white">
                  Kapabilitas Ekspor–Impor <span className="text-red-400">Kelas Dunia</span>
                </h4>
              </div>
              <div className="mb-4">
                <p className="text-red-400 font-bold text-lg">
                  Import dari Eropa, ekspor ke Asia Tenggara.
                </p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Kami berpengalaman dalam <strong className="text-white">ekspor–impor mesin industri, robot, dan komponen manufaktur</strong> ke dan dari berbagai negara.<br/>
                PT. Asai Metal dipercaya oleh perusahaan di <strong className="text-red-400">Indonesia, Singapura, dan Asia Tenggara</strong> untuk menjadi partner dalam mengimpor teknologi otomasi terbaru dan mengekspor produk ke pasar global.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative group max-w-md mx-auto">
                <Image src={benefits[4].image} alt={benefits[4].title} className="w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:shadow-red-500/20 transition-all duration-500 transform group-hover:scale-105" width={800} height={600} />
                <div className="absolute inset-0 bg-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Block 6: Image Left, Text Right */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="flex-1 text-left">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white">
                  Konversi Mesin Manual → Otomatis Dengan <span className="text-red-400">Cepat & Efisien</span>
                </h4>
              </div>
              <div className="mb-4">
                <p className="text-red-400 font-bold text-lg">
                  Upgrade mesin lama tanpa ganti baru.
                </p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Punya mesin lama? Tidak perlu beli baru! Kami bisa <strong className="text-white">mengkonversi mesin manual menjadi otomatis</strong> dalam waktu singkat dan biaya efisien.<br/>
                Hasilnya? <strong className="text-red-400">Produktivitas naik, biaya produksi turun, dan kualitas lebih konsisten</strong> — semua tanpa perlu mengganti seluruh lini produksi.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative group max-w-md mx-auto">
                <Image src={benefits[5].image} alt={benefits[5].title} className="w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:shadow-red-500/20 transition-all duration-500 transform group-hover:scale-105" width={800} height={600} />
                <div className="absolute inset-0 bg-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>

          {/* Block 7: Text Left, Image Right */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-left">
              <div className="flex items-center mb-6">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-red-500 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h4 className="text-2xl md:text-3xl font-bold text-white">
                  Teknologi AMR Canggih Untuk Transportasi Material Otomatis
                </h4>
              </div>
              <div className="mb-4">
                <p className="text-red-400 font-bold text-lg">
                  #1 AMR integrator di Indonesia.
                </p>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Kami adalah <strong className="text-red-400">Integrator AMR (Autonomous Mobile Robots) #1 di Indonesia</strong> dengan tim tersertifikasi langsung dari Shanghai.<br/>
                AMR kami menggunakan <strong className="text-white">teknologi SLAM (Simultaneous Localization and Mapping) dan GPS Locator</strong> terbaik untuk transportasi material yang <strong className="text-white">aman, presisi, dan efisien</strong>.<br/>
                Kami pastikan AMR dapat diintegrasikan langsung ke dalam sistem produksi Anda untuk menciptakan <strong className="text-white">alur kerja tanpa hambatan</strong>.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative group max-w-md mx-auto">
                <Image src={benefits[6].image} alt={benefits[6].title} className="w-full h-64 object-cover rounded-2xl shadow-2xl group-hover:shadow-red-500/20 transition-all duration-500 transform group-hover:scale-105" width={800} height={600} />
                <div className="absolute inset-0 bg-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <a
            href={generateWhatsAppLink(generateWhatsAppMessage('benefits_efficiency'), 'benefits_cta')}
            className="btn-responsive bg-gradient-to-r from-red-600 to-red-500 text-white font-bold uppercase hover-lift shadow-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tingkatkan Efisiensi Produksi — Hubungi Kami Sekarang
          </a>
        </div>
      </div>
    </section>
  );
}