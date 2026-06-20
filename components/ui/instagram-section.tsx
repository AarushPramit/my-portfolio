"use client";

export function InstagramSection() {
  return (
    <section className="w-full bg-black text-white py-24 px-8 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-12 md:gap-24">

        {/* LEFT — LOGO */}
        <div className="flex justify-center md:justify-start">
          <img
            src="/Instagram.png"
            alt="Instagram"
            className="w-[260px] sm:w-[320px] md:w-[420px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* RIGHT — TEXT + BUTTON */}
        <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left">

          <p className="text-white/60 text-base leading-9">
            I share my latest design explorations, visual experiments, and creative process on Instagram.
            It’s where ideas evolve, styles are tested, and concepts come to life beyond structured projects.
          </p>

          <p className="text-white/40 text-base leading-9 mt-8">
            Follow along to see more of my work, behind-the-scenes iterations, and ongoing creative direction.
          </p>

          <a
            href="https://instagram.com/burnt_palette"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-10 px-10 py-5 border border-white/20 rounded-full text-white text-lg tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]"
          >
            View Instagram Account
          </a>

        </div>

      </div>
    </section>
  );
}
