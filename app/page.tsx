"use client";

import { HeroPage } from "@/components/HeroPage";
import { AboutPage } from "@/components/AboutPage";
import { EventPage } from "@/components/EventPage";
import { TeamPage } from "@/components/TeamPage";
import { InvolvePage } from "@/components/InvolvePage";
import { PoliciesPage } from "@/components/PoliciesPage";
import { Partners } from "@/components/Partners";

/**
 * Main Home Page
 *
 * This is the primary single-page entry point.
 * It renders all cleaned and reorganized page components in sequence.
 */

export default function Home() {
  return (
    <main className="w-full">
      <HeroPage />
      <AboutPage />
      <EventPage />
      <TeamPage />
      <InvolvePage />
      <Partners />
      <PoliciesPage />
    </main>
  );
}
