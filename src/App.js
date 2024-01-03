import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection/hero.js";
import Skills from "./components/Skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
import Experience from "./components/Experience";
import Education from "./components/Education/education.js";
import ProjectDetails from "./components/ProjectDetails/projectDeatils";
import styled from "styled-components";
import Projects from "./components/Projects/projects.js";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal);
  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            
            <Experience />
          </Wrapper>
            <Projects/>
            <Wrapper>
            <Education />
              <Contact/>
            </Wrapper>
            <Footer />
          {openModal.state 
          && <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
