import { useState } from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { StyledText } from "./common/StyledText";

type SectionBottomLinkProps = {
  title: string;
  link: string;
};

export const SectionBottomLink = ({ title, link }: SectionBottomLinkProps) => {
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
          color: "white",
          textDecoration: isHovered ? "underline" : "none",
          transition: "text-decoration 0.2s",
          margin: "0px 0px 100px 0px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <StyledText
          variant="paragraphSmallBold"
          style={{
            marginRight: isHovered ? "17px" : "10px",
            transition: "margin-right 0.2s",
          }}
        >
          {title}
        </StyledText>
        <FontAwesomeIcon icon={faArrowRight} size="xs" />
      </div>
    </a>
  );
};
