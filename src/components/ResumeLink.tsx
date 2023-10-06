import { useState } from "react";

import { StyledText } from "./StyledText";

// import resume from "../documents/"

export const ResumeLink = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a href="./../documents/lg-resume.pdf" style={{ textDecoration: "none" }}>
      <div
        style={{
          color: isHovered ? "#ffe553" : "white",
          transition: "color 0.2s",
          marginBottom: "50px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <StyledText variant="paragraphSmallBold">View Full CV</StyledText>
      </div>
    </a>
  );
};
