'use client';

import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Custom() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    machineType: '',
    capacity: '',
    size: '',
    goals: '',
    timeline: '',
    budget: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Custom Solution Request:\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nIndustry: ${formData.industry}\nMachine Type: ${formData.machineType}\nCapacity: ${formData.capacity}\nSize: ${formData.size}\nGoals: ${formData.goals}\nTimeline: ${formData.timeline}\nBudget: ${formData.budget}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/628170968855?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Head>
        <title>Custom Solutions - PT. Asai Metal</title>
        <meta name="description" content="Request custom automation solutions from PT. Asai Metal. Design, build, and integrate machines for your specific needs." />
      </Head>
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/logo-asai.jpg"
              alt="PT. ASAI METAL Logo"
              className="h-12 w-auto mr-2"
            />
            <span className="text-red-600 font-bold text-xl">PT. ASAI METAL</span>
          </Link>
          <nav className="flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-red-600">Home</Link>
            <Link href="/stock" className="text-gray-700 hover:text-red-600">Stock</Link>
            <Link href="/custom" className="text-gray-700 hover:text-red-600">Custom</Link>
            <Link href="#contact" className="text-gray-700 hover:text-red-600">Contact</Link>
          </nav>
          <a
            href="https://wa.me/628170968855?text=Saya%20tertarik%20dengan%20solusi%20kustom%20PT.%20Asai%20Metal"
            className="btn-modern inline-block text-center font-bold uppercase shadow-lg animate-pulse-modern px-8 py-4 text-lg rounded-2xl"
          >
            Hubungi Kami
          </a>
        </div>
      </header>

      <section className="pt-20 bg-gradient-to-r from-red-600 to-white text-gray-800 py-20 text-center animate-fade-in-up">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-6 animate-slide-in-scale">Solusi Kustom Otomasi</h2>
          <p className="text-xl animate-fade-in-up animate-delay-200">Tidak menemukan mesin yang Anda butuhkan? Kami bisa mendesain, membangun, dan mengintegrasikan solusi otomasi khusus untuk pabrik Anda.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <h3 className="text-3xl font-bold mb-6 text-red-600">Kemampuan Kami</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  Integrasi mesin & robot dari semua brand
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  Pengalaman integrasi 100+ robot dalam {'<'} 1 tahun di Chemco
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  Otomasi line manufaktur lengkap (input ke output)
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  Konversi mesin manual ke otomatis
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  Teknologi AMR (Autonomous Mobile Robots)
                </li>
                <li className="flex items-center">
                  <span className="text-red-600 mr-2">✓</span>
                  Kapabilitas ekspor-impor unggulan
                </li>
              </ul>
              <p className="mt-6 text-lg">
                Bahkan jika tidak ada di stok, kami bisa sumberkan dan integrasikan untuk Anda.
              </p>
            </div>
            <div className="animate-fade-in-right">
              <h3 className="text-3xl font-bold mb-6 text-red-600">Request Custom Solution</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Nama Lengkap"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded form-input-modern"
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Nama Perusahaan"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 border rounded form-input-modern"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded form-input-modern"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Nomor Telepon"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border rounded form-input-modern"
                  />
                </div>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="w-full p-3 border rounded form-input-modern"
                >
                  <option value="">Pilih Industri</option>
                  <option value="automotive">Otomotif</option>
                  <option value="plastic">Plastik</option>
                  <option value="metal">Logam</option>
                  <option value="electronics">Elektronik</option>
                  <option value="other">Lainnya</option>
                </select>
                <input
                  type="text"
                  name="machineType"
                  placeholder="Jenis Mesin/Sistem yang Dibutuhkan"
                  value={formData.machineType}
                  onChange={handleChange}
                  className="w-full p-3 border rounded form-input-modern"
                />
                <div className="grid grid-cols-3 gap-4">
                  <input
                    type="text"
                    name="capacity"
                    placeholder="Kapasitas"
                    value={formData.capacity}
                    onChange={handleChange}
                    className="w-full p-3 border rounded form-input-modern"
                  />
                  <input
                    type="text"
                    name="size"
                    placeholder="Ukuran/Dimensi"
                    value={formData.size}
                    onChange={handleChange}
                    className="w-full p-3 border rounded form-input-modern"
                  />
                  <input
                    type="text"
                    name="goals"
                    placeholder="Target Produksi"
                    value={formData.goals}
                    onChange={handleChange}
                    className="w-full p-3 border rounded form-input-modern"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="timeline"
                    placeholder="Timeline Proyek"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full p-3 border rounded form-input-modern"
                  />
                  <input
                    type="text"
                    name="budget"
                    placeholder="Estimasi Budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-3 border rounded form-input-modern"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Pesan Tambahan"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full p-3 border rounded form-input-modern"
                ></textarea>
                <button
                  type="submit"
                  className="w-full btn-modern text-lg font-bold uppercase shadow-lg animate-pulse-modern py-4 rounded-2xl"
                >
                  Kirim Request via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2025 PT. Asai Metal. Semua hak dilindungi.</p>
          <p className="mb-4">
            Kontak: <a href="https://wa.me/628170968855" className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">+628170968855</a> | <a href="https://wa.me/6287888411183" className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">+6287888411183</a>
          </p>
          <p>
            <span className="text-red-400 mr-4">Syarat & Ketentuan</span> |
            <span className="text-red-400 ml-4">Kebijakan Privasi</span>
          </p>
        </div>
      </footer>
    </>
  );
}