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
                Hurt is heavy, like carrying a storm inside. What part of this
                pain needs the most care right now? Let’s sit with it gently and
                begin to heal.
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
                    Disappointed
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling disappointed arises when expectations clash with
                  reality, leaving you with a sense of unmet hope and lingering
                  sadness. It’s as if you had painted a vivid picture of how
                  things should be, only to have reality fall short of that
                  vision. Imagine a time when you eagerly anticipated a positive
                  outcome—a personal achievement or an important gesture from
                  someone close—but the result was unexpectedly underwhelming.
                  That gap between what you hoped for and what actually occurred
                  can be disheartening, leaving you to question where things
                  went wrong. Yet, disappointment can also serve as a gentle
                  guide, encouraging you to reassess your expectations and learn
                  from the experience. It invites you to reflect on what truly
                  matters, and to adjust your goals in a way that honors both
                  your dreams and the reality of life’s imperfections. In
                  sharing your feelings with someone who listens, you can begin
                  to rebuild your hope and embrace a more balanced
                  perspective—one where every setback becomes a stepping stone
                  toward personal growth and greater resilience.
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
                    Embarrassed
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling embarrassed is a vulnerable experience that makes you
                  acutely aware of your perceived missteps or awkward moments.
                  It’s like a sudden flash of heat across your cheeks when you
                  believe you’ve drawn unwanted attention to yourself. Imagine a
                  situation where, in the midst of a social interaction, you
                  said or did something that felt out of place, leaving you with
                  a lingering sense of discomfort and self-consciousness. That
                  moment of embarrassment can echo in your thoughts long after
                  the event, making you focus on your imperfections. Yet, this
                  feeling also offers a pathway to growth—a chance to learn to
                  laugh at yourself and accept that everyone experiences moments
                  of awkwardness. Embracing embarrassment can lead to a more
                  compassionate view of yourself, recognizing that such moments
                  do not define your entire being. Over time, as you gain
                  perspective, these instances may even become cherished
                  reminders of your authenticity and the human ability to
                  overcome imperfections with humor and grace. Each experience,
                  however uncomfortable, is part of your journey toward greater
                  self-acceptance.
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
