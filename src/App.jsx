import React, { useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Performance from "./components/Performance";
import Management from "./components/Management";
import Footer from "./components/Footer";

// Register ScrollTrigger plugin once at the top level
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    // Use gsap.context for easy cleanup of all animations/ScrollTriggers
    const ctx = gsap.context(() => {
      // Global scroll reveal logic
      const revealElements = document.querySelectorAll(".fade-up-init");
      revealElements.forEach((el) => {
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleScrollTo = useCallback((e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const navHeight = 80; // Approximate height of the fixed navbar
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash without jumping
      window.history.pushState(null, "", `#${id}`);
    } else if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", " ");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-gradient-to-b from-white to-gray-50">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div
          onClick={(e) => handleScrollTo(e, "top")}
          className="text-2xl font-semibold tracking-tight text-gray-900 cursor-pointer"
        >
          NetFlow <span className="text-blue-600">vBNG</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-500">
          <a
            href="#features"
            onClick={(e) => handleScrollTo(e, "features")}
            className="hover:text-blue-600 transition-colors"
          >
            Features
          </a>
          <a
            href="#performance"
            onClick={(e) => handleScrollTo(e, "performance")}
            className="hover:text-blue-600 transition-colors"
          >
            Performance
          </a>
          <a
            href="#management"
            onClick={(e) => handleScrollTo(e, "management")}
            className="hover:text-blue-600 transition-colors"
          >
            Management
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "contact")}
            className="hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </div>
      </nav>

      <main>
        <Hero onCtaClick={(e) => handleScrollTo(e, "contact")} />
        <Features />
        <Stats />
        <Performance />
        <Management />
      </main>

      <Footer />
    </div>
  );
};

export default App;
