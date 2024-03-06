import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  // eslint-disable-next-line react/prop-types
  project: { title, imageSrc, description, skills, source , demo},
}) => {
  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
             {
             skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
                );
             })}
      </ul>
      <div className={styles.links}>
        <a target="_blank" href={source} className={styles.link}>
          Source
        </a>
        <a target="_blank" href={demo} className={styles.link}>
          Demo
        </a>
     
      </div>
    </div>
  );
};