'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black/90 backdrop-blur-md shadow-md fixed w-full top-0 z-50 border-b border-red-600/20">
      <div className="w-full px-6 lg:px-12 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 sm:space-x-4 group overflow-visible shrink-0 uppercase">
          <div className="relative flex items-center justify-center shrink-0 w-10 h-10 sm:w-12 md:w-16 bg-white rounded-md p-1 shadow-sm shadow-red-500/10 overflow-hidden">
            <div className="relative w-full h-full">
              <Image
                src="/logo-asai.jpg"
                alt="Logo"
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 48px, 64px"
                priority
              />
            </div>
          </div>
          <span className="text-xs sm:text-sm md:text-xl font-bold text-white font-barlow tracking-wider whitespace-nowrap">PT. <span className="text-red-400">ASAI</span> METAL</span>
        </Link>

        {/* Navigation */}
        <nav className="header-nav hidden lg:flex space-x-4 xl:space-x-8">
          <Link href="/#hero" className="text-gray-300 hover:text-red-400 transition-all duration-300 font-semibold relative group text-sm xl:text-base whitespace-nowrap">
            Home
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#proof" className="text-gray-300 hover:text-red-400 transition-all duration-300 font-semibold relative group text-sm xl:text-base whitespace-nowrap">
            Klien Kami
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#benefits" className="text-gray-300 hover:text-red-400 transition-all duration-300 font-semibold relative group text-sm xl:text-base whitespace-nowrap">
            Kenapa Kami
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#catalog" className="text-gray-300 hover:text-red-400 transition-all duration-300 font-semibold relative group text-sm xl:text-base whitespace-nowrap">
            Solusi Otomasi
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/stock" className="text-gray-300 hover:text-red-400 transition-all duration-300 font-semibold relative group text-sm xl:text-base whitespace-nowrap">
            Stok Mesin
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#authority" className="text-gray-300 hover:text-red-400 transition-all duration-300 font-semibold relative group text-sm xl:text-base whitespace-nowrap">
            Proyek Kami
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/#cta" className="text-gray-300 hover:text-red-400 transition-all duration-300 font-semibold relative group text-sm xl:text-base whitespace-nowrap">
            Konsultasi Gratis
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="header-mobile-menu lg:hidden text-white p-2 rounded-md hover:bg-red-500/20 transition-all duration-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-b border-red-600/20 absolute w-full left-0 top-full flex flex-col px-6 py-8 space-y-6 shadow-2xl z-[100] animate-fade-in-up">
          <Link href="/#hero" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-red-400 font-semibold text-lg border-b border-red-900/30 pb-2">Home</Link>
          <Link href="/#proof" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-red-400 font-semibold text-lg border-b border-red-900/30 pb-2">Klien Kami</Link>
          <Link href="/#benefits" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-red-400 font-semibold text-lg border-b border-red-900/30 pb-2">Kenapa Kami</Link>
          <Link href="/#catalog" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-red-400 font-semibold text-lg border-b border-red-900/30 pb-2">Solusi Otomasi</Link>
          <Link href="/stock" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-red-400 font-semibold text-lg border-b border-red-900/30 pb-2">Stok Mesin</Link>
          <Link href="/#authority" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-red-400 font-semibold text-lg border-b border-red-900/30 pb-2">Proyek Kami</Link>
          <Link href="/#cta" onClick={() => setIsMobileMenuOpen(false)} className="text-red-400 font-bold text-lg mt-4">Konsultasi Gratis</Link>
        </div>
      )}
    </header>
  );
}