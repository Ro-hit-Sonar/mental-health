"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const emotions = [
  { name: "Happy", color: "#FCD34D", textColor: "text-black" },
  { name: "Surprised", color: "#93C5FD", textColor: "text-black" },
  { name: "Bad", color: "#6B7280", textColor: "text-white" },
  { name: "Fearful", color: "#C084FC", textColor: "text-black" },
  { name: "Angry", color: "#FB923C", textColor: "text-black" },
  { name: "Disgusted", color: "#4B5563", textColor: "text-white" },
  { name: "Sad", color: "#3B82F6", textColor: "text-white" },
];

const AllEmotions: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const router = useRouter();

  const handleEmotionSelect = (emotion: string) => {
    setSelectedEmotion(emotion);
    setIsOpen(false);
    router.push(`/${emotion.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center py-8 sm:py-12">
      <div className="w-full max-w-xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="text-white text-2xl font-mono mb-6 text-center">
            I am feeling...
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full bg-white text-black font-mono text-xl py-6 px-8 rounded-xl flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            {selectedEmotion || "Select an emotion"}
            <ChevronDown
              className={`transform transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
              size={24}
            />
          </button>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-10 w-full mt-2 bg-white rounded-xl shadow-xl overflow-hidden"
            >
              {emotions.map((emotion) => (
                <button
                  key={emotion.name}
                  onClick={() => handleEmotionSelect(emotion.name)}
                  className={`w-full text-left px-8 py-4 hover:bg-opacity-90 transition-colors duration-200 ${emotion.textColor} text-lg font-medium`}
                  style={{ backgroundColor: emotion.color }}
                >
                  {emotion.name}
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AllEmotions;
