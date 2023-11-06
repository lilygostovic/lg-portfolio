import { InformationBlock } from './InformationBlock';

export const Experience = () => (
  <div id="experience">
    <InformationBlock
      dates="May 2022 - Jan 2023"
      jobTitles={["Software Engineer", "Software Engineer Intern"]}
      company="Forget Finance"
      location="Berlin, Germany"
      link="https://www.forget.finance/en"
      body="Maintained overall client and server side systems and fixed defects for a finance mobile application. Implemented an Error Boundary to provide users with feedback instead of crashing app. Refactored a deprecated open-source library by adding typing for integration with TypeScript."
      skills={[
        "TypeScript",
        "React Native",
        "PostgreSQL",
        "Postico",
        "Git",
        "Jira",
        "Notion",
        "Figma",
      ]}
    />
    <InformationBlock
      jobTitles={["Web Developer"]}
      company="Hack4Impact McGill"
      location="Montreal, Canada."
      dates="Sep 2022 - Present"
      link="https://mcgill.hack4impact.org"
      body={
        "Helped to develop a web application to assist a non-profit coordinate with volunteers to deliver meals to the elderly in the community. Defined PostgreSQL table schema using TypeORM. Implemented and tested REST API endpoints using Express.js and Jest."
      }
      skills={[
        "TypeScript",
        "React",
        "TypeORM",
        "Jest",
        "Docker",
        "Git",
        "Figma",
      ]}
    />

    {/* todo:: add link (https://github.com/lilygostovic/dass-frontend) to "the project" in description */}
    <InformationBlock
      jobTitles={["Front End Lead"]}
      company="NordASIL"
      location="Copenhagen, Denmark"
      dates="Feb - June 2023"
      link="https://asylumdata.ku.dk/research/nordic-refugee-determination"
      body={
        "Led a front-end team in developing a dashboard which visualizes data scraped from the Danish Asylum Seeker online records. Chose the front-end tech stack, set up the project, implemented good coding practices such as code review and code formatting."
      }
      skills={["TypeScript", "React", "GitHub", "Python", "Django"]}
    />
    <InformationBlock
      jobTitles={["Research Assistant"]}
      company="Toronto Metropolitan University"
      location="Toronto, Canada"
      dates="Mar - Aug 2021"
      link="https://www.rubenson.org/research-group"
      body={
        "Developed a Python script to scrape data from a soccer statistics website and consolidate the data to a csv file to assist the research team in data collection. Defined utility methods to simplify and optimize data analysis."
      }
      skills={["Python", "BeautifulSoup4"]}
      last={true}
    />
  </div>
);
