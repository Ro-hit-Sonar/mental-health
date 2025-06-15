"use client";

import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="bg-black min-h-screen">
      <div className="container mx-auto px-4 py-12">
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
                Stress is your body asking for relief. What's piling up? Let's
                break it down and ease the pressure.
              </h1>
              <p className="text-gray-400 text-lg">
                The end result should be one amongst these two!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Overwhelmed Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl p-8 shadow-xl border border-blue-500/20"
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold text-blue-500">
                    Overwhelmed
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Overwhelmed is that feeling when everything hits at once.
                  Thoughts, emotions, tasks, expectations—they all rush in like
                  a tidal wave, and you're just trying to keep your head above
                  water. It's not that you're weak. It's that you're carrying
                  too much. Imagine this: You're juggling work, personal life,
                  emotions you've been pushing down, and suddenly even the
                  smallest task feels impossible—like replying to a message or
                  doing the dishes. You pause and ask yourself, "Why can't I
                  handle this?" But the truth is—you're already handling more
                  than most people see. Being overwhelmed isn't a flaw. It's a
                  signal—a gentle nudge from your mind and body asking you to
                  slow down, to breathe, to let go of what you can. It's okay to
                  take breaks. It's okay to ask for help. You don't have to
                  carry it all alone.
                </p>
              </motion.div>

              {/* Out of Control Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-xl p-8 shadow-xl border border-pink-500/20"
              >
                <div className="flex items-center mb-6">
                  <h2 className="text-2xl font-bold text-pink-500">
                    Out of Control
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling out of control can be deeply unsettling. It's like
                  life is moving, decisions are being made, situations are
                  unfolding—and you're just a passenger. There's a storm
                  happening, and you've lost the wheel. Here's an example:
                  You're in a heated argument, your heart's racing, words are
                  flying out before you can catch them. Or maybe it's a wave of
                  anxiety that shows up uninvited, and no amount of logic can
                  calm it down. That's what "out of control" feels
                  like—disconnected from your own grounding. But even when
                  things feel wild on the surface, your core is still
                  there—stable, waiting. Sometimes control isn't about holding
                  tighter, but learning when to release. You don't have to have
                  it all figured out right now. Start with one breath, one
                  choice, one small moment of stillness.
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
      </div>
    </div>
  );
};

export default Page;
