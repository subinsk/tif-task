import React, { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
  // width?: number;
}

const containerStyle = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

export const CarouselItem: FC<Props> = ({ children }) => {
  return (
    <div
      style={containerStyle}
      // style={{ width: width }}
    >
      {children}
    </div>
  );
};
