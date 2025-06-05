import React from 'react';
import '../style/css/project-component.css';
import ProjectItem from "./project-item";
import Friendly from '../style/picture/Friendly.png';
import CGJ2022 from '../style/picture/CGJ20222.png';
import site2 from '../style/picture/site_2.png';
const ProjectComponent_3 = () => {
    const projects = [
        {
            title: 'Summer Game Jam 2023 C#',
            image: Friendly,
            gridColumn: '1 / span 2', // Occupe les 2 premières colonnes en haut
            gridRow: '1 / span 1', // Uniquement en haut
            colorTitle: 'white',
            url: 'https://github.com/Akkuun/Code_Game_Jam_Ete_2022'
        },
        {
            title: 'Code Game Jam 2022 C#',
            image: CGJ2022,
            gridColumn: '2 / span 1',
            gridRow: '1 / span 2', // Uniquement en bas
            colorTitle: 'white',
            url: 'https://github.com/Akkuun/CodeGameJam2022'
        },
        {
            title: 'Personal portfolio React',
            image: site2,
            gridColumn: '2 / span 1', // Uniquement la première colonne
            gridRow: '1 / span 1', // Uniquement en bas
            colorTitle: 'white',
            url: 'https://github.com/Akkuun/PortFolio_React_Duban'
        }
    ];

    return (
        <div className="project-container3">
            {projects.map((project, index) => (
                <ProjectItem
                    key={index}
                    title={project.title}
                    image={project.image}
                    gridColumn={project.gridColumn}
                    gridRow={project.gridRow}
                    colorTitle={project.colorTitle}
                    url={project.url}
                />
            ))}
            <div id="project-title-3">Personal <br />projects</div>
        </div>
    );
};

export default ProjectComponent_3;