
import { Button } from "@/components/ui/button";
import { Globe, Lightbulb, BrainCog } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-br from-algoverse-900/95 to-algoverse-700/90 text-white">
      <div className="absolute inset-0 circuit-pattern opacity-30"></div>
      <div className="absolute inset-0 grid-pattern"></div>
      <div className="container-inner relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
            <div className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full inline-flex items-center animate-fade-in border border-white/20">
              <span className="text-sm font-medium">
                Join us for our Summer 2025 Program Infosession on Sunday, May 4, 12:00pm PT (3:00pm ET).
              </span>
              <a href="#infosession" className="text-algoverse-200 hover:text-white text-sm font-medium ml-1 underline">
                Click here for more info.
              </a>
            </div>
            
            <h1 className="heading-xl text-transparent bg-clip-text bg-gradient-to-r from-white via-algoverse-100 to-algoverse-200 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Research on Applied <span className="font-black">ML and LLMs</span>
            </h1>
            
            <p className="paragraph text-algoverse-100 max-w-2xl mx-auto lg:mx-0 animate-fade-up text-lg" style={{ animationDelay: "200ms" }}>
              Immerse yourself in the process of real-world AI research by delving into 
              literature review, developing and implementing your own ML algorithms, 
              communicating your results in a research publication, and submitting research 
              to conferences.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "300ms" }}>
              <a href="#apply" className="tech-glow bg-gradient-to-r from-algoverse-400 to-algoverse-600 hover:from-algoverse-500 hover:to-algoverse-700 text-white font-bold text-center py-3 px-8 rounded-lg transition-all duration-300">
                Apply Here
              </a>
              <p className="text-sm text-algoverse-200 self-center">
                Summer Deadline: Sunday, May 4, 11:59 pm PT.
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="relative animate-float">
              <div className="absolute -inset-1 bg-gradient-to-r from-algoverse-400 to-algoverse-700 rounded-xl blur opacity-80"></div>
              <div className="relative bg-black/40 backdrop-blur-sm border border-algoverse-400/30 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-algoverse-500/20 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-algoverse-500/20 rounded-tr-full"></div>
                
                <div className="p-1 border-b border-algoverse-400/30">
                  <div className="flex space-x-1.5 px-3 py-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <BrainCog size={28} className="text-algoverse-400" />
                    <h3 className="font-bold text-lg text-white">AI Research Program</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <Lightbulb size={18} className="text-algoverse-400 mt-1" />
                      <p className="text-white/80 text-sm">Build real ML models and publish papers</p>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Globe size={18} className="text-algoverse-400 mt-1" />
                      <p className="text-white/80 text-sm">Gain mentorship from industry experts</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-algoverse-400/30">
                    <div className="flex justify-between">
                      <div className="text-xs text-algoverse-300">
                        <span className="text-algoverse-400 font-semibold">12-week</span> program
                      </div>
                      <div className="text-xs text-algoverse-300">
                        <span className="text-algoverse-400 font-semibold">May 2025</span> start
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
