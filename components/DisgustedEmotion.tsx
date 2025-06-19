"use client";

// import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const DisgustedEmotion: React.FC = () => {
  return (
    <div className="bg-black flex items-center justify-center py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#556B2F] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/disapproving"
            className="w-full h-full flex items-center justify-center"
          >
            Disapproving
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#6B8E23] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/awful"
            className="w-full h-full flex items-center justify-center"
          >
            Awful
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#808000] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/repelled"
            className="w-full h-full flex items-center justify-center"
          >
            Repelled
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default DisgustedEmotion;
