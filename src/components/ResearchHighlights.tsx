
import { motion } from "framer-motion";
import { ResearchPaper } from "@/types";
import ResearchCard from "./ResearchCard";
import { Sparkle } from "lucide-react";

const papers: ResearchPaper[] = [
  {
    id: 1,
    title: "Semantic Self-Consistency: Enhancing Language Model Reasoning via Semantic Weighting",
    conference: "NeurIPS",
    location: "Vancouver, Canada",
    year: 2024,
    highlight: "Accepted to NeurIPS 2024",
    authors: ["Tim Knappe", "Ryan Li", "Ayush Chauhan", "Kaylee Chhua"],
    link: "#",
    websiteLink: "#",
  },
  {
    id: 2,
    title: "NusaMT-7B: Machine Translation for Low-Resource Indonesian Languages with LLMs",
    conference: "NeurIPS",
    location: "Vancouver, Canada",
    year: 2024,
    highlight: "Accepted to NeurIPS 2024",
    authors: ["Nusa Research Team", "Algoverse Students"],
    link: "#",
  },
  {
    id: 3,
    title: "Differentiation of ADEM from MS Using a Novel Brain Lesion Segmentation and Classification Pipeline",
    conference: "IEEE BHI",
    location: "Boston, MA",
    year: 2024,
    highlight: "Accepted to IEEE BHI 2024",
    authors: ["Algoverse Medical AI Team", "Research Mentors"],
    link: "#",
  }
];

const ResearchHighlights = () => {
  return (
    <section id="research" className="section py-24 relative">
      {/* Neural network nodes background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full bg-gradient-to-r from-[#00d2ff]/10 to-[#3a47d5]/10 blur-xl"
            style={{
              width: `${Math.random() * 150 + 50}px`,
              height: `${Math.random() * 150 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.1,
              animation: `pulse ${Math.random() * 10 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      <div className="container-inner relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg mb-4 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Research Highlights</h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#00d2ff]"></div>
            <Sparkle size={16} className="text-[#00d2ff]" />
            <div className="h-[1px] w-10 bg-gradient-to-r from-[#3a47d5] to-transparent"></div>
          </div>
          <p className="paragraph text-white/80 max-w-3xl mx-auto">
            Explore some of our recent research papers published by our students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {papers.map((paper, index) => (
            <motion.div
              key={paper.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ResearchCard paper={paper} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="#more-research" className="cyber-button py-3 px-8 rounded-lg flex items-center gap-2 mx-auto w-fit">
            <span>Read More Research</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
        
        {/* Featured research visualization */}
        <div className="mt-24">
          <div className="glass-card border border-[#00d2ff]/30 p-8 rounded-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#3a47d5]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00d2ff]/10 rounded-full blur-3xl"></div>
            
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">
                    Visualization of AI Research Impact
                  </span>
                </h3>
                
                <p className="text-white/80 mb-6">
                  Our students' research has been recognized by leading AI institutions and researchers worldwide. 
                  The graph shows the citation network and impact of papers published through our program.
                </p>
                
                {/* 3D Network Visualization Mockup */}
                <div className="relative h-[300px] rounded-lg overflow-hidden backdrop-blur-sm border border-[#00d2ff]/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-2xl font-bold text-white/40">Visualization Coming Soon</div>
                  </div>
                  
                  {/* Nodes and connections */}
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: Math.random() > 0.7 ? '#00d2ff' : Math.random() > 0.5 ? '#3a47d5' : 'rgba(255,255,255,0.5)',
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        opacity: Math.random() * 0.8 + 0.2,
                        boxShadow: Math.random() > 0.7 ? '0 0 10px #00d2ff' : '0 0 5px rgba(255,255,255,0.3)'
                      }}
                    />
                  ))}
                  
                  {/* Connection lines */}
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div 
                      key={`line-${i}`}
                      className="absolute bg-white/20"
                      style={{
                        height: '1px',
                        width: `${Math.random() * 100 + 20}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        transform: `rotate(${Math.random() * 360}deg)`,
                        opacity: Math.random() * 0.5 + 0.1
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <div>
                <div className="glass-card border border-[#3a47d5]/30 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-[#3a47d5] mb-3">Research Metrics</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-white/60 text-sm">Total Publications</p>
                      <p className="text-2xl font-bold text-white">47</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Conference Acceptances</p>
                      <p className="text-2xl font-bold text-white">32</p>
                    </div>
                    <div>
                      <p className="text-white/60 text-sm">Total Citations</p>
                      <p className="text-2xl font-bold text-white">126</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card border border-[#00d2ff]/30 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-[#00d2ff] mb-3">Top Conferences</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center justify-between">
                      <span className="text-white/80">NeurIPS</span>
                      <span className="text-white font-medium">14 papers</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-white/80">EMNLP</span>
                      <span className="text-white font-medium">9 papers</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-white/80">ACL</span>
                      <span className="text-white font-medium">7 papers</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-white/80">ICLR</span>
                      <span className="text-white font-medium">5 papers</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchHighlights;
