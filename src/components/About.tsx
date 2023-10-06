import { StyledText } from "./StyledText";

export const About = () => (
  <div style={{ color: "lightgrey" }}>
    <StyledText variant="paragraphMedium">Hi! I'm Lily</StyledText>
    <StyledText variant="paragraphSmall">
      , a fourth year CS and Linguistics student with expertise in web and app
      dev and growing experience in machine learning. I love learning and
      solving puzzles and am always looking for a challenge.
    </StyledText>
    <div style={{ marginBottom: "20px" }} />
    <StyledText variant="paragraphSmall">
      Recently, I've been interested in exploring different ways I can utilize
      APIs to automate my daily life. Check out my recent project{" "}
    </StyledText>
    {/* TODO:: add link to zacks picks repo */}
    <StyledText variant="paragraphSmallBoldWhite">Zacks Picks</StyledText>
    <StyledText variant="paragraphSmall"> to see how I've done so.</StyledText>
    <div style={{ marginBottom: "20px" }} />
    <StyledText variant="paragraphSmall">
      I love running, hiking, alpine and nordic skiing. Really anything that
      gets me outside and moving. If you ever need a buddy to take out of the
      city, you can always count me in!
    </StyledText>
    <div style={{ marginBottom: "150px" }} />
  </div>
);
