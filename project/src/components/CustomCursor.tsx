import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [viewLabel, setViewLabel] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(max-width: 1024px)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    setVisible(true);

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor]');
      if (interactive) {
        setHovering(true);
        setViewLabel(interactive.hasAttribute('data-cursor'));
      } else {
        setHovering(false);
        setViewLabel(false);
      }
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-200 ease-out"
      style={{
        left: pos.x,
        top: pos.y,
        transform: `translate(-50%, -50%) scale(${hovering ? 2.5 : 1})`,
      }}
    >
      <div
        className={`flex items-center justify-center rounded-full transition-smooth ${
          viewLabel ? 'bg-[#43D17A] text-[#080A09] w-16 h-16' : 'bg-[#43D17A] w-2 h-2'
        } ${hovering ? 'opacity-100' : 'opacity-80'}`}
        style={{
          width: viewLabel ? undefined : hovering ? '8px' : '6px',
          height: viewLabel ? undefined : hovering ? '8px' : '6px',
        }}
      >
        {viewLabel && (
          <span className="text-[9px] font-medium tracking-wider flex items-center gap-0.5">
            VIEW ↗
          </span>
        )}
      </div>
    </div>
  );
}
