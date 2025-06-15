"use client";

import AllEmotions from "@/components/AllEmotions";
import ContactUs from "@/components/ContactUs";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Heart, Brain, Users, BookOpen } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="relative flex min-h-screen w-full bg-black pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/health5.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div className="relative z-10 flex flex-col items-end justify-end h-full w-full px-4 sm:px-8 md:px-12 lg:px-24 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono font-extralight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            Emotions are chemicals with meaning
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-mono font-extralight text-sm sm:text-base md:text-lg lg:text-xl mt-4 max-w-2xl text-right"
          >
            Understand, Uncover & take control of your journey.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <a
              href="#get-started"
              className="inline-flex items-center px-6 py-3 bg-white text-black font-mono rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
              Start Your Journey <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <Heart className="w-12 h-12 text-white mb-4" />
              <h3 className="text-white text-xl font-mono mb-2">
                Emotional Intelligence
              </h3>
              <p className="text-gray-400 font-mono">
                Develop deeper understanding of your emotions and their impact
                on your life.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <Brain className="w-12 h-12 text-white mb-4" />
              <h3 className="text-white text-xl font-mono mb-2">
                Mental Wellness
              </h3>
              <p className="text-gray-400 font-mono">
                Tools and resources to maintain and improve your mental health.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <Users className="w-12 h-12 text-white mb-4" />
              <h3 className="text-white text-xl font-mono mb-2">
                Community Support
              </h3>
              <p className="text-gray-400 font-mono">
                Connect with others on similar emotional journeys.
              </p>
            </motion.div>
            <Link href="/journal">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-pink-500/20 to-purple-700/30 p-6 rounded-lg border border-pink-500/30 cursor-pointer"
              >
                <BookOpen className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-white text-xl font-mono mb-2">
                  Emotion Journal
                </h3>
                <p className="text-gray-300 font-mono">
                  Track your emotional journey with our beautiful journaling
                  feature.
                </p>
                <div className="mt-4 flex items-center text-pink-500">
                  <span className="text-sm font-mono">Start Journaling</span>
                  <ArrowRight className="ml-2" size={16} />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black py-12 sm:py-16 text-center"
      >
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-mono px-4 sm:px-8">
          So what are you feeling today?
        </p>
      </motion.div>

      <div
        id="get-started"
        className="min-h-screen w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/mental.png')" }}
      >
        <AllEmotions />
      </div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-black py-16 sm:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-3xl font-mono text-center mb-12">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-400 font-mono italic">
                &ldquo;This platform helped me understand my emotions better
                than any therapy session I&apos;ve had.&rdquo;
              </p>
              <p className="text-white font-mono mt-4">- Sarah M.</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <p className="text-gray-400 font-mono italic">
                &ldquo;The community support here is incredible. I never feel
                alone in my journey.&rdquo;
              </p>
              <p className="text-white font-mono mt-4">- James K.</p>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen w-full bg-cover bg-center flex flex-col items-start justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-12 sm:py-16 text-white"
        style={{ backgroundImage: "url('/health3.png')" }}
      >
        <h1 className="font-mono font-extralight text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Together, We Rise Stronger!
        </h1>
        <p className="font-mono font-extralight text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed mt-4 max-w-3xl text-justify">
          Sometimes, keeping everything bottled up can feel like an endless
          battle. We believe that sharing your story can be a powerful step
          toward healing. In this space, you&apos;re invited to let your heart
          speak—pour out your thoughts, feelings, and experiences without
          judgment. If you&apos;d like to engage in a conversation or receive a
          reply, feel free to include your email address. However, if you prefer
          to remain anonymous and simply share what&apos;s weighing on your
          heart, that&apos;s perfectly okay too.
        </p>
      </motion.div>

      <div id="confess">
        <ContactUs />
      </div>
    </>
  );
};

export default Page;
