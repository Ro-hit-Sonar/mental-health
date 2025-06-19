"use client";

//import AllEmotions from "@/components/AllEmotions";
import HappyEmotion from "@/components/HappyEmotion";
import PageLayout from "@/components/PageLayout";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <PageLayout className="bg-black">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white mx-8 md:mx-28 text-center text-2xl md:text-3xl font-mono mb-8"
      >
        It&apos;s wonderful to see you feeling happy today. Let&apos;s explore
        the layers of your happiness—it might reveal something beautiful about
        your journey.
      </motion.h1>
      <HappyEmotion />
    </PageLayout>
  );
};

export default Page;
