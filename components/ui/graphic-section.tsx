"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  { title: "Nike Flame", image: "/image1.jpg" },
  { title: "Nike- Travis Scott", image: "/image2.jpg" },
  { title: "Travis Scott", image: "/image3.jpg" },
  { title: "Martin Garrix", image: "/image4.jpg" },
];

function ProjectCard({ project }: any) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.6"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [120, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className="group">
      
      {/* IMAGE */}
      <div className="relative rounded-2xl overflow-hidden">

  <img
    src={project.image}
    alt={project.title}
    className="w-full rounded-2xl transition-all duration-500 ease-out group-hover:scale-105"
  />

</div>

      {/* TITLE */}
      {/* TITLE */}
<div className="mt-2">
  <h3 className="text-sm md:text-lg text-white/90 tracking-tight">
    {project.title}
  </h3>
</div>

    </motion.div>
  );
}

export function GraphicSection() {
  return (
    <section className="w-full min-h-screen bg-black text-white py-24 px-8 md:px-16">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-10">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight bg-gradient-to-b from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
          Graphic Design
        </h2>

        <p className="text-sm md:text-base text-white/50 mt-4 max-w-md leading-relaxed">
          A curated gallery of visual work.
        </p>
      </div>

      {/* GRID */}
      {/* GRID */}
<div className="max-w-7xl mx-auto grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-8 md:gap-y-12">

  {projects.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ))}

</div>
    </section>
  );
}
