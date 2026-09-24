"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface Message {
  id: string;
  sender: "ai" | "user";
  text: string;
  timestamp: string;
  cta?: {
    label: string;
    href: string;
  };
}

const defaultPrompts = [
  "How do I calculate Scope 1 & 2 emissions for my SME?",
  "Which support package is best for Care Homes or Hospitality?",
  "What are the first 3 practical steps to achieve Net Zero?",
  "How can HUNEZ help reduce my business energy bills?",
];

const aiKnowledgeBase: Array<{ keywords: string[]; answer: string; cta?: { label: string; href: string } }> = [
  {
    keywords: ["scope 1", "scope 2", "calculate", "emissions", "footprint"],
    answer: "Scope 1 covers direct emissions from fuel used onsite (heating gas, company vehicles), while Scope 2 covers indirect emissions from purchased electricity. HUNEZ helps SMEs measure both according to GHG Protocol standards and establish verified baselines.",
    cta: { label: "Explore Carbon Footprinting →", href: "/services#carbon-footprinting" },
  },
  {
    keywords: ["care", "care home", "hospitality", "hotel", "sector", "package"],
    answer: "For 24/7 Care Homes and Hospitality SMEs, we focus on energy heating schedules, food waste minimisation, and clinical/general waste sorting routines. Our Net Zero Readiness Assessment maps your exact sector operational risks.",
    cta: { label: "View Sector Solutions →", href: "/who-we-help" },
  },
  {
    keywords: ["steps", "start", "net zero", "pathway", "roadmap", "first"],
    answer: "The 4 connected stages in the HUNEZ methodology are: 1. Measure (establish footprint), 2. Plan (develop a realistic budget roadmap), 3. Reduce (implement operational & staff behaviour changes), and 4. Report (credible evidence with zero greenwashing).",
    cta: { label: "See How HUNEZ Works →", href: "/#how-it-works" },
  },
  {
    keywords: ["bill", "cost", "energy", "save", "money", "financial"],
    answer: "Our SME clients typically achieve a 15% to 30% reduction in energy & resource overheads within their first 12 months. We optimize heating routines, equipment sequencing, and staff energy habits without disrupting business.",
    cta: { label: "Take SME Readiness Quiz →", href: "/#readiness-quiz" },
  },
];

export function AIAssistantWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputQuery, setInputQuery] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Hello! I am HUNEZ AI — your Sustainability Advisor. Ask me anything about SME carbon footprinting, energy cost reduction, or Net Zero strategies.",
      timestamp: "Just now",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputQuery("");
    setIsTyping(true);

    setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      const match = aiKnowledgeBase.find((kb) =>
        kb.keywords.some((kw) => lowerQuery.includes(kw))
      );

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: "ai",
        text: match
          ? match.answer
          : "Thank you for asking! HUNEZ provides tailored Net Zero consultancy, Scope 1-3 footprinting, and staff engagement for SMEs globally. Would you like to schedule a free 1-on-1 consultation with Dr Masse or Dr Desmond?",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        cta: match ? match.cta : { label: "Book Free Consultation →", href: "/contact" },
      };

      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Expanded Chat Drawer / Modal */}
      {isOpen && (
        <div className="mb-4 w-96 max-w-[calc(100vw-2rem)] rounded-[2rem] border border-forest/20 bg-white shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 flex flex-col h-[520px]">
          {/* Drawer Header */}
          <div className="bg-forest text-white p-4 flex items-center justify-between border-b border-forest-light/30">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-400/40">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="absolute -bottom-0.5 -right-0.5 text-xs">✨</span>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-tight">HUNEZ AI Sustainability Assistant</h3>
                <p className="text-[11px] text-emerald-300/90 font-medium">100% SME Science & Strategy</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close Assistant"
            >
              ✕
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-grow p-4 overflow-y-auto space-y-3.5 bg-cream/50 text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
              >
                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    msg.sender === "user"
                      ? "bg-forest text-white rounded-br-none shadow-md"
                      : "bg-white text-charcoal/90 border border-olive/20 rounded-bl-none shadow-sm"
                  }`}
                >
                  <p className="leading-relaxed text-xs sm:text-sm">{msg.text}</p>

                  {msg.cta && (
                    <div className="mt-2.5 pt-2 border-t border-olive/15">
                      <Link
                        href={msg.cta.href}
                        onClick={() => setIsOpen(false)}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-warm hover:underline"
                      >
                        {msg.cta.label}
                      </Link>
                    </div>
                  )}
                </div>
                <span className="text-[10px] text-charcoal/40 mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-white border border-olive/20 w-fit text-xs text-charcoal/60">
                <span className="w-2 h-2 rounded-full bg-forest animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-forest animate-bounce [animation-delay:0.2s]" />
                <span className="w-2 h-2 rounded-full bg-forest animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1">HUNEZ AI is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions */}
          <div className="p-2.5 bg-offwhite border-t border-olive/15 overflow-x-auto whitespace-nowrap flex gap-2 no-scrollbar">
            {defaultPrompts.map((p) => (
              <button
                key={p}
                onClick={() => handleSend(p)}
                className="text-[11px] font-semibold text-forest bg-white px-3 py-1.5 rounded-full border border-forest/15 hover:bg-forest/10 flex-shrink-0 transition-colors"
              >
                {p}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-white border-t border-olive/15 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Ask HUNEZ AI a question..."
              className="flex-grow px-3.5 py-2.5 rounded-full bg-cream/70 border border-olive/20 text-xs font-medium focus:outline-none focus:border-forest"
            />
            <button
              type="submit"
              disabled={!inputQuery.trim()}
              className="w-9 h-9 rounded-full bg-forest text-white flex items-center justify-center disabled:opacity-40 hover:bg-forest-light transition-colors flex-shrink-0 shadow-sm"
              aria-label="Send Message"
            >
              ➔
            </button>
          </form>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 bg-forest text-white px-4 py-3 rounded-full shadow-2xl hover:bg-forest-light transition-all duration-300 border-2 border-emerald-400/40 hover:scale-105"
        aria-label="Open AI Sustainability Assistant"
      >
        <div className="relative w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm">✨</span>
        </div>
        <span className="text-xs font-bold tracking-wide pr-1">
          {isOpen ? "Close AI Advisor" : "Ask HUNEZ AI"}
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-forest" />
      </button>
    </div>
  );
}
