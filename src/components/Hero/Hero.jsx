import React from 'react';
import styles from "./Hero.module.css";
import { getImageUrl } from '../../utils';
import { useTypewriter } from 'react-simple-typewriter'

export const Hero = () => {
    const [typeEffect] = useTypewriter({
        words: ['Misia Callista'],
        loop: {},
        typeSpeed: 200,
        deleteSpeed: 100
    })
    return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
                Hi, I'm
                <span> {typeEffect} </span>
            </h1>
            <p className={styles.description}>
                I am a 5th semester Computer Science student at BINUS University
            </p>
            <a href="mailto:misiabdipatra@gmail.com" className={styles.contactBtn}>
                Contact Me
            </a>
        </div>
        <img 
            src={getImageUrl("hero/heroImage.png")} 
            alt="Hero image of me" 
            className={styles.heroImg}
        />
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
    );
};
