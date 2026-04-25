"use client";

import { Section, SectionTitle, ScrollObserver } from "./Layout";

// ─── MAIN COMPONENT ──────────────────────────────────────────────
export function Partners() {
  return (
    <Section id="partners" className="relative overflow-hidden">
      {/* ... glows ... */}
      <div
        aria-hidden="true"
        className="absolute top-[15%] left-[5%] w-[35%] h-[50%] opacity-[0.08] blur-[120px] pointer-events-none select-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #4ade80, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-[15%] right-[5%] w-[35%] h-[50%] opacity-[0.08] blur-[120px] pointer-events-none select-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #818cf8, transparent 70%)",
        }}
      />

      <ScrollObserver>
        <div className="max-w-5xl mx-auto">
          {/* ── SECTION HEADER ── */}
          <div className="text-center mb-16">
            <SectionTitle
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-white mb-2"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
                maskImage:
                  "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
              }}
            >
              Sponsors and Partners
            </SectionTitle>
            <div className="flex flex-col items-center gap-5 mt-10">
              <div className="flex items-center gap-8">
                <div className="h-px w-32 bg-white/20" />
                <span className="text-sm md:text-base font-mono text-white tracking-[0.5em] uppercase font-bold text-glow">
                  Special Thanks to
                </span>
                <div className="h-px w-32 bg-white/20" />
              </div>
            </div>
          </div>

          {/* ── SPONSORS TIER ── */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32 mb-16">
            {/* SerpAPI */}
            <div className="flex flex-col items-center group">
              <a href="https://serpapi.com/">
                <img
                  src="/serpapi-logo-white.png"
                  alt="SerpAPI"
                  className="h-32 md:h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </a>
            </div>

            {/* Leap Studios */}
            <div className="flex flex-col items-center group">
              <a href="https://leapstudios.ph/">
                <img
                  src="/leap_studios.svg"
                  alt="Leap Studios"
                  className="h-42 md:h-48 w-auto object-contain brightness-0 invert transition-transform duration-500 group-hover:scale-110"
                />
              </a>
              <div className="flex flex-col items-center gap-1 mt-2">
                <div className="w-42 h-px bg-white/20 group-hover:w-20 transition-all duration-500" />
                <span className="text-[12px] font-mono text-white/60 tracking-[0.4em] uppercase font-bold text-glow">
                  Venue Partner
                </span>
              </div>
            </div>

            {/* FinShark */}
            <div className="flex flex-col items-center group">
              <a href="https://www.finsharc.com/">
                <img
                  src="finsharc.png"
                  alt="FinShark"
                  className="h-32 md:h-40 w-auto object-contain brightness-0 invert transition-transform duration-500 group-hover:scale-110"
                />
              </a>
            </div>
          </div>

          {/* Rotary & Swarm - Pyramid Bottom */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-32 mb-16 md:-ml-32">
            {/* Rotary */}
            <div className="flex flex-col items-center group">
              <a href="https://www.facebook.com/RCFBGC/">
                <img
                  src="rotary.svg"
                  alt="Rotary Club of Fort Bonifacio Global City"
                  className="h-32 md:h-40 w-auto object-contain brightness-0 invert transition-transform duration-500 group-hover:scale-110"
                />
              </a>
            </div>

            {/* Swarm */}
            <div className="flex flex-col items-center group">
              <div className="h-22 md:h-30 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <a href="https://www.swarm.work/">
                  <img
                    src="/Swarm.png"
                    alt="Swarm"
                    className="h-full w-auto max-w-[80px] object-contain"
                  />
                </a>
              </div>
              <span className="text-xl md:text-2xl font-bold text-white tracking-[0.2em] uppercase -mt-2">
                Swarm
              </span>
            </div>
          </div>

          {/* ── COMMUNITY PARTNERS DIVIDER ── */}
          <div className="flex items-center gap-6 mb-16 mt-16">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-[12px] font-mono text-white/60 tracking-[0.6em] uppercase shrink-0 font-bold">
              Community Partners
            </span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* ── COMMUNITY PARTNERS — enlarged tier ── */}
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-80">
            <a href="https://www.facebook.com/share/1J4MJVAjD2/">
              <img
                src="enov.svg"
                alt="e:Novators"
                className="h-20 md:h-24 w-auto brightness-0 invert transition-transform duration-500 hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </a>
            <a href="https://www.facebook.com/share/1EGepYkZ2Y/">
              <img
                src="DEP.png"
                alt="Data Engineering Pilipinas"
                className="h-20 md:h-24 w-auto brightness-0 invert transition-transform duration-500 hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        </div>
      </ScrollObserver>
    </Section>
  );
}
