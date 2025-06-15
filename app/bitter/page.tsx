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
                Bitterness often stems from unresolved hurt. What’s lingering
                beneath the surface? Let’s work on letting it go.
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
                    Indignant
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling indignant arises when you witness or experience an
                  injustice that sharply contradicts your core values, sparking
                  a righteous anger that demands fairness. Imagine a
                  situation—perhaps at work or within a personal
                  relationship—where you or someone you care about is treated
                  unfairly, and you feel an immediate surge of indignation. This
                  emotion isn’t about uncontrolled anger; rather, it reflects a
                  deep commitment to integrity and respect. That inner fire
                  signals that something vital has been compromised and that
                  your boundaries need reaffirmation. In the heat of
                  indignation, consider channeling your energy into constructive
                  dialogue or positive action. Reflect on how standing up for
                  what is right not only protects your self-worth but also
                  fosters a more just environment. By expressing your feelings
                  calmly and assertively, you can help turn the sting of
                  injustice into a catalyst for meaningful change. Over time,
                  embracing indignation as a call to advocate for fairness can
                  empower you to build stronger, more respectful connections
                  with others while honoring your own values.
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
                  <h2 className="text-2xl font-bold text-pink-500">Violated</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling violated is an intense, deeply unsettling emotion that
                  emerges when your personal boundaries are breached, leaving
                  you with a profound sense of injustice and vulnerability.
                  Picture a moment when someone disregarded your feelings or
                  crossed a line you hold sacred, triggering a shock that leaves
                  you reeling. The experience of feeling violated can shake your
                  sense of security, making it difficult to trust again. Yet,
                  within this painful emotion lies an important message: your
                  boundaries matter, and they must be honored. Reflect on the
                  incident with a compassionate eye toward yourself—acknowledge
                  the hurt without blaming your own worth. Seeking support from
                  trusted individuals or a professional can be crucial in
                  processing the pain and reclaiming your sense of safety. Over
                  time, as you work to rebuild trust in your relationships and
                  in yourself, the raw sting of violation can gradually
                  transform into a determined commitment to protect your
                  well-being. Remember, feeling violated is not a reflection of
                  your value, but a call to assert your right to respect and
                  personal integrity.
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
