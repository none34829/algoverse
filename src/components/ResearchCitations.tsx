
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, ExternalLink, Quote } from "lucide-react";

const ResearchCitations = () => {
  // List of institutions that have cited Algoverse research with their logos
  const institutions = [
    { 
      name: "Open AI", 
      logo: "/lovable-uploads/b1a788b8-da25-4bd6-90fd-b131d74bdf57.png",
      paper: "PaperBench: Evaluating AI's Ability to Replicate AI Research"
    },
    { 
      name: "Microsoft", 
      logo: "/lovable-uploads/9e0cf913-ba11-4e1b-979b-dff08f5b392a.png",
      paper: "One Language, Many Gaps: Evaluating Dialect Fairness and Robustness of LLMs"
    },
    { 
      name: "Princeton", 
      logo: "/lovable-uploads/dda2008b-1fa9-476e-b5be-5dc754a1ca15.png",
      paper: "GPT-4o Reads the Mind in the Eyes"
    },
    { 
      name: "MIT", 
      logo: "/lovable-uploads/78869e89-1079-4600-9fa0-94906c1e275a.png",
      paper: "GPT-4o Reads the Mind in the Eyes"
    },
    { 
      name: "Oxford", 
      logo: "/lovable-uploads/9b224832-ee8b-4edc-9f49-895e3b582416.png",
      paper: "One Language, Many Gaps: Evaluating Dialect Fairness and Robustness of LLMs"
    },
    { 
      name: "University of Washington", 
      logo: "/lovable-uploads/2246100b-b9cd-4dd1-be22-0f76eb64f6e4.png",
      paper: "One Language, Many Gaps: Evaluating Dialect Fairness and Robustness of LLMs"
    },
    { 
      name: "NIH Research", 
      logo: "/lovable-uploads/7418245b-43c9-472d-8cb3-122f92091848.png",
      paper: "Medical Applications of Machine Learning in Healthcare"
    },
    { 
      name: "Hewlett Packard", 
      logo: "/lovable-uploads/c1f7044b-4820-43f9-befe-52cd5a21e92e.png",
      paper: "High-Performance Computing for ML Inference Systems"
    },
    { 
      name: "Allen Turing Institute", 
      logo: "/lovable-uploads/6831573d-ebe2-4ce4-99fb-117da105f4e1.png",
      paper: "Ethical AI Considerations in Student Research"
    },
    { 
      name: "Mount Sinai", 
      logo: "/lovable-uploads/cc8986a1-60c8-404b-a4b1-c2215d85cb15.png",
      paper: "DiversityMedQA: Medical Diagnosis Bias Analysis"
    },
  ];

  return (
    <section id="citations" className="py-20 relative overflow-hidden">
      {/* Background gradient effects */}
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
            <Quote size={28} className="text-[#00d2ff]" />
            <h2 className="heading-lg mb-0 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Paper Citations</h2>
            <Quote size={28} className="text-[#00d2ff] scale-x-[-1]" />
          </div>
          
          <p className="paragraph text-white/80 max-w-4xl mx-auto">
            Undergraduate research cited by premier institutions is already a rare and exceptional achievement—demonstrating the quality, depth, and real-world impact of our students' work. But at Algoverse, even high school students regularly earn citations from researchers at top universities and labs—a nearly unheard-of accomplishment in academia.
          </p>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center mb-10 gap-3"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#00d2ff]"></div>
          <div className="text-5xl font-bold text-white">26</div>
          <div className="text-xl text-white/80 font-light">Citations in the past year</div>
          <div className="h-[1px] w-12 bg-gradient-to-r from-[#00d2ff] to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card border border-[#00d2ff]/30 p-10 rounded-xl backdrop-blur-sm"
        >
          <h3 className="text-xl md:text-2xl font-bold mb-8 text-center text-white/90">
            Our Research Has Been Cited By
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {institutions.map((institution, index) => (
              <motion.div
                key={institution.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center gap-4 group"
              >
                <div className="h-20 flex items-center justify-center mb-2 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <img 
                    src={institution.logo} 
                    alt={`${institution.name} logo`} 
                    className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
                
                <div className="group relative">
                  <Badge 
                    variant="glow" 
                    className="px-4 py-2 text-sm font-medium border-[#00d2ff]/50 shadow-[0_0_15px_rgba(0,210,255,0.3)] backdrop-blur-md text-center w-full"
                  >
                    {institution.name}
                  </Badge>
                  
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#00d2ff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
                    <ExternalLink size={10} className="text-black" />
                  </div>
                  
                  {/* Paper citation tooltip */}
                  <div className="absolute top-full left-0 right-0 mt-2 p-3 bg-black/80 backdrop-blur-md border border-[#00d2ff]/30 rounded-lg text-xs text-white/80 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 z-10">
                    <div className="font-medium text-[#00d2ff] mb-1">Cited Paper:</div>
                    <p className="text-white/90">{institution.paper}</p>
                  </div>
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
            <p className="text-white/70 text-sm mt-4 max-w-3xl mx-auto">
              Citations represent more than just recognition; they reflect meaningful contributions to science itself. 
              The fact that our students' discoveries are informing research conducted by seasoned scholars 
              underscores the extraordinary rigor, originality, and influence of their work.
            </p>
          </motion.div>
        </motion.div>

        {/* Example Citations */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold mb-6 text-white/90">Example Citations</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "PaperBench: Evaluating AI's Ability to Replicate AI Research",
                institution: "OpenAI",
                logo: "/lovable-uploads/b1a788b8-da25-4bd6-90fd-b131d74bdf57.png"
              },
              {
                title: "One Language, Many Gaps: Evaluating Dialect Fairness and Robustness of Large Language Models in Reasoning Tasks",
                institution: "Microsoft, Oxford, University of Washington, others",
                logo: "/lovable-uploads/9e0cf913-ba11-4e1b-979b-dff08f5b392a.png"
              },
              {
                title: "GPT-4o Reads the Mind in the Eyes",
                institution: "Princeton, MIT, and other universities",
                logo: "/lovable-uploads/dda2008b-1fa9-476e-b5be-5dc754a1ca15.png"
              }
            ].map((citation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="glass-card border border-[#00d2ff]/20 p-6 rounded-lg backdrop-blur-sm hover:border-[#00d2ff]/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 bg-black/30 rounded-full flex items-center justify-center overflow-hidden border border-[#00d2ff]/20">
                    <img 
                      src={citation.logo} 
                      alt={citation.institution.split(',')[0]} 
                      className="max-h-8 max-w-8 object-contain filter brightness-0 invert opacity-80"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">{citation.title}</h4>
                    <p className="text-sm text-white/60">{citation.institution}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchCitations;
