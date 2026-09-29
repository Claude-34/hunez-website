"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export function FloatingConsultationWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Card Drawer */}
      {isOpen && (
        <div className="mb-4 w-96 max-w-[calc(100vw-2rem)] rounded-[2.5rem] border border-forest/20 bg-white shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 flex flex-col">
          {/* Header */}
          <div className="bg-forest text-white p-5 border-b border-forest-light/30 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              aria-label="Close Consultation Menu"
            >
              ✕
            </button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-emerald-400 bg-forest text-white flex items-center justify-center font-bold text-xs shadow">
                  M
                </div>
                <div className="inline-block h-9 w-9 rounded-full ring-2 ring-emerald-400 bg-olive text-white flex items-center justify-center font-bold text-xs shadow">
                  D
                </div>
              </div>
              <div>
                <h3 className="text-sm font-bold tracking-tight text-white">
                  Human-Centred SME Experts
                </h3>
                <p className="text-[11px] text-emerald-300 font-semibold">
                  Dr Masse & Dr Desmond
                </p>
              </div>
            </div>
          </div>

          {/* Body Options */}
          <div className="p-5 bg-cream/50 space-y-4">
            <p className="text-xs text-charcoal/80 leading-relaxed font-medium">
              Have questions about carbon footprinting, net zero strategy, or energy cost reduction? Talk directly with our senior consultants.
            </p>

            <div className="space-y-2.5">
              <Link
                href="/contact?intent=consultation"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between w-full p-3.5 rounded-2xl bg-forest text-white font-bold text-xs hover:bg-forest-light transition-all shadow-sm group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">📅</span>
                  <span>Book Free 1-on-1 Consultation</span>
                </div>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>

              <a
                href={`tel:${siteConfig.phones[0]}`}
                className="flex items-center justify-between w-full p-3.5 rounded-2xl bg-white border border-olive/20 text-forest font-bold text-xs hover:bg-forest/5 transition-all shadow-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">📞</span>
                  <span>Call Us: {siteConfig.phones[0]}</span>
                </div>
                <span className="text-warm group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center justify-between w-full p-3.5 rounded-2xl bg-white border border-olive/20 text-forest font-bold text-xs hover:bg-forest/5 transition-all shadow-xs group"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">✉️</span>
                  <span>Email: {siteConfig.email}</span>
                </div>
                <span className="text-warm group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            <div className="pt-3 border-t border-olive/15 text-center">
              <Link
                href="/#readiness-quiz"
                onClick={() => setIsOpen(false)}
                className="text-[11px] font-bold text-warm hover:underline"
              >
                Take SME Net Zero Readiness Assessment →
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-3 bg-forest text-white px-4 py-3 rounded-full shadow-2xl hover:bg-forest-light transition-all duration-300 border-2 border-emerald-400/40 hover:scale-105"
        aria-label="Open Expert Consultation Menu"
      >
        <div className="relative w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm">💬</span>
        </div>
        <div className="text-left pr-1">
          <span className="block text-xs font-extrabold tracking-wide leading-tight">
            {isOpen ? "Close Menu" : "Speak with Experts"}
          </span>
          <span className="block text-[10px] text-emerald-300 font-semibold leading-tight">
            100% Human-Centred
          </span>
        </div>
      </button>
    </div>
  );
}

export const AIAssistantWidget = FloatingConsultationWidget;
