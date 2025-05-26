'use client'

import { motion } from 'framer-motion'
import { useRouter } from "next/navigation";

interface Project {
  id: number
  name: string
  description: string
  language: string
  url: string
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Website Portfolio',
    description: 'Website portfolio pribadi menggunakan Next.js, Tailwind, dan Framer Motion.',
    language: 'TypeScript',
    url: 'https://github.com/DionAhza/portfolio'
  },
  {
    id: 2,
    name: 'Online Shop',
    description: 'Aplikasi toko online dengan fitur keranjang, admin panel, dan integrasi Midtrans.',
    language: 'Laravel',
    url: 'https://github.com/DionAhza/Online-Shop'
  },
  {
    id: 3,
    name: 'Movie App',
    description: 'Aplikasi pencarian film dengan TMDB API, dibuat menggunakan React.',
    language: 'JavaScript',
    url: 'https://github.com/DionAhza/Laravel-movies'
  },
  {
    id: 4,
    name: 'CMS Blogger',
    description: 'Sistem manajemen konten untuk blogger dengan fitur multi-user dan role-based access.',
    language: 'PHP',
    url: '#'
  },
  {
    id: 5,
    name: 'Trello Clone',
    description: 'Aplikasi manajemen tugas seperti Trello menggunakan Laravel dan React.',
    language: 'Fullstack',
    url: '#'
  }
]

export default function ProjectDetailPage() {
  const router = useRouter();

  return (
    <section className="min-h-screen bg-[#19222D] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <button onClick={() => router.back()} className="mb-6 inline-block px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition">
          ← Kembali
        </button>

        <h1 className="text-4xl font-bold text-center text-[#C6F10E] mb-12">
          Proyek Portofolio
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-[#1F2A38] rounded-xl p-6 shadow-md border border-[#2c3e50]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold text-[#C6F10E] mb-2">
                {project.name}
              </h2>
              <p className="text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  {project.language}
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#C6F10E] text-black rounded-md font-medium hover:bg-lime-400 transition"
                >
                  Lihat Proyek
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

