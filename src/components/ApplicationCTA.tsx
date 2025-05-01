
const ApplicationCTA = () => {
  return (
    <section id="apply" className="py-20 md:py-28 px-4 bg-gradient-to-r from-algoverse-800 via-algoverse-700 to-algoverse-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 circuit-pattern opacity-20"></div>
      
      {/* Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-algoverse-400/20 animate-float" style={{ animationDelay: "0s" }}></div>
      <div className="absolute top-2/3 left-1/3 w-12 h-12 rounded-full bg-algoverse-400/20 animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute top-1/2 right-1/4 w-10 h-10 rounded-full bg-algoverse-400/20 animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-3/4 right-1/3 w-14 h-14 rounded-full bg-algoverse-400/20 animate-float" style={{ animationDelay: "3s" }}></div>
      
      <div className="container-inner relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-lg mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-algoverse-200">Applications for Summer 2025 are now open.</h2>
          <p className="paragraph-sm mb-10 text-algoverse-100">
            Join our research program to work with expert mentors, develop cutting-edge AI solutions, and publish your research in prestigious conferences.
          </p>
          
          <a 
            href="#apply-form" 
            className="tech-glow inline-block bg-gradient-to-r from-algoverse-400 to-algoverse-600 hover:from-algoverse-500 hover:to-algoverse-700 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300"
          >
            Apply Here
          </a>
          
          <p className="text-sm mt-6 text-algoverse-300">
            Summer Deadline: Sunday, May 4, 11:59 pm PT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationCTA;
