import { ArrowUpRight } from 'lucide-react';

import { useArc } from '@/components/arc/ArcContext';
import ArcLogo from '@/components/arc/ArcLogo';

interface ArcButtonProps {
  variant?: 'nav' | 'hero' | 'section' | 'footer' | 'card';
  context?: string;
  label?: string;
  className?: string;
}

export default function ArcButton({
  variant = 'nav',
  context,
  label = 'Ask ARC',
  className = '',
}: ArcButtonProps) {
  const { openArc, triggerRef } = useArc();

  const handleClick = () => {
    openArc(context);
  };

  const baseClass =
    'group inline-flex items-center gap-1.5 transition-smooth';

  const variantClass = {
    nav: 'text-sm text-[#F5F5F2] hover:text-[#43D17A]',
    hero: 'text-sm text-[#A4AAA6] hover:text-[#43D17A]',
    section:
      'px-6 py-3 bg-[#43D17A] text-[#080A09] font-medium text-sm rounded-lg hover:bg-[#43D17A]/90 hover:gap-2',
    footer:
      'px-6 py-3 border border-[#43D17A]/25 text-[#F5F5F2] text-sm rounded-lg hover:bg-[#43D17A]/10 hover:border-[#43D17A]/40',
    card: 'text-xs text-[#999] hover:text-[#43D17A]',
  };

  return (
    <button
      ref={(el) => {
        if (variant === 'nav') {
          triggerRef.current = el;
        }
      }}
      onClick={handleClick}
      className={`${baseClass} ${variantClass[variant]} ${className}`}
      aria-label={`Ask ARC${context ? ` about ${context}` : ''}`}
    >
      {variant === 'section' || variant === 'footer' ? (
        <ArcLogo
          size={16}
          className="text-[#080A09]"
        />
      ) : variant === 'nav' ? (
        <ArcLogo
          size={14}
          className="text-[#43D17A]"
        />
      ) : null}

      {label}

      <ArrowUpRight
        size={variant === 'section' || variant === 'footer' ? 16 : 13}
        className="transition-smooth group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </button>
  );
}