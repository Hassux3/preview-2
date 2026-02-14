import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const StatItem = ({ endValue, label, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const el = elementRef.current;
      if (el) {
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          onEnter: () => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: endValue,
              duration: 2.5,
              ease: "power3.out",
              onUpdate: () => {
                setCount(Math.floor(obj.val));
              },
            });
          },
        });
      }
    });

    return () => ctx.revert();
  }, [endValue]);

  return (
    <div ref={elementRef} className="text-center fade-up-init">
      <div className="text-6xl md:text-7xl font-semibold text-gray-900 mb-2 tracking-tighter">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-lg font-medium text-blue-600 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-32 px-6 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
        <StatItem endValue={2} label="Throughput" suffix=" Tbps" />
        <StatItem endValue={1} label="Subscribers" suffix="M+" />
        <StatItem endValue={99.99} label="Uptime" suffix="%" />
      </div>
    </section>
  );
};

export default Stats;
