
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen } from "lucide-react";

const ResearchCitations = () => {
  // List of institutions that have cited Algoverse research
  const institutions = [
    { name: "Open AI", logo: "openai.png" },
    { name: "Microsoft", logo: "ms.png" },
    { name: "Princeton", logo: "princeton.png" },
    { name: "MIT", logo: "mit.png" },
    { name: "Oxford", logo: "ox.png" },
    { name: "University of Washington", logo: "uwash.png" },
    { name: "NIH Research", logo: "nihlogo.png" },
    { name: "Hewlett Packard", logo: "hplogo.png" },
    { name: "Allen Turing Institute", logo: "allen.png" },
    { name: "Mount Sinai", logo: "sinai.png" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#00d2ff]/10 to-[#3a47d5]/10 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-gradient-to-r from-[#3a47d5]/10 to-[#00d2ff]/10 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Neural network connections */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute h-[1px] w-full neural-connection"
            style={{
              top: `${10 + i * 16}%`,
              left: 0,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container-inner relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <h2 className="heading-lg mb-0 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Global Research Impact</h2>
          </div>
          
          <p className="paragraph text-white/80 max-w-3xl mx-auto">
            Our research has been cited by world-class institutions including, but not limited to:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card border border-[#00d2ff]/30 p-10 rounded-xl backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {institutions.map((institution, index) => (
              <motion.div
                key={institution.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center gap-4"
              >
                <div className="h-20 flex items-center justify-center mb-2">
                  <img 
                    src={institution.logo} 
                    alt={`${institution.name} logo`} 
                    className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-80 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00d2ff]"></div>
              <Award size={18} className="text-[#00d2ff]" />
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#00d2ff] to-transparent"></div>
            </div>
            <p className="text-white/70 text-sm italic mt-4">
              Research citations from these prestigious institutions validate the exceptional quality and real-world impact of our program's output.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchCitations;