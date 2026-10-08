import ArcLogo from '@/components/arc/ArcLogo';
import ArcButton from '@/components/arc/ArcButton';
import { useArc } from '@/components/arc/ArcContext';
import { suggestedQuestions } from '@/data/arcKnowledge';
import { generateArcResponse } from '@/data/arcKnowledge';
import ArcStatus from '@/components/arc/ArcStatus';
import { useState, useEffect, useRef, useCallback } from 'react';
import ArcMessage from '@/components/arc/ArcMessage';
import ArcInput from '@/components/arc/ArcInput';
import ArcMode from '@/components/arc/ArcMode';
import {
  recruiterQuestions,
  developerQuestions,
} from '@/data/arcKnowledge';
import ArcPrompt from '@/components/arc/ArcPrompt';

export default function ArcSection() {
  const { openArc } = useArc();
  const [status, setStatus] = useState<'ready' | 'thinking'>('ready');
  const [mode, setMode] = useState<'general' | 'recruiter' | 'developer'>('general');
  const [messages, setMessages] = useState<{ id: string; role: 'arc' | 'user'; text: string; sources?: any[]; links?: any[] }[]>([
    {
      id: 'arc-section-initial',
      role: 'arc',
      text: `Hey. I'm ARC.\n\nI know the work behind this portfolio — not just the list of technologies.\n\nAsk me something.`,
    },
  ]);
  const [showPrompts, setShowPrompts] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleQuery = useCallback((query: string) => {
    if (!query.startsWith('arc:')) {
      setMessages((prev) => [...prev, { id: `${Date.now()}-u`, role: 'user', text: query }]);
    }
    setShowPrompts(false);
    setStatus('thinking');

    setTimeout(() => {
      const response = generateArcResponse(query);
      setMessages((prev) => [
        ...prev,
        {
          id: `${Date.now()}-a`,
          role: 'arc',
          text: response.text,
          sources: response.sources,
          links: response.links,
        },
      ]);
      setStatus('ready');
    }, 400 + Math.random() * 400);
  }, []);

  const handleModeChange = (newMode: 'general' | 'recruiter' | 'developer') => {
    setMode(newMode);
    setShowPrompts(true);
  };

  const currentPrompts =
    mode === 'recruiter' ? recruiterQuestions : mode === 'developer' ? developerQuestions : suggestedQuestions;

  return (
    <section id="arc" className="relative bg-[#080A09] py-20 lg:py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-[#43D17A]/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-12 lg:mb-16">
          <p className="text-[#A4AAA6] text-sm font-mono tracking-wider">
            // MEET ARC
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#F5F5F2] leading-[1.1]">
            Don't just browse.
            <br />
            <span className="font-serif-italic">Ask.</span>
          </h2>
          <p className="text-[#A4AAA6] text-base max-w-lg">
            ARC is my personal AI layer — built to help you explore my work, technical
            skills, projects and journey through conversation.
          </p>
        </div>

        {/* ARC Interface */}
        <div className="grid lg:grid-cols-[300px_1fr] gap-6 lg:gap-8">
          {/* Left: ARC Identity */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 p-6 bg-[#0D110F] border border-white/[0.06] rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#080A09] border border-white/[0.06] flex items-center justify-center">
                <ArcLogo size={24} className="text-[#43D17A]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[#F5F5F2] text-lg font-medium tracking-wide">ARC</span>
                <span className="text-[#A4AAA6] text-sm">Anuj's personal AI</span>
              </div>
              <ArcStatus status={status} />
              <p className="text-[#A4AAA6]/70 text-sm leading-relaxed mt-1">
                Ask me anything about Anuj's work.
              </p>
            </div>

            {/* Signature quote */}
            <div className="px-6 py-4 border-l-2 border-[#43D17A]/20">
              <p className="text-[#A4AAA6]/60 text-sm font-serif-italic leading-relaxed">
                "I know the work. You ask the questions."
              </p>
            </div>

            {/* Open in panel button */}
            <ArcButton
              variant="footer"
              label="Open ARC Panel"
              className="w-fit"
            />
          </div>

          {/* Right: Conversation interface */}
          <div className="flex flex-col bg-[#0D110F] border border-white/[0.06] rounded-2xl overflow-hidden min-h-[500px] max-h-[600px]">
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

              {showPrompts && status === 'ready' && (
                <div className="flex flex-col gap-1.5 mt-2">
                  <p className="text-[#A4AAA6]/50 text-[10px] tracking-wider uppercase mb-1">
                    {mode === 'recruiter' ? 'Recruiter prompts' : mode === 'developer' ? 'Developer prompts' : 'Try asking'}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                    {currentPrompts.slice(0, 6).map((q) => (
                      <ArcPrompt key={q} text={q} onClick={(text) => handleQuery(text)} compact />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="px-5 py-4 border-t border-white/[0.06]">
              <ArcInput onSend={handleQuery} disabled={status === 'thinking'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
