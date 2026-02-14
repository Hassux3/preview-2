import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

const chartData = [
  { name: "1 Core", throughput: 85 },
  { name: "4 Cores", throughput: 340 },
  { name: "8 Cores", throughput: 680 },
  { name: "16 Cores", throughput: 1360 },
  { name: "32 Cores", throughput: 2720 },
  { name: "64 Cores", throughput: 5440 },
];

const Performance = () => {
  return (
    <div className="py-32 bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-block text-[#8B5CF6] font-orbitron font-bold text-xs tracking-widest mb-4 border border-[#8B5CF6]/20 px-3 py-1 rounded-full bg-[#8B5CF6]/5">
              BENCHMARK DATA v4.0
            </div>
            <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-8 leading-tight">
              SCALABILITY <br />{" "}
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
                BY DESIGN
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
              Our DPDK-based user plane delivers linear scalability. As you add
              CPU cores, performance grows predictably. No performance
              degradation, no overhead.
            </p>

            <div className="space-y-4">
              {[
                { label: "Packet Processing", val: "Line Rate" },
                { label: "Latency", val: "< 100μs" },
                { label: "Sessions / Core", val: "25,000+" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-6 glass-card rounded-[1.5rem] border border-white/5 hover:border-white/10 transition-all"
                >
                  <span className="text-gray-300 font-medium">
                    {item.label}
                  </span>
                  <span className="text-[#00D4FF] font-orbitron font-bold text-xl">
                    {item.val}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-[#00D4FF]/5 blur-3xl rounded-full"></div>
            <div className="h-[500px] glass-card p-10 rounded-[3rem] relative z-10 border border-white/10 shadow-2xl backdrop-blur-xl">
              <div className="flex justify-between items-center mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#00D4FF] animate-pulse shadow-[0_0_10px_#00D4FF]"></div>
                  <span className="text-xs text-gray-400 uppercase tracking-[0.2em] font-bold">
                    Throughput (Gbps)
                  </span>
                </div>
                <div className="text-[10px] text-gray-600 font-mono">
                  INTEL® XEON® PLATINUM 8380
                </div>
              </div>

              <ResponsiveContainer width="100%" height="85%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="colorThroughput"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#00D4FF" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00D4FF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="5 5"
                    stroke="rgba(255,255,255,0.03)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="name"
                    stroke="rgba(255,255,255,0.2)"
                    tick={{
                      fill: "rgba(255,255,255,0.4)",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                    axisLine={false}
                    tickLine={false}
                    dy={15}
                  />
                  <YAxis
                    stroke="rgba(255,255,255,0.2)"
                    tick={{
                      fill: "rgba(255,255,255,0.4)",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(val) => `${val}G`}
                    dx={-10}
                  />
                  <Tooltip
                    cursor={{
                      stroke: "#00D4FF",
                      strokeWidth: 1,
                      strokeDasharray: "5 5",
                    }}
                    contentStyle={{
                      backgroundColor: "rgba(3, 7, 18, 0.9)",
                      border: "1px solid rgba(0, 212, 255, 0.3)",
                      borderRadius: "16px",
                      padding: "12px 16px",
                      boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
                    }}
                    itemStyle={{ color: "#00D4FF", fontWeight: "bold" }}
                    labelStyle={{
                      color: "#666",
                      marginBottom: "4px",
                      fontSize: "10px",
                      textTransform: "uppercase",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="throughput"
                    stroke="#00D4FF"
                    strokeWidth={3}
                    fillOpacity={1}
                    fill="url(#colorThroughput)"
                    animationDuration={2000}
                    animationEasing="ease-out"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
