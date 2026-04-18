'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Section, SectionTitle, ScrollObserver } from './Layout';

/**
 * InvolvePage Component
 * 
 * Redesigned to match the "Get Involved" reference image.
 * Features a 3-column grid and a bottom registration CTA.
 */

const involvementOptions = [
  {
    title: "Join as a Participant",
    description: "Build your AI agent idea from scratch. No experience necessary—just bring your ideas and determination."
  },
  {
    title: "Partner with Us",
    description: "Collaborate with Vercel and reach thousands of developers building AI agents. Showcase your platform."
  },
  {
    title: "Sponsor the Event",
    description: "Support the next generation of AI builders. Connect with talented engineers and build brand visibility."
  }
];

export function InvolvePage() {
  return (
    <Section id="get-involved" className="bg-black border-b border-border/50">
      <ScrollObserver>
        <div className="mb-16">
          <SectionTitle className="text-4xl md:text-5xl font-bold text-white text-left mb-2">
            Get Involved
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {involvementOptions.map((option) => (
            <div 
              key={option.title} 
              className="p-8 bg-[#0a0a0a] border border-white/5 rounded-xl transition-all hover:bg-white/[0.02] flex flex-col h-full"
            >
              <h3 className="text-xl font-bold text-white mb-6">
                {option.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-mono">
                {option.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center space-y-8 py-12 border-t border-white/5">
          <p className="text-lg md:text-xl text-white/50 font-mono tracking-tight max-w-3xl mx-auto">
            Ready to join the global AI agent building movement? Register now and be part of something incredible.
          </p>
          
          <Button 
            className="h-12 px-8 bg-white text-black hover:bg-white/90 font-bold rounded-lg group transition-transform hover:scale-105"
            onClick={() => window.open('https://luma.com/bho2efmh?utm_id=97758_v0_s00_e0_tv0&fbclid=IwY2xjawRQFHxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeBYtzdx3cSoyVWB67R5ocjH8vVv2zuhGntHEy_f1jJMFCiPud5G2LHo4gom4_aem_FYXDh08gPP2NqtKIYgjSyw', '_blank')}
          >
            Register Now
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </ScrollObserver>
    </Section>
  );
}
