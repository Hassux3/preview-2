import React, { useEffect, useState } from "react";
import { Cpu } from "lucide-react";

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030712]">
      <div className="relative">
        <Cpu
          className="w-16 h-16 text-[#00D4FF] animate-spin-slow mb-8"
          style={{ animationDuration: "3s" }}
        />
        <div className="absolute inset-0 bg-[#00D4FF] blur-2xl opacity-20 animate-pulse"></div>
      </div>

      <div className="w-64 h-1.5 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
        <div
          className="h-full bg-gradient-to-r from-[#00D4FF] to-[#8B5CF6] transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-4 font-orbitron text-[#00D4FF] tracking-[0.2em] text-sm font-bold animate-pulse">
        INITIALIZING NETFLOW vBNG {progress}%
      </p>
    </div>
  );
};

export default LoadingScreen;
