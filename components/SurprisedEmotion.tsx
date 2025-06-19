"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const SurprisedEmotion: React.FC = () => {
  return (
    <div className="bg-black flex items-center justify-center py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#FFD700] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/amazed"
            className="w-full h-full flex items-center justify-center"
          >
            Amazed
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#87CEEB] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/startled"
            className="w-full h-full flex items-center justify-center"
          >
            Startled
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#98FB98] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/confused"
            className="w-full h-full flex items-center justify-center"
          >
            Confused
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-[#DDA0DD] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg transition-transform cursor-pointer"
        >
          <Link
            href="/excited"
            className="w-full h-full flex items-center justify-center"
          >
            Excited
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default SurprisedEmotion;
