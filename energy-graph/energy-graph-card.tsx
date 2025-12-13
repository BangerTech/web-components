import { useState } from "react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";
import { cn } from "@/lib/utils";

const data = [
  { time: "09:00", value: 680 },
  { time: "10:00", value: 660 },
  { time: "11:00", value: 690 },
  { time: "12:00", value: 610 },
  { time: "13:00", value: 710 },
  { time: "14:00", value: 650 },
  { time: "15:00", value: 680 },
  { time: "16:00", value: 640 },
  { time: "17:00", value: 670 },
  { time: "18:00", value: 668 },
  { time: "19:00", value: 665 },
  { time: "20:00", value: 510 },
  { time: "21:00", value: 580 },
  { time: "22:00", value: 600 },
  { time: "23:00", value: 595 },
  { time: "00:00", value: 570 },
  { time: "01:00", value: 600 },
  { time: "02:00", value: 575 },
  { time: "03:00", value: 590 },
  { time: "04:00", value: 585 },
  { time: "05:00", value: 520 },
  { time: "06:00", value: 580 },
  { time: "07:00", value: 590 },
  { time: "08:00", value: 595 },
  { time: "09:00", value: 540 },
];

export function EnergyGraphCard({ className }: { className?: string }) {
  const [activeRange, setActiveRange] = useState("24h");
  const ranges = ["24h", "Week", "Month", "Year"];

  return (
    <div className={cn("neu-panel w-full max-w-4xl p-6 relative overflow-hidden transition-all duration-300", className)}>
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-3 mb-1">
             <div className="h-3 w-3 rounded-full bg-brand-primary animate-pulse" />
             <h2 className="text-xl font-bold text-brand-dark tracking-tight">Power Consumption</h2>
          </div>
          <p className="text-muted-foreground text-sm font-medium ml-6">Last 24 Hours</p>
        </div>

        {/* Range Selector */}
        <div className="neu-pressed p-1.5 rounded-full flex items-center gap-1 self-start md:self-auto">
          {ranges.map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-bold transition-all duration-200",
                activeRange === range
                  ? "neu-btn text-brand-primary"
                  : "text-muted-foreground hover:text-brand-dark"
              )}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Chart Area */}
      <div className="h-[300px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(148 60% 45%)" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="hsl(148 60% 45%)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(214 32% 91%)" />
            <XAxis 
              dataKey="time" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(215 16% 47%)', fontSize: 12 }}
              dy={10}
              interval={2}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: 'hsl(215 16% 47%)', fontSize: 12 }}
              domain={['auto', 'auto']}
              label={{ value: 'Power (W)', angle: -90, position: 'insideLeft', fill: 'hsl(215 16% 47%)', fontSize: 12, dx: 10 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'hsl(210 20% 96%)', 
                border: '1px solid rgba(255,255,255,0.4)',
                borderRadius: '12px',
                boxShadow: '6px 6px 12px hsl(210 15% 85%), -6px -6px 12px hsl(0 0% 100%)',
                color: 'hsl(155 45% 15%)'
              }}
              itemStyle={{ color: 'hsl(148 60% 45%)', fontWeight: 'bold' }}
              labelStyle={{ color: 'hsl(215 16% 47%)', marginBottom: '0.25rem' }}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(148 60% 45%)" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorValue)" 
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Min/Max Markers (Optional decoration similar to image dots) */}
       <div className="absolute top-[40%] left-[20%] h-2 w-2 rounded-full bg-white border-2 border-brand-primary shadow-sm z-10 hidden md:block" />
       <div className="absolute top-[70%] right-[15%] h-2 w-2 rounded-full bg-white border-2 border-brand-primary shadow-sm z-10 hidden md:block" />

    </div>
  );
}
