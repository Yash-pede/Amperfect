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
      <About />
      <Explore />
      <Getstarted />
      <WhatsNew />
      <World />
      <Insigts />
      <Feedback />
      <Fotter />
    </div>
  );
}
