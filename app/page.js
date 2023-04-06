import Fotter from "@/components/Fotter";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Explore from "@/sections/Explore";
import Feedback from "@/sections/Feedback";
import Getstarted from "@/sections/Getstarted";
import Insigts from "@/sections/Insigts";
import WhatsNew from "@/sections/WhatsNew";
import World from "@/sections/World";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden text-white">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03" />
        <Explore />
      </div>
      <div className="relative">
        <Getstarted />
        <div className="gradient-04" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insigts />
        <div className="gradient-04" />
        <Feedback />
      </div>
      <Fotter />
    </div>
  );
}
