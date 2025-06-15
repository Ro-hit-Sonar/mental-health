"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import EmotionJournal from "@/components/EmotionJournal";

const JournalPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-3xl mx-auto px-6 pt-16 pb-10"
      >
        <div className="bg-gradient-to-br from-pink-500/20 to-purple-700/30 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center border border-pink-500/30">
          <div className="bg-pink-500/20 rounded-full p-4 mb-4 shadow-lg">
            <BookOpen className="w-14 h-14 text-pink-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight drop-shadow-lg">
            Your Daily Emotion Journal
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-xl mx-auto">
            Reflect, record, and grow. Track your emotional journey with
            beautiful clarity. Your private space to log, review, and understand
            your feelings—one day at a time.
          </p>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-md text-base md:text-lg">
              Start journaling today
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Journal Component */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <EmotionJournal />
      </div>
    </div>
  );
};

export default JournalPage;
