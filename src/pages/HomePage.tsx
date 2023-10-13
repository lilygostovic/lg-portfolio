import resume from "../documents/resume.pdf";
import { useState } from "react";

import {
  About,
  Experience,
  Footer,
  Projects,
  QuickInfo,
  SectionBottomLink,
  StyledDiv,
} from "../components";

export const HomePage = () => {
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
      px="170px"
      color="lightgrey"
      bg="#0c1525"
      display="flex"
      flexDirection="row"
      alignItems="flex-start"
    >
      <StyledDiv width="50%" position="sticky" top="100px">
        <QuickInfo currentDiv={currentDiv} />
      </StyledDiv>
      <div style={{ width: "50%" }}>
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
