'use client';
import Image from "next/image";
import React from "react";    
import { useState, useRef, useEffect } from 'react';
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import BlurText from "./components/BlurText/BlurText";
import SplitText from "./components/SplitText/SplitText";
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import AnimatedSection from "./components/AnimatedContent/AnimatedSection";
import { FaUser, FaProjectDiagram, FaCertificate, FaEnvelope , FaHome } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { Facebook, Instagram, Linkedin, Github } from 'lucide-react';
import Link from 'next/link';
import Navbar from "./components/Navbar/Navbar";
import i18n from "@/i18n";
import { useRouter } from "next/navigation";


export default function Home() {
   
  
   const [active, setActive] = useState(0);

  //  Contact
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setResult('') // Kosongkan result dulu

    const form = event.currentTarget
    const formData = new FormData(form)

    formData.append('access_key', 'b66c57db-fe25-4ec7-b4a7-9394fe7634ab')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setResult('✅ Form berhasil dikirim.')
        form.reset()
      } else {
        setResult('❌ Gagal mengirim: ' + data.message)
        console.error('Web3Forms Error:', data)
      }
    } catch (error) {
      console.error('Submit error:', error)
      setResult('❌ Terjadi kesalahan saat mengirim.')
    }

    setLoading(false)
  }
   
