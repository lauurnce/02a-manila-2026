"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * HeroPage Component
 *
 * featuring the "Agent Core" Hologram.
 */
export function HeroPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [particles, setParticles] = useState<
    { id: number; top: string; left: string; opacity: number; delay: string }[]
  >([]);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isHoveringHologram, setIsHoveringHologram] = useState(false);
  const [scanValue, setScanValue] = useState("0.0");

  useEffect(() => {
    setIsVisible(true);

    // Initial scan value
    setScanValue((Math.random() * 100).toFixed(1));

    // Update scan value less frequently to prevent flickering
    const scanInterval = setInterval(() => {
      setScanValue((Math.random() * 100).toFixed(1));
    }, 2000);

    // Generate static particles on client-side to avoid hydration mismatch
    const newParticles = [...Array(30)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.3,
      delay: `${Math.random() * 5}s`,
    }));
    setParticles(newParticles);

    return () => {
      clearInterval(scanInterval);
    };
  }, []);

  const triggerPulse = () => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 1000);
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-black flex items-center justify-center px-6 md:px-20 overflow-hidden"
    >
      <style jsx global>{`
        @keyframes glitch {
          0% {
            transform: translate(0);
            text-shadow: none;
            opacity: 1;
          }
          2% {
            transform: translate(-2px, 1px);
            text-shadow:
              2px 0 rgba(255, 255, 255, 0.3),
              -2px 0 rgba(255, 255, 255, 0.1);
            opacity: 0.8;
          }
          4% {
            transform: translate(2px, -1px);
            text-shadow:
              -2px 0 rgba(255, 255, 255, 0.3),
              2px 0 rgba(255, 255, 255, 0.1);
            opacity: 0.9;
          }
          6% {
            transform: translate(0);
            text-shadow: none;
            opacity: 1;
          }
          100% {
            transform: translate(0);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        @keyframes rotate-3d {
          from {
            transform: rotateX(0deg) rotateY(0deg);
          }
          to {
            transform: rotateX(360deg) rotateY(360deg);
          }
        }
        @keyframes scan-down {
          0% {
            top: 0;
            opacity: 0;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-glitch {
          animation: glitch 5s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Pointer HUD Removed - Now Global */}

      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Large Elliptical Glow — top specific for this section */}
        <div
          className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%] opacity-30 rotate-12"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Large Decorative Wireframe Triangles */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] border border-white/20 rotate-[15deg]"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] border border-white/10 -rotate-[12deg]"
            style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
          />
        </div>

        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%] opacity-30 rotate-12">
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        <div
          className="absolute inset-0 z-10 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
            WebkitMaskImage: `radial-gradient(circle 400px at 50% 50%, white 0%, transparent 100%)`,
            maskImage: `radial-gradient(circle 400px at 50% 50%, white 0%, transparent 100%)`,
          }}
        />

        {/* Space-like floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse"
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

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 py-20 transform scale-90 transition-transform duration-700">
        {/* Left Content: Text */}
        <div className="flex flex-col items-start transition-transform duration-300 ease-out flex-1">
          {/* Top Branding Cluster */}
          <div
            className={cn(
              "mt-4 mb-8 flex items-center transition-all duration-1000 delay-200",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            {/* The Unified Brand Triangle */}
            <div
              className="w-10 h-10 bg-white shadow-[0_0_25px_rgba(255,255,255,0.4)]"
              style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
            />
            <div>
              <img
                src="/v0-icon.svg"
                alt="v0 Icon"
                className="ml-4 w-15 h-15 invert "
              />
            </div>
          </div>

          <div
            className={cn(
              "mb-4 transition-all duration-1000 delay-400 font-mono text-white/40",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8",
            )}
          >
            <p className="text-xl md:text-2xl tracking-tight uppercase flex items-center gap-4">
              <span>02A</span>
              <span className="text-white/20">/</span>
              <span>GLOBAL BUILD WEEK</span>
            </p>
          </div>

          <div
            className={cn(
              "mb-6 transition-all duration-1000 delay-600 select-none",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12",
            )}
          >
            <h1
              className="text-5xl md:text-7xl lg:text-[90px] font-sans font-medium tracking-[-0.03em] text-white leading-[1.1]"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, white 20%, rgba(255,255,255,0.2) 100%)",
                maskImage:
                  "linear-gradient(to right, white 20%, rgba(255,255,255,0.2) 100%)",
              }}
            >
              Zero to Agent
            </h1>
          </div>

          {/* Short Description */}
          <div
            className={cn(
              "mb-10 max-w-lg transition-all duration-1000 delay-700 font-mono text-white/50",
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8",
            )}
          >
            <p className="text-sm md:text-base leading-relaxed tracking-wide">
              The ultimate 7-day sprint to build, deploy, and scale autonomous
              agents. Join the world's most ambitious builders in Manila for a
              week of pure execution.
            </p>
          </div>

          <div
            className={cn(
              "flex flex-col items-start gap-12 transition-all duration-1000 delay-800",
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8",
            )}
          >
            {/* Glassmorphic Shimmer CTA Button with RGB Accent */}
            <a
              href="https://luma.com/bho2efmh?utm_id=97758_v0_s00_e0_tv0&fbclid=IwY2xjawRQFHxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeBYtzdx3cSoyVWB67R5ocjH8vVv2zuhGntHEy_f1jJMFCiPud5G2LHo4gom4_aem_FYXDh08gPP2NqtKIYgjSyw"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-12 py-5 bg-white/5 text-white font-black text-[11px] tracking-[0.4em] uppercase rounded-sm border border-white/10 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-white/10 no-underline"
            >
              {/* RGB Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/20 via-brand-green/20 to-brand-blue/20 blur-xl" />
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-brand-red via-brand-green to-brand-blue" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-brand-blue via-brand-green to-brand-red" />
              </div>

              {/* Button Shimmer Effect */}
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none" />

              <span className="relative z-10">REGISTER NOW</span>
            </a>

            <div className="flex flex-col items-start gap-4">
              <span className="text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase">
                Powered by
              </span>
              <div className="flex items-center gap-5 group cursor-pointer">
                <div className="relative h-20 w-44 translate-y-1">
                  {/* Base Logo (White) */}
                  <img
                    src="/serpapi-logo-white.png"
                    alt="SerpAPI"
                    className="absolute inset-0 h-full w-auto opacity-70 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none"
                  />
                  {/* Gradient Logo (Visible on Hover via Masking) */}
                  <div
                    className="absolute inset-0 h-full w-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-r from-blue-500 to-purple-500"
                    style={{
                      maskImage: "url('/serpapi-logo-white.png')",
                      WebkitMaskImage: "url('/serpapi-logo-white.png')",
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content: Holographic Agent Core */}
        <div
          className={cn(
            "flex-1 flex items-center justify-center transition-all duration-1000 delay-700 perspective-1000",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90",
          )}
          onMouseEnter={() => setIsHoveringHologram(true)}
          onMouseLeave={() => setIsHoveringHologram(false)}
        >
          <div
            onClick={triggerPulse}
            className={cn(
              "relative w-72 h-72 md:w-96 md:h-96 preserve-3d group transition-transform duration-500 ease-out animate-float",
              isPulsing && "scale-110",
            )}
          >
            {/* Outer HUD Rings */}
            <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite] preserve-3d" />
            <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse] preserve-3d" />

            {/* 3D Geometric Core (Dodecahedron-inspired wireframe) */}
            <div className="absolute inset-0 flex items-center justify-center preserve-3d py-10">
              <div
                className="relative w-40 h-40 preserve-3d"
                style={{
                  animation: "rotate-3d 20s linear infinite",
                  transform: `scale(${isPulsing ? 1.5 : 1})`,
                }}
              >
                {/* Visual Shards / Facets */}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 border border-white/20 bg-white/5 backdrop-blur-[2px]"
                    style={{
                      transform: `rotateY(${i * 60}deg) translateZ(80px) rotateX(15deg)`,
                      opacity: isPulsing ? 0.8 : 0.3,
                      transition: "all 0.5s ease-out",
                    }}
                  />
                ))}

                {/* Central Glowing Seed (Triangular Prism with RGB refraction candidate) */}
                <div
                  className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-500",
                    isPulsing ? "scale-150" : "scale-100",
                  )}
                >
                  {/* RGB Refractive Aura */}
                  <div className="absolute inset-[-20px] opacity-40 blur-2xl animate-pulse">
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-red opacity-30"
                      style={{
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                      }}
                    />
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-green opacity-30 rotate-[120deg]"
                      style={{
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                      }}
                    />
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-blue opacity-30 rotate-[240deg]"
                      style={{
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                      }}
                    />
                  </div>

                  {/* Glow Backdrop */}
                  <div
                    className="w-16 h-16 bg-white opacity-40 blur-xl animate-pulse"
                    style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
                  />
                  {/* The Prism Core with subtle RGB edges */}
                  <div
                    className="absolute w-10 h-10 bg-white shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center"
                    style={{
                      clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                      background: "linear-gradient(135deg, #fff 0%, #eee 100%)",
                    }}
                  >
                    {/* Inner RGB "Chromatic Aberration" look */}
                    <div
                      className="absolute inset-0 bg-brand-red/10 -translate-x-px translate-y-px"
                      style={{
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                      }}
                    />
                    <div
                      className="absolute inset-0 bg-brand-blue/10 translate-x-px -translate-y-px"
                      style={{
                        clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-px bg-white/20 animate-[scan-down_4s_linear_infinite]" />
            </div>

            {/* Hover Tooltip Label */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              <span className="text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase font-bold">
                [AGENT_SEED_V0.1]
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator with RGB line */}
      <div
        className={cn(
          "absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1200ms]",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        <div className="flex flex-col items-center gap-4">
          <span className="text-[9px] font-mono text-white/30 tracking-[0.4em] uppercase">
            Scroll to Initialize
          </span>
          <div className="w-px h-12 bg-[linear-gradient(to_bottom,var(--brand-red),var(--brand-green),var(--brand-blue),transparent)]" />
        </div>
      </div>
    </section>
  );
}
