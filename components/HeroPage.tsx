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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, rawX: 0, rawY: 0 });
  const [particles, setParticles] = useState<{ top: string; left: string; opacity: number; delay: string }[]>([]);
  const [isPulsing, setIsPulsing] = useState(false);
  const [isHoveringHologram, setIsHoveringHologram] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    // Generate static particles on client-side to avoid hydration mismatch
    const newParticles = [...Array(30)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.3,
      delay: `${Math.random() * 5}s`
    }));
    setParticles(newParticles);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y, rawX: e.clientX, rawY: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const triggerPulse = () => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 1000);
  };

  return (
    <section 
      id="hero" 
      className="relative w-full min-h-screen bg-black flex items-center justify-center px-6 md:px-20 overflow-hidden cursor-none"
    >
      <style jsx global>{`
        @keyframes glitch {
          0% { transform: translate(0); text-shadow: none; opacity: 1; }
          2% { transform: translate(-2px, 1px); text-shadow: 2px 0 rgba(255,255,255,0.3), -2px 0 rgba(255,255,255,0.1); opacity: 0.8; }
          4% { transform: translate(2px, -1px); text-shadow: -2px 0 rgba(255,255,255,0.3), 2px 0 rgba(255,255,255,0.1); opacity: 0.9; }
          6% { transform: translate(0); text-shadow: none; opacity: 1; }
          100% { transform: translate(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.05); }
        }
        @keyframes rotate-3d {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
        @keyframes scan-down {
          0% { top: 0; opacity: 0; }
          50% { opacity: 0.5; }
          100% { top: 100%; opacity: 0; }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-glitch { animation: glitch 5s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .perspective-1000 { perspective: 1000px; }
        .preserve-3d { transform-style: preserve-3d; }
      `}</style>

      {/* Custom Pointer HUD */}
      <div 
        className="fixed z-[100] pointer-events-none transition-opacity duration-300"
        style={{ 
          left: mousePos.rawX, 
          top: mousePos.rawY,
          opacity: isVisible ? 1 : 0
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          {/* Target Reticle */}
          <div className="w-8 h-8 border border-white/20 rounded-full" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[1px] h-2 bg-white/40" />
            <div className="absolute w-2 h-[1px] bg-white/40" />
          </div>
          
          {/* Coordinates HUD */}
          {isHoveringHologram && (
            <div className="absolute top-6 left-6 font-mono text-[9px] text-white/60 bg-black/40 backdrop-blur-sm p-2 border border-white/10 rounded overflow-hidden animate-in fade-in zoom-in duration-200">
              <div className="flex flex-col gap-1">
                <span>X: {Math.round((mousePos.x + 1) * 500)}</span>
                <span>Y: {Math.round((mousePos.y + 1) * 500)}</span>
                <span className="text-white/20">AGENT_SCAN: {(Math.random() * 100).toFixed(1)}%</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Main Atmospheric Glows */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] opacity-20 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[0%] left-[-10%] w-[50%] h-[50%] opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] opacity-5 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0%,transparent_70%)] blur-[60px]" />

        <div className="absolute top-[-20%] left-[-10%] w-[120%] h-[140%] opacity-30 rotate-12">
          <div 
            className="w-full h-full"
            style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.15) 0%, transparent 70%)' }}
          />
        </div>

        <div 
          className="absolute inset-0 z-10 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            WebkitMaskImage: `radial-gradient(circle 400px at ${(mousePos.x * 0.5 + 0.5) * 100}% ${(mousePos.y * 0.5 + 0.5) * 100}%, white 0%, transparent 100%)`,
            maskImage: `radial-gradient(circle 400px at ${(mousePos.x * 0.5 + 0.5) * 100}% ${(mousePos.y * 0.5 + 0.5) * 100}%, white 0%, transparent 100%)`
          }}
        />

        {/* Space-like floating particles */}
        <div className="absolute inset-0">
          {particles.map((particle, i) => (
            <div 
              key={i}
              className="absolute w-[1.5px] h-[1.5px] bg-white rounded-full animate-pulse"
              style={{
                top: particle.top,
                left: particle.left,
                opacity: particle.opacity,
                animationDelay: particle.delay
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20 py-20">
        
        {/* Left Content: Text */}
        <div 
          className="flex flex-col items-start transition-transform duration-300 ease-out flex-1"
          style={{ transform: `translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)` }}
        >
          {/* Top Logos */}
          <div className={cn(
            "mb-12 flex items-center gap-8 transition-all duration-1000 delay-200",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <img src="/vercel-icon.svg" alt="Vercel" className="w-10 h-10 invert" />
            <img src="/v0-icon.svg" alt="v0" className="w-12 h-auto invert" />
          </div>

          <div className={cn(
            "mb-4 transition-all duration-1000 delay-400 font-mono text-white/40",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <p className="text-xl md:text-2xl tracking-tight uppercase">
              02A<span className="text-white/20">/</span>GLOBAL BUILD WEEK
            </p>
          </div>

          <div className={cn(
            "mb-6 transition-all duration-1000 delay-600 select-none",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
          )}>
            <h1 
              className="text-5xl md:text-7xl lg:text-[90px] font-sans font-medium tracking-[-0.03em] text-white leading-[1.1]"
              style={{
                WebkitMaskImage: 'linear-gradient(to right, white 20%, rgba(255,255,255,0.2) 100%)',
                maskImage: 'linear-gradient(to right, white 20%, rgba(255,255,255,0.2) 100%)'
              }}
            >
              Zero to Agent
            </h1>
          </div>

          {/* Short Description */}
          <div className={cn(
            "mb-10 max-w-lg transition-all duration-1000 delay-700 font-mono text-white/50",
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
          )}>
            <p className="text-sm md:text-base leading-relaxed tracking-wide">
              The ultimate 7-day sprint to build, deploy, and scale autonomous agents. Join the world's most ambitious builders in Manila for a week of pure execution.
            </p>
          </div>

          <div className={cn(
            "flex flex-col items-start gap-12 transition-all duration-1000 delay-800",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            {/* Glassmorphic Shimmer CTA Button */}
            <a 
              href="https://luma.com/bho2efmh?utm_id=97758_v0_s00_e0_tv0&fbclid=IwY2xjawRQFHxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeBYtzdx3cSoyVWB67R5ocjH8vVv2zuhGntHEy_f1jJMFCiPud5G2LHo4gom4_aem_FYXDh08gPP2NqtKIYgjSyw"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block px-10 py-5 bg-white/10 text-white font-black text-xs tracking-[0.3em] uppercase rounded-full border border-white/20 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:border-white/40 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)] no-underline"
            >
              {/* Button Shimmer Effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite] pointer-events-none" />
              
              {/* Button Hover Aura */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 80px at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.1), transparent)`
                }}
              />
              <span className="relative z-10">Register for Manila</span>
            </a>

            <div className="flex flex-col items-start gap-4">
              <span className="text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase">Powered by</span>
              <div className="flex items-center gap-5 group cursor-pointer">
                <img src="/serpai-logo.svg" alt="SerpAPI" className="h-8 w-auto invert" />
                <div className="h-8 w-[1px] bg-white/20" />
                <span className="text-xl font-bold text-white tracking-[0.05em]">SerpAPI</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content: Holographic Agent Core */}
        <div 
          className={cn(
            "flex-1 flex items-center justify-center transition-all duration-1000 delay-700 perspective-1000",
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          )}
          onMouseEnter={() => setIsHoveringHologram(true)}
          onMouseLeave={() => setIsHoveringHologram(false)}
        >
          <div 
            onClick={triggerPulse}
            className={cn(
              "relative w-72 h-72 md:w-96 md:h-96 preserve-3d cursor-none group transition-transform duration-500 ease-out animate-float",
              isPulsing && "scale-110"
            )}
            style={{
              transform: `rotateY(${mousePos.x * 20}deg) rotateX(${mousePos.y * -20}deg)`
            }}
          >
            {/* Outer HUD Rings */}
            <div className="absolute inset-0 border border-white/10 rounded-full animate-[spin_10s_linear_infinite] preserve-3d" />
            <div className="absolute inset-4 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse] preserve-3d" />
            
            {/* 3D Geometric Core (Dodecahedron-inspired wireframe) */}
            <div className="absolute inset-0 flex items-center justify-center preserve-3d py-10">
              <div 
                className="relative w-40 h-40 preserve-3d" 
                style={{ 
                  animation: 'rotate-3d 20s linear infinite',
                  transform: `scale(${isPulsing ? 1.5 : 1})`
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
                      transition: 'all 0.5s ease-out'
                    }}
                  />
                ))}
                
                {/* Central Glowing Seed (Triangular Prism) */}
                <div className={cn(
                  "absolute inset-0 flex items-center justify-center transition-all duration-500",
                  isPulsing ? "scale-150" : "scale-100"
                )}>
                  {/* Glow Backdrop */}
                  <div 
                    className="w-16 h-16 bg-white opacity-40 blur-xl animate-pulse" 
                    style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                  />
                  {/* The Prism Core */}
                  <div 
                    className="absolute w-8 h-8 bg-white shadow-[0_0_30px_white]"
                    style={{ 
                      clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                      background: 'linear-gradient(135deg, #fff 0%, #aaa 100%)'
                    }}
                  />
                  {/* Inner Refraction Line */}
                  <div 
                    className="absolute w-px h-6 bg-black/20"
                    style={{ transform: 'translateX(-2px) rotate(-15deg)' }}
                  />
                </div>
              </div>
            </div>

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-white/20 animate-[scan-down_4s_linear_infinite]" />
            </div>

            {/* Hover Tooltip Label */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              <span className="text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase font-bold">
                [AGENT_SEED_V0.2]
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div className={cn(
        "absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[1200ms]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}>
        <div className="flex flex-col items-center gap-4">
          <span className="text-[9px] font-mono text-white/30 tracking-[0.4em] uppercase">Scroll to Initialize</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
      
    </section>
  );
}
