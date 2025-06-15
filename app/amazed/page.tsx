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
              Amazement is like a burst of wonder. What’s leaving you in awe today? Let’s savor this feeling.

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
                  Astonished
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling astonished is a vibrant experience marked by a profound sense of wonder and surprise that fills you with both admiration and curiosity. It’s the emotion you feel when reality exceeds your expectations in a dazzling display of beauty or brilliance. Imagine witnessing a breathtaking natural scene—a radiant sunset, a majestic mountain view, or an unexpected act of kindness—that stops you in your tracks and leaves you momentarily speechless. In that instant, your heart may quicken, and your mind races to capture every detail of the awe-inspiring moment. Astonishment invites you to embrace the unexpected and to appreciate the magic hidden in everyday life. Rather than being overwhelmed by the novelty, you allow it to spark joy and fuel your desire for exploration. Over time, these moments of astonishment can serve as powerful reminders of the beauty that exists around you, encouraging you to remain open and receptive to life’s endless wonders while nurturing a deep, abiding sense of gratitude.


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
                  <h2 className="text-2xl font-bold text-pink-500">Awe</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling awe is a deeply moving emotion that arises when you stand before something vast and magnificent—something that fills you with both humility and inspiration. It is the sensation of encountering a moment or scene so grand that it transcends ordinary experience, inviting you to step outside your everyday concerns. Imagine gazing up at a star-studded sky on a clear night or witnessing the raw power of a cascading waterfall, where the sheer scale of nature makes you feel both infinitesimal and intimately connected to the universe. In that moment, your breath catches, and you are overcome with a mixture of wonder and reverence. This state of awe opens your heart to the infinite possibilities that life holds and deepens your appreciation for the mysteries that surround you. Embrace these moments as they have the power to renew your spirit, inspire creativity, and remind you of the interconnectedness of all things. Over time, cultivating awe can transform your perspective, leading to a richer, more meaningful experience of life.


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
