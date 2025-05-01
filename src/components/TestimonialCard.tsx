
import { Testimonial } from "@/types";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { quote, name, role, imageUrl, papers } = testimonial;

  return (
    <div className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden border border-algoverse-600/20 transition-all hover:border-algoverse-500/40 hover:shadow-lg">
      <div className="p-6">
        <div className="relative mb-8">
          <Quote size={24} className="absolute -top-2 -left-2 text-algoverse-500/40" />
          <p className="text-algoverse-100 italic pl-5 pr-2">{quote}</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-algoverse-600 to-algoverse-400 rounded-full blur opacity-25"></div>
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-algoverse-800 border border-algoverse-500/30">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-algoverse-700 to-algoverse-900 flex items-center justify-center text-white font-bold text-xl">
                  {name.charAt(0)}
                </div>
              )}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-white">{name}</h4>
            <p className="text-algoverse-300 text-sm">{role}</p>
          </div>
        </div>

        {papers && papers.length > 0 && (
          <div className="mt-6 pt-4 border-t border-algoverse-700/30">
            <h5 className="font-semibold text-sm mb-3 text-algoverse-300">Research Publications:</h5>
            {papers.map((paper, index) => (
              <div key={index} className="mb-4 bg-algoverse-900/50 p-3 rounded-md border border-algoverse-700/20">
                <h6 className="font-medium text-sm mb-1 text-white">{paper.title}</h6>
                <p className="text-xs text-algoverse-400 mb-1">
                  {paper.conference}, {paper.location}
                </p>
                {paper.highlight && (
                  <p className="text-xs font-medium text-algoverse-300 mb-1">
                    {paper.highlight}
                  </p>
                )}
                <p className="text-xs text-algoverse-200 mb-2">Authors: {paper.authors}</p>
                <div className="flex items-center space-x-3">
                  {paper.link && (
                    <a
                      href={paper.link}
                      className="text-xs text-algoverse-400 hover:text-algoverse-300 font-medium transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ArXiv Link Pending
                    </a>
                  )}
                  {paper.logo && (
                    <img src={paper.logo} alt="Journal logo" className="h-5" />
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TestimonialCard;
