import { StyledDiv, StyledText } from "./common";

type HorizontalLineProps = {
  color: string;
  width: string;
};

const HorizontalLine = ({ color, width }: HorizontalLineProps) => (
  <StyledDiv width={width} height="1px" bg={color} mr="5px" />
);

type NavItemProps = {
  text: string;
  link: string;
  isActive: boolean;
  onClick: () => void;
};

const NavItem = ({ text, link, isActive, onClick }: NavItemProps) => (
  <a href={link} onClick={onClick} style={{ textDecoration: "none" }}>
    <StyledDiv display="flex" flexDirection="row" alignItems="center">
      <HorizontalLine
        width={isActive ? "60px" : "30px"}
        color={isActive ? "lightgrey" : "darkgrey"}
      />
      <StyledText variant={isActive ? "labelTinyBoldWhite" : "labelTinyBold"}>
        {text}
      </StyledText>
    </StyledDiv>
  </a>
);

type NavProps = {
  currentDiv: "about" | "experience" | "projects";
  // setActive: (active: "about" | "experience" | "projects") => void;
};
// type NavProps = {
//   active: "about" | "experience" | "projects";
//   setActive: (active: "about" | "experience" | "projects") => void;
// };

// export const Nav = ({ active, setActive }: NavProps) => {
export const Nav = ({ currentDiv }: NavProps) => {
  // const handleClickAbout = () => setActive("about");
  // const handleClickExperience = () => setActive("experience");
  // const handleClickProjects = () => setActive("projects");

  return (
    <StyledDiv
      mt="30px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100px"
    >
      <NavItem
        text="ABOUT"
        link="#about"
        isActive={currentDiv === "about"}
        // onClick={(handleClickAbout)}
        onClick={() => {}}
      />
      <NavItem
        text="EXPERIENCE"
        link="#experience"
        isActive={currentDiv === "experience"}
        // onClick={handleClickExperience}
        onClick={() => {}}
      />
      <NavItem
        text="PROJECTS"
        link="#projects"
        isActive={currentDiv === "projects"}
        // onClick={handleClickProjects}
        onClick={() => {}}
      />
    </StyledDiv>
  );
};
