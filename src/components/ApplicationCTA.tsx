import { motion } from "framer-motion";
import { Calendar, CheckCircle, Star } from "lucide-react";

const ApplicationCTA = () => {
  // Array for the floating code elements
  const codeSnippets = [
    'import torch', 
    'model = LlamaForCausalLM.from_pretrained("meta-llama/Llama-3-70b")', 
    'outputs = model.generate(input_ids)', 
    'python train.py --epochs 100', 
    'accuracy = 98.7%',
    'loss.backward()',
    'optimizer.step()'
  ];

  return (
    <section id="apply" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#050017] to-[#0a0a2e]"></div>
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      
      {/* Terminal code floating elements */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className="absolute font-mono text-xs text-[#00d2ff]/70 bg-black/20 backdrop-blur-sm px-3 py-1 rounded border border-[#00d2ff]/20"
          style={{
            top: `${10 + (index * 10) % 80}%`,
            left: `${5 + (index * 15) % 90}%`,
            transform: `rotate(${(index % 3 - 1) * 3}deg)`,
            animation: `float ${5 + index}s ease-in-out infinite`,
            animationDelay: `${index * 0.5}s`,
            zIndex: 1
          }}
        >
          {snippet}
        </div>
      ))}
      
      {/* Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-[#00d2ff]/20 animate-float" style={{ animationDelay: "0s" }}></div>
      <div className="absolute top-2/3 left-1/3 w-12 h-12 rounded-full bg-[#3a47d5]/20 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-1/4 w-10 h-10 rounded-full bg-[#00d2ff]/20 animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-3/4 right-1/3 w-14 h-14 rounded-full bg-[#3a47d5]/20 animate-float" style={{ animationDelay: "3s" }}></div>
      
      <div className="container-inner relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto glass-card border border-[#00d2ff]/30 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="p-1 border-b border-[#00d2ff]/30">
            <div className="flex space-x-1.5 px-3 py-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="ml-4 text-xs text-white/60 font-mono">algoverse-application.py</div>
            </div>
          </div>
          
          <div className="p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] rounded-full blur opacity-70"></div>
                  <div className="relative bg-[#050017] rounded-full p-4">
                    <Calendar size={32} className="text-[#00d2ff]" />
                  </div>
                </div>
              </div>
              
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Applications for Summer 2025 are now open
              </motion.h2>
              
              <motion.p 
                className="paragraph-sm mb-8 text-white/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Join our research program to work with expert mentors, develop cutting-edge AI solutions, and publish your research in prestigious conferences.
              </motion.p>
              
              {/* Benefits list */}
              <motion.div 
                className="grid md:grid-cols-3 gap-6 mb-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {[
                  { icon: <Star className="text-[#00d2ff]" />, text: "Collaborate with AI experts" },
                  { icon: <CheckCircle className="text-[#00d2ff]" />, text: "Publish groundbreaking research" },
                  { icon: <Star className="text-[#00d2ff]" />, text: "Boost your academic profile" },
                ].map((benefit, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                  >
                    <div className="mb-3">{benefit.icon}</div>
                    <p className="text-white/90 text-center">{benefit.text}</p>
                  </div>
                ))}
              </motion.div>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <a 
                    href="https://algoverse.paperform.co/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cyber-button inline-block py-4 px-10 rounded-lg text-white font-bold text-lg relative overflow-hidden group"
                  >
                    <span className="relative z-10">Apply Here</span>
                    <span className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                  </a>
                </motion.div>
                
                <motion.p 
                  className="text-sm mt-6 text-white/70"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Summer Deadline: Sunday, May 4, 11:59 pm PT
                </motion.p>
              </div>
              
              {/* Terminal window indicating successful application */}
              <div className="mt-12">
                <motion.div 
                  className="relative max-w-md mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <div className="bg-black/60 backdrop-blur-sm border border-[#00d2ff]/30 rounded-lg overflow-hidden shadow-xl">
                    <div className="p-1 border-b border-[#00d2ff]/30 bg-black/80">
                      <div className="flex space-x-1.5 px-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="ml-2 text-[10px] text-white/60 font-mono">terminal</div>
                      </div>
                    </div>
                    
                    <div className="p-3 font-mono text-xs space-y-1">
                      <div className="flex">
                        <span className="text-[#00d2ff]">$</span>
                        <span className="ml-1 text-white/90">python submit_application.py</span>
                      </div>
                      <div className="text-white/70"> Checking eligibility...</div>
                      <div className="text-white/70"> Processing application data...</div>
                      <div className="text-green-400"> Application successfully submitted!</div>
                      <div className="flex">
                        <span className="text-[#00d2ff]">$</span>
                        <span className="ml-1 text-white/90 typing-effect">_</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ApplicationCTA;
