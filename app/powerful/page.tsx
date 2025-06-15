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
                Feeling powerful is invigorating! It means you’re owning your
                moment. Where does this strength come from? Let’s channel it.
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
                    Courageous
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling courageous is about tapping into an inner reservoir of
                  strength that propels you forward despite the uncertainty of
                  life. It’s that steady resolve that empowers you to face
                  challenges head-on, even when fear whispers in your ear.
                  Imagine standing before a daunting opportunity—perhaps a new
                  job or a personal challenge—feeling your heart race, yet
                  taking that bold step anyway. That moment when you choose to
                  confront your doubts, instead of shrinking away, fills you
                  with an inspiring sense of empowerment. Perhaps you recall a
                  time when overcoming a significant obstacle revealed strengths
                  you never knew you had, leaving you with a lasting impression
                  of your own resilience. This courageous spirit isn’t about the
                  absence of fear; it’s about moving forward in spite of it.
                  Embracing courage encourages you to see challenges as
                  opportunities for growth and transformation. Let this bravery
                  remind you that every step taken in the face of fear is a
                  victory, one that builds confidence and opens the door to new
                  possibilities in your life.
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
                  <h2 className="text-2xl font-bold text-pink-500">Creative</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling creative is like unlocking a hidden reservoir of
                  inspiration that transforms everyday moments into something
                  extraordinary. Imagine settling into a quiet space—a sunlit
                  corner of your favorite room—when suddenly, an unexpected idea
                  or a subtle detail ignites a cascade of imaginative thoughts.
                  This surge of creativity is not limited to art; it can appear
                  in the way you solve a problem at work or how you express
                  yourself in conversation. Perhaps you recall a time when a
                  spark of inspiration turned an ordinary day into a moment of
                  discovery, leading to a breakthrough that redefined your
                  perspective. Embracing this creative energy means welcoming
                  change, experimenting with new ideas, and allowing yourself
                  the freedom to express your unique vision. It’s a gentle
                  reminder that within you lies the power to transform
                  challenges into innovative opportunities. Let your creative
                  spirit guide you, encouraging you to explore, experiment, and
                  celebrate the beauty of original thought as you journey toward
                  a richer, more vibrant life.
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
