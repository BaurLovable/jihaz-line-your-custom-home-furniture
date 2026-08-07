import { useState, useEffect, useRef, type FormEvent, type KeyboardEvent } from "react";
import { Bot, MessageSquare, Send, X, RotateCcw, Phone, Sparkles } from "lucide-react";
import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const STORAGE_KEY = "jihaz-line-chat-history";

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  role: "assistant",
  content:
    "Здравствуйте! Я виртуальный помощник Jihaz-Line. Могу рассказать о мебели на заказ, видах мебели, доставке, процессе заказа и контактах. Что вас интересует?",
  timestamp: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
};

const SUGGESTED_QUESTIONS = [
  "Какую мебель вы изготавливаете?",
  "Можно сделать мебель по моим размерам?",
  "Как проходит заказ?",
  "Где находится ваш цех?",
  "Куда вы доставляете?",
  "Как получить предварительный расчёт?",
];

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>(null);

  // Load chat history from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Message[];
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch {
      // fallback to initial welcome message
    }
  }, []);

  // Save chat history to localStorage on change
  useEffect(() => {
    if (messages.length > 0) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch {
        // ignore localStorage errors
      }
    }
  }, [messages]);

  // Auto-scroll to bottom when new messages arrive or when opening chat
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen, isLoading]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 150);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend ?? input).trim();
    if (!query || isLoading) return;

    setErrorMessage(null);
    setInput("");

    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: query,
      timestamp: now,
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // Prepare history excluding system/welcome if desired, max last 10 messages
      const apiHistory = updatedMessages
        .filter((m) => m.id !== "welcome")
        .slice(-10)
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: query,
          history: apiHistory,
        }),
      });

      const data = (await res.json()) as { message?: string; error?: string };

      if (!res.ok || data.error) {
        const errorText =
          data.error ||
          "Сейчас не удалось получить ответ. Попробуйте ещё раз или свяжитесь с нами через WhatsApp.";
        setErrorMessage(errorText);

        const assistantErrorMsg: Message = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: errorText,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, assistantErrorMsg]);
      } else if (data.message) {
        const assistantMsg: Message = {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content: data.message,
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setMessages((prev) => [...prev, assistantMsg]);
      }
    } catch {
      const fallbackError =
        "Сейчас не удалось получить ответ. Попробуйте ещё раз или свяжитесь с нами через WhatsApp.";
      setErrorMessage(fallbackError);

      const assistantErrorMsg: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: fallbackError,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((prev) => [...prev, assistantErrorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([WELCOME_MESSAGE]);
    setErrorMessage(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleSendMessage();
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Helper to check if contact action buttons should be shown under an assistant message
  const shouldShowActionButtons = (msg: Message) => {
    if (msg.role !== "assistant") return false;
    const lower = msg.content.toLowerCase();
    return (
      lower.includes("whatsapp") ||
      lower.includes("менеджер") ||
      lower.includes("свяж") ||
      lower.includes("расчёт") ||
      lower.includes("уточн") ||
      lower.includes("телефон") ||
      lower.includes("стоимост") ||
      lower.includes("цен")
    );
  };

  const showSuggestions = messages.filter((m) => m.role === "user").length === 0;

  return (
    <>
      {/* Floating Launcher Button */}
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={isOpen ? "Закрыть чат помощник" : "Открыть чат помощник Jihaz-Line"}
        className={`fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-40 flex items-center gap-2.5 rounded-full bg-[#0f172a] px-4 py-3 text-white shadow-xl ring-1 ring-white/10 transition-all duration-300 hover:bg-[#1e293b] hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d97706] ${
          isOpen ? "shadow-2xl ring-2 ring-[#d97706]" : ""
        }`}
      >
        <div className="relative flex items-center justify-center">
          <Bot className="h-6 w-6 text-[#d97706]" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d97706] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#d97706]"></span>
          </span>
        </div>
        <span className="hidden sm:inline text-sm font-semibold tracking-wide">
          {isOpen ? "Скрыть чат" : "Консультант Jihaz-Line"}
        </span>
      </button>

      {/* Floating Chat Modal / Card */}
      {isOpen && (
        <div
          role="dialog"
          aria-label="Помощник Jihaz-Line"
          className="fixed bottom-36 right-4 lg:bottom-20 lg:right-6 z-40 flex w-[calc(100vw-2rem)] sm:w-[390px] h-[540px] max-h-[80vh] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-5"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-slate-800/20 bg-[#0f172a] px-4 py-3 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 border border-slate-700">
                <Bot className="h-5 w-5 text-[#d97706]" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white tracking-wide">Помощник Jihaz-Line</h3>
                <p className="text-[11px] text-slate-300 flex items-center gap-1">
                  <Sparkles className="h-3 w-3 text-[#d97706]" />
                  Помогу с вопросами о мебели и заказе
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={handleClearHistory}
                title="Очистить историю чата"
                aria-label="Очистить историю чата"
                className="rounded-lg p-1.5 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                title="Закрыть"
                aria-label="Закрыть окно чата"
                className="rounded-lg p-1.5 text-slate-300 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Message Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/60 text-slate-800 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.role === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 shadow-sm whitespace-pre-wrap ${
                    msg.role === "user"
                      ? "bg-[#0f172a] text-white rounded-br-none"
                      : "bg-white border border-slate-200 text-slate-800 rounded-bl-none"
                  }`}
                >
                  {msg.content}
                </div>

                <span className="mt-1 px-1 text-[10px] text-slate-400">{msg.timestamp}</span>

                {/* Contextual Action Buttons for Assistant Messages */}
                {shouldShowActionButtons(msg) && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    <a
                      href={waLink(
                        "Здравствуйте! У меня есть вопрос по предварительному расчёту / заказу мебели Jihaz-Line.",
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1 text-xs font-semibold text-white shadow-sm hover:bg-[#20ba59] transition-colors"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                    <a
                      href={site.phoneHref}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm hover:bg-slate-100 transition-colors"
                    >
                      <Phone className="h-3.5 w-3.5 text-slate-600" />
                      Позвонить
                    </a>
                  </div>
                )}
              </div>
            ))}

            {/* Suggested Chips */}
            {showSuggestions && (
              <div className="pt-2 space-y-2">
                <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
                  Часто спрашивают:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {SUGGESTED_QUESTIONS.map((q, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSendMessage(q)}
                      className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 shadow-xs hover:border-[#d97706] hover:bg-amber-50/50 hover:text-slate-900 transition-all text-left"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Typing Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-slate-500 text-xs italic bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-2.5 w-max shadow-sm">
                <Bot className="h-4 w-4 animate-bounce text-[#d97706]" />
                Печатает...
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSubmit} className="border-t border-slate-200 bg-white p-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-1.5 focus-within:border-[#0f172a] focus-within:ring-1 focus-within:ring-[#0f172a] transition-all">
              <textarea
                ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                rows={1}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleInputKeyDown}
                placeholder="Задайте вопрос..."
                disabled={isLoading}
                aria-label="Введите сообщение консультанту"
                className="flex-1 bg-transparent text-sm text-slate-800 placeholder-slate-400 focus:outline-none resize-none max-h-24 min-h-[24px]"
              />

              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                aria-label="Отправить сообщение"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0f172a] text-white transition-colors hover:bg-[#1e293b] disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-1.5 flex justify-between items-center px-1 text-[10px] text-slate-400">
              <span>Shift+Enter для новой строки</span>
              <span>Jihaz-Line AI</span>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
