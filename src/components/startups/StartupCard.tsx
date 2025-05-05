
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Startup } from "@/pages/community/types/startup";

interface StartupCardProps {
  startup: Startup;
  index: number;
  isMobile: boolean;
}

const StartupCard: React.FC<StartupCardProps> = React.memo(({ startup, index, isMobile }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative group h-full"
  >
    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sheraa-soft group-hover:shadow-sheraa-medium transition-all duration-300 border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="flex items-center gap-3 md:gap-4 mb-4">
        <Avatar className={`${isMobile ? "w-12 h-12" : "w-16 h-16"} border-2 border-sheraa-primary/10 flex-shrink-0`}>
          <AvatarImage src={startup.logo} alt={startup.name} />
          <AvatarFallback className="bg-sheraa-primary/5 text-sheraa-primary font-semibold">
            {startup.name[0]}
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <h3 className="text-lg md:text-xl font-bold text-sheraa-primary truncate">
            {startup.name}
          </h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="soft-coral" animation="none" size="sm">
              {startup.sector}
            </Badge>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 mb-3">
        {startup.achievement && (
          <Badge variant="gradient-warm" animation="none" size="sm">
            {startup.achievement}
          </Badge>
        )}
        {startup.impact && (
          <Badge variant="purple" animation="none" size="sm">
            {startup.impact}
          </Badge>
        )}
      </div>

      <p className="text-gray-600 mb-4 line-clamp-3 text-sm md:text-base flex-grow">
        {startup.description}
      </p>

      {startup.stats && (
        <div className="flex items-center gap-2 text-sheraa-primary mt-auto pt-2">
          <Star className={`${isMobile ? "w-3.5 h-3.5" : "w-4 h-4"} flex-shrink-0`} />
          <span className="text-xs md:text-sm font-medium">{startup.stats}</span>
        </div>
      )}
    </div>
  </motion.div>
));

StartupCard.displayName = 'StartupCard';

export default StartupCard;
