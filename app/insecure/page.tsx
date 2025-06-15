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
              Insecurity can feel like standing on shaky ground. Let’s look deeper to find the source and rebuild your confidence.

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
                  Inadequate
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling inadequate is an emotion that whispers you aren’t enough—whether in your abilities, achievements, or worth. Imagine a moment when, after comparing yourself to someone who seems to excel effortlessly, you are struck by a heavy sense of self-doubt. This feeling can make even your accomplishments seem diminished and can create a barrier to pursuing new challenges. The constant inner critic may magnify flaws and minimize successes, leaving you feeling stuck. Yet, this emotion also holds a mirror to your unrecognized strengths. It can be a catalyst for self-reflection, inviting you to question the unrealistic standards you may have internalized over time. Reach out for support and gently remind yourself that every person’s journey is unique. Celebrate even small victories, and consider professional guidance to help reshape your inner narrative. With time and mindful self-compassion, you can start to recognize that feeling inadequate is not a permanent truth but rather a moment in your journey—a call to nurture self-acceptance and build a more resilient, empowered sense of self.


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
                  <h2 className="text-2xl font-bold text-pink-500">Inferior</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling inferior casts a long shadow over your self-esteem, making you believe you’re somehow lesser than those around you. Imagine being in a social or professional setting where comparisons feel inescapable, and every achievement of others seems to highlight your own perceived shortcomings. This constant self-comparison can leave you feeling small and unworthy, undermining your natural talents and contributions. Yet, it’s important to remember that the sense of inferiority is often rooted in unrealistic expectations and external pressures rather than your true value. Reflect on your unique strengths and the qualities that make you who you are. Acknowledging and celebrating even the smallest successes can begin to erode this harsh self-judgment. Consider seeking the perspective of trusted friends or mentors who can remind you of your intrinsic worth. Over time, by challenging negative thoughts and fostering a more balanced self-view, you can gradually replace feelings of inferiority with self-respect and confidence. Remember, your worth is not measured by comparison but by the inherent value you bring to every moment of your life.


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
