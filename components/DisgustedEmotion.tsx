// import React from "react";
import Link from "next/link";

const DisgustedEmotion: React.FC = () => {
  return (
    <div className=" bg-black min-h-screen bg-[ #0a0a0a] flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        {/* Emotion Blocks */}
        <Link href="/disapproving">
          <div className="bg-[#A0522D] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Disapproving
          </div>
        </Link>
        <Link href="/disappointed">
          <div className="bg-[#808080] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Disappointed
          </div>
        </Link>
        <Link href="/awful">
          <div className="bg-[#4B0082] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Awful
          </div>
        </Link>
        <Link href="/repelled">
          <div className="bg-[#556B2F] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Repelled
          </div>
        </Link>

        {/* Add more blocks here */}
      </div>
    </div>
  );
};

export default DisgustedEmotion;
