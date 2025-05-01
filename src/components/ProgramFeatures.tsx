
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef } from "react";

const ProgramFeatures = () => {
  const carouselRef = useRef(null);
  
  // Featured content for the main banner
  const featuredContent = [
    {
      id: 1,
      title: "Publish your own professional research",
      subtitle: "to top AI conferences",
      description: "Immerse yourself in the process of real-world AI research by delving into literature review, developing and implementing your own ML algorithms, communicating your results in a research publication, and submitting research to top AI conferences like NeurIPS, EMNLP, and ACL.",
      images: [
        "/lovable-uploads/7418245b-43c9-472d-8cb3-122f92091848.png",
        "/lovable-uploads/c1f7044b-4820-43f9-befe-52cd5a21e92e.png"
      ]
    }
  ];
  
  // Program benefits with visual elements
  const programBenefits = [
    {
      id: 1,
      title: "Add advanced research to your portfolio",
      description: "Strengthen your profile for top college admissions, research positions, internships, and beyond.",
      image: "/lovable-uploads/b1a788b8-da25-4bd6-90fd-b131d74bdf57.png",
      icon: "📄"
    },
    {
      id: 2,
      title: "Master the Foundations of AI and ML",
      description: "Conduct real research and gain hands-on experience with advanced concepts in AI and ML.",
      image: "/lovable-uploads/6831573d-ebe2-4ce4-99fb-117da105f4e1.png",
      icon: "🧠"
    },
    {
      id: 3,
      title: "Publish at Top AI and ML Conferences",
      description: "Submit novel research to top AI conferences at the program's end, such as NeurIPS, ACL, & EMNLP.",
      image: "/lovable-uploads/dda2008b-1fa9-476e-b5be-5dc754a1ca15.png",
      icon: "🏆"
    }
  ];
  
  return (
    <section id="program-features" className="relative py-24 overflow-hidden">
      {/* The main feature banner */}
      {featuredContent.map((content) => (
        <div key={content.id} className="container-inner mb-20">
          <div className="relative glass-card overflow-hidden border border-[#00d2ff]/30 rounded-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#3a47d5]/20 to-transparent rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#00d2ff]/20 to-transparent rounded-full blur-3xl"></div>
            
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              <div className="space-y-6">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <span className="text-white">{content.title}</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">{content.subtitle}</span>
                </motion.h2>
                
                <motion.p 
                  className="text-white/80 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {content.description}
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <a href="#program" className="inline-flex items-center gap-2 cyber-button px-8 py-3 rounded-lg">
                    <span>Learn More</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </motion.div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {content.images.map((image, idx) => (
                  <motion.div 
                    key={idx}
                    className={`overflow-hidden rounded-lg ${idx === 0 ? 'col-span-2' : ''}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  >
                    <img
                      src={image}
                      alt="Conference presentation"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
      
      {/* Program benefits section with visual cards */}
      <div className="container-inner">
        <Carousel
          ref={carouselRef}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="py-4">
            {programBenefits.map((benefit, index) => (
              <CarouselItem key={benefit.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <motion.div
                  className="h-full glass-card border border-[#00d2ff]/30 rounded-xl overflow-hidden group hover:border-[#00d2ff]/60 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="text-3xl mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2 mt-4">
            <CarouselPrevious className="relative h-8 w-8 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 hover:bg-[#00d2ff]/20" />
            <CarouselNext className="relative h-8 w-8 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 hover:bg-[#00d2ff]/20" />
          </div>
        </Carousel>
      </div>
      
      {/* Featured success story */}
      <div className="container-inner mt-24">
        <motion.div
          className="glass-card border border-[#00d2ff]/30 rounded-xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3a47d5]/20 rounded-full blur-3xl"></div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Tim, Ryan, Ayush, and Kaylee's paper was featured in <span className="text-[#00d2ff]">OpenAI's PaperBench</span>
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/80 mb-6">
                In an outstanding recognition of their cutting-edge work, their paper, <span className="font-semibold">Semantic Self-Consistency</span> was featured among 20 state-of-the-art AI research papers in OpenAI's PaperBench. OpenAI handpicked these 20 papers from ICML and NeurIPS and reached out to collaborate with our student author, Tim.
              </p>
              <p className="text-white/80 mb-6">
                Earlier, their paper was also accepted at NeurIPS MATH-AI. Notably, after their NeurIPS presentation, two of the four researchers were admitted to Stanford University.*
              </p>
              <p className="text-sm text-white/60 italic">
                *The other two researchers were 1: already accepted to college at the time they joined the project and 2: based in Germany
              </p>
              
              <div className="mt-6">
                <a href="#research" className="inline-flex items-center gap-2 text-[#00d2ff] hover:text-white transition-colors">
                  <span>Read More Publications</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center items-center">
              <div className="relative max-w-md">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] blur-xl opacity-30 rounded-xl"></div>
                <img 
                  src="/lovable-uploads/9b224832-ee8b-4edc-9f49-895e3b582416.png" 
                  alt="PaperBench" 
                  className="relative z-10 rounded-xl border border-white/20 shadow-xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-md p-3 rounded-lg border border-white/10 z-20">
                  <p className="text-sm">OpenAI's PaperBench features Algoverse paper among its chosen 20 state-of-the-art papers</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramFeatures;
