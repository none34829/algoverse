
import { InfoCardProps } from "@/types";
import { cn } from "@/lib/utils";

const InfoCard: React.FC<InfoCardProps> = ({ 
  title, 
  children, 
  icon,
  className
}) => {
  return (
    <div className={cn(
      "glass-card p-6 group hover:scale-102 transition-all duration-300",
      className
    )}>
      {icon && (
        <div className="mb-4 text-algoverse-600 bg-algoverse-50/50 p-3 rounded-full inline-flex animate-pulse-slow">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-algoverse-700 to-algoverse-500 bg-clip-text text-transparent">{title}</h3>
      <div className="text-gray-600 group-hover:text-gray-800 transition-colors">{children}</div>
    </div>
  );
};

export default InfoCard;
