
import styles from'./nav.module.css';

function NavigationMenu({page1,page2,page3,page4,page5}) {
  return (
    <nav className={styles.navbarcontainer}>
      <a href={page1} className={styles.navitem}>
        About
      </a>
      <a href={page2} className={styles.navitem}>
        Skills
      </a>
      <a href={page3} className={styles.navitem}>
        Projects
      </a>
      <a href={page4} className={styles.navitem}>
        Education
      </a>
      <a href={page5} className={styles.navitem}>
        Contact
      </a>
    </nav>
  );
}
export default NavigationMenu;