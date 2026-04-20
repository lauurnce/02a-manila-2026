'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Section, SectionTitle, ScrollObserver } from './Layout';

/**
 * PoliciesPage Component
 * 
 * Restored to original UI design with standard Accordion styling.
 */

const policies = [
  {
    title: "Code of Conduct",
    content: "We are committed to providing a friendly, safe, and welcoming environment for all, regardless of level of experience, gender, gender identity and expression, sexual orientation, disability, personal appearance, body size, race, ethnicity, age, religion, or nationality."
  },
  {
    title: "Participation Rules",
    content: "All projects built during the event must be new. Use of open-source frameworks and libraries is encouraged. All participants must be present (physically or virtually) for the duration of the build day."
  },
  {
    title: "Intellectual Property",
    content: "Participants own the intellectual property of the projects they build during Zero to Agent Manila. We encourage sharing and open-sourcing projects to benefit the global developer community."
  },
  {
    title: "Support & Mentorship",
    content: "Technical mentors will be available throughout the day. However, participants are expected to have a baseline understanding of development and AI tools."
  }
];

export function PoliciesPage() {
  return (
    <Section id="policies" className="relative overflow-hidden">
      {/* RGB Atmospheric Glows */}
      <div className="absolute top-[-5%] left-[-5%] w-[45%] h-[45%] opacity-15 bg-[radial-gradient(circle_at_center,var(--color-brand-blue),transparent_70%)] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] opacity-15 bg-[radial-gradient(circle_at_center,var(--color-brand-red),transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute top-[50%] right-[30%] w-[30%] h-[30%] opacity-10 bg-[radial-gradient(circle_at_center,var(--color-brand-green),transparent_70%)] blur-[100px] pointer-events-none" />

      <ScrollObserver>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle 
              className="text-4xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-white mb-2"
              style={{
                WebkitMaskImage: "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
                maskImage: "linear-gradient(to bottom, white 50%, rgba(255,255,255,0.2) 100%)",
              }}
            >
              Rules & Policies
            </SectionTitle>
            <div className="flex items-center justify-center gap-4 mt-6">
              <div className="h-px w-8 bg-white/10" />
              <p className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase">
                Compliance Protocol
              </p>
              <div className="h-px w-8 bg-white/10" />
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {policies.map((policy, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border border-white/5 bg-white/[0.01] rounded-sm px-6 transition-all hover:bg-white/[0.03] hover:border-white/20"
              >
                <AccordionTrigger className="text-left py-6 hover:no-underline group">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono text-white/20 group-hover:text-white/40 transition-colors">
                      [0{index + 1}]
                    </span>
                    <span className="text-sm font-mono font-bold tracking-widest text-white/80 group-hover:text-white transition-colors uppercase">
                      {policy.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-white/50 leading-relaxed font-mono text-xs max-w-2xl border-t border-white/5 pt-4">
                  {policy.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </ScrollObserver>
    </Section>
  );
}
