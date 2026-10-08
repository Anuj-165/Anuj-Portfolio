import { useState, useRef, type KeyboardEvent } from 'react';
import { ArrowUp } from 'lucide-react';

interface ArcInputProps {
  onSend: (text: string) => void;
  disabled?: boolean;
}

export default function ArcInput({ onSend, disabled = false }: ArcInputProps) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed || disabled) return;
    onSend(trimmed);
    setValue('');
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = () => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto';
      inputRef.current.style.height = `${Math.min(inputRef.current.scrollHeight, 120)}px`;
    }
  };

  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-end gap-2 bg-[#0D110F] border border-white/[0.08] rounded-xl px-3 py-2 focus-within:border-[#43D17A]/30 transition-smooth">
        <textarea
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          disabled={disabled}
          placeholder="Ask ARC anything about Anuj..."
          rows={1}
          className="flex-1 bg-transparent text-sm text-[#F5F5F2] placeholder:text-[#A4AAA6]/40 resize-none outline-none max-h-[120px]"
          aria-label="Ask ARC"
        />
        <button
          onClick={handleSend}
          disabled={disabled || !value.trim()}
          className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg bg-[#43D17A] text-[#080A09] disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#43D17A]/90 transition-smooth"
          aria-label="Send message"
        >
          <ArrowUp size={16} />
        </button>
      </div>
      <div className="flex items-center justify-between px-1">
        <span className="text-[#A4AAA6]/30 text-[10px]">
          ARC uses information provided in Anuj's portfolio context.
        </span>
        <span className="text-[#A4AAA6]/30 text-[10px] hidden sm:inline">
          Enter ↵
        </span>
      </div>
    </div>
  );
}
