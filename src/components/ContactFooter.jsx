import React, { useState, useEffect } from "react";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  Twitter,
  Linkedin,
  Github,
  Globe,
  Quote,
} from "lucide-react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CTO, GlobalLink ISP",
    text: "NetFlow vBNG transformed our edge. We scaled from 100k to 500k subscribers in a single weekend without a single hardware purchase.",
    avatar: "https://i.pravatar.cc/150?u=alex",
  },
  {
    name: "Sarah Chen",
    role: "Network Architect, EuroFiber",
    text: "The 2 Tbps throughput claim is real. We've benchmarked it under heavy load and the latency remains rock solid. Incredible software.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    name: "Marcus Vane",
    role: "Director of Ops, TelcoOne",
    text: "Proprietary hardware is dead. NetFlow's CUPS architecture gives us flexibility we never thought possible in a BNG solution.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
  },
];

const ContactFooter = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  const stats = [
    { label: "Countries Deployed", value: "50+" },
    { label: "Total Subscribers", value: "25M+" },
    { label: "Average TCO Saved", value: "68%" },
    { label: "Uptime Guaranteed", value: "99.999%" },
  ];

  return (
    <footer className="bg-[#030712] pt-32 pb-12 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 right-0 h-[600px] bg-gradient-to-t from-[#00D4FF]/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Testimonial Slider */}
        <div className="mb-32 text-center max-w-4xl mx-auto">
          <div className="inline-block p-4 rounded-full bg-[#00D4FF]/10 text-[#00D4FF] mb-8">
            <Quote size={32} />
          </div>
          <div className="relative h-48 sm:h-40 overflow-hidden">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-all duration-1000 transform ${activeTestimonial === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                <p className="text-2xl md:text-3xl font-light text-gray-300 italic mb-8 leading-relaxed">
                  "{t.text}"
                </p>
                <div className="flex items-center justify-center gap-4">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full border border-[#00D4FF]/30"
                  />
                  <div className="text-left">
                    <div className="font-bold text-white">{t.name}</div>
                    <div className="text-sm text-[#00D4FF] uppercase tracking-widest">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all ${activeTestimonial === i ? "w-8 bg-[#00D4FF]" : "bg-gray-700"}`}
              ></button>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 border-y border-white/5 py-16">
          {stats.map((s, i) => (
            <div key={i} className="text-center group">
              <div className="text-4xl md:text-6xl font-orbitron font-black text-white mb-2 group-hover:text-[#00D4FF] transition-colors">
                {s.value}
              </div>
              <div className="text-gray-500 font-medium tracking-widest uppercase text-xs">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-8">
              READY TO SCALE? <br />{" "}
              <span className="text-[#00D4FF]">LET'S TALK.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Our engineering team is ready to help you architect a next-gen
              virtual network. Schedule a technical consultation or start your
              30-day trial today.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-[#00D4FF]">
                  <MapPin size={24} />
                </div>
                <span className="text-gray-300">
                  Silicon Valley Headquarters, CA
                </span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-[#00D4FF]">
                  <Mail size={24} />
                </div>
                <span className="text-gray-300">solutions@netflow-vbng.io</span>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl glass-card flex items-center justify-center text-[#00D4FF]">
                  <Phone size={24} />
                </div>
                <span className="text-gray-300">+1 (888) 555-NETFLOW</span>
              </div>
            </div>

            <div className="flex gap-4 mt-12">
              {[Twitter, Linkedin, Github, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#00D4FF] hover:text-black transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] opacity-10 blur-2xl rounded-3xl"></div>
            <form
              onSubmit={handleSubmit}
              className="relative glass-card p-10 rounded-[2.5rem] border border-white/10 space-y-6"
            >
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center py-20 text-center animate-fade-in">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <Send size={40} />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-white font-orbitron">
                    MESSAGE SENT!
                  </h3>
                  <p className="text-gray-400">
                    Our engineers will reach out within 2 hours.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00D4FF] focus:outline-none transition-colors"
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00D4FF] focus:outline-none transition-colors"
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) =>
                          setFormState({ ...formState, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">
                      How can we help?
                    </label>
                    <textarea
                      rows={4}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:border-[#00D4FF] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your network scale..."
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                    ></textarea>
                  </div>
                  <button className="w-full bg-[#00D4FF] text-black font-black font-orbitron py-5 rounded-2xl hover:bg-[#00b8e6] transition-all transform active:scale-95 shadow-xl shadow-[#00D4FF]/20">
                    SEND TRANSMISSION
                  </button>
                </>
              )}
            </form>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm gap-6">
          <div className="flex items-center gap-2">
            <span className="font-orbitron font-bold text-gray-400">
              NETFLOW <span className="text-[#00D4FF]">vBNG</span>
            </span>
            <span>&copy; 2026 All Rights Reserved.</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              GDPR
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
