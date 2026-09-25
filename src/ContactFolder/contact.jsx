import Card from "../card";
import styles from './contact.module.css';

function Contact() {
  return (
    <section className={styles.Contactcontainer}>
      {/* Contact Intro Card */}
      <Card
        text="📬 Let's Connect & Build Together"
        desc="Whether you want to collaborate on a full-stack project, discuss Data Structures & Algorithms, or talk web architecture and UI design, my inbox is always open!"
        background="#F43F5E"
        width="100%"
        height="auto"
      />

      {/* Social Links Row */}
      <div className={styles.linksGrid}>
        <a 
          href="mailto:Shreyan2752s@gmail.com" 
          className={styles.contactBtn}
          style={{ backgroundColor: '#FACC15' }}
        >
          ✉️ Send Email
        </a>

        <a 
          href="https://github.com/Shreyansh2008B" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.contactBtn}
          style={{ backgroundColor: '#4ADE80' }}
        >
          🐙 GitHub
        </a>

        <a 
          href="https://www.linkedin.com/in/shreyansh-bhawsar-42972934a" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.contactBtn}
          style={{ backgroundColor: '#38BDF8' }}
        >
          💼 LinkedIn
        </a>

        <a 
          href="https://x.com/your-username" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.contactBtn}
          style={{ backgroundColor: '#C084FC' }}
        >
          🌐 X / Twitter
        </a>
      </div>
    </section>
  );
}

export default Contact;