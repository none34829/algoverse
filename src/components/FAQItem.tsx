import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card border border-[#00d2ff]/30 rounded-xl overflow-hidden hover:border-[#00d2ff]/50 transition-all duration-300"
      >
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center p-6 cursor-pointer"
        >
          <h3 className="text-lg font-semibold text-white">{question}</h3>
          <motion.span 
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="ml-6 text-[#00d2ff]"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.span>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 pb-6 text-white/80">
                {typeof answer === "string" ? (
                  answer.split("\n").map((paragraph, idx) => (
                    <p key={idx} className="mb-3">
                      {paragraph}
                    </p>
                  ))
                ) : (
                  answer
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default FAQItem; 