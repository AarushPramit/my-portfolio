export function AboutSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white flex items-center pt-12 md:pt-0">
      
      <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">

        {/* LEFT */}
        <div className="max-w-xl">

          <h2 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-700 bg-clip-text text-transparent">
            Designer. <br />
            Strategist. <br />
            Creative partner.
          </h2>

          <p className="mt-8 text-lg text-white/70">
            Blending clarity and creativity to build brands with purpose.
          </p>

          <div className="mt-8 space-y-3 text-white/60 text-sm">
            <p> Ph number: +91 9182372506</p>
            <p> Mail id: aarushpramit061205@gmail.com</p>
            <p>Linkedin: www.linkedin.com/in/aarush-pramit-880794281</p>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end mt-12 lg:mt-0">
          <div className="relative rounded-3xl overflow-hidden w-full max-w-[380px] lg:max-w-[480px] aspect-[4/5] shadow-2xl group transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
            
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-110"
            />

          </div>
        </div>

      </div>
    </section>
  );
}
