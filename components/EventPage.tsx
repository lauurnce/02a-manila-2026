"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import {
  Users,
  Code,
  Trophy,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Section, SectionTitle, ScrollObserver } from "./Layout";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

/**
 * EventPage Component
 *
 * Redesigned to match the "Event Details" reference image.
 * Features a 4-column breakdown of participation, activities, rewards, and format.
 */

const eventHighlights = [
  {
    icon: <Users className="w-8 h-8 text-white/40" />,
    title: "Who Should Join",
    items: [
      "Software engineers",
      "Data engineers",
      "Indie hackers",
      "Startup founders",
    ],
  },
  {
    icon: <Code className="w-8 h-8 text-white/40" />,
    title: "What You'll Do",
    items: [
      "Build AI agents using v0 + Vercel",
      "Deploy a working product",
      "Collaborate with developers globally",
      "Learn cutting-edge AI tools",
    ],
  },
  {
    icon: <Trophy className="w-8 h-8 text-white/40" />,
    title: "Rewards",
    items: [
      "Global prizes worth $6,000+",
      "Networking opportunities",
      "Mentorship from Vercel team",
      "Showcase your work globally",
    ],
  },
  {
    icon: <Zap className="w-8 h-8 text-white/40" />,
    title: "Format",
    items: [
      "Solo participation (no teams)",
      "One-day intensive build",
      "Live event in Metro Manila",
      "Online participation available",
    ],
  },
];

const featuredSpeakers = [
  {
    id: 2,
    name: "Werald Opolento",
    role: "Speaker",
    topic: "What I've built with v0",
    bio: "Werald specializes in building cutting-edge autonomous agents and LLM orchestration. Catch his session as he dives deep into practical tool-use and continuous reasoning loops for actual production environments.",
    image: "/team/werald-opolento.jpg",
  },
  {
    id: 1,
    name: "Marvin Erosa",
    role: "Speaker",
    topic: "Intro to Vercel & v0",
    bio: "A software engineer at Accenture and v0 Ambassador, he is a hackathon champion and builder of impactful systems—from autonomous driving and EV prototypes to environmental monitoring. He also leads and builds communities like ICPEP, CyberPH, PUP Hygears, and GDG, empowering the next generation of engineers.",
    image: "/team/marvin_erosa.jpg",
  },
];

