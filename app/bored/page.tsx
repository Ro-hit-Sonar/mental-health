"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
// import { Heart, Sparkles, Smile, Star, Brain } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
        >
          Explore Your Emotion
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-4 text-pink-500">
              Indifferent
            </h2>
            <p className="text-gray-300 mb-6">
              When you&apos;re feeling indifferent, it&apos;s like nothing
              really matters. You might feel:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Nothing seems interesting or engaging</li>
              <li>You&apos;re not excited about anything</li>
              <li>Everything feels &quot;meh&quot; or &quot;whatever&quot;</li>
              <li>You&apos;re not motivated to do anything</li>
            </ul>
            <p className="text-gray-300">
              It&apos;s okay to feel this way sometimes. Try to find something
              that used to interest you or try something completely new.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-4 text-pink-500">
              Apathetic
            </h2>
            <p className="text-gray-300 mb-6">
              Apathy is when you feel emotionally detached. You might notice:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>You don&apos;t care about things you used to care about</li>
              <li>It&apos;s hard to feel excited or passionate</li>
              <li>You&apos;re going through the motions without feeling</li>
              <li>Everything seems pointless or meaningless</li>
            </ul>
            <p className="text-gray-300">
              Remember that this feeling is temporary. Try to connect with
              others or engage in activities that used to bring you joy.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <h2 className="text-2xl font-semibold mb-4 text-pink-500">
            Take Care
          </h2>
          <p className="text-gray-300 mb-8">
            Feeling bored or apathetic is a sign that you might need some
            stimulation or change in your routine. Try:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 max-w-md mx-auto">
            <li>Learning something new</li>
            <li>Changing your environment</li>
            <li>Connecting with friends</li>
            <li>Finding a new hobby or interest</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
