import { ArrowUpRight } from 'lucide-react';
import { skillCategories } from '@/data/skills';
import { useArc } from '@/components/arc/ArcContext';

export default function Skills() {
  const { openArc } = useArc();

  const handleSkillClick = (skill: string) => {
    openArc(`What would you like to know about Anuj's experience with ${skill}?`);
  };

  return (
    <section id="skills" className="relative bg-[#080A09] py-20 lg:py-28 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-[#43D17A]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12 lg:mb-16">
          <p className="text-[#A4AAA6] text-sm font-mono tracking-wider">
            // CAPABILITIES
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F5F5F2] leading-[1.1]">
            What I work with.
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10 lg:gap-x-16">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#43D17A]/40" />
                <h3 className="text-[#F5F5F2] text-sm font-medium tracking-wider uppercase">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-col gap-2.5 pl-4 border-l border-white/[0.06]">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="group/skill flex items-center justify-between cursor-pointer text-[#A4AAA6] hover:text-[#43D17A] transition-smooth"
                    onClick={() => handleSkillClick(item)}
                  >
                    <span className="text-base">{item}</span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-[#43D17A] opacity-0 group-hover/skill:opacity-0 transition-smooth">
                        Ask ARC
                      </span>
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 group-hover/skill:opacity-100 group-hover/skill:translate-x-0.5 group-hover/skill:-translate-y-0.5 transition-smooth text-[#43D17A]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech marquee */}
        <div className="mt-16 lg:mt-20 overflow-hidden">
          <div className="anim-marquee whitespace-nowrap">
            <span className="text-[#F5F5F2]/[0.06] text-5xl lg:text-7xl font-light tracking-[0.15em]">
              BUILD · DESIGN · LEARN · ITERATE · BUILD · DESIGN · LEARN · ITERATE · BUILD · DESIGN · LEARN · ITERATE · BUILD · DESIGN · LEARN · ITERATE ·&nbsp;
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
