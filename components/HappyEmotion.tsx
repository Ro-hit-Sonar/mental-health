"use client";

// import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const HappyEmotion: React.FC = () => {
  return (
    <div className="bg-black flex items-center justify-center py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        {/* Emotion Blocks */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#FF6347] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/playful"
            className="w-full h-full flex items-center justify-center"
          >
            Playful
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#FFD700] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/content"
            className="w-full h-full flex items-center justify-center"
          >
            Content
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#32CD32] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/interested"
            className="w-full h-full flex items-center justify-center"
          >
            Interested
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#8A2BE2] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/proud"
            className="w-full h-full flex items-center justify-center"
          >
            Proud
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#98FB98] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/accepted"
            className="w-full h-full flex items-center justify-center"
          >
            Accepted
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#D32F2F] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/powerful"
            className="w-full h-full flex items-center justify-center"
          >
            Powerful
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#ADD8E6] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/peaceful"
            className="w-full h-full flex items-center justify-center"
          >
            Peaceful
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#1E90FF] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/trusting"
            className="w-full h-full flex items-center justify-center"
          >
            Trusting
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#FFA500] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/optimistic"
            className="w-full h-full flex items-center justify-center"
          >
            Optimistic
          </Link>
        </motion.div>
        {/* Add more blocks here */}
      </div>
    </div>
  );
};

export default HappyEmotion;
