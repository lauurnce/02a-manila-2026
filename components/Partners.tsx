"use client";

import { Section, SectionTitle, ScrollObserver } from "./Layout";

export function Partners() {
  return (
    <Section id="partners" className="relative overflow-hidden">
      <ScrollObserver>
        <div className="max-w-3xl mx-auto">
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
              Special Thanks to our Sponsors and Partners
            </SectionTitle>
            <div className="mt-16">
              {/* Text Row */}
              <div className="flex items-center justify-center gap-16 mb-8">
                <p className="text-[16px] font-mono text-white/40 tracking-[0.6em] uppercase text-center w-auto">
                  Powered by
                </p>
                <p className="text-[16px] font-mono text-white/40 tracking-[0.6em] uppercase text-center w-auto">
                  Venue Partner
                </p>
              </div>

              {/* Image Row */}
              <div className="flex items-center justify-center gap-16">
                <div className="w-[200px] flex justify-center">
                  <img
                    src="/serpapi-logo-white.png"
                    alt="serpAPI"
                    className="h-35 w-auto"
                  />
                </div>
                <div className="w-[200px] flex justify-center">
                  <img
                    src="/leap_studios.svg"
                    alt="leap_studios"
                    className="h-50 w-auto brightness-0 invert"
                  />
                </div>
              </div>
            </div>
            <p className="text-[16px] font-mono text-white/40 tracking-[0.6em] uppercase mt-16">
              Community Partners
            </p>
            <div>
              <div className="flex items-center gap-4 justify-center">
                <img
                  src="enov.svg"
                  alt="e:Novators"
                  className="h-45 w-auto mt-0 brightness-0 invert"
                />
                <img
                  src="data_engineering.svg"
                  alt="Data Engineering Pilipinas"
                  className="h-45 w-auto mt-0 brightness-0 invert"
                />
                <img
                  src="rotary.svg"
                  alt="Rotary Club of Fort Bonifacio Global City"
                  className="h-45 w-auto mt-0 brightness-0 invert"
                />
              </div>
            </div>
          </div>
        </div>
      </ScrollObserver>
    </Section>
  );
}
