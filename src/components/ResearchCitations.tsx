
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen } from "lucide-react";

const ResearchCitations = () => {
  // List of institutions that have cited Algoverse research
  const institutions = [
    { name: "Open AI", logo: "/lovable-uploads/b1a788b8-da25-4bd6-90fd-b131d74bdf57.png" },
    { name: "Microsoft", logo: "/lovable-uploads/9e0cf913-ba11-4e1b-979b-dff08f5b392a.png" },
    { name: "Princeton", logo: "/lovable-uploads/dda2008b-1fa9-476e-b5be-5dc754a1ca15.png" },
    { name: "MIT", logo: "/lovable-uploads/78869e89-1079-4600-9fa0-94906c1e275a.png" },
    { name: "Oxford", logo: "/lovable-uploads/9b224832-ee8b-4edc-9f49-895e3b582416.png" },
    { name: "University of Washington", logo: "/lovable-uploads/2246100b-b9cd-4dd1-be22-0f76eb64f6e4.png" },
    { name: "NIH Research", logo: "/lovable-uploads/7418245b-43c9-472d-8cb3-122f92091848.png" },
    { name: "Hewlett Packard", logo: "/lovable-uploads/c1f7044b-4820-43f9-befe-52cd5a21e92e.png" },
    { name: "Allen Turing Institute", logo: "/lovable-uploads/6831573d-ebe2-4ce4-99fb-117da105f4e1.png" },
    { name: "Mount Sinai", logo: "/placeholder.svg" },
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
            <BookOpen size={28} className="text-[#00d2ff]" />
            <h2 className="heading-lg mb-0 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Global Research Impact</h2>
            <BookOpen size={28} className="text-[#00d2ff]" />
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
                <Badge 
                  variant="glow" 
                  className="px-4 py-2 text-sm font-medium border-[#00d2ff]/50 shadow-[0_0_15px_rgba(0,210,255,0.3)] backdrop-blur-md text-center w-full"
                >
                  {institution.name}
                </Badge>
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
