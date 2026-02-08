import { useState } from 'react';
import projectsData from '../../data/projects.json';
import { getImageUrl } from '../../utils';
import styles from './Projects.module.css';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  // Get all unique skills for filtering
  const allSkills = [...new Set(projectsData.flatMap(project => project.skills))];
  const filters = ['all', ...allSkills];
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.skills.includes(activeFilter));
  
  const getProjectStats = () => {
    return {
      totalProjects: projectsData.length,
      technologies: new Set(projectsData.flatMap(p => p.skills)).size,
      yearsOfExperience: '1+' // You can calculate this dynamically
    };
  };
  
  const stats = getProjectStats();

  return (
    <section id="projects" className={styles.container}>
      <div className={styles.backgroundDecoration}>
        <div className={styles.decorationElement1}></div>
        <div className={styles.decorationElement2}></div>
      </div>
      
      <div className={styles.header}>
        <h2 className={styles.title}>My Projects</h2>
        <p className={styles.subtitle}>
          Here are some of my recent projects showcasing my skills and expertise in web development
        </p>
      </div>
      
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>{stats.totalProjects}</div>
          <div className={styles.statLabel}>Projects Completed</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>{stats.technologies}</div>
          <div className={styles.statLabel}>Technologies Used</div>
        </div>
        <div className={styles.statItem}>
          <div className={styles.statNumber}>{stats.yearsOfExperience}</div>
          <div className={styles.statLabel}>Years Experience</div>
        </div>
      </div>
      
      <div className={styles.filters}>
        {filters.map(filter => (
          <button
            key={filter}
            className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter === 'all' ? 'All Projects' : filter}
          </button>
        ))}
      </div>
      
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <div 
            className={styles.projectCard}
            key={project.title}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <img 
              src={getImageUrl(project.imageSrc)} 
              alt={project.title}
              className={styles.projectImage}
              onError={(e) => {
                e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200" viewBox="0 0 400 200" fill="none"><rect width="400" height="200" fill="%231e293b"/><path d="M100 80 L180 120 L300 60" stroke="white" stroke-width="3" fill="none"/></svg>';
              }}
            />
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.skillsContainer}>
                {project.skills.map(skill => (
                  <span key={skill} className={styles.skillTag}>
                    <FaCode style={{ marginRight: '4px' }} />
                    {skill}
                  </span>
                ))}
              </div>
              <div className={styles.projectActions}>
                <a 
                  href={project.source} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.githubBtn}
                >
                  <FaGithub /> Source Code
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.demoBtn}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};