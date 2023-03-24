import React, { ReactNode } from "react";

interface DetailWithLabelEditProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

const DetailWithLabelEdit: React.FC<DetailWithLabelEditProps> = ({
  icon,
  title,
  children,
}) => {
  return (
    <div className="flex-1 mb-5">
      <div className="flex mb-2.5">
        {icon}&nbsp;{title}
      </div>
      <div className="flex">{children}</div>
    </div>
  );
};

export default DetailWithLabelEdit;
