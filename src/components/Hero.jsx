import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = ({ onCtaClick }) => {
  const headlineRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current,
          { scale: 0.95, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.2,
          },
        );
      }

      const btn = btnRef.current;
      if (btn) {
        const handleMouseMove = (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "elastic.out(1, 0.3)",
          });
        };

        btn.addEventListener("mousemove", handleMouseMove);
        btn.addEventListener("mouseleave", handleMouseLeave);
        // Clean up mouse events on revert
        return () => {
          btn.removeEventListener("mousemove", handleMouseMove);
          btn.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20"
    >
      <div className="max-w-4xl">
        <h1
          ref={headlineRef}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-gray-900 leading-tight mb-8"
        >
          NetFlow vBNG – <br />
          <span className="text-blue-600">Scale Effortlessly</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
          2 Tbps. Millions of subscribers. 70% lower cost. The next evolution of
          virtual broadband access.
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            ref={btnRef}
            onClick={onCtaClick}
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-blue-600 text-white rounded-full font-semibold text-lg overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:scale-105"
          >
            <span className="relative z-10">Get Started Free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
