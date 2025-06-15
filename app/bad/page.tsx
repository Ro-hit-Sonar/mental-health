"use client";

import BadEmotion from "@/components/BadEmotion";
import React from "react";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-white mx-8 md:mx-28 text-center text-3xl md:text-4xl font-mono font-medium mb-12"
      >
        It&apos;s okay to feel bad sometimes—it&apos;s part of being human.
        Let&apos;s explore what&apos;s behind this feeling and how to move
        through it.
      </motion.h1>
      <BadEmotion />
    </div>
  );
};

export default Page;
