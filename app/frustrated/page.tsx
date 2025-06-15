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
              Frustration means something isn’t going as expected. Let’s talk about what’s blocking you and find ways to move forward.

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
                  Annoyed
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling annoyed is a common, yet telling, emotional response that arises when minor irritations accumulate and disrupt your peace. Imagine a day filled with small, seemingly insignificant events—a delayed appointment, a careless comment, or a repetitive inconvenience—that collectively push your patience to its limits. This annoyance can quickly snowball, overshadowing the brighter parts of your day. Yet, this emotion is also an invitation to reflect on your boundaries and triggers. What is it about these situations that provokes such a reaction? Sometimes, simply pausing to acknowledge your irritation and taking a few deep breaths can help diffuse the tension. Consider whether there’s an underlying need that isn’t being met, or if these moments are highlighting a desire for more calm and order in your life. With gentle self-reflection, you can learn to manage annoyance in a way that fosters better self-awareness and healthier interactions, transforming fleeting irritation into a valuable signal for personal growth and mindful living.


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
                  <h2 className="text-2xl font-bold text-pink-500">Infuriated</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling infuriated is an extreme form of anger—an overwhelming surge that can feel as if it’s consuming your entire being. Imagine a moment when a deep injustice or repeated mistreatment finally pushes you to the brink, and your anger erupts like a violent storm. In that intense instant, your thoughts may race and your body might tense, driven by a desperate urge to set things right. This level of infuriation, while powerful, can also cloud your judgment and lead to impulsive reactions that you might later regret. However, amid the tempest of anger, there is an opportunity to pause and channel this energy constructively. Consider stepping away from the situation to breathe deeply, engage in physical activity, or speak with someone who can help you process the intensity of your feelings. Over time, learning to understand the triggers behind your infuriation can empower you to transform this extreme emotion into a catalyst for positive change and self-advocacy, ultimately reinforcing your commitment to both fairness and your own well-being.


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
