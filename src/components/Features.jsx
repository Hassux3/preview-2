import React from "react";

const FeatureCard = ({ title, description, details, icon }) => (
  <div className="feature-card fade-up-init bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-default group">
    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-500 leading-relaxed font-medium">{description}</p>
    <div className="card-reveal-content overflow-hidden text-sm text-gray-400 border-t border-gray-50 pt-4">
      {details}
    </div>
  </div>
);

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 fade-up-init">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-6">
            What is vBNG?
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Virtual Broadband Network Gateway (vBNG) takes core networking into
            the cloud-native era.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Software Defined"
            description="De-coupled control and user plane (CUPS) for ultimate flexibility."
            details="Standard x86 server compatibility means no proprietary hardware lock-in, enabling rapid deployment cycles."
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            }
          />
          <FeatureCard
            title="Massive Elasticity"
            description="Spin up thousands of subscriber sessions in minutes."
            details="Dynamic resource allocation ensures your network grows exactly when your subscriber base does, without over-provisioning."
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            }
          />
          <FeatureCard
            title="OPEX Optimized"
            description="Reduce total cost of ownership by up to 70%."
            details="Automated lifecycle management and standard maintenance procedures slash operational costs compared to legacy systems."
            icon={
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
