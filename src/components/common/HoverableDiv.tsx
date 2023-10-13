import { useState } from "react";

type HoverableDivProps = {
  link: string;
  last: boolean;
  onHoverChange: (newVal: boolean) => void;
  children: React.ReactNode;
};

export const HoverableDiv = ({
  link,
  last,
  onHoverChange,
  children,
}: HoverableDivProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <div
        style={{
          display: "flex",
          padding: "20px",
          margin: last ? "0px 0px 20px 0px" : "0px 0px 60px 0px",
          borderRadius: "8px",

          backgroundColor: isHovered ? "#8f8f8f16" : "transparent",
          transition: "background-color 0.2s",

          color: "white",
        }}
        onMouseEnter={() => {
          setIsHovered(true);
          onHoverChange(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          onHoverChange(false);
        }}
      >
        {children}
      </div>
    </a>
  );
};
