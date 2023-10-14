import { ProjectBlock } from "./ProjectBlock";

export const Projects = () => (
  <div id="projects">
    <ProjectBlock
      title="Apple Music to Spotify"
      link="https://github.com/lilygostovic/zacks-picks"
      body="Python scripts to scrape data from a friends Apple Music playlist and transfer to a Spotify playlist weekly."
      skills={["Python", "Beautiful Soup 4"]}
    />
    <ProjectBlock
      title="Personal Website"
      link="https://github.com/lilygostovic/lg-portfolio"
      body="A publicly available website that showcases who I am as a dev, and beyond. Used React and TypeScript to create a web app displaying information about myself and pointing the user to places they can learn more about my work and myself. Deployed using render.com."
      skills={["TypeScript", "React", "HTML", "CSS"]}
    />
    <ProjectBlock
      title="Class Enrollment Utility"
      link="https://github.com/lilygostovic/class-enroller"
      body="A script that runs continuously to enrol students in McGill classes to secure a seat in popular classes immediately once one is available. Implemented a Python script using a Selenium Chrome Driver to enrol McGill students into classes which runs every minute from a crontab bash script."
      skills={["Python", "Selenium Chrome Driver"]}
    />
    <ProjectBlock
      title="Blog"
      link="https://github.com/lilygostovic/blog"
      body="Personal blog website created to practice using Javascript and to learn more about React. Self-taught React and Javascript while developing."
      skills={["JavaScript", "React", "HTML", "CSS"]}
      last={true}
    />
  </div>
);
