
import { motion } from "framer-motion";
import ResearchCarousel from "./ResearchCarousel";

const newsItems = [
  {
    id: 1,
    date: "Apr. 2, 2025",
    title: "Algoverse research paper Cited in OpenAI Research Publication",
    description: "OpenAI features Algoverse research paper in their latest research publication: PaperBench",
    image: "/lovable-uploads/9b224832-ee8b-4edc-9f49-895e3b582416.png"
  },
  {
    id: 2,
    date: "Mar. 6, 2025",
    title: "Algoverse Research Team Acceptances at NAACL 2025",
    description: "Congratulations to sixteen Algoverse research teams for their acceptances to workshops in NAACL 2025 in Albuquerque, New Mexico!",
    image: "/lovable-uploads/b1a788b8-da25-4bd6-90fd-b131d74bdf57.png"
  },
  {
    id: 3,
    date: "Oct. 23, 2024",
    title: "Acceptance to NeurIPS Workshops",
    description: "Six Algoverse research teams are accepted to various NeurIPS 2024 Workshops",
    image: "/lovable-uploads/dda2008b-1fa9-476e-b5be-5dc754a1ca15.png"
  },
  {
    id: 4,
    date: "Jun. 21, 2024",
    title: "Admission to Stanford",
    description: "Congratulations to Ayush Chauhan for being admitted to Stanford!",
    image: "/lovable-uploads/2246100b-b9cd-4dd1-be22-0f76eb64f6e4.png"
  }
];

// Research paper carousel images with captions
const paperImages = [
  {
    url: "/lovable-uploads/20b1fee6-5dc6-440d-b676-c67cbad67194.png",
    caption: "Our paper, Semantic Self-Consistency, which was chosen in PaperBench"
  },
  {
    url: "/lovable-uploads/9b224832-ee8b-4edc-9f49-895e3b582416.png",
    caption: "Tim presenting our research at the NeurIPS conference"
  },
  {
    url: "/lovable-uploads/b1a788b8-da25-4bd6-90fd-b131d74bdf57.png",
    caption: "The team celebrating after the paper acceptance announcement"
  },
  {
    url: "/lovable-uploads/dda2008b-1fa9-476e-b5be-5dc754a1ca15.png",
    caption: "Visual representation of the Semantic Self-Consistency model"
  }
];

const NewsSection = () => {
  return (
    <section id="news" className="relative py-24">
      <div className="container-inner">
        <motion.div
          className="mb-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Around the <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Algoverse</span>
          </h2>
          <p className="text-white/80">
            Acceptances at top conferences, research collaborations, student successes - here's the latest news.
          </p>
        </motion.div>

        {/* Featured Paper Carousel */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="glass-card border border-[#00d2ff]/30 rounded-xl overflow-hidden p-6 md:p-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold">
                <span className="text-white">Tim, Ryan, Ayush, and Kaylee's paper was featured in </span>
                <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">OpenAI's PaperBench</span>
              </h3>
              <p className="text-white/70 mt-2">
                In an outstanding recognition of their cutting-edge work, their paper, 
                <span className="text-[#00d2ff]"> Semantic Self-Consistency</span> was featured among 20 state-of-the-art AI research papers in OpenAI's PaperBench.
              </p>
            </div>
            
            <div className="my-8">
              <ResearchCarousel paperImages={paperImages} />
            </div>
            
            <div className="text-center mt-6">
              <p className="text-white/70 mb-4">
                Earlier, their paper was also accepted at 
                <span className="text-[#00d2ff]"> NeurIPS MATH-AI</span>. 
                Notably, after their NeurIPS presentation, two of the four researchers were admitted to 
                <span className="text-[#00d2ff]"> Stanford University</span>.
              </p>
              <p className="text-white/50 text-sm italic">
                *The other two researchers were 1: already accepted to college at the time they joined the project and 2: based in Germany
              </p>
            </div>
          </div>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="glass-card border border-[#00d2ff]/30 rounded-xl overflow-hidden group hover:border-[#00d2ff]/60 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-40 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6 space-y-3">
                <span className="text-sm text-[#00d2ff]">{item.date}</span>
                <h3 className="font-semibold text-white group-hover:text-[#00d2ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-white/70">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#news-archive"
            className="inline-flex items-center gap-2 text-[#00d2ff] hover:text-white transition-colors"
          >
            <span>Read More News</span>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
