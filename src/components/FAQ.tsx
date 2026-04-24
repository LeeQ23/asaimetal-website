'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "Apa saja layanan utama PT. Asai Metal?",
    answer: "Kami menyediakan integrasi mesin dan robot industri (Fanuc, ABB, KUKA, dll), otomasi line produksi penuh, konversi mesin manual ke otomatis, serta teknologi AMR (Autonomous Mobile Robot)."
  },
  {
    question: "Berapa lama proses konversi mesin manual ke otomatis?",
    answer: "Proses transformasi biasanya memakan waktu antara 2 hingga 4 minggu, tergantung pada kompleksitas mesin dan sistem kontrol yang diinginkan."
  },
  {
    question: "Apakah PT. Asai Metal menyediakan suku cadang robot?",
    answer: "Ya, kami menjamin ketersediaan suku cadang (ready stock) untuk robot brand ternama seperti Fanuc, ABB, Yaskawa, dan KUKA beserta aksesoris industri lainnya."
  },
  {
    question: "Di mana lokasi kantor PT. Asai Metal?",
    answer: "Kantor pusat kami berlokasi di Jl. Raya Curug KM. 1, Kadujaya - Curug, Tangerang, Banten, Indonesia."
  },
  {
    question: "Apakah saya bisa berkonsultasi mengenai kebutuhan otomasi pabrik saya?",
    answer: "Tentu! Kami menawarkan konsultasi GRATIS untuk membantu Anda merancang blueprint otomasi yang paling efisien untuk pabrik Anda."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="section-spacious bg-black text-white py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-barlow">Pertanyaan Umum (FAQ)</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-800 rounded-xl overflow-hidden bg-gray-900/30">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-800/50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <span className={`text-red-500 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 py-4' : 'max-h-0'}`}
              >
                <p className="text-gray-400 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
