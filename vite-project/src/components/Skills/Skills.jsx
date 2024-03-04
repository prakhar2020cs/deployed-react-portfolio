import skills from '../../data/skills.json';
import { getImageUrl } from '../../utils';
import styles from '../Skills/Skills.module.css';

export const Skills = () => {
  return (
    <section className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            <div className={styles.skills}>{
                skills.map((skill,id)=>{
                   return (
                   <div className= {styles.skill} key={id}>
                    <div className={styles.skillImageContainer} > 
                    <img src={getImageUrl(skill.imageSrc)} alt={skills.title} /> 
                    </div>
                    <p>{skill.title}</p>
                   </div>
                   )

                })
                
                }</div>
           
        </div>
        
        
    </section>
  );
};
