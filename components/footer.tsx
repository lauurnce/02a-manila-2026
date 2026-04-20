'use client';

import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 pt-32 pb-16 overflow-hidden">
      {/* White accent line at top */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/20 z-10" />

      {/* RGB Atmospheric Glows */}
      <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[50%] opacity-15 bg-[radial-gradient(circle_at_center,var(--color-brand-green),transparent_70%)] blur-[120px] pointer-events-none" />
      <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] opacity-10 bg-[radial-gradient(circle_at_center,var(--color-brand-blue),transparent_70%)] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[30%] h-[30%] opacity-10 bg-[radial-gradient(circle_at_center,var(--color-brand-red),transparent_70%)] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Brand */}
          <div className="space-y-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-4 bg-white"
                  style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                />
                <h3 className="text-xl font-medium text-white tracking-widest uppercase">
                  Zero to Agent
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-white/20" />
                <span className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase">
                  v0.1_Manila
                </span>
              </div>
            </div>
            <p className="text-white/40 text-[11px] font-mono leading-relaxed max-w-xs uppercase tracking-wider">
              The ultimate 7-day sprint to build and scale autonomous intelligence.
              Join the world's most ambitious builders in Manila.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.5em]">
              Navigation
            </h4>
            <ul className="space-y-4">
              {[
                { href: '#about', label: 'About Page' },
                { href: '#event-details', label: 'Event Details' },
                { href: '#team', label: 'Organizing Team' },
                { href: '#policies', label: 'Policies' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="group flex items-center gap-3 text-white/40 hover:text-white transition-all">
                    <div
                      className="w-1.5 h-1.5 bg-white/20 group-hover:bg-white transition-colors"
                      style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                    />
                    <span className="text-xs font-mono uppercase tracking-widest">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.5em]">
              Resources
            </h4>
            <ul className="space-y-4">
              {[
                { label: 'Vercel Intelligence', color: 'var(--color-brand-red)' },
                { label: 'v0 Generator', color: 'var(--color-brand-green)' },
                { label: 'Core Documentation', color: 'var(--color-brand-blue)' },
              ].map((item) => (
                <li key={item.label}>
                  <a href="#" className="group flex items-center gap-3 text-white/40 hover:text-white transition-colors">
                    <div
                      className="w-1.5 h-1.5"
                      style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', background: item.color }}
                    />
                    <span className="text-xs font-mono uppercase tracking-widest">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-8">
            <h4 className="text-[10px] font-mono font-bold text-white/20 uppercase tracking-[0.5em]">
              Transmission
            </h4>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 bg-white/5 border border-white/10 rounded-sm text-white/40 hover:text-white hover:border-white/30 transition-all group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform relative z-10" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-[10px] font-mono text-white/20 uppercase tracking-[0.3em]">
              © 2026 Zero to Agent // Manila Chapter
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px w-4 bg-white/10" />
              <div
                className="w-1.5 h-1.5 bg-white/10"
                style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
              />
              <span className="text-[8px] font-mono text-white/10 tracking-[0.5em] uppercase">
                End of Transmission
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div
              className="w-4 h-4 bg-white opacity-20 hover:opacity-100 transition-opacity"
              style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
            />
            <div className="h-4 w-px bg-white/10" />
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">
              Powered by{' '}
              <span className="text-white/40 hover:text-white transition-colors cursor-pointer">SerpAPI</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
