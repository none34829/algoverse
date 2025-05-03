
import { motion } from "framer-motion";

const newsItems = [
  {
    id: 1,
    date: "Apr. 2, 2025",
    title: "Algoverse research paper Cited in OpenAI Research Publication",
    description: "OpenAI features Algoverse research paper in their latest research publication: PaperBench",
    image: "openailogobanner.png"
  },
  {
    id: 2,
    date: "Mar. 6, 2025",
    title: "Algoverse Research Team Acceptances at NAACL 2025",
    description: "Congratulations to sixteen Algoverse research teams for their acceptances to workshops in NAACL 2025 in Albuquerque, New Mexico!",
    image: "naaclbanner.png"
  },
  {
    id: 3,
    date: "Oct. 23, 2024",
    title: "Acceptance to NeurIPS Workshops",
    description: "Six Algoverse research teams are accepted to various NeurIPS 2024 Workshops",
    image: "vancouver_convention_center.png"
  },
  {
    id: 4,
    date: "Jun. 21, 2024",
    title: "Admission to Stanford",
    description: "Congratulations to Ayush Chauhan for being admitted to Stanford!",
    image: "stanfordbanner.png"
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