export function EventPage() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [showColor, setShowColor] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSectionVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isSectionVisible) {
      const timer = setTimeout(() => {
        setShowColor(true);
      }, 1000); // Reduced to 1s for faster reveal
      return () => clearTimeout(timer);
    }
  }, [isSectionVisible]);

  // Removed auto-rotation to reduce distraction and focus on interaction.

  const nextSpeaker = () =>
    setCurrentSpeaker((prev) => (prev + 1) % featuredSpeakers.length);
  const prevSpeaker = () =>
    setCurrentSpeaker((prev) =>
      prev === 0 ? featuredSpeakers.length - 1 : prev - 1,
    );

  return (
    <Section id="event-details" className="relative overflow-hidden">
      {/* RGB Atmospheric Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] opacity-20 bg-[radial-gradient(circle_at_center,var(--color-brand-blue),transparent_70%)] blur-[120px]" />
        <div className="absolute bottom-[0%] right-[-5%] w-[50%] h-[50%] opacity-15 bg-[radial-gradient(circle_at_center,var(--color-brand-red),transparent_70%)] blur-[100px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] opacity-10 bg-[radial-gradient(circle_at_center,var(--color-brand-green),transparent_70%)] blur-[100px]" />
      </div>
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
            Event Details
          </SectionTitle>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-12 bg-white/10" />
            <span className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase">
              Mission Parameters
            </span>
            <div className="h-px w-12 bg-white/10" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventHighlights.map((highlight) => (
            <div
              key={highlight.title}
              className="group relative p-8 bg-[#0a0a0a] border border-white/5 rounded-sm transition-all hover:bg-white/[0.03] hover:border-white/20 flex flex-col items-start overflow-hidden"
            >
              {/* Corner HUD Ornaments */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/40 transition-colors" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white/40 transition-colors" />

              <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-500">
                {highlight.icon}
              </div>

              <h3 className="text-lg font-bold text-white mb-6 tracking-tight uppercase font-mono group-hover:text-white/90 transition-colors">
                {highlight.title}
              </h3>

              <ul className="space-y-4 w-full">
                {highlight.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-[13px] text-white/50 leading-relaxed font-mono tracking-tight group-hover:text-white/70 transition-colors"
                  >
                    <span className="mr-3 text-white/20 group-hover:text-white/40 transition-colors">
                      //
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Hover Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Speaker Highlight Section */}
        <div ref={sectionRef} className="mt-32 h-auto md:h-[600px]">
          <style jsx>{`
            @keyframes shimmer-fast {
              0% {
                transform: translateX(-100%);
                opacity: 0;
              }
              50% {
                opacity: 0.5;
              }
              100% {
                transform: translateX(100%);
                opacity: 0;
              }
            }
            .animate-shimmer-fast {
              animation: shimmer-fast 1.5s infinite;
            }
          `}</style>
          <div className="flex flex-col-reverse md:flex-row gap-16 items-start h-full">
            {/* Left Column: Details (Rigid Layout) */}
            <div className="flex-1 flex flex-col justify-start h-full pt-8">
              {/* Fixed Header Area */}
              <div className="h-10 flex items-center gap-4 mb-2">
                <div className="h-px w-8 bg-white/20" />
                <div className="text-[10px] font-mono text-white/40 tracking-[0.3em] uppercase flex items-center gap-2 group cursor-default">
                  <span className="text-white/60 group-hover:text-white transition-colors">
                    ▲
                  </span>{" "}
                  [SESSION_PREVIEW:{" "}
                  {String(currentSpeaker + 1).padStart(2, "0")}/
                  {String(featuredSpeakers.length).padStart(2, "0")}]
                </div>
              </div>

              {/* Speaker Name Area (Locked Height) */}
              <div className="h-24 md:h-32 flex items-center mb-4">
                <h3
                  className="text-5xl md:text-7xl font-sans font-medium tracking-tight text-white leading-none selection:bg-white selection:text-black whitespace-nowrap"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
                    maskImage:
                      "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
                  }}
                >
                  {featuredSpeakers[currentSpeaker].name}
                </h3>
              </div>

              {/* Tag/Topic Area (Locked Height) */}
              <div className="h-10 flex items-center gap-4 mb-6">
                <div className="px-3 py-1 border border-white/10 bg-white/5 rounded-sm text-[10px] font-mono text-white/50 tracking-widest uppercase relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer-fast" />
                  <span className="relative">
                    {featuredSpeakers[currentSpeaker].role}
                  </span>
                </div>
                <div className="text-[10px] font-mono text-white/60 tracking-widest uppercase flex items-center gap-2">
                  <span className="text-white/20">•</span>
                  TOPIC: {featuredSpeakers[currentSpeaker].topic}
                </div>
              </div>

              {/* Bio Area (Locked Height) */}
              <div className="h-40 md:h-48 overflow-hidden">
                <p className="text-white/60 leading-relaxed max-w-xl text-lg font-sans">
                  {featuredSpeakers[currentSpeaker].bio}
                </p>
              </div>

              {/* Navigation Buttons (Locked Place) */}
              <div className="mt-auto pb-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={prevSpeaker}
                    className="group relative flex items-center gap-3 px-6 py-3 border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300 rounded-sm overflow-hidden w-36 justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer-fast" />
                    <ChevronLeft className="w-4 h-4 text-white/40 group-hover:text-white transition-colors relative z-10" />
                    <span className="text-[9px] font-mono text-white/40 group-hover:text-white/80 tracking-[0.2em] uppercase relative z-10">
                      PREV
                    </span>
                  </button>
                  <button
                    onClick={nextSpeaker}
                    className="group relative flex items-center gap-3 px-10 py-3 bg-white hover:bg-white/90 transition-all duration-300 rounded-sm overflow-hidden w-36 justify-center"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-transparent -translate-x-full group-hover:animate-shimmer-fast" />
                    <span className="text-[9px] font-mono text-black tracking-[0.2em] uppercase relative z-10 font-bold">
                      NEXT
                    </span>
                    <ChevronRight className="w-4 h-4 text-black transition-colors relative z-10" />
                  </button>
                </div>
              </div>
            </div>
            {/* Right Column: Image Perspective (The "Artifact" - Fixed Size) */}
            <div className="w-full md:w-1/2 group relative flex justify-end pt-12 md:pt-20">
              <div className="relative w-full max-w-[500px] aspect-square border border-white/10 rounded-sm overflow-hidden bg-black shadow-[0_0_50px_rgba(255,255,255,0.02)] transition-transform duration-700 hover:scale-[1.01]">
                {/* Decorative Triangle HUD Ornaments */}
                <div className="absolute -top-4 -left-4 w-8 h-8 opacity-20 border-t border-l border-white pointer-events-none z-20" />
                <div className="absolute -bottom-4 -right-4 w-8 h-8 opacity-20 border-b border-r border-white pointer-events-none z-20" />
                <div className="absolute top-1/2 -right-6 -translate-y-1/2 text-[8px] font-mono text-white/10 rotate-90 tracking-[1em] pointer-events-none uppercase">
                  [ORBITAL_FRAME_v2]
                </div>

                {/* Scanline Animation */}
                <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10 blur-[1px] animate-[scan-down_4s_linear_infinite]" />
                  <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle, #fff 1px, transparent 1px)",
                      backgroundSize: "20px 20px",
                    }}
                  />
                </div>

                <img
                  key={currentSpeaker}
                  src={featuredSpeakers[currentSpeaker].image}
                  alt={featuredSpeakers[currentSpeaker].name}
                  className={cn(
                    "w-full h-full object-cover transition-all duration-700 ease-in-out animate-in fade-in zoom-in-105",
                    showColor
                      ? "grayscale-0 opacity-100"
                      : "grayscale opacity-80",
                  )}
                />

                {/* Inner Bezel Glow */}
                <div className="absolute inset-0 border border-white/5 rounded-sm pointer-events-none shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]" />

                {/* Floating Triangle Icon overlay */}
                <div className="absolute bottom-6 left-6 p-2 bg-black/80 backdrop-blur-md border border-white/10 rounded-sm">
                  <div className="text-white/60 animate-pulse text-[10px]">
                    ▲
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollObserver>
    </Section>
  );
}
