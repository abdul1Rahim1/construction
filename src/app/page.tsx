import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Equipment from "@/components/Equipment";
import Projects from "@/components/Projects";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import DiyaDev from "@/components/DiyaDev";
import SocialSidebar from "@/components/SocialSidebar";
import Chatbot from "@/components/Chatbot";

export default function Home() {
  return (
    <>
      <SocialSidebar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Stats />
      <Equipment />
      <Projects />
      <Gallery />
      <Process />
      <Testimonials />
      <DiyaDev />
      <CTA />
      <Contact />
      <Chatbot />
    </>
  );
}

