"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Github, Linkedin } from "lucide-react";
import { Section, SectionTitle, ScrollObserver } from "./Layout";

/**
 * TeamPage Component
 *
 * Structure:
 *   - Organization Directors (2 cards, centered top row)
 *   - Organizing Team grouped by role (3 per row)
 *   - Speakers (separate section, 2 cards centered)
 *
 * HOW TO ADD PHOTOS:
 * 1. Place your team photos in:  public/team/
 * 2. Name each file to match the "photo" field below, e.g. "france-khalil.jpg"
 * 3. Supported formats: .jpg, .png, .webp
 * 4. Recommended size: 400x400px (square crop works best for the circle)
 */

// ─── ORGANIZATION DIRECTORS ─────────────────────────────────────
const directors = [
  {
    name: "France Khalil",
    role: "Organization Director Head",
    initials: "FK",
    photo: "/team/france-khalil.jpg",
    social: { linkedin: "https://www.linkedin.com/in/fkromero", github: "https://github.com/FranceKR" },
  },
  {
    name: "Marvin Barrios",
    role: "Organization Director Head",
    initials: "MB",
    photo: "/team/marvin-barrios.PNG",
    social: { linkedin: "https://www.linkedin.com/in/marvinbarrios/", github: "#" },
  },
];

// ─── ORGANIZING TEAM (grouped by department) ────────────────────
const organizers = [
  // Technical
  {
    name: "Lawrence Panes",
    role: "Technical Lead",
    initials: "LP",
    photo: "/team/lawrence-panes.JPG",
    social: { linkedin: "https://www.linkedin.com/in/lawrencepanes/", github: "https://github.com/lauurnce" },
  },
  {
    name: "Dave Aillerr Rivas",
    role: "Technical Lead",
    initials: "DR",
    photo: "/team/dave-rivas.jpg",
    social: { linkedin: "https://www.linkedin.com/in/dave-aillerr-rivas/", github: "https://github.com/daveaillerr" },
  },
  // Logistics
  {
    name: "Fahad Hadji Esmael",
    role: "Logistics Lead",
    initials: "FE",
    photo: "/team/fahad-esmael.JPG",
    social: { linkedin: "https://www.linkedin.com/in/fahad-hadji-esmael-15322b31b/", github: "https://github.com/Hanji-exe" },
  },
  {
    name: "Alpie Obas",
    role: "Logistics Officer",
    initials: "AO",
    photo: "/team/alpie-obas.JPG",
    social: { linkedin: "https://www.linkedin.com/in/agobas", github: "https://github.com/IKiousChase" },
  },
  {
    name: "Arjhine Ty",
    role: "Logistics Officer",
    initials: "AT",
    photo: "/team/arjhine-ty.JPG",
    social: { linkedin: "https://www.linkedin.com/in/arrochi", github: "https://github.com/arrogance231" },
  },
  {
    name: "Nico Ome",
    role: "Logistics Officer",
    initials: "NO",
    photo: "/team/nico-ome.PNG",
    social: { linkedin: "https://www.linkedin.com/in/angome" },
  },
  // Registration
  {
    name: "Mary Jean Navarro",
    role: "Registration Head",
    initials: "MN",
    photo: "/team/mary-jean-navarro.png",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Lanz Kristoffer G. Mañalac",
    role: "Registration Officer",
    initials: "LM",
    photo: "/team/lanz-manalac.jpg",
    social: { linkedin: "#", github: "#" },
  },
  // Media, Marketing & External
  {
    name: "Nate Dy",
    role: "Media & Marketing Head",
    initials: "ND",
    photo: "/team/nate-dy.JPG",
    social: { linkedin: "https://www.linkedin.com/in/nate-peralta/", github: "https://github.com/peraltanate" },
  },
  {
    name: "Ven Murillo",
    role: "Media & Marketing Officer",
    initials: "VM",
    photo: "/team/ven-murillo.JPG",
    social: { linkedin: "https://www.linkedin.com/in/ven-vincent-murillo" },
  },
  {
    name: "Will Vincent Parrone",
    role: "External Head",
    initials: "WP",
    photo: "/team/will-parrone.jpeg",
    social: { linkedin: "#", github: "#" },
  },
  // Emcees / Hosts
  {
    name: "Anam Iqbal",
    role: "Emcee / Host",
    initials: "AI",
    photo: "/team/anam-iqbal.png",
    social: { linkedin: "https://www.linkedin.com/in/anam-mazhar-iqbal-8483601ba?utm_source=share_via&utm_content=profile&utm_medium=member_android", github: "#" },
  },
  {
    name: "Larr Gallos",
    role: "Emcee / Host",
    initials: "LG",
    photo: "/team/larr-gallos.jpg",
    social: { linkedin: "#", github: "#" },
  },
];

