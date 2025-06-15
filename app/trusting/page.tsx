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
                Trust opens doors to deeper connections. Who or what are you
                trusting today? Let’s explore the safety in this space.
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
                    Sensitive
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling sensitive is a testament to your deep emotional
                  awareness and your ability to connect with the subtle nuances
                  of life. It’s a quality that allows you to experience the
                  world with heightened empathy, noticing the delicate shifts in
                  mood, tone, and atmosphere. Imagine sitting quietly as a soft
                  melody plays, each note stirring feelings and memories that
                  resonate with your inner world. Perhaps you recall a moment
                  when your sensitivity enabled you to pick up on a friend’s
                  unspoken sadness or to appreciate the fleeting beauty of a
                  sunset. This heightened awareness, while sometimes
                  overwhelming, is also a precious gift—it allows you to
                  understand and empathize with both your emotions and those of
                  others. Embracing your sensitive nature means honoring every
                  feeling without judgment, recognizing that vulnerability is a
                  pathway to deeper connection. Let this sensitivity guide you,
                  encouraging authentic expressions of care and compassion that
                  enrich your relationships and enhance your understanding of
                  life’s intricate tapestry.
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
                  <h2 className="text-2xl font-bold text-pink-500">Intimate</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling intimate is about experiencing a deep, soulful
                  connection that goes beyond surface interactions—a space where
                  vulnerability and authenticity blend seamlessly. Imagine
                  sharing a quiet moment with someone who truly understands you,
                  where every word and silence speaks volumes about trust and
                  connection. This sense of intimacy is not confined solely to
                  romantic relationships; it extends to any bond where you feel
                  completely seen and accepted. Perhaps you recall a time when
                  opening your heart, despite the risk of being hurt, led to a
                  transformative experience of closeness and mutual
                  understanding. That profound connection can act as a safe
                  haven where your most authentic self is celebrated. Embracing
                  intimacy encourages you to nurture relationships built on
                  honesty, empathy, and shared vulnerability. Let this feeling
                  remind you that deep, meaningful connections are one of life’s
                  greatest treasures, inviting you to cherish and cultivate
                  bonds that enrich your emotional world and help you grow
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
