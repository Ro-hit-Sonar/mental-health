"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Heart, MessageSquare } from "lucide-react";

const ContactUs = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    // Simulate server call with delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Show success message and reset form
    alert("Submitted successfully!");
    formRef.current?.reset();
    setIsSubmitting(false);
  };

  return (
    <section className="text-white body-font relative bg-gradient-to-b from-black to-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col text-center w-full mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center mb-4"
          >
            <Heart className="w-12 h-12 text-pink-500" />
          </motion.div>
          <h1 className="sm:text-3xl text-4xl font-bold title-font mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Talk to Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
            Sharing can lighten the load and set you free
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="lg:w-1/2 md:w-2/3 mx-auto"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Name (not mandatory)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-pink-500 focus:bg-gray-900 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Email (not mandatory)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-pink-500 focus:bg-gray-900 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-100 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-300"
                  >
                    Message (take a deep breath and let it out)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    className="w-full bg-gray-800 bg-opacity-50 rounded-lg border border-gray-700 focus:border-pink-500 focus:bg-gray-900 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-100 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="flex mx-auto items-center space-x-2 text-white bg-gradient-to-r from-pink-500 to-purple-500 border-0 py-3 px-8 focus:outline-none hover:from-pink-600 hover:to-purple-600 rounded-lg text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
                </motion.button>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
