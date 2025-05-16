
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Portfolio from "@/components/Portfolio";
import Certificates from "@/components/Certificates";
import Publications from "@/components/Publications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";
import { ParallaxProvider } from "../contexts/ParallaxContext";
import ParallaxSection from "@/components/ParallaxSection";

const Index = () => {
  return (
    <ParallaxProvider>
      <div className="flex flex-col min-h-screen overflow-x-hidden overflow-y-auto">
        <SplashScreen minDisplayTime={2000} />
        <Navbar />
        <Hero />

        <ParallaxSection speed={0.1} direction="up" intensity="medium">
          <About />
        </ParallaxSection>

        <ParallaxSection speed={0.15} direction="down" intensity="medium">
          <Experience />
        </ParallaxSection>

        <ParallaxSection speed={0.12} direction="left" intensity="medium">
          <Portfolio />
        </ParallaxSection>

        <ParallaxSection speed={0.08} direction="right" intensity="light">
          <Certificates />
        </ParallaxSection>

        <ParallaxSection speed={0.2} direction="up" intensity="strong">
          <Publications />
        </ParallaxSection>

        <ParallaxSection speed={0.15} direction="down" intensity="medium">
          <Contact />
        </ParallaxSection>

        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Index;
