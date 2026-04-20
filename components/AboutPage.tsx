"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Section,
  SectionTitle,
  SectionDescription,
  ScrollObserver,
} from "./Layout";

export function AboutPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<
    { id: number; top: string; left: string; opacity: number; delay: string }[]
  >([]);

  useEffect(() => {
    setIsVisible(true);

    // Sync particles from HeroPage logic
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.2,
      delay: `${Math.random() * 5}s`,
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Section
      id="about"
      className="relative bg-black border-b border-white/5 overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Layer - Synced with HeroPage */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Main Atmospheric Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[0%] left-[-10%] w-[50%] h-[50%] opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] blur-[60px]" />

        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%] opacity-[0.15] rotate-12">
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        <div
          className="absolute inset-0 z-10 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            WebkitMaskImage: `radial-gradient(circle 600px at ${(mousePos.x * 0.5 + 0.5) * 100}% ${(mousePos.y * 0.5 + 0.5) * 100}%, white 0%, transparent 100%)`,
            maskImage: `radial-gradient(circle 600px at ${(mousePos.x * 0.5 + 0.5) * 100}% ${(mousePos.y * 0.5 + 0.5) * 100}%, white 0%, transparent 100%)`,
          }}
        />

        {/* Space-like floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-[1px] h-[1px] bg-white rounded-full animate-pulse"
              style={{
                top: particle.top,
                left: particle.left,
                opacity: particle.opacity,
                animationDelay: particle.delay,
              }}
            />
          ))}
        </div>
      </div>

      <ScrollObserver className="w-full">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center w-full">
          <div className="space-y-16">
            <div>
              <div className="mb-6 flex items-center gap-4">
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        i === 0 ? "bg-white/40" : "bg-white/10",
                      )}
                    />
                  ))}
                </div>
                <span className="font-mono text-[9px] text-white/30 tracking-[0.5em] uppercase font-bold">
                  [MISSION_INTELLIGENCE]
                </span>
              </div>

              <SectionTitle className="text-white mb-8 tracking-tight text-2xl md:text-3xl leading-tight">
                <span
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to right, white 60%, rgba(255,255,255,0.3) 100%)",
                    maskImage:
                      "linear-gradient(to right, white 60%, rgba(255,255,255,0.3) 100%)",
                  }}
                >
                  Zero to Agent Manila
                </span>
              </SectionTitle>

              <SectionDescription className="text-white/40 font-mono !text-[12px] md:!text-[12px] leading-relaxed tracking-wide mb-8 uppercase max-w-xl">
                A 7-day high-performance sprint designed for the next generation
                of builders. synchronizing across global borders to architect,
                develop, and deploy autonomous intelligence at scale.
              </SectionDescription>
            </div>

            <div className="grid gap-4">
              {[
                {
                  label: "SYS.01",
                  title: "Global Impact",
                  desc: "20+ countries. 1 synchronized build week.",
                  id: "IMPACT",
                  progress: 72,
                },
                {
                  label: "SYS.02",
                  title: "Technical Focus",
                  desc: "Agentic workflows and LLM orchestration.",
                  id: "TECH",
                  progress: 89,
                },
                {
                  label: "SYS.03",
                  title: "Ship Culture",
                  desc: "Concept to deployment in < 18 hours.",
                  id: "SHIP",
                  progress: 100,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group relative p-5 bg-white/[0.01] border border-white/5 rounded-sm hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-mono text-[9px] text-white/20 tracking-widest">
                      {item.label}
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, idx) => (
                        <div
                          key={idx}
                          className={cn(
                            "w-1 h-3 rounded-[1px] transition-colors duration-500",
                            idx < item.progress / 20
                              ? "bg-white/20 group-hover:bg-white/40"
                              : "bg-white/5",
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-1">
                    <h4 className="text-xs font-bold text-white/80 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-white/30 text-[10px] font-mono leading-relaxed group-hover:text-white/50 transition-colors">
                      {item.desc}
                    </p>
                  </div>

                  {/* Minimalist Scanning Line */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden">
                    <div className="w-1/3 h-full bg-white/20 -translate-x-full group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Strategic Map Container - Centered Vertically by Grid items-center */}
          <div className="relative w-full h-[520px] bg-white/[0.01] border border-white/5 rounded-sm overflow-hidden group self-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.926454278326!2d121.01637090000001!3d14.5461983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9005caf9fb5%3A0xcad0a9eb23cd7497!2sLEAP%20Studios!5e0!3m2!1sen!2sph!4v1776506706877!5m2!1sen!2sph"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.6) contrast(1.1) brightness(0.8)",
              }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 opacity-60 group-hover:opacity-100 group-hover:filter-none transition-all duration-1000"
            ></iframe>

            {/* Tactical Overlay */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]" />

              {/* Central Target Reticle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 w-16 h-16 -translate-x-1/2 -translate-y-1/2 border border-white/10 rounded-full animate-[ping_4s_linear_infinite]" />
                  <div className="w-3 h-3 -translate-x-1/2 -translate-y-1/2 border border-white rounded-full bg-white/10" />
                  <div className="absolute top-[-10px] left-[-0.5px] w-[1px] h-2 bg-white/40" />
                  <div className="absolute bottom-[-10px] left-[-0.5px] w-[1px] h-2 bg-white/40" />
                  <div className="absolute left-[-10px] top-[-0.5px] w-2 h-[1px] bg-white/40" />
                  <div className="absolute right-[-10px] top-[-0.5px] w-2 h-[1px] bg-white/40" />
                </div>
              </div>

              {/* Side Data Stream */}
              <div className="absolute top-10 right-6 flex flex-col items-end gap-1.5 font-mono text-[8px] text-white/20 uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <span>METRO_BGC // ACTIVE</span>
                  <div className="w-1 h-1 rounded-full bg-blue-500/40" />
                </div>
                <div>NODE_SYNC // 02A_MNL</div>
                <div>AUTH_AGENT // V0.1</div>
              </div>

              {/* Status HUD */}
              <div className="absolute bottom-8 left-20 flex items-center gap-3">
                <div className="w-1 h-1 rounded-full bg-red-500 animate-pulse" />
                <span className="font-mono text-[9px] text-white/60 tracking-[0.3em] uppercase transition-opacity group-hover:opacity-100 opacity-40">
                  LIVE_FEED // EST_DATA
                </span>
              </div>

              {/* Location Label */}
              <div className="absolute bottom-8 right-8 p-4 bg-black/60 backdrop-blur-xl border border-white/5 rounded-sm font-mono text-[9px] text-white/30">
                <div className="flex flex-col gap-0.5">
                  <span className="text-white/60 font-bold tracking-widest">
                    [STRATEGIC_COORD]
                  </span>
                  <span className="lowercase">leap studios, manila</span>
                </div>
              </div>

              {/* Minimalist Brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-white/10" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-white/10" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-white/10" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-white/10" />

              {/* Slow Scanline */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
                <div className="w-full h-px bg-white/40 absolute animate-[scan-down_12s_linear_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </ScrollObserver>
    </Section>
  );
}
