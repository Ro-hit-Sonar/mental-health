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
                Tiredness is your body’s way of asking for rest. How can you
                recharge today? Let’s focus on self-care.
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
                  <h2 className="text-2xl font-bold text-blue-500">Sleepy</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Sleepy isn&apos;t just about needing a nap. Sometimes,
                  it&apos;s your body whispering, &quot;Hey, we&apos;ve been
                  running on fumes.&quot; You might feel like the world is
                  moving faster than you can keep up, your eyelids heavy, and
                  your thoughts foggy. Imagine this: You&apos;ve been working
                  long hours, juggling responsibilities, trying to stay
                  &quot;on&quot; all the time. You finally sit down to rest, and
                  your body melts into the chair—finally allowed to just be.
                  Sleepiness is your body&apos;s gentle rebellion against the
                  pressure to always stay productive. It&apos;s okay to slow
                  down. You&apos;re not lazy. You&apos;re human. Your body and
                  mind are asking for rest—not just physically, but emotionally.
                  Honor that. A good sleep can often do more than a long to-do
                  list ever could. Sometimes, the kindest thing you can do for
                  yourself is close your eyes.
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
                  <h2 className="text-2xl font-bold text-pink-500">
                    Unfocused
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Unfocused doesn’t always mean you’re distracted or careless.
                  It can be your brain’s way of saying, “I need a break.”
                  Thoughts don’t line up neatly, your mind drifts, and even
                  simple tasks feel like a mountain to climb. For example: You
                  sit down to finish something important, but you reread the
                  same sentence three times, your mind already off somewhere
                  else. You try harder, but the fog just thickens. You might
                  even blame yourself—but this isn’t about discipline. It’s
                  about mental overload or emotional undercurrent. Being
                  unfocused is a sign that your energy is scattered—maybe
                  because you haven’t had time to pause or process. So instead
                  of pushing harder, try getting curious. What’s taking up space
                  in your mind? What’s asking to be noticed? Bring yourself back
                  gently. Refocus doesn’t come from force—it comes from care. .
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
