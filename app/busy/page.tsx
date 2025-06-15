"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
              Pressured
            </h2>
            <p className="text-gray-300 mb-6">
              When you&apos;re feeling pressured, it&apos;s like there&apos;s
              too much on your plate. You might feel:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>Overwhelmed by responsibilities</li>
              <li>Like you can&apos;t keep up</li>
              <li>Stressed about deadlines</li>
              <li>Like you&apos;re &quot;not enough&quot;</li>
            </ul>
            <p className="text-gray-300">
              Remember that it&apos;s okay to take a step back and prioritize
              what&apos;s most important.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-xl"
          >
            <h2 className="text-2xl font-semibold mb-4 text-pink-500">
              Rushed
            </h2>
            <p className="text-gray-300 mb-6">
              Feeling rushed means you&apos;re trying to do too much too
              quickly. You might notice:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2 mb-6">
              <li>You&apos;re always in a hurry</li>
              <li>Can&apos;t focus on one thing</li>
              <li>Feel like you&apos;re &quot;behind&quot;</li>
              <li>Everything feels urgent</li>
            </ul>
            <p className="text-gray-300">
              Take a moment to breathe and remember that not everything needs to
              be done right now.
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
            When you&apos;re feeling busy, remember to:
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2 max-w-md mx-auto">
            <li>Take breaks when you need them</li>
            <li>Prioritize your tasks</li>
            <li>Ask for help when needed</li>
            <li>Remember that you&apos;re doing your best</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
