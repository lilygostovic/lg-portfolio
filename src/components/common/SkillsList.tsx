import { StyledText } from './StyledText';

type SkillsProps = {
  skills: Array<string>;
};

export const SkillsList = ({ skills }: SkillsProps) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "10px" }}>
      {skills.map((skill) => (
        <div
          key={skill}
          style={{
            backgroundColor: "#544e2d50",
            padding: "0px 10px 0px 10px",
            margin: "4px",
            borderRadius: "16px",
          }}
        >
          <StyledText variant="labelTinyHighlight">{skill}</StyledText>
        </div>
      ))}
    </div>
  );
};
