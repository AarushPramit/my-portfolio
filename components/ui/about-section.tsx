export function AboutSection() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white flex items-center">
      
      <div className="max-w-7xl mx-auto w-full px-8 md:px-16 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div className="max-w-xl">

          <h2 className="text-6xl md:text-7xl font-light leading-[1.05] tracking-tight bg-gradient-to-r from-zinc-200 via-zinc-400 to-zinc-700 bg-clip-text text-transparent">
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
        <div className="flex justify-center md:justify-end">
          <div className="relative rounded-3xl overflow-hidden w-[380px] md:w-[480px] h-[620px] shadow-2xl group transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]">
            
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