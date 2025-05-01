
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProgramInfo from "@/components/ProgramInfo";
import SessionSchedule from "@/components/SessionSchedule";
import ProgramCost from "@/components/ProgramCost";
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
    document.body.classList.add("bg-algoverse-950");
    
    return () => {
      document.body.classList.remove("bg-algoverse-950");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-algoverse-950 text-white relative">
      <div className="fixed inset-0 bg-gradient-to-br from-algoverse-950 via-algoverse-900 to-black z-[-1]"></div>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-algoverse-900/80 z-10"></div>
          <ProgramInfo />
          <SessionSchedule />
          <ProgramCost />
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
