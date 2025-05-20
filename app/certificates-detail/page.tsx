'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const certificates = [
  {
    title: 'Sertifikat Dicoding - Belajar Dasar Pemrograman Web',
    description: 'Mempelajari HTML, CSS, dan JavaScript dasar dari Dicoding.',
    image: '/images/certificates/web-dasar.png',
    pdf: 'https://drive.google.com/your-pdf-link-1',
  },
  {
    title: 'Sertifikat RevoU - Mini Course Software Engineer',
    description: 'Pengantar karir sebagai Software Engineer bersama RevoU.',
    image: '/images/certificates/revou.png',
    pdf: 'https://drive.google.com/your-pdf-link-2',
  },
  {
    title: 'Sertifikat Google - Cybersecurity Basics',
    description: 'Dasar-dasar keamanan siber dari kursus Google.',
    image: '/images/certificates/cybersecurity.png',
    pdf: 'https://drive.google.com/your-pdf-link-3',
  },
];

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
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#C6F10E] text-black font-semibold rounded-md hover:bg-lime-400 transition"
              >
                Lihat PDF
              </a>
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
