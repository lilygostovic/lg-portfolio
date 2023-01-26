import './App.css';

import React from 'react';

import { InformationBlock } from './components';

function App() {
  return (
    <div className="App-body">
      <header className="App-header">Lily Gostovic</header>
      <div className="App-subsection">
        <p className="App-subsectionHeader">Experience</p>
        <InformationBlock
          header="Software Engineer Intern - Forget Finance"
          subheader="Berlin, Germany. May 2022 - January 2023."
          link="https://www.forget.finance/en"
          bulletpoints={[
            "• Maintained overall client and server side systems and fixed defects for a finance mobile application",
            "• Developed a reusable story component to seamlessly introduce users to new sections of the app",
            "• Implemented an Error Boundary to provide users with feedback instead of crashing app",
            "• Refactored a deprecated open-source library. Added typing for integration with TypeScript. Updated use of React Native Reanimated to be compatible with current version.",
          ]}
          skills="TypeScript, React Native, PostgreSQL, Postico, Git, Jira, Notion, Figma"
        />
        <InformationBlock
          header="Web Developer - Hack4Impact McGill"
          subheader="Montreal, Canada. September 2022 - Present."
          link="https://mcgill.hack4impact.org"
          bulletpoints={[
            "• Helped to develop web application to assist non-profit coordinate with volunteers to deliver meals to the elderly in the community",
            "• Defined PostgreSQL table schema using TypeORM",
            "• Implemented and tested REST API endpoints using Express.js and Jest",
          ]}
          skills="TypeScript, React, TypeORM, Jest, Docker, Git, Figma"
        />
        <InformationBlock
          header="Research Assistant - Ryerson University"
          subheader="Toronto, Canada. March 2021 - August 2021."
          link="https://www.rubenson.org/research-group"
          bulletpoints={[
            "• Developed a Python script to scrape data from a website and consolidate to csv to assist research team in data collection",
            "• Designed utility methods for analyzing data to make data analysis simpler and more efficient",
          ]}
          skills="Python"
        />
      </div>
      <div className="App-subsection">
        <p className="App-subsectionHeader">Projects</p>
        <InformationBlock
          header="Class Enrollment Utility"
          link="https://github.com/lilygostovic/class-enroller"
          bulletpoints={[
            "Motivation: Develop a script that runs continuously to enrol in McGill classes to secure a seat in popular classes immediately once one is available.",
            "Execution: Implemented a Python script using a Selenium Chrome Driver to enrol McGill students into classes which runs every minute from a crontab bash script."]}
          skills="Python, Selenium Chrome Driver"
        />
        <InformationBlock
          header="Personal Website"
          link="https://github.com/lilygostovic/lg-portfolio"
          bulletpoints={["Motivation: Develop a publicly available website that showcases who I am as a dev, and beyond.", "Execution: Self-taught React, HTML, CSS, and TypeScript to create a web app displaying information about myself and pointing the user to places they can learn more about my work and myself."]}
          skills="TypeScript, React, HTML, CSS"
        />
      </div>
      <footer className="App-footer">{/* put links here */}</footer>
    </div>
  );
}

export default App;
