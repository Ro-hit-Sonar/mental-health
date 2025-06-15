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
                Vulnerability can feel raw, but it’s a sign of courage too.
                What’s making you feel exposed? Let’s hold that gently.
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
                    Victimized
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling victimized is a heavy emotion, marked by a perception
                  that life’s circumstances have unfairly targeted you. It’s as
                  though you’re caught in a narrative where external forces or
                  people seem to hold all the power, leaving you with little
                  control. Imagine a situation where you felt wronged—perhaps by
                  a friend’s betrayal or a harsh situation at work—and every
                  thought afterward echoed with the sentiment that you were at
                  the mercy of others. That persistent feeling of being
                  mistreated can cast a long shadow over your day-to-day life,
                  making it difficult to see a way out. However, recognizing
                  these feelings is the first step toward reclaiming your power.
                  Instead of allowing victimization to define you, consider it
                  an invitation to explore your own strength and agency. Talking
                  with a trusted confidant or seeking professional guidance can
                  help shift the narrative from “I was wronged” to “I can rise
                  above this.” Embrace your resilience, knowing that every
                  setback can become a stepping stone toward reclaiming control
                  and moving forward with renewed determination.
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
                  <h2 className="text-2xl font-bold text-pink-500">Fragile</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling fragile is a delicate state in which your emotions
                  seem to teeter on the brink, easily unsettled by even small
                  disturbances. It’s as if every critical word or unexpected
                  setback feels magnified, leaving you with a profound sense of
                  vulnerability. Imagine a moment when a seemingly minor
                  criticism or disappointment made you feel as though your
                  emotional defenses had crumbled, exposing you in a way that
                  felt raw and unsettling. This fragility, though painful, is
                  also a reflection of your deep capacity to feel and connect
                  with the world around you. It’s important to remember that
                  sensitivity is not a weakness but rather a sign of your
                  profound emotional richness. In these moments, gentle
                  self-care and compassionate support—from friends, loved ones,
                  or professionals—can help reinforce your inner strength. Allow
                  yourself to acknowledge your delicate state without judgment,
                  and use it as a stepping stone for growth. Over time, with
                  understanding and nurturing, what feels fragile can evolve
                  into a resilient, tender strength that honors your true
                  sensitivity while empowering you to face life’s challenges.
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
