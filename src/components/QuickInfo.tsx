import { githubIcon, linkedinIcon, vscoIcon } from "../images";
import { StyledDiv } from "./common/StyledDiv";
import { StyledText } from "./common/StyledText";
import { Nav } from "./Nav";

type QuickInfoProps = {
  currentDiv: "about" | "experience" | "projects";
};

export const QuickInfo = ({ currentDiv }: QuickInfoProps) => {
  // const [active, setActive] = useState<"about" | "experience" | "projects">(
  //   "about"
  // );

  return (
    <StyledDiv
      height="75vh"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <StyledDiv display="flex" flexDirection="column" width="70%">
        <StyledText variant="title" color="white">
          Lily Gostovic
        </StyledText>
        <StyledText variant="header" mt="10px">
          CS @ McGill — May 2024
        </StyledText>
        <StyledText variant="subtitle" mt="30px" mb="50px">
          Junior developer with experience in web and app development seeking
          full-time new grad opportunities.
        </StyledText>
        {/* <Nav active={active} setActive={setActive} /> */}
        <Nav currentDiv={currentDiv} />
      </StyledDiv>
      <Socials />
    </StyledDiv>
  );
};

const Socials = () => (
  <StyledDiv width="25%" display="flex" justifyContent="space-between">
    <a href="https://github.com/lilygostovic" rel="noreferrer" target="_blank">
      <img src={githubIcon} alt="link to linkedin profile" height="30px" />
    </a>
    <a
      href="https://www.linkedin.com/in/lily-gostovic/"
      rel="noreferrer"
      target="_blank"
    >
      <img src={linkedinIcon} alt="link to linkedin profile" height="30px" />
    </a>
    <a
      href="https://vsco.co/lilygostovic/journal/p/1"
      rel="noreferrer"
      target="_blank"
    >
      <img src={vscoIcon} alt="link to linkedin profile" height="30px" />
    </a>
  </StyledDiv>
);
