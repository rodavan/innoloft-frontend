import React, { ReactNode } from "react";

interface DetailWithLabelProps {
  icon: ReactNode;
  title: string;
  label: Array<string>;
}

const DetailWithLabel: React.FC<DetailWithLabelProps> = ({
  icon,
  title,
  label,
}) => {
  return (
    <div className="flex-1 mb-5">
      <div className="flex mb-2.5">
        {icon}&nbsp;{title}
      </div>
      <div className="flex">
        {label.map((item, index) => (
          <div
            key={index}
            className="px-[14px] py-[5px] rounded-[20px] bg-[#E5E7EB] text-color2 mr-[5px]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailWithLabel;
