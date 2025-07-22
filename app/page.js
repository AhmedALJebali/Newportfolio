import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import CalltoAction from "./components/sections/CalltoAction";
import Hero from "./components/sections/Hero";
import Myportfolio from "./components/sections/Myportfolio";
import Services from "./components/sections/Services";
import SkillsSection from "./components/sections/SkillsSection";
import Testimonial from "./components/sections/Testimonial";
export default function Home() {
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
