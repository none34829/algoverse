
import { motion } from "framer-motion";
import { Linkedin, FileText, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    id: 1,
    name: "Vasu Sharma",
    role: "AI Research Director",
    credentials: [
      "Research Scientist Lead at Meta",
      "Coauthor of Llama 4 and DINOv2",
      "Area Chair and Reviewer at NeurIPS",
      "30+ top conference papers, 5000+ citations"
    ],
    bio: "Vasu Sharma is a Research Scientist Lead at Meta with the Fundamental AI Research (FAIR) team, where he co-authored the state-of-the-art vision model, DINOv2, as one of the tech leads, and is currently working on the release of Llama 4. Vasu has published numerous papers at NeurIPS, EMNLP, ACL, ICLR, etc, received thousands of citations, and has served as an area chair and reviewer.\n\nPreviously, Vasu was a researcher on the Alexa AI team at Amazon Lab126 and a quantitative researcher at Citadel. Before that, Vasu graduated top of his class at CMU in the CS department.\n\n\"Live life with passion—love what you do, do what you love.\"",
    image: "/lovable-uploads/9b224832-ee8b-4edc-9f49-895e3b582416.png",
    links: [
      { type: "linkedin", url: "#" },
      { type: "scholar", url: "#" }
    ]
  },
  {
    id: 2,
    name: "Kevin Zhu",
    role: "Program Director",
    credentials: [
      "Former Berkeley Instructor",
      "Software Engineer at Palantir",
      "Quant Researcher at Citadel",
      "Berkeley AI Research"
    ],
    bio: "I began my journey at Berkeley, where I had the privilege of teaching over 3,000 students as a lecturer and Head GSI for CS198-112, CS170, and CS70, specializing in upper-division algorithms.\n\nMy career took me through software engineering roles at Palantir and various startups, and into ML research at Citadel, Goldman Sachs, and Berkeley's RISE Lab. From working on ML applications in the stock market to improving convolutional neural networks, I've seen how transformative AI can be - and how the field is constantly evolving.\n\nToday, I'm excited to lead Algoverse, where my focus is making AI research more accessible and harnessing the incredible potential of young individuals. By providing guidance and opportunities, we can inspire the next generation of researchers to explore new frontiers and drive meaningful advancements in AI.",
    image: "/lovable-uploads/78869e89-1079-4600-9fa0-94906c1e275a.png",
    links: [
      { type: "linkedin", url: "#" }
    ]
  },
  {
    id: 3,
    name: "Sean O'Brien",
    role: "AI Research Director",
    credentials: [
      "Ph.D AI Researcher at UCSD",
      "AI Resident at Meta",
      "UC Berkeley AI Research"
    ],
    bio: "Sean conducts research on large language models like GPT-4 as a PhD researcher at UCSD. While an AI resident at Meta, he researched language model decoding methods and co-authored Shepherd, a small language model that generates critiques matching the quality of ChatGPT. Previously, at Berkeley AI Research (BAIR), he specialized in transformer architectures for strategy learning.\n\nSean was also a 7-time GSI at Berkeley, teaching introductory programming, discrete mathematics, and upper-division machine learning, while triple majoring in EECS, math, and cognitive science.",
    image: "/lovable-uploads/9e0cf913-ba11-4e1b-979b-dff08f5b392a.png",
    links: [
      { type: "linkedin", url: "#" },
      { type: "scholar", url: "#" }
    ]
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
    bio: "Celine is a PhD candidate at Cornell Tech in New York City, where she researches neurosymbolic approaches to language reasoning, especially in coding tasks. Celine has held various research and development roles at IBM TJ Watson, Intel, and VMware.\n\nHer excitement for teaching shows through her TA positions while pursuing her bachelor's/master's degrees at the University of Pennsylvania and her PhD at Cornell University; as a head instructor with Break Through Tech AI and through external mentorship programs, Celine continues to give back to and learn from other students.",
    image: "/lovable-uploads/2246100b-b9cd-4dd1-be22-0f76eb64f6e4.png",
    links: [
      { type: "linkedin", url: "#" },
      { type: "website", url: "#" },
      { type: "scholar", url: "#" }
    ]
  },
  {
    id: 5,
    name: "Kevin Han",
    role: "AI Research Director",
    credentials: [
      "Ph.D AI Researcher at Carnegie Mellon",
      "Researcher at the Lawrence Berkeley National Laboratory"
    ],
    bio: "Kevin Han is a Ph.D researcher at Carnegie Mellon University, where he utilizes machine learning for drug and materials discovery.\n\nPreviously, he was also a researcher at the Lawrence Berkeley National Laboratory, where he published research in the prestigious Nature journal on graph neural networks for materials discovery. Kevin also has industry experience at JPMorgan Chase, where he developed novel NLP frameworks involving contrastive and curriculum learning. He was also the Head GSI for Berkeley's introductory programming course, where he created the RAG chatbot and other infrastructure to support the entire EECS department.",
    image: "/lovable-uploads/dda2008b-1fa9-476e-b5be-5dc754a1ca15.png",
    links: [
      { type: "linkedin", url: "#" }
    ]
  },
  {
    id: 6,
    name: "Andy Chung",
    role: "AI Research Director",
    credentials: [
      "Ph.D AI Research at UMich",
      "Software Engineer at Amazon"
    ],
    bio: "Andy Chung conducts research on large language models as a PhD researcher at the University of Michigan. His research focuses on leveraging large language models to build autonomous agents.\n\nPreviously, he worked as a software engineer at Amazon. As the tech lead of Amazon Made for You, featured on TechCrunch, Vogue, CNBC, and other major news outlets, he designed the machine learning architecture and implemented the infrastructure needed to deploy the model at scale in a production environment. Andy received his Bachelors in Computer Science from Georgia Tech.",
    image: "/lovable-uploads/c1f7044b-4820-43f9-befe-52cd5a21e92e.png",
    links: [
      { type: "linkedin", url: "#" }
    ]
  }
];

