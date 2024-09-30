import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from '../../utils';

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <h2 className={styles.title}>About</h2>
            <p className={styles.description}>
                A 5th-semester Computer Science student at 
                Bina Nusantara University, passionate about the 
                intersection of computer science, social media, 
                and data processing. I've developed leadership and 
                communication skills as a Freshmen Leader and 
                copywriter, and I’m committed to continuous learning 
                and making a positive impact in my community. Reach out 
                if you'd like to work together!
            </p>
            <div className={styles.content}>
                <img 
                    src={getImageUrl("about/aboutImage.png")} 
                    alt="Me sitting with a laptop" 
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Data Scientist</h3>
                            <p>Analyzes data to extract insights and build predictive models.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Front End Developer</h3>
                            <p>Builds interactive, user-friendly websites using HTML, CSS, and JavaScript.</p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/uiIcon.png")} alt="UI icon" 
                        />
                        <div className={styles.aboutItemText}>
                            <h3>UI/UX Designer</h3>
                            <p>Designs user-centered digital interfaces for seamless experiences.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};
