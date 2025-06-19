"use client";

import FearfulEmotion from "@/components/FearfulEmotion";
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
        Fear is a natural response that helps keep us safe. Let&apos;s
        understand your fears together and find ways to face them with courage
        and wisdom.
      </motion.h1>
      <FearfulEmotion />
    </PageLayout>
  );
};

export default Page;
