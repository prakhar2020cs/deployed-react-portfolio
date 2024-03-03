import React from 'react'
import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';

export const Skills = () => {
  return (
    <section id="skills">
        <h2>Skills</h2>
        <div>
            <div>{
                skills.map((skill,id)=>{
                   return (
                   <div key={id}>
                    <div> <img src={getImageUrl(skills.imageSrc)} alt={skills.title} /> </div>
                    <p>{skills.title}</p>
                   </div>
                   );

                })
                
                };</div>
           
        </div>
        
        
    </section>
  );
};
