"use client";

import Quote from "@/components/Quote";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="min-h-screen bg-black">
        <Quote />
      </div>
    </motion.div>
  );
};

export default page;
