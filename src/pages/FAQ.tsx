import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ApplicationCTA from "@/components/ApplicationCTA";
import { motion } from "framer-motion";
import FAQItem from "@/components/FAQItem";
import { faqCategories } from "@/utils/faqData";

const FAQ = () => {
  useEffect(() => {
    // Update the document title
    document.title = "Frequently Asked Questions | Algoverse AI Research";
    
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
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h1>
          </motion.div>

          <div className="mb-16">
            {faqCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.title}
                </motion.h2>
                <div>
                  {category.items.map((item, itemIndex) => (
                    <FAQItem 
                      key={itemIndex} 
                      question={item.question} 
                      answer={item.answer} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </main>

      <ApplicationCTA />
      <Footer />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ; 