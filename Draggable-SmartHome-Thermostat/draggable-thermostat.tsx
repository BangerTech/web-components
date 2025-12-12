import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

export function DraggableThermostat({ value = 22, onChange }: { value?: number, onChange?: (v: number) => void }) {
  const [temp, setTemp] = useState(value);
  const [isDragging, setIsDragging] = useState(false);
  const dialRef = useRef<HTMLDivElement>(null);

  // Constants for dial math
  const minTemp = 16;
  const maxTemp = 32;

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    updateTemperature(e);
  };

  const updateTemperature = (e: React.PointerEvent | PointerEvent) => {
    if (!dialRef.current) return;
    
    const rect = dialRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate angle from center
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;
    let angle = Math.atan2(y, x) * (180 / Math.PI);
    
    let angleDeg = angle; 
    // Clamp "dead zone" at bottom
    if (angleDeg > 135 && angleDeg < 180) angleDeg = 135;
    if (angleDeg < -135 && angleDeg > -180) angleDeg = -135;
    
    // Clamp to range
    const clampedAngle = Math.max(-135, Math.min(135, angleDeg));
    
    const percentage = (clampedAngle + 135) / 270;
    const newTemp = minTemp + (percentage * (maxTemp - minTemp));
    
    setTemp(Math.round(newTemp * 10) / 10);
    if (onChange) onChange(Math.round(newTemp * 10) / 10);
  };

  useEffect(() => {
    const handleGlobalMove = (e: PointerEvent) => {
      if (isDragging) updateTemperature(e);
    };
    const handleGlobalUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('pointermove', handleGlobalMove);
    window.addEventListener('pointerup', handleGlobalUp);
    return () => {
      window.removeEventListener('pointermove', handleGlobalMove);
      window.removeEventListener('pointerup', handleGlobalUp);
    };
  }, [isDragging]);

  const rotation = ((temp - minTemp) / (maxTemp - minTemp)) * 270 - 135;

  return (
    <div className="relative w-72 h-72 rounded-full bg-surface-darker shadow-rim p-2 flex items-center justify-center select-none touch-none">
       {/* Outer Ring with Ticks */}
       <div className="absolute inset-4 rounded-full bg-surface-dark shadow-soft-out flex items-center justify-center pointer-events-none">
          {Array.from({ length: 60 }).map((_, i) => {
             // Only show ticks for roughly 270 degrees
             if (i > 45) return null; 
             const angle = (i / 45) * 270 - 135; // -135 to 135
             const isActive = angle <= rotation;
             
             return (
               <div 
                 key={i}
                 className={cn(
                   "absolute w-0.5 h-3 origin-bottom transition-colors duration-300",
                   isActive ? "bg-tech-orange shadow-[0_0_5px_var(--color-tech-orange)]" : "bg-gray-800"
                 )}
                 style={{ 
                   height: '12px',
                   top: '8px', // Adjusted from 12px to 8px to lift them up higher
                   left: '50%',
                   transformOrigin: '50% 128px', // Adjusted origin to match new top
                   transform: `translateX(-50%) rotate(${angle}deg)`
                 }}
               />
             );
          })}
       </div>

       {/* The Main Knob (Draggable) */}
       <div 
          ref={dialRef}
          onPointerDown={handlePointerDown}
          className={cn(
            "w-48 h-48 rounded-full bg-surface-dark shadow-soft-out flex items-center justify-center relative z-10 border border-black/20 cursor-grab active:cursor-grabbing",
            isDragging && "scale-[0.98] transition-transform duration-100"
          )}
       >
          <div className="w-full h-full rounded-full bg-gradient-to-br from-white/5 to-transparent absolute inset-0 pointer-events-none" />
          
          {/* Indicator Dot Container - Rotates with value */}
          <div 
            className={cn(
              "absolute inset-0 rounded-full",
              !isDragging && "transition-transform duration-300 ease-out"
            )}
            style={{ transform: `rotate(${rotation}deg)` }}
          >
             <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-tech-orange shadow-[0_0_8px_var(--color-tech-orange)] ring-1 ring-black/50" />
          </div>

          {/* Inner Display (Fixed orientation) */}
          <div className="flex flex-col items-center justify-center z-20 pointer-events-none">
             <span className="font-mono text-[10px] text-gray-600 tracking-widest mb-1">SETPOINT</span>
             <span className="font-tech text-6xl font-bold text-gray-200 text-glow-blue tabular-nums leading-none">{temp.toFixed(1)}</span>
             <span className="font-mono text-xs text-tech-blue mt-1">° CELSIUS</span>
          </div>
       </div>
    </div>
  );
}
