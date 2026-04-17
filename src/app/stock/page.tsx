'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { machines, Machine } from '@/data/machines';
import { generateWhatsAppLink, generateWhatsAppMessage } from '@/utils/whatsapp';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Stock() {
  const router = useRouter();
  const [filteredMachines, setFilteredMachines] = useState<Machine[]>(machines);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const brands = [...new Set(machines.map(m => m.brand).filter(b => b))];
  const years = [...new Set(machines.map(m => m.year).filter(y => y !== undefined))].sort((a, b) => b - a);
  const countries = [...new Set(machines.map(m => m.country).filter(c => c))];


  useEffect(() => {
    const filtered = machines.filter(machine => {
      const matchesSearch = search === '' ||
        machine.brand.toLowerCase().includes(search.toLowerCase()) ||
        machine.type.toLowerCase().includes(search.toLowerCase()) ||
        machine.capacity.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === '' || machine.type === typeFilter;
      const matchesBrand = brandFilter === '' || machine.brand === brandFilter;
      const matchesYear = yearFilter === '' || machine.year?.toString() === yearFilter;
      const matchesCountry = countryFilter === '' || machine.country === countryFilter;
      const matchesTab = activeTab === 'all' || machine.category === activeTab;

      return matchesSearch && matchesType && matchesBrand && matchesYear && matchesCountry && matchesTab;
    });
    setFilteredMachines(filtered);
  }, [search, typeFilter, brandFilter, yearFilter, countryFilter, activeTab]);

  return (
    <>
      <Header />

      <section className="pt-32 pb-8 bg-gradient-to-br from-red-600/10 via-white to-white text-gray-800 text-center animate-fade-in-up relative overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 animate-slide-in-scale tracking-tight">Stok Mesin & Robot Tersedia</h2>
          <p className="text-xl animate-fade-in-up animate-delay-200 mb-6 opacity-90 max-w-2xl mx-auto">
            Temukan mesin berkualitas tinggi untuk kebutuhan pabrik Anda. Semua stok siap dikirim dengan garansi.
          </p>
          <div className="animate-fade-in-up animate-delay-400 flex flex-col items-center">
            <p className="text-red-700 font-bold mb-3 uppercase tracking-widest text-sm bg-red-100/50 px-4 py-1 rounded-full">Belum menemukan yang dicari?</p>
            <a
              href={generateWhatsAppLink(generateWhatsAppMessage('stock_custom_request'), 'stock_hero_request', '6287888411183')}
              className="btn-modern px-10 py-5 text-lg font-extrabold uppercase shadow-2xl animate-pulse-modern rounded-2xl flex items-center gap-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Request Mesin / Robot / Part Khusus</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.656zm6.304-2.73c1.551.92 3.111 1.403 4.76 1.404 5.232 0 9.491-4.259 9.493-9.492.001-2.533-.986-4.915-2.778-6.708s-4.175-2.779-6.708-2.78c-5.233 0-9.491 4.259-9.493 9.492-.001 1.747.479 3.448 1.388 4.93l-.996 3.642 3.734-.988z"/></svg>
            </a>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-3 mb-8 p-4 bg-white rounded-xl shadow-lg border border-red-500/10">
            <input
              type="text"
              placeholder="Cari mesin... (e.g., AIDA 300T)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 min-w-[200px] p-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
            />
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="p-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500 outline-none cursor-pointer">
              <option value="">Semua Jenis</option>
              <option value="MILLING">Milling</option>
              <option value="CNC MILL">CNC Mill</option>
              <option value="ROBOT">Robot</option>
              <option value="MEKANIKAL PRESS">Press</option>
              <option value="TRANSFER PRESS">Transfer Press</option>
              <option value="FEEDER">Feeder</option>
              <option value="BUBUT">Lathe</option>
              <option value="SURFACE GRINDING">Surface Grinding</option>
            </select>
            <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)} className="p-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500 outline-none cursor-pointer">
              <option value="">Semua Brand</option>
              {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
            </select>
            <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} className="p-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500 outline-none cursor-pointer">
              <option value="">Semua Tahun</option>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
            <select value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)} className="p-3 border border-gray-200 rounded-lg text-gray-900 focus:ring-2 focus:ring-red-500 outline-none cursor-pointer">
              <option value="">Semua Negara</option>
              {countries.map(country => <option key={country} value={country}>{country}</option>)}
            </select>
            <button
              onClick={() => {
                setSearch('');
                setTypeFilter('');
                setBrandFilter('');
                setYearFilter('');
                setCountryFilter('');
                setActiveTab('all');
              }}
              className="px-6 py-3 bg-gray-100 text-gray-600 font-bold rounded-lg hover:bg-gray-200 transition-colors"
            >
              Clear
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['all', 'milling', 'cnc', 'robot', 'press', 'feeder', 'lathe', 'grinding'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${activeTab === tab ? 'bg-red-600 text-white shadow-lg shadow-red-500/30' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
              >
                {tab === 'all' ? 'Semua' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMachines.map((machine, index) => (
              <div
                key={machine.id}
                className={`bg-white p-6 rounded-lg shadow-md hover-lift cursor-pointer relative animate-fade-in-up flex flex-col h-full`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => router.push(`/stock/${machine.id}`)}
              >
                <div className="relative w-full h-48 md:h-40 mb-6 group shrink-0 rounded-lg overflow-hidden border border-gray-100">
                  <img
                    src={machine.image || `https://via.placeholder.com/300x200?text=${machine.brand || 'Machine'}`}
                    alt={`${machine.brand} ${machine.type}`}
                    className={`w-full h-48 md:h-40 object-contain rounded transition-opacity duration-300 ${machine.videos && Array.isArray(machine.videos) && machine.videos.length > 0 && machine.videos[0] && machine.videos[0].trim() !== '' ? 'group-hover:opacity-0' : ''}`}
                  />
                  {machine.videos && Array.isArray(machine.videos) && machine.videos.length > 0 && machine.videos[0] && machine.videos[0].trim() !== '' && (
                    <video
                      className="absolute inset-0 w-full h-48 md:h-40 object-contain rounded bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={async (e) => {
                        try {
                          await e.currentTarget.play();
                        } catch {
                          // Ignore play interruptions
                        }
                      }}
                      onMouseLeave={(e) => {
                        try {
                          e.currentTarget.pause();
                        } catch {
                          // Ignore pause errors
                        }
                      }}
                    >
                      <source src={machine.videos[0]} type="video/mp4" />
                    </video>
                  )}
                </div>
                <div className="flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-red-600 mb-3 group-hover:text-red-700 transition-colors">
                    {machine.brand || 'Unknown'} {machine.type} {machine.capacity ? `(${machine.capacity})` : ''}
                  </h3>
                  <div className="space-y-1 text-gray-900 text-sm">
                    <p><strong>Year:</strong> {machine.year || 'N/A'}</p>
                    <p><strong>Country:</strong> {machine.country || 'N/A'}</p>
                    <p><strong>Table Size:</strong> {machine.tableSize || 'N/A'}</p>
                    <p><strong>Specs:</strong> {Object.keys(machine.specs).length > 0 ? Object.entries(machine.specs).map(([k, v]) => `${k}: ${v}`).join(', ') : 'N/A'}</p>
                    <p><strong>Qty:</strong> {machine.qty} {machine.unit}</p>
                  </div>
                </div>
                <div className="mt-auto pt-4 flex gap-2">
                  <a
                    href={generateWhatsAppLink(generateWhatsAppMessage('stock_machine', machine), 'stock_request_quote')}
                    className="btn-modern flex-1 text-center font-bold uppercase shadow-lg animate-pulse-modern px-6 py-3 text-sm rounded-2xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request Quote
                  </a>
                  <button
                    onClick={() => router.push(`/stock/${machine.id}`)}
                    className="btn-modern flex-1 text-center font-bold uppercase shadow-lg animate-pulse-modern px-6 py-3 text-sm rounded-2xl"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}