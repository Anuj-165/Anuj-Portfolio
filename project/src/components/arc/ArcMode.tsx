interface ArcModeProps {
  activeMode: 'general' | 'recruiter' | 'developer';
  onModeChange: (mode: 'general' | 'recruiter' | 'developer') => void;
}

export default function ArcMode({ activeMode, onModeChange }: ArcModeProps) {
  const modes = [
    { id: 'general' as const, label: 'General' },
    { id: 'recruiter' as const, label: "I'm a recruiter" },
    { id: 'developer' as const, label: "I'm a developer" },
  ];

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => onModeChange(mode.id)}
          className={`text-xs px-2.5 py-1 rounded-md transition-smooth ${
            activeMode === mode.id
              ? 'bg-[#43D17A]/15 text-[#43D17A] border border-[#43D17A]/20'
              : 'text-[#A4AAA6] hover:text-[#F5F5F2] border border-white/[0.06]'
          }`}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
}
