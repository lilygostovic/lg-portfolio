import { ProjectBlock } from "./ProjectBlock";

export const Projects = () => (
  <div id="projects">
    <ProjectBlock
      title="Class Enrollment Utility"
      link="https://github.com/lilygostovic/class-enroller"
      body="A script that runs continuously to enrol students in McGill classes to secure a seat in popular classes immediately once one is available. Implemented a Python script using a Selenium Chrome Driver to enrol McGill students into classes which runs every minute from a crontab bash script."
      skills={["Python", "Selenium Chrome Driver"]}
    />
    <ProjectBlock
      title="Personal Website"
      link="https://github.com/lilygostovic/lg-portfolio"
      body="A publicly available website that showcases who I am as a dev, and beyond. Used React and TypeScript to create a web app displaying information about myself and pointing the user to places they can learn more about my work and myself. Deployed using render.com."
      skills={["TypeScript", "React", "HTML", "CSS"]}
      last={true}
    />
  </div>
);
