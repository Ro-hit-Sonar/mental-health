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
              Feeling awful can feel consuming, but it’s temporary. What’s making you feel this way? Let’s sit with it and release it.

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
                  Nauseated
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling nauseated goes beyond a physical reaction—it can also be an emotional response when something strikes you as deeply offensive or unsettling. Imagine being confronted with a scene, behavior, or idea that is so contrary to your sense of right and beautiful that it sends a churn through your stomach and clouds your mind with revulsion. This profound reaction can feel overwhelming, as if your body is rebelling against an experience that offends your core values. Yet, this sensation is also a reminder of your inner integrity and the high standards you hold for what is acceptable in your life. Instead of dismissing this discomfort, take a moment to breathe and reflect on what exactly is triggering this strong response. Understanding the root of your nausea can help you set clearer boundaries and guide you toward environments that better align with your values. Over time, acknowledging these reactions with self-compassion can empower you to make choices that honor your sense of dignity and personal integrity.
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
                  <h2 className="text-2xl font-bold text-pink-500">Detestable</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling detestable is an overwhelming emotion that arises when you encounter something profoundly offensive or repulsive—so much so that it fills you with intense aversion. Imagine a scenario where a particular action or behavior, whether in a personal relationship or a public setting, triggers such a deep sense of dislike that you cannot help but recoil from it. This feeling can make you question not only the behavior you’re witnessing but also the broader context that allows such conduct to persist. Although it can be isolating to feel that something is utterly detestable, this reaction is also a powerful indicator of your strong inner values and boundaries. Reflect on the incident with a focus on what it reveals about what you cherish and stand for. By acknowledging this emotion, you empower yourself to distance from toxic influences and to advocate for environments that respect your principles. Over time, channeling your intense feelings into thoughtful dialogue or constructive action can transform detestability into a catalyst for positive change.


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
