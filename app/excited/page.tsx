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
              Excitement is energy bubbling up inside. What’s lighting you up today? Let’s explore that spark.

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
                  Eager
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling eager is a dynamic state of anticipation and readiness that propels you forward with a sense of hopeful excitement. It’s that inner spark that ignites when you look toward new opportunities, adventures, or personal growth. Imagine standing on the brink of a significant change—whether it’s starting a new project, embarking on a journey, or simply welcoming a fresh day—and feeling your heart beat faster with enthusiasm. In that moment, your mind buzzes with possibilities, and every step seems imbued with potential. Eagerness is both a motivator and a signal that you are open to learning and experiencing the world in a richer way. This vibrant anticipation encourages you to set goals, take risks, and embrace the unknown with optimism. As you nurture this feeling, you build resilience and cultivate a mindset that transforms challenges into exciting opportunities. Let your eagerness be a guide, inspiring you to pursue your dreams with passion and to welcome each new experience as a chance to grow and evolve.


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
                  <h2 className="text-2xl font-bold text-pink-500">Energetic</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling energetic is a state of being where your body and mind are vibrantly alive, brimming with motivation and readiness to tackle whatever comes your way. It’s as if every cell is infused with a burst of vitality, urging you to engage fully with life. Imagine waking up on a day when you feel unstoppable—enthused about your plans, creative ideas, or the prospect of connecting with others. This dynamic energy not only propels you forward but also colors your world with optimism and purpose. In that state, even mundane tasks become opportunities for excitement and achievement. Harnessing your energy can be a powerful catalyst for personal growth, driving you to set ambitious goals and overcome obstacles with confidence. By embracing this lively state, you nurture a resilient spirit that can adapt to challenges and celebrate each small victory. Let your energy inspire you to live fully, create boldly, and share your enthusiasm with those around you, transforming everyday moments into a celebration of life’s endless potential.


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
