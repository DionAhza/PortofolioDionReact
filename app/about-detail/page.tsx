"use client"; // penting untuk pakai useRouter di app router Next.js

import React from "react";
import { useRouter } from "next/navigation";

export default function AboutDetail() {
  const router = useRouter();

  return (
    <main className="mx-auto min-h-screen  bg-[#19222D] text-white p-8  shadow-lg ">
      <h1 className="text-4xl font-bold text-[#C6F10E] mb-10 text-center">
        Detail Tentang Saya
      </h1>
      

      <section id="experience" className="mb-12">
  <h2 className="text-3xl font-semibold mb-6 border-b border-[#C6F10E] pb-2">
    Pengalaman
  </h2>
  <ul className="relative border-l-2 border-[#C6F10E] pl-8 space-y-10 text-lg">
    <li className="relative">
      <span className="absolute -left-5 top-3 h-4 w-4 rounded-full bg-[#C6F10E] border-2 border-[#19222D]" />
      <h3 className="font-semibold mb-2">
        Web Developer di XYZ Company (2021-2023)
      </h3>
      <p className="ml-1 text-[#C6F10E]/90">
        Saya mengerjakan project blalala dengan bahasa bla bala bla
      </p>
    </li>
    <li className="relative">
      <span className="absolute -left-5 top-3 h-4 w-4 rounded-full bg-[#C6F10E] border-2 border-[#19222D]" />
      <h3 className="font-semibold mb-2">
        Freelance Frontend Developer (2020-2021)
      </h3>
      <p className="ml-1 text-[#C6F10E]/90">
        Mengerjakan berbagai project website dengan React dan Tailwind CSS.
      </p>
    </li>
    <li className="relative">
      <span className="absolute -left-5 top-3 h-4 w-4 rounded-full bg-[#C6F10E] border-2 border-[#19222D]" />
      <h3 className="font-semibold mb-2">Internship di Startup ABC (2019)</h3>
      <p className="ml-1 text-[#C6F10E]/90">
        Membantu tim development dalam membuat fitur frontend.
      </p>
    </li>
  </ul>
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
      <section id="education" className="mb-12">
        <h2 className="text-3xl font-semibold mb-6 border-b border-[#C6F10E] pb-2">
          Riwayat Pendidikan
        </h2>
        <ul className="list-disc list-inside space-y-3 text-lg">
          <p className="font-bold">SMK Wikrama Bogor (2019-2022)</p>
          <p className="ml-2">Pengembangan Perangkat Lunak dan Gim</p>
          <li>Nilai Rata-rata : 85/100</li>
          <li>Mata Pelajaran Relevan : mempelajari
pemrograman, desain, dan algoritma untuk
membuat berbagai jenis perangkat lunak
seperti aplikasi, website, dan game.</li>
          
        </ul>
      </section>

      {/* Tombol Kembali */}
      <div className="text-center">
        <button
          onClick={() => router.back()}
          className="mt-6 px-8 py-3 bg-[#C6F10E] text-[#19222D] font-semibold rounded-lg shadow-md hover:bg-[#a5be0a] transition-colors"
          aria-label="Kembali"
        >
          Kembali
        </button>
      </div>
    </main>
  );
}
