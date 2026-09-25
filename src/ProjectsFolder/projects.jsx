import Card from "../card";
import styles from './projects.module.css';

function Project() {
    return (
        <section className={styles.Projectcontainer}>

            <div className={styles.cardWrapper}>
                <a
                    href="https://github-explorer-one-dun.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                >
                    <Card
                        text="🔍 GitHub Profile Explorer"
                        desc="GitHub Profile Explorer is a lightweight, frontend-focused developer tool that provides instant visual summaries of any GitHub user. By leveraging dynamic API calls, state management in React, and clean CSS component styling, it turns raw profile JSON into an interactive, readable developer dashboard."
                        background="#38BDF8"
                        width="100%"
                        height="auto"
                    />
                </a>
            </div>


            <div className={styles.cardWrapper}>
                <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                >
                    <Card
                        text="🌐 Student Web Portfolio"
                        desc="A personal portfolio created for Builders Day using React, custom CSS Grid/Flexbox layouts, and Neubrutalist card UI components with zero external UI dependencies."
                        background="#FACC15"
                        width="100%"
                        height="auto"
                    />
                </a>
            </div>


            <div className={styles.buttonContainer}>
                <a
                    href="https://github.com/Shreyansh2008B"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewAllBtn}
                >
                    View All Projects 🚀
                </a>
            </div>
        </section>
    );
}

export default Project;