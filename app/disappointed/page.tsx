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
              Disappointment happens when reality doesn’t meet expectations. Let’s unpack this and find a way forward.

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
                  Appalled
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling appalled is an intense reaction that arises when you encounter something that starkly contradicts your values or sense of decency. Imagine witnessing an act of cruelty or injustice—perhaps a moment when someone’s behavior was so harsh or unethical that it left you with a profound sense of shock and dismay. In that instant, your heart may sink, and you find yourself questioning how such negativity could exist in the world around you. While this overwhelming response can be deeply unsettling, it also underscores your strong moral compass and commitment to fairness. Instead of pushing away the discomfort, consider it a signal to examine what matters most to you. Allow yourself to process the shock by talking with someone you trust or reflecting in a quiet space. Over time, channeling your appalled feelings into constructive action—such as advocating for change or simply reaffirming your values—can help transform distress into a powerful drive for personal and social improvement.


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
                  <h2 className="text-2xl font-bold text-pink-500">Revolted</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling revolted is a visceral, almost instinctual reaction when you’re confronted with something profoundly disturbing or repulsive. Imagine encountering a situation that immediately triggers a strong sense of disgust—perhaps an unethical act or behavior that clashes with your deepest values. That gut-level reaction can leave you physically unsettled and emotionally shaken, as if every fiber of your being is rejecting the experience. Yet, this powerful emotion also serves as a clear signal of what you stand for. It invites you to acknowledge your inner boundaries and to reassess the environments or situations that may be compromising your well-being. By reflecting on the source of your revulsion, you may find clarity about your core values and what changes are needed in your life or community. Sharing your experience with someone who understands can help you process the intense discomfort. Over time, channeling your revolted feelings into constructive actions or discussions can empower you to stand up for your beliefs while safeguarding your inner peace.
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
