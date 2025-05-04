
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const ResearchCitations = () => {
  // List of institutions that have cited Algoverse research
  const institutions = [
    { name: "Open AI", logo: "openai-logo.svg" },
    { name: "Microsoft", logo: "microsoft-logo.svg" },
    { name: "Princeton", logo: "princeton-logo.svg" },
    { name: "MIT", logo: "mit-logo.svg" },
    { name: "Oxford", logo: "oxford-logo.svg" },
    { name: "University of Washington", logo: "uw-logo.svg" },
    { name: "NIH Research", logo: "nih-logo.svg" },
    { name: "Hewlett Packard", logo: "hp-logo.svg" },
    { name: "Allen Turing Institute", logo: "turing-logo.svg" },
    { name: "Mount Sinai", logo: "mountsinai-logo.svg" },
  ];

  return (
    <section className="py-20 relative">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#00d2ff]/10 to-[#3a47d5]/10 blur-[100px] animate-pulse-slow"></div>
      </div>
      
      <div className="container-inner relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-lg mb-4 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Research Impact</h2>
          <p className="paragraph text-white/80 max-w-3xl mx-auto">
            Our research has been cited by institutions including, but not limited to:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card border border-[#00d2ff]/30 p-10 rounded-xl backdrop-blur-sm"
        >
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {institutions.map((institution, index) => (
              <motion.div
                key={institution.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center"
              >
                <Badge 
                  variant="glow" 
                  className="px-4 py-2 text-base font-medium"
                >
                  {institution.name}
                </Badge>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-white/60 text-sm italic">
              Research citations from top institutions validate the quality and impact of our program's output.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchCitations;
