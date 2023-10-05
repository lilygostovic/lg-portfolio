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
    <div style={{ display: "flex", marginBottom: "60px" }}>
      <div style={{ width: "100px", paddingRight: "30px" }}>
        <StyledText variant="labelSmall">{dates}</StyledText>
      </div>
      <div style={{ width: "500px", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "20px",
          }}
        >
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
        </div>
        <StyledText variant="paragraphSmall">{body}</StyledText>
        <div style={{ marginTop: "30px" }}>
          <StyledText variant="paragraphSmallItalics">{skills}</StyledText>
        </div>
      </div>
    </div>
  );
};
