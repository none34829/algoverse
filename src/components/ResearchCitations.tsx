
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star } from "lucide-react";

const ResearchCitations = () => {
  // List of institutions that have cited Algoverse research
  const institutions = [
    { name: "Open AI", logo: "openai-logo.svg", tier: "platinum" },
    { name: "Microsoft", logo: "microsoft-logo.svg", tier: "platinum" },
    { name: "Princeton", logo: "princeton-logo.svg", tier: "gold" },
    { name: "MIT", logo: "mit-logo.svg", tier: "gold" },
    { name: "Oxford", logo: "oxford-logo.svg", tier: "gold" },
    { name: "University of Washington", logo: "uw-logo.svg", tier: "silver" },
    { name: "NIH Research", logo: "nih-logo.svg", tier: "silver" },
    { name: "Hewlett Packard", logo: "hp-logo.svg", tier: "silver" },
    { name: "Allen Turing Institute", logo: "turing-logo.svg", tier: "silver" },
    { name: "Mount Sinai", logo: "mountsinai-logo.svg", tier: "silver" },
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
            <Trophy size={28} className="text-[#FFD700]" />
            <h2 className="heading-lg mb-0 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Global Research Impact</h2>
            <Trophy size={28} className="text-[#FFD700]" />
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
          {/* Platinum tier */}
          <div className="mb-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#E5E4E2]"></div>
              <Badge variant="glow" className="px-4 py-1.5 text-sm font-medium bg-[#E5E4E2]/10 text-white border-[#E5E4E2] flex items-center gap-2">
                <Star size={16} className="fill-[#E5E4E2] text-transparent" />
                <span>Platinum Citations</span>
                <Star size={16} className="fill-[#E5E4E2] text-transparent" />
              </Badge>
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#E5E4E2] to-transparent"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {institutions
                .filter(institution => institution.tier === "platinum")
                .map((institution, index) => (
                  <motion.div
                    key={institution.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge 
                      variant="glow" 
                      className="px-5 py-2.5 text-base font-medium border-[#E5E4E2]/50 shadow-[0_0_15px_rgba(229,228,226,0.3)] backdrop-blur-md"
                    >
                      {institution.name}
                    </Badge>
                  </motion.div>
                ))}
            </div>
          </div>
          
          {/* Gold tier */}
          <div className="mb-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#FFD700]"></div>
              <Badge variant="glow" className="px-4 py-1.5 text-sm font-medium bg-[#FFD700]/10 text-white border-[#FFD700] flex items-center gap-2">
                <Award size={16} className="text-[#FFD700]" />
                <span>Gold Citations</span>
                <Award size={16} className="text-[#FFD700]" />
              </Badge>
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#FFD700] to-transparent"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {institutions
                .filter(institution => institution.tier === "gold")
                .map((institution, index) => (
                  <motion.div
                    key={institution.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge 
                      variant="glow" 
                      className="px-4 py-2 text-base font-medium border-[#FFD700]/50 shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                    >
                      {institution.name}
                    </Badge>
                  </motion.div>
                ))}
            </div>
          </div>
          
          {/* Silver tier */}
          <div>
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#C0C0C0]"></div>
              <Badge variant="glow" className="px-4 py-1.5 text-sm font-medium bg-[#C0C0C0]/10 text-white border-[#C0C0C0] flex items-center gap-2">
                <Award size={16} className="text-[#C0C0C0]" />
                <span>Silver Citations</span>
                <Award size={16} className="text-[#C0C0C0]" />
              </Badge>
              <div className="h-[1px] w-12 bg-gradient-to-r from-[#C0C0C0] to-transparent"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {institutions
                .filter(institution => institution.tier === "silver")
                .map((institution, index) => (
                  <motion.div
                    key={institution.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge 
                      variant="glow" 
                      className="px-4 py-2 text-base font-medium border-[#C0C0C0]/50 shadow-[0_0_10px_rgba(192,192,192,0.3)]"
                    >
                      {institution.name}
                    </Badge>
                  </motion.div>
                ))}
            </div>
          </div>
          
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-white/70 text-sm italic">
              Research citations from these prestigious institutions validate the exceptional quality and real-world impact of our program's output.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchCitations;
