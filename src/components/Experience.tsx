import { InformationBlock } from "./InformationBlock";

export const Experience = () => (
  <div>
    <InformationBlock
      dates="May 2022 - Jan 2023"
      jobTitles={[
        "Software Engineering Working Student",
        "Software Engineer Intern",
      ]}
      company="Forget Finance"
      location="Berlin, Germany"
      link="https://www.forget.finance/en"
      body="Maintained overall client and server side systems and fixed defects for a finance mobile application. Developed a reusable story component to seamlessly introduce users to new sections of the app. Implemented an Error Boundary to provide users with feedback instead of crashing app. Refactored a deprecated open-source library. Added typing for integration with TypeScript. Updated use of React Native Reanimated to be compatible with current version."
      skills="TypeScript, React Native, PostgreSQL, Postico, Git, Jira, Notion, Figma"
    />
    <InformationBlock
      jobTitles={["Web Developer"]}
      company="Hack4Impact McGill"
      location="Montreal, Canada."
      dates="Sep 2022 - Present"
      link="https://mcgill.hack4impact.org"
      body={
        "Helped to develop web application to assist non-profit coordinate with volunteers to deliver meals to the elderly in the community. Defined PostgreSQL table schema using TypeORM. Implemented and tested REST API endpoints using Express.js and Jest"
      }
      skills="TypeScript, React, TypeORM, Jest, Docker, Git, Figma"
    />
    <InformationBlock
      jobTitles={["Front End Lead"]}
      company="SWE and Architecture Group Project"
      location="Copenhagen, Denmark"
      dates="Feb - June 2023"
      link="https://github.com/lilygostovic/dass-frontend"
      body={
        "Worked with five MSc. Computer Science students to develop a website that displays an overview of danish asylum seeker data scraped from the Danish Refugee Appeals board website (https://fln.dk/da/Praksis). Set up the frontend project and enforced good coding practices such as a code review process, linting, and automatic code formatting. Provided support to group mates working on frontend tasks"
      }
      skills="TypeScript, React, GitHub, Python, Django."
    />
    <InformationBlock
      jobTitles={["Research Assistant"]}
      company="Toronto Metropolitan University"
      location="Toronto, Canada"
      dates="Mar - Aug 2021"
      link="https://www.rubenson.org/research-group"
      body={
        "Developed a Python script to scrape data from a website and consolidate to csv to assist research team in data collection. Designed utility methods for analyzing data to make data analysis simpler and more efficient"
      }
      skills="Python"
    />
  </div>
);
