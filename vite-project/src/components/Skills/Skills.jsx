import React from 'react'
import skills from '../../data/skills.json';

export const Skills = () => {
  return (
    <section id="skills">
        <h2>Skills</h2>
        <div>
            <div>
                {skills.map((skill,id)=>{
                    return(
                        <div key={id}>
                            <div>
                                <img src={getImageUrl(skill.imagesrc) alt={skill.name}}></img>
                                <p>{skill.title}</p>
                            </div>
                            
                            
                        
                    );}
            
                </div>
            
        </div>
    </section>
  )
}
