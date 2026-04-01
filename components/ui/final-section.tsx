"use client";

export function FinalSection() {
  return (
    <section className="w-full bg-black text-white py-32 px-8 md:px-16">

      {/* NAME (NOW ABOVE EVERYTHING) */}
      <div className="max-w-7xl mx-auto mb-16">
        <h1 className="text-[80px] md:text-[140px] font-semibold tracking-tight text-white/10 leading-none">
          Aarush
        </h1>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl mb-6 tracking-tight">
            Crafting Experiences
          </h2>

          <p className="text-white/60 leading-relaxed mb-6 max-w-md">
            I’m focused on bridging the gap between AI and product design — creating systems that feel intelligent, intuitive, and human.
          </p>

          <p className="text-white/50 leading-relaxed mb-6 max-w-md">
            My approach blends logic with emotion. I’m deeply inspired by music — the rhythm, tone, and atmosphere influence how I design interactions and visual systems.
          </p>

          <p className="text-white/40 leading-relaxed max-w-md">
            I aim to build experiences that don’t just function well, but feel right.
          </p>

          {/* EXTRA INFO */}
          <div className="flex gap-16 mt-10 text-sm">

            <div>
              <p className="text-white/40 mb-3">Focus</p>
              <ul className="space-y-2 text-white/70">
                <li>AI + UX</li>
                <li>Product Strategy</li>
                <li>Interaction Design</li>
              </ul>
            </div>

            <div>
              <p className="text-white/40 mb-3">Approach</p>
              <ul className="space-y-2 text-white/70">
                <li>Clarity over noise</li>
                <li>Emotion-driven design</li>
                <li>Minimal systems</li>
              </ul>
            </div>

          </div>
        </div>

        {/* RIGHT — YOUR IMAGE */}
        <div className="w-full h-[460px] rounded-2xl overflow-hidden">
          <img
            src="/finalsection.jpg"
            alt="Aarush"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </section>
  );
}