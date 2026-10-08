import { ArrowUpRight, Download } from 'lucide-react';
import ArcButton from '@/components/arc/ArcButton';
import portraitUrl from '@/assets/1000214576.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080A09]"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#173B27]/30 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-28 pb-20 lg:pt-20">

        {/* =====================================================
            LEFT SIDE
        ====================================================== */}
        <div className="flex flex-col gap-6 lg:pr-4">
          {/* Eyebrow */}
          <p className="opacity-0-init anim-fade-up text-secondary text-sm tracking-wide flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-accent/40" />
            Hi, I'm 👋
          </p>

          {/* Headline */}
          <div className="overflow-hidden">
            <h1 className="opacity-0-init anim-fade-up delay-200 text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              Anuj <span className="text-accent">Purohit.</span>
            </h1>
          </div>

          {/* Sub-headline */}
          <div className="overflow-hidden">
            <h2 className="opacity-0-init anim-fade-up delay-300 text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight leading-[1.15] text-[#F5F5F2]/90">
              I build digital products that
              <br />
              solve real-world problems.
            </h2>
          </div>

          {/* Description */}
          <p className="opacity-0-init anim-fade-up delay-400 text-secondary text-base leading-relaxed max-w-md">
            Full-stack developer focused on creating intuitive, scalable and
            impactful digital solutions with clean code and thoughtful design.
          </p>

          {/* Buttons */}
          <div className="opacity-0-init anim-fade-up delay-500 flex items-center gap-5 mt-2">
            {/* View Work Button */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-[#080A09] font-medium text-sm rounded-lg hover:bg-accent/90 transition-smooth hover:gap-3"
            >
              View My Work
              <ArrowUpRight
                size={16}
                className="transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Download CV */}
            <a
              href="KFd#"
              className="group inline-flex items-center gap-2 text-sm text-[#F5F5F2]/80 hover:text-accent transition-smooth"
            >
              <Download
                size={15}
                className="transition-smooth group-hover:translate-y-0.5"
              />
              Download CV
            </a>
          </div>
        </div>

        {/* =====================================================
            RIGHT SIDE — PORTRAIT
        ====================================================== */}
        <div className="relative flex items-center justify-center lg:justify-end">

          {/* Centered SVG Wrapper Box */}
          <div className="absolute w-[340px] h-[440px] lg:w-[480px] lg:h-[580px] pointer-events-none opacity-0-init anim-fade-in delay-1000 flex items-center justify-center">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 500"
              fill="none"
              aria-hidden="true"
            >
              {/* Outer Green Orbit */}
              <ellipse
                cx="50%"
                cy="50%"
                rx="170"
                ry="220"
                stroke="rgba(67,209,122,0.08)"
                strokeWidth="1"
                className="anim-draw delay-1000"
                strokeDasharray="1000"
              />

              {/* Inner White Orbit */}
              <ellipse
                cx="50%"
                cy="50%"
                rx="150"
                ry="190"
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1"
                className="anim-draw delay-1200"
                strokeDasharray="1000"
              />

              {/* Outer Glow Orbit */}
              <ellipse
                cx="50%"
                cy="50%"
                rx="190"
                ry="240"
                stroke="rgba(67,209,122,0.04)"
                strokeWidth="1"
                className="anim-draw delay-1200"
                strokeDasharray="1000"
              />
            </svg>
          </div>

          {/* Green Glow Behind Portrait */}
          <div className="absolute w-72 h-72 lg:w-80 lg:h-80 bg-accent/[0.06] rounded-full blur-[80px]" />

          {/* Portrait Container */}
          <div className="relative opacity-0-init anim-scale-in delay-700">
            <div className="relative w-64 h-80 lg:w-80 lg:h-[420px] rounded-2xl overflow-hidden">
              <img
                src={portraitUrl}
                alt="Anuj Purohit"
                className="w-full h-full object-cover grayscale contrast-110"
                style={{
                  filter:
                    'grayscale(100%) contrast(1.15) brightness(0.85)',
                }}
              />

              {/* Green Tint Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#173B27]/40 via-transparent to-accent/[0.06] pointer-events-none" />

              {/* Bottom Fade */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#080A09] to-transparent pointer-events-none" />
            </div>

            {/* Currently Building Card */}
            <div className="absolute -left-6 lg:-left-10 -bottom-6 lg:-bottom-8 anim-fade-up delay-1200 opacity-0-init">
              <div className="bg-[#0D110F]/90 backdrop-blur-md border border-subtle rounded-xl px-4 py-3 shadow-2xl">
                <p className="text-secondary text-[10px] tracking-[0.15em] uppercase mb-1.5">
                  Currently building
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent anim-pulse-dot" />
                  <span className="text-[#F5F5F2] text-sm font-medium">
                    FinPilot
                  </span>
                </div>
                <p className="text-secondary/70 text-xs mt-0.5">
                  AI-Powered Finance Tracker
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          ARC INTRODUCTION
      ====================================================== */}
      <div className="relative pb-10 lg:pb-12 flex flex-col items-center gap-2 opacity-0-init anim-fade-up delay-1200">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent anim-pulse-dot" />
          <span className="text-[#A4AAA6] text-xs tracking-[0.15em] uppercase">
            Meet ARC
          </span>
        </div>
        <p className="text-[#F5F5F2]/80 text-sm">
          Want to know more? Ask my AI about the work behind this portfolio.
        </p>
        <ArcButton
          variant="hero"
          label="Ask ARC ↗"
          className="mt-1"
        />
      </div>
    </section>
  );
}