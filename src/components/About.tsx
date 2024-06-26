import { StyledText } from "./common/StyledText";

export const About = () => (
  <div id="about" style={{ color: "lightgrey", paddingTop: "100px" }}>
    <StyledText variant="paragraphMedium">Hi! I'm Lily</StyledText>
    <StyledText variant="paragraphSmall">
      , a recent graduate of Computer Science from McGill University with
      expertise in web and app development and growing experience in machine
      learning. I love learning and solving puzzles and am always looking for a
      challenge.
    </StyledText>
    <div style={{ margin: "20px 0px" }} />
    <StyledText variant="paragraphSmall">
      Recently, I've been interested in exploring different ways I can utilize
      APIs to automate my daily life. Check out my current projects{" "}
    </StyledText>
    <a
      href="https://github.com/lilygostovic/music-sport-performance"
      rel="noreferrer"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <StyledText variant="paragraphSmallBoldWhite">
        Music Sport Performance
      </StyledText>
    </a>
    <StyledText variant="paragraphSmall"> and </StyledText>
    <a
      href="https://github.com/lilygostovic/zacks-picks"
      rel="noreferrer"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <StyledText variant="paragraphSmallBoldWhite">Zacks Picks</StyledText>
    </a>
    <StyledText variant="paragraphSmall"> to see how I'm doing so.</StyledText>
    <div style={{ margin: "20px 0px" }} />
    <StyledText variant="paragraphSmall">
      I love running, hiking, alpine and nordic skiing. Really anything that
      gets me outside and moving. If you ever need a buddy to take out of the
      city, you can always count me in!
    </StyledText>
    <div style={{ margin: "150px 0px" }} />
  </div>
);
