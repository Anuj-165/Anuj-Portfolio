import { useEffect, useState } from 'react';
import ArcButton from '@/components/arc/ArcButton';

const navItems = [
  { num: '01', label: 'Home', href: '#home' },
  { num: '02', label: 'About', href: '#about' },
  { num: '03', label: 'Projects', href: '#projects' },
  { num: '04', label: 'Skills', href: '#skills' },
  { num: '05', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ['home', 'about', 'arc', 'projects', 'skills', 'contact'];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth anim-fade-down ${
        scrolled
          ? 'bg-[#080A09]/80 backdrop-blur-xl border-b border-subtle py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-0 text-xl font-semibold tracking-tight">
          <span className="text-[#F5F5F2]">A</span>
          <span className="text-accent">P</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center gap-1.5 text-sm transition-smooth"
            >
              <span className="text-secondary/60 text-xs font-mono">{item.num}.</span>
              <span
                className={`transition-smooth ${
                  activeSection === item.href.slice(1)
                    ? 'text-[#F5F5F2]'
                    : 'text-secondary hover:text-[#F5F5F2]'
                }`}
              >
                {item.label}
              </span>
              <span
                className={`ml-0.5 w-1 h-1 rounded-full bg-accent transition-smooth ${
                  activeSection === item.href.slice(1) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}
              />
            </a>
          ))}
        </div>

        {/* Right side: ARC + Connect */}
        <div className="hidden md:flex items-center gap-4">
          <ArcButton variant="nav" />
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-[#F5F5F2] rounded-lg border border-accent-subtle hover:bg-accent/10 transition-smooth"
          >
            Let's Connect
            <span className="text-accent text-xs">↗</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className={`w-5 h-px bg-[#F5F5F2] transition-smooth ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`}
          />
          <span className={`w-5 h-px bg-[#F5F5F2] transition-smooth ${mobileOpen ? 'opacity-0' : ''}`} />
          <span
            className={`w-5 h-px bg-[#F5F5F2] transition-smooth ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-smooth ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5 bg-[#080A09]/95 backdrop-blur-xl border-t border-subtle mt-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 text-sm"
            >
              <span className="text-secondary/60 text-xs font-mono">{item.num}.</span>
              <span className="text-[#F5F5F2]">{item.label}</span>
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-2 pt-3 border-t border-subtle">
            <ArcButton variant="nav" label="Ask ARC ↗" />
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm text-[#F5F5F2] rounded-lg border border-accent-subtle w-fit"
            >
              Let's Connect <span className="text-accent">↗</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
