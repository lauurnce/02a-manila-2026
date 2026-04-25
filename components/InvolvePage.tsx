"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Section, SectionTitle, ScrollObserver } from "./Layout";
import { GET_INVOLVED, LOGISTICS } from "@/lib/data";

/**
 * InvolvePage Component
 *
 * Redesigned to match the "Get Involved" reference image.
 * Features a 3-column grid and a bottom registration CTA.
 */

const involvementOptions = GET_INVOLVED.options;

export function InvolvePage() {
  return (
    <Section id="get-involved" className="relative overflow-hidden">
      <ScrollObserver>
        <div className="mb-16 text-center">
          <SectionTitle
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-white mb-2"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
              maskImage:
                "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
            }}
          >
            Get Involved
          </SectionTitle>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-white/10" />
            <span className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase">
              JOIN THE MISSION
            </span>
            <div className="h-px w-12 bg-white/10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {involvementOptions.map((option) => (
            <div
              key={option.title}
              className="group relative p-8 bg-white/2 border border-white/5 rounded-sm transition-all hover:bg-white/5 hover:border-white/20 flex flex-col h-full overflow-hidden"
            >
              {/* Corner HUD Ornaments */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/40 transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white/40 transition-colors" />

              <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-tight font-mono group-hover:text-white/90 transition-colors">
                {option.title}
              </h3>
              <p className="text-[13px] text-white/50 leading-relaxed font-mono group-hover:text-white/70 transition-colors">
                {option.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-linear-to-tr from-white/2 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </ScrollObserver>
    </Section>
  );
}
