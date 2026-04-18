'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Event', href: '#event-details' },
  { label: 'Team', href: '#team' },
  { label: 'Register', href: '#get-involved' },
  { label: 'Policies', href: '#policies' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('#about');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 flex justify-center',
        isScrolled ? 'top-2' : 'top-0'
      )}
    >
      <div className={cn(
        "w-full max-w-7xl flex items-center justify-between transition-all duration-500 px-6 py-3 rounded-full border border-transparent",
        isScrolled && "bg-black/60 backdrop-blur-xl border-white/10 shadow-2xl"
      )}>
        {/* Logo */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className="flex items-center gap-2 group"
        >
          <span className="text-sm font-bold text-white tracking-widest uppercase hidden md:block">
            Zero to Agent
          </span>
        </button>

        {/* Centered Pill Navigation (Desktop) */}
        <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "px-4 py-1.5 text-[11px] font-mono uppercase tracking-widest transition-all duration-300 rounded-full",
                activeItem === item.href 
                  ? "bg-white text-black font-bold" 
                  : "text-white/40 hover:text-white"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4">
          <Button
            onClick={() => window.open('https://luma.com/bho2efmh?utm_id=97758_v0_s00_e0_tv0&fbclid=IwY2xjawRQFHxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeBYtzdx3cSoyVWB67R5ocjH8vVv2zuhGntHEy_f1jJMFCiPud5G2LHo4gom4_aem_FYXDh08gPP2NqtKIYgjSyw', '_blank')}
            className="hidden md:flex bg-white text-black hover:bg-black hover:text-white border border-white transition-all duration-300 rounded-full px-6 font-black text-[10px] h-8 tracking-widest uppercase"
          >
            Register Now
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-white border border-white/10"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full mt-4 left-6 right-6 bg-black/95 border border-white/10 rounded-3xl backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-4 fade-in duration-300 overflow-hidden">
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "block w-full text-left px-4 py-3 text-sm font-mono tracking-[0.2em] uppercase rounded-xl transition-colors",
                  activeItem === item.href ? "bg-white text-black font-bold" : "text-white/50 hover:text-white"
                )}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-white/10">
              <Button
                onClick={() => window.open('https://luma.com/bho2efmh?utm_id=97758_v0_s00_e0_tv0&fbclid=IwY2xjawRQFHxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAEwAAEeBYtzdx3cSoyVWB67R5ocjH8vVv2zuhGntHEy_f1jJMFCiPud5G2LHo4gom4_aem_FYXDh08gPP2NqtKIYgjSyw', '_blank')}
                className="w-full bg-white text-black h-12 rounded-2xl font-black text-xs tracking-widest uppercase"
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
