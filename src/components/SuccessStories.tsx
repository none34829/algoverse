import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef } from "react";

const SuccessStories = () => {
  const carouselRef = useRef(null);
  
  const stories = [
    {
      id: 2,
      student: {
        name: "James Begin",
        role: "1st Year College\nComputer Science at University of Waterloo",
        quote: "Our topic was about improving long context performance by inserting pause tokens into context, aiming to redistribute attention across the entire context. Working with my team was great. Everyone was eager to learn and work, and the mentors were available everyday to answer our questions and give feedback. I think this experience has definitely helped jumpstart my career. Looking for summer internships and getting interviews was much easier with research on my resume."
      },
      image: "jamesB.png"
    },
    {
      id: 3,
      student: {
        name: "James Ignacio",
        role: "3rd Year College\nComputer Science at Fordham University Lincoln Center",
        quote: "Our project demonstrated the potential for AI-based computer vision techniques to automatically analyze group dynamics from operating room videos. Together we submitted our abstract to ACS Clinical Congress 2025! Ben was a great mentor, helping us with our blockers while also giving us the opportunity to learn and make our own contributions. Algoverse allowed me to continue working toward my goal of contributing to real-world applications of ML/AI in medical/healthcare contexts."
      },
      image: "james.png"
    },
    {
      id: 3,
      student: {
        name: "Joshua Lee",
        role: "2nd Year College\nComputer Science at De Anza College",
        quote: "Algoverse was the bridge between what you learn in college and how it's relevant to the real world and what's being discovered right now. It's also related to what you're learning in the industry.\n\nIt's taught me to always look outside of the textbook or always be looking for ways to apply what you've learned in college to what's happening in the world."
      },
      image: "joshua.png"
    },
    {
      id: 3,
      student: {
        name: "Michael Naeim",
        role: "Grade 12\nMiami College Language High School",
        quote: "Embarking on a research project focused on BERT was a daunting task for me and my team, but the unwavering support from the program made it achievable. The mentors were not just knowledgeable, but also perfect in their guidance.\n\nI gained valuable knowledge and forged connections with like-minded individuals, creating a network of friends who share my interests. Above all, the mentors were the highlight of the program for me."
      },
      image: "michael.png"
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
        {/* Removed spotlight section so all testimonials are in the carousel below */}
        
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
              {stories.map((story, index) => (
                <CarouselItem key={story.id + story.student.name} className="md:basis-1/2 pl-4">
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
                        {story.student.quote.split('\n\n').map((paragraph, i) => (
                          <span key={i} className="block mb-4">{paragraph}</span>
                        ))}
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
                          <p className="text-sm text-white/70">
                            {story.student.role.split('\n').map((line, i) => (
                              <span key={i} className="block">{line}</span>
                            ))}
                          </p>
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
            <div className="flex justify-center mt-16">
              <a href="#testimonials" className="cyber-button px-8 py-3 rounded-lg inline-flex items-center gap-2 font-semibold text-lg">
                <span>Read More Testimonials</span>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
