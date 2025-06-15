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
              Confusion means something doesn’t quite add up. Let’s unpack this and find clarity.

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
                  Disillusioned
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling disillusioned arises when a cherished belief or ideal crumbles, leaving you with a profound sense of loss and disappointment. It’s the moment when the world you thought you knew shifts into a more complex, sometimes harsher reality. Imagine holding a vision of trust and integrity about someone or something—only to discover that the reality is riddled with contradictions and unmet promises. This realization can be jarring, as if the bright lens through which you once saw the world has suddenly turned opaque. Disillusionment can trigger an inner conflict as you struggle to reconcile your expectations with the new truth. Yet, within this painful process lies the potential for deep personal insight. By confronting disillusionment head-on, you open yourself up to a more authentic understanding of both yourself and the world. With time, and perhaps with the support of empathetic friends or a trusted mentor, you can rebuild your sense of hope on a firmer, more realistic foundation, transforming disillusionment into a catalyst for growth.


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
                  <h2 className="text-2xl font-bold text-pink-500">Perplexed</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling perplexed is the experience of being caught in a maze of uncertainty and confusion, where the answers you seek seem just out of reach. It’s as if you’re standing at a crossroads without a map, each path shrouded in mystery. Imagine encountering a situation or a behavior that defies explanation—perhaps a sudden shift in a friend’s attitude or a puzzling turn in your work project—that leaves your mind swirling with questions. In that moment, the familiar becomes strange, and your thoughts may feel tangled as you try to make sense of it all. While perplexity can be unsettling, it also invites you to explore deeper truths about your world. Consider it a gentle prompt to engage in inquiry and reflection. By seeking out different perspectives, discussing your confusion with trusted individuals, or simply giving yourself the time to process, you can gradually unravel the complexities that confound you. Over time, what once felt impenetrable may transform into a richer, more nuanced understanding of life’s intricate tapestry.


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
