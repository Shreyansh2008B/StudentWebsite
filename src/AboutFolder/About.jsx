import Card from '../card';
import useReveal, { revealStyle } from '../useReveal';
import styles from './about.module.css';

function AboutSelf() {
  const [ref, visible] = useReveal();

  return (
    <>
      <section ref={ref} style={revealStyle(visible)} className={styles.aboutcontainer}>


        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.25rem' }}>
          {/* Codeforces */}
          <a href="https://codeforces.com/profile/Shreyan2752s" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card text="⚔️ Codeforces" desc="Rating:371" background="#0B132B" textcolor="	#00EB9B" desccolor="#ffffff" width="auto" height="auto" />
          </a>

          {/* LeetCode */}
          <a href="https://leetcode.com/u/shreyan2752s/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card text="🧩 LeetCode" desc="Rank:5,000,000" background="#1C2541" textcolor="#FF007F " desccolor="#ffffff" width="auto" height="auto" />
          </a>

          {/* CodeChef */}
          <a href="https://www.codechef.com/users/shreyan2752s" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card text="👨‍🍳 CodeChef" desc="Rank:Null" background="#22252A "  textcolor="#3A86FF" desccolor="#ffffff" width="auto" height="auto" />
          </a>

          {/* AtCoder */}
          <a href="https://atcoder.jp/users/shreyan2752s" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Card text="🎯 AtCoder" desc="Rating:Null" background="#111827 "  desccolor="#ffffff" textcolor="#FFBE0B " width="auto" height="auto" />
          </a>
        </div>


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
              desc="Deepening Data Structures & Algorithms (DSA), practicing problem-solving across competitive platforms, and exploring AI web workflows."
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
            <img src="/Images/profile.jpg" alt="Shreyansh" className={styles.profile} />
            <div className={styles.infoCardSmall}>
              Scaler School of Technology
            </div>
            <div className={styles.infoCardLarge}>
              Degree: B.Sc in Computer Science<br />
              BITS Pilani
            </div>
          </div>

        </section>
      </section>
    </>
  );
}

export default AboutSelf;