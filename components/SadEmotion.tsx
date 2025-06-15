// import React from "react";
import Link from "next/link";

const SadEmotion: React.FC = () => {
  return (
    <div className=" bg-black min-h-screen bg-[ #0a0a0a] flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        {/* Emotion Blocks */}
        <Link href="/lonely">
          <div className="bg-gray-600 text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Lonely
          </div>
        </Link>
        <Link href="/vulnerable">
          <div className="bg-[#413f36] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Vulnerable
          </div>
        </Link>
        <Link href="/despair">
          <div className="bg-[#C0C0C0] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Despair
          </div>
        </Link>
        <Link href="/guilty">
          <div className="bg-[#B22222] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Guilty
          </div>
        </Link>
        <Link href="/depressed">
          <div className="bg-[#D32F2F] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Depressed
          </div>
        </Link>
        <Link href="/hurt">
          <div className="bg-[#A9A9A9] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Hurt
          </div>
        </Link>

        {/* Add more blocks here */}
      </div>
    </div>
  );
};

export default SadEmotion;
