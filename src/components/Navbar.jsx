import React, { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Solutions", href: "#what-is-vbng" },
    { name: "Compare", href: "#comparison" },
    { name: "Performance", href: "#performance" },
    { name: "Management", href: "#management" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-black/90 backdrop-blur-xl border-b border-white/10" : "py-6 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Zap
              className="w-8 h-8 text-[#00D4FF] drop-shadow-[0_0_8px_rgba(0,212,255,0.8)]"
              fill="#00D4FF"
            />
            <span className="text-2xl font-orbitron font-black tracking-tighter text-white">
              NETFLOW <span className="text-[#00D4FF]">vBNG</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-300 hover:text-[#00D4FF] font-orbitron text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 hover:translate-y-[-2px]"
              >
                {link.name}
              </a>
            ))}
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            <button className="bg-[#00D4FF] hover:bg-white text-black px-7 py-2.5 rounded-full font-orbitron text-[10px] font-black tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(0,212,255,0.3)]">
              GET STARTED
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-xl bg-white/5 border border-white/10"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] transition-all duration-500 transform ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}
      >
        <div className="glass-card m-4 p-8 rounded-3xl border border-white/20 bg-[#030712]/fb backdrop-blur-2xl shadow-2xl">
          <div className="flex flex-col space-y-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-gray-300 hover:text-[#00D4FF] font-orbitron text-sm tracking-widest uppercase font-bold block"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-[#00D4FF] text-black px-6 py-4 rounded-2xl font-orbitron font-black tracking-widest w-full text-center shadow-[0_0_20px_rgba(0,212,255,0.2)]">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
