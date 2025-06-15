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
              Despair can feel like an endless night, but even the darkest nights have stars. Let’s search for the light together.

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
                  Grief
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling grief is a profound and complex emotion that emerges in the wake of loss—whether of a loved one, a cherished relationship, or a significant life phase. Grief can overwhelm you like a tidal wave, leaving behind a trail of sorrow, longing, and sometimes confusion about how to move forward. Imagine a time when the absence of someone dear transformed your world into a quiet, aching space, where every familiar sound and scent evoked bittersweet memories. In the midst of grief, each day can feel heavy, and even simple tasks may seem insurmountable. Yet, grief is also a natural, albeit painful, part of life—a process that honors the depth of your love and attachment. As you journey through grief, allow yourself to feel the pain without rushing toward healing. Seek solace in supportive relationships, where sharing your memories and tears can gradually lighten the load. With time, grief can transform from a paralyzing force into a tender reminder of the meaningful connections you once experienced, guiding you gently toward eventual healing and acceptance.


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
                  <h2 className="text-2xl font-bold text-pink-500">Powerless</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling powerless is an unsettling experience, marked by the sense that you have little control over the events shaping your life. It’s as if you’re caught in a storm where every effort to change your circumstances feels futile. Imagine a moment when, despite your best attempts, obstacles seemed insurmountable, leaving you with the impression that fate alone dictates your path. This deep-seated helplessness can drain your energy and dim your hope for the future. However, within that feeling lies a quiet call for reclaiming your agency, even if the steps seem small at first. Reflect on the minor victories that remind you of your inner strength—moments when you managed to steer through a challenge or make a small decision that changed your day. Seeking support from a trusted friend, mentor, or therapist can provide the guidance needed to rebuild your sense of control. Remember, every effort counts, and even in the midst of powerlessness, you hold the capacity to slowly assert your influence over your life’s direction.


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
