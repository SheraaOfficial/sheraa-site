
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface MobileDropdownProps {
  title: string;
  items: { title: string; href: string }[];
}

const MobileDropdown: React.FC<MobileDropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        className="flex w-full items-center justify-between py-2 text-base"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="mt-1 ml-4 space-y-2 border-l pl-4 border-gray-200">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="block py-1 text-sm"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileDropdown;
