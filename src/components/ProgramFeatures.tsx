import { motion, AnimatePresence } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef, useState, useEffect } from "react";
import type { EmblaCarouselType } from "embla-carousel";

const ProgramFeatures = () => {
  // Create a separate carousel ref for each carousel
  const benefitsCarouselRef = useRef(null);
  const featuredCarouselRef = useRef(null);
  const paperBenchCarouselRef = useRef(null);
  const abhayCarouselRef = useRef(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [benefitsApi, setBenefitsApi] = useState<EmblaCarouselType>();
  const [paperBenchApi, setPaperBenchApi] = useState<EmblaCarouselType>();
  const [abhayApi, setAbhayApi] = useState<EmblaCarouselType>();
  const [currentBenefitIndex, setCurrentBenefitIndex] = useState(0);
  const [currentPaperBenchIndex, setCurrentPaperBenchIndex] = useState(0);
  const [currentAbhayIndex, setCurrentAbhayIndex] = useState(0);
  
  // Connect to Embla Carousel API for benefits carousel
  useEffect(() => {
    if (benefitsApi) {
      benefitsApi.on("select", () => {
        setCurrentBenefitIndex(benefitsApi.selectedScrollSnap());
      });
    }
  }, [benefitsApi]);
  
  // Connect to Embla Carousel API for PaperBench carousel
  useEffect(() => {
    if (paperBenchApi) {
      paperBenchApi.on("select", () => {
        setCurrentPaperBenchIndex(paperBenchApi.selectedScrollSnap());
      });
    }
  }, [paperBenchApi]);
  
  // Connect to Embla Carousel API for Abhay carousel
  useEffect(() => {
    if (abhayApi) {
      abhayApi.on("select", () => {
        setCurrentAbhayIndex(abhayApi.selectedScrollSnap());
      });
    }
  }, [abhayApi]);
  
  // Image data with captions
  const imageData = [
    { src: "carousel1.jpeg", caption: "OpenAI's PaperBench features Algoverse paper among its chosen 20 state-of-the-art papers" },
    { src: "carousel2.png", caption: "PaperBench Github to run an agent on our paper in the benchmark" },
    { src: "carousel3.jpeg", caption: "Acknowledgement of our student, Tim, in helping OpenAI after they reached out to us" },
    { src: "carousel4.jpeg", caption: "Our paper, semantic self-consistency, which was chosen in PaperBench" }
  ];
  
  // Abhay's carousel images
  const abhayImageData = [
    { src: "abhay.png", caption: "Abhay presents AAVENUE at EMNLP Positive Impact 2024 in Miami, Florida" },
    { src: "aavenue.png", caption: "AAVENUE was accepted to NeurIPS HS Track and EMNLP Positive Impact" },
    { src: "aavenuePage.png", caption: "AAVENUE website: https://aavenue.live/" }
  ];
  
  // Custom carousel navigation functions
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length);
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);
  };
  
  // Featured content for the main banner
  const featuredContent = [
    {
      id: 1,
      title: "Publish your own professional research",
      subtitle: "to top AI conferences",
      description: "Immerse yourself in the process of real-world AI research by delving into literature review, developing and implementing your own ML algorithms, communicating your results in a research publication, and submitting research to top AI conferences like NeurIPS, EMNLP, and ACL.",
      images: [
        "emnlpGroup.png",
        "emnlp3.png",
        "emnlp5.png",
        "emnlp1.png"
      ]
    }
  ];
  
  // Program benefits with visual elements
  const programBenefits = [
    {
      id: 1,
      title: "Add advanced research to your portfolio",
      description: "Strengthen your profile for top college admissions, research positions, internships, and beyond.",
      image: "paperDiagram.png",
      icon: "📄"
    },
    {
      id: 2,
      title: "Master the Foundations of AI and ML",
      description: "Conduct real research and gain hands-on experience with advanced concepts in AI and ML.",
      image: "ieeebhiday1.png",
      icon: "🧠"
    },
    {
      id: 3,
      title: "Publish at Top AI and ML Conferences",
      description: (
        <>
          Submit novel research to top AI conferences at the program's end, such as <span className="text-[#00d2ff]">NeurIPS, ACL, & EMNLP</span>.
        </>
      ),
      image: "vancouver.png",
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
            
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
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
                  {content.description.includes("NeurIPS") ? (
                    <>
                      Immerse yourself in the process of real-world AI research by delving into literature review, developing and implementing your own ML algorithms, communicating your results in a research publication, and submitting research to top AI conferences like <span className="text-[#00d2ff]">NeurIPS, EMNLP, and ACL</span>.
                    </>
                  ) : (
                    content.description
                  )}
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
              
              <div className="grid grid-cols-2 grid-rows-2 gap-3 max-w-xl ml-auto">
                {content.images.map((image, idx) => (
                  <motion.div 
                    key={idx}
                    className="overflow-hidden rounded-lg relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      duration: 0.5, 
                      delay: 0.2 + idx * 0.1,
                      hover: { duration: 0.15, delay: 0 }
                    }}
                  >
                    <img
                      src={image}
                      alt="Conference presentation"
                      className="w-full h-44 object-cover transition-transform duration-500"
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
          ref={benefitsCarouselRef}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setBenefitsApi}
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
          
          {/* Indicator bubbles - ONLY shown on smaller screens */}
          <div className="block lg:hidden mt-4 mb-2">
            <div className="flex justify-center gap-2">
              {programBenefits.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => benefitsApi?.scrollTo(index)}
                  className={`h-2 w-2 rounded-full transition-colors ${index === currentBenefitIndex ? 'bg-[#00d2ff]' : 'bg-[#00d2ff]/30'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Navigation arrows - ONLY shown on smaller screens */}
          <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2 mt-4 lg:hidden">
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
                In an outstanding recognition of their cutting-edge work, their paper, <span className="text-[#00d2ff]">Semantic Self-Consistency</span> was featured among 20 state-of-the-art AI research papers in <span className="text-[#00d2ff]">OpenAI's PaperBench</span>. OpenAI handpicked these 20 papers from ICML and NeurIPS and reached out to collaborate with our student author, Tim.
              </p>
              <p className="text-white/80 mb-6">
                Earlier, their paper was also accepted at <span className="text-[#00d2ff]">NeurIPS MATH-AI</span>. Notably, after their NeurIPS presentation, two of the four researchers were admitted to <span className="text-[#00d2ff]">Stanford University</span>.*
              </p>
              <p className="text-xs text-white/20">
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
              {/* PaperBench Carousel - using the Carousel component */}
              <div className="w-full max-w-xs">
                <Carousel
                  ref={paperBenchCarouselRef}
                  setApi={setPaperBenchApi}
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {imageData.map((image, index) => (
                      <CarouselItem key={index} className="basis-full">
                        <div className="relative h-[280px] overflow-hidden rounded-lg bg-black/40">
                          <img
                            src={image.src}
                            alt={`PaperBench image ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {/* Navigation arrows */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                    <CarouselPrevious className="h-8 w-8 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 hover:bg-[#00d2ff]/20" />
                    </div>
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                    <CarouselNext className="h-8 w-8 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 hover:bg-[#00d2ff]/20" />
                  </div>
                </Carousel>
                
                {/* Caption */}
                <div className="bg-black/70 backdrop-blur-md p-3 rounded-lg mt-2 mb-4 w-full">
                  <p className="text-sm text-white">{imageData[currentPaperBenchIndex]?.caption}</p>
                </div>
                
                {/* Indicator bubbles */}
                <div className="flex justify-center gap-2 mb-4">
                  {imageData.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => paperBenchApi?.scrollTo(i)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        i === currentPaperBenchIndex 
                          ? "bg-[#00d2ff] scale-125" 
                          : "bg-[#00d2ff]/30 hover:bg-[#00d2ff]/50"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* Duplicate of featured success story */}
      <div className="container-inner mt-24">
        <motion.div
          className="glass-card border border-[#00d2ff]/30 rounded-xl p-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#3a47d5]/20 rounded-full blur-3xl"></div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
          As a high school student, Abhay's research was accepted to <span className="text-[#00d2ff]">NeurIPS</span> and cited by <span className="text-[#00d2ff]">Microsoft</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-white/80 mb-6">
              Abhay's paper, <span className="text-[#00d2ff]">AAVENUE</span>, was accepted to an <span className="text-[#00d2ff]">EMNLP Workshop</span> and the <span className="text-[#00d2ff]">NeurIPS High School Track</span> (5% acceptance rate). Furthermore, it was cited by researchers at <span className="text-[#00d2ff]">Microsoft, Oxford, University of Washington</span> and other institutions. Abhay came into the program with no prior experience in AI or research.
              </p>
              <p className="text-white/80 mb-6">
              After Algoverse, Abhay acquired internships at <span className="text-[#00d2ff]">Stanford, MIT, and Harvard</span> (Reference: <span className="text-[#00d2ff]">LinkedIn</span>).
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
              {/* Abhay Carousel - using the Carousel component */}
              <div className="w-full max-w-xs">
                <Carousel
                  ref={abhayCarouselRef}
                  setApi={setAbhayApi}
                  opts={{
                    align: "center",
                    loop: true,
                  }}
                  className="w-full"
                >
                  <CarouselContent>
                    {abhayImageData.map((image, index) => (
                      <CarouselItem key={index} className="basis-full">
                        <div className="relative h-[280px] overflow-hidden rounded-lg bg-black/40">
                          <img
                            src={image.src}
                            alt={`Abhay image ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {/* Navigation arrows */}
                  <div className="absolute -left-4 top-1/2 -translate-y-1/2">
                    <CarouselPrevious className="h-8 w-8 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 hover:bg-[#00d2ff]/20" />
                  </div>
                  <div className="absolute -right-4 top-1/2 -translate-y-1/2">
                    <CarouselNext className="h-8 w-8 rounded-full bg-[#00d2ff]/10 border border-[#00d2ff]/30 hover:bg-[#00d2ff]/20" />
                  </div>
                </Carousel>
                
                {/* Caption */}
                <div className="bg-black/70 backdrop-blur-md p-3 rounded-lg mt-2 mb-4 w-full">
                  <p className="text-sm text-white">{abhayImageData[currentAbhayIndex]?.caption}</p>
                </div>
                
                {/* Indicator bubbles */}
                <div className="flex justify-center gap-2 mb-4">
                  {abhayImageData.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => abhayApi?.scrollTo(i)}
                      className={`h-2 w-2 rounded-full transition-all ${
                        i === currentAbhayIndex 
                          ? "bg-[#00d2ff] scale-125" 
                          : "bg-[#00d2ff]/30 hover:bg-[#00d2ff]/50"
                      }`}
                      aria-label={`Go to slide ${i + 1}`}
                    />
                  ))}
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