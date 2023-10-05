import { StyledDiv } from "./StyledDiv";
import { StyledText } from "./StyledText";

export const QuickInfo = () => (
  <StyledDiv display="flex" flexDirection="column" width="70%">
    <StyledText variant="title" color="white">
      Lily Gostovic
    </StyledText>
    <StyledText variant="header" mt="10px">
      CS @ McGill. May 2024.
    </StyledText>
    <StyledText variant="subtitle" mt="30px" mb="50px">
      Junior developer with experience in web and app development seeking
      full-time new grad opportunities.
    </StyledText>
  </StyledDiv>
);
