import { useState, useEffect, useRef, useCallback } from 'react';
import { X, RotateCcw } from 'lucide-react';
import { useArc } from '@/components/arc/ArcContext';
import {
  generateArcResponse,
  suggestedQuestions,
  recruiterQuestions,
  developerQuestions,
} from '@/data/arcKnowledge';
import ArcLogo from '@/components/arc/ArcLogo';
import ArcStatus from '@/components/arc/ArcStatus';
import ArcMessage from '@/components/arc/ArcMessage';
import ArcInput from '@/components/arc/ArcInput';
import ArcPrompt from '@/components/arc/ArcPrompt';
import ArcMode from '@/components/arc/ArcMode';

export default function ArcPanel() {
  const { isOpen, closeArc, messages, addMessage, clearMessages, initialContext, triggerRef } = useArc();
  const [status, setStatus] = useState<'ready' | 'thinking'>('ready');
  const [mode, setMode] = useState<'general' | 'recruiter' | 'developer'>('general');
  const [showPrompts, setShowPrompts] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Handle initial context (e.g. from project "Ask ARC" links)
  useEffect(() => {
    if (isOpen && initialContext) {
      if (initialContext.startsWith('arc:')) {
        handleQuery(initialContext);
      } else {
        // Project context message
        addMessage({
          role: 'arc',
          text: initialContext,
        });
      }
    }
  }, [isOpen, initialContext]);

  // Listen for arc:query events from message links
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail as string;
      handleQuery(detail);
    };
    window.addEventListener('arc:query', handler);
    return () => window.removeEventListener('arc:query', handler);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const textarea = inputContainerRef.current?.querySelector('textarea');
        textarea?.focus();
      }, 300);
    }
  }, [isOpen]);

  // Return focus on close
  useEffect(() => {
    if (!isOpen && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isOpen, triggerRef]);

  // Escape to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeArc();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, closeArc]);

  const handleQuery = useCallback(
    (query: string) => {
      // Don't add arc: links as user messages
      if (!query.startsWith('arc:')) {
        addMessage({ role: 'user', text: query });
      }
      setShowPrompts(false);
      setStatus('thinking');

      const delay = 400 + Math.random() * 400;
      setTimeout(() => {
        const response = generateArcResponse(query);
        addMessage({
          role: 'arc',
          text: response.text,
          sources: response.sources,
          links: response.links,
        });
        setStatus('ready');
      }, delay);
    },
    [addMessage]
  );

  const handleModeChange = (newMode: 'general' | 'recruiter' | 'developer') => {
    setMode(newMode);
    setShowPrompts(true);
  };

  const handleReset = () => {
    clearMessages();
    setShowPrompts(true);
    setMode('general');
  };

  const currentPrompts =
    mode === 'recruiter' ? recruiterQuestions : mode === 'developer' ? developerQuestions : suggestedQuestions;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[90] bg-black/40 backdrop-blur-[2px] transition-opacity duration-300"
        onClick={closeArc}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[91] w-full sm:w-[440px] bg-[#080A09] border-l border-white/[0.06] flex flex-col anim-slide-in-right`}
        role="dialog"
        aria-label="ARC - Anuj's personal AI"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0D110F] border border-white/[0.06] flex items-center justify-center">
              <ArcLogo size={18} className="text-[#43D17A]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-[#F5F5F2] text-sm font-medium tracking-wide">ARC</span>
              <ArcStatus status={status} />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleReset}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-[#A4AAA6] hover:text-[#F5F5F2] hover:bg-white/[0.04] transition-smooth"
              aria-label="Reset conversation"
            >
              <RotateCcw size={15} />
            </button>
            <button
              onClick={closeArc}
              className="w-8 h-8 flex items-center justify-center rounded-lg text-[#A4AAA6] hover:text-[#F5F5F2] hover:bg-white/[0.04] transition-smooth"
              aria-label="Close ARC"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Mode selector */}
        <div className="px-5 py-3 border-b border-white/[0.06]">
          <ArcMode activeMode={mode} onModeChange={handleModeChange} />
        </div>

        {/* Messages */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4 scroll-smooth"
        >
          {messages.map((msg) => (
            <ArcMessage key={msg.id} message={msg} />
          ))}

          {/* Thinking indicator */}
          {status === 'thinking' && (
            <div className="flex items-center gap-2 anim-fade-in">
              <ArcLogo size={12} className="text-[#43D17A]" />
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#43D17A]/40 anim-think-dot-1" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#43D17A]/40 anim-think-dot-2" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#43D17A]/40 anim-think-dot-3" />
              </div>
            </div>
          )}

          {/* Suggested prompts */}
          {showPrompts && status === 'ready' && (
            <div className="flex flex-col gap-1.5 mt-2">
              <p className="text-[#A4AAA6]/50 text-[10px] tracking-wider uppercase mb-1">
                {mode === 'recruiter' ? 'Recruiter prompts' : mode === 'developer' ? 'Developer prompts' : 'Try asking'}
              </p>
              <div className="grid grid-cols-1 gap-1.5">
                {currentPrompts.slice(0, 6).map((q) => (
                  <ArcPrompt key={q} text={q} onClick={(text) => handleQuery(text)} compact />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div ref={inputContainerRef} className="px-5 py-4 border-t border-white/[0.06]">
          <ArcInput onSend={handleQuery} disabled={status === 'thinking'} />
        </div>
      </div>
    </>
  );
}
