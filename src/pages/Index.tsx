
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramInfo from "@/components/ProgramInfo";
import ResearchHighlights from "@/components/ResearchHighlights";
import ResearchCitations from "@/components/ResearchCitations";
import ProgramFeatures from "@/components/ProgramFeatures"; 
import SuccessStories from "@/components/SuccessStories";
import TeamSection from "@/components/TeamSection";
import NewsSection from "@/components/NewsSection";
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
    for (let i = 0; i < 40; i++) {
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
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#050017] via-[#0a0a2e] to-[#050017] z-[-2]"></div>
      <div className="fixed inset-0 circuit-pattern opacity-30 z-[-1]"></div>
      <div className="fixed inset-0 grid-pattern z-[-1]"></div>
      
      {/* Data flow lines */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-[#00d2ff]/30 to-transparent"
            style={{
              top: `${10 + i * 12}%`,
              left: 0,
              animationDelay: `${i * 0.5}s`,
              animation: 'data-flow 8s linear infinite'
            }}
          />
        ))}
      </div>
      
      {/* Floating particles */}
      {renderParticles()}
      
      {/* Neural network nodes */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-gradient-to-r from-[#00d2ff]/20 to-[#3a47d5]/20 blur-xl"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
              animation: `pulse ${Math.random() * 5 + 3}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#050017]/80 z-10"></div>
          <ProgramFeatures />
          <ProgramInfo />
          <ResearchHighlights />
          <ResearchCitations />
          <SuccessStories />
          <TeamSection />
          <NewsSection />
          <ApplicationCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
