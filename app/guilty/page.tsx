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
                Guilt often points to something we care deeply about. Let’s
                understand what it’s trying to tell you.
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
                  <h2 className="text-2xl font-bold text-blue-500">Ashamed</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling ashamed is a heavy emotion that wraps you in a cloak
                  of self-criticism and regret. It’s that internal judgment that
                  magnifies your mistakes, making you feel unworthy of love or
                  acceptance. Imagine a time when you made a misstep—perhaps a
                  choice you now regret or a moment when you felt you didn’t
                  live up to your own standards—and the resulting shame was so
                  overwhelming that it clouded your entire sense of self. That
                  searing feeling of inadequacy can be isolating, as if you’re
                  burdened with a secret flaw that sets you apart from others.
                  Yet, it’s important to recognize that shame is a universal
                  experience, and it can be transformed through self-compassion.
                  By acknowledging your imperfections and learning from them,
                  you create space for healing. Reach out to someone who can
                  listen without judgment, and remind yourself that making
                  mistakes is an intrinsic part of being human. Over time, as
                  you embrace forgiveness—both for yourself and from those who
                  care—you can start to dissolve the heavy weight of shame and
                  step toward a more compassionate understanding of who you
                  truly are.
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
                    Remorseful
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling remorseful is a deeply reflective state, emerging when
                  you recognize the impact of your actions on yourself or
                  others. It’s a heavy, honest emotion—a quiet internal dialogue
                  that questions what might have been done differently. Imagine
                  a moment when you unintentionally hurt someone, and the
                  subsequent realization filled you with a profound sense of
                  regret. That remorse can be painful, as it forces you to
                  confront choices that no longer seem reversible. Yet, within
                  that sorrow lies a powerful opportunity for growth. Remorse
                  can serve as a catalyst for change, guiding you to learn from
                  your mistakes and make amends where possible. Instead of
                  letting remorse trap you in guilt, consider it a stepping
                  stone to personal evolution. Seek ways to repair the damage,
                  perhaps through sincere apologies or actions that rebuild
                  trust. Embracing remorse with humility and resolve can help
                  transform the experience into one of empathy and
                  self-improvement, ultimately leading to a deeper, more mindful
                  relationship with yourself and those around you.
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
