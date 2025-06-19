"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const AngryEmotion: React.FC = () => {
  return (
    <div className="bg-black flex items-center justify-center py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#FF4500] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/mad"
            className="w-full h-full flex items-center justify-center"
          >
            Mad
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#FF6347] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/aggressive"
            className="w-full h-full flex items-center justify-center"
          >
            Aggressive
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#DC143C] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/frustrated"
            className="w-full h-full flex items-center justify-center"
          >
            Frustrated
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#B22222] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/distant"
            className="w-full h-full flex items-center justify-center"
          >
            Distant
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#8B0000] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/critical"
            className="w-full h-full flex items-center justify-center"
          >
            Critical
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#A52A2A] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/bitter"
            className="w-full h-full flex items-center justify-center"
          >
            Bitter
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default AngryEmotion;
