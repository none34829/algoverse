
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef } from "react";

const SuccessStories = () => {
  const carouselRef = useRef(null);
  
  const stories = [
    {
      id: 1,
      student: {
        name: "Abhay",
        achievement: "As a high school student, Abhay's research was accepted to NeurIPS and cited by Microsoft",
        description: "Abhay's paper, AAVENUE, was accepted to an EMNLP Workshop and the NeurIPS High School Track (5% acceptance rate). Furthermore, it was cited by researchers at Microsoft, Oxford, University of Washington, and other institutions. Abhay came into the program with no prior experience in AI or research.",
        result: "After Algoverse, Abhay acquired internships at Stanford, MIT, and Harvard."
      },
      image: "/lovable-uploads/9e0cf913-ba11-4e1b-979b-dff08f5b392a.png",
      caption: "Abhay presents AAVENUE at EMNLP Positive Impact 2024 in Miami, Florida"
    },
    {
      id: 2,
      student: {
        name: "James Begin",
        role: "1st Year College, Computer Science at University of Waterloo",
        quote: "Our topic was about improving long context performance by inserting pause tokens into context, aiming to redistribute attention across the entire context. Working with my team was great. Everyone was eager to learn and work, and the mentors were available everyday to answer our questions and give feedback. I think this experience has definitely helped jumpstart my career. Looking for summer internships and getting interviews was much easier with research on my resume."
      },
      image: "/lovable-uploads/78869e89-1079-4600-9fa0-94906c1e275a.png"
    },
    {
      id: 3,
      student: {
        name: "James Ignacio",
        role: "3rd Year College, Computer Science at Fordham University Lincoln Center",
        quote: "Our project demonstrated the potential for AI-based computer vision techniques to automatically analyze group dynamics from operating room videos. Together we were able to submit our abstract to ACS Clinical Congress 2025! Ben was a great mentor, helping us with our doctors while also giving us the opportunity to learn and make our own contributions to the project. Algoverse has allowed me to continue working toward my goal of contributing to real-world applications of machine learning/AI in medical/healthcare contexts."
      },
      image: "/lovable-uploads/2246100b-b9cd-4dd1-be22-0f76eb64f6e4.png"
    }
  ];

  return (
    <section id="success-stories" className="relative py-24">
      <div className="container-inner">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Words from our Alumni
          </motion.h2>
        </div>

        {/* Main spotlight story */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="glass-card border border-[#00d2ff]/30 rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden h-[300px] md:h-auto">
                <img 
                  src={stories[0].image} 
                  alt={stories[0].student.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-sm text-white/80">{stories[0].caption}</p>
                </div>
              </div>
              
              <div className="p-8 relative">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-[#3a47d5]/30 to-transparent rounded-full blur-3xl"></div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {stories[0].student.achievement}
                </h3>
                
                <p className="mb-6 text-white/80">
                  {stories[0].student.description}
                </p>
                
                <p className="mb-6 text-white">
                  {stories[0].student.result}
                </p>
                
                <div className="flex items-center justify-between">
                  <a href="#testimonials" className="inline-flex items-center gap-2 text-[#00d2ff] hover:text-white transition-colors">
                    <span>Read More Testimonials</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonial carousel */}
        <div className="mt-16">
          <Carousel
            ref={carouselRef}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="py-4">
              {stories.slice(1).map((story, index) => (
                <CarouselItem key={story.id} className="md:basis-1/2 pl-4">
                  <motion.div 
                    className="h-full glass-card border border-[#00d2ff]/30 rounded-xl overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="p-8 h-full flex flex-col">
                      <div className="mb-6">
                        <svg className="w-10 h-10 text-[#00d2ff]/50" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.737 21.272h4.242L12.727 32h-8.482l6.492-10.728zM23.242 21.272h4.242L25.232 32H16.75l6.492-10.728zM14.242 0h4.242l-8.482 18.272H1.758L14.242 0zM26.747 0h4.242l-8.482 18.272h-8.244L26.747 0z"/>
                        </svg>
                      </div>
                      
                      <p className="italic text-white/80 flex-grow">
                        "{story.student.quote}"
                      </p>
                      
                      <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-[#00d2ff] to-[#3a47d5] p-0.5">
                          <div className="w-full h-full rounded-full overflow-hidden">
                            <img 
                              src={story.image} 
                              alt={story.student.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-white">{story.student.name}</h4>
                          <p className="text-sm text-white/70">{story.student.role}</p>
                        </div>
                      </div>
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
      </div>
    </section>
  );
};

export default SuccessStories;
