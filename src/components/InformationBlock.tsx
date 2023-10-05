import { StyledDiv } from "./StyledDiv";
import { StyledText } from "./StyledText";

type InformationBlockProps = {
  dates: string;
  jobTitles: Array<string>;
  company: string;
  location: string;
  link: string;
  body: string;
  skills: string;
};

export const InformationBlock = ({
  dates,
  jobTitles,
  company,
  location,
  link,
  body,
  skills,
  ...props
}: InformationBlockProps) => {
  return (
    <StyledDiv display="flex" mb="60px">
      <StyledDiv>
        <StyledText variant="labelSmall">{dates}</StyledText>
      </StyledDiv>
      <StyledDiv width="30px" />
      <StyledDiv width="500px" display="flex" flexDirection="column">
        <StyledDiv display="flex" flexDirection="column" mb="20px">
          <StyledText variant="paragraphSmallBold">
            {jobTitles[0]} · {company}
          </StyledText>
          {jobTitles.map((jobTitle) =>
            jobTitle !== jobTitles[0] ? (
              <StyledText variant="paragraphSmallBold">{jobTitle}</StyledText>
            ) : (
              <></>
            )
          )}
        </StyledDiv>
        <StyledText variant="paragraphSmall">{body}</StyledText>
        <StyledDiv mt="30px">
          <StyledText variant="paragraphSmallItalics">{skills}</StyledText>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
    // <StyledDiv p="12px" mb="30px" borderRadius="8px" {...props}>
    //   <StyledText variant="header">{header}</StyledText>
    //   {/* <p className="App-blockHeader">
    //     <a
    //       className="App-blockHeaderLink"
    //       href={link}
    //       target="_blank"
    //       rel="noreferrer"
    //     ></a>
    //   </p> */}
    //   <p className="App-blockSubheader">{subheader}</p>
    //   {bulletpoints.map((bulletpoint) => (
    //     <p className="App-bulletpoint">{bulletpoint}</p>
    //   ))}
    //   <p className="App-blockSkills">{skills}</p>
    // </StyledDiv>
  );
};
