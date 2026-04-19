"use client";

import { useState, useEffect } from "react";
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
    id: 1,
    name: "Werald Opolento",
    role: "Speaker",
    topic: "Advanced AI Agents",
    bio: "Werald specializes in building cutting-edge autonomous agents and LLM orchestration. Catch his session as he dives deep into practical tool-use and continuous reasoning loops for actual production environments.",
    image: "/team/werald-opolento.JPG",
  },
  {
    id: 2,
    name: "Marvin Erosa",
    role: "Special Guest",
    topic: "To Be Announced",
    bio: "We have an incredible special guest speaker flying in to share insights on the future of AI and developer tooling. Stay tuned for the official announcement!",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
  },
];

export function EventPage() {
  const [currentSpeaker, setCurrentSpeaker] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSpeaker((prev) => (prev + 1) % featuredSpeakers.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSpeaker = () =>
    setCurrentSpeaker((prev) => (prev + 1) % featuredSpeakers.length);
  const prevSpeaker = () =>
    setCurrentSpeaker((prev) =>
      prev === 0 ? featuredSpeakers.length - 1 : prev - 1,
    );

  return (
    <Section id="event-details" className="border-b border-border/50">
      <ScrollObserver>
        <div className="mb-16 ">
          <SectionTitle className="text-4xl md:text-5xl font-bold text-white text-center mb-2">
            Event Details
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventHighlights.map((highlight) => (
            <div
              key={highlight.title}
              className="p-8 bg-[#0a0a0a] border border-white/5 rounded-xl transition-all hover:bg-white/[0.02] flex flex-col items-start"
            >
              <div className="mb-6">{highlight.icon}</div>

              <h3 className="text-xl font-bold text-white mb-6">
                {highlight.title}
              </h3>

              <ul className="space-y-4">
                {highlight.items.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start text-sm text-white/50 leading-relaxed font-mono tracking-tight"
                  >
                    <span className="mr-2 opacity-50">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Speaker Highlight Section */}
        <div className="mt-24">
          <div className="flex flex-col-reverse md:flex-row gap-12 items-center">
            {/* Left Column: Details (No Box) */}
            <div className="flex-1 flex flex-col justify-center">
              <SectionTitle className="text-3xl md:text-4xl font-bold text-white text-left">
                Featured Speakers
              </SectionTitle>
              <div className="flex items-center justify-between mb-8">
                <div className="text-sm font-mono text-white/40 tracking-widest uppercase">
                  Featured Session {currentSpeaker + 1}/
                  {featuredSpeakers.length}
                </div>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                {featuredSpeakers[currentSpeaker].name}
              </h3>
              <p className="text-lg text-white/50 font-mono mb-6">
                {featuredSpeakers[currentSpeaker].role}{" "}
                <span className="opacity-50 mx-2">|</span> Topic:{" "}
                {featuredSpeakers[currentSpeaker].topic}
              </p>

              <p className="text-white/60 leading-relaxed max-w-lg text-lg">
                {featuredSpeakers[currentSpeaker].bio}
              </p>
            </div>

            {/* Right Column: Image Carousel (Boxed) */}
            <div className="w-full md:w-1/2 h-80 md:h-[500px] border border-white/10 rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              <img
                key={currentSpeaker}
                src={featuredSpeakers[currentSpeaker].image}
                alt={featuredSpeakers[currentSpeaker].name}
                className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
              />
              <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </ScrollObserver>
    </Section>
  );
}
