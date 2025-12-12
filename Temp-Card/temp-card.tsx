import { motion } from "framer-motion";
import { 
  Thermometer, 
  Droplets, 
  Wind,
  Clock,
  MapPin, 
  TrendingUp,
  MoreVertical,
  ArrowDown,
  ArrowUp
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface TempCardProps {
  className?: string;
}

export function TempCardStyle01({ className }: TempCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full max-w-md", className)}
    >
      <Card className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-md dark:bg-slate-900/90 relative group">
        
        {/* Decorative background gradient (Same as Energy Card Style 1) */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        {/* Header Section */}
        <div className="p-6 pb-4 relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4 items-center">
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30 flex items-center justify-center shadow-sm">
                  <Thermometer className="w-7 h-7 text-blue-600 dark:text-blue-400 fill-blue-600/20" />
                </div>
                <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center p-0.5 shadow-sm">
                   <div className="w-full h-full bg-emerald-500 rounded-full animate-pulse" />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">KenyaTH3</h2>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">KenyaTH3</span>
                  <Badge variant="secondary" className="h-5 px-1.5 text-[10px] font-semibold bg-emerald-100/50 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300 border-0">
                    ONLINE
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-2">
                 <Badge className="bg-blue-500 hover:bg-blue-600 text-white border-0 shadow-sm shadow-blue-500/20">
                    Tasmota
                 </Badge>
                 <span className="text-2xl" role="img" aria-label="Kenya Flag">🇰🇪</span>
              </div>
              <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
              <MapPin className="w-4 h-4 mt-1 text-slate-400 shrink-0" />
              <p className="text-sm leading-relaxed line-clamp-2">
                Mogira Road, Ngara East sublocation, Ngara location, CBD division, Nairobi
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <Wind className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-mono font-medium tracking-wide truncate">Library Temp inside in the middle under a table</span>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-100 dark:bg-slate-800" />

        {/* Metrics Grid */}
        <div className="p-6 pt-6 grid grid-cols-2 gap-y-8 gap-x-6 relative z-10">
          
          {/* Temperature - Primary */}
          <div className="group/item col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between mb-1 text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                    <Thermometer className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">Current Temperature</span>
                </div>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-blue-500 dark:text-blue-400 tabular-nums">27.6</span>
              <span className="text-sm font-semibold text-blue-500/70 dark:text-blue-400/70">°C</span>
            </div>
            
            {/* Min/Max/Avg Sub-metrics */}
            <div className="flex gap-4 mt-3">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-slate-400 font-bold">Avg</span>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300">27.4°</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-slate-400 font-bold">Min</span>
                    <span className="text-xs font-bold text-blue-500">27.2°</span>
                </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-slate-400 font-bold">Max</span>
                    <span className="text-xs font-bold text-red-500">27.6°</span>
                </div>
            </div>
          </div>

          {/* Humidity - Secondary */}
          <div className="group/item col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2 mb-1 text-slate-500 dark:text-slate-400">
              <Droplets className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Current Humidity</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">42.1</span>
              <span className="text-sm font-semibold text-emerald-600/70 dark:text-emerald-400/70">%</span>
            </div>
             
             {/* Min/Max/Avg Sub-metrics */}
            <div className="flex gap-4 mt-3">
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-slate-400 font-bold">Avg</span>
                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300">42.9%</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-slate-400 font-bold">Min</span>
                    <span className="text-xs font-bold text-emerald-600">42.0%</span>
                </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] uppercase text-slate-400 font-bold">Max</span>
                    <span className="text-xs font-bold text-emerald-600">43.7%</span>
                </div>
            </div>
          </div>

          {/* Dew Point */}
          <div className="group/item">
            <div className="flex items-center gap-2 mb-1 text-slate-500 dark:text-slate-400">
              <Wind className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Dew Point</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">13.5</span>
              <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">°C</span>
            </div>
            <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
               <div className="h-full bg-slate-400 w-[45%] transition-all duration-500" />
            </div>
          </div>

          {/* Uptime (Replaced Total Energy position) */}
          <div className="group/item">
            <div className="flex items-center gap-2 mb-1 text-slate-500 dark:text-slate-400">
              <Clock className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Uptime</span>
            </div>
            <div className="flex items-baseline gap-1">
               <span className="text-xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">203d 17h</span>
            </div>
             <div className="h-1 w-full bg-emerald-100 dark:bg-emerald-900/30 rounded-full mt-2 overflow-hidden">
               <div className="h-full bg-emerald-500 w-[95%] transition-all duration-500" />
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50/50 dark:bg-slate-900/50 p-4 px-6 border-t border-slate-100 dark:border-slate-800 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
               <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">Running Time</span>
               </div>
               <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg tabular-nums">203d 17h 5m</span>
            </div>
            
            {/* 
            <div className="text-right">
              <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider mb-1">Status</div>
              <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                Active <span className="text-slate-300 mx-1">•</span> <span className="text-emerald-600 dark:text-emerald-400">Stable</span>
              </div>
            </div>
             */}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
