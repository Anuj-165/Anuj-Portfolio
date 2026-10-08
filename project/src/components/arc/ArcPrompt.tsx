interface ArcPromptProps {
  text: string;
  onClick: (text: string) => void;
  compact?: boolean;
}

export default function ArcPrompt({ text, onClick, compact = false }: ArcPromptProps) {
  return (
    <button
      onClick={() => onClick(text)}
      className={`text-left text-[#A4AAA6] hover:text-[#43D17A] hover:border-[#43D17A]/30 transition-smooth border border-white/[0.08] rounded-lg ${
        compact ? 'px-3 py-1.5 text-xs' : 'px-3.5 py-2 text-sm'
      } w-full`}
    >
      {text}
    </button>
  );
}
