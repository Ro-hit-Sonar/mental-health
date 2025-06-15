"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, BookOpen, Home, Brain } from "lucide-react";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <header className="text-white body-font">
        <div className="container mx-auto px-4 py-4 pb-8">
          <div className="flex items-center justify-between">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <Heart className="w-6 h-6 text-pink-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Emotion Navigator
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Home className="w-5 h-5 mr-2" />
                  Home
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  About
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/journal"
                  className="flex items-center text-gray-300 hover:text-white transition-colors"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Journal
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/good_reads"
                  className="flex items-center space-x-2 hover:text-pink-500 transition-colors"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Good Reads</span>
                </Link>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 space-y-4"
            >
              <Link
                href="/"
                className="block py-2 hover:text-pink-500 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block py-2 hover:text-pink-500 transition-colors"
              >
                About
              </Link>
              <Link
                href="/journal"
                className="block py-2 hover:text-pink-500 transition-colors"
              >
                Journal
              </Link>
              <Link
                href="/good_reads"
                className="block py-2 hover:text-pink-500 transition-colors"
              >
                Good Reads
              </Link>
            </motion.div>
          )}
        </div>
      </header>
    </motion.div>
  );
};

export default NavBar;
