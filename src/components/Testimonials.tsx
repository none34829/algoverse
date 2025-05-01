
import { useState } from "react";
import { Testimonial } from "@/types";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The whole experience was simultaneously one of the most fun yet academically enriching of my life, and I feel like it was definitely the culmination of a lot of hard work.",
    name: "Ryan Li",
    role: "Senior at Basis Independent Fremont, Class of 2025",
    papers: [
      {
        title: "Semantic Self-Consistency: Enhancing Language Model Reasoning via Semantic Weighting",
        conference: "MathAI @ NeurIPS 2024",
        location: "Vancouver, Canada",
        authors: "Tim Knappe, Ryan Li, Ayush Chauhan, Kaylee Chhua",
        link: "#"
      }
    ]
  },
  {
    id: 2,
    quote: "It's a program to really connect and understand the professional world of research.",
    name: "Derek Jiu",
    role: "Sophomore at Houston High School, Fall 2024 Cohort",
    papers: [
      {
        title: "SkinGPT-4 provides a foundation for fair and customizable skin disease classification models",
        conference: "JID 2025",
        location: "San Diego, CA, USA",
        highlight: "Selected for Oral Presentation",
        authors: "Kiran Nijjer, Ryan Bui, Adnan Ahmed, Derek Jiu, Peter Wang",
        link: "#"
      },
      {
        title: "Large language models display skin tone biases in common dermatological conditions",
        conference: "JID 2025",
        location: "San Diego, CA, USA",
        authors: "Kiran Nijjer, Ryan Bui, Adnan Ahmed, Derek Jiu, Peter Wang",
        link: "#"
      }
    ]
  },
  {
    id: 3,
    quote: "Algoverse has given me a good start in AI research. I now know a lot of the concepts that come with doing research in this sort of field and I understand the timeline and what an entire ML/AI project could look like.",
    name: "Philip Chen",
    role: "Freshman, Data Science at University of California, San Diego"
  },
  {
    id: 4,
    quote: "This program was absolutely amazing! I came in not knowing a thing about LLMs and AI, and through the incredibly helpful lectures and help throughout my research progress, I gained incredibly valuable information and definitely learned a lot.",
    name: "Kerry L.",
    role: "Grade 10, Cary, North Carolina"
  },
  {
    id: 5,
    quote: "The Algoverse AI Research program exceeded my expectations. The intensive, hands-on lectures, world-class instructor and mentor, and brilliant teammates enabled me to gain invaluable AI research skills I never imagined possible.",
    name: "Ayush C",
    role: "Grade 12, St. Teresa School"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const displayCount = 3;
  const totalPages = Math.ceil(testimonials.length / displayCount);

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex + displayCount >= testimonials.length 
        ? 0 
        : prevIndex + displayCount
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex - displayCount < 0 
        ? Math.max(0, testimonials.length - displayCount) 
        : prevIndex - displayCount
    );
  };

  const visibleTestimonials = testimonials.slice(
    activeIndex,
    Math.min(activeIndex + displayCount, testimonials.length)
  );

  return (
    <section className="section bg-gradient-to-br from-algoverse-50 to-white">
      <div className="container-inner">
        <div className="text-center mb-10">
          <h2 className="heading-lg mb-4">Words from Our Alumni</h2>
          <p className="paragraph text-gray-600 max-w-3xl mx-auto">
            Hear from past participants about their experiences with our program and their research achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial} 
            />
          ))}
        </div>

        {testimonials.length > displayCount && (
          <div className="mt-10 flex justify-center space-x-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full border border-gray-300 hover:bg-algoverse-50 transition-colors"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex items-center space-x-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    Math.floor(activeIndex / displayCount) === i
                      ? "bg-algoverse-600"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setActiveIndex(i * displayCount)}
                  aria-label={`Go to page ${i + 1}`}
                ></button>
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 rounded-full border border-gray-300 hover:bg-algoverse-50 transition-colors"
              aria-label="Next testimonials"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
