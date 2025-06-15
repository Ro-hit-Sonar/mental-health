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
              Being critical is like holding a magnifying glass to every detail. What’s driving this scrutiny? Let’s balance this sharp focus with understanding and compassion.
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
                  Skeptical
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling skeptical is an emotional stance where you question the truth or intentions behind what you encounter, often as a way to protect yourself from potential disappointment. Imagine a scenario where you’re presented with a new idea or promise, and instead of accepting it immediately, your mind starts to critically analyze and search for inconsistencies. This healthy dose of skepticism can serve as a shield, prompting you to verify facts and guard against being misled. However, when skepticism becomes pervasive, it might hinder your ability to trust and engage openly with others. Reflect on those moments of doubt, considering what experiences might have shaped your cautious outlook. By examining your skepticism with curiosity rather than judgment, you can balance your natural inquisitiveness with openness. Over time, as you build a foundation of trust through honest interactions and transparent communication, you may find that your skepticism softens into a thoughtful questioning that enriches your understanding of the world while still protecting your well-being.
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
                  <h2 className="text-2xl font-bold text-pink-500">Dismissive</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling dismissive is an emotional response where you quickly push aside ideas, feelings, or interactions, often as a means of self-protection. Imagine a time when someone shared something meaningful or vulnerable with you, yet instead of engaging deeply, you found yourself brushing off their words as unimportant. This dismissiveness can act as a shield against discomfort, but it may also create distance in relationships and hinder genuine connection. Reflect on what might be causing this reaction—perhaps past experiences have taught you to guard your emotions closely, leading you to undervalue both your feelings and those of others. Recognize that while dismissing can feel safer in the moment, it also prevents the growth that comes from truly understanding and empathizing with diverse perspectives. Over time, by gently challenging yourself to remain open and to acknowledge the value in every interaction, you can gradually transform dismissiveness into a more compassionate and receptive stance. Embrace this journey as an opportunity for deeper connection and personal growth, enriching both your inner world and your relationships with others.


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
