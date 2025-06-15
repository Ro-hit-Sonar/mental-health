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
              Peace feels like breathing fresh air after a storm. How can we preserve this stillness and bring it into other areas of your life?
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
                  Loving
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling loving is a profound, heartwarming emotion that connects you deeply to others and to yourself. It’s the gentle embrace of compassion that flows naturally when you open your heart to the people and moments that matter most. Imagine a quiet evening where a shared smile, a soft touch, or an unspoken understanding creates a warm and comforting space between you and someone dear. This loving energy isn’t confined to romance—it extends to the unconditional care you offer to family, friends, and even yourself. Perhaps you recall a time when a simple act of kindness, whether given or received, lifted your spirits and reminded you of the beauty of connection. Embracing love encourages you to nurture relationships and to honor the bonds that enrich your life. It is a reminder that every act of genuine care contributes to a tapestry of meaningful experiences. Let this loving feeling guide you to be more empathetic and present, creating a ripple of kindness that brightens your world.


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
                  <h2 className="text-2xl font-bold text-pink-500">Thankful</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling thankful is a gentle, reflective emotion that fills your heart with gratitude for the myriad blessings in your life. Imagine a moment when you paused amid a busy day to appreciate the small wonders—a warm cup of tea, a kind word from a friend, or the comforting glow of a sunset. That sense of gratitude wraps around you like a soft blanket, reminding you of the beauty in the everyday. Perhaps you recall a time when expressing thankfulness not only deepened your connection with someone but also transformed a challenging day into one of quiet appreciation. Embracing this feeling means recognizing that every experience, no matter how small, holds value. It encourages you to celebrate the ordinary moments and to see life as a series of gifts waiting to be acknowledged. Let thankfulness guide you as you nurture a deeper connection with yourself and others, knowing that gratitude can illuminate even the darkest days and foster a heart that is resilient and hopeful.


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
