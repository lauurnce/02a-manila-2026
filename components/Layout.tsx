'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

/**
 * Layout Utilities Component
 * 
 * This file consolidates core structural and animation helpers to reduce file bloat.
 * It provides the building blocks for consistent section layout and scroll animations.
 */

// --- Section Component ---

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'w-full px-4 py-16 md:py-24 lg:py-32',
        className
      )}
    >
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </section>
  );
}

export function SectionTitle({ children, className, style }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <h2 
      className={cn(
        'text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance',
        className
      )}
      style={style}
    >
      {children}
    </h2>
  );
}

export function SectionDescription({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn(
      'text-lg md:text-xl text-foreground/70 leading-relaxed max-w-2xl text-balance',
      className
    )}>
      {children}
    </p>
  );
}

// --- ScrollObserver Animation Wrapper ---

interface ScrollObserverProps {
  children: ReactNode;
  className?: string;
}

export function ScrollObserver({ children, className }: ScrollObserverProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'relative transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
        className
      )}
    >
      {children}
    </div>
  );
}
