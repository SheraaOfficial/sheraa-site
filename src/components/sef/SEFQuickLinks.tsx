
import React from "react";
import { Link } from "react-router-dom";

type SEFQuickLinksProps = {
  hasRevealed: boolean;
};

export const SEFQuickLinks: React.FC<SEFQuickLinksProps> = ({ hasRevealed }) => {
  const links = ["Agenda", "Speakers", "Experience", "Who Should Attend", "Be Part of SEF"];
  
  return (
    <div className={`transition-all duration-1000 delay-600 ${hasRevealed ? "opacity-100 transform-none" : "opacity-0 translate-y-4"}`}>
      <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
      <div className="flex flex-wrap gap-2">
        {links.map((link, index) => (
          <Link 
            key={index} 
            to={`/events/sef/${link.toLowerCase().replace(/\s+/g, '-')}`} 
            className="px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full text-sm transition-all hover:shadow-md"
          >
            {link}
          </Link>
        ))}
      </div>
    </div>
  );
};
