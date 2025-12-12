import { motion } from "framer-motion";
import { 
  Zap, 
  Activity, 
  Cpu, 
  Clock, 
  MapPin, 
  Wifi, 
  TrendingUp,
  MoreVertical,
  Settings
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface EnergyCardProps {
  className?: string;
}

export function EnergyCard({ className }: EnergyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full max-w-md", className)}
    >
      <Card className="overflow-hidden border-0 shadow-xl bg-white/90 backdrop-blur-md dark:bg-slate-900/90 relative group">
        
        {/* Decorative background gradient */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        {/* Header Section */}
        <div className="p-6 pb-4 relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className="flex gap-4 items-center">
              <div className="relative">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/30 flex items-center justify-center shadow-sm">
                  <Zap className="w-7 h-7 text-emerald-600 dark:text-emerald-400 fill-emerald-600/20" />
                </div>
                <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center p-0.5 shadow-sm">
                   <div className="w-full h-full bg-emerald-500 rounded-full animate-pulse" />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">Ghana3</h2>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">Household Meter</span>
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
                 <span className="text-2xl" role="img" aria-label="Ghana Flag">🇬🇭</span>
              </div>
              <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
              <MapPin className="w-4 h-4 mt-1 text-slate-400 shrink-0" />
              <p className="text-sm leading-relaxed">
                Santeo, Kpone-Katamanso Municipal District, Groß-Accra Region, Ghana
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              <Cpu className="w-4 h-4 text-slate-400" />
              <span className="text-xs font-mono font-medium tracking-wide">R410A 12k Household</span>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-100 dark:bg-slate-800" />

        {/* Metrics Grid */}
        <div className="p-6 pt-6 grid grid-cols-2 gap-y-8 gap-x-6 relative z-10">
          
          {/* Power */}
          <div className="group/item">
            <div className="flex items-center gap-2 mb-1 text-slate-500 dark:text-slate-400">
              <Zap className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Power</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-amber-500 dark:text-amber-400 tabular-nums">0</span>
              <span className="text-sm font-semibold text-amber-500/70 dark:text-amber-400/70">W</span>
            </div>
            <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
               <div className="h-full bg-amber-500 w-[0%] transition-all duration-500" />
            </div>
          </div>

          {/* Voltage */}
          <div className="group/item">
            <div className="flex items-center gap-2 mb-1 text-slate-500 dark:text-slate-400">
              <Activity className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Voltage</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">235.0</span>
              <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">V</span>
            </div>
             <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
               <div className="h-full bg-slate-800 dark:bg-slate-200 w-[90%] transition-all duration-500" />
            </div>
          </div>

          {/* Current */}
          <div className="group/item">
            <div className="flex items-center gap-2 mb-1 text-slate-500 dark:text-slate-400">
              <TrendingUp className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">Current</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-800 dark:text-slate-100 tabular-nums">0.00</span>
              <span className="text-sm font-semibold text-slate-400 dark:text-slate-500">A</span>
            </div>
            <div className="h-1 w-full bg-slate-100 dark:bg-slate-800 rounded-full mt-2 overflow-hidden">
               <div className="h-full bg-blue-500 w-[0%] transition-all duration-500" />
            </div>
          </div>

          {/* Total Energy */}
          <div className="group/item">
            <div className="flex items-center gap-2 mb-1 text-slate-500 dark:text-slate-400">
              <Zap className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">Total Energy</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 tabular-nums">20.44</span>
              <span className="text-sm font-semibold text-emerald-600/70 dark:text-emerald-400/70">kWh</span>
            </div>
             <div className="h-1 w-full bg-emerald-100 dark:bg-emerald-900/30 rounded-full mt-2 overflow-hidden">
               <div className="h-full bg-emerald-500 w-[45%] transition-all duration-500" />
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50/50 dark:bg-slate-900/50 p-4 px-6 border-t border-slate-100 dark:border-slate-800 backdrop-blur-sm">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
               <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="text-xs font-medium">Running Time (≥5W)</span>
               </div>
               <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg tabular-nums">10h 28m</span>
            </div>
            
            <div className="text-right">
              <div className="text-[10px] text-slate-400 uppercase font-semibold tracking-wider mb-1">Total Active</div>
              <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                81d 16h 38m <span className="text-slate-300 mx-1">•</span> <span className="text-emerald-600 dark:text-emerald-400">0.6%</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
