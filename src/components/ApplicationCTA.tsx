
const ApplicationCTA = () => {
  return (
    <section id="apply" className="py-20 md:py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#041328] via-[#0a0a2e] to-[#041328]"></div>
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      
      {/* Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-[#00d2ff]/20 animate-float" style={{ animationDelay: "0s" }}></div>
      <div className="absolute top-2/3 left-1/3 w-12 h-12 rounded-full bg-[#3a47d5]/20 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-1/4 w-10 h-10 rounded-full bg-[#00d2ff]/20 animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-3/4 right-1/3 w-14 h-14 rounded-full bg-[#3a47d5]/20 animate-float" style={{ animationDelay: "3s" }}></div>
      
      <div className="container-inner relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-lg mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-[#3a47d5]">
            Applications for Summer 2025 are now open.
          </h2>
          <p className="paragraph-sm mb-10 text-white/80">
            Join our research program to work with expert mentors, develop cutting-edge AI solutions, and publish your research in prestigious conferences.
          </p>
          
          <a 
            href="#apply-form" 
            className="cyber-button inline-block py-4 px-10 rounded-lg text-white font-bold text-lg"
          >
            Apply Here
          </a>
          
          <p className="text-sm mt-6 text-white/70">
            Summer Deadline: Sunday, May 4, 11:59 pm PT.
          </p>
        </div>
      </div>
      
      {/* Terminal window graphic */}
      <div className="absolute bottom-0 right-0 w-60 h-32 transform translate-x-1/4 translate-y-1/4 opacity-30">
        <div className="relative h-full w-full bg-black border border-[#00d2ff]/30 rounded-lg overflow-hidden">
          <div className="p-1 border-b border-[#00d2ff]/30 bg-black">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <div className="p-2 font-mono text-xs">
            <div className="flex">
              <span className="text-[#00d2ff]">$</span>
              <span className="ml-1 text-white/90">submit_application.py</span>
            </div>
            <div className="text-green-400">Successfully submitted!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationCTA;
