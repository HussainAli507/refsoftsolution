import Image from "next/image";
import Hero from "./Componentss/hero";
import Topcard from "./Componentss/cards";
// import  from "./components/portcards";
import { CarouselSpacing } from "./Componentss/portcards";
import TechIcons from "./Componentss/technologies";
import Timeline from "./Componentss/process";
import ProjectCards from "./Componentss/porjects";
import Footer from "./Componentss/footer";
import ContactSection from "./Componentss/contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Topcard />
      <ProjectCards />
      <CarouselSpacing />
      <TechIcons />
      <Timeline />
      <ContactSection />
      <Footer />
    </div>
  );
}
