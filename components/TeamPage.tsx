"use client";

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
    photo: "/team/arjhine-ty.jpg",
    social: { linkedin: "https://www.linkedin.com/in/arrochi", github: "https://github.com/arrogance231" },
  },
  {
    name: "Chloe Bejar-Fong",
    role: "Logistics Officer",
    initials: "CB",
    photo: "/team/chloe-bejar-fong.jpg",
    social: { linkedin: "#", github: "#" },
  },
  {
    name: "Nico Ome",
    role: "Logistics Officer",
    initials: "NO",
    photo: "/team/nico-ome.PNG",
    social: { linkedin: "#", github: "#" },
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
  social: { linkedin: string; github: string };
};

function TeamCard({ member, isLarge = false }: { member: TeamMember; isLarge?: boolean }) {
  return (
    <div className={`bg-[#0a0a0a] border border-white/5 rounded-xl transition-all duration-300 hover:bg-white/[0.03] hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.06)] flex items-center gap-6 ${isLarge ? "p-8" : "p-6"}`}>
      {/* Large circular photo */}
      <Avatar className="w-24 h-24 shrink-0 bg-white/10 border-2 border-white/10">
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
      <div className="flex flex-col justify-center gap-2 min-h-[96px]">
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
  return (
    <Section id="team" className="border-b border-border/50">
      <ScrollObserver>
        {/* ── ORGANIZING TEAM ── */}
        <div className="mb-20">
          <div className="mb-12 text-center">
            <SectionTitle className="text-4xl md:text-5xl font-bold text-white mb-2">
              Organizing Team
            </SectionTitle>
          </div>

          {/* Directors – 2 cards, centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-6 ">
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
