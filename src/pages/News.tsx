import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationCTA from "@/components/ApplicationCTA";
import { motion } from "framer-motion";
import { newsItems } from "@/utils/newsData";

const News = () => {
  useEffect(() => {
    // Update the document title
    document.title = "News | Algoverse AI Research";
    
    // Add a dark theme class to the body
    document.body.classList.add("matrix-bg");
    
    return () => {
      document.body.classList.remove("matrix-bg");
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#050017] text-white relative">
      {/* Background elements */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#050017] via-[#0a0a2e] to-[#050017] z-[-2]"></div>
      <div className="fixed inset-0 circuit-pattern opacity-30 z-[-1]"></div>
      <div className="fixed inset-0 grid-pattern z-[-1]"></div>
      
      <Navbar />
      <main className="flex-grow py-24">
        <div className="container-inner">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent mb-4">
              Around the Algoverse
            </h1>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Acceptances at top conferences, research collaborations, student successes. Read the latest news from our program.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 px-0">
            {newsItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="glass-card border border-[#00d2ff]/30 rounded-xl overflow-hidden hover:border-[#00d2ff]/50 transition-all duration-300 h-full flex flex-col w-full"
              >
                {/* Image section */}
                <div className="h-40 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.description}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                {/* Text section */}
                <div className="p-4 flex-grow flex flex-col">
                  <div className="text-[#00d2ff] text-sm font-semibold mb-2">{item.date}</div>
                  <p className="text-white text-sm">{item.description}</p>
                  
                  {item.link && (
                    <div className="mt-auto pt-3">
                      <a 
                        href={item.link} 
                        className="inline-flex items-center text-[#00d2ff] hover:text-white transition-colors text-sm"
                      >
                        Read more
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <ApplicationCTA />
      <Footer />
    </div>
  );
};

export default News; 