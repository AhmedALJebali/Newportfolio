"use client";
import { useEffect, useState } from "react";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CalltoAction from "./components/sections/CalltoAction";
import Hero from "./components/sections/Hero";
import Myportfolio from "./components/sections/Myportfolio";
import Services from "./components/sections/Services";
import SkillsSection from "./components/sections/SkillsSection";
import Testimonial from "./components/sections/Testimonial";
import Loader from "./components/ui/Loader";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <SkillsSection />
      <Services />
      <Myportfolio />
      <Testimonial />
      <CalltoAction />
      <Footer />
    </div>
  );
}
