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
            Explore Your Contentment Side
          </h2>

          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Contentment is like a warm hug to the soul. It feels steady,
                peaceful, and complete. Let’s sit with this calm for a while.
                The End result should be one amonst these two !
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
                  <h2 className="text-2xl font-bold text-blue-500">Free</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling free is an expansive experience that washes away the
                  constraints of daily life and fills you with a profound sense
                  of possibility. Picture yourself standing in an open field on
                  a breezy day, where the sky stretches limitlessly above and
                  every breath feels like liberation. In that moment, the
                  heaviness of obligations and expectations dissolves, leaving
                  you with an unburdened heart and a clear mind. Perhaps you
                  recall a time when you spontaneously decided to take a
                  different path—whether a sudden road trip or stepping away
                  from routine—that rekindled your inner spark. This sense of
                  freedom is not just physical; it’s an emotional release that
                  invites you to rediscover your true self. It encourages you to
                  challenge boundaries and explore new horizons with courage and
                  curiosity. Embracing freedom means recognizing that every new
                  day is a chance to redefine what it means to live fully,
                  unshackled by fear or doubt. Let this liberating energy guide
                  you to trust in your ability to shape your destiny and
                  celebrate life’s endless opportunities.
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
                  <h2 className="text-2xl font-bold text-pink-500">Joyful</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling joyful is like basking in the warmth of a brilliant
                  sunrise—a radiant emotion that fills every corner of your
                  being with light and delight. Imagine a day when laughter
                  flows as freely as a mountain stream, where even the simplest
                  moments—a shared smile, a kind word, or a small victory—spark
                  a deep and abiding happiness. This state of joy isn’t just a
                  fleeting emotion; it’s a celebration of life’s beauty in all
                  its forms. Perhaps you remember a time when an unexpected
                  compliment or a spontaneous reunion with an old friend lit up
                  your day, reminding you of the precious connections that color
                  your world. Joy is a gentle yet powerful reminder that every
                  day holds the potential for wonder and gratitude. It
                  encourages you to pause and savor life’s little miracles, no
                  matter how ordinary they might seem. Embrace that uplifting
                  sensation and allow it to inspire you to spread kindness and
                  to recognize that joy, in its purest form, is a gift meant to
                  be shared.
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
