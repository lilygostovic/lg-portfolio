import { StyledText } from "./common/StyledText";

export const Footer = () => (
  <div style={{ margin: "0px 0px 100px 0px" }}>
    <StyledText variant="labelTiny">
      Coded in Visual Studio Code by myself. Built with TypeScript and React,
      deployed with render.com. Design inspired by{" "}
    </StyledText>
    <a
      href="https://brittanychiang.com"
      rel="noreferrer"
      target="_blank"
      style={{ textDecoration: "none" }}
    >
      <StyledText variant="labelTinyLightGrey">brittanychiang.com</StyledText>
    </a>
  </div>
);
