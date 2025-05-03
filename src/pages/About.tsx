import { Helmet } from "react-helmet-async";
 import Navbar from "@/components/Navbar";
 import Footer from "@/components/Footer";
 import AboutHero from "@/components/AboutHero";
 import MissionSection from "@/components/MissionSection";
 import ExpandedTeamSection from "@/components/ExpandedTeamSection";
 import ApplicationCTA from "@/components/ApplicationCTA";
 
 const About = () => {
   return (
     <>
       <Helmet>
         <title>About | Algoverse</title>
         <meta name="description" content="Learn about Algoverse AI Research - our mission, team, and vision for making top-tier AI research and industry-relevant skills more accessible." />
       </Helmet>
       
       <main className="min-h-screen bg-[#050017]">
         <Navbar />
         <AboutHero />
         <MissionSection />
         <ExpandedTeamSection />
         <ApplicationCTA />
         <Footer />
       </main>
     </>
   );
 };
 
 export default About;