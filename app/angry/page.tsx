"use client";

import AngryEmotion from "@/components/AngryEmotion";
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
        Anger often masks deeper emotions. Let&apos;s explore what&apos;s
        beneath your anger and find healthy ways to express and understand these
        feelings.
      </motion.h1>
      <AngryEmotion />
    </PageLayout>
  );
};

export default Page;
