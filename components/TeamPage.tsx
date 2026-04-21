"use client";

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Github, Linkedin } from "lucide-react";
import { Section, SectionTitle, ScrollObserver } from "./Layout";


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
    social: { linkedin: "https://www.linkedin.com/in/marvinbarrios/" },
  },
];

// ─── ORGANIZING TEAM (grouped by department) ────────────────────
const organizers = [
  // Technical
  {
    name: "Lawrence Panes",
    role: "Technical Head",
    initials: "LP",
    photo: "/team/lawrence-panes.JPG",
    social: { linkedin: "https://www.linkedin.com/in/lawrencepanes/", github: "https://github.com/lauurnce" },
  },
  {
    name: "Dave Aillerr Rivas",
    role: "Technical Head",
    initials: "DR",
    photo: "/team/dave-rivas.jpg",
    social: { linkedin: "https://www.linkedin.com/in/dave-aillerr-rivas/", github: "https://github.com/daveaillerr" },
  },
  // Logistics
  {
    name: "Fahad Hadji Esmael",
    role: "Logistics Head",
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
    social: { linkedin: "https://www.linkedin.com/in/goingmeri/", github: "https://github.com/goingmeri" },
  },
  {
    name: "Lanz Kristoffer G. Mañalac",
    role: "Registration Officer",
    initials: "LM",
    photo: "/team/lanz-manalac.JPG",
    social: { linkedin: "https://ph.linkedin.com/in/lanz-kristoffer-ma%C3%B1alac-b485b3327", github: "https://github.com/lanzmanalac" },
  },
  {
    name: "Nick Estole",
    role: "Registration Officer",
    initials: "NE",
    photo: "/team/nick-estole.JPG",
    social: { linkedin: "https://www.linkedin.com/in/goingmeri/", github: "https://github.com/goingmeri" },
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
    social: { linkedin: "https://www.linkedin.com/in/will-vincent-parrone-8763311ba/", github: "https://github.com/KyahWill" },
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


function TeamCard({ member, isLarge = false }: { member: TeamMember; isLarge?: boolean }) {
  return (
    <div className={`group relative bg-[#0a0a0a] border border-white/5 rounded-sm transition-all duration-300 hover:bg-white/[0.03] hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)] flex items-center gap-6 overflow-hidden ${isLarge ? "p-8" : "p-6"}`}>
      {/* Corner HUD Ornaments */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-white/40 transition-colors" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-white/40 transition-colors" />

      {/* Scanline Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />

      {/* Large circular photo */}
      <Avatar className="w-24 h-24 shrink-0 bg-white/10 border border-white/10 group-hover:border-white/40 transition-colors">
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
          <h3 className={`font-medium text-white tracking-tight leading-tight ${isLarge ? "text-2xl" : "text-lg"}`}>
            {member.name}
          </h3>
          <p className={`${isLarge ? "text-sm" : "text-[11px]"} text-white/40 mt-1 font-mono uppercase tracking-[0.2em]`}>
            {member.role}
          </p>
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
    <Section id="team" className="relative overflow-hidden">
      {/* RGB Atmospheric Glows */}
      <div className="absolute top-[10%] right-[-10%] w-[50%] h-[50%] opacity-20 bg-[radial-gradient(circle_at_center,var(--color-brand-green),transparent_70%)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[40%] h-[40%] opacity-15 bg-[radial-gradient(circle_at_center,var(--color-brand-blue),transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute top-[50%] left-[40%] w-[30%] h-[30%] opacity-10 bg-[radial-gradient(circle_at_center,var(--color-brand-red),transparent_70%)] blur-[100px] pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none select-none">
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

      <ScrollObserver>
        {/* ── ORGANIZING TEAM ── */}
        <div className="mb-20">
          <div className="mb-16 text-center">
            <SectionTitle
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-white mb-2"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
                maskImage: "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
              }}
            >
              Organizing Team
            </SectionTitle>
            <div className="flex items-center justify-center gap-4 mt-4">
              <div className="h-px w-12 bg-white/10" />
              <span className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase">
                The Architects
              </span>
              <div className="h-px w-12 bg-white/10" />
            </div>
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
    </Section>
  );
}
