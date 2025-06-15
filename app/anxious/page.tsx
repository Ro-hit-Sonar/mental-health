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
                Anxiety often whispers about things that matter to us. What’s on
                your mind today? Let’s untangle the knots, one by one.
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
                    Overwhelmed
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling overwhelmed is like being caught in a relentless tidal
                  wave of stress and responsibility, where every task and
                  emotion converges at once. Picture a day when work deadlines,
                  family demands, and personal challenges all peak
                  simultaneously, leaving you breathless and struggling to catch
                  up. In that moment, even the simplest decisions can seem
                  monumental, and your mind may race with worries that blur
                  together. This flood of emotions can create a sense of
                  paralysis, as if you’re sinking beneath the weight of it all.
                  However, being overwhelmed is also a signal—a call to pause
                  and reassess your priorities. It’s an invitation to take a
                  step back and practice self-care, whether that means
                  delegating tasks, setting boundaries, or simply allowing
                  yourself a few quiet moments of reflection. Reach out to
                  someone who understands, and consider breaking your challenges
                  into smaller, manageable pieces. By gradually addressing each
                  concern, you can restore balance and find a way to navigate
                  through the storm, rediscovering your inner strength and
                  clarity along the way.
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
                  <h2 className="text-2xl font-bold text-pink-500">Worried</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling worried is a persistent, nagging sensation that tugs
                  at your mind, casting shadows over even the brightest moments.
                  Imagine a scenario where uncertainty about the future—whether
                  regarding health, relationships, or work—keeps your thoughts
                  in a constant state of apprehension. This worry can build
                  slowly, like a cloud gathering on the horizon, eventually
                  darkening your mood and sapping your energy. It’s as though
                  every possible negative outcome is magnified, leaving little
                  space for hope or clarity. Yet, worry also serves a purpose;
                  it alerts you to issues that may need attention and encourages
                  you to plan and prepare. The key is to balance that vigilance
                  with self-compassion. Consider setting aside dedicated time to
                  process your concerns, perhaps by journaling or discussing
                  them with a trusted friend. Gradually, as you gain perspective
                  and take constructive steps to address what you can control,
                  the intensity of your worry may lessen. Embrace the idea that
                  while worry is natural, it doesn’t have to dominate your every
                  thought—there is room for calm, resilience, and proactive care
                  in your daily life.
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
