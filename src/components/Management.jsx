import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Management = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
          scale: 1.15,
          ease: "none",
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="management" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 fade-up-init">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            Unified Management
          </h2>
          <p className="text-xl text-gray-500">
            Everything in one place. Simple. Elegant. Powerful.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative h-[600px] w-full rounded-[3rem] overflow-hidden group shadow-2xl"
        >
          <img
            ref={imageRef}
            src="https://picsum.photos/1920/1080?grayscale&blur=1"
            alt="Management Dashboard"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"></div>

          <div className="absolute bottom-16 left-16 right-16 z-10">
            <div className="max-w-xl fade-up-init">
              <h3 className="text-4xl font-semibold text-white mb-6">
                Real-time Visibility
              </h3>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                Monitor subscriber health, traffic patterns, and network status
                with sub-second granularity through our intuitive dashboard.
              </p>
              <button className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 cursor-pointer hover:scale-110 transition-transform">
              <svg
                className="w-10 h-10 text-white translate-x-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Management;
