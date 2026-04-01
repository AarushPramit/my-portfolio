"use client";

export function ProductSection() {
  return (
    <section className="w-full bg-black text-white py-32 px-8 md:px-16">
      
      {/* HEADER */}
      <div className="max-w-7xl mx-auto mb-20">
        <h2 className="text-5xl md:text-7xl font-light tracking-tight text-white">
          Product Design Strategy
        </h2>

        <p className="text-white/50 mt-4 max-w-xl">
          Deep dives into the logic behind the aesthetics. Solving real problems through structured design thinking.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="max-w-7xl mx-auto space-y-32">

        {/* PROJECT 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div className="w-full h-[420px] rounded-2xl overflow-hidden">
            <img
              src="/core.jpg"
              alt="Core Clothing"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT */}
          <div>
            <div className="flex gap-3 mb-4">
              <span className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/60">
                UX STRATEGY
              </span>
              <span className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/60">
                BRAND SYSTEM
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl mb-4 tracking-tight">
              Core Clothing
            </h3>

            <p className="text-white/50 leading-relaxed max-w-md">
              A fashion-first digital experience designed to elevate brand identity and streamline product discovery. 
              Focused on clarity, minimal navigation, and strong visual hierarchy to drive engagement and conversion.
            </p>

            <a
              href="https://core-website-swart.vercel.app/"
              target="_blank"
              className="inline-block mt-6 text-sm text-white hover:underline"
            >
              View →
            </a>
          </div>

        </div>

        {/* PROJECT 2 (REVERSED) */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* TEXT */}
          <div className="order-2 md:order-1">
            <div className="flex gap-3 mb-4">
              <span className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/60">
                PRODUCT DESIGN
              </span>
              <span className="text-xs border border-white/20 px-3 py-1 rounded-full text-white/60">
                UI SYSTEM
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl mb-4 tracking-tight">
              Auren Audio
            </h3>

            <p className="text-white/50 leading-relaxed max-w-md">
              A premium audio platform experience built with a focus on immersion and simplicity. 
              Designed interactions that enhance usability while maintaining a sleek and modern interface.
            </p>

            <a
              href="https://headphones-iota.vercel.app/"
              target="_blank"
              className="inline-block mt-6 text-sm text-white hover:underline"
            >
              View →
            </a>
          </div>

          {/* IMAGE */}
          <div className="order-1 md:order-2 w-full h-[420px] rounded-2xl overflow-hidden">
            <img
              src="/auren.jpg"
              alt="Auren Audio"
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
}