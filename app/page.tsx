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
import MobileApp from "./Componentss/appprojects";
import WhyChooseUs from "./Componentss/chooseup";
import MobileAppFeature from "./Componentss/mobilemokeup";
import { MarqueeDemo } from "./Componentss/marquee";

export default function Home() {
  return (
    <div>
      <Hero />
      <Topcard />
      <ProjectCards />
      <MobileApp />
      <CarouselSpacing />
      <MobileAppFeature />
      <TechIcons />
      <MarqueeDemo />
      <WhyChooseUs />
      <Timeline />
      <ContactSection />
      <Footer />
    </div>
  );
}
