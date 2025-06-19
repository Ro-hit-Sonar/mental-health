"use client";

import SurprisedEmotion from "@/components/SurprisedEmotion";
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
        Surprise can be a gateway to wonder and new perspectives. Let&apos;s
        explore what&apos;s caught your attention and what it might reveal about
        your journey.
      </motion.h1>
      <SurprisedEmotion />
    </PageLayout>
  );
};

export default Page;
