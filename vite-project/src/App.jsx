import Hero from './components/Hero/Hero.jsx'
import styles from  './App.module.css';
import Navbar from './components/Navbar';

function App() {
 

  return(
    <div className={styles.App}>
 <Navbar/>
  <Hero/>
  </div>
  );
}

export default App;
