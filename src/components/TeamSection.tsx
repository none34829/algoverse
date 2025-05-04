import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Vasu Sharma",
    role: "AI Research Director",
    credentials: [
      "Research Scientist Lead at Meta",
      "Llama 4 and DINOv2 Coauthor",
      "NeurIPS Area Chair & Reviewer",
      "30+ top conference papers, 5000+ citations"
    ],
    image: "vasu.png"
  },
  {
    id: 2,
    name: "Sean O'Brien",
    role: "AI Research Director",
    credentials: [
      "Ph.D AI Researcher at UCSD",
      "AI Resident at Meta",
      "UC Berkeley AI Research"
    ],
    image: "sean.png"
  },
  {
    id: 3,
    name: "Kevin Zhu",
    role: "Program Director",
    credentials: [
      "Former UC Berkeley Instructor",
      "SWE at Palantir",
      "Quant Researcher at Citadel",
      "Berkeley AI Research"
    ],
    image: "kevin.png"
  },
  {
    id: 4,
    name: "Celine Lee",
    role: "AI Research Director",
    credentials: [
      "Ph.D AI Researcher at Cornell",
      "AI Resident at Intel",
      "Harvard AI Research"
    ],
    image: "celine.png"
  }
];

const TeamSection = () => {
  return (
    <section id="team" className="relative py-24">
      <div className="container-inner">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Meet Our <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Team</span>
          </motion.h2>
          
          <motion.p 
            className="max-w-3xl mx-auto text-white/80"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We are a dedicated team of Ph.D researchers from leading AI universities and AI researchers in the industry, with an extensive background in teaching.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-0">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={member.id}
              className="glass-card border border-[#00d2ff]/30 rounded-xl overflow-hidden group hover:border-[#00d2ff]/60 transition-all duration-300 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-60 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-[#00d2ff]">{member.role}</p>
                </div>
              </div>
              
              <div className="p-4">
                <ul className="space-y-1">
                  {member.credentials.map((credential, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-[#00d2ff] mr-2">•</span>
                      <span className="text-sm text-white/80">{credential}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#about-us"
            className="cyber-button px-6 py-2 rounded-md inline-flex items-center gap-2"
          >
            <span className="relative z-10">About Us</span>
            <svg className="w-4 h-4 relative z-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
