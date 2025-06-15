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
              Repulsion often signals boundaries being crossed. What feels intolerable right now? Let’s process it together

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
                  Horrified
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling horrified is an intense emotional reaction that can leave you reeling when confronted with something so shocking it seems to shatter your sense of normalcy. Picture an experience where you witness an act or situation that defies all expectations of kindness and decency—so disturbing that it leaves you with an overwhelming mix of dread and disbelief. In that moment, your body may react with a racing heartbeat and a frozen sense of shock, as you struggle to process the magnitude of what you’ve seen. While this reaction can be deeply unsettling, it also underscores your profound capacity for empathy and your unwavering commitment to justice. Rather than burying the horror, consider it a signal to seek support—perhaps in a trusted conversation or reflective solitude—allowing you to slowly rebuild a sense of safety and understanding. Over time, as you process these intense emotions, the raw shock may give way to a resilient determination to uphold what is right, transforming horror into a stepping stone for personal and communal healing.


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
                  <h2 className="text-2xl font-bold text-pink-500">Hesitant</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling hesitant is an emotion that often emerges at the threshold of new experiences or challenging decisions—a cautious pause that balances curiosity with self-protection. Imagine being presented with an opportunity—a career change, a new relationship, or even a simple change in routine—and feeling an inner tug of uncertainty that makes you pause before taking the leap. This hesitation can be both a safeguard and a barrier, alerting you to potential risks while also holding you back from growth. Reflect on past instances where your initial hesitation allowed you to gather more information and prepare more thoroughly before proceeding, ultimately leading to positive outcomes. At the same time, consider whether lingering doubts might be preventing you from embracing change wholeheartedly. By examining the roots of your hesitation—whether they stem from past hurts, fear of the unknown, or self-doubt—you can begin to gently challenge these limits. Over time, with self-compassion and gradual exposure to new experiences, your hesitance can transform into a thoughtful, measured approach to life’s opportunities, balancing caution with the courage to step forward.


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
