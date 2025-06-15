import React from "react";
import Link from "next/link";

const BadEmotion: React.FC = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        {/* Emotion Blocks */}
        <Link href="/bored">
          <div className="bg-[#BEBEBE] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Bored
          </div>
        </Link>
        <Link href="/busy">
          <div className="bg-[#FF8C00] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Busy
          </div>
        </Link>
        <Link href="/stressed">
          <div className="bg-[#DC143C] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Stressed
          </div>
        </Link>
        <Link href="/tired">
          <div className="bg-[#8B4513] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Tired
          </div>
        </Link>

        {/* Add more blocks here */}
      </div>
    </div>
  );
};

export default BadEmotion;
