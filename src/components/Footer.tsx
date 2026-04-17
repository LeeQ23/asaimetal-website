'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 border-t border-red-500/20">
      <div className="container mx-auto px-6">
        {/* Single Column Layout - Mobile First */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4 font-barlow">
              PT. ASAI METAL
            </h3>
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-white">Head Office:</p>
              <p>Jl. Raya Curug KM. 1 RT/RW. 07/02</p>
              <p>Kadujaya - Curug Tangerang, Banten 15810, Indonesia</p>
            </div>
            <a
              href="https://maps.app.goo.gl/mWojTi78JF8nS5bK8"
              className="inline-block text-red-400 hover:text-red-300 text-sm transition-colors font-mulish"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lihat di Google Maps →
            </a>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4 font-['Barlow']">
              Contact
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                Email:
                <a
                  href="mailto:asaimetal@asaimetal.com"
                  className="text-red-400 hover:text-red-300 transition-colors ml-1 font-mulish"
                >
                  asaimetal@asaimetal.com
                </a>
              </p>
              <p>
                Tel:
                <a
                  href="tel:+622159893652"
                  className="text-red-400 hover:text-red-300 transition-colors ml-1 font-['Mulish']"
                >
                  +6221 59893652
                </a>
                {' | '}
                <a
                  href="tel:+62215988125"
                  className="text-red-400 hover:text-red-300 transition-colors font-mulish"
                >
                  +6221 5988125
                </a>
              </p>
              <div className="flex flex-col space-y-1 pt-1">
                <span>WhatsApp:</span>
                <a
                  href="https://wa.me/628170968855"
                  className="text-red-400 hover:text-red-300 transition-colors font-['Mulish']"
                  target="_blank" rel="noopener noreferrer"
                >
                  +62 817-0968-855 (Armawati)
                </a>
                <a
                  href="https://wa.me/6287888411183"
                  className="text-red-400 hover:text-red-300 transition-colors font-['Mulish']"
                  target="_blank" rel="noopener noreferrer"
                >
                  +62 878-8841-1183 (Fajar)
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Follow Us */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-lg mb-4 font-['Barlow']">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              {/* YouTube - Active */}
              <a
                href="https://www.youtube.com/@WebsiteAsai"
                className="glass-morphism flex items-center justify-center w-12 h-12 rounded-xl hover:bg-red-500/20 transition-all duration-300 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
              >
                <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Facebook - Placeholder (Inactive) */}
              <div className="flex items-center justify-center w-12 h-12 bg-gray-800/50 rounded-xl opacity-50 cursor-not-allowed">
                <svg className="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ptasaimetal"
                className="glass-morphism flex items-center justify-center w-12 h-12 rounded-xl hover:bg-red-500/20 transition-all duration-300 hover:-translate-y-1"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@pt.asai.metal"
                className="glass-morphism flex items-center justify-center w-12 h-12 rounded-xl hover:bg-red-500/20 transition-all duration-300 hover:-translate-y-1"
                target="_blank" rel="noopener noreferrer"
                title="TikTok"
              >
                <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright and Legal */}
        <div className="border-t border-red-500/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400 font-['Mulish']">
              © 2025 PT. Asai Metal. Semua hak dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}