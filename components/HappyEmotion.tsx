// import React from "react";
import Link from "next/link";

const HappyEmotion: React.FC = () => {
  return (
    <div className=" bg-black min-h-screen bg-[ #0a0a0a] flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        {/* Emotion Blocks */}
        <Link href="/playful">
          <div className="bg-[#FF6347] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Playful
          </div>
        </Link>
        <Link href="/content">
          <div className="bg-[#FFD700] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Content
          </div>
        </Link>
        <Link href="/interested">
          <div className="bg-[#32CD32] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Interested
          </div>
        </Link>
        <Link href="/proud">
          <div className="bg-[#8A2BE2] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Proud
          </div>
        </Link>
        <Link href="/accepted">
          <div className="bg-[#98FB98] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Accepted
          </div>
        </Link>
        <Link href="/powerful">
          <div className="bg-[#D32F2F] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Powerful
          </div>
        </Link>
        <Link href="/peaceful">
          <div className="bg-[#ADD8E6] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Peaceful
          </div>
        </Link>
        <Link href="/trusting">
          <div className="bg-[#1E90FF] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Trusting
          </div>
        </Link>
        <Link href="/optimistic">
          <div className="bg-[#FFA500] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Optimistic
          </div>
        </Link>
        {/* Add more blocks here */}
      </div>
    </div>
  );
};

export default HappyEmotion;
