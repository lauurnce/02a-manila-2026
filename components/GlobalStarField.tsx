'use client';

import { useEffect, useState } from 'react';

type Star = {
  id: number;
  top: string;
  left: string;
  opacity: number;
  delay: string;
  size: string;
  duration: string;
};

/**
 * GlobalStarField
 * 80 pulsing white dots spread across the fixed background — matches HeroPage aesthetic.
 * Uses a custom CSS keyframe injected via <style> so each star gets its own random duration.
 */
export function GlobalStarField() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generated: Star[] = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      top: `${(Math.random() * 100).toFixed(2)}%`,
      left: `${(Math.random() * 100).toFixed(2)}%`,
      opacity: parseFloat((Math.random() * 0.4 + 0.08).toFixed(2)),
      delay: `${(Math.random() * 8).toFixed(2)}s`,
      // 15% chance of larger "bright" star
      size: Math.random() > 0.85 ? '2px' : '1.5px',
      // Each star pulses at its own speed (2s–7s)
      duration: `${(Math.random() * 5 + 2).toFixed(2)}s`,
    }));
    setStars(generated);
  }, []);

  if (stars.length === 0) return null;

  return (
    <>
      {/* Inject the custom twinkle keyframe once */}
      <style>{`
        @keyframes star-twinkle {
          0%, 100% { opacity: var(--star-opacity); }
          50%       { opacity: calc(var(--star-opacity) * 0.1); }
        }
      `}</style>

      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              // CSS custom property so the keyframe can reference the base opacity
              ['--star-opacity' as string]: star.opacity,
              opacity: star.opacity,
              animation: `star-twinkle ${star.duration} ease-in-out ${star.delay} infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}