const ExpandedTeamSection = () => {
  return (
    <section id="team" className="relative py-24">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      
      <div className="container-inner relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-space">
            Meet Our <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Team</span>
          </h2>
          
          <p className="max-w-3xl mx-auto text-white/80">
            We are a dedicated team of Ph.D researchers from leading AI universities and AI researchers in the industry, with an extensive background in teaching.
          </p>
        </motion.div>
        
        <Tabs defaultValue="cards" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="cards" className="data-[state=active]:bg-[#00d2ff]/20 data-[state=active]:text-[#00d2ff]">Gallery View</TabsTrigger>
            <TabsTrigger value="detailed" className="data-[state=active]:bg-[#00d2ff]/20 data-[state=active]:text-[#00d2ff]">Detailed View</TabsTrigger>
          </TabsList>
          
          <TabsContent value="cards" className="mt-0">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.id}
                  className="glass-card border border-[#00d2ff]/30 rounded-xl overflow-hidden group hover:border-[#00d2ff]/60 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative h-64 overflow-hidden">
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
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.credentials.map((credential, idx) => (
                        <span 
                          key={idx} 
                          className="inline-block px-3 py-1 rounded-full text-xs bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/30"
                        >
                          {credential}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      {member.links.map((link, idx) => (
                        <a 
                          key={idx}
                          href={link.url}
                          className="p-2 rounded-full bg-[#00d2ff]/10 hover:bg-[#00d2ff]/20 transition-colors text-[#00d2ff]"
                          aria-label={`${link.type} link for ${member.name}`}
                        >
                          {link.type === "linkedin" && <Linkedin size={18} />}
                          {link.type === "scholar" && <FileText size={18} />}
                          {link.type === "website" && <ExternalLink size={18} />}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="detailed">
            <div className="space-y-12">
              {teamMembers.map((member, index) => (
                <motion.div 
                  key={member.id}
                  className="glass-card border border-[#00d2ff]/30 rounded-xl overflow-hidden p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/3 lg:w-1/4 flex-shrink-0">
                      <div className="relative rounded-xl overflow-hidden mb-4 aspect-[3/4] tech-glow">
                        <img 
                          src={member.image} 
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <h3 className="text-2xl font-bold">{member.name}</h3>
                      <p className="text-[#00d2ff] mb-3">{member.role}</p>
                      
                      <div className="flex gap-3 mb-6">
                        {member.links.map((link, idx) => (
                          <a 
                            key={idx}
                            href={link.url}
                            className="p-2 rounded-full bg-[#00d2ff]/10 hover:bg-[#00d2ff]/20 transition-colors text-[#00d2ff]"
                            aria-label={`${link.type} link for ${member.name}`}
                          >
                            {link.type === "linkedin" && <Linkedin size={18} />}
                            {link.type === "scholar" && <FileText size={18} />}
                            {link.type === "website" && <ExternalLink size={18} />}
                          </a>
                        ))}
                      </div>
                      
                      <div className="flex flex-col gap-2 mb-6">
                        {member.credentials.map((credential, idx) => (
                          <span 
                            key={idx} 
                            className="inline-block px-3 py-1 rounded-full text-sm bg-[#00d2ff]/10 text-[#00d2ff] border border-[#00d2ff]/30"
                          >
                            {credential}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="md:w-2/3 lg:w-3/4">
                      {member.bio.split("\n\n").map((paragraph, i) => (
                        <p key={i} className="text-white/80 mb-4 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExpandedTeamSection;
