import React from 'react';
import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import hipsster from '../../assets/hipsster.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id='projects' className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} 
        link={"https://github.com/TshepangChou/Personal-Projects"} h3="Personal Portfolio"
        p="Link to My personal Projects Repository on GitHub"/>

        <ProjectCard src={hipsster} 
        link={"https://github.com/TshepangChou/personal-website"} h3="Personal Website"
        p="Link to My personal website Repository on GitHub"/>
      </div>
    </section>
  )
}

export default Projects