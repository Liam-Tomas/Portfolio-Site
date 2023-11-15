import React, { useState } from "react";
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Sections/Home';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/Theme/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Theme/Theme"
import { useDarkMode } from "./components/Theme/useDarkMode"
import ProjectSection from './components/Sections/ProjectSection'; // Adjust the path accordingly
import SideFooter from './components/SideFooter'
import ContactSection from './components/Sections/ContactSection'; // Adjust the path accordingly
import Footer from './components/Footer'
import Spotlight from './components/Spotlight'
import ResumeModal from "./components/Modals/ResumeModal";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <div className="App">
          <NavBar setModalOpen={setModalOpen} theme={theme} toggleTheme={themeToggler} />
          <ResumeModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
          <Home id="home" />
          <ProjectSection id="work" />
          <ContactSection id="contact" />
          {/* <Spotlight /> */}
          <SideFooter />
          <Footer />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
