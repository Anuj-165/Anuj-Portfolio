import { ArrowUpRight } from 'lucide-react';
import { useArc } from '@/components/arc/ArcContext';
import ArcLogo from '@/components/arc/ArcLogo';

export default function ArcFooterCTA() {
  const { openArc } = useArc();

  return (
    <section className="relative bg-[#080A09] py-20 lg:py-28 overflow-hidden border-t border-white/[0.04]">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-[#43D17A]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center flex flex-col items-center gap-5">
        <p className="text-[#A4AAA6] text-sm font-mono tracking-wider">
          // STILL CURIOUS?
        </p>

        <div className="flex items-center gap-2">
          <ArcLogo size={28} className="text-[#43D17A]" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F5F5F2] leading-[1.1]">
            Ask ARC.
          </h2>
        </div>

        <p className="text-[#A4AAA6] text-base max-w-md">
          If you want the short version, the technical version, or something in between —
          ARC knows where to look.
        </p>

        <button
          onClick={() => openArc()}
          className="group inline-flex items-center gap-2 px-6 py-3 border border-[#43D17A]/25 text-[#F5F5F2] text-sm rounded-lg hover:bg-[#43D17A]/10 hover:border-[#43D17A]/40 transition-smooth mt-2"
        >
          <ArcLogo size={16} className="text-[#43D17A]" />
          Talk to ARC
          <ArrowUpRight size={15} className="transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </section>
  );
}
