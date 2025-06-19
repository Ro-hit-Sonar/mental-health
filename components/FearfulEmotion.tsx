"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const FearfulEmotion: React.FC = () => {
  return (
    <div className="bg-black flex items-center justify-center py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#800080] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/scared"
            className="w-full h-full flex items-center justify-center"
          >
            Scared
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#4B0082] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/anxious"
            className="w-full h-full flex items-center justify-center"
          >
            Anxious
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#483D8B] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/insecure"
            className="w-full h-full flex items-center justify-center"
          >
            Insecure
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#6A5ACD] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/weak"
            className="w-full h-full flex items-center justify-center"
          >
            Weak
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#9370DB] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/vulnerable"
            className="w-full h-full flex items-center justify-center"
          >
            Vulnerable
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default FearfulEmotion;
