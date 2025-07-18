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
            Explore Your Playful Side
          </h2>

          <div className="w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Feeling playful, huh? Perhaps you&apos;re experiencing a cheeky
                spark or a light-hearted sense of fun. Let&apos;s lean into that
                energy.
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
                  <h2 className="text-2xl font-bold text-blue-500">Aroused</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling aroused in the context of happiness isnt solely about physical sensations—its a gentle stirring of passion that awakens all your senses to the beauty of life. Imagine waking early on a serene morning as soft sunlight filters through your window. In that quiet moment, a spark of excitement unfurls within you—a subtle yet vibrant energy that signals possibility and renewal. Perhaps you recall a time when a kind compliment or an unexpected melody lifted your spirit, leaving you with a warm glow that carried you through the day. This kind of arousal isnt intense in a physical sense but is more a gentle, inspiring call to be alive and engaged. It invites you to explore the small wonders that spark creativity and passion. Allow yourself to savor that delicate surge, recognizing it as a reminder that life is full of moments designed to uplift you. Embrace this feeling as a nudge to explore new experiences and cherish the inner light that makes every day special.


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
                  <h2 className="text-2xl font-bold text-pink-500">Cheeky</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling cheeky is like sharing a playful secret with the universe—a mischievous wink that lightens your mood and brings an infectious smile to your face. Imagine a moment when you and a close friend exchanged a series of teasing remarks over coffee, the conversation bubbling with unexpected humor. That burst of light-hearted irreverence lets you temporarily step away from everyday seriousness and enjoy the freedom of being playfully spontaneous. Perhaps you remember a time when you dared to make a gentle, rule-bending joke at just the right moment, and the resulting laughter boosted your confidence and camaraderie. This cheeky energy is a reminder that life need not always be serious; sometimes, a little mischief is the perfect antidote to stress. It encourages you to balance responsibility with fun, gently nudging you to let go and enjoy lifes quirks. Let the playful spirit of being cheeky inspire you to seek joy in the unexpected and to embrace every moment with a smile.
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
