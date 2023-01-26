import './App.css';

import React from 'react';

function App() {
  return (
      <div className="App-body">
        <header className='App-header'>
            Lily Gostovic
        </header>
        <div className='App-subsection'>
          <p className="App-subsectionHeader">Experience</p>
          <div className='App-infoBlock'>
            <p className='App-blockHeader'>Software Engineer Intern - <a className='App-blockHeaderLink' href="https://www.forget.finance/en" target="_blank" rel="noreferrer">Forget Finance</a></p>
            <p className='App-blockSubheader'>Berlin, Germany. May 2022 - January 2023.</p>
            <p className='App-bulletpoint'>• Maintained overall client and server side systems and fixed defects for a finance mobile application</p>
            <p className='App-bulletpoint'>• Developed a reusable story component to seamlessly introduce users to new sections of the app</p>
            <p className='App-bulletpoint'>• Implemented an Error Boundary to provide users with feedback instead of crashing app</p>
            <p className='App-bulletpoint'>• Refactored a deprecated open-source library. Added typing for integration with TypeScript. Updated use of React Native Reanimated to be compatible with current version.</p>
            <p className='App-blockSkills'>TypeScript, React Native, PostgreSQL, Postico, Git, Jira, Notion, Figma</p>
          </div>
          <div className='App-infoBlock'>
            <p className='App-blockHeader'>Web Developer - <a className='App-blockHeaderLink' href="https://mcgill.hack4impact.org" target="_blank" rel="noreferrer">Hack4Impact McGill</a></p>
            <p className='App-blockSubheader'>Montreal, Canada. September 2022 - Present.</p>
            <p className='App-bulletpoint'>• Helped to develop web application to assist non-profit coordinate with volunteers to deliver meals to the elderly in the community</p>
            <p className='App-bulletpoint'>• Defined PostgreSQL table schema using TypeORM</p>
            <p className='App-bulletpoint'>• Implemented and tested REST API endpoints using Express.js and Jest</p>
            <p className='App-blockSkills'>TypeScript, React, TypeORM, Jest, Docker, Git, Figma</p>
          </div>
          <div className='App-infoBlock'>
            <p className='App-blockHeader'>Research Assistant - <a className='App-blockHeaderLink' href="https://www.rubenson.org/research-group" target="_blank" rel="noreferrer">Ryerson University</a></p>
            <p className='App-blockSubheader'>Toronto, Canada. March 2021 - August 2021.</p>
            <p className='App-bulletpoint'>• Developed a Python script to scrape data from a website and consolidate to csv to assist research team in data collection</p>
            <p className='App-bulletpoint'>• Designed utility methods for analyzing data to make data analysis simpler and more efficient</p>
            <p className='App-blockSkills'>Python</p>
          </div>
        </div>
        <div className='App-subsection'>
          <p className="App-subsectionHeader">Projects</p>
          <div className='App-infoBlock'>
            <p className='App-blockHeader'><a className='App-blockHeaderLink' href="https://github.com/lilygostovic/class-enroller" target="_blank" rel="noreferrer">Class Enrollment Utility</a></p>
            <p className='App-bulletpoint'>Motivation: Develop a script that runs continuously to enrol in McGill classes to secure a seat in popular classes immediately once one is available.</p>
            <p className='App-bulletpoint'>Execution: Implemented a Python script using a Selenium Chrome Driver to enrol McGill students into classes which runs every minute from a crontab bash script.</p>
            <p className='App-blockSkills'>Python, Selenium Chrome Driver</p>
          </div>
          <div className='App-infoBlock'>
            <p className='App-blockHeader'><a className='App-blockHeaderLink' href="https://github.com/lilygostovic/lg-portfolio" target="_blank" rel="noreferrer">Personal Website</a></p>
            <p className='App-bulletpoint'>Motivation: Develop a publicly available website that showcases who I am as a dev, and beyond.</p>
            <p className='App-bulletpoint'>Execution: Self-taught React, HTML, CSS, and TypeScript to create a web app displaying information about myself and pointing the user to places they can learn more about my work and myself.</p>
            <p className='App-blockSkills'>TypeScript, React, HTML, CSS</p>
          </div>
        </div>
        <footer className="App-footer">
          {/* put links here */}
        </footer>
      </div>
  );
}

export default App;
