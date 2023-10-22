import { ProjectBlock } from './ProjectBlock';

export const Projects = () => (
  <div id="projects">
    <ProjectBlock
      title="Zacks Picks: From Apple Music to Spotify"
      link="https://github.com/lilygostovic/zacks-picks"
      body="Python scripts to scrape data from a friends Apple Music playlist and transfer to a Spotify playlist weekly."
      skills={["Python", "Beautiful Soup 4", "Spotify API"]}
      inProgress={true}
    />
    <ProjectBlock
      title="Music Sport Performance"
      link="https://github.com/lilygostovic/music-sport-performance"
      body="Web app that provides runners with a way to analyze their running performance in relation to the music they listen to while running. Computes metrics of the music listened to while running such as: average beats per minute, most popular genres, average song length, percentage of explicit songs. Runners can use this data to see trends in the music that makes them run their best!"
      skills={["React", "TypeScript", "Strava API", "Spotify API"]}
      inProgress={true}
    />
    <ProjectBlock
      title="Photography Portfolio Website"
      link="https://photography.lilygostovic.com"
      body="Website which showcases my photography work. Divided into different journals, you can check out all the different places I've travelled through the lens of my various cameras."
      skills={["TypeScript", "React", "HTML", "CSS"]}
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
