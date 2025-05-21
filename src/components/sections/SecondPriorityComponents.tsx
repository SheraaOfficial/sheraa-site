import React from "react";

export const SecondPriorityComponents: React.FC = () => {
  return (
    <>
      {/* We'll keep this component lightweight to avoid rendering too many components at once */}
      <div className="py-12 md:py-16"></div>
    </>
  );
};
