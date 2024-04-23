import { StyledDiv } from './common/StyledDiv';
import { StyledText } from './common/StyledText';
import { Nav } from './Nav';

type QuickInfoProps = {
  currentDiv: "about" | "experience" | "projects";
};

export const QuickInfo = ({ currentDiv }: QuickInfoProps) => (
  <StyledDiv display="flex" flexDirection="column">
    <StyledText variant="title" color="white">
      Lily Gostovic
    </StyledText>
    <StyledText variant="header" mt="10px">
      CS @ McGill — May 2024
    </StyledText>
    <StyledText variant="subtitle" mt="30px" mb="50px">
      Junior developer with experience in web and app development and an
      interest in sport technologies.
    </StyledText>
    <Nav currentDiv={currentDiv} />
  </StyledDiv>
);
