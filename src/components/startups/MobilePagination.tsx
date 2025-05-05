
import React from "react";

interface MobilePaginationProps {
  activeIndex: number;
  itemCount: number;
}

const MobilePagination: React.FC<MobilePaginationProps> = ({ activeIndex, itemCount }) => (
  <div className="flex justify-center mt-6 gap-2">
    {Array.from({ length: itemCount }).map((_, i) => (
      <button
        key={i}
        className={`w-2.5 h-2.5 rounded-full transition-colors ${
          i === activeIndex ? 'bg-sheraa-coral' : 'bg-gray-300'
        }`}
        aria-label={`Go to slide ${i + 1}`}
      />
    ))}
  </div>
);

export default MobilePagination;
