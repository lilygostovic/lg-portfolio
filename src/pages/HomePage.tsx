import {
  About,
  Experience,
  Footer,
  QuickInfo,
  ResumeLink,
} from "../components";

export const HomePage = () => {
  return (
    <div
      style={{
        paddingLeft: "170px",
        paddingRight: "170px",
        paddingTop: "100px",
        color: "lightgrey",
        backgroundColor: "#0c1525",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          width: "50%",
          position: "sticky",
          top: "100px",
        }}
      >
        <QuickInfo />
      </div>
      <div style={{ width: "50%" }}>
        <About />
        <Experience />
        <ResumeLink />

        <Footer />
      </div>
    </div>
  );
};
