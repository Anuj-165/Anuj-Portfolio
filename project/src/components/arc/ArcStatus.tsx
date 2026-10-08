interface ArcStatusProps {
  status: 'ready' | 'thinking';
}

export default function ArcStatus({ status }: ArcStatusProps) {
  const label = status === 'thinking' ? 'Thinking' : 'Ready';
  const dotClass = status === 'thinking' ? 'bg-[#43D17A] anim-pulse-dot' : 'bg-[#43D17A]';

  return (
    <div className="flex items-center gap-1.5">
      <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`} />
      <span className="text-[#A4AAA6] text-xs">{label}</span>
    </div>
  );
}
