
import { motion } from "framer-motion";

interface FeaturedContentItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  images: string[];
}

interface FeaturedBannerProps {
  content: FeaturedContentItem;
}

const FeaturedBanner = ({ content }: FeaturedBannerProps) => {
  return (
    <div className="container-inner mb-20">
      <div className="relative glass-card overflow-hidden border border-[#00d2ff]/30 rounded-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#3a47d5]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00d2ff]/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
          <div className="space-y-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-white">{content.title}</span>
              <br />
              <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">{content.subtitle}</span>
            </motion.h2>
            
            <motion.p 
              className="text-white/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {content.description.includes("NeurIPS") ? (
                <>
                  Immerse yourself in the process of real-world AI research by delving into literature review, developing and implementing your own ML algorithms, communicating your results in a research publication, and submitting research to top AI conferences like <span className="text-[#00d2ff]">NeurIPS, EMNLP, and ACL</span>.
                </>
              ) : (
                content.description
              )}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="#program" className="inline-flex items-center gap-2 cyber-button px-8 py-3 rounded-lg">
                <span>Learn More</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 grid-rows-2 gap-3 max-w-xl ml-auto">
            {content.images.map((image, idx) => (
              <motion.div 
                key={idx}
                className="overflow-hidden rounded-lg relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{
                  duration: 0.5, 
                  delay: 0.2 + idx * 0.1,
                  hover: { duration: 0.15, delay: 0 }
                }}
              >
                <img
                  src={image}
                  alt="Conference presentation"
                  className="w-full h-44 object-cover transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
