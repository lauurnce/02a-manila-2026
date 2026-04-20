"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Section, SectionTitle, ScrollObserver } from "./Layout";

/**
 * InvolvePage Component
 *
 * Redesigned to match the "Get Involved" reference image.
 * Features a 3-column grid and a bottom registration CTA.
 */

const involvementOptions = [
  {
    title: "Join as a Participant",
    description:
      "Build your AI agent idea from scratch. No experience necessary—just bring your ideas and determination.",
  },
  {
    title: "Partner with Us",
    description:
      "Collaborate with Vercel and reach thousands of developers building AI agents. Showcase your platform.",
  },
  {
    title: "Sponsor the Event",
    description:
      "Support the next generation of AI builders. Connect with talented engineers and build brand visibility.",
  },
];

export function InvolvePage() {
  return (
    <Section id="get-involved" className="relative overflow-hidden">

      <ScrollObserver>
        <div className="mb-16 text-center">
          <SectionTitle 
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-white mb-2"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
              maskImage: "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
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
              className="group relative p-8 bg-white/[0.02] border border-white/5 rounded-sm transition-all hover:bg-white/[0.05] hover:border-white/20 flex flex-col h-full overflow-hidden"
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
              <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* CTA Register Section — dark, original style */}
        <div className="text-center space-y-12 py-16 border-t border-white/5">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="text-[10px] font-mono text-white/30 tracking-[0.5em] uppercase">
              // Deployment Ready //
            </div>
            <p className="text-xl md:text-2xl text-white/60 font-sans tracking-tight leading-relaxed">
              Ready to join the global AI agent building movement? Register now
              and be part of something incredible.
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() =>
                window.open(
                  "https://luma.com/bho2efmh?utm_id=97758_v0_s00_e0_tv0&fbclid=IwY2xjawRQFHxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeBYtzdx3cSoyVWB67R5ocjH8vVv2zuhGntHEy_f1jJMFCiPud5G2LHo4gom4_aem_FYXDh08gPP2NqtKIYgjSyw",
                  "_blank",
                )
              }
              className="group relative inline-flex items-center gap-4 px-12 py-5 bg-white text-black font-mono font-bold text-[11px] tracking-[0.4em] uppercase rounded-sm overflow-hidden transition-all duration-300 hover:bg-white/90 hover:scale-[1.03] cursor-pointer"
            >
              {/* Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
              <span className="relative z-10">REGISTER NOW</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </ScrollObserver>
    </Section>
  );
}
