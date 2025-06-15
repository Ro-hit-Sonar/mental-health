"use client";

// import React from "react";
import { motion } from "framer-motion";
import { Heart, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full px-4 mb-10"
          >
            <div className="flex justify-center mb-4">
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
            <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Emotion Navigator
            </h2>
            <p className="text-gray-400 max-w-md mx-auto">
              Helping you navigate through your emotions with understanding and
              care.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full px-4 mb-10"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-2 text-gray-400 hover:text-pink-500 transition-colors">
                <Mail className="w-5 h-5" />
                <a href="mailto:msonarrohit6@gmail.com" className="text-sm">
                  msonarrohit6@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-5 h-5" />
                <span className="text-sm">Pune, Maharashtra, India</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2024 Emotion Navigator. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/rohittkumardev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://x.com/rohitsonar08"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
