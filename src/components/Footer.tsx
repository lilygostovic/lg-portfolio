import { StyledText } from "./StyledText";

export const Footer = () => (
  <div style={{ marginBottom: "100px" }}>
    {/* TODO:: update where i deployed it from */}
    <StyledText variant="labelTiny">
      Coded in Visual Studio Code by myself. Built with TypeScript and React,
      deployed with AWS. Design inspired by{" "}
    </StyledText>
    <a href="https://brittanychiang.com" rel="noreferrer" target="_blank">
      <StyledText variant="labelTinyWhite">brittanychiang.com</StyledText>
    </a>
  </div>
);
