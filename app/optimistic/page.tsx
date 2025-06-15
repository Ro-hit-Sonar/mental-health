"use client";

import React from "react";
import { motion } from "framer-motion";
// import { Heart, Sparkles, Smile, Star, Brain } from "lucide-react";

const PlayfulPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}

        {/* Main Content */}

        {/* Emotion Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-white text-center">
            Explore Your Emotion
          </h2>

          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Optimism is like a sunrise, bringing warmth and endless possibilities. What’s lighting up your horizon today? Let’s embrace the hope and energy of what’s ahead.
              </h1>
              <p className="text-gray-400 text-lg">
                The end result should be one amongst these two!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Aroused Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-8 shadow-xl border border-blue-500/20"
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold text-blue-500">
                  Hopeful
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling hopeful is like holding a gentle light within your heart, a quiet promise that even in times of challenge, there is always the possibility of renewal. Imagine standing at the edge of a new day as the soft glow of sunrise paints the sky with promise and potential. This sense of hope sustains you through life’s ups and downs, providing comfort and a reason to keep moving forward. Perhaps you recall a moment when, amid adversity, a small act of kindness or a supportive word sparked a renewed belief in better days ahead. That glimmer of hope transformed your outlook, reminding you that every setback carries the seed of a new beginning. Embracing hope means trusting that your future holds opportunities for growth and happiness, even when the present feels uncertain. Let this feeling inspire you to remain resilient, to seek out moments of light, and to carry that optimism into each new challenge and triumph you encounter.


                </p>
              </motion.div>

              {/* Cheeky Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl p-8 shadow-xl border border-pink-500/20"
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold text-pink-500">Inspired</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling inspired is an exhilarating state where your inner creativity awakens and fills you with a sense of purpose and possibility. Imagine sitting quietly, perhaps in a sun-dappled park, when a sudden insight or a beautiful scene ignites a cascade of ideas and dreams. That moment of inspiration transforms your ordinary surroundings into a canvas of endless potential. It’s as if every detail—the rustling of leaves, a kind smile from a stranger, or the rhythm of everyday life—suddenly sings to you in a new way. Perhaps you recall a time when an unexpected conversation or a simple gesture sparked a breakthrough, motivating you to pursue a passion or start a new project. Embracing inspiration means opening yourself up to life’s wonders and allowing your creative spirit to guide you toward new adventures. Let this surge of inspiration propel you to explore, dream, and create, trusting that every moment holds the potential to transform your journey into something beautifully unique.


                </p>
              </motion.div>
            </div>

            {/* Take Care Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-12"
            >
              <div className="inline-block bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Take Care
                </h3>
                <p className="text-gray-400">BYE :)</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Encouragement Section */}
      </div>
    </div>
  );
};

export default PlayfulPage;
