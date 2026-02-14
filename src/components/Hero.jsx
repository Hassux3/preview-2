import React, { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";

const Hero = () => {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles = [];
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    class Particle {
      x;
      y;
      size;
      speedX;
      speedY;
      opacity;
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas?.width;
        this.y = Math.random() * canvas?.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.5 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (
          this.x > canvas?.width ||
          this.x < 0 ||
          this.y > canvas?.height ||
          this.y < 0
        ) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
        ctx?.beginPath();
        ctx?.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx?.fill();
      }
    }

    const init = () => {
      particles = Array.from({ length: 150 }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    if (typeof gsap !== "undefined") {
      gsap.from(".hero-content > *", {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "expo.out",
      });
    }
    gsap.to(".hero-content > *", {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.15,
      ease: "expo.out",
    });

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#030712] py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,17,32,1)_0%,rgba(3,7,18,1)_100%)]"></div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Dynamic Background Blurs */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-[#8B5CF6]/10 blur-[150px] rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-[#00D4FF]/10 blur-[150px] rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center hero-content">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-[#00D4FF]/10 border border-[#00D4FF]/20 text-[#00D4FF] text-xs font-orbitron font-bold tracking-[0.2em] uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D4FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D4FF]"></span>
          </span>
          Next-Gen Carrier Edge
        </div>

        <h1 className="text-5xl md:text-8xl font-orbitron font-black leading-tight mb-8 tracking-tighter text-white">
          ELIMINATE THE{" "}
          <span className="bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] bg-clip-text text-transparent">
            HARDWARE BARRIER
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          NetFlow vBNG delivers{" "}
          <span className="text-white font-semibold">2 Tbps performance</span>{" "}
          on standard x86 servers. Unmatched scalability for modern ISPs at{" "}
          <span className="text-[#00D4FF] font-semibold">
            fraction of the cost.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="group relative px-10 py-5 bg-[#00D4FF] text-black font-black font-orbitron rounded-full overflow-hidden transition-all shadow-[0_0_30px_rgba(0,212,255,0.3)] hover:shadow-[0_0_50px_rgba(0,212,255,0.5)] active:scale-95">
            <span className="relative z-10 flex items-center gap-2">
              START FREE TRIAL <ArrowRight size={18} />
            </span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </button>

          <button className="group px-8 py-5 border border-white/10 rounded-full font-bold hover:bg-white/5 hover:border-white/20 transition-all text-white backdrop-blur-sm font-orbitron text-xs tracking-widest uppercase">
            EXPLORE ARCHITECTURE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
