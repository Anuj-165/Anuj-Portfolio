import { ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#080A09] py-24 lg:py-36 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#43D17A]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      {/* Outlined CREATE text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="text-[20vw] lg:text-[16vw] font-bold tracking-tighter select-none"
          style={{
            WebkitTextStroke: '1px rgba(245, 245, 242, 0.04)',
            color: 'transparent',
            transform: 'translateY(-3%)',
          }}
        >
          CREATE
        </span>
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center flex flex-col items-center gap-6">
        <p className="text-[#A4AAA6] text-sm font-mono tracking-wider">
          // HAVE AN IDEA?
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-light tracking-tight text-[#F5F5F2] leading-[1.1] max-w-3xl">
          Let's build something
          <br />
          <span className="font-serif-italic">amazing together.</span>
        </h2>

        <p className="text-[#A4AAA6] text-base lg:text-lg max-w-md">
          Have a project, idea, collaboration or opportunity in mind? Let's talk.
        </p>

        <a
          href="mailto:anujpurohit6@gmail.com"
          className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#43D17A] text-[#080A09] font-medium text-sm rounded-lg hover:bg-[#43D17A]/90 transition-smooth hover:gap-3 mt-4"
        >
          Let's Connect
          <ArrowUpRight size={16} className="transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        
      </div>
    </section>
  );
}
