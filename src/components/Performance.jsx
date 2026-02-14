import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Performance = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    let chart;
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, "rgba(59, 130, 246, 0.4)");
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)");

        chart = new Chart(ctx, {
          type: "line",
          data: {
            labels: ["Q1", "Q2", "Q3", "Q4", "Next Year", "Peak"],
            datasets: [
              {
                label: "Network Throughput (Tbps)",
                data: [0.2, 0.6, 0.9, 1.4, 1.8, 2.0],
                fill: true,
                backgroundColor: gradient,
                borderColor: "#3B82F6",
                borderWidth: 4,
                pointBackgroundColor: "#FFFFFF",
                pointBorderColor: "#3B82F6",
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                tension: 0.4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
              duration: 2000,
              easing: "easeInOutQuart",
            },
            plugins: {
              legend: { display: false },
              tooltip: {
                backgroundColor: "#1F2937",
                padding: 12,
                titleFont: { size: 14 },
                bodyFont: { size: 14 },
                displayColors: false,
              },
            },
            scales: {
              x: {
                grid: { display: false },
                ticks: { font: { weight: "600" } },
              },
              y: {
                grid: { color: "rgba(0,0,0,0.05)" },
                ticks: {
                  callback: (value) => value + " Tbps",
                  font: { weight: "500" },
                },
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
    return () => {
      if (chart) chart.destroy();
    };
  }, []);

  return (
    <section id="performance" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 fade-up-init">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
              Performance Beyond Limits
            </h2>
            <p className="text-xl text-gray-500 mb-8 leading-relaxed">
              Engineered for massive traffic spikes. Our software architecture
              handles up to 2 Tbps of peak traffic without breaking a sweat.
            </p>
            <ul className="space-y-4 text-gray-700 font-medium">
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Sub-millisecond Latency</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Linear Scalability</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Zero Packet Loss</span>
              </li>
            </ul>
          </div>
          <div className="lg:w-2/3 w-full fade-up-init">
            <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
              <div className="chart-container">
                <canvas ref={chartRef}></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;