//logo skill
const techLogos = [
  { src: "https://cdn.simpleicons.org/react", alt: "React" },
  { src: "https://cdn.simpleicons.org/javascript", alt: "JavaScript" },
  { src: "https://cdn.simpleicons.org/laravel", alt: "Laravel" },
  { src: "https://cdn.simpleicons.org/tailwindcss", alt: "Tailwind CSS" },
  { src: "https://cdn.simpleicons.org/html5", alt: "HTML5" },
  { src: "https://cdn.simpleicons.org/css", alt: "CSS3" },
  { src: "https://cdn.simpleicons.org/php", alt: "PHP" },
  { src: "https://cdn.simpleicons.org/github", alt: "GitHub" },
  { src: "https://cdn.simpleicons.org/.net", alt: ".NET" },
  { src: "https://cdn.simpleicons.org/next.js", alt: "NEXT.JS" },
]

   //sertifikat
   const certificates = [
    {
    title: 'Sertifikat BackEnd',
    image: './assets/sertifikat/MySkill/backend-development.jpg',
    // description: 'Pelatihan BackEnd tingkat lanjut',
    pdf: 'assets/sertifikat/MySkill/BACKEND DEVELOPMENT INTRODUCTION 2.pdf',
    },
    {
    title: 'Sertifikat CyberLabs',
    image: 'assets/sertifikat/Dion Ahza Rabbani-TTD.png',
    // description: 'Pelatihan JavaScript  Framework',
    pdf: '/assets/sertifikat/MySkill/react.pdf',
    },
    {
    title: 'Sertifikat UI/UX',
    image: '/assets/sertifikat/UI.jpg',
    // description: 'Workshop desain antarmuka dan pengalaman pengguna.',
    pdf: '/assets/sertifikat/MySkill/uiux.pdf',
    },
    {
    title: 'Sertifikat Agen Sakti',
    image: '/assets/sertifikat/AgenSakti.png',
    // description: 'Peserta seminar literasi Digital dalam Rangka hari Kebangkitan Nasional 2024 bertema Jadi Gen SAKTI(Siap Adaptif Kerja dengan Teknologi Informasi) yang diselenggarakan oleh Relawan TIK Kota Bogor',
    pdf: '/assets/sertifikat/MySkill/uiux.pdf',
    },
    {
      title: 'Sertifikat Dasar Java',
      image: 'assets/sertifikat/dasar_java.png',
      // description: 'Peserta seminar literasi Digital dalam Rangka hari Kebangkitan Nasional 2024 bertema Jadi Gen SAKTI(Siap Adaptif Kerja dengan Teknologi Informasi) yang diselenggarakan oleh Relawan TIK Kota Bogor',
      pdf: 'assets/sertifikat/dasar_java.png',
      },
    {
      title: 'Sertifikat Dasar Pemograman',
      image: 'assets/sertifikat/Dasar_pemograman.png',
      // description: 'Peserta seminar literasi Digital dalam Rangka hari Kebangkitan Nasional 2024 bertema Jadi Gen SAKTI(Siap Adaptif Kerja dengan Teknologi Informasi) yang diselenggarakan oleh Relawan TIK Kota Bogor',
      pdf: 'assets/sertifikat/Dasar_pemograman.pdf',
      },
    ]
    
    
    
    
  

  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const next = () => {
    setActive((prev) => (prev + 1) % certificates.length)
  }

  const prev = () => {
    setActive((prev) => (prev - 1 + certificates.length) % certificates.length)
  }

  useEffect(() => {
    intervalRef.current = setInterval(next, 10000)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])
   //end sertifikat
  //contact
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  
  //endcontact


  //about animation
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  
  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      router.push("/about-detail"); // atau window.location.href = "/about-detail"
    }, 300); // delay 300ms biar animasinya terlihat
  };
  
  //endabout animation
  return (

    
    <div className=" mx-auto h-screen w-screen bg-[#19222D] ">
        <Navbar />
     <section id="home" className="relative w-full bg-[#19222D] ">
  <div className="pl-4 pr-4 md:pl-20">
    <motion.div
      className="fixed left-2 top-1/2 z-50"
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ translateY: "-50%" }}
    >
      <div className="hidden bg-[#1F2A38] rounded-xl p-3 sm:flex flex-col items-center space-y-6 shadow-lg border border-[#2c3e50]">
        {/* Icons */}
        {[["#home", <FaHome size={24} />], ["#about", <FaUser size={24} />], ["#projects", <FaProjectDiagram size={24} />], ["#sertifikat", <FaCertificate size={24} />], ["#contact", <FaEnvelope size={24} />]].map(([href, icon], idx) => (
          <a key={idx} href={href as string} className="text-white hover:text-[#C6F10E] transition-transform transform hover:scale-125">
            {icon}
          </a>
        ))}
      </div>
    </motion.div>

    <div className="absolute inset-0 w-full h-full">{/* Background threads */}</div>

    <div className="container mx-auto h-auto min-h-screen flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center h-full">
        {/* Left Content */}
        <div className="md:col-span-6">
          <div className="flex flex-col justify-center h-full gap-6 text-center md:text-left items-center md:items-start">
            <AnimatedContent
              distance={150}
              direction="horizontal"
              reverse={false}
              config={{ tension: 80, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:mt-2 mt-20">
                <h1 className="text-xl sm:text-2xl text-white font-bold">{i18n.t('job')}</h1>
                <RotatingText
                  texts={['FULLSTACK DEVELOPER', 'WEB DEVELOPER', 'WEB DESIGN', 'WORDPRESS']}
                  mainClassName="px-4 bg-[#C6F10E] text-black py-1 rounded-lg text-xl sm:text-2xl font-bold inline-flex transition-all mb-3"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </AnimatedContent>
            {/* image jika di mobile */}
  <div className="mx-0 flex sm:hidden justify-center bg-[#19222D] mt-1 w-full">
  <img
    src="/assets/GambarDion.png"
    alt="Profil Dion"
    className="w-64 h-auto rounded-lg shadow-md"
  />
</div>

{/* End Gambar Mobile */}
          
            <div>
              <SplitText
                text="DION AHZA RABBANI"
                className="text-3xl sm:text-4xl text-white font-bold"
                delay={25}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />
              <SplitText
                text="FULLSTACK"
                className="text-3xl sm:text-4xl text-[#C6F10E] font-bold"
                delay={75}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                threshold={0.2}
                rootMargin="-50px"
              />
            </div>

            <BlurText
              text={i18n.t("home")}
              delay={50}
              animateBy="words"
              direction="top"
              className="text-base sm:text-lg text-white"
            />
            <motion.div
            className="z-10 pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}>
          <a href="./assets/CV Dion Ahza Rabbani  (2).pdf" target="_blank" className="px-6 py-3 bg-[#C6F10E] text-[#19222D] font-semibold rounded-lg hover:bg-yellow-400 transition">
           Download CV
        </a>
        </motion.div>
            {/* Social Icons */}
       <motion.div
  className="flex sm:flex gap-6 mt-4 z-10 pointer-events-auto"
  
>
  <a
    href="https://instagram.com/dionahza57"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-[#E4405F] hover:scale-110 transition duration-300"
  >
    <FaInstagram size={28} />
  </a>
  <a
    href="https://linkedin.com/in/dionahzarabbani"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-[#0A66C2] hover:scale-110 transition duration-300"
  >
    <FaLinkedin size={28} />
  </a>
  <a
    href="https://github.com/DionAhza"
    target="_blank"
    rel="noopener noreferrer"
    className="text-white hover:text-[rgb(175,175,175)] hover:scale-110 transition duration-300"
  >
    <FaGithub size={28} />
  </a>
</motion.div>

 

          </div> 
        
        </div>

 

{/* Versi Desktop: Tampilkan <Lanyard /> hanya di sm ke atas */}
<div className="hidden sm:flex md:col-span-6 justify-center bg-[#19222D] mt-8 md:mt-0">
  <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
</div>
      </div>
    </div>
  </div>
</section>

      <section id="about" className="  min-h-screen bg-[#0F172A] mx-auto flex items-center justify-center px-4 py-20 sm:pl-20 ">
      <AnimatedSection>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 overflow-hidden">

    {/* Text Area */}
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true }}
      className="text-white space-y-6"
    >
      <h2 className="text-4xl font-bold text-[#C6F10E]">{i18n.t("about-head")}</h2>

      <BlurText
        text={i18n.t("about-body")}
        delay={50}
        animateBy="words"
        direction="top"
        className="text-lg md:text-xl text-white"
      />

      <motion.button
        onClick={handleClick}
        className="mt-6 px-6 py-3 bg-[#C6F10E] text-[#19222D] font-semibold rounded-lg hover:bg-yellow-400 transition"
        animate={isClicked ? { scale: 1.1, opacity: 0.8 } : { scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {i18n.t("about-button")}
      </motion.button>


    </motion.div>

    {/* Image Area */}
    <motion.div
      initial={{ opacity: 0, x: 100, scale: 0.8 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, type: "spring" }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="rounded-xl overflow-hidden shadow-xl"
      >
        <Image
          src="/assets/about/About-dion-1.jpeg"
          width={350}
          height={350}
          className="rounded-xl object-cover"
          alt="About Dion"
        />
      </motion.div>
    </motion.div>

  </div>
  <div className="overflow-hidden bg-[#0F172A] py-6">
      <motion.div
        className="flex space-x-8 items-center"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{    
          ease: "linear",
          duration: 10,
          repeat: Infinity,
        }}
      >
        {techLogos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className="w-16 h-16" />
        ))}
      </motion.div>
    </div>
</AnimatedSection>


    </section>
    <section className="bg-[#19222D] text-white p-8 shadow-lg sm:pl-20">
      

      {/* Pengalaman */}
      <section id="experience" className="mb-16 px-4 sm:px-0">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-10 border-b-4 border-[#C6F10E] inline-block pb-2"
        >
          {i18n.t("detail-pengalaman")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Timeline Pengalaman */}
          <motion.ul
            className="relative border-l-4 border-[#C6F10E] pl-6 space-y-6 text-base"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.li
              className="relative pb-6"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <h3 className="text-xl font-semibold mb-3">
                {i18n.t("detail-magang")}
              </h3>
              <ul className="list-disc ml-5 text-[#C6F10E]/90 space-y-2">
                <li>
                  {i18n.t("detail-magang-point1")}
                </li>
                <li>
                {i18n.t("detail-magang-point2")}
                </li>
                <li>
                {i18n.t("detail-magang-point3")}
                </li>
                <li>
                {i18n.t("detail-magang-point4")}
                </li>
              </ul>
            </motion.li>
          </motion.ul>

          {/* Sertifikat */}
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
          {i18n.t("detail-skills")}
        </h2>
        <div className="flex flex-wrap gap-4 text-lg">
          {[
            "React",
            "Next.js",
            "Tailwind CSS",
            "JavaScript",
            "Laravel",
            "WordPress",
            "Python",
            "Docker"
          ].map((skill) => (
            <span
              key={skill}
              className="bg-[#C6F10E] text-[#19222D] px-5 py-2 rounded-full font-semibold transition-transform hover:scale-105 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Pendidikan */}
      <section id="education" className="mb-12 px-4 sm:px-0">
        <motion.h2
          className="text-3xl font-semibold mb-6 border-b-4 border-[#C6F10E] pb-2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {i18n.t("detail-education")}
        </motion.h2>

        <motion.div
          className="p-6 rounded-lg shadow-lg"
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
            className="ml-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
           {i18n.t("detail-jurusan")}
          </motion.p>

          <motion.ul
            className="list-disc list-inside space-y-3 text-lg mt-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ type: "spring", stiffness: 50 }}
            >
             {i18n.t("detail-nilai")}
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              {i18n.t("detail-mapel")}
            </motion.li>
          </motion.ul>
        </motion.div>
      </section>

      {/* Tombol Kembali */}
      {/* <div className="text-center">
        <Link href="/">
          <button className="mt-6 px-8 py-3 bg-[#C6F10E] text-[#19222D] font-semibold rounded-lg shadow-md hover:bg-[#a5be0a] transition-colors">
            Kembali
          </button>
        </Link>
      </div> */}
    </section>

    <section id="projects" className="min-h-screen bg-[#19222D] text-white py-20 px-8">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
      <h2 className="text-4xl font-bold text-[#C6F10E] text-center">
        {i18n.t("project-head")}
      </h2>
      <Link href="/project-detail">
        <button className="px-6 py-3 bg-[#C6F10E] text-[#19222D] font-semibold rounded-lg hover:bg-yellow-400 transition">
          {i18n.t("button")}
        </button>
      </Link>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Company Web",
          description: i18n.t("uti-desc"),
          imgSrc: "./assets/projects/UTII.jpg",
          tags: ["JavaScript", "HTML", "PHP"],
          link: "https://uti.co.id",
        },
        {
          title: "Kasir App",
          description:
            i18n.t("kasir-desc"),
          imgSrc: "./assets/projects/Kasir.jpg",
          tags: ["Laravel", "Blade"],
          link: "https://github.com/DionAhza/UKK_Kasir_Dion",
        },
        {
          title: "Movie Rating App",
          description:
           i18n.t('movie-desc'),
          imgSrc: "./assets/projects/Movies.jpeg",
          tags: ["Laravel", "React", "API"],
          link: "https://github.com/DionAhza/Laravel-movies",
        },
      ].map((project, index) => (
        <AnimatedContent
          key={index}
          distance={150}
          direction="horizontal"
          reverse={true}
          config={{ tension: 80, friction: 20 }}
          initialOpacity={0.2}
          animateOpacity
          scale={1.1}
          threshold={0.2}
        >
          <div className="bg-gradient-to-br from-[#1F2A38] to-[#101720] rounded-xl overflow-hidden shadow-xl shadow-black/20 hover:scale-105 transition-all duration-300 ease-in-out w-full max-w-sm mx-auto sm:max-w-md h-auto min-h-[400px] flex flex-col">
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-wide mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-[#C6F10E] text-[#19222D] px-3 py-1 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C6F10E] font-medium hover:underline"
              >
                {i18n.t("button")} →
              </a>
            </div>
          </div>
        </AnimatedContent>
      ))}
    </div>
  </div>
</section>


<section id="sertifikat" className="bg-[#19222D] text-white py-16 px-4">
  <div className="max-w-xl mx-auto text-center">
    <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
      <h2 className="text-3xl font-bold text-[#C6F10E] text-center md:text-left">
        {i18n.t("cert-head")}
      </h2>
      <Link href="/certificates-detail">
        <button className="px-6 py-2 bg-[#C6F10E] text-[#19222D] font-semibold rounded-md hover:bg-lime-400 transition">
          {i18n.t("button")}
        </button>
      </Link>
    </div>

    <div className="relative w-full overflow-hidden rounded-xl">
      <motion.div
        className="flex"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x: 0 }}
      >
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <div className="bg-[#1F2A38] rounded-xl shadow-md p-6">
            <img
              src={certificates[active].image}
              alt={certificates[active].title}
              className="w-full h-64 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{certificates[active].title}</h3>
            {/* <p className="text-sm text-gray-300 mb-4">
              {certificates[active].description}
            </p> */}
            {/* <a
              href={certificates[active].pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-[#C6F10E] text-black font-semibold rounded-md hover:bg-lime-400 transition"
            >
              Lihat PDF
            </a> */}
          </div>
        </motion.div>
      </motion.div>
    </div>

    {/* Dots */}
    <div className="flex justify-center mt-4 space-x-2">
      {certificates.map((_, index) => (
        <button
          key={index}
          onClick={() => setActive(index)}
          className={`w-3 h-3 rounded-full ${
            index === active ? 'bg-[#C6F10E]' : 'bg-gray-400'
          }`}
        />
      ))}
    </div>

    {/* Buttons */}
    <div className="flex justify-between mt-6">
      <button
        onClick={prev}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md"
      >
        {i18n.t("cert-button-l")}
      </button>
      <button
        onClick={next}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md"
      >
        {i18n.t("cert-button-r")}
      </button>
    </div>
  </div>
</section>

{/* Section Contact */}
<section id="contact" className="bg-[#101820] text-white py-20 px-6">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-[#C6F10E] mb-6">{i18n.t("contact-us")}</h2>
    <p className="text-gray-300 mb-8">{i18n.t("contact-body")}</p>

    <div>
    <form onSubmit={onSubmit} className="space-y-4 text-white">
      <input
        type="text"
        name="name"
        required
        placeholder={i18n.t("contact-yourname")}
        className="w-full p-3 rounded-lg bg-[#1A2A37] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C6F10E]"
      />
      <input
        type="email"
        name="email"
        required
        placeholder={i18n.t("contact-youremail")}
        className="w-full p-3 rounded-lg bg-[#1A2A37] border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#C6F10E]"
      />
      <textarea
        name="message"
        required
        placeholder={i18n.t("contact-message")}
        className="w-full p-3 rounded-lg bg-[#1A2A37] border border-gray-600 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#C6F10E]"
      />
      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-[#C6F10E] text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 ${
          loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-lime-400'
        }`}
      >
        {loading ? 'Mengirim...' : i18n.t("contact-send") }
      </button>

      {result && (
        <p
          className={`text-sm transition-opacity duration-300 ${
            result.includes('✅') ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {result}
        </p>
      )}
    </form>
      

    </div>

  </div>
</section>
{/* Footer */}
<footer className="bg-[#0F1A25] text-gray-400 py-10 px-6 text-sm"> <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center sm:text-left"> {/* Kontak */} <div> <h3 className="text-white font-semibold mb-2">{i18n.t("footer-contact")}</h3> <p>{i18n.t("footer-address")}: Cigombong, Bogor</p> <p>{i18n.t("footer-number")}: 089639154877</p> <p> Email:{' '} <a href="mailto:dionahza15@gmail.com" className="underline hover:text-[#C6F10E]" > dionahza15@gmail.com </a> </p> </div>

{/* Quick Links */}
<div>
  <h3 className="text-white font-semibold mb-2">Quick Links</h3>
  <ul className="space-y-1">
    <li>
      <a href="#home" className="hover:text-[#C6F10E]">
        Home
      </a>
    </li>
    <li>
      <a href="#about" className="hover:text-[#C6F10E]">
        About
      </a>
    </li>
    <li>
      <a href="#projects" className="hover:text-[#C6F10E]">
        Projects
      </a>
    </li>
    <li>
      <a href="#contact" className="hover:text-[#C6F10E]">
        Contact
      </a>
    </li>
  </ul>
</div>

{/* Sosial Media */}
<div>
  <h3 className="text-white font-semibold mb-2">Follow Me</h3>
  <div className="flex justify-center sm:justify-start gap-4 mt-2">
    {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C6F10E]">
      <Facebook size={20} />
    </a> */}
    <a href="https://github.com/DionAhza" target="_blank" rel="noopener noreferrer" className="hover:text-[#C6F10E]">
      <Github size={20} />
    </a>
    <a href="https://instagram.com/dionahza57" target="_blank" rel="noopener noreferrer" className="hover:text-[#C6F10E]">
      <Instagram size={20} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#C6F10E]">
      <Linkedin size={20} />
    </a>
  </div>
</div>
</div>
{/* Copyright */}

<p className="text-center text-gray-500 mt-8"> &copy; {new Date().getFullYear()} Dion Ahza Rabbani. All rights reserved. </p>
 </footer>



    </div>

  );
 
}
