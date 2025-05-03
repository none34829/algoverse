
import { motion } from "framer-motion";

interface SuccessStoryCardProps {
  title: string;
  description: string[];
  image: string;
  imageCaption: string;
  delay?: number;
}

const SuccessStoryCard = ({ title, description, image, imageCaption, delay = 0 }: SuccessStoryCardProps) => {
  return (
    <motion.div
      className="glass-card border border-[#00d2ff]/30 rounded-xl p-8 relative overflow-hidden w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3a47d5]/20 rounded-full blur-3xl"></div>
      
      <h3 className="text-2xl font-bold mb-6">
        <span dangerouslySetInnerHTML={{ __html: title }}></span>
      </h3>
      
      {description.map((paragraph, index) => (
        <p key={index} className={`${index < description.length - 1 ? 'mb-6' : ''} ${paragraph.includes('Stanford University') ? 'text-white font-medium' : 'text-white/80'}`}>
          <span dangerouslySetInnerHTML={{ __html: paragraph }}></span>
        </p>
      ))}
      
      <div className="mt-6">
        <a href="#research" className="inline-flex items-center gap-2 text-[#00d2ff] hover:text-white transition-colors">
          <span>Read More Publications</span>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
      
      <div className="mt-8">
        <div className="relative max-w-md">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] blur-xl opacity-30 rounded-xl"></div>
          <img 
            src={image} 
            alt={title.replace(/<[^>]*>/g, '')} 
            className="relative z-10 rounded-xl border border-white/20 shadow-xl"
          />
          <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-lg border border-white/10 z-20">
            <p className="text-sm">{imageCaption}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SuccessStoryCard;
