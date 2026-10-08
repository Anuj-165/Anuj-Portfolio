import { Github, Linkedin, Mail } from 'lucide-react';

export default function SocialRail() {
  return (
    <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-5 z-40">
      <div className="flex flex-col items-center gap-4">
        <a
          href="https://github.com/Anuj-165"
          target="_blank"
          rel="noreferrer"
          className="text-secondary hover:text-accent transition-smooth"
          aria-label="GitHub"
        >
          <Github size={17} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.linkedin.com/in/anuj-purohit-588924316/"
          target="_blank"
          rel="noreferrer"
          className="text-secondary hover:text-accent transition-smooth"
          aria-label="LinkedIn"
        >
          <Linkedin size={17} strokeWidth={1.5} />
        </a>
        <a
          href="mailto:anujpurohit6@gmail.com"
          className="text-secondary hover:text-accent transition-smooth"
          aria-label="Email"
        >
          <Mail size={17} strokeWidth={1.5} />
        </a>
      </div>
      <div className="w-px h-20 bg-gradient-to-b from-white/10 to-transparent" />
      <span className="text-secondary/50 text-[10px] tracking-[0.2em] uppercase rotate-90 mb-12 whitespace-nowrap origin-center">
        Scroll to explore
      </span>
      <div className="relative w-4 h-7 border border-white/15 rounded-full flex justify-center pt-1.5">
        <span className="w-0.5 h-1.5 bg-accent rounded-full anim-scroll-hint" />
      </div>
    </div>
  );
}
