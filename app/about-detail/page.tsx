'use client'

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from '../components/Navbar/Navbar';

export default function AboutDetail() {
  const favoriteSongs = [
    // Radiohead - Creep
    "https://open.spotify.com/embed/artist/4Z8W4fKeB5YxbusRsdQVPb",
  
    // Daniel Caesar - Best Part (feat. H.E.R.)
    "https://open.spotify.com/embed/artist/20wkVLutqVOYrc0kxFs7rA",
  
    // Wave to Earth - seasons
    "https://open.spotify.com/embed/artist/5069JTmv5ZDyPeZaCCXiCg",
  
    // Frank Ocean - Pink + White
    "https://open.spotify.com/embed/artist/2h93pZq0e7k5yf4dywlkpM",
  
    // Kendrick Lamar - HUMBLE.
    "https://open.spotify.com/embed/artist/2YZyLoL8N0Wb9xBt1NhZWg",
  
    // Laufey – From The Start
    "https://open.spotify.com/embed/artist/7gW0r5CkdEUMm42w9XpyZO",
  ];
  

return (
<main className="bg-[#19222D] text-white min-h-screen">
<Navbar /> 
<section className="pt-20 pb-10 px-6 md:px-16">
{/* Header: Foto dan Nama */}
<motion.div
className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto"
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
>
<div className="text-center md:text-left space-y-4">
<h1 className="text-4xl md:text-5xl font-bold text-[#C6F10E]">
Dion Ahza Rabbani
</h1>
<p className="text-lg max-w-md">
Pacar Shin EunSoo🤭
</p>
</div>
<motion.div
whileHover={{ scale: 1.05 }}
transition={{ type: "spring", stiffness: 300 }}
className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#C6F10E] shadow-xl"
>
<Image src="/assets/AboutDion.jpeg" alt="Foto Dion" width={300} height={300} className="w-full h-full object-cover" />
</motion.div>
</motion.div>
    {/* Deskripsi */}
    <motion.div
      className="max-w-4xl mx-auto mt-12"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold text-[#C6F10E] mb-4">
        Tentang Saya
      </h2>
      <p className="text-base md:text-lg leading-relaxed">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aspernatur similique illum ullam placeat. Quaerat vel reprehenderit nostrum laboriosam ut, repellendus ea eos illum quos iusto sint placeat delectus soluta?
      </p>
    </motion.div>

    {/* Lagu Spotify */}
    <motion.div
      className="max-w-4xl mx-auto mt-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold mb-6">
        My Music Favorite Gweh 🎧
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {favoriteSongs.map((src, index) => (
          <motion.iframe
            key={index}
            src={src}
            width="100%"
            height="80"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          ></motion.iframe>
        ))}
      </div>
    </motion.div>
  </section>
</main>
);
}