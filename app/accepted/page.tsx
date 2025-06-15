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
                Feeling accepted is like being home within yourself. Who or what
                made you feel this way? Let’s honor that connection. The End
                result should be one amonst these two !
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
                    Respected
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling respected is a deeply affirming emotion that nurtures
                  your sense of self-worth and belonging. It’s the gentle
                  acknowledgment from others that your opinions, actions, and
                  presence matter. Imagine a moment when a friend or colleague
                  listened intently to your thoughts and expressed genuine
                  admiration for your perspective. That warm validation creates
                  a profound feeling of being seen and appreciated. Perhaps you
                  recall an instance when your efforts, whether in your career
                  or personal life, were recognized, leaving you with a sense of
                  pride and honor. This recognition, however subtle, can
                  reinforce your identity and motivate you to continue being
                  authentic. Embracing the feeling of being respected encourages
                  you to value your own contributions and to seek connections
                  where mutual appreciation is the norm. It serves as a reminder
                  that respect is not only given but also earned through
                  kindness, integrity, and genuine engagement with others. Let
                  this affirmation guide you to build relationships that honor
                  your true self and remind you of the inherent value you bring
                  to the world.
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
                  <h2 className="text-2xl font-bold text-pink-500">Valued</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling valued is a profoundly nurturing emotion that fills
                  your heart with a sense of significance and belonging. It is
                  the quiet assurance that your unique qualities and
                  contributions are appreciated by those around you. Picture a
                  time when someone took a moment to thank you sincerely for
                  your help, or when a mentor recognized your potential during a
                  challenging phase. Such moments can illuminate your
                  self-worth, making you feel cherished and important. This
                  sense of being valued goes beyond surface-level
                  compliments—it’s a deep, affirming acknowledgment that you
                  matter. Perhaps you remember an occasion when you felt truly
                  seen, and that validation inspired you to continue growing and
                  giving your best. Embracing this emotion reminds you that
                  every effort you make contributes to a larger tapestry of
                  human connection. It encourages you to nurture your
                  relationships and to hold close the knowledge that you are
                  appreciated. Let the feeling of being valued be a beacon,
                  inspiring you to share your gifts with confidence and to
                  foster a world where every individual feels essential and
                  loved.
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
