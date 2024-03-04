import React from 'react'
import styles from '../Contacts/Contact.module.css'
export const Contact = () => {
  return (
    <section className={styles.contacts}>
       <div className={styles.heading}><h2>Contacts</h2></div> 
        <div className={styles.links}>
            <a href="">Linkedin</a>
            <a href="">Github</a>
            <a href="">Email</a>
        </div>
    </section>
  );
}
