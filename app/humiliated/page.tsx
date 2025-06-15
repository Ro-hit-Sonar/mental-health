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
                Humiliation can feel isolating, but you’re not alone. Let’s
                explore this feeling and reclaim your sense of self-worth.
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
                    Disrespected
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling disrespected can cut deeply, as it involves an
                  experience where your worth or boundaries are disregarded by
                  someone whose opinion matters to you. Picture a moment in a
                  personal or professional setting when someone trivialized your
                  ideas or ignored your feelings, leaving you with a lingering
                  sense of injustice. This experience might shake your
                  confidence and make you question whether you are truly seen
                  and valued. Yet, this feeling also serves as an important
                  signal—a reminder to affirm your boundaries and stand up for
                  your self-worth. Reflect on the incident with a calm mind:
                  while the disrespect hurt, it doesn’t define who you are.
                  Instead, see it as an opportunity to communicate more clearly
                  about your needs and expectations. Seeking support from
                  someone who understands you, whether a friend, mentor, or
                  therapist, can help reinforce your sense of dignity. Over
                  time, learning to assert yourself with compassion can
                  transform the pain of feeling disrespected into a powerful
                  step toward nurturing healthier, more respectful
                  relationships.
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
                  <h2 className="text-2xl font-bold text-pink-500">
                    Ridiculed
                  </h2>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Feeling ridiculed is an emotionally painful experience that
                  leaves you feeling small, exposed, and misunderstood. Imagine
                  being in a situation where your ideas or personal choices
                  become the target of laughter or scorn, as though your very
                  identity were the punchline of a joke. That sharp sting of
                  ridicule can linger long after the moment has passed,
                  undermining your self-esteem and making it hard to trust
                  others. However, amid this hurt lies an opportunity to embrace
                  your unique qualities with even greater conviction. Reflect on
                  the experience and remind yourself that ridicule often
                  reflects the insecurities of those who judge, rather than a
                  true measure of your worth. Seek solace in supportive
                  relationships or creative outlets where you can express your
                  true self without judgment. With time and gentle
                  self-compassion, you can transform the pain of ridicule into a
                  reaffirmation of your individuality. Every challenge you
                  overcome strengthens your resilience and helps you cultivate a
                  deep-seated belief in your own value—regardless of the
                  fleeting, unkind voices around you.
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
