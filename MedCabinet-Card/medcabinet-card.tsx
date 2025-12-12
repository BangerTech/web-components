import { motion } from "framer-motion";
import { 
  Thermometer, 
  BriefcaseMedical, 
  Snowflake, 
  Sun,
  Clock,
  MapPin,
  MoreVertical,
  AlertCircle,
  CheckCircle2
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface MedicineCabinetCardProps {
  className?: string;
}

export function MedicineCabinetCard({ className }: MedicineCabinetCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full max-w-md", className)}
    >
      <Card className="overflow-hidden border-0 shadow-xl bg-slate-50 dark:bg-slate-900 relative group ring-1 ring-slate-200 dark:ring-slate-800">
        
        {/* Cabinet Frame Effect */}
        <div className="absolute inset-0 border-[6px] border-white dark:border-slate-800 rounded-xl pointer-events-none z-20 shadow-inner" />
        
        {/* Header Section */}
        <div className="bg-white dark:bg-slate-900 p-6 pb-4 relative z-10 border-b border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-start mb-4">
            <div className="flex gap-4 items-center">
              <div className="relative">
                <div className="h-14 w-14 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center shadow-sm border border-red-100 dark:border-red-900/30">
                  <BriefcaseMedical className="w-7 h-7 text-red-500 dark:text-red-400" />
                </div>
                <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-white dark:bg-slate-900 rounded-full flex items-center justify-center p-0.5 shadow-sm">
                   <div className="w-full h-full bg-emerald-500 rounded-full animate-pulse" />
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 tracking-tight">MedCabinet 01</h2>
                <div className="flex items-center gap-2 mt-0.5">
                    <Badge variant="outline" className="h-5 px-1.5 text-[10px] font-semibold bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400 dark:border-emerald-800">
                        SAFE RANGE
                    </Badge>
                </div>
              </div>
            </div>

            <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                <MoreVertical className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-start gap-2 text-slate-500 dark:text-slate-400 text-xs">
              <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
              <span className="truncate">Pharmacy Storage Room 2B, Berlin</span>
          </div>
        </div>

        {/* Main Content - Split View */}
        <div className="grid grid-cols-1 md:grid-cols-2">
            
            {/* INSIDE (Cabinet) */}
            <div className="p-6 bg-blue-50/50 dark:bg-blue-900/10 relative overflow-hidden group/inside border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <div className="flex items-center gap-2 mb-3 text-blue-600 dark:text-blue-400">
                    <Snowflake className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Internal</span>
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-4xl font-bold text-slate-800 dark:text-slate-100 tabular-nums tracking-tight">4.2</span>
                        <span className="text-lg font-medium text-slate-400">°C</span>
                    </div>
                    
                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center text-xs">
                            <span className="text-slate-400 font-medium">Target</span>
                            <span className="font-mono font-bold text-slate-600 dark:text-slate-300">2° - 8°</span>
                        </div>
                        
                        {/* Status Bar */}
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden flex">
                            {/* Represents 0-10 scale roughly */}
                            <div className="w-[20%] bg-transparent" /> {/* 0-2 */}
                            <div className="w-[60%] bg-emerald-500/30 relative"> {/* 2-8 Safe Zone */}
                                <div className="absolute top-0 bottom-0 bg-emerald-500 w-[40%] left-[30%]" /> {/* Current Value Indicator */}
                            </div>
                            <div className="w-[20%] bg-transparent" /> {/* 8-10 */}
                        </div>
                    </div>
                </div>
            </div>

            {/* OUTSIDE (Ambient) */}
            <div className="p-6 bg-white dark:bg-slate-900 relative group/outside">
                <div className="flex items-center gap-2 mb-3 text-amber-500">
                    <Sun className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Ambient</span>
                </div>
                
                <div className="relative z-10">
                    <div className="flex items-baseline gap-1 mb-4">
                        <span className="text-3xl font-bold text-slate-700 dark:text-slate-200 tabular-nums tracking-tight">21.5</span>
                        <span className="text-base font-medium text-slate-400">°C</span>
                    </div>

                     <div className="grid grid-cols-2 gap-2">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase text-slate-400 font-bold">Min</span>
                            <span className="text-xs font-bold text-slate-600 dark:text-slate-300">19.2°</span>
                        </div>
                         <div className="flex flex-col">
                            <span className="text-[10px] uppercase text-slate-400 font-bold">Max</span>
                            <span className="text-xs font-bold text-slate-600 dark:text-slate-300">22.8°</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 dark:bg-slate-900/50 p-3 px-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
             <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-[10px] font-medium uppercase tracking-wider">Last Check: 2m ago</span>
             </div>
             
             <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Cooling Active</span>
             </div>
        </div>
      </Card>
    </motion.div>
  );
}
