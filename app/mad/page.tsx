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
                Feeling mad can mean your boundaries were crossed. Lets identify
                what happened and how to assert yourself.
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
                  <h2 className="text-2xl font-bold text-blue-500">Furious</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling furious is an intense surge of anger that can feel
                  all-encompassing, as if a storm has been unleashed within you.
                  Imagine a scenario where repeated injustices or a significant
                  betrayal culminate in an overwhelming eruption of fury,
                  clouding your judgment and challenging your sense of control.
                  This furious energy, while powerful, signals that something
                  deeply important to you has been compromised. In the midst of
                  such intense emotion, it can be helpful to pause and find a
                  safe outlet—perhaps through physical exercise, creative
                  expression, or a moment of mindful breathing—to allow the
                  storm to pass. Reflect on what triggered your fury and
                  consider what unmet needs or boundaries were crossed. With
                  compassionate introspection, you may find ways to channel this
                  intense energy into assertive communication or constructive
                  change. Over time, learning to understand and manage your fury
                  can transform it from a destructive force into a motivator for
                  positive action, reinforcing your commitment to self-respect
                  and healthy relationships while nurturing your emotional
                  well-being.
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
                  <h2 className="text-2xl font-bold text-pink-500">Jealous</h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling jealous often arises when you perceive a threat to
                  something you value—be it a relationship, an achievement, or a
                  personal quality. Imagine watching someone else receive
                  recognition or enjoy an opportunity that you long for, and
                  suddenly feeling an unsettling mix of insecurity and longing.
                  This jealousy can sting deeply, as it reminds you of your own
                  unmet desires or insecurities. Yet, rather than allowing this
                  emotion to erode your self-esteem, consider it a signal to
                  explore your inner aspirations. Reflect on what this jealousy
                  reveals about your own dreams and what you might be yearning
                  to achieve. Channel that energy into setting personal goals,
                  enhancing your skills, or cultivating gratitude for your
                  unique journey. Acknowledge your jealousy with
                  kindness—understanding that its a natural, if uncomfortable,
                  part of the human experience. Over time, as you work toward
                  fulfilling your own aspirations, the sharp edge of jealousy
                  may soften, replaced by a healthier, more confident sense of
                  self-worth and contentment in your own accomplishments.
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
