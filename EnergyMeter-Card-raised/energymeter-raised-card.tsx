import { Zap, MapPin, Cpu, Activity, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

export function EnergyMeterRaised({ className }: { className?: string }) {
  
  // Hardcoded raised style class
  const statContainerClass = "neu-panel-sm p-3 rounded-2xl border border-white/40";

  return (
    <div className={cn("neu-panel w-full max-w-sm p-6 relative overflow-hidden transition-all duration-300", className)}>
      
      {/* Header Section */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          {/* Icon Box */}
          <div className="relative">
            <div className="neu-panel-sm h-14 w-14 flex items-center justify-center text-brand-primary">
              <Zap className="h-7 w-7 fill-current" />
            </div>
            {/* Online Status Indicator */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-primary border-2 border-background"></span>
            </span>
          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-brand-dark tracking-tight text-shadow-sm">Ghana3</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-muted-foreground text-sm font-medium">Household Meter</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
           <div className="neu-btn px-3 py-1.5 text-brand-primary cursor-pointer flex items-center gap-1 hover:scale-105 active:scale-95 transition-transform">
              <span className="text-[10px] font-bold uppercase tracking-wide">Tasmota</span>
              <div className="h-2 w-3 bg-[url('https://flagcdn.com/gh.svg')] bg-cover bg-center rounded-[1px] shadow-sm ml-1" />
           </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="mb-6 pl-1">
        <div className="flex items-start gap-3 text-muted-foreground">
          <div className="neu-pressed h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
             <MapPin className="h-3 w-3 text-brand-primary" />
          </div>
          <p className="text-sm leading-relaxed font-medium opacity-80">
            Santeo, Kpone-Katamanso Municipal District, Groß-Accra Region, Ghana
          </p>
        </div>
      </div>

      {/* Chip Info */}
      <div className="neu-pressed p-3 mb-8 flex items-center gap-3 text-muted-foreground/80 rounded-xl">
        <Cpu className="h-5 w-5 ml-1" />
        <span className="font-mono text-sm tracking-wide font-semibold text-brand-dark/70">R410A 12k Household</span>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-6 mb-8">
        {/* Power */}
        <div className={cn("flex flex-col gap-1 group transition-all", statContainerClass)}>
          <div className="flex items-center gap-2 text-muted-foreground uppercase text-[10px] font-bold tracking-wider group-hover:text-brand-primary transition-colors">
            <Zap className="h-3 w-3" />
            Power
          </div>
          <div className="text-2xl font-bold text-yellow-500 text-shadow-sm flex items-baseline gap-1">
            0 <span className="text-sm font-normal text-muted-foreground">W</span>
          </div>
          {/* Divider Line */}
          <div className="h-1.5 w-full bg-gray-200/50 rounded-full mt-2 overflow-hidden shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.7)]">
             <div className="h-full bg-yellow-400 w-0 rounded-full" />
          </div>
        </div>

        {/* Voltage */}
        <div className={cn("flex flex-col gap-1 group transition-all", statContainerClass)}>
          <div className="flex items-center gap-2 text-muted-foreground uppercase text-[10px] font-bold tracking-wider group-hover:text-brand-primary transition-colors">
            <Activity className="h-3 w-3" />
            Voltage
          </div>
          <div className="text-2xl font-bold text-brand-dark text-shadow-sm flex items-baseline gap-1">
            235.0 <span className="text-sm font-normal text-muted-foreground">V</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200/50 rounded-full mt-2 overflow-hidden shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.7)]">
             <div className="h-full bg-brand-dark w-[80%] rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.1)] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20" />
             </div>
          </div>
        </div>

        {/* Current */}
        <div className={cn("flex flex-col gap-1 group transition-all", statContainerClass)}>
          <div className="flex items-center gap-2 text-muted-foreground uppercase text-[10px] font-bold tracking-wider group-hover:text-brand-primary transition-colors">
            <Activity className="h-3 w-3 rotate-90" />
            Current
          </div>
          <div className="text-2xl font-bold text-brand-dark text-shadow-sm flex items-baseline gap-1">
            0.00 <span className="text-sm font-normal text-muted-foreground">A</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200/50 rounded-full mt-2 overflow-hidden shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.7)]">
             <div className="h-full bg-brand-dark w-0 rounded-full" />
          </div>
        </div>

        {/* Total Energy */}
        <div className={cn("flex flex-col gap-1 group transition-all", statContainerClass)}>
          <div className="flex items-center gap-2 text-brand-primary uppercase text-[10px] font-bold tracking-wider">
            <Zap className="h-3 w-3 fill-current" />
            Total Energy
          </div>
          <div className="text-2xl font-bold text-brand-primary text-shadow-sm flex items-baseline gap-1">
            20.44 <span className="text-sm font-normal text-muted-foreground">kWh</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200/50 rounded-full mt-2 overflow-hidden shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.7)]">
             <div className="h-full bg-brand-primary w-[45%] rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.1)] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20" />
             </div>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/60">
         <div>
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-semibold mb-2">
              <Clock className="h-3.5 w-3.5" />
              Running Time (≥5W)
            </div>
            <div className="text-xl font-bold text-brand-primary text-shadow-sm">
              10h 28m
            </div>
         </div>
         
         <div className="text-right flex flex-col items-end justify-center">
            <div className="text-muted-foreground text-[10px] uppercase tracking-wider font-bold mb-1">
              Total Active
            </div>
            <div className="text-sm font-semibold text-brand-dark flex items-center justify-end gap-2">
              81d 16h 38m 
              <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
              <span className="text-brand-primary font-bold">0.6%</span>
            </div>
         </div>
      </div>
    </div>
  );
}
