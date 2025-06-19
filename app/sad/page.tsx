"use client";

import SadEmotion from "@/components/SadEmotion";
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
        Sadness is a natural part of life that helps us process and heal.
        Let&apos;s explore your feelings and find ways to move through them with
        self-compassion.
      </motion.h1>
      <SadEmotion />
    </PageLayout>
  );
};

export default Page;
