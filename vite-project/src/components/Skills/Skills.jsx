import { useState, useEffect } from 'react';
import skillsData from '../../data/skills.json';
import { getImageUrl } from '../../utils';
import styles from './Skills.module.css';

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleSkills, setVisibleSkills] = useState([]);
  
  // Get unique categories
  const categories = ['all', ...new Set(skillsData.map(skill => skill.category))];
  
  // Filter skills based on active category
  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);
  
  // Animation effect for skill levels
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleSkills(filteredSkills);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [activeCategory, filteredSkills]);
  
  const getCategoryLabel = (category) => {
    const labels = {
      'frontend': 'Frontend',
      'backend': 'Backend',
      'database': 'Database',
      'other': 'Other Technologies',
      'all': 'All Skills'
    };
    return labels[category] || category;
  };
  
  const getSkillLevel = (skillTitle) => {
    const levels = {
      'HTML': 95,
      'CSS': 90,
      'JavaScript': 85,
      'React': 88,
      'Bootstrap': 80,
      'ASP.NET Core': 82,
      'Entity Framework': 78,
      'Dapper': 75,
      'SQL': 85,
      'MongoDB': 70,
      'Firebase': 75,
      'PWA': 80,
      'IndexedDB': 72,
      'Dexie.js': 78
    };
    return levels[skillTitle] || 70;
  };

  return (
    <section id="skills" className={styles.container}>
      <div className={styles.backgroundDecoration}>
        <div className={styles.decorationBlob1}></div>
        <div className={styles.decorationBlob2}></div>
      </div>
      
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>My Skills</h2>
        <p className={styles.subtitle}>
          Here are the technologies and tools I've mastered through hands-on experience and continuous learning
        </p>
      </div>
      
      <div className={styles.categories}>
        {categories.map(category => (
          <button
            key={category}
            className={`${styles.categoryBtn} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {getCategoryLabel(category)}
          </button>
        ))}
      </div>
      
      <div className={styles.skillsGrid}>
        {visibleSkills.map((skill, index) => (
          <div 
            className={styles.skillCard}
            key={skill.title}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className={styles.skillImageContainer}>
              <img 
                src={getImageUrl(skill.imageSrc)} 
                alt={skill.title} 
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>';
                }}
              />
            </div>
            <h3 className={styles.skillName}>{skill.title}</h3>
            <div className={styles.skillLevel}>
              <div 
                className={styles.skillLevelFill}
                style={{
                  width: `${getSkillLevel(skill.title)}%`,
                  animation: `fillBar 1s ease-out ${index * 0.1}s forwards`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};