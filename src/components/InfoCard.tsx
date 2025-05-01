
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
        <div className="mb-4 text-[#00d2ff] bg-[#00d2ff]/10 p-3 rounded-full inline-flex animate-pulse-slow">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-bold mb-3 bg-gradient-to-r from-[#00d2ff] to-[#3a47d5] bg-clip-text text-transparent">{title}</h3>
      <div className="text-white/70 group-hover:text-white/90 transition-colors">{children}</div>
    </div>
  );
};

export default InfoCard;
