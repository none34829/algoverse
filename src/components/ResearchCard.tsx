
import { ResearchPaper } from "@/types";
import { cn } from "@/lib/utils";
import { FileCode } from "lucide-react";

interface ResearchCardProps {
  paper: ResearchPaper;
  className?: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ paper, className }) => {
  return (
    <div className={cn(
      "bg-black/40 backdrop-blur-md border border-algoverse-600/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group",
      className
    )}>
      {paper.imageUrl ? (
        <div className="h-48 overflow-hidden">
          <img 
            src={paper.imageUrl} 
            alt={paper.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      ) : (
        <div className="h-48 bg-gradient-to-br from-algoverse-900 to-algoverse-800 flex items-center justify-center relative overflow-hidden">
          <div className="absolute w-64 h-64 -bottom-32 -right-32 bg-algoverse-700/20 rounded-full"></div>
          <div className="absolute w-48 h-48 -top-24 -left-24 bg-algoverse-700/20 rounded-full"></div>
          <FileCode size={48} className="text-algoverse-400 relative z-10" />
        </div>
      )}
      
      <div className="p-6 border-t border-algoverse-600/20">
        {paper.highlight && (
          <div className="mb-3">
            <span className="bg-algoverse-700/30 text-algoverse-300 text-xs font-medium px-2.5 py-1 rounded-md">
              {paper.highlight}
            </span>
          </div>
        )}
        
        <h3 className="text-lg font-bold mb-2 line-clamp-2 text-white">{paper.title}</h3>
        
        <div className="mb-4">
          <p className="text-sm text-algoverse-300 font-medium">
            {paper.conference} {paper.year}
          </p>
          <p className="text-sm text-algoverse-400">{paper.location}</p>
        </div>
        
        <p className="text-sm text-algoverse-200 mb-4">
          <span className="font-medium text-algoverse-100">Authors:</span> {paper.authors.join(", ")}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {paper.link && (
            <a 
              href={paper.link}
              className="text-sm bg-black/30 hover:bg-black/50 border border-algoverse-500/50 text-algoverse-300 hover:text-white text-center py-1 px-3 rounded transition-all duration-300"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Read the Paper
            </a>
          )}
          
          {paper.websiteLink && (
            <a 
              href={paper.websiteLink}
              className="text-sm bg-algoverse-700/30 hover:bg-algoverse-700/50 border border-algoverse-500/30 text-algoverse-300 hover:text-white text-center py-1 px-3 rounded transition-all duration-300"
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
