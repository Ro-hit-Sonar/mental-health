"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

interface Quote {
  text: string;
  category: string;
  author?: string;
}

const categories = [
  "All",
  "Motivation",
  "Wisdom",
  "Self-Improvement",
  "Mindfulness",
];

const quotes: Quote[] = [
  {
    text: "Anxiety overestimates the threats and then underestimates your ability to deal with it.",
    category: "Mindfulness",
  },
  {
    text: "Everything is figureoutable.",
    category: "Motivation",
  },
  {
    text: "When you react, you repeat the past. When you respond, you create the future. Practice the pause. The real flex is pausing before reacting and controlling how you respond to things sent to destroy your peace.",
    category: "Wisdom",
  },
  {
    text: "If it drains you, it's not for you",
    category: "Self-Improvement",
  },
  {
    text: "Don't subscribe to other people's definition of 'fun'.",
    category: "Self-Improvement",
  },
  {
    text: "Have faith in yourself & God during your lowest time.",
    category: "Motivation",
  },
  {
    text: "Be kind, not naive",
    category: "Wisdom",
  },
  {
    text: "If you can't stop your stream of thoughts at night, get up and write them down. This will set your mind at ease so you can sleep.",
    category: "Mindfulness",
  },
  {
    text: "Thoughts are not facts. Don't believe everything you think.",
    category: "Mindfulness",
  },
  {
    text: "Don't argue with the people who only want to win, not learn",
    category: "Wisdom",
  },
  {
    text: "Numbness is not nothing, neutral is nothing. Numbness is everything at once",
    category: "Mindfulness",
  },
  {
    text: "Self belief should always be irrational",
    category: "Motivation",
  },
  {
    text: "The attacks are meant to wake you up to your potential, not ruin you. GET IN THE GAME.",
    category: "Motivation",
  },
  {
    text: "Nothing of Value is easy.",
    category: "Motivation",
  },
  {
    text: "And sometimes against all odds, against all logic, WE HOPE",
    category: "Motivation",
  },
  {
    text: "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
    category: "Wisdom",
  },
  {
    text: "Don't analyse your life more than you live it",
    category: "Self-Improvement",
  },
];

const QuoteCard = ({ quote, index }: { quote: Quote; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="p-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mb-4"
    >
      <div className="h-full border border-gray-600 bg-gray-900 bg-opacity-50 rounded-lg shadow-lg p-6 flex flex-col justify-between hover:bg-gray-800 transition-colors duration-300">
        <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-4">
          {quote.text}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-cyan-500 text-xs">{quote.category}</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText(quote.text);
              // You could add a toast notification here
            }}
            className="text-gray-400 hover:text-cyan-500 transition-colors"
          >
            Copy
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Quote = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredQuotes = quotes.filter((quote) => {
    const matchesCategory =
      selectedCategory === "All" || quote.category === selectedCategory;
    const matchesSearch = quote.text
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(107,114,128,0.2) 0.5px ,transparent 0)`,
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat",
      }}
    >
      <section className="text-white body-font w-full">
        <div className="container px-5 py-12 mx-auto">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col text-center w-full mb-12"
          >
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-cyan-500 mb-4">
              A Collection of Thoughts & Perspectives
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              The right words at the right time can change everything. These
              pieces offer insights, comfort, and a deeper understanding of the
              emotions we navigate every day
            </p>
          </motion.div>

          {/* Search and Filter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
          >
            <input
              type="text"
              placeholder="Search quotes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-full sm:w-64"
            />
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm ${
                    selectedCategory === category
                      ? "bg-cyan-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Quote Grid Section */}
          <div className="flex flex-wrap -m-4">
            {filteredQuotes.map((quote, index) => (
              <QuoteCard key={index} quote={quote} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quote;
