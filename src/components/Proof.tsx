'use client';
import { useState } from 'react';

export default function Proof() {
  const [isGridView, setIsGridView] = useState(false);
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
        <div className="text-center mb-16">
          <h3 className="heading-modern text-4xl md:text-5xl font-bold mb-6">
            Kepercayaan Dibangun Dari Hasil
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Inilah perusahaan-perusahaan yang sudah bekerja bersama kami
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Dynamic Logo Layout */}
        <div className={`relative w-full transition-all duration-700 ease-in-out ${isGridView ? 'mb-12' : 'mb-20 overflow-hidden'}`}>
          {!isGridView && (
            <>
              {/* Gradient Overlays for Smooth Edges */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black via-black/80 to-transparent z-10 hidden md:block"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black via-black/80 to-transparent z-10 hidden md:block"></div>
            </>
          )}

          <div className={`transition-all duration-700 ${isGridView ? 'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6 opacity-100' : 'logo-scroll flex h-32'}`}>
            {(isGridView ? logos : duplicatedLogos).map((logo, index) => (
              <div
                key={`${isGridView ? 'grid' : 'scroll'}-${index}-${logo}`}
                className={`flex-shrink-0 group transition-all duration-500 ${isGridView ? 'w-full' : 'mx-4 md:mx-8'}`}
              >
                <div className={`glass-morphism p-4 md:p-8 rounded-2xl shadow-modern hover:shadow-modern-lg transition-all duration-500 hover:-translate-y-1 flex items-center justify-center group relative overflow-hidden ${isGridView ? 'h-32' : 'min-w-[160px] md:min-w-[200px] h-32'}`}>
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Logo */}
                  <img
                    src={logo}
                    alt={`Company Logo ${(index % 14) + 1}`}
                    className="max-w-full max-h-full object-contain transition-all duration-500 group-hover:scale-110 filter brightness-90 group-hover:brightness-110 relative z-10"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Trust Badge */}
        <div className="text-center">
          <button
            onClick={() => setIsGridView(!isGridView)}
            className={`glass-morphism inline-flex items-center px-8 md:px-12 py-4 md:py-6 rounded-full shadow-modern hover:shadow-red-500/20 transition-all duration-500 group select-none ${isGridView ? 'bg-red-500/10 border-red-500/50 scale-105' : 'hover:scale-105'}`}
          >
            <div className="flex -space-x-2 mr-6">
              <div className="w-3 h-3 md:w-4 md:h-4 bg-red-400 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 md:w-4 md:h-4 bg-red-600 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="font-bold text-lg md:text-xl text-white font-barlow tracking-wide mr-2">
              {isGridView ? 'Tutup Tampilan Detail' : '15+ Perusahaan Terpercaya'}
            </span>
            <svg 
              className={`w-5 h-5 md:w-6 md:h-6 text-red-400 transition-transform duration-500 ${isGridView ? 'rotate-180' : 'group-hover:translate-y-1'}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}