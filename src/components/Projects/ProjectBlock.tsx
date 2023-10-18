import { useState } from 'react';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  HoverableDiv,
  SkillsList,
} from '../common';
import { StyledDiv } from '../common/StyledDiv';
import { StyledText } from '../common/StyledText';

type ProjectBlockProps = {
  title: string;
  link: string;
  body: string;
  skills: Array<string>;
  inProgress?: boolean;
  last?: boolean;
};

export const ProjectBlock = ({
  title,
  link,
  body,
  skills,
  inProgress = false,
  last = false,
}: ProjectBlockProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <HoverableDiv link={link} last={last} onHoverChange={setIsHovered}>
      <StyledDiv width="500px" display="flex" flexDirection="column">
        <StyledDiv
          color={isHovered ? "#ffe553" : "white"}
          mb="10px"
          style={{ transition: "color 0.2s" }}
        >
          <StyledText
            variant="paragraphSmallBold"
            style={{ marginRight: "10px" }}
          >
            {title}
          </StyledText>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size={isHovered ? "xs" : "2xs"}
          />
          {inProgress && (
            <StyledText variant="labelTinyRed" style={{marginLeft: "10px"}}>IN PROGRESS...</StyledText>
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
