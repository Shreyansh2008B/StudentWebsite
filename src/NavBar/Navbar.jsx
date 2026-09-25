
import styles from'./nav.module.css';

function NavigationMenu() {
  return (
    <nav className={styles.navbarcontainer}>
      <a href="#about" className={styles.navitem}>
        About
      </a>
      <a href="#skills" className={styles.navitem}>
        Skills
      </a>
      <a href="#projects" className={styles.navitem}>
        Projects
      </a>
      <a href="#education" className={styles.navitem}>
        Education
      </a>
      <a href="#contact" className={styles.navitem}>
        Contact
      </a>
    </nav>
  );
}
export default NavigationMenu;