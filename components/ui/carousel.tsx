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
    <div className="w-full overflow-hidden py-16 bg-black">
      
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
  );
}