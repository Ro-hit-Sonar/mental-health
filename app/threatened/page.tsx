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
                Feeling threatened means something feels at risk. Let’s examine
                what feels unsafe and how we can protect it.
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
                  <h2 className="text-2xl font-bold text-blue-500">Nervous</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling nervous is a common, yet deeply human, response to
                  uncertainty and anticipation. It’s that jittery sensation
                  before a big presentation, a first date, or any situation
                  where the outcome is unknown. Imagine the flutter of your
                  heart and the racing thoughts as you step into an unfamiliar
                  environment, wondering if you’ll be accepted or if you might
                  stumble. While nervousness can be unsettling, it is also a
                  signal that you care about what lies ahead. This energy can be
                  channeled into preparation and mindful awareness, transforming
                  anxious jitters into focused determination. Reflect on past
                  moments when you overcame nervousness and discovered new
                  strengths or abilities. Often, a small act of
                  self-kindness—like a deep breath, a supportive word from a
                  friend, or a moment of quiet reflection—can ease the tension
                  and remind you that you are capable of handling the unknown.
                  Embrace nervousness as a natural part of growth, a gentle push
                  toward opportunities that lie just beyond your comfort zone.
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
                  <h2 className="text-2xl font-bold text-pink-500">Exposed</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling exposed is an emotion that can leave you raw and
                  vulnerable, as if your innermost self has been laid bare for
                  the world to see. Imagine a moment when you shared a personal
                  truth or stepped out of your comfort zone, only to feel that
                  every gaze and judgment is directed at you. This sensation can
                  be overwhelming, triggering self-consciousness and a fear of
                  being misunderstood. Yet, in that exposed state lies the
                  potential for deep connection and personal authenticity.
                  Acknowledge the discomfort while recognizing that
                  vulnerability is also a gateway to growth—it allows you to
                  invite genuine relationships and to truly express who you are.
                  Over time, by gradually embracing exposure and celebrating
                  your authentic self, you can transform that initial fear into
                  a source of strength and empowerment. Remember, every moment
                  of feeling exposed is an opportunity to learn more about
                  yourself and to build resilience, ultimately guiding you
                  toward deeper self-acceptance and more meaningful connections
                  with those who appreciate you just as you are.
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
