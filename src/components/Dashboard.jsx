import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BarChart3,
  Users,
  Settings,
  Activity,
} from "lucide-react";

const screenshots = [
  {
    title: "Global Traffic Intelligence",
    desc: "Visualize every byte across your network. Our DPDK-accelerated engine provides micro-second precision analytics for millions of active sessions.",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    icon: <BarChart3 className="w-6 h-6" />,
  },
  {
    title: "Carrier-Grade Lifecycle",
    desc: "Full support for PPPoE, IPoE, and L2TP. Manage massive subscriber bases with zero-touch provisioning and automated billing integration.",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200",
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: "Dynamic Policy Engine",
    desc: "Real-time QoS adjustments and dynamic bandwidth allocation. Deploy complex traffic shaping rules without restarting network services.",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    title: "Fault-Tolerant Core",
    desc: "Predictive failure analysis and automated failover. Monitor the health of every virtual node from a unified global command center.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200",
    icon: <Activity className="w-6 h-6" />,
  },
];

const Dashboard = () => {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % screenshots.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + screenshots.length) % screenshots.length);

  return (
    <div className="py-32 bg-[#030712] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[#00D4FF] font-orbitron font-bold tracking-[0.3em] text-sm mb-4">
            COMMAND & CONTROL
          </div>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 uppercase">
            NetFlow Router Manager
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Experience total network visibility with our unified orchestration
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 space-y-4">
            {screenshots.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-6 rounded-[1.5rem] transition-all border ${active === i ? "bg-[#00D4FF]/10 border-[#00D4FF]/40 shadow-[0_0_20px_rgba(0,212,255,0.1)]" : "bg-transparent border-white/5 hover:bg-white/5"}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`${active === i ? "text-[#00D4FF]" : "text-gray-500"}`}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <h4
                      className={`font-bold transition-colors ${active === i ? "text-white" : "text-gray-500"}`}
                    >
                      {s.title}
                    </h4>
                  </div>
                </div>
                {active === i && (
                  <p className="mt-4 text-sm text-gray-400 leading-relaxed animate-fade-in">
                    {s.desc}
                  </p>
                )}
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] rounded-[2.5rem] blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
            <div className="relative glass-card rounded-[2rem] overflow-hidden aspect-[16/10] shadow-2xl border border-white/10">
              <div
                className="w-full h-full bg-cover bg-center transition-all duration-1000 ease-in-out"
                style={{ backgroundImage: `url(${screenshots[active].img})` }}
              >
                <div className="w-full h-full bg-black/40 backdrop-blur-[2px]"></div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                <div className="text-white max-w-lg">
                  <p className="font-orbitron text-xs tracking-widest text-[#00D4FF] mb-2 uppercase opacity-80">
                    Interface System v4.2.0-STABLE
                  </p>
                  <h3 className="text-3xl font-bold">
                    {screenshots[active].title}
                  </h3>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={prev}
                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-[#00D4FF] hover:text-black transition-all group/btn"
                  >
                    <ChevronLeft className="group-hover/btn:-translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={next}
                    className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-[#00D4FF] hover:text-black transition-all group/btn"
                  >
                    <ChevronRight className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
