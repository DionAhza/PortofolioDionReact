"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import i18n from "@/i18n";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState(i18n.language || "en");
  const [isLoading, setIsLoading] = useState(false); // Tambahkan loading state

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const isDark = !darkMode;
    setDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", isDark);
  };

  // Ganti bahasa dengan efek loading
  const changeLanguage = async (lang: "en" | "id") => {
    setIsLoading(true); // Aktifkan loading
    await i18n.changeLanguage(lang); // Tunggu perubahan bahasa selesai
    setLanguage(lang);
    setIsLoading(false); // Matikan loading setelah bahasa berubah
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 dark:bg-[#19222D] backdrop-blur-sm text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-[#C6F10E]">
            <Link href="/">DAR</Link>
          </div>

          {/* Action buttons */}
          <div className="flex items-center space-x-4">
            {/* Language Dropdown */}
            <div className="relative group">
              <button className="hover:text-[#C6F10E] flex items-center space-x-1">
                <Globe size={20} />
                <span className="text-sm">
                  {isLoading ? "⏳" : language === "en" ? "EN" : "ID"}
                </span>
              </button>
              <div className="absolute right-0 mt-2 w-32 bg-white dark:bg-[#1f2937] text-black dark:text-white rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
                <button
                  onClick={() => changeLanguage("en")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                  disabled={isLoading}
                >
                  English {isLoading && "⏳"}
                </button>
                <button
                  onClick={() => changeLanguage("id")}
                  className="block px-4 py-2 w-full text-left hover:bg-gray-200 dark:hover:bg-gray-700"
                  disabled={isLoading}
                >
                  Bahasa {isLoading && "⏳"}
                </button>
              </div>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white block sm:hidden">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button> 
            {isOpen && (
        <div className="absolute top-12 left-0 right-0 bg-gray-900 text-white flex flex-col space-y-4 p-4 shadow-lg z-50 rounded-md">
          <a href="/#home" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            Home
          </a>
          <a href="/#about" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            About
          </a>
          <a href="/#project" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            Project
          </a>
          <a href="/#sertifikat" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            Sertifikat
          </a>
          <a href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-blue-400">
            Contact
          </a>
        </div>
      )}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

