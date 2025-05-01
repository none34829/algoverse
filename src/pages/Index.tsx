
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
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <ProgramInfo />
        <SessionSchedule />
        <ProgramCost />
        <ResearchHighlights />
        <Testimonials />
        <ApplicationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
