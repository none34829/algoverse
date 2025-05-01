
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-20 pb-10 md:pt-28 md:pb-16 overflow-hidden bg-gradient-to-br from-white to-algoverse-50">
      <div className="absolute inset-0 bg-research-pattern opacity-50 pointer-events-none"></div>
      <div className="container-inner relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-3/5 space-y-6 text-center lg:text-left">
            <div className="bg-algoverse-100/80 text-algoverse-800 px-4 py-2 rounded-full inline-flex items-center animate-fade-in">
              <span className="text-sm font-medium">
                Join us for our Summer 2025 Program Infosession on Sunday, May 4, 12:00pm PT (3:00pm ET).
              </span>
              <a href="#infosession" className="text-algoverse-600 hover:text-algoverse-700 text-sm font-medium ml-1 underline">
                Click here for more info.
              </a>
            </div>
            
            <h1 className="heading-xl animate-fade-up" style={{ animationDelay: "100ms" }}>
              Research on Applied <span className="gradient-text">ML and LLMs</span>
            </h1>
            
            <p className="paragraph text-gray-600 max-w-2xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
              Immerse yourself in the process of real-world AI research by delving into 
              literature review, developing and implementing your own ML algorithms, 
              communicating your results in a research publication, and submitting research 
              to conferences.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "300ms" }}>
              <a href="#apply" className="btn-primary text-center">
                Apply Here
              </a>
              <p className="text-sm text-gray-500 self-center">
                Summer Deadline: Sunday, May 4, 11:59 pm PT.
              </p>
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-algoverse-500 to-algoverse-800 rounded-xl blur opacity-20"></div>
              <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&h=400&fit=crop" 
                  alt="Students working on AI research" 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-bold text-lg">AI Research Program</h3>
                  <p className="text-gray-600 mt-2">
                    Build real ML models, publish papers, and gain mentorship from industry experts.
                  </p>
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
