import Card from '../card';
import styles from './about.module.css';
function AboutSelf() {
  return (<>
    <section className={styles.aboutcontainer}>
      <h1 className='ml-[100px] mt-[20px] text-[3.5vw] font-mono'>Hi I'm Shreyansh</h1>
      <section className='flex justify-around flex-wrap'>
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

        <div>
          <img src="public/Images/profile.jpg" alt="hello" className={styles.profile} /><br />
          <div className="shadow-[4px_4px_0px_0px_rgb(0,0,0)] border-2 border-solid border-black rounded-[0.75rem] w-[20vw] h-[5vw] text-[1.26vw] flex justify-center items-center font-mono bg-[#06B6D4]">
            Scaler School of Technology

          </div>
          <br></br>
          <div className="shadow-[4px_4px_0px_0px_rgb(0,0,0)] border-2 border-solid border-black rounded-[0.75rem] w-[20vw] h-[10vw] text-[1.6vw] flex justify-center items-center font-mono  text-center bg-[#84CC16]">
            Degree: Bsc in Computer Science
            Bits Pilani


          </div>

        </div>

      </section>

    </section>
  </>);
}
export default AboutSelf;