import Hero from './components/Hero/Hero.jsx';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { Skills } from './components/Skills/Skills.jsx';
import { Projects } from './components/Projects/Projects.jsx';
import { Contact } from './components/Contacts/Contact.jsx';
import Particles from './components/Particles/Particles.jsx';
import ScrollAnimation from './components/ScrollAnimation/ScrollAnimation.jsx';
//import About from './components/About/About.jsx';

function App() {
  return (
    <div className={styles.App}>
      <Particles />
      <Navbar />
      <Hero />
      <ScrollAnimation delay={0.2}>
        <Skills />
      </ScrollAnimation>
      <ScrollAnimation delay={0.4}>
        <Projects />
      </ScrollAnimation>
      <ScrollAnimation delay={0.6}>
        <Contact />
      </ScrollAnimation>
      {/*<About/>*/}
    </div>
  );
}

export default App;
