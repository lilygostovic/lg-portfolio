import { useState } from "react";

import { StyledText } from "./StyledText";

type InformationBlockProps = {
  dates: string;
  jobTitles: Array<string>;
  company: string;
  location: string;
  link: string;
  body: string;
  skills: Array<string>;
  last?: boolean;
};

export const InformationBlock = ({
  dates,
  jobTitles,
  company,
  location,
  link,
  body,
  skills,
  last = false,
  ...props
}: InformationBlockProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const formattedDates = dates.toUpperCase();

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
          marginBottom: last ? "20px" : "60px",
          borderRadius: "8px",

          backgroundColor: isHovered ? "#8f8f8f16" : "transparent",
          transition: "background-color 0.2s",

          color: "white",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ width: "160px", paddingRight: "30px" }}>
          <StyledText variant="labelTiny">{formattedDates}</StyledText>
        </div>
        <div
          style={{ width: "500px", display: "flex", flexDirection: "column" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                color: isHovered ? "#ffe553" : "white",
                transition: "color 0.2s",
              }}
            >
              <StyledText variant="paragraphSmallBold">
                {jobTitles[0]} · {company}
              </StyledText>
            </div>
            {jobTitles.map((jobTitle) =>
              jobTitle !== jobTitles[0] ? (
                <StyledText variant="paragraphSmallBoldGrey">
                  {jobTitle}
                </StyledText>
              ) : (
                <></>
              )
            )}
          </div>
          <div style={{ color: "lightgrey" }}>
            <StyledText variant="paragraphTiny">{body}</StyledText>
            <Skills skills={skills} />
          </div>
        </div>
      </div>
    </a>
  );
};

type SkillsProps = {
  skills: Array<string>;
};

const Skills = ({ skills }: SkillsProps) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
      {skills.map((skill) => (
        <div
          style={{
            backgroundColor: "#544e2d50",
            padding: "0px 10px 0px 10px",
            margin: "4px",
            borderRadius: "16px",
          }}
        >
          <StyledText variant="labelTinyHighlight">{skill}</StyledText>
        </div>
      ))}
    </div>
  );
};
