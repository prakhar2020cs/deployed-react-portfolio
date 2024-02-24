import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css";

function Hero() {
  return <section className={styles.container}>
    <div className={styles.content}>
    <h1 className={styles.title}>Hi, I'm Prakhar</h1>
    <p className={styles.description}>I'm a Web-Developer. I have made multiple projects using React, Bootstrap, HTML, CSS and Javascript </p>
    <a className={styles.contactBtn} href="mailto:prakhar06035@gmail.com">Contact Me</a>  
    </div> 
    <img className={styles.heroImg} src={getImageUrl("hero/heroImage.jpg")} alt="Hero"/>
    <div className={styles.topBlur}/>
    <div className={styles.bottomBlur}/>
 </section>
}

export default Hero
