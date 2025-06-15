"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Brain, Lightbulb, ArrowRight } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <Heart className="w-12 h-12 text-pink-500" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Understanding the Emotion Wheel
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A powerful tool designed to help you navigate and understand your
            emotional landscape
          </p>
        </motion.div>

        {/* What is Emotion Wheel Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-gray-900 rounded-xl p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-4 text-white flex items-center">
              <Brain className="w-6 h-6 mr-2 text-pink-500" />
              What is the Emotion Wheel?
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Created by psychologist Robert Plutchik, the Emotion Wheel is a
              visual tool that helps identify and understand emotions. It
              organizes eight primary emotions in a circular format, showing how
              they relate to each other and how they can intensify or blend into
              more complex feelings.
            </p>
          </div>
        </motion.div>

        {/* Primary Emotions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-white flex items-center">
            <Lightbulb className="w-6 h-6 mr-2 text-pink-500" />
            Primary Emotions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Joy",
              "Sadness",
              "Anger",
              "Fear",
              "Disgust",
              "Surprise",
              "Anticipation",
              "Trust",
            ].map((emotion, index) => (
              <motion.div
                key={emotion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="bg-gray-900 rounded-lg p-4 text-center hover:bg-gray-800 transition-colors"
              >
                <p className="text-pink-500 font-semibold">{emotion}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How to Use Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-white">
            How to Use the Emotion Wheel
          </h2>
          <div className="space-y-6">
            {[
              {
                title: "1. Identify Core Emotions",
                description:
                  "Start at the center of the wheel and find the basic emotion that best matches your current feeling.",
              },
              {
                title: "2. Explore Related Emotions",
                description:
                  "Move outward from the core emotion to see how it intensifies or blends with other emotions.",
              },
              {
                title: "3. Gain Emotional Clarity",
                description:
                  "Use the wheel to better understand the specific nuances of your emotional state.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="bg-gray-900 rounded-lg p-6 flex items-start"
              >
                <ArrowRight className="w-6 h-6 text-pink-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4 text-white">
            Benefits of Using the Emotion Wheel
          </h2>
          <ul className="text-gray-300 space-y-3">
            <li>• Better emotional awareness and understanding</li>
            <li>• Improved ability to communicate feelings</li>
            <li>• Enhanced emotional intelligence</li>
            <li>• More effective emotional regulation</li>
            <li>• Deeper self-reflection and personal growth</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
