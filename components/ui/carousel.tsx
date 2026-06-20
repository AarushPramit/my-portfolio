"use client";

import { motion } from "framer-motion";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image7.jpg",
  "/image8.jpg",
  "/image9.jpg",
];

export function Carousel() {
  return (
    <section className="w-full bg-black py-24 px-8 md:px-16">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">

        <p className="text-sm uppercase tracking-[0.25em] text-white/40 mb-3">
          Selected Works
        </p>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight bg-gradient-to-b from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
          My Graphic Design Work
        </h2>

        <p className="mt-4 text-white/50 max-w-xl leading-relaxed">
          Posters and visual explorations inspired by music, culture and storytelling.
        </p>

      </div>

      {/* Carousel */}
      <div className="overflow-hidden">

        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >

          {/* Duplicate images for seamless loop */}
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="min-w-[300px] h-[300px] rounded-2xl overflow-hidden flex-shrink-0"
            >
              <img
                src={src}
                alt="carousel"
                className="w-full h-full object-cover"
              />
            </div>
          ))}

        </motion.div>

      </div>

    </section>
  );
}
