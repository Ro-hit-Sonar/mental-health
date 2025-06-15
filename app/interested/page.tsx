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
            Explore this emotion
          </h2>

          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Curiosity is knocking. What’s catching your attention today?
                Let’s nurture that spark—it might lead to something exciting.
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
                  <h2 className="text-2xl font-bold text-blue-500">Curious</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling curious is like opening a door to a room filled with
                  endless possibilities—a spark of wonder that invites you to
                  explore the mysteries of life. Imagine strolling through a
                  vibrant street market where each stall offers a new story and
                  every scent or color whispers secrets of cultures and dreams.
                  This sensation pushes you to ask questions and seek deeper
                  meanings behind everyday occurrences. Perhaps you recall a
                  moment when a casual conversation with a stranger led to an
                  unexpected insight or even ignited a long-forgotten passion.
                  That spark of curiosity transformed an ordinary day into an
                  adventure of discovery. Embracing your curiosity allows you to
                  break free from routine and engage with the world around you
                  in a more profound way. It’s a gentle reminder that every
                  question you ask can lead to a richer, more nuanced
                  understanding of yourself and others. Let this inquisitive
                  spirit guide you, encouraging you to explore, learn, and
                  appreciate the intricate tapestry of life unfolding around
                  you.
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
                    Inquisitive
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling inquisitive is a deliberate dive into the depths of
                  knowledge and meaning—a refined form of curiosity that compels
                  you to seek clarity and understanding. Picture yourself
                  engaged in a thoughtful conversation, where each question
                  leads to another, unraveling layers of insight and sparking
                  deeper connections. This state of mind is not merely about
                  gathering facts; it’s about connecting the dots between
                  experiences and emotions. Perhaps you remember a time when
                  your persistent questioning transformed an everyday experience
                  into an enlightening journey, opening your eyes to new
                  perspectives. That moment of insight was not accidental but a
                  testament to your willingness to explore beyond the surface.
                  Embracing an inquisitive nature empowers you to challenge
                  assumptions, foster continuous learning, and gain a richer
                  appreciation for life’s complexities. Allow this drive to
                  uncover truths to enrich your understanding, nurturing both
                  your inner growth and your connection to the world. Each
                  inquiry becomes a stepping stone toward a more thoughtful,
                  reflective, and deeply informed life.
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
