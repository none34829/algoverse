
const ApplicationCTA = () => {
  return (
    <section id="apply" className="py-16 md:py-24 px-4 bg-algoverse-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-research-pattern opacity-10"></div>
      <div className="container-inner relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-lg mb-6">Applications for Summer 2025 are now open.</h2>
          <p className="paragraph-sm mb-8">
            Join our research program to work with expert mentors, develop cutting-edge AI solutions, and publish your research in prestigious conferences.
          </p>
          
          <a 
            href="#apply-form" 
            className="btn-primary bg-white text-algoverse-700 hover:bg-gray-100 text-lg px-8 py-3"
          >
            Apply Here
          </a>
          
          <p className="text-sm mt-4 text-algoverse-200">
            Summer Deadline: Sunday, May 4, 11:59 pm PT.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApplicationCTA;
