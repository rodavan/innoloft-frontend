import React from "react";

interface HorizontalContainerProps {
  children: React.ReactNode;
  bgColor?: string;
}

const HorizontalContainer: React.FC<HorizontalContainerProps> = ({
  children,
  bgColor = "#F9FAFB",
}) => {
  return (
    <div
      className="w-full"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-[1440px] mx-auto">{children}</div>
    </div>
  );
};

export default HorizontalContainer;
