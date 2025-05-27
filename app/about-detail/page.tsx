"use client"; // penting untuk pakai useRouter di app router Next.js

import React from "react";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function AboutDetail() {
  const router = useRouter();

  return (
    <main className="mx-auto min-h-screen  bg-[#19222D] text-white p-8  shadow-lg ">
      <h1 className="text-4xl font-bold text-[#C6F10E] mb-10 text-center">
        Detail Tentang Saya
      </h1>
      
      
      <section id="experience" className="mb-16 px-4 sm:px-0">
  <motion.h2
    initial={{ opacity: 0, y: -30 }}
    className="text-3xl font-bold mb-10 border-b-4 border-[#C6F10E] inline-block pb-2 text-white"
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Pengalaman
  </motion.h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Timeline Pengalaman */}
    <motion.ul
      className="relative border-l-4 border-[#C6F10E] pl-6 space-y-6 text-base"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
    >
      <motion.li
        className="relative text-white pb-6"
        variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } }}
        transition={{ type: 'spring', stiffness: 50 }}
      >

        <h3 className="text-xl font-semibold mb-3">Internship di PT Solusi Aplikasi</h3>
        
        <ul className="list-disc ml-5 text-[#C6F10E]/90 space-y-2">
          <li>Mengembangkan situs web perusahaan dengan CMS, HTML, CSS, dan JavaScript</li>
          <li>Mendesain poster menggunakan Canva dengan pendekatan visual yang menarik</li>
          <li>Pengembang Wordpress, menyesuaikan tema dan plugin sesuai kebutuhan</li>
          <li>Membangun API situs web E-Commerce dengan Laravel dan React.js untuk sistem yang responsif</li>
        </ul>
      </motion.li>
    </motion.ul>

    {/* Gambar Sertifikat */}
    <motion.div
      className="flex flex-col items-center text-center"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a
        href="/assets/sertifikat/SURAT KETERANGAN PKL DION AHZA RABBANI.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
       <img
        src="/assets/sertifikat/SURAT KETERANGAN PKL DION AHZA RABBANI_page-0001.jpg"
        alt="Sertifikat PKL"
        className="w-64 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      />
      </a>
    </motion.div>
  </div>
</section>


      {/* Skill */}
      <section id="skills" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b border-[#C6F10E] pb-2">
          Skill
        </h2>
        <div className="flex flex-wrap gap-4 text-lg">
          {["React", "Next.js", "Tailwind CSS", "JavaScript","Laravel","WordPress"].map((skill) => (
            <span
              key={skill}
              className="bg-[#C6F10E] text-[#19222D] px-5 py-2 rounded-full font-semibold transition-transform hover:scale-105 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Riwayat Pendidikan */}
      <section id="education" className="mb-12 px-4 sm:px-0">
  <motion.h2
    className="text-3xl font-semibold mb-6 border-b-4 border-[#C6F10E] pb-2 text-white"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Riwayat Pendidikan
  </motion.h2>

  <motion.div
    className="bg-[#19222D] p-6 rounded-lg shadow-lg"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
  >
    <motion.p 
      className="text-xl font-bold text-[#C6F10E]"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      SMK Wikrama Bogor (2022-2025)
    </motion.p>

    <motion.p 
      className="ml-2 text-white"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
    >
      Pengembangan Perangkat Lunak dan Gim
    </motion.p>

    <motion.ul
      className="list-disc list-inside space-y-3 text-lg  mt-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.2 },
        },
      }}
    >
      <motion.li
        variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        Nilai Rata-rata: 85/100
      </motion.li>
      <motion.li
        variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
        transition={{ type: "spring", stiffness: 50 }}
      >
        Mata Pelajaran Relevan: Mempelajari pemrograman, desain, dan algoritma untuk 
        membuat berbagai jenis perangkat lunak seperti aplikasi, website, dan game.
      </motion.li>
    </motion.ul>
  </motion.div>
</section>

      {/* Tombol Kembali */}
      <div className="text-center">
        <Link href="/">
        <button
         
          className="mt-6 px-8 py-3 bg-[#C6F10E] text-[#19222D] font-semibold rounded-lg shadow-md hover:bg-[#a5be0a] transition-colors"
          aria-label="Kembali"
        >
          Kembali
        </button>
        </Link>
      </div>
    </main>
  );
}
