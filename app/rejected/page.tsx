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
              Rejection can sting, but it doesn’t define your worth. Who or what triggered this feeling? Let’s work through it together.

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
                  Excluded
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling excluded is a painful experience that makes you feel as though you are on the outside looking in—a spectator rather than a participant in life’s meaningful moments. Imagine attending a social gathering or a group event where you sense that others share an unspoken connection, leaving you feeling isolated and separate. This exclusion can hurt deeply, as it challenges your need for belonging and acceptance. However, while it stings, this emotion also invites you to reflect on the types of relationships that truly nourish your soul. Consider whether the spaces you find yourself in are aligned with who you are and what you value. Sometimes, seeking out communities where your voice is heard can transform this painful feeling into an opportunity for growth. Reaching out to supportive friends or engaging in activities that resonate with your interests can slowly mend the gap between feeling excluded and finding a place where you truly belong. Remember, your uniqueness is your strength, and the right connections will celebrate you for exactly who you are.


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
                  <h2 className="text-2xl font-bold text-pink-500">Persecuted</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling persecuted is an intense emotion where you sense that life or those around you are unfairly targeting you. It’s as if every interaction is loaded with judgment or blame, leaving you on constant alert. Imagine a time when a series of events—perhaps at work or in personal relationships—made you feel singled out and unjustly criticized, so much so that you began to question your safety in those environments. This persistent sense of persecution can be overwhelming, fostering isolation and deep mistrust. However, while these feelings are valid, they also serve as signals to examine your boundaries and the dynamics in your relationships. Reflect on the incidents with care: Are there patterns that you can address through clear communication or seeking support? Engaging with a trusted friend, counselor, or therapist might help you unpack these experiences and reestablish a sense of fairness and security. Remember, feeling persecuted does not diminish your right to respect or your intrinsic value, and with compassionate guidance, you can find a way to reclaim your peace and confidence.


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
