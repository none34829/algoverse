
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef } from "react";

interface ProgramBenefit {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
}

interface BenefitsCarouselProps {
  benefits: ProgramBenefit[];
}

const BenefitsCarousel = ({ benefits }: BenefitsCarouselProps) => {
  const carouselRef = useRef(null);

  return (
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
          {benefits.map((benefit, index) => (
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
  );
};

export default BenefitsCarousel;
