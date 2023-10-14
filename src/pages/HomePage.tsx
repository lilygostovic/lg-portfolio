import { useState } from 'react';

import {
  About,
  Experience,
  Footer,
  Projects,
  QuickInfo,
  SectionBottomLink,
  Socials,
  StyledDiv,
} from '../components';
import resume from '../documents/resume.pdf';

export const HomePage = () => {
  const [isSmallWindow, setIsSmallWindow] = useState(window.innerWidth < 900);
  const checkIsSmallWindow = () => {
    setIsSmallWindow(window.innerWidth < 900);
  };
  window.onresize = checkIsSmallWindow;

  const [currentDiv, setCurrentDiv] = useState<
    "about" | "experience" | "projects"
  >("about");

  const isElementInViewport = (el: HTMLElement | null) => {
    if (el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
  };

  window.addEventListener("scroll", () => {
    const aboutDiv = document.getElementById("about");
    const experienceDiv = document.getElementById("experience");
    const projectsDiv = document.getElementById("projects");

    if (isElementInViewport(aboutDiv)) {
      setCurrentDiv("about");
    } else if (isElementInViewport(experienceDiv)) {
      setCurrentDiv("experience");
    } else if (isElementInViewport(projectsDiv)) {
      setCurrentDiv("projects");
    }
  });

  return (
    <StyledDiv
      px={isSmallWindow ? "80px" : "170px"}
      color="lightgrey"
      bg="#0c1525"
      display="flex"
      flexDirection={isSmallWindow ? "column" : "row"}
      alignItems="flex-start"
    >
      <StyledDiv
        width={isSmallWindow ? "100%" : "50%"}
        position={isSmallWindow ? "static" : "sticky"}
        top="100px"
        mt="100px"
      >
        <StyledDiv
          height={isSmallWindow ? "55vh" : "75vh"}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          width={isSmallWindow ? "100%" : "70%"}
        >
          <QuickInfo currentDiv={currentDiv} />
          <Socials />
        </StyledDiv>
      </StyledDiv>
      <div style={{ width: isSmallWindow ? "100%" : "50%" }}>
        <About />

        <Experience />
        <SectionBottomLink title="View Full CV" link={resume} />

        <Projects />
        <SectionBottomLink
          title="View All Projects"
          link="https://github.com/lilygostovic"
        />

        <Footer />
      </div>
    </StyledDiv>
  );
};
