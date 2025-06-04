'use client'

import { motion } from 'framer-motion'
import { useRouter } from "next/navigation";
import Navbar from '../components/Navbar/Navbar';

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
    // <section className="min-h-screen bg-[#19222D] text-white px-6 py-20">
    //   <div className="max-w-5xl mx-auto">
    //     <button onClick={() => router.back()} className="mb-6 inline-block px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition">
    //       ← Kembali
    //     </button>

    //     <h1 className="text-4xl font-bold text-center text-[#C6F10E] mb-12">
    //       Project Portfolio
    //     </h1>

    //     <div className="grid md:grid-cols-2 gap-8">
    //       {projects.map((project, index) => (
    //         <motion.div
    //           key={project.id}
    //           className="bg-[#1F2A38] rounded-xl p-6 shadow-md border border-[#2c3e50]"
    //           initial={{ opacity: 0, y: 40 }}
    //           whileInView={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.5, delay: index * 0.05 }}
    //           viewport={{ once: true }}
    //         >
    //           <h2 className="text-xl font-semibold text-[#C6F10E] mb-2">
    //             {project.name}
    //           </h2>
    //           <p className="text-gray-300 mb-4">
    //             {project.description}
    //           </p>
    //           <div className="flex justify-between items-center">
    //             <span className="text-sm text-gray-400">
    //               {project.language}
    //             </span>
    //             <a
    //               href={project.url}
    //               target="_blank"
    //               rel="noopener noreferrer"
    //               className="inline-block px-4 py-2 bg-[#C6F10E] text-black rounded-md font-medium hover:bg-lime-400 transition"
    //             >
    //               Lihat Proyek
    //             </a>
    //           </div>
    //         </motion.div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  
      <div className="flex items-center justify-center min-h-screen bg-black text-[#C6F10E]">
        <Navbar/>
        <div className="text-center animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl font-bold mb-4"> Project Page</h1>
          <p className="text-xl flex items-center justify-center gap-2">
           In Progress
            <span className="dots ml-1 inline-block">
              <span className="dot-animation">.</span>
              <span className="dot-animation delay-200">.</span>
              <span className="dot-animation delay-400">.</span>
            </span>
          </p>
        </div>
  
        <style jsx>{`
          .dot-animation {
            animation: bounce 1s infinite;
            display: inline-block;
          }
  
          .dot-animation.delay-200 {
            animation-delay: 0.2s;
          }
  
          .dot-animation.delay-400 {
            animation-delay: 0.4s;
          }
  
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
  
          .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out both;
          }
  
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
  )
}

