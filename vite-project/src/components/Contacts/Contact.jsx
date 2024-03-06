import { getImageUrl } from "../../utils";
import styles from '../Contacts/Contact.module.css'
export const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
       <div className={styles.heading}><h2>Contact</h2>
         <p>Feel free to contact me!</p>
         </div> 
        <div className={styles.links}>
           <div className={styles.link}>
               <img src={getImageUrl("contact/linkedinIcon.png")} alt="" />   
                <a target="_blank" className={styles.link} href="https://www.linkedin.com/in/prakhar-sharma-96a831272/">Linkedin</a></div>
            <div className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="" />
            <a className={styles.link} target="_blank" href="https://github.com/prakhar2020cs">Github</a>
            </div>
            <div className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="" />
            <a target="_blank" className={styles.link} href="mailto:prakhar06035@gmail.com">Email</a>
            </div>
        </div>
    </section>
  );
}
