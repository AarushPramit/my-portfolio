"use client";

import { useEffect, useState } from "react";

import { CursorGlow } from "@/components/ui/cursor-glow";
import { HandWrittenTitle } from "@/components/ui/hand-writing-text";
import { AboutSection } from "@/components/ui/about-section";
import { GraphicSection } from "@/components/ui/graphic-section";
import { ProductSection } from "@/components/ui/product-section";
import { Carousel } from "@/components/ui/carousel";
import { InstagramSection } from "@/components/ui/instagram-section";
import { FinalSection } from "@/components/ui/final-section";

export default function Home() {
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    // 🚫 LOCK SCROLL
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShowAbout(true);

      // ✅ UNLOCK SCROLL
      document.body.style.overflow = "auto";
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-black text-white relative">

      {/* HERO (INTRO) */}
      <section
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${
          showAbout
            ? "opacity-0 -translate-y-10 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <HandWrittenTitle />
      </section>

      {/* MAIN CONTENT */}
      <div
        className={`transition-all duration-1000 ${
          showAbout ? "opacity-100" : "opacity-0"
        }`}
      >

        {/* ABOUT */}
        <section className="min-h-screen flex items-center">
          <AboutSection />
        </section>

        {/* GRAPHIC DESIGN */}
        <GraphicSection />

        {/* CAROUSEL */}
        <Carousel />

        {/* INSTAGRAM */}
        <InstagramSection />

        <ProductSection />

        <FinalSection />

      </div>

    </main>
  );
}