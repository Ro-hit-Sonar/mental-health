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
                Feeling let down can be frustrating. Who or what disappointed
                you? Let’s reflect on how to set better expectations.
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
                  <h2 className="text-2xl font-bold text-blue-500">Betrayed</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling betrayed is a profound and disheartening experience,
                  often emerging when someone you deeply trusted lets you down
                  unexpectedly. Imagine sharing your vulnerabilities with a
                  close friend or partner, only to learn that the trust you
                  placed in them was misplaced. That sting of betrayal can leave
                  you questioning your judgment and wondering if your feelings
                  ever truly mattered. In such moments, the pain may feel
                  overwhelming, as if the foundation of your relationship or
                  self-worth has been shattered. Yet, while betrayal inflicts
                  deep hurt, it also offers an opportunity to reassess your
                  boundaries and understand what genuine trust should feel like.
                  Reflect on the incident with compassion for
                  yourself—acknowledge your pain, but also remind yourself that
                  you deserve honesty and respect. Seeking support from a
                  trusted confidant or professional can be a crucial step in
                  rebuilding your sense of self. Over time, the raw wound of
                  betrayal may soften, transforming into a resilient
                  understanding of your intrinsic worth. Every experience, even
                  the painful ones, contributes to your personal growth and
                  guides you toward healthier, more nurturing relationships.
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
                    Resentful
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling resentful is an emotion that builds when past hurts
                  and disappointments remain unaddressed, gradually turning into
                  a lingering bitterness. Imagine a scenario where you
                  repeatedly experience unfair treatment from someone—perhaps a
                  family member or coworker—and, over time, you begin to harbor
                  a deep sense of injustice. This persistent resentment can
                  weigh heavily on your heart, coloring your interactions and
                  limiting your ability to move forward with lightness. Yet,
                  resentment also signals that a boundary has been crossed or a
                  need remains unmet. Reflect on these experiences with gentle
                  honesty: what was it that hurt you so deeply? By identifying
                  the root causes, you create space for healing. Consider
                  expressing your feelings through conversation, journaling, or
                  therapy, and allow yourself the process of forgiveness—not as
                  a means of excusing the behavior, but to free yourself from
                  the burden of carrying anger. As you work through these
                  emotions, you may find that letting go of resentment gradually
                  opens the door to renewed inner peace and personal growth,
                  enabling you to foster relationships built on mutual respect
                  and understanding.
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
