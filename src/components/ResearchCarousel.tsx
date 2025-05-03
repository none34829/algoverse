
import { useRef, useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ResearchCarouselProps {
  paperImages: {
    url: string;
    caption: string;
  }[];
}

const ResearchCarousel: React.FC<ResearchCarouselProps> = ({ paperImages }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="w-full max-w-3xl mx-auto relative">
      <Carousel
        className="w-full"
        onSelect={(index) => setCurrentIndex(index)}
      >
        <CarouselContent>
          {paperImages.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1 h-full">
                <div className="bg-black/20 backdrop-blur-sm rounded-lg overflow-hidden border border-[#00d2ff]/30">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={`Research paper slide ${index + 1}`} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-white/90 text-sm">{image.caption}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
          {paperImages.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-[#00d2ff]" : "bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <CarouselPrevious 
          className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-black/50 border border-[#00d2ff]/30 text-white hover:bg-black/70 hover:text-[#00d2ff]" 
        />
        <CarouselNext 
          className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-black/50 border border-[#00d2ff]/30 text-white hover:bg-black/70 hover:text-[#00d2ff]"
        />
      </Carousel>
    </div>
  );
};

export default ResearchCarousel;
