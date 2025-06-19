"use client";

import DisgustedEmotion from "@/components/DisgustedEmotion";
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
        Disgust can be a strong reaction to something that conflicts with your
        values. Let&apos;s explore what&apos;s triggering this feeling and how
        to process it.
      </motion.h1>
      <DisgustedEmotion />
    </PageLayout>
  );
};

export default Page;
