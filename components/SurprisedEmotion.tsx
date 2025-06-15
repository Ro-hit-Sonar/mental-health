import React from "react";
import Link from "next/link";

const SurprisedEmotion: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        {/* Emotion Blocks */}
        <Link href="/startled">
          <div className="bg-[#FF4500] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Startled
          </div>
        </Link>
        <Link href="/confused">
          <div className="bg-[#808080] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Confused
          </div>
        </Link>
        <Link href="/amazed">
          <div className="bg-[#00BFFF] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Amazed
          </div>
        </Link>
        <Link href="/excited">
          <div className="bg-[#FF1493] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Excited
          </div>
        </Link>

        {/* Add more blocks here */}
      </div>
    </div>
  );
};

export default SurprisedEmotion;
