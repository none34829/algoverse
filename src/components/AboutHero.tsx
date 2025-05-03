
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative py-24 mt-16 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20 z-0"></div>
      
      <div className="container-inner relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-space">
            About <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">Algoverse</span>
          </h1>
          
          <div className="w-24 h-1 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] mx-auto mb-8"></div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="tech-glow rounded-lg p-0.5 mb-8"
          >
            <div className="glass-card p-8 text-left">
              <p className="text-lg text-white/80 leading-relaxed">
                By leveraging our deep teaching and research experience from top AI labs such as Berkeley AI Research (BAIR) and Meta Fundamental AI Research (FAIR), we aim to make top-tier AI research and industry-relevant skills more accessible. Our program empowers students to excel in artificial intelligence, equipping them for success in higher education, advanced research, and impactful careers in the tech industry. By providing unparalleled opportunities in AI education, we enhance their prospects for admission to top universities for undergraduate or graduate admissions and careers in tech and AI, nurturing the future innovators of the field.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#050017] to-transparent"></div>
    </section>
  );
};

export default AboutHero;
