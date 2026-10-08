import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#080A09] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: logo + copyright */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-lg font-semibold tracking-tight">
              <span className="text-[#F5F5F2]">A</span>
              <span className="text-[#43D17A]">P</span>
            </span>
            <span className="text-[#A4AAA6]/60 text-xs">© 2026 Anuj Purohit</span>
          </div>

          {/* Center: location */}
          <div className="flex items-center gap-2">
            <span className="w-1 h-1 rounded-full bg-[#43D17A]/50" />
            <span className="text-[#A4AAA6] text-sm">Delhi, India</span>
          </div>

          {/* Right: social links */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/Anuj-165"
              target="_blank"
              rel="noreferrer"
              className="text-[#A4AAA6] hover:text-[#43D17A] transition-smooth"
              aria-label="GitHub"
            >
              <Github size={18} strokeWidth={1.5} />
            </a>
            <a
              href="https://www.linkedin.com/in/anuj-purohit-588924316/"
              target="_blank"
              rel="noreferrer"
              className="text-[#A4AAA6] hover:text-[#43D17A] transition-smooth"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} strokeWidth={1.5} />
            </a>
            <a
              href="mailto:anujpurohit6@gmail.com"
              className="text-[#A4AAA6] hover:text-[#43D17A] transition-smooth"
              aria-label="Email"
            >
              <Mail size={18} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 pt-6 border-t border-white/[0.04] text-center">
          <p className="text-[#A4AAA6]/40 text-xs">
            Designed & built with curiosity.
          </p>
        </div>
      </div>
    </footer>
  );
}
