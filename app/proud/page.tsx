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
              Pride can feel uplifting and empowering. What’s making you feel
              proud today? Let’s take a moment to celebrate it.
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
                  <h2 className="text-2xl font-bold text-blue-500">Successful</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling successful is a fulfilling emotion that arises when
                  you recognize and celebrate your achievements, no matter how
                  big or small. Imagine the quiet satisfaction of finishing a
                  challenging project or reaching a personal milestone—moments
                  when your hard work and determination finally pay off. This
                  sense of success is more than external recognition; it’s an
                  internal affirmation of your capabilities and the progress
                  you’ve made. Perhaps you recall a time when overcoming an
                  obstacle filled you with a profound sense of pride and the
                  motivation to pursue even greater goals. That rewarding moment
                  served as a reminder of your resilience and potential.
                  Embracing success helps you build confidence and encourages
                  you to set new challenges for yourself, knowing that each
                  achievement contributes to your personal growth. Let the
                  feeling of success inspire you to continue moving forward, to
                  celebrate every step of your journey, and to acknowledge that
                  your efforts are meaningful. Recognize that success is not
                  just a destination—it’s an ongoing process of learning,
                  growing, and becoming the best version of yourself.


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
                  <h2 className="text-2xl font-bold text-pink-500">Confident</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling confident is a warm, steady assurance that arises from
                  knowing your own worth and abilities. Picture yourself
                  stepping into a room with your head held high, secure in the
                  knowledge that you have much to offer. This emotion is not
                  about being boastful; it’s about embracing your strengths and
                  trusting your inner voice. Perhaps you recall a time when you
                  took a risk—maybe speaking up in a meeting or trying something
                  new—and, despite initial doubts, you succeeded. That
                  experience left you with a lingering sense of self-assurance
                  and the understanding that challenges can be overcome with
                  persistence. Confidence builds gradually, nurtured by small
                  victories and learning from setbacks. It encourages you to
                  push beyond your comfort zone and to pursue your goals with
                  determination. Let this confidence be your guide, reminding
                  you that every experience contributes to your growth. Embrace
                  your inner strength and allow your self-assurance to shine,
                  inspiring you to explore life’s opportunities with both
                  courage and optimism.
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
