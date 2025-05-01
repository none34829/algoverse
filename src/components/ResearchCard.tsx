
import { ResearchPaper } from "@/types";
import { cn } from "@/lib/utils";

interface ResearchCardProps {
  paper: ResearchPaper;
  className?: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ paper, className }) => {
  return (
    <div className={cn(
      "bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group",
      className
    )}>
      {paper.imageUrl ? (
        <div className="h-48 overflow-hidden">
          <img 
            src={paper.imageUrl} 
            alt={paper.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-algoverse-100 to-algoverse-200 flex items-center justify-center">
          <div className="text-algoverse-600 font-serif text-2xl font-semibold">
            Research Paper
          </div>
        </div>
      )}
      
      <div className="p-6">
        {paper.highlight && (
          <div className="mb-3">
            <span className="bg-algoverse-100 text-algoverse-700 text-xs font-semibold px-2.5 py-1 rounded-md">
              {paper.highlight}
            </span>
          </div>
        )}
        
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{paper.title}</h3>
        
        <div className="mb-4">
          <p className="text-sm text-algoverse-700 font-medium">
            {paper.conference} {paper.year}
          </p>
          <p className="text-sm text-gray-500">{paper.location}</p>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-medium">Authors:</span> {paper.authors.join(", ")}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {paper.link && (
            <a 
              href={paper.link}
              className="text-sm btn-outline text-center py-1 px-3"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Read the Paper
            </a>
          )}
          
          {paper.websiteLink && (
            <a 
              href={paper.websiteLink}
              className="text-sm btn-secondary text-center py-1 px-3"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Website
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;
