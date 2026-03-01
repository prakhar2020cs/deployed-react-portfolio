import { getImageUrl } from '../../utils';
import { useTypewriter } from '../../hooks/useTypewriter';
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedin, FaTwitter, FaDownload } from 'react-icons/fa';

function Hero() {
  const roles = [
    "React Specialist",
    "ASP.NET Core Developer"
  ];

  const currentRole = useTypewriter(roles.join(' '), 150, 2000);

  const handleDownloadResume = () => {
    // In a real app, this would point to your actual resume file
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1EybPIEJaz6BxG2iQrUr6lckUzA_ItPfc/view?usp=drive_link'; // Update this path to your actual resume
    link.download = 'Prakhar-Sharma-Resume.pdf';
    link.target = '_blank';
    link.click();
    
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.backgroundElements}>
        <div className={styles.gradientBlob1}></div>
        <div className={styles.gradientBlob2}></div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prakhar Sharma</h1>
        <h2 className={styles.subtitle}>{currentRole}</h2>
        <p className={styles.description}>
          Full-Stack Developer with 1+ year of experience building scalable web applications using ASP.NET Core, React.js, and SQL Server. Strong backend expertise in designing RESTful APIs, implementing authentication, authorization, and applying clean architecture.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryBtn} onClick={handleDownloadResume}>
            <FaDownload /> Download Resume
          </button>
          <button
            className={styles.secondaryBtn}
            onClick={scrollToContact}
          >
            Contact Me
          </button>
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