import { MapPin, Thermometer, Droplets, Wind, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { CardVariant } from "./energy-meter-card";

export function TempMeterCard({ variant = "default", className }: { variant?: CardVariant, className?: string }) {
  
  const getStatContainerClass = () => {
    switch (variant) {
      case "raised":
        return "neu-panel-sm p-3 rounded-2xl border border-white/40";
      case "inset":
        return "neu-pressed p-3 rounded-2xl border-none";
      default:
        return "p-1"; 
    }
  };

  const statContainerClass = getStatContainerClass();

  return (
    <div className={cn("neu-panel w-full max-w-sm p-6 relative overflow-hidden transition-all duration-300", className)}>
      
      {/* Header Section */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center gap-4">
          {/* Icon Box */}
          <div className="relative">
            <div className="neu-panel-sm h-14 w-14 flex items-center justify-center text-blue-500">
              <Thermometer className="h-7 w-7" />
            </div>
            {/* Online Status Indicator */}
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-primary border-2 border-background"></span>
            </span>
          </div>
          
          <div>
            <h1 className="text-2xl font-bold text-brand-dark tracking-tight text-shadow-sm">KenyaTH3</h1>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-muted-foreground text-sm font-medium">KenyaTH3</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
           <div className="neu-btn px-3 py-1.5 text-blue-500 cursor-pointer flex items-center gap-1 hover:scale-105 active:scale-95 transition-transform">
              <span className="text-[10px] font-bold uppercase tracking-wide">Tasmota</span>
              <div className="h-2 w-3 bg-[url('https://flagcdn.com/ke.svg')] bg-cover bg-center rounded-[1px] shadow-sm ml-1" />
           </div>
        </div>
      </div>

      {/* Location Section */}
      <div className="mb-6 pl-1">
        <div className="flex items-start gap-3 text-muted-foreground">
          <div className="neu-pressed h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
             <MapPin className="h-3 w-3 text-blue-500" />
          </div>
          <p className="text-sm leading-relaxed font-medium opacity-80">
            Mogira Road, Ngara East sublocation, Ngara location, CBD division, Nairobi
          </p>
        </div>
      </div>

      {/* Chip Info */}
      <div className="neu-pressed p-3 mb-8 flex items-center gap-3 text-muted-foreground/80 rounded-xl">
        <Wind className="h-5 w-5 ml-1" />
        <span className="font-mono text-sm tracking-wide font-semibold text-brand-dark/70 truncate">Library Temp inside in the middle under a table</span>
      </div>

      {/* Stats Grid */}
      <div className={cn("grid grid-cols-2 gap-x-6 gap-y-8 mb-8", variant !== "default" ? "gap-y-6" : "")}>
        {/* Current Temperature */}
        <div className={cn("flex flex-col gap-1 group transition-all", statContainerClass)}>
          <div className="flex items-center gap-2 text-muted-foreground uppercase text-[10px] font-bold tracking-wider group-hover:text-blue-500 transition-colors">
            <Thermometer className="h-3 w-3" />
            Current Temperature
          </div>
          <div className="text-3xl font-bold text-blue-500 text-shadow-sm flex items-baseline gap-1">
            27.6 <span className="text-lg font-normal text-muted-foreground">°C</span>
          </div>
           {/* Min/Max/Avg */}
           <div className="flex justify-between text-[10px] font-medium mt-1">
             <div className="flex flex-col">
               <span className="text-muted-foreground opacity-70 uppercase">Avg</span>
               <span className="text-brand-dark">27.4°</span>
             </div>
             <div className="flex flex-col">
               <span className="text-muted-foreground opacity-70 uppercase">Min</span>
               <span className="text-blue-500">27.2°</span>
             </div>
             <div className="flex flex-col">
               <span className="text-muted-foreground opacity-70 uppercase">Max</span>
               <span className="text-red-500">27.6°</span>
             </div>
           </div>
        </div>

        {/* Current Humidity */}
        <div className={cn("flex flex-col gap-1 group transition-all", statContainerClass)}>
          <div className="flex items-center gap-2 text-muted-foreground uppercase text-[10px] font-bold tracking-wider group-hover:text-brand-primary transition-colors">
            <Droplets className="h-3 w-3" />
            Current Humidity
          </div>
          <div className="text-3xl font-bold text-brand-primary text-shadow-sm flex items-baseline gap-1">
            42.1 <span className="text-lg font-normal text-muted-foreground">%</span>
          </div>
           {/* Min/Max/Avg */}
           <div className="flex justify-between text-[10px] font-medium mt-1">
             <div className="flex flex-col">
               <span className="text-muted-foreground opacity-70 uppercase">Avg</span>
               <span className="text-brand-dark">42.9%</span>
             </div>
             <div className="flex flex-col">
               <span className="text-muted-foreground opacity-70 uppercase">Min</span>
               <span className="text-brand-primary">42.0%</span>
             </div>
             <div className="flex flex-col">
               <span className="text-muted-foreground opacity-70 uppercase">Max</span>
               <span className="text-brand-primary">43.7%</span>
             </div>
           </div>
        </div>

        {/* Dew Point */}
        <div className={cn("flex flex-col gap-1 group transition-all", statContainerClass)}>
          <div className="flex items-center gap-2 text-muted-foreground uppercase text-[10px] font-bold tracking-wider group-hover:text-brand-dark transition-colors">
            <Wind className="h-3 w-3" />
            Dew Point
          </div>
          <div className="text-3xl font-bold text-brand-dark text-shadow-sm flex items-baseline gap-1">
            13.5 <span className="text-lg font-normal text-muted-foreground">°C</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200/50 rounded-full mt-2 overflow-hidden shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.7)]">
             <div className="h-full bg-brand-dark w-[40%] rounded-full" />
          </div>
        </div>

        {/* Uptime */}
        <div className={cn("flex flex-col gap-1 group transition-all", statContainerClass)}>
          <div className="flex items-center gap-2 text-muted-foreground uppercase text-[10px] font-bold tracking-wider">
            <Clock className="h-3 w-3" />
            Uptime
          </div>
          <div className="text-xl font-bold text-brand-dark text-shadow-sm flex items-baseline gap-1">
            203d 17h
          </div>
          <div className="h-1.5 w-full bg-gray-200/50 rounded-full mt-2 overflow-hidden shadow-[inset_1px_1px_2px_rgba(0,0,0,0.1),inset_-1px_-1px_2px_rgba(255,255,255,0.7)]">
             <div className="h-full bg-brand-primary w-[95%] rounded-full shadow-[2px_2px_4px_rgba(0,0,0,0.1)] relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20" />
             </div>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="pt-6 border-t border-white/60">
         <div className="flex items-start gap-4">
            <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
            <div>
               <div className="text-muted-foreground text-xs font-semibold mb-1">
                 Running Time
               </div>
               <div className="text-xl font-bold text-brand-primary text-shadow-sm">
                 203d 17h 5m
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