// ─── REUSABLE CARD COMPONENT ────────────────────────────────────
type TeamMember = {
  name: string;
  role: string;
  initials: string;
  photo: string;
  social: { linkedin: string; github?: string };
};

function TeamCard({ member, isLarge = false }: { member: TeamMember; isLarge?: boolean }) {
  return (
    <div className={`group/card relative bg-[#0a0a0a]/80 border border-white/5 rounded-xl transition-all duration-500 hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.08),0_0_60px_rgba(255,255,255,0.04)] flex items-center gap-6 overflow-hidden ${isLarge ? "p-8" : "p-6"}`}>
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent" />
      {/* Top edge glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

      {/* Large circular photo */}
      <Avatar className="relative z-10 w-24 h-24 shrink-0 bg-white/10 border-2 border-white/10 group-hover/card:border-white/20 transition-all duration-500">
        {member.photo && (
          <AvatarImage
            src={member.photo}
            alt={member.name}
            className="object-cover"
          />
        )}
        <AvatarFallback className="text-white font-bold text-xl">
          {member.initials}
        </AvatarFallback>
      </Avatar>

      {/* Name, Role, Socials — stacked vertically alongside the photo */}
      <div className="relative z-10 flex flex-col justify-center gap-2 min-h-[96px]">
        <div>
          <h3 className={`font-bold text-white leading-tight ${isLarge ? "text-2xl" : "text-lg"}`}>
            {member.name}
          </h3>
          <p className={`${isLarge ? "text-base" : "text-sm"} text-white/40 mt-1`}>{member.role}</p>
        </div>

        {/* Clickable Social Links */}
        <div className={`flex items-center gap-3 ${isLarge ? "mt-2" : "mt-1"}`}>
          {member.social.linkedin && (
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          {member.social.github && (
            <a
              href={member.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ─────────────────────────────────────────────
export function TeamPage() {
  const [particles, setParticles] = useState<
    { id: number; top: string; left: string; opacity: number; delay: string }[]
  >([]);

  useEffect(() => {
    const newParticles = [...Array(20)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.25,
      delay: `${Math.random() * 5}s`,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <section id="team" className="relative w-full px-4 py-16 md:py-24 lg:py-32 bg-black overflow-hidden border-b border-border/50">
      {/* ── PREMIUM BACKGROUND ── */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Atmospheric radial glows */}
        <div className="absolute top-[-5%] left-[-10%] w-[50%] h-[50%] opacity-15 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3)_0%,transparent_70%)] blur-[100px]" />
        <div className="absolute bottom-[-5%] right-[-10%] w-[50%] h-[50%] opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_70%)] blur-[80px]" />
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60%] h-[40%] opacity-[0.04] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.4)_0%,transparent_70%)] blur-[60px]" />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles */}
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

      {/* ── CONTENT ── */}
      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollObserver>
          {/* ── ORGANIZING TEAM ── */}
          <div className="mb-20">
            <div className="mb-12 text-center">
              <SectionTitle className="text-4xl md:text-5xl font-bold text-white mb-2">
                Organizing Team
              </SectionTitle>
            </div>

            {/* Directors – 2 cards, centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-6">
              {directors.map((member) => (
                <TeamCard key={member.name} member={member} isLarge={true} />
              ))}
            </div>

            {/* Rest of the team – 3 per row, last row centered */}
            <div className="flex flex-wrap justify-center gap-6">
              {organizers.map((member) => (
                <div key={member.name} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]">
                  <TeamCard member={member} />
                </div>
              ))}
            </div>
          </div>
        </ScrollObserver>
      </div>
    </section>
  );
}
