
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramInfo from "@/components/ProgramInfo";
import ResearchHighlights from "@/components/ResearchHighlights";
import Testimonials from "@/components/Testimonials";
import ApplicationCTA from "@/components/ApplicationCTA";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Algoverse AI Research Program";
    
    // Add a dark theme class to the body
    document.body.classList.add("matrix-bg");
    
    return () => {
      document.body.classList.remove("matrix-bg");
    };
  }, []);

  // Create floating particles for the background
  const renderParticles = () => {
    const particles = [];
    for (let i = 0; i < 20; i++) {
      const randomSize = Math.floor(Math.random() * 5) + 2;
      const randomTop = Math.floor(Math.random() * 100);
      const randomLeft = Math.floor(Math.random() * 100);
      const randomDelay = Math.floor(Math.random() * 5);
      const randomDuration = Math.floor(Math.random() * 10) + 5;
      
      particles.push(
        <div 
          key={i}
          className="particle"
          style={{
            width: `${randomSize}px`,
            height: `${randomSize}px`,
            top: `${randomTop}%`,
            left: `${randomLeft}%`,
            animationDelay: `${randomDelay}s`,
            animationDuration: `${randomDuration}s`
          }}
        />
      );
    }
    
    return particles;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050017] text-white relative">
      <div className="fixed inset-0 bg-gradient-to-br from-[#050017] via-[#0a0a2e] to-[#050017] z-[-2]"></div>
      <div className="fixed inset-0 circuit-pattern opacity-30 z-[-1]"></div>
      <div className="fixed inset-0 grid-pattern z-[-1]"></div>
      
      {/* Floating particles */}
      {renderParticles()}
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#050017]/80 z-10"></div>
          <ProgramInfo />
          <ResearchHighlights />
          <Testimonials />
          <ApplicationCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
