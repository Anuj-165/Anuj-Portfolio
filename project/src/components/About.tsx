const stats = [
  { num: '01', label: 'Projects', desc: 'Built across web & AI' },
  { num: '02', label: 'Technologies', desc: 'Across frontend & backend' },
  { num: '03', label: 'Areas', desc: 'Web · AI · Backend · UI/UX' },
  { num: '04', label: 'Currently', desc: 'Building & learning' },
];

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Dark spacer with rounded top transition */}
      <div className="bg-[#080A09] pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center gap-4 pt-16">
            <span className="w-8 h-px bg-accent/40" />
            <span className="text-accent/60 text-xs font-mono tracking-wider">SECTION 02</span>
          </div>
        </div>
      </div>

      {/* Light section with rounded top */}
      <div className="bg-[#F5F5F1] rounded-t-[2.5rem] lg:rounded-t-[3.5rem] -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* LEFT SIDE */}
            <div className="flex flex-col gap-8">
              <p className="text-secondary text-sm font-mono tracking-wider">
                // ABOUT ME
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-[#1a1a1a]">
                Curious mind.
                <br />
                Builder <span className="font-serif-italic text-[#1a1a1a]">at heart.</span>
              </h2>

              <p className="text-[#555] text-lg leading-relaxed max-w-md">
                I'm a full-stack developer and AI enthusiast who loves turning ideas into
                real products. I enjoy exploring new technologies, building useful systems,
                and creating interfaces that feel simple and intuitive.
              </p>

              {/* Signature */}
              <div className="mt-2">
                <p
                  className="text-3xl text-[#1a1a1a]/80"
                  style={{
                    fontFamily: 'Instrument Serif, serif',
                    fontStyle: 'italic',
                    transform: 'rotate(-4deg)',
                    display: 'inline-block',
                  }}
                >
                  Anuj
                </p>
                <div className="w-16 h-px bg-[#1a1a1a]/20 mt-1" />
              </div>
            </div>

            {/* RIGHT SIDE — Stats */}
            <div className="grid grid-cols-2 gap-px bg-[#e0e0dc] rounded-2xl overflow-hidden">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="bg-[#F5F5F1] p-6 lg:p-8 flex flex-col gap-2 hover:bg-white/50 transition-smooth group"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="text-accent text-xs font-mono">{stat.num}</span>
                  <h3 className="text-xl lg:text-2xl font-medium text-[#1a1a1a] tracking-tight">
                    {stat.label}
                  </h3>
                  <p className="text-[#777] text-sm leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
