import Card from '../card';
import styles from './eduction.module.css';

function Education() {
  return (
    <section className={styles.Educationcontainer}>
     
      <Card
        text="🏫 Scaler School of Technology"
        desc="CS & AI Undergraduate Program (2026–Present). Focusing on Full-Stack Web Engineering, Object-Oriented Programming (Java), Data Structures & Algorithms, and System Architecture."
        background="#38BDF8"
        width="100%"
        height="auto"
      />

      
      <Card
        text="🎓 BITS Pilani"
        desc="B.Sc. in Computer Science. Studying core computational theory, discrete mathematics, software engineering fundamentals, and systems programming logic."
        background="#C084FC"
        width="100%"
        height="auto"
      />
    </section>
  );
}

export default Education;