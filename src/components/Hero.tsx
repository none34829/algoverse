
import { Button } from "@/components/ui/button";
import { BrainCog, Sparkle, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      <div className="absolute inset-0 grid-pattern"></div>
      
      {/* Animated glowing orb */}
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-[#00d2ff]/20 to-[#3a47d5]/20 blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-gradient-to-r from-[#3a47d5]/20 to-[#00d2ff]/20 blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      
      <div className="container-inner relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-black/50 border border-[#00d2ff]/30 backdrop-blur-sm mb-6 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-[#00d2ff] animate-pulse mr-2"></div>
              <span className="text-sm text-white/90">
                Summer Deadline: Sunday, May 4, 11:59 pm PT
              </span>
            </div>
            
            <h1 className="heading-xl space-y-2 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3a47d5]">
                Shape the future
              </span>
              <span className="block text-white">
                of ML and AI
              </span>
            </h1>
            
            <p className="paragraph text-white/80 max-w-2xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
              An online 12-week professional AI research program for 
              <span className="text-[#00d2ff]"> college and high school students</span>,
              with mentorship from <span className="text-[#00d2ff]">Ph.D. students and leading AI industry researchers</span>, 
              at:
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
              <div className="flex flex-wrap gap-4 md:gap-8 items-center justify-center lg:justify-start">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Seal_of_University_of_California%2C_Berkeley.svg" alt="UC Berkeley" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Stanford_Cardinal_logo.svg" alt="Stanford" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/Cornell_University_seal.svg" alt="Cornell" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Seal_of_the_University_of_California%2C_San_Diego.svg/640px-Seal_of_the_University_of_California%2C_San_Diego.svg.png" alt="UCSD" className="h-12 opacity-80 hover:opacity-100 transition-opacity" />
              </div>
            </div>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "400ms" }}>
              <a 
                href="#apply" 
                className="cyber-button py-4 px-8 rounded-lg flex items-center justify-center gap-2"
              >
                <span>Apply Here</span>
                <Sparkle className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "500ms" }}>
            <div className="relative animate-float">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] rounded-xl blur opacity-70"></div>
              <div className="relative bg-black/60 backdrop-blur-sm border border-[#00d2ff]/30 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#3a47d5]/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#00d2ff]/20 rounded-tr-full"></div>
                
                <div className="p-1 border-b border-[#00d2ff]/30">
                  <div className="flex space-x-1.5 px-3 py-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <BrainCog size={28} className="text-[#00d2ff]" />
                    <h3 className="font-bold text-lg text-white">AI Research Program</h3>
                  </div>
                  
                  <div className="space-y-3 my-6">
                    <div className="flex items-start space-x-2">
                      <Zap size={18} className="text-[#00d2ff] mt-1" />
                      <p className="text-white/80 text-sm">Publish your own professional research</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Zap size={18} className="text-[#00d2ff] mt-1" />
                      <p className="text-white/80 text-sm">Gain mentorship from industry experts</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Zap size={18} className="text-[#00d2ff] mt-1" />
                      <p className="text-white/80 text-sm">Submit to top AI conferences</p>
                    </div>
                  </div>
                  
                  {/* Terminal-like command interface */}
                  <div className="bg-black/50 rounded-md p-3 font-mono text-xs">
                    <div className="flex">
                      <span className="text-[#00d2ff]">$</span>
                      <span className="text-white/90 ml-2">algoverse run program</span>
                    </div>
                    <div className="text-[#3a47d5]">// Initializing AI research environment...</div>
                    <div className="text-green-400">Success! Ready to shape the future.</div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-[#00d2ff]/30">
                    <div className="flex justify-between">
                      <div className="text-xs text-white/60">
                        <span className="text-[#00d2ff] font-semibold">12-week</span> program
                      </div>
                      <div className="text-xs text-white/60">
                        <span className="text-[#00d2ff] font-semibold">May 2025</span> start
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Animated dots/data flow line */}
        <div className="mt-16 relative">
          <div className="data-flow h-[1px] w-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
