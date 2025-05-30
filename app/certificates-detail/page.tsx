'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const certificates = [
  {
  title: 'Sertifikat BackEnd',
  image: './assets/sertifikat/MySkill/backend-development.jpg',
  description: 'Pelatihan BackEnd tingkat lanjut',
  pdf: 'assets/sertifikat/MySkill/BACKEND DEVELOPMENT INTRODUCTION 2.pdf',
  },
  {
  title: 'Sertifikat CyberLabs',
  image: 'assets/sertifikat/Dion Ahza Rabbani-TTD.png',
  description: 'Pelatihan JavaScript  Framework',
  pdf: '/assets/sertifikat/MySkill/react.pdf',
  },
  {
  title: 'Sertifikat UI/UX',
  image: '/assets/sertifikat/UI.jpg',
  description: 'Workshop desain antarmuka dan pengalaman pengguna.',
  pdf: '/assets/sertifikat/MySkill/uiux.pdf',
  },
  {
  title: 'Sertifikat Agen Sakti',
  image: '/assets/sertifikat/AgenSakti.png',
  description: 'Peserta seminar literasi Digital dalam Rangka hari Kebangkitan Nasional 2024 bertema Jadi Gen SAKTI(Siap Adaptif Kerja dengan Teknologi Informasi) yang diselenggarakan oleh Relawan TIK Kota Bogor',
  pdf: '/assets/sertifikat/MySkill/uiux.pdf',
  },
  ]

export default function CertificatePage() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#19222D] text-white py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#C6F10E] mb-12">
          Sertifikat Saya
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
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
              <p className="text-sm text-gray-300 mb-4">{cert.description}</p>
              {/* <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#C6F10E] text-black font-semibold rounded-md hover:bg-lime-400 transition"
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
