import React from "react";
import { Box, Code, HardDrive, Shield, CheckCircle2 } from "lucide-react";

const Products = () => {
  const products = [
    {
      title: "Control Plane Node",
      tag: "vCP-CORE",
      desc: "Centralized intelligence for subscriber management, policy enforcement, and routing protocols (BGP, OSPF).",
      features: [
        "PPPoE/IPoE Termination",
        "RADIUS/Diameter Integration",
        "RESTful API Hub",
      ],
      icon: <Code className="w-8 h-8 text-[#00D4FF]" />,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Data Plane Node",
      tag: "vUP-FLITE",
      desc: "Ultra-high speed packet forwarding engine optimized for DPDK and SR-IOV performance.",
      features: [
        "2 Tbps+ Scalability",
        "HQoS Traffic Shaping",
        "Stateful Firewall",
      ],
      icon: <HardDrive className="w-8 h-8 text-[#8B5CF6]" />,
      image:
        "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Security & CGNAT",
      tag: "vSEC-GATE",
      desc: "Carrier-Grade NAT and advanced threat protection integrated into the virtual edge.",
      features: [
        "IPv4 Exhaustion Solutions",
        "DDoS Mitigation",
        "Deep Packet Inspection",
      ],
      icon: <Shield className="w-8 h-8 text-[#00D4FF]" />,
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div id="products" className="py-32 bg-[#030712] relative overflow-hidden">
      <div className="absolute -top-24 right-0 w-[500px] h-[500px] bg-[#00D4FF]/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20">
          <h4 className="text-[#00D4FF] font-orbitron font-black text-[10px] tracking-[0.4em] mb-4 uppercase">
            Our Solution Ecosystem
          </h4>
          <h2 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-8">
            MODULAR <br /> <span className="text-[#8B5CF6]">ARCHITECTURE</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl font-light">
            Our virtual nodes are decoupled by design. Deploy exactly what you
            need, where you need it, from the network core to the far edge.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <div
              key={i}
              className="group relative glass-card rounded-[3rem] border border-white/5 hover:border-[#00D4FF]/30 transition-all duration-700 overflow-hidden flex flex-col"
            >
              {/* Product Header Image */}
              <div className="h-48 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent z-10"></div>
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-40 group-hover:opacity-60"
                />
              </div>

              <div className="p-10 pt-0 relative z-20 flex-grow flex flex-col">
                <div className="mb-8 p-4 inline-block rounded-2xl bg-[#030712] border border-white/10 text-[#00D4FF] group-hover:border-[#00D4FF]/50 transition-all -mt-8">
                  {p.icon}
                </div>
                <div className="text-[#00D4FF] font-orbitron text-[9px] font-black tracking-[0.5em] mb-3 uppercase">
                  {p.tag}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00D4FF] transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 mb-8 font-light leading-relaxed text-sm">
                  {p.desc}
                </p>

                <div className="space-y-4 mb-10 flex-grow">
                  {p.features.map((f, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-sm text-gray-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-[#00D4FF] opacity-50"
                      />
                      {f}
                    </div>
                  ))}
                </div>

                <button className="w-full py-4 rounded-2xl border border-white/10 hover:border-[#00D4FF]/50 hover:bg-[#00D4FF]/5 text-xs font-orbitron font-black tracking-widest text-gray-400 hover:text-[#00D4FF] transition-all uppercase">
                  Technical Docs
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
