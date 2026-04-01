"use client";

import { motion } from "framer-motion";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

export function HandWrittenTitle({
  title = "My Portfolio",
  subtitle = "Selected Work & Ideas",
}: HandWrittenTitleProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto py-24 text-center">
      
      {/* Animated Line */}
      <motion.svg
        viewBox="0 0 1200 600"
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.path
          d="M 950 90 
             C 1250 300, 1050 480, 600 520
             C 250 520, 150 480, 150 300
             C 150 120, 350 80, 600 80
             C 850 80, 950 180, 950 180"
          fill="none"
          stroke="white"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5 }}
        />
      </motion.svg>

      {/* Text */}
      <div className="relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl text-white font-against tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-white/70 mt-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}