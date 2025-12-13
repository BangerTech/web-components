import { useState } from "react";
import { motion } from "framer-motion";
import { Shield, ShieldCheck, ShieldAlert, Delete } from "lucide-react";
import { TactileButton } from "@/components/ui/tactile-button";
import { DigitalDisplay } from "@/components/ui/digital-display";
import { cn } from "@/lib/utils";

export function SecurityPanel() {
  const [code, setCode] = useState("");
  const [status, setStatus] = useState<"ARMED" | "DISARMED">("DISARMED");

  const handlePress = (num: string) => {
    if (code.length < 4) setCode(prev => prev + num);
  };

  const handleClear = () => {
    setCode("");
  };

  const handleEnter = () => {
    if (code === "1234") { // Mock code
      setStatus(prev => prev === "ARMED" ? "DISARMED" : "ARMED");
      setCode("");
    } else {
      // Flash error logic could go here
      setCode("");
    }
  };

  return (
    <div className="p-6 rounded-[2rem] bg-surface-darker shadow-rim flex flex-col gap-6 w-full max-w-sm">
      {/* Status Screen */}
      <div className="relative w-full h-24 rounded-xl bg-surface-dark shadow-soft-in overflow-hidden flex flex-col items-center justify-center border border-white/5">
         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
         
         <div className="flex items-center gap-3 z-10 mb-2">
            {status === "ARMED" ? (
               <ShieldCheck className="w-5 h-5 text-tech-orange animate-pulse" />
            ) : (
               <Shield className="w-5 h-5 text-tech-blue" />
            )}
            <span className={cn(
              "font-tech text-3xl tracking-widest font-bold text-glow-blue",
              status === "ARMED" ? "text-tech-orange text-glow-orange" : "text-tech-blue"
            )}>
              {status}
            </span>
         </div>
         
         {/* Code Dots */}
         <div className="flex gap-3 h-3">
            {[...Array(4)].map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  i < code.length ? "bg-white shadow-[0_0_5px_white]" : "bg-white/10"
                )} 
              />
            ))}
         </div>
      </div>

      {/* Keypad Grid */}
      <div className="grid grid-cols-3 gap-4">
         {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
           <TactileButton 
             key={num}
             label={num.toString()}
             variant="keycap"
             className="h-16 text-xl font-tech"
             onClick={() => handlePress(num.toString())}
           />
         ))}
         
         <TactileButton 
           icon={<Delete className="w-5 h-5" />}
           variant="keycap"
           className="h-16 text-red-400"
           onClick={handleClear}
         />
         <TactileButton 
           label="0"
           variant="keycap"
           className="h-16"
           onClick={() => handlePress("0")}
         />
         <TactileButton 
           label="ENT"
           variant="keycap"
           className={cn("h-16", status === "ARMED" ? "text-tech-blue" : "text-tech-orange")}
           active
           onClick={handleEnter}
         />
      </div>
    </div>
  );
}
