"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function PointerHUD() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, rawX: 0, rawY: 0 });
  const [scanValue, setScanValue] = useState("0.0");
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const scanInterval = setInterval(() => {
      setScanValue((Math.random() * 100).toFixed(1));
    }, 2000);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y, rawX: e.clientX, rawY: e.clientY });
      
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);

      // Check if hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, select, textarea');
      setIsHoveringLink(!!isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(scanInterval);
    };
  }, []);

  if (typeof window === "undefined") return null;

  return (
    <div
      className="fixed inset-0 z-[100] pointer-events-none select-none"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <div
        className="absolute transition-all duration-75 ease-out"
        style={{
          left: mousePos.rawX,
          top: mousePos.rawY,
        }}
      >
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          {/* Target Reticle */}
          <div className={cn(
            "w-8 h-8 border border-white/20 rounded-full transition-all duration-300",
            isHoveringLink ? "scale-150 border-white/40 bg-white/5" : "scale-100"
          )} />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={cn(
               "w-px h-2 bg-white/40 transition-all duration-300",
               isHoveringLink ? "h-4" : "h-2"
            )} />
            <div className={cn(
              "absolute w-2 h-px bg-white/40 transition-all duration-300",
              isHoveringLink ? "w-4" : "w-2"
            )} />
          </div>

          {/* Coordinates HUD - Hidden by default, shown only on interactive hover */}
          <div className={cn(
            "absolute top-6 left-6 font-mono text-[9px] text-white/60 bg-black/40 backdrop-blur-sm p-2 border border-white/10 rounded overflow-hidden transition-all duration-300",
            isHoveringLink ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          )}>
            <div className="flex flex-col gap-1">
              <span>X: {Math.round((mousePos.x + 1) * 500)}</span>
              <span>Y: {Math.round((mousePos.y + 1) * 500)}</span>
              <span className="text-white/20">
                DATA_SCAN: {scanValue}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
