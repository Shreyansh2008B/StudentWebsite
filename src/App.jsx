
import AboutSelf from './AboutFolder/About.jsx';
import './App.css';
import NavigationMenu from './NavBar/Navbar.jsx';
import Project from './ProjectsFolder/projects.jsx';
import Skills from './SkillsFolder/Skillscard.jsx';
import AccordionHeader from './TextBox';
import Education from './EducationFolder/EducationFile.jsx';
import Contact from './ContactFolder/contact.jsx';
function App() {


  return (

    <>

      <NavigationMenu></NavigationMenu>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AccordionHeader heading={"About"}></AccordionHeader>
      </div>
      <AboutSelf></AboutSelf>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AccordionHeader heading={"Skills"}></AccordionHeader>
      </div>
      <Skills></Skills>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AccordionHeader heading={"Projects"}></AccordionHeader>
      </div>
      <Project></Project>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AccordionHeader heading={"Education"}></AccordionHeader>
      </div>
      <Education></Education>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <AccordionHeader heading={"Contact"}></AccordionHeader>
      </div>
      <Contact></Contact>


    </>
  );
}

export default App
