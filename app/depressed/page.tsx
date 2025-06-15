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
              Depression can feel heavy, like carrying the world on your shoulders. Let’s sit with this weight and begin to unpack it.

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
                  Empty
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling empty is an experience that can leave you with a profound sense of hollowness, as if a vital part of you is missing. It’s like wandering through life in a muted world, where the colors and sounds seem to have faded away. Imagine a time when activities and relationships that once brought you joy now feel devoid of meaning, leaving you questioning the purpose of your everyday existence. This emptiness might make you feel disconnected from yourself and those around you, creating an internal void that seems insurmountable. Yet, in this quiet space, there also lies an opportunity for deep self-reflection and renewal. Sometimes, acknowledging that emptiness is the first step toward understanding what has been overlooked in your life. Consider reaching out for support, whether through close friends, creative expression, or professional guidance, to slowly fill that void with new experiences and insights. In time, this process of self-discovery can lead you to a renewed sense of purpose and vitality, helping you reconnect with the parts of yourself that are waiting to be rediscovered.


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
                  <h2 className="text-2xl font-bold text-pink-500">Inferior</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling inferior is an emotion that casts a shadow over your self-worth, making you feel lesser than others and doubting your own abilities. It’s like constantly measuring your worth against an ever-changing standard, where every success of someone else intensifies your inner critic. Imagine a moment when you compared yourself to a peer—perhaps at work or in a personal setting—and the weight of that comparison left you feeling small and insignificant. That persistent sense of inferiority can seep into your daily thoughts, hindering your ability to celebrate your unique strengths. However, it’s important to remember that each person’s journey is distinct, and your value is inherent, not defined by comparisons. Consider this feeling as an invitation to focus on your personal growth and accomplishments, no matter how modest they may seem. Embrace support from those who see your true potential, and allow yourself to recognize that you are deserving of success and kindness. Over time, challenging these negative comparisons can help you build a more compassionate and confident view of yourself.


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
