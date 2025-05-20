'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from "next/navigation";

interface Repo {
  id: number
  name: string
  html_url: string
  description: string
  language: string
}

export default function ProjectDetailPage() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [filteredRepos, setFilteredRepos] = useState<Repo[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [languageFilter, setLanguageFilter] = useState('All')
  const [languages, setLanguages] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const reposPerPage = 6

  useEffect(() => {
    fetch('https://api.github.com/users/DionAhza/repos?per_page=100')
      .then((res) => res.json())
      .then((data) => {
        setRepos(data)
        setFilteredRepos(data)
        const langs = Array.from(new Set(data.map((repo: Repo) => repo.language).filter(Boolean)))
        setLanguages(langs)
      })
      .catch((error) => console.error('Error fetching repos:', error))
  }, [])

  useEffect(() => {
    let filtered = repos

    if (searchTerm) {
      filtered = filtered.filter(
        (repo) =>
          repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (repo.description && repo.description.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    if (languageFilter !== 'All') {
      filtered = filtered.filter((repo) => repo.language === languageFilter)
    }

    setFilteredRepos(filtered)
    setCurrentPage(1) // Reset to first page on filter change
  }, [searchTerm, languageFilter, repos])

  // Pagination logic
  const indexOfLastRepo = currentPage * reposPerPage
  const indexOfFirstRepo = indexOfLastRepo - reposPerPage
  const currentRepos = filteredRepos.slice(indexOfFirstRepo, indexOfLastRepo)
  const totalPages = Math.ceil(filteredRepos.length / reposPerPage)
  const router = useRouter();
  return (
    <section className="min-h-screen bg-[#19222D] text-white px-6 py-20"> <div className="max-w-5xl mx-auto">
       <button onClick={() => router.back()} className="mb-6 inline-block px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition" > ← Kembali </button>
  
    <h1 className="text-4xl font-bold text-center text-[#C6F10E] mb-12">
      Semua Proyek GitHub
    </h1>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row md:justify-between mb-8">
          <input
            type="text"
            placeholder="Cari repositori..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 md:mb-0 px-4 py-2 rounded-md text-black"
          />
          <select
            value={languageFilter}
            onChange={(e) => setLanguageFilter(e.target.value)}
            className="px-4 py-2 rounded-md text-black"
          >
            <option value="All">Semua Bahasa</option>
            {languages.map((lang) => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        </div>

        {/* Repositories */}
        <div className="grid md:grid-cols-2 gap-8">
          {currentRepos.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="bg-[#1F2A38] rounded-xl p-6 shadow-md border border-[#2c3e50]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold text-[#C6F10E] mb-2">
                {repo.name}
              </h2>
              <p className="text-gray-300 mb-4">
                {repo.description || 'Tidak ada deskripsi.'}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">
                  {repo.language || 'N/A'}
                </span>
                <Link
                  href={repo.html_url}
                  target="_blank"
                  className="inline-block px-4 py-2 bg-[#C6F10E] text-black rounded-md font-medium hover:bg-lime-400 transition"
                >
                  Lihat di GitHub
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
              <button
                key={number}
                onClick={() => setCurrentPage(number)}
                className={`px-4 py-2 rounded-md ${
                  currentPage === number
                    ? 'bg-[#C6F10E] text-black'
                    : 'bg-gray-700 text-white hover:bg-gray-600'
                }`}
              >
                {number}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
