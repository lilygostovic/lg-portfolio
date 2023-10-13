import { useState } from "react";

import { HoverableDiv, SkillsList } from "../common";
import { StyledDiv } from "../common/StyledDiv";
import { StyledText } from "../common/StyledText";

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
    <HoverableDiv link={link} last={last} onHoverChange={setIsHovered}>
      <StyledDiv width="160px" pr="30px">
        <StyledText variant="labelTiny">{formattedDates}</StyledText>
      </StyledDiv>
      <StyledDiv width="500px" display="flex" flexDirection="column">
        <StyledDiv
          display="flex"
          flexDirection="column"
          margin="0px 0px 10px 0px"
        >
          <StyledDiv
            color={isHovered ? "#ffe553" : "white"}
            style={{ transition: "color 0.2s" }}
          >
            <StyledText variant="paragraphSmallBold">
              {jobTitles[0]} · {company}
            </StyledText>
          </StyledDiv>
          {jobTitles.map((jobTitle) =>
            jobTitle !== jobTitles[0] ? (
              <StyledText key={jobTitle} variant="paragraphSmallBoldGrey">
                {jobTitle}
              </StyledText>
            ) : (
              <></>
            )
          )}
        </StyledDiv>
        <StyledDiv color="lightgrey">
          <StyledText variant="paragraphTiny">{body}</StyledText>
          <SkillsList skills={skills} />
        </StyledDiv>
      </StyledDiv>
    </HoverableDiv>
  );
};
