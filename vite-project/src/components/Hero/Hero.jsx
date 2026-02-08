import { getImageUrl } from '../../utils';
import { useTypewriter } from '../../hooks/useTypewriter';
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';

function Hero() {
  const roles = [
    "Full Stack Developer",
    "React Specialist",
    "ASP.NET Core Developer",
    "Problem Solver"
  ];
  
  const currentRole = useTypewriter(roles.join(' '), 150, 2000);
  
  const handleDownloadResume = () => {
    // In a real app, this would point to your actual resume file
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1cpsnA2BL5q99mbtldpnDaz9YuzNqyZ41/view?usp=drive_link'; // Update this path to your actual resume
    link.download = 'Prakhar-Sharma-Resume.pdf';
    link.target = '_blank';
    link.click();


  };

  return (
    <section className={styles.container}>
      <div className={styles.backgroundElements}>
        <div className={styles.gradientBlob1}></div>
        <div className={styles.gradientBlob2}></div>
      </div>
      
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prakhar</h1>
        <h2 className={styles.subtitle}>{currentRole}</h2>
        <p className={styles.description}>
          I'm a passionate developer specializing in modern web technologies. 
          I build scalable applications using React, ASP.NET Core, and cloud technologies.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn} onClick={handleDownloadResume}>
            <FaDownload /> Download Resume
          </button>
          <a 
            className={styles.secondaryBtn} 
            target="_blank" 
            href="mailto:prakhar06035@gmail.com"
          >
            Contact Me
          </a>
        </div>
        <div className={styles.socialLinks}>
          <a 
            href="https://github.com/prakhar2020cs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
          >
            <FaGithub />
          </a>
          <a 
            href="https://linkedin.com/in/prakhar-sharma-96a831272" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
          >
            <FaLinkedin />
          </a>
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.socialLink}
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      
      <img 
        className={styles.heroImg} 
        src={getImageUrl("hero/heroImage.jpg")} 
        alt="Prakhar Sharma" 
      />
    </section>
  );
}

export default Hero