'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar/Navbar';

const certificates = [
  {
    title: 'Sertifikat BackEnd',
    image: './assets/sertifikat/MySkill/backend-development.jpg',
    pdf: 'assets/sertifikat/MySkill/BACKEND DEVELOPMENT INTRODUCTION 2.pdf',
    category: 'Programming',
  },
  {
    title: 'Sertifikat CyberLabs',
    image: 'assets/sertifikat/Dion Ahza Rabbani-TTD.png',
    pdf: '/assets/sertifikat/MySkill/react.pdf',
    category: 'Programming',
  },
  {
    title: 'Sertifikat UI/UX',
    image: '/assets/sertifikat/UI.jpg',
    pdf: '/assets/sertifikat/MySkill/uiux.pdf',
    category: 'Design',
  },
  {
    title: 'Sertifikat Agen Sakti',
    image: '/assets/sertifikat/AgenSakti.png',
    pdf: '/assets/sertifikat/MySkill/uiux.pdf',
    category: 'Seminar',
  },
  {
    title: 'Sertifikat Dasar Java',
    image: 'assets/sertifikat/dasar_java.png',
    pdf: 'assets/sertifikat/dasar_java.png',
    category: 'Programming',
  },
  {
    title: 'Sertifikat Dasar Pemograman',
    image: 'assets/sertifikat/Dasar_pemograman.png',
    pdf: 'assets/sertifikat/Dasar_pemograman.pdf',
    category: 'Programming',
  },
  {
    title: 'Sertifikat Perkenalan Bahasa Korea',
    image: 'assets/sertifikat/MySkill/Korea-1.jpg',
    pdf: 'assets/sertifikat/Dasar_pemograman.pdf',
    category: 'Language',
  },
  {
    title: 'Sertifikat Salam & Perkenalan Bahasa Korea',
    image: 'assets/sertifikat/MySkill/Korea-2.jpg',
    pdf: 'assets/sertifikat/Dasar_pemograman.pdf',
    category: 'Language',
  },
  {
    title: 'Sertifikat Kata Benda dan Sifat Korea',
    image: 'assets/sertifikat/MySkill/Korea-3.jpg',
    pdf: 'assets/sertifikat/Dasar_pemograman.pdf',
    category: 'Language',
  },
];

const categories = ['All', 'Programming', 'Design', 'Seminar','Language'];

export default function CertificatePage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCertificates =
    activeCategory === 'All'
      ? certificates
      : certificates.filter(cert => cert.category === activeCategory);

  return (
    
    <section className="min-h-screen bg-[#19222D] text-white py-16 px-4 mt-4">
      <Navbar/>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#C6F10E] mb-10">
          My Certificate
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === cat
                  ? 'bg-[#C6F10E] text-black'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Sertifikat */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#1F2A38] rounded-xl shadow-md p-6"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-48 object-contain mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
              {/* <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-[#C6F10E] text-black font-semibold rounded-md hover:bg-lime-400 transition"
              >
                Lihat PDF
              </a> */}
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={() => router.back()}
            className="mt-3 px-6 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition"
          >
            ← Kembali
          </button>
        </div>
      </div>
    </section>
  );
}
