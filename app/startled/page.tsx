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
              Startled feelings often come out of nowhere. Let’s slow down and process what just happened.

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
                  Shocked
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling shocked is an intense, immediate emotional reaction that leaves you momentarily disoriented when confronted with something utterly unexpected. It’s as if time pauses for a heartbeat as you try to process a sudden piece of information or an unforeseen event. Imagine opening the door to find news that completely upends your day—a revelation that makes your heart pound and your thoughts scatter. In that brief moment, the familiar world seems to tilt, and you may feel both physically and emotionally unsteady. Shock serves as your mind’s initial response to significant change, alerting you that something important has occurred. Although the sensation can be overwhelming, it is also an opportunity to pause and reflect on the new reality. By allowing yourself time to absorb the shock, you gradually move toward understanding and acceptance. Over time, the raw intensity of the shock transforms into clarity and insight, paving the way for personal growth and renewed strength. Embrace this experience as a reminder that life is full of surprises, and each unexpected moment can ultimately lead to deeper self-awareness.


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
                  <h2 className="text-2xl font-bold text-pink-500">Dismayed</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling dismayed is an emotional state marked by a deep sense of disappointment and sorrow when reality falls short of your expectations. It’s as if the weight of unmet hopes settles over you, dimming the light of optimism. Imagine pouring your heart into a project or relationship only to encounter an unexpected setback or betrayal that leaves you questioning your decisions. In that moment, a wave of dismay washes over you, and you may find yourself mulling over what could have been. This feeling can create an inner tension that lingers long after the initial event, making it hard to see a clear path forward. However, dismay also signals a need for reflection—an invitation to reassess your expectations and adjust your course. With gentle self-compassion and support from those who care, you can begin to transform dismay into a stepping stone for personal growth. By acknowledging your pain and learning from the experience, you gradually build resilience and pave the way for renewed hope and understanding, even when life doesn’t go as planned.
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
