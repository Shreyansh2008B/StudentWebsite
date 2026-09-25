import Card from "../card";
import styles from './skills.module.css';
import useReveal, { revealStyle } from '../useReveal';

function Skills() {
  const [ref, visible] = useReveal();
  return (
    <section ref={ref} style={revealStyle(visible)} className={styles.Skillscontainer}>

      {/* Card 1: Web & Frontend */}
      <Card
        text="🌐 React, HTML & CSS Architecture"
        desc="Building responsive, mobile-first web interfaces using React, semantic HTML5, custom CSS3 (Flexbox & CSS Grid), Tailwind CSS, and custom component systems."
        background="#38BDF8"
        width="100%"
        height="auto"
      />

      {/* Card 2: Core Languages & Logic */}
      <Card
        text="☕ Java, C++ & Algorithmic Logic"
        desc="Writing structured object-oriented code in Java and C++ to implement Data Structures & Algorithms (DSA), optimize logic, and solve computational challenges."
        background="#F43F5E"
        width="100%"
        height="auto"
      />

      {/* Card 3: Developer Tools & Workflows */}
      <Card
        text="🛠️ Tools, Environment & APIs"
        desc="Managing version control with Git & GitHub, organizing projects in VS Code, deploying web apps on Vercel, and leveraging generative AI APIs."
        background="#A855F7"
        width="100%"
        height="auto"
      />

    </section>
  );
}

export default Skills;