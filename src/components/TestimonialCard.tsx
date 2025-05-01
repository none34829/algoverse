
import { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { quote, name, role, imageUrl, papers } = testimonial;

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-5">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-algoverse-100 border-2 border-algoverse-200">
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-algoverse-300 to-algoverse-500 flex items-center justify-center text-white font-bold text-xl">
                  {name.charAt(0)}
                </div>
              )}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg">{name}</h4>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
        </div>

        <blockquote className="mb-5">
          <p className="text-gray-700 italic">&ldquo;{quote}&rdquo;</p>
        </blockquote>

        {papers && papers.length > 0 && (
          <div className="mt-6 pt-4 border-t border-gray-100">
            <h5 className="font-semibold text-sm mb-3 text-algoverse-700">Research Publications:</h5>
            {papers.map((paper, index) => (
              <div key={index} className="mb-4 bg-gray-50 p-3 rounded-md">
                <h6 className="font-medium text-sm mb-1">{paper.title}</h6>
                <p className="text-xs text-gray-500 mb-1">
                  {paper.conference}, {paper.location}
                </p>
                {paper.highlight && (
                  <p className="text-xs font-medium text-algoverse-600 mb-1">
                    {paper.highlight}
                  </p>
                )}
                <p className="text-xs text-gray-600 mb-2">Authors: {paper.authors}</p>
                <div className="flex items-center space-x-3">
                  {paper.link && (
                    <a
                      href={paper.link}
                      className="text-xs text-algoverse-600 hover:text-algoverse-800 font-medium"
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
