"use client";

import {
  Section,
  SectionTitle,
  SectionDescription,
  ScrollObserver,
} from "./Layout";

/**
 * AboutPage Component
 *
 * Restored to original UI design with exact spacing and typography.
 */

export function AboutPage() {
  return (
    <Section id="about" className="bg-card/50 border-b border-border/50">
      <ScrollObserver>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionTitle>About Zero to Agent</SectionTitle>
            <SectionDescription className="mb-8">
              Zero to Agent Manila is a global build week where developers,
              founders, and builders create AI-powered projects from scratch
              using modern tools. It's a fast-paced event focused on building
              and shipping real products.
            </SectionDescription>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                  Global Impact
                </h4>
                <p className="text-foreground/60">
                  Happening across 20+ countries worldwide simultaneously.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                  Technical Focus
                </h4>
                <p className="text-foreground/60">
                  Deep dive into AI agentic workflows and LLM orchestration.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">
                  Ship Culture
                </h4>
                <p className="text-foreground/60">
                  Go from zero to a deployed agent product by the end of the
                  day.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-96 bg-gradient-to-br from-foreground/10 to-foreground/5 rounded-lg border border-border/50 flex items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.926454278326!2d121.01637090000001!3d14.5461983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9005caf9fb5%3A0xcad0a9eb23cd7497!2sLEAP%20Studios!5e0!3m2!1sen!2sph!4v1776506706877!5m2!1sen!2sph"
              width="550"
              height="385"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </ScrollObserver>
    </Section>
  );
}
