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
              Feeling lonely can be tough. It’s okay to admit it. Let’s reflect on this feeling and explore how to reconnect

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
                  Abandoned
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling abandoned can be like standing in a crowded room and yet feeling completely invisible. It’s that deep sense of being left behind when someone important suddenly disappears from your life. Imagine a time when a close friend or loved one stopped reaching out without explanation, leaving you with an aching emptiness and questions about your own worth. In that moment, every quiet hour feels heavy, as if the world has moved on without you. Yet, within that painful void, there is also an invitation to reconnect with your inner strength. Acknowledge the hurt and allow yourself to grieve the loss, but also consider this an opportunity to nurture new bonds—ones that appreciate and honor who you are. Sometimes, reaching out to someone who listens or seeking professional guidance can help rebuild your sense of belonging. Remember that your value is intrinsic and isn’t diminished by someone else’s absence. In time, the sting of abandonment can soften into a resilient understanding that you are worthy of love and connection, regardless of the gaps others may leave in your life.


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
                  <h2 className="text-2xl font-bold text-pink-500">Isolated</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                Feeling isolated is like being on an island in the midst of a vast ocean—a state where even in a crowd, you feel entirely cut off from meaningful connection. Imagine being at a social event, surrounded by chatter and laughter, yet feeling as though a glass wall separates you from truly joining in. This isolation can be deeply painful, making you question whether anyone can truly understand your inner world. You might recall a time when your thoughts and feelings felt so different from those around you that reaching out seemed impossible. Yet, isolation also offers a moment for introspection—a chance to reconnect with yourself and to discover what truly nourishes your spirit. Consider that even the most solitary experiences can lead to personal growth, prompting you to seek out communities or relationships that resonate with your true self. By reaching out, even just one step at a time, you open the door to authentic connection. Over time, the sense of isolation may recede as you find that there are others who share your experiences and are ready to welcome you in.


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
