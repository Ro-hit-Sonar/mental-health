import React from "react";
import Link from "next/link";

const AngryEmotion: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 w-full max-w-screen-lg">
        {/* Emotion Blocks */}
        <Link href="/letdown">
          <div className="bg-[#778899] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Let Down
          </div>
        </Link>
        <Link href="/humiliated">
          <div className="bg-[#8B0000] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Humiliated
          </div>
        </Link>
        <Link href="/bitter">
          <div className="bg-[#556B2F] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Bitter
          </div>
        </Link>
        <Link href="/mad">
          <div className="bg-[#FF4500] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Mad
          </div>
        </Link>
        <Link href="/aggressive">
          <div className="bg-[#B22222] text-black text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Aggressive
          </div>
        </Link>
        <Link href="/frustrated">
          <div className="bg-[#D2691E] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Frustrated
          </div>
        </Link>
        <Link href="/distant">
          <div className="bg-[#708090] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Distant
          </div>
        </Link>
        <Link href="/critical">
          <div className="bg-[#696969] text-white text-xl font-bold h-28 flex justify-center items-center rounded-lg shadow-lg hover:scale-105 transition-transform cursor-pointer">
            Critical
          </div>
        </Link>

        {/* Add more blocks here */}
      </div>
    </div>
  );
};

export default AngryEmotion;
