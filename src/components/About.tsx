import { StyledText } from "./common/StyledText";

export const About = () => (
  <div id="about" style={{ color: "lightgrey", paddingTop: "100px" }}>
    <StyledText variant="paragraphMedium">Hi! I'm Lily</StyledText>
    <StyledText variant="paragraphSmall">
      , a fourth year CS and Linguistics student with expertise in web and app
      dev and growing experience in machine learning. I love learning and
      solving puzzles and am always looking for a challenge.
    </StyledText>
    <div style={{ margin: "20px 0px" }} />
    <StyledText variant="paragraphSmall">
      Recently, I've been interested in exploring different ways I can utilize
      APIs to automate my daily life. Check out my recent project{" "}
    </StyledText>
    {/* TODO:: add link to zacks picks repo */}
    <StyledText variant="paragraphSmallBoldWhite">Zacks Picks</StyledText>
    <StyledText variant="paragraphSmall"> to see how I've done so.</StyledText>
    <div style={{ margin: "20px 0px" }} />
    <StyledText variant="paragraphSmall">
      I love running, hiking, alpine and nordic skiing. Really anything that
      gets me outside and moving. If you ever need a buddy to take out of the
      city, you can always count me in!
    </StyledText>
    <div style={{ margin: "150px 0px" }} />
  </div>
);
