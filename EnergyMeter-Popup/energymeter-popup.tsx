import { motion } from "framer-motion";
import { 
  Zap, 
  X, 
  MapPin, 
  Clock, 
  Activity,
  CheckCircle2
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface MapPopupCardProps {
  className?: string;
  onClose?: () => void;
}

export function MapPopupCard({ className, onClose }: MapPopupCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("w-[320px]", className)}
    >
      <Card className="overflow-hidden border-0 shadow-2xl bg-white/95 backdrop-blur-xl dark:bg-slate-900/95 relative ring-1 ring-slate-200 dark:ring-slate-800">
        
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

        {/* Header */}
        <div className="p-4 pb-3 relative z-10">
          <div className="flex justify-between items-start mb-3">
            <div className="flex gap-3 items-center">
              <div className="relative">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/30 dark:to-amber-800/30 flex items-center justify-center shadow-sm">
                  <Zap className="w-5 h-5 text-amber-600 dark:text-amber-400 fill-amber-600/20" />
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center p-0.5 shadow-sm">
                   <div className="w-full h-full bg-emerald-500 rounded-full animate-pulse" />
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-tight">Ghana6</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Badge variant="outline" className="h-4 px-1 text-[9px] font-bold uppercase tracking-wider border-emerald-200 text-emerald-700 bg-emerald-50 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800">
                    Online
                  </Badge>
                  <span className="text-[10px] text-slate-400 font-medium">ID: #GH-06</span>
                </div>
              </div>
            </div>

            <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 rounded-full -mt-1 -mr-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={onClose}
            >
                <X className="w-3.5 h-3.5" />
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 px-2 py-1.5 rounded-md border border-slate-100 dark:border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                <span className="text-xs font-medium">In Operation</span>
            </div>
            
            <div className="flex items-center gap-1.5 text-slate-400 px-1">
                <MapPin className="w-3 h-3" />
                <span className="text-[10px] font-mono">5.62807, -0.18637</span>
            </div>
          </div>
        </div>

        <Separator className="bg-slate-100 dark:bg-slate-800" />

        {/* Metrics Compact Grid */}
        <div className="p-4 grid grid-cols-2 gap-3 bg-slate-50/30 dark:bg-slate-900/30">
            
            {/* Voltage */}
            <div className="bg-white dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-1.5 mb-1">
                    <Activity className="w-3 h-3 text-slate-400" />
                    <span className="text-[10px] font-bold uppercase text-slate-400 tracking-wider">Voltage</span>
                </div>
                <div className="flex items-baseline gap-0.5">
                    <span className="text-lg font-bold text-slate-800 dark:text-slate-100 tabular-nums">237.0</span>
                    <span className="text-[10px] font-bold text-slate-400">V</span>
                </div>
            </div>

            {/* Power */}
            <div className="bg-white dark:bg-slate-800/50 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800 shadow-sm">
                <div className="flex items-center gap-1.5 mb-1">
                    <Zap className="w-3 h-3 text-amber-500" />
                    <span className="text-[10px] font-bold uppercase text-amber-600/70 dark:text-amber-500/70 tracking-wider">Power</span>
                </div>
                <div className="flex items-baseline gap-0.5">
                    <span className="text-lg font-bold text-amber-600 dark:text-amber-500 tabular-nums">1211.0</span>
                    <span className="text-[10px] font-bold text-amber-600/70 dark:text-amber-500/70">W</span>
                </div>
            </div>
        </div>

        {/* Footer Stats */}
        <div className="px-4 py-3 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-start gap-2.5">
                <div className="mt-0.5 p-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500">
                    <Clock className="w-3 h-3" />
                </div>
                <div className="flex flex-col gap-0.5">
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Uptime</span>
                        <span className="text-xs font-bold text-slate-700 dark:text-slate-200 tabular-nums">34d 8h 39m</span>
                    </div>
                    <div className="text-[10px] text-slate-400">
                        Total: 45d 6h <span className="mx-0.5">·</span> <span className="text-emerald-600 dark:text-emerald-400 font-medium">75.4% active</span>
                    </div>
                </div>
            </div>
        </div>

      </Card>
    </motion.div>
  );
}
