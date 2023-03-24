import React, { ReactNode } from "react";
import RightIcon from "./Icons/RightIcon";

interface BreadCrumbsProps {
  icon: ReactNode;
  path: Array<string>;
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ icon, path }) => {
  return (
    <div className="w-full h-[24px] flex items-center">
      {icon}
      {path.map((p, index) => (
        <div
          key={index}
          className="flex items-center ml-3 text-color2"
        >
          <RightIcon />
          {index === path.length - 1 && (
            <div className="ml-3 font-semibold">{p}</div>
          )}
          {index !== path.length - 1 && <div className="ml-3">{p}</div>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
