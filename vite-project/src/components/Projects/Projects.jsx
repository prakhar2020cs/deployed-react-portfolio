import React from 'react'
import projects from '../../data/projects.json'
import { getImageUrl } from '../../utils';
import styles from '../Projects/Projects.module.css';

export const Projects = () => {
  return (
    <section className={styles.container}> 
        <h2>Projects</h2>
        <div>{
        projects.map((project,id)=>{
            return (
                <div key={id}>
                    <img
                     src={getImageUrl(project.imageSrc)} 
                     alt={`image of ${project.title}`}
                     />
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul>
                        {project.skills.map((skill,id)=>{
                            <li key={id}>{skill}</li>;
                        })}
                    </ul>
                    <div>
                        <a href ={project.source}>Source</a>
                        {/* <a href ={project.demo}></a> */}
                    </div>

                </div>
            );
        })
        }</div>
    </section>
    
  );
};
