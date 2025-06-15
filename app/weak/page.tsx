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
              Feeling weak can be humbling, like standing in the shadow of a mountain. What small step can we take to regain your strength? Let’s honor where you are and build from here
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
                  Worthless
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling worthless is a deeply painful emotion that can leave you questioning your very existence. Imagine a time when repeated setbacks or harsh criticisms led you to believe that you have nothing to offer, as if your presence in the world were an error. This crushing sense of worthlessness can isolate you, making it hard to see the light amid the darkness. However, while this emotion feels overwhelming, it is not a reflection of your true value. Often, feelings of worthlessness arise from external judgments or internalized negative beliefs that do not capture the full picture of who you are. Consider reaching out to someone who can help you explore these thoughts with compassion, or reflect on past moments where you made a positive impact, no matter how small. Over time, by challenging these destructive beliefs and embracing self-compassion, you can begin to recognize that every person—including you—holds intrinsic worth. In acknowledging your struggles and seeking support, you take the first brave steps toward rediscovering your inherent value and rebuilding a more nurturing self-image.


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
                  <h2 className="text-2xl font-bold text-pink-500">Insignificant</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling insignificant is an emotion that can leave you feeling unnoticed and unvalued, as if your contributions fade into the background of life’s grand tapestry. Imagine a moment when your ideas or efforts were overlooked, leaving you with a lingering sense that you don’t matter. This feeling can chip away at your confidence, making everyday interactions seem unimportant. Yet, insignificance is often a reflection of unmet needs for recognition rather than an objective truth about your value. Reflect on times when you did make a meaningful impact—even if it went unacknowledged by others—and consider that every action, no matter how small, contributes to the larger whole. Sometimes, connecting with a supportive community or sharing your feelings with someone who truly listens can help remind you of your importance. With time and self-reflection, you can learn to see that your presence is significant, not because of external validation, but because you bring unique qualities to the world that no one else can. Embrace the journey toward recognizing your intrinsic worth, one compassionate step at a time.


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
