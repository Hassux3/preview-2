import React, { useEffect, useState, useRef } from "react";
import { Check, X } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    let startTime = null;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animationFrame = requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    if (countRef.current) observer.observe(countRef.current);

    return () => {
      cancelAnimationFrame(animationFrame);
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

const Comparison = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".comp-row", {
      scrollTrigger: {
        trigger: ".comp-table",
        start: "top 80%",
      },
      x: -50,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
    });

    // initial state
    gsap.set(".comp-row", {
      x: -50,
      opacity: 0,
    });

    // animate in
    gsap.to(".comp-row", {
      scrollTrigger: {
        trigger: ".comp-table",
        start: "top 80%",
        once: true,
      },
      x: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
  }, []);

  const data = [
    {
      feature: "Maximum Throughput",
      netflow: <Counter end={2} suffix=" Tbps+" />,
      netelastic: "1.2 Tbps",
      cisco: "0.8 Tbps",
    },
    {
      feature: "Concurrent Sessions",
      netflow: <Counter end={1} suffix="M+" />,
      netelastic: "512K",
      cisco: "256K",
    },
    {
      feature: "Deployment Time",
      netflow: "Minutes",
      netelastic: "Hours",
      cisco: "Weeks",
    },
    {
      feature: "Operating Cost (TCO)",
      netflow: <Counter end={70} suffix="% Lower" />,
      netelastic: "40% Lower",
      cisco: "Baseline",
    },
    {
      feature: "Zero-Downtime Updates",
      netflow: true,
      netelastic: false,
      cisco: false,
    },
    {
      feature: "API First Management",
      netflow: true,
      netelastic: true,
      cisco: false,
    },
  ];

  return (
    <div
      id="comparison"
      className="py-32 bg-[#030712] relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B5CF6]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-[#8B5CF6] font-orbitron font-black text-xs tracking-[0.3em] mb-4 uppercase">
            Benchmark Comparison
          </h4>
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-white mb-4">
            CRUSH THE <span className="text-[#00D4FF]">COMPETITION</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Performance metrics gathered from independent lab testing on Intel®
            Platinum processors.
          </p>
        </div>

        <div className="overflow-x-auto rounded-[3rem] border border-white/10 glass-card comp-table shadow-2xl bg-black/40">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="px-10 py-10 font-orbitron text-gray-500 text-xs tracking-widest uppercase">
                  Benchmark Attribute
                </th>
                <th className="px-10 py-10 font-orbitron text-[#00D4FF] text-xl font-black">
                  NETFLOW vBNG
                </th>
                <th className="px-10 py-10 font-orbitron text-gray-300 text-sm">
                  netElastic
                </th>
                <th className="px-10 py-10 font-orbitron text-gray-300 text-sm">
                  Cisco ASR (HW)
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {data.map((row, idx) => (
                <tr
                  key={idx}
                  className="comp-row hover:bg-white/[0.04] transition-colors group"
                >
                  <td className="px-10 py-8 font-medium text-gray-300 group-hover:text-white transition-colors">
                    {row.feature}
                  </td>
                  <td className="px-10 py-8 text-[#00D4FF] font-black text-lg">
                    {typeof row.netflow === "boolean" ? (
                      <Check className="text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                    ) : (
                      row.netflow
                    )}
                  </td>
                  <td className="px-10 py-8 text-gray-400">
                    {typeof row.netelastic === "boolean" ? (
                      row.netelastic ? (
                        <Check size={20} />
                      ) : (
                        <X size={20} className="text-red-900/40" />
                      )
                    ) : (
                      row.netelastic
                    )}
                  </td>
                  <td className="px-10 py-8 text-gray-400">
                    {typeof row.cisco === "boolean" ? (
                      row.cisco ? (
                        <Check size={20} />
                      ) : (
                        <X size={20} className="text-red-900/40" />
                      )
                    ) : (
                      row.cisco
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
