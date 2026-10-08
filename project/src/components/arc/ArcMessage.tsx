import { ArrowUpRight } from 'lucide-react';
import type { ArcMessage } from '@/components/arc/ArcContext';
import ArcLogo from '@/components/arc/ArcLogo';
import ArcSource from '@/components/arc/ArcSource';

interface ArcMessageProps {
  message: ArcMessage;
}

export default function ArcMessage({ message }: ArcMessageProps) {
  const isArc = message.role === 'arc';

  const handleLinkClick = (href: string) => {
    if (href.startsWith('arc:')) {
      const event = new CustomEvent('arc:query', { detail: href });
      window.dispatchEvent(event);
    }
  };

  return (
    <div className={`flex flex-col gap-1.5 anim-fade-up ${isArc ? 'items-start' : 'items-end'}`}>
      {isArc && (
        <div className="flex items-center gap-1.5">
          <ArcLogo size={12} className="text-[#43D17A]" />
          <span className="text-[#43D17A] text-xs font-medium">ARC</span>
        </div>
      )}
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isArc
            ? 'bg-[#0D110F] border border-white/[0.06] text-[#F5F5F2]'
            : 'bg-[#43D17A]/10 border border-[#43D17A]/15 text-[#F5F5F2]'
        }`}
      >
        <div className="whitespace-pre-line">{message.text}</div>

        {/* Sources */}
        {message.sources && message.sources.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1 mt-2.5 pt-2 border-t border-white/[0.04]">
            {message.sources.map((src, i) => (
              <ArcSource key={i} source={src} />
            ))}
          </div>
        )}

        {/* Links */}
        {message.links && message.links.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-2.5">
            {message.links.map((link, i) => {
              const isExternal = link.href.startsWith('http');
              const isInternal = link.href.startsWith('#');
              const isArc = link.href.startsWith('arc:');
              if (isArc) {
                return (
                  <button
                    key={i}
                    onClick={() => handleLinkClick(link.href)}
                    className="inline-flex items-center gap-0.5 text-xs text-[#43D17A] hover:text-[#43D17A]/80 transition-smooth"
                  >
                    {link.label}
                  </button>
                );
              }
              return (
                <a
                  key={i}
                  href={link.href}
                  className="inline-flex items-center gap-0.5 text-xs text-[#43D17A] hover:text-[#43D17A]/80 transition-smooth"
                >
                  {link.label}
                  {(isExternal || isInternal) && <ArrowUpRight size={11} />}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
