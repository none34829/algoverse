
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
      "bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-6", 
      className
    )}>
      {icon && (
        <div className="mb-4 text-algoverse-600">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <div className="text-gray-600">{children}</div>
    </div>
  );
};

export default InfoCard;
