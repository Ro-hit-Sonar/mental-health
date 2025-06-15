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
              Aggression is often a mask for deeper feelings. What’s fueling this intensity? Let’s dig deeper to find balance.

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
                  Provoked
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling provoked is an emotional response that surfaces when something triggers your anger, often pushing you to react impulsively. Imagine a scenario where a seemingly minor remark or gesture feels like a personal challenge to your values, igniting a spark of irritation that quickly escalates. This sudden surge can leave you feeling overwhelmed and caught off guard, as if your calm has been abruptly shattered. Yet, within the turmoil of being provoked, there is an opportunity to pause and reflect on the underlying causes of your reaction. Ask yourself what deeper needs or insecurities this trigger might be touching. By taking a moment to breathe and regain composure—perhaps through a short walk or a few mindful breaths—you can choose a more thoughtful response. With practice, you may find that understanding these triggers helps you navigate future moments of provocation with greater clarity, transforming a reactive impulse into a path for personal growth and improved emotional balance.


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
                  <h2 className="text-2xl font-bold text-pink-500">Hostile</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling hostile often manifests as an internal barrier, where every interaction seems charged with tension and defensiveness. Imagine entering a situation with a preemptive sense of conflict—where past wounds or mistrust make you brace for criticism or attack, even before any words are exchanged. This state of hostility can create a chasm between you and those around you, isolating you in a cycle of perpetual suspicion. Yet, this guarded stance is also a signal from within: a call to examine the roots of your defensiveness. Reflect on moments when hostility overtook you, and consider what past hurts or fears might be fueling that reaction. Seeking a calm space—perhaps through meditation or a candid conversation with a trusted friend—can help you process these emotions. Over time, as you work to understand and heal these deeper wounds, you may find that the walls of hostility begin to soften, opening the door to more authentic and healing connections with others while reaffirming your own sense of safety and self-worth.


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
