import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Explainer from "./components/Explainer";
import Comparison from "./components/Comparison";
import Performance from "./components/Performance";
import Dashboard from "./components/Dashboard";
import ContactFooter from "./components/ContactFooter";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="min-h-screen bg-[#030712] text-white selection:bg-[#00D4FF] selection:text-black">
      <Navbar />

      <main className="overflow-hidden">
        <section id="hero">
          <Hero />
        </section>

        <section id="products">
          <Products />
        </section>

        <section id="what-is-vbng">
          <Explainer />
        </section>

        <section id="comparison">
          <Comparison />
        </section>

        <section id="performance">
          <Performance />
        </section>

        <section id="management">
          <Dashboard />
        </section>
      </main>

      <ContactFooter />
    </div>
  );
};

export default App;
