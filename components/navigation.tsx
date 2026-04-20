'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Event', href: '#event-details' },
  { label: 'Team', href: '#team' },
  { label: 'Register Now', href: '#get-involved' },
  { label: 'Policies', href: '#policies' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeItem, setActiveItem] = useState('#about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const sections = navItems.map(item => {
        const el = document.querySelector(item.href);
        return {
          id: item.href,
          top: el ? el.getBoundingClientRect().top : 0
        };
      });

      const current = sections.find(s => s.top > -150 && s.top < 300);
      if (current) setActiveItem(current.id);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex flex-col items-center',
        isScrolled ? 'pt-0' : 'pt-4'
      )}
    >
      {/* RGB Brand Line (Premium Accent) - Absolute Top */}
      <div className="absolute top-0 left-0 w-full h-[2px] z-[70] flex">
        <div className="flex-1 h-full opacity-70" style={{ background: 'var(--color-brand-red)' }} />
        <div className="flex-1 h-full opacity-70" style={{ background: 'var(--color-brand-green)' }} />
        <div className="flex-1 h-full opacity-70" style={{ background: 'var(--color-brand-blue)' }} />
      </div>

      <div className={cn(
        "w-full max-w-7xl flex flex-col transition-all duration-500 rounded-sm border border-transparent overflow-hidden relative",
        isScrolled && "bg-black/60 backdrop-blur-xl border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]"
      )}>
        <div className="w-full flex items-center justify-between px-8 py-3">
          {/* Logo / Title Area with Brand Triangle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 group"
            >
              {/* The Brand Triangle */}
              <div 
                className="w-4 h-4 bg-white transition-transform duration-500 group-hover:rotate-[360deg] shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
              />
              <span className="text-[11px] font-mono font-bold text-white tracking-[0.3em] uppercase">
                Zero to Agent
              </span>
            </button>
          </div>

          {/* Centered Pill Navigation (Refined) */}
          <div className="hidden md:flex items-center gap-1 px-1 py-1 rounded-sm bg-white/5 border border-white/5 backdrop-blur-sm relative group/nav">
            {/* Subtle Scanline on Nav */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent -translate-x-full group-hover/nav:animate-[shimmer_3s_infinite] pointer-events-none" />

            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "px-5 py-2 text-[10px] font-mono uppercase tracking-[0.2em] transition-all duration-500 rounded-sm relative overflow-visible group/btn",
                  activeItem === item.href
                    ? "text-white font-bold"
                    : "text-white/40 hover:text-white"
                )}
              >
                {/* Active Triangle Indicator */}
                {activeItem === item.href && (
                  <div 
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white shadow-[0_0_10px_white]"
                    style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
                  />
                )}
                
                <span className="relative z-10">{item.label}</span>
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => window.open('https://luma.com/bho2efmh?utm_id=97758_v0_s00_e0_tv0&fbclid=IwY2xjawRQFHxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeBYtzdx3cSoyVWB67R5ocjH8vVv2zuhGntHEy_f1jJMFCiPud5G2LHo4gom4_aem_FYXDh08gPP2NqtKIYgjSyw', '_blank')}
              className="hidden md:flex relative group px-10 py-3 bg-white hover:bg-white/90 rounded-sm overflow-hidden transition-all duration-300 cursor-pointer items-center gap-2"
            >
              {/* Scanning Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
              
              <span className="relative z-10 text-black font-mono font-bold text-[10px] tracking-[0.4em] uppercase">
                REGISTER
              </span>

              {/* Corner HUD Markers in black */}
              <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-black/20 group-hover:border-black/40 transition-colors" />
              <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-black/20 group-hover:border-black/40 transition-colors" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-sm bg-white/5 text-white border border-white/10"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="w-full h-[2px] bg-white/5 relative">
          <div
            className="absolute top-0 left-0 h-full transition-all duration-150 ease-out bg-white shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full mt-4 left-6 right-6 bg-black/95 border border-white/10 rounded-sm backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-4 fade-in duration-300 overflow-hidden">
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "block w-full text-left px-4 py-3 text-[10px] font-mono tracking-[0.2em] uppercase rounded-sm transition-colors",
                  activeItem === item.href ? "bg-white text-black font-bold" : "text-white/50 hover:text-white"
                )}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Button
                onClick={() => window.open('https://luma.com/bho2efmh?utm_id=97758_v0_s00_e0_tv0&fbclid=IwY2xjawRQFHxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeBYtzdx3cSoyVWB67R5ocjH8vVv2zuhGntHEy_f1jJMFCiPud5G2LHo4gom4_aem_FYXDh08gPP2NqtKIYgjSyw', '_blank')}
                className="w-full bg-white text-black h-12 rounded-sm font-black text-[10px] tracking-widest uppercase"
              >
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
