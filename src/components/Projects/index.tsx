import { ProjectBlock } from "./ProjectBlock";

export const Projects = () => (
  <div id="projects">
    <ProjectBlock
      title="Class Enrollment Utility"
      link="https://github.com/lilygostovic/class-enroller"
      body="Motivation: Develop a script that runs continuously to enrol in McGill classes to secure a seat in popular classes immediately once one is available. Execution: Implemented a Python script using a Selenium Chrome Driver to enrol McGill students into classes which runs every minute from a crontab bash script."
      skills={["Python", "Selenium Chrome Driver"]}
    />
    <ProjectBlock
      title="Personal Website"
      link="https://github.com/lilygostovic/lg-portfolio"
      body="Motivation: Develop a publicly available website that showcases who I am as a dev, and beyond. Execution: Self-taught React, HTML, CSS, and TypeScript to create a web app displaying information about myself and pointing the user to places they can learn more about my work and myself."
      skills={["TypeScript", "React", "HTML", "CSS"]}
      last={true}
    />
  </div>
);
