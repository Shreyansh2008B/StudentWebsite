
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

    <div style={{scrollBehavior:"smooth"}}>

      <NavigationMenu page1="#about" page2="#skills" page3 ="#projects" page4="#edu" page5="#contact"></NavigationMenu>
      <div id="about" style={{ display: "flex", justifyContent: "center" }}>
        <AccordionHeader  heading={"About"}></AccordionHeader>
      </div>
      <AboutSelf></AboutSelf>
      <div id = "skills" style={{ display: "flex", justifyContent: "center" }}>
        <AccordionHeader heading={"Skills"}></AccordionHeader>
      </div>
      <Skills></Skills>
      <div id ="projects"style={{ display: "flex", justifyContent: "center" }}>
        <AccordionHeader heading={"Projects"}></AccordionHeader>
      </div>
      <Project></Project>
      <div id = "edu"style={{ display: "flex", justifyContent: "center" }}>
        <AccordionHeader heading={"Education"}></AccordionHeader>
      </div>
      <Education></Education>
      <div id="contact" style={{ display: "flex", justifyContent: "center" }}>
        <AccordionHeader heading={"Contact"}></AccordionHeader>
      </div>
      <Contact></Contact>


    </div>
  );
}

export default App
