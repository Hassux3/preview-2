import React, { useEffect } from "react";
import {
  Cpu,
  Network,
  Zap,
  Database,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Explainer = () => {
  useEffect(() => {
    if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(".explainer-text-anim", {
        scrollTrigger: {
          trigger: ".explainer-section",
          start: "top 80%",
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".explainer-image-anim", {
        scrollTrigger: {
          trigger: ".explainer-section",
          start: "top 80%",
        },
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".feature-card-anim", {
        scrollTrigger: {
          trigger: ".feature-grid-trigger",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
    gsap.set(".explainer-text-anim", {
      x: -30,
      opacity: 0,
    });

    gsap.to(".explainer-text-anim", {
      scrollTrigger: {
        trigger: ".explainer-section",
        start: "top 80%",
        once: true, // animate only once
      },
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    /* ----------------------------------
     Explainer Image (RIGHT → CENTER)
  ---------------------------------- */
    gsap.set(".explainer-image-anim", {
      x: 30,
      opacity: 0,
    });

    gsap.to(".explainer-image-anim", {
      scrollTrigger: {
        trigger: ".explainer-section",
        start: "top 80%",
        once: true,
      },
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
    });

    /* ----------------------------------
     Feature Cards (BOTTOM → UP)
  ---------------------------------- */
    gsap.set(".feature-card-anim", {
      y: 40,
      opacity: 0,
    });

    gsap.to(".feature-card-anim", {
      scrollTrigger: {
        trigger: ".feature-grid-trigger",
        start: "top 85%",
        once: true,
      },
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  const features = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "x86 Virtualization",
      desc: "Run on any commodity x86 server. No proprietary hardware lock-in. Scale horizontally with ease.",
      color: "text-[#00D4FF]",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "CUPS Optimized",
      desc: "True Control/User Plane Separation. Manage 100+ user planes from a single dashboard.",
      color: "text-[#8B5CF6]",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ultra Low Latency",
      desc: "DPDK bypass technology ensures packets reach their destination in microseconds, not milliseconds.",
      color: "text-[#00D4FF]",
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Carrier Grade",
      desc: "Built for 99.999% uptime with automated failover and stateful session synchronization.",
      color: "text-[#8B5CF6]",
    },
  ];

  return (
    <div
      id="what-is-vbng"
      className="py-24 explainer-section bg-[#030712] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00D4FF]/5 blur-[120px] rounded-full pointer-events-none -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section: Text + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="explainer-text-anim">
            <h4 className="text-[#00D4FF] font-orbitron font-black text-[10px] tracking-[0.4em] mb-4 uppercase">
              Solution Overview
            </h4>
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-8 leading-[1.1]">
              REDEFINING <br />{" "}
              <span className="text-[#00D4FF]">EDGE PERFORMANCE</span>
            </h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-8">
              Traditional hardware BNGs are expensive, rigid, and slow to scale.
              NetFlow vBNG moves the logic to software, giving you the agility
              to grow on demand. Deploy massive throughput capabilities on
              standard data center hardware.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#00D4FF]">
                  <Zap size={20} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">2 Tbps+</div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">
                    Throughput
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#8B5CF6]">
                  <Database size={20} />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">1M+</div>
                  <div className="text-gray-500 text-xs uppercase tracking-widest">
                    Sessions
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="explainer-image-anim relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] opacity-20 blur-2xl rounded-[3rem]"></div>
            <div className="relative glass-card rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200"
                alt="Cloud Infrastructure"
                className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-8">
                <div className="text-white font-orbitron text-xs font-bold tracking-[0.2em] mb-1">
                  NETWORK ARCHITECTURE
                </div>
                <div className="text-[#00D4FF] text-[10px] tracking-widest uppercase">
                  Virtualized Edge v4.0
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Feature Grid */}
        <div className="feature-grid-trigger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="feature-card-anim glass-card p-8 rounded-[2rem] border border-white/5 hover:border-[#00D4FF]/30 transition-all duration-500 group bg-white/[0.02] flex flex-col h-full"
            >
              <div
                className={`mb-6 p-4 inline-block rounded-2xl bg-white/5 group-hover:bg-white/10 transition-colors self-start ${f.color}`}
              >
                <div className="transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  {f.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00D4FF] transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed font-light text-sm flex-grow">
                {f.desc}
              </p>
              <div className="mt-6 flex items-center gap-2 text-[10px] font-orbitron font-black text-[#00D4FF] tracking-widest opacity-40 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0 cursor-pointer uppercase">
                SPECIFICATIONS <ArrowRight size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explainer;
