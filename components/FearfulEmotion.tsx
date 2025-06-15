import React from "react";
import Link from "next/link";

const FearfulEmotion: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        {/* Emotion Blocks */}
        <Link href="/scared">
          <div className="bg-purple-600 text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Scared
          </div>
        </Link>
        <Link href="/anxious">
          <div className="bg-[#FFD700] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Anxious
          </div>
        </Link>
        <Link href="/insecure">
          <div className="bg-[#C0C0C0] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Insecure
          </div>
        </Link>
        <Link href="/rejected">
          <div className="bg-[#B22222] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Rejected
          </div>
        </Link>
        <Link href="/threatened">
          <div className="bg-[#D32F2F] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Threatened
          </div>
        </Link>
        <Link href="/weak">
          <div className="bg-[#A9A9A9] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Weak
          </div>
        </Link>

        {/* Add more blocks here */}
      </div>
    </div>
  );
};

export default FearfulEmotion;
