import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  type ReactNode,
  type MutableRefObject,
} from 'react';

export interface ArcMessage {
  id: string;
  role: 'arc' | 'user';
  text: string;
  sources?: { label: string; href: string }[];
  links?: { label: string; href: string }[];
}

interface ArcContextValue {
  isOpen: boolean;
  openArc: (context?: string) => void;
  closeArc: () => void;
  toggleArc: () => void;
  messages: ArcMessage[];
  addMessage: (msg: Omit<ArcMessage, 'id'>) => void;
  clearMessages: () => void;
  initialContext: string | null;
 triggerRef: MutableRefObject<HTMLButtonElement | null>;
}

const ArcContext = createContext<ArcContextValue | null>(null);

export function useArc() {
  const ctx = useContext(ArcContext);
  if (!ctx) throw new Error('useArc must be used within ArcProvider');
  return ctx;
}

import { arcInitialMessage } from '@/data/arcKnowledge';

export function ArcProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ArcMessage[]>([
    {
      id: 'arc-initial',
      role: 'arc',
      text: arcInitialMessage,
    },
  ]);
  const [initialContext, setInitialContext] = useState<string | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openArc = useCallback((context?: string) => {
    if (context) {
      setInitialContext(context);
    }
    setIsOpen(true);
  }, []);

  const closeArc = useCallback(() => {
    setIsOpen(false);
    setInitialContext(null);
  }, []);

  const toggleArc = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const addMessage = useCallback((msg: Omit<ArcMessage, 'id'>) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    setMessages((prev) => [...prev, { ...msg, id }]);
  }, []);

  const clearMessages = useCallback(() => {
    setMessages([
      {
        id: 'arc-initial',
        role: 'arc',
        text: arcInitialMessage,
      },
    ]);
  }, []);

  return (
    <ArcContext.Provider
      value={{
        isOpen,
        openArc,
        closeArc,
        toggleArc,
        messages,
        addMessage,
        clearMessages,
        initialContext,
        triggerRef,
      }}
    >
      {children}
    </ArcContext.Provider>
  );
}
