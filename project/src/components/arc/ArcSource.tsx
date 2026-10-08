import { ArrowUpRight } from 'lucide-react';
import type { ArcSource } from '@/data/arcKnowledge';

interface ArcSourceProps {
  source: ArcSource;
}

export default function ArcSource({ source }: ArcSourceProps) {
  const isInternal = source.href.startsWith('#') || source.href.startsWith('arc:');
  const isExternal = source.href.startsWith('http');

  return (
    <a
      href={source.href}
      className="inline-flex items-center gap-0.5 text-[10px] text-[#A4AAA6]/50 hover:text-[#43D17A] transition-smooth"
    >
      Source → {source.label}
      {isExternal && <ArrowUpRight size={9} />}
    </a>
  );
}
