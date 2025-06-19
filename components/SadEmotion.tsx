"use client";

// import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SadEmotion: React.FC = () => {
  return (
    <div className="bg-black flex items-center justify-center py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#4682B4] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/lonely"
            className="w-full h-full flex items-center justify-center"
          >
            Lonely
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#5F9EA0] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/guilty"
            className="w-full h-full flex items-center justify-center"
          >
            Guilty
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#20B2AA] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/depressed"
            className="w-full h-full flex items-center justify-center"
          >
            Depressed
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#48D1CC] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/hurt"
            className="w-full h-full flex items-center justify-center"
          >
            Hurt
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#40E0D0] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/despair"
            className="w-full h-full flex items-center justify-center"
          >
            Despair
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SadEmotion;
