import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] bg-[#080A09] flex flex-col items-center justify-center gap-4 transition-opacity duration-500"
      style={{ opacity: loading ? 1 : 0 }}
    >
      <div className="flex items-center gap-0 text-2xl font-semibold tracking-tight">
        <span className="text-[#F5F5F2]">A</span>
        <span className="text-[#43D17A]">P</span>
      </div>
      <div className="w-24 h-px bg-white/10 overflow-hidden">
        <div className="h-full bg-[#43D17A] anim-load-bar" />
      </div>
    </div>
  );
}
