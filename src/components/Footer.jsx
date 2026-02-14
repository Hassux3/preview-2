import React, { useState, useEffect } from "react";

const TestimonialCarousel = () => {
  const testimonials = [
    {
      text: "The most scalable vBNG we've ever deployed. Period.",
      author: "Sarah Jenkins",
      role: "CTO, GlobalNet",
    },
    {
      text: "Operational costs dropped by 65% within the first three months.",
      author: "Marcus Thorne",
      role: "Network Ops, SpeedStream",
    },
    {
      text: "Finally, a software-first approach that actually delivers on performance.",
      author: "David Wu",
      role: "Infra Lead, Horizon Connect",
    },
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-48 flex items-center justify-center text-center fade-up-init">
      {testimonials.map((t, i) => (
        <div
          key={i}
          className={`absolute transition-all duration-1000 ease-in-out px-4 max-w-2xl ${
            i === index
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          <p className="text-2xl md:text-3xl font-medium italic text-gray-800 mb-6">
            "{t.text}"
          </p>
          <div className="font-semibold text-blue-600">{t.author}</div>
          <div className="text-gray-400 text-sm uppercase tracking-widest">
            {t.role}
          </div>
        </div>
      ))}
    </div>
  );
};

const Footer = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <footer id="contact" className="bg-gray-50 pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <TestimonialCarousel />

        <div className="mt-32 border-t border-gray-200 pt-32 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="fade-up-init">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-8 leading-tight">
                Ready to transform your network?
              </h2>
              <p className="text-xl text-gray-500 mb-12">
                Join hundreds of service providers who have already made the
                switch to the cloud-native era.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-700">
                    sales@netflowvbng.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-600">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-lg font-medium text-gray-700">
                    Palo Alto, CA 94301
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl fade-up-init">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="relative group">
                  <input
                    type="text"
                    required
                    placeholder=" "
                    className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-blue-600 transition-colors peer"
                  />
                  <label className="absolute left-0 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Full Name
                  </label>
                </div>
                <div className="relative group">
                  <input
                    type="email"
                    required
                    placeholder=" "
                    className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-blue-600 transition-colors peer"
                  />
                  <label className="absolute left-0 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    Business Email
                  </label>
                </div>
                <div className="relative group">
                  <textarea
                    rows={4}
                    required
                    placeholder=" "
                    className="w-full bg-transparent border-b-2 border-gray-200 py-3 focus:outline-none focus:border-blue-600 transition-colors peer resize-none"
                  ></textarea>
                  <label className="absolute left-0 top-3 text-gray-400 transition-all duration-300 pointer-events-none peer-focus:-top-4 peer-focus:text-xs peer-focus:text-blue-600 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                    How can we help?
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSuccess}
                  className={`w-full py-5 rounded-2xl font-semibold text-lg transition-all duration-500 flex items-center justify-center ${
                    isSuccess
                      ? "bg-green-500 text-white"
                      : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-200"
                  }`}
                >
                  {isSuccess ? (
                    <span className="flex items-center space-x-2 animate-in fade-in duration-300">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>Success! We'll be in touch.</span>
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm font-medium">
          <div className="mb-4 md:mb-0">
            © 2024 NetFlow vBNG Systems. All rights reserved.
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-blue-600 transition-colors">
              Documentation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
