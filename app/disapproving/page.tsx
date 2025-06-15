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
              Feeling disapproving means your values might be clashing. Let’s understand what’s at odds and how to address it.

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
                  Judgmental
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling judgmental is an emotion that can creep in when you find yourself harshly evaluating others, often without realizing it’s a mirror for your own insecurities. Imagine a situation where, during a conversation, you quickly form opinions about someone’s choices or actions—perhaps criticizing a friend’s unconventional lifestyle or a colleague’s work methods. That reflexive judgment may feel like a way to protect your own vulnerabilities, yet over time it can create distance and hinder genuine connection. Recognize that this tendency might be reflecting unresolved feelings or personal expectations you hold for yourself. Consider pausing to ask, “What am I really afraid of?” and explore whether your critical stance is a defense mechanism against your own uncertainties. With gentle self-reflection, you can begin to replace judgment with curiosity and empathy. By understanding that everyone is on their own unique journey, you open the door to more compassionate interactions. Embracing this shift not only softens the edge of judgment but also deepens your connection with both others and your true self.


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
                  <h2 className="text-2xl font-bold text-pink-500">Embarrassed</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling embarrassed is a common, yet deeply human, experience when you believe you’ve misstepped in front of others. Picture a moment when an offhand remark or a clumsy gesture in a social setting suddenly makes you the focus of unwanted attention—your cheeks flush and your heart races as you become hyper-aware of every gaze. This acute self-consciousness can linger long after the moment has passed, leaving you to replay the incident in your mind. Yet, embarrassment is also a sign of your sensitivity to social connection and your desire to be seen in a positive light. Reflect on a time when, after an embarrassing moment, you managed to laugh it off or found solace in the understanding of a friend. Recognize that everyone experiences these moments, and they are not a measure of your worth. By embracing embarrassment with self-compassion and humor, you can transform these fleeting instances into opportunities for growth and a deeper understanding of your own resilience..
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
