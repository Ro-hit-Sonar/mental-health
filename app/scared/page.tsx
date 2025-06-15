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
                Feeling scared means something feels uncertain or unsafe. Let’s
                explore what’s causing this and how we can create comfort.
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
                  <h2 className="text-2xl font-bold text-blue-500">Helpless</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling helpless is a deeply challenging emotion, one where
                  circumstances seem to swirl beyond your control. It’s like
                  being caught in a relentless storm with no shelter in sight.
                  Imagine a time when, despite your earnest efforts to help a
                  loved one through a crisis or to overcome a sudden setback at
                  work, every action felt futile. In that moment, the world
                  appears overwhelming, and you might feel as though external
                  forces are steering your life, leaving you with little to no
                  agency. This sense of helplessness can cloud your inner light,
                  making you doubt your own strength. Yet, amid the despair,
                  there is an invitation to reach out. Consider that asking for
                  help—whether from a trusted friend, family member, or
                  professional—is a courageous act that can begin to restore
                  your sense of control. Over time, by taking small, deliberate
                  steps and accepting support, you can start to reclaim your
                  power and rebuild resilience. Remember that feeling helpless
                  doesn’t diminish your worth; it’s a signal that you deserve
                  care and understanding as you navigate through life’s
                  unpredictable challenges.
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
                  <h2 className="text-2xl font-bold text-pink-500">
                    Frightened
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling frightened is that sudden, acute shiver of anxiety
                  that can catch you off guard. It’s as if an unseen shadow
                  lurks just at the edge of your perception, igniting a primal
                  urge to flee. Imagine walking home one evening when the
                  darkness and unfamiliar sounds trigger a cascade of fear—even
                  though nothing overtly dangerous is present. This sensation
                  can be overwhelming, leaving your heart racing and your mind
                  flooded with “what ifs.” While fear can serve as a protective
                  signal, urging you to stay safe, it can also paralyze and
                  isolate you if left unchecked. Embracing this emotion involves
                  acknowledging your vulnerability and finding grounding in the
                  present moment. Consider turning to calming techniques, like
                  deep breathing or a reassuring conversation with someone you
                  trust. Over time, as you explore the roots of your fear, you
                  may discover that it holds clues about your inner needs and
                  boundaries. Recognize that feeling frightened is a natural
                  human response, and by gently addressing it, you empower
                  yourself to regain a sense of safety and calm in the midst of
                  life’s uncertainties.
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
