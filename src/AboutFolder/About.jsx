
import Card from '../card';
import styles from './about.module.css';
import useReveal, { revealStyle } from '../useReveal';
function AboutSelf() {
  const [ref, visible] = useReveal();
  return (<>
    <section ref={ref} style={revealStyle(visible)} className={styles.aboutcontainer}>
      <h1 className={styles.heading}>Hi I'm Shreyansh</h1>
      <section className={styles.content}>
        <div className={styles.box}>

          <Card
            text="🎓 CS & AI Student"
            desc="Enrolled at Scaler School of Tech & BITS Pilani. Passionate about full-stack engineering, clean web systems, and UI design."
            background="#FACC15"
            width="100%"
            height="100%"
          />


          <Card
            text="⚡ Core Tech Stack"
            desc="Languages: Java, C++, Python, JS. Web: HTML5, CSS3, React, Tailwind CSS. Tools: Git, GitHub, VS Code, Vercel."
            background="#FB923C"
            width="100%"
            height="100%"
          />

          <Card
            text="🚀 What I'm Learning"
            desc="Deepening Data Structures & Algorithms (DSA), practicing problem-solving on Codeforces, and exploring AI web workflows."
            background="#4ADE80"
            width="100%"
            height="100%"
          />


          <Card
            text="🎮 Beyond Code"
            desc="Based in Bengaluru, India. Passionate about strategy gaming (Minecraft), audio production, and building side projects."
            background="#C084FC"
            width="100%"
            height="100%"
          />
        </div>

        <div className={styles.profileColumn}>
          <img src="/Images/profile.jpg" alt="hello" className={styles.profile} />
          <div className={styles.infoCardSmall}>
            Scaler School of Technology
          </div>
          <div className={styles.infoCardLarge}>
            Degree: Bsc in Computer Science<br />
            Bits Pilani
          </div>

        </div>

      </section>

    </section>
  </>);
}
export default AboutSelf;