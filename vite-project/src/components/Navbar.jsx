import React, {useState} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../utils";

const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);

  return <nav className={styles.navbar}>
    <a className={styles.title} href="/">Portfolio</a>
    <div className={styles.menu}>
        <img 
            className={styles.menuBtn} 
            src={
                menuOpen
                ? getImageUrl("nav/closeIcon.png")  // when menuopen = true
                : getImageUrl("nav/menuIcon.png")   //when menuopen = false
            } 
            alt="menu-button"
            onClick={()=>setMenuOpen(!menuOpen)}  // set menuopen's value opposite of current value(true/false),onclick!, for changing menu icon 
        />
        <ul className={`&{styles.menuItems} `}>
            <li>
                <a href="#about" >About</a>
            </li>
            <li>
                <a href="#experience" >Experience</a>
            </li>
            <li>
                <a href="#projects" >Projects</a>
            </li>
            <li>
                <a href="#about" >Contacts</a>
            </li>
        </ul>
    </div>
  </nav>;
    
    
  
};

export default Navbar
