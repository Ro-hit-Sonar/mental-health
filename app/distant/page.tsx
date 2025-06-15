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
              Distance feels like being on an island, watching the world from afar. What’s creating this space? Let’s explore how to bridge the gap and reconnect.
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
                  Withdrawn
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling withdrawn is an emotional response where you retreat inwardly, often as a way to protect yourself from overwhelming stress or unresolved pain. Imagine a time when life’s challenges felt too heavy to bear, and instead of engaging with others, you chose to isolate yourself—seeking refuge in solitude. This withdrawal can provide temporary relief, creating a safe space where you avoid further hurt. However, prolonged isolation might leave you feeling disconnected and lonely, as if you’re separated from the world by an invisible barrier. Reflect on the reasons behind your retreat and consider whether it’s a signal that you need a moment to heal. Gradually reaching out to a trusted friend, family member, or counselor might help you reconnect with supportive relationships. Over time, with gentle self-compassion and mindful effort, you can rediscover the balance between honoring your need for space and nurturing the meaningful connections that enrich your life, ultimately guiding you back to a place of warmth and belonging.


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
                  <h2 className="text-2xl font-bold text-pink-500">Numb</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling numb is an experience where emotions feel muted, as if a protective barrier has dulled your capacity to feel both pain and joy. Imagine a period in your life when even significant events—whether joyful or sorrowful—seemed to pass by without impact, leaving you in a state of detachment. This numbness might develop as a way for your mind to shield itself from overwhelming stress or repeated hurt. While it can offer a brief respite from emotional pain, prolonged numbness may leave you feeling disconnected from your true self and from those around you. Acknowledge that this lack of feeling is a signal that something deeper requires attention. Consider seeking support through creative outlets, trusted conversations, or professional guidance to gently explore the layers beneath this protective shell. Over time, as you allow yourself to experience and process the underlying emotions, the vibrancy of your inner world can begin to reawaken, gradually restoring a fuller, richer spectrum of feelings and reconnecting you with the essence of who you are.


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
