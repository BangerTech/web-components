import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface TactileButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  active?: boolean;
  icon?: React.ReactNode;
  label?: string;
  sublabel?: string;
  variant?: "circle" | "rounded" | "square" | "rect" | "keycap";
  color?: "orange" | "blue";
  indicator?: boolean;
}

export function TactileButton({ 
  active = false, 
  icon, 
  label, 
  sublabel,
  variant = "rounded", 
  color = "orange",
  indicator = false,
  className,
  ...props 
}: TactileButtonProps) {
  return (
    <div className={cn(
      "relative p-1 bg-surface-darker shadow-rim transition-all duration-300", 
      variant === "circle" ? "rounded-full" : "rounded-2xl",
      variant === "keycap" ? "rounded-xl pb-2 bg-[#0a0a0c]" : "", // Deeper bottom for keycap feel
      className
    )}>
      <motion.button
        whileTap={{ scale: 0.96, translateY: 2 }}
        className={cn(
          "relative w-full h-full flex flex-col items-center justify-center transition-all duration-200 outline-none select-none overflow-hidden group",
          variant === "circle" ? "rounded-full" : "rounded-xl",
          variant === "keycap" ? "rounded-lg bg-surface-dark shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_2px_4px_rgba(0,0,0,0.5)] active:shadow-none" : "",
          !active && variant !== "keycap" && "shadow-soft-out bg-surface-dark",
          active && variant !== "keycap" && "shadow-soft-in bg-surface-dark",
        )}
        {...props}
      >
        {/* Keycap Concave Surface Effect */}
        {variant === "keycap" && (
           <div className="absolute inset-2 rounded-full bg-black/20 blur-md" />
        )}

        {/* Active Glow Gradient Overlay */}
        {active && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={cn(
              "absolute inset-0 z-0",
              color === "orange" ? "bg-active-orange" : "bg-blue-500/10"
            )}
          />
        )}

        <div className={cn(
          "flex items-center justify-center transition-all duration-300 z-10 relative",
          active && color === "orange" ? "text-tech-orange text-glow-orange" : 
          active && color === "blue" ? "text-tech-blue text-glow-blue" : "text-gray-500 group-hover:text-gray-300"
        )}>
          {icon}
        </div>
        
        {label && (
          <span className={cn(
            "mt-1 text-[10px] font-tech uppercase tracking-[0.2em] font-medium z-10 relative transition-colors",
            active ? "text-white/90" : "text-gray-600 group-hover:text-gray-500"
          )}>
            {label}
          </span>
        )}

        {sublabel && (
          <span className="absolute bottom-2 text-[8px] font-mono text-gray-700 tracking-wider uppercase z-10">
            {sublabel}
          </span>
        )}

        {/* Indicator Light (Refined) */}
        {indicator && (
          <div className={cn(
            "absolute top-2 right-2 w-1.5 h-1.5 rounded-full transition-all duration-300 z-10 border border-black/50",
            active 
              ? (color === "orange" ? "bg-tech-orange shadow-[0_0_8px_var(--color-tech-orange)]" : "bg-tech-blue shadow-[0_0_8px_var(--color-tech-blue)]")
              : "bg-[#1a1a1c] shadow-[inset_0_1px_2px_rgba(0,0,0,0.8)]"
          )} />
        )}
      </motion.button>
    </div>
  );
}
