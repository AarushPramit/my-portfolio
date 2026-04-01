"use client";

export function InstagramSection() {
  return (
    <section className="w-full bg-black text-white py-24 px-8 md:px-16">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16">

        {/* LEFT — LOGO */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/instagram.png"
            alt="Instagram"
            className="w-[260px] md:w-[320px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* RIGHT — TEXT + BUTTON */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-md mx-auto md:mx-0">
          
          <p className="text-white/60 text-sm leading-relaxed">
            I share my latest design explorations, visual experiments, and creative process on Instagram. 
            It’s where ideas evolve, styles are tested, and concepts come to life beyond structured projects.
          </p>

          <p className="text-white/40 text-sm mt-4 leading-relaxed">
            Follow along to see more of my work, behind-the-scenes iterations, and ongoing creative direction.
          </p>

          <a
            href="https://instagram.com/burnt_palette"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-8 py-4 border border-white/20 rounded-full text-white text-sm tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            View Instagram Account
          </a>

        </div>

      </div>

    </section>
  );
}